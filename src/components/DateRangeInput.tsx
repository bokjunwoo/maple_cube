import { useState } from 'react';
import { getMapleCubeUrl } from '../api/mapleAPI';
import { CubeHistory, CubeHistoryResponseDTO } from '../api/api';
import {
  isValidSelectionDate,
  isEndDateGreaterThanStartDate,
  isValidDateFormat,
  isToday,
} from '../util/util';

const CharacterItem = ({ targetItem }: any) => {
  return <li>{targetItem}</li>;
};

const CharacterDetail = ({ characterName, targetItems }: any) => {
  return (
    <div>
      <h3>{characterName}</h3>
      <ul>
        {targetItems.map((item: any, index: any) => (
          <CharacterItem key={index} targetItem={item} />
        ))}
      </ul>
    </div>
  );
};

export const DateRangeInput = () => {
  const key = process.env.REACT_APP_API_KEY || '';

  const [data, setData] = useState<CubeHistoryResponseDTO>();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const isValidSelection = isValidSelectionDate(startDate);
  const isGreaterThan = isEndDateGreaterThanStartDate(startDate, endDate);
  const isValidFormat = isValidDateFormat(endDate);
  const isNotLater = isToday(endDate);

  const fetchAllDataInRange = async (): Promise<void> => {
    let totalCount = 0;
    const allCubeHistories: CubeHistory[] = [];

    const currentDate = new Date(startDate);
    const lastDate = new Date(endDate);

    while (currentDate <= lastDate) {
      const dateString = currentDate.toISOString().split('T')[0];

      try {
        const response = await getMapleCubeUrl(dateString, key);

        totalCount += response.count ? response.count : 0;
        allCubeHistories.push(...response.cube_histories);

        currentDate.setDate(currentDate.getDate() + 1);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    setData({
      count: totalCount,
      cube_histories: allCubeHistories,
      next_cursor: '',
    });
  };

  const characterNames = [
    ...new Set(data?.cube_histories.map((item) => item.character_name)),
  ];

  console.log(characterNames);
  console.log(data);

  const [selectedWorld, setSelectedWorld] = useState('');

  const handleWorldButtonClick = (characterName: string) => {
    setSelectedWorld(characterName);
  };

  return (
    <>
      <h1>검색하고 싶은 날짜</h1>
      <input type="date" value={startDate} onChange={handleStartDateChange} />
      <input type="date" value={endDate} onChange={handleEndDateChange} />
      <button onClick={fetchAllDataInRange}>검색</button>

      {!isValidSelection && <p>날짜를 2022-11-25일 이후로 선택해야합니다.</p>}
      {!isGreaterThan && <p>날짜가 잘못 입력되었습니다.</p>}
      {!isValidFormat && <p>날짜 형식이 잘못 입력되었습니다.</p>}
      {!isNotLater && <p>오늘날짜 이전일 까지 선택가능합니다.</p>}

      {characterNames.map((characterName) => (
        <button
          key={characterName}
          onClick={() => handleWorldButtonClick(characterName)}
        >
          {characterName}
        </button>
      ))}

      {selectedWorld && (
        <div>
          <h2>{selectedWorld}</h2>
          <ul>
            {[
              ...new Set(
                data?.cube_histories
                  .filter((item) => item.character_name === selectedWorld)
                  .map((item) => item.target_item)
              ),
            ].map((targetItem, index) => (
              <li key={index}>{targetItem}</li>
            ))}
          </ul>
        </div>
      )}

      {selectedWorld && (
        <CharacterDetail
          characterName={selectedWorld}
          targetItems={data?.cube_histories
            .filter((item) => item.character_name === selectedWorld)
            .map((item) => item.target_item)}
        />
      )}
    </>
  );
};

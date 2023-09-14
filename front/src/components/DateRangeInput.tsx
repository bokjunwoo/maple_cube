import { useState } from 'react';
import { getMapleCubeUrl } from '../api/mapleAPI';
import { CubeHistory, CubeHistoryResponseDTO } from '../api/api';
import {
  isValidSelectionDate,
  isEndDateGreaterThanStartDate,
  isValidDateFormat,
  isToday,
} from '../util/util';
import { SelectCharacter } from './SelectCharacter';
import { SelectItem } from './SelectItem';

export const DateRangeInput = () => {
  const key = process.env.REACT_APP_API_KEY || '';

  const [data, setData] = useState<CubeHistoryResponseDTO>();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleCharacterSelect = (characterName: string) => {
    setSelectedCharacter(characterName);
  };

  const handleItemSelect = (item: string) => {
    setSelectedItem(item);
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

  console.log(data);
  console.log('selectedCharacter', selectedCharacter);
  console.log('selectedItem', selectedItem);

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

      {data && (
        <h2>
          {startDate} ~ {endDate}로 조회된 총 큐브 사용내역은 {data.count}개
          입니다.
        </h2>
      )}

      {data && (
        <SelectCharacter
          data={data.cube_histories}
          onSelect={handleCharacterSelect}
          selectedCharacter={selectedCharacter}
        />
      )}

      {data && selectedCharacter !== '' && (
        <SelectItem
          data={data.cube_histories}
          onSelect={handleItemSelect}
          selectedCharacter={selectedCharacter}
          selectedItem={selectedItem}
        />
      )}
    </>
  );
};

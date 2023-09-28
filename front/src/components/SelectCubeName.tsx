import { CubeHistory } from '../api/api';
import { SelectCubeType } from './SelectCubeType';
import { RadioUI } from './ui/RadioUI';
import { cubeTypeNameInfo } from '../constants/cubeGuide';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  currentPageState,
  selectedCubeGradeState,
  selectedCubeNameState,
} from '../atom/cubeDataState';

type ListCubeTypeNameType = {
  data: CubeHistory[];
};

export const SelectCubeName = ({ data }: ListCubeTypeNameType) => {
  const [selectedCubeName, setSelectedCubeName] = useRecoilState(
    selectedCubeNameState
  );
  const setSelectedCubeGrade = useSetRecoilState(selectedCubeGradeState);
  const setCurrentPage = useSetRecoilState(currentPageState);

  const handleCubeTypeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCubeName(e.target.value);
    setSelectedCubeGrade('');
    setCurrentPage(1);
  };

  const cubeTypeCounts: { [cubeTypeName: string]: number } = {};
  // 데이터를 반복하여 개수를 계산
  data.forEach((item) => {
    const cubeTypeName = item.cube_type;
    if (cubeTypeCounts[cubeTypeName]) {
      cubeTypeCounts[cubeTypeName]++;
    } else {
      cubeTypeCounts[cubeTypeName] = 1;
    }
  });

  const cubeTypeNames = [...new Set(data.map((item) => item.cube_type))];

  const selectedCubeNames = data.filter(
    (item) => item.cube_type === selectedCubeName
  );

  return (
    <>
      <RadioUI
        data={cubeTypeNames}
        label="사용한 큐브"
        handleChange={handleCubeTypeSelect}
        countKeyValue={cubeTypeCounts}
        info={cubeTypeNameInfo}
        value={selectedCubeName}
      />

      {selectedCubeName && (
        <SelectCubeType
          data={selectedCubeNames}
          selectedCubeName={selectedCubeName}
        />
      )}
    </>
  );
};

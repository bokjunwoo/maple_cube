import { useState } from 'react';
import { CubeHistory } from '../api/api';
import { SelectCubeType } from './SelectCubeType';
import { RadioUI } from './ui/RadioUI';

type ListCubeTypeNameType = {
  data: CubeHistory[];
};

export const ListCubeType = ({ data }: ListCubeTypeNameType) => {
  const [selectedCubeType, setSelectedCubeType] = useState('');

  const handleCubeTypeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCubeType(e.target.value);
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

  const selectedCubeTypes = data.filter(
    (item) => item.cube_type === selectedCubeType
  );

  return (
    <>
      <RadioUI
        data={cubeTypeNames}
        label="사용한 큐브"
        handleChange={handleCubeTypeSelect}
        countKeyValue={cubeTypeCounts}
      />

      {selectedCubeType && (
        <SelectCubeType
          data={selectedCubeTypes}
          selectedCubeType={selectedCubeType}
        />
      )}
    </>
  );
};

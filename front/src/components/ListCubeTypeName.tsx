import { useState } from 'react';
import { CubeHistory } from '../api/api';
import { SelectCubeType } from './SelectCubeType';

type ListCubeTypeNameType = {
  data: CubeHistory[];
};

export const ListCubeType = ({ data }: ListCubeTypeNameType) => {
  const cubeTypeCounts: { [cubeTypeName: string]: number } = {};

  const [selectedCubeType, setSelectedCubeType] = useState('');

  const handleCubeTypeSelect = (cubeTypeName: string) => {
    setSelectedCubeType(cubeTypeName);
  };

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
      <h3>사용한 큐브</h3>
      <ul>
        {cubeTypeNames.map((cubeTypeName) => (
          <li
            key={cubeTypeName}
            onClick={() => handleCubeTypeSelect(cubeTypeName)}
          >
            {cubeTypeName} ({cubeTypeCounts[cubeTypeName] || 0}개)
          </li>
        ))}
      </ul>

      {selectedCubeType && (
        <SelectCubeType
          data={selectedCubeTypes}
          selectedCubeType={selectedCubeType}
        />
      )}
    </>
  );
};

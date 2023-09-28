import { useState } from 'react';
import { CubeHistory } from '../api/api';
import { SelectCubeGrade } from './SelectCubeGrade';
import { CUBE_NAME, cubeTypeInfo } from '../constants/cubeGuide';
import { RadioUI } from './ui/RadioUI';

type SelectCubeTypeType = {
  data: CubeHistory[];
  selectedCubeType: string;
};

export const SelectCubeType = ({
  data,
  selectedCubeType,
}: SelectCubeTypeType) => {
  const [selectedCubeGrade, setSelectedCubeGrade] = useState('');

  const handleCubeGradeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCubeGrade(e.target.value);
  };

  const optionGrade = [
    ...new Set(
      data.map(
        (item) =>
          (item.after_potential_options.length === 0 &&
            item.additional_potential_option_grade) ||
          (item.after_additional_potential_options.length === 0 &&
            item.potential_option_grade) ||
          ''
      )
    ),
  ];

  const gradeCounts: { [key: string]: number } = {};

  data.forEach((item) => {
    const grade =
      (item.after_potential_options.length === 0 &&
        item.additional_potential_option_grade) ||
      (item.after_additional_potential_options.length === 0 &&
        item.potential_option_grade);
    if (grade) {
      gradeCounts[grade] = (gradeCounts[grade] || 0) + 1;
    }
  });

  const potentialName =
    selectedCubeType === CUBE_NAME.QUESTIONABLE_ADDITIONAL_CUBE ||
    selectedCubeType === CUBE_NAME.ADDITIONAL_CUBE ||
    selectedCubeType === CUBE_NAME.WHITE_ADDITIONAL_CUBE
      ? '에디셔널'
      : '잠재능력';

  return (
    <>
      <RadioUI
        data={optionGrade}
        label="큐브 선택"
        handleChange={handleCubeGradeSelect}
        countKeyValue={gradeCounts}
        info={cubeTypeInfo}
      />

      {selectedCubeGrade && (
        <SelectCubeGrade
          data={data}
          selectedCubeGrade={selectedCubeGrade}
          potentialName={potentialName}
          selectedCubeType={selectedCubeType}
        />
      )}
    </>
  );
};

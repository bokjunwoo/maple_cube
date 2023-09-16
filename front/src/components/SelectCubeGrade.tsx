import { CubeHistory } from '../api/api';

type SelectCubeGradeType = {
  data: CubeHistory[];
  selectedCubeGrade: string;
  potentialName: string;
};

export const SelectCubeGrade = ({
  data,
  selectedCubeGrade,
  potentialName,
}: SelectCubeGradeType) => {
  const gradeName =
    potentialName === '에디셔널'
      ? 'additional_potential_option_grade'
      : 'potential_option_grade';

  const selectedGrades = data.filter(
    (item) => item[gradeName] === selectedCubeGrade
  );

  console.log('selectedGrades', selectedGrades);

  return <></>;
};

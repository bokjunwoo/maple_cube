import { CubeHistory } from '../api/api';
import { AccordionUI } from './ui/AccordionUI';

type SelectCubeGradeType = {
  data: CubeHistory[];
  selectedCubeGrade: string;
  potentialName: string;
  selectedCubeType: string;
};

export const SelectCubeGrade = ({
  data,
  selectedCubeGrade,
  potentialName,
  selectedCubeType,
}: SelectCubeGradeType) => {
  const gradeName =
    potentialName === '에디셔널'
      ? 'additional_potential_option_grade'
      : 'potential_option_grade';

  const selectedGrades = data.filter(
    (item) => item[gradeName] === selectedCubeGrade
  );

  return (
    <AccordionUI data={selectedGrades} selectedCubeType={selectedCubeType} />
  );
};

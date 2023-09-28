import { CubeHistory } from '../api/api';
import { AccordionUI } from './ui/AccordionUI';

type SelectCubeGradeType = {
  filterdata: CubeHistory[];
  selectedCubeGrade: string;
  potentialName: string;
  selectedCubeName: string;
};

export const SelectCubeGrade = ({
  filterdata,
  selectedCubeGrade,
  potentialName,
  selectedCubeName,
}: SelectCubeGradeType) => {
  const gradeName =
    potentialName === '에디셔널'
      ? 'additional_potential_option_grade'
      : 'potential_option_grade';

  const selectedGrades = filterdata.filter(
    (item) => item[gradeName] === selectedCubeGrade
  );

  return (
    <AccordionUI data={selectedGrades} selectedCubeName={selectedCubeName} />
  );
};

import { useRecoilState } from 'recoil';
import { CubeHistory } from '../api/api';
import { AccordionUI } from './ui/AccordionUI';
import { currentPageState } from '../atom/cubeDataState';
import { Box } from '@mui/material';
import { ITEMS_COUNT_PER_PAGE } from '../constants/units';
import { PaginationUI } from './ui/PaginationUI';

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
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  const gradeName =
    potentialName === '에디셔널'
      ? 'additional_potential_option_grade'
      : 'potential_option_grade';

  const selectedGrades = filterdata.filter(
    (item) => item[gradeName] === selectedCubeGrade
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * ITEMS_COUNT_PER_PAGE;
  const endIndex = startIndex + 20;
  const currentData = selectedGrades.slice(startIndex, endIndex);

  const selectedGradesLength = selectedGrades.length;

  return (
    <>
      <AccordionUI
        data={currentData}
        selectedCubeName={selectedCubeName}
        startIndex={startIndex}
        filterDataLength={selectedGradesLength}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 1 }}>
        <PaginationUI
          count={Math.ceil(selectedGradesLength / ITEMS_COUNT_PER_PAGE)}
          onChange={handlePageChange}
          page={currentPage}
        />
      </Box>
    </>
  );
};

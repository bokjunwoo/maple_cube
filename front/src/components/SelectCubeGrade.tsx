import { useRecoilState, useRecoilValue } from 'recoil';
import { CubeHistory } from '../api/api';
import { AccordionUI } from './ui/AccordionUI';
import {
  currentPageState,
  dataState,
  endDateState,
  selectedItemState,
  startDateState,
} from '../atom/cubeDataState';
import { Box, SelectChangeEvent, useTheme } from '@mui/material';
import { PaginationUI } from './ui/PaginationUI';
import { useState } from 'react';
import { PostListSelectUI } from './ui/PostListSelectUI';
import { CVSAllDownloadButton } from './CVSAllDownloadButton';

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
  const data = useRecoilValue(dataState);
  const startDate = useRecoilValue(startDateState);
  const endDate = useRecoilValue(endDateState);
  const selectedItem = useRecoilValue(selectedItemState);

  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [pageSize, setPageSize] = useState(20);

  const handlePageSizeChange = (event: SelectChangeEvent) => {
    setPageSize(parseInt(event.target.value, 10));
  };

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

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = selectedGrades.slice(startIndex, endIndex);

  const selectedGradesLength = selectedGrades.length;

  const selectedItemCVSText = selectedItem + ' 엑셀 파일 다운';
  const allCVSText =
    startDate?.format('YYYY.MM.DD') +
    '~' +
    endDate?.format('YYYY.MM.DD') +
    ' 엑셀 파일 다운';

  return (
    <>
      <PostListSelectUI value={pageSize} handleChange={handlePageSizeChange} />

      <AccordionUI
        data={currentData}
        selectedCubeName={selectedCubeName}
        startIndex={startIndex}
        filterDataLength={selectedGradesLength}
      />

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 1 }}>
        <PaginationUI
          count={Math.ceil(selectedGradesLength / pageSize)}
          onChange={handlePageChange}
          page={currentPage}
        />
      </Box>

      <Box>
        <CVSAllDownloadButton
          data={filterdata}
          size="100%"
          text={selectedItemCVSText}
        />
        <CVSAllDownloadButton
          data={data.cube_histories}
          size="100%"
          text={allCVSText}
        />
      </Box>
    </>
  );
};

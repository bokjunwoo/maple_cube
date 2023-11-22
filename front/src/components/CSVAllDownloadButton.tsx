import { CSVLink } from 'react-csv';
import { CubeHistory } from '../api/api';
import { CVSheaders, transformDataToCSV } from '../util/util';
import { CustomButtonUI } from './ui/CustomButtonUI';
import { Box } from '@mui/material';

type CSVAllDownloadButtonType = {
  data: CubeHistory[];
};

export const CSVAllDownloadButton = ({ data }: CSVAllDownloadButtonType) => {
  const CSVData = transformDataToCSV(data);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CSVLink
        data={CSVData}
        headers={CVSheaders}
        filename="cube_histories"
        style={{ width: '100%', textDecoration: 'none' }}
      >
        <CustomButtonUI
          width="100%"
          height="56px"
          text="엑셀파일 다운로드"
          bgColor="#f0ecc5"
          color="black"
          variant="subtitle1"
          hoverBorder="2px solid #ccbf35"
        />
      </CSVLink>
    </Box>
  );
};

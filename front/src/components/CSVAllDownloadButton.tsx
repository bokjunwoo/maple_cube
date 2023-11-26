import { CSVLink } from 'react-csv';
import { CubeHistory } from '../api/api';
import { CVSheaders, transformDataToCSV } from '../util/util';
import { CustomButtonUI } from './ui/CustomButtonUI';
import { Box } from '@mui/material';

type CSVAllDownloadButtonType = {
  data: CubeHistory[];
  size: Record<string, string>;
  text: string;
};

export const CSVAllDownloadButton = ({
  data,
  size,
  text,
}: CSVAllDownloadButtonType) => {
  const CSVData = transformDataToCSV(data);

  return (
    <Box
      sx={{
        mt: 3,
        width: size,
      }}
    >
      <CSVLink
        data={CSVData}
        headers={CVSheaders}
        filename="cube_histories"
        style={{ textDecoration: 'none' }}
      >
        <CustomButtonUI
          width="100%"
          height="56px"
          text={text}
          bgColor="#f0ecc5"
          color="black"
          variant="subtitle1"
          hoverBorder="2px solid #ccbf35"
        />
      </CSVLink>
    </Box>
  );
};

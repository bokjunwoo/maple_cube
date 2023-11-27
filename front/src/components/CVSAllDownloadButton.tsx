import { CSVLink } from 'react-csv';
import { CubeHistory } from '../api/api';
import { CVSheaders, transformDataToCSV } from '../util/util';
import { CustomButtonUI } from './ui/CustomButtonUI';
import { Box } from '@mui/material';

type CVSAllDownloadButtonType = {
  data: CubeHistory[];
  size: string;
  text: string;
};

export const CVSAllDownloadButton = ({
  data,
  size,
  text,
}: CVSAllDownloadButtonType) => {
  const CVSData = transformDataToCSV(data);

  return (
    <Box
      sx={{
        mt: 3,
        width: size,
      }}
    >
      <CSVLink
        data={CVSData}
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

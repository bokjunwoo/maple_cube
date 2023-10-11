import { AlertTitle, Box, Link } from '@mui/material';
import { CustomButtonUI } from './CustomButtonUI';
import { ErrorOutline } from '@mui/icons-material';

type NoResultsPageUIType = {
  startDate: string;
  endDate: string;
};

export const NoResultsPageUI = ({
  startDate,
  endDate,
}: NoResultsPageUIType) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img
        src="/images/no_data.png"
        alt="요청된 데이터 없음"
        style={{ width: '300px' }}
      />

      <Box sx={{ display: 'flex', mt: 3 }}>
        <ErrorOutline color="error" sx={{ mr: 1 }} />
        <AlertTitle>
          요청하신 {startDate} ~ {endDate}의 큐브데이터는 없습니다.
        </AlertTitle>
      </Box>

      <Link sx={{ mt: 3, width: '100%' }} underline="none" href="/">
        <CustomButtonUI
          width="100%"
          height="56px"
          text="다시 검색하러가기"
          bgColor="#D0E8F2"
          color="black"
          variant="subtitle1"
          hoverBorder="2px solid #057cad"
        />
      </Link>
    </Box>
  );
};

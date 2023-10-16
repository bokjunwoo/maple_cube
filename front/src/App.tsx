import { DateRangePicker } from './components/DateRangePicker';
import { ApiRequestButton } from './components/ApiRequestButton';
import { SelectCharacter } from './components/SelectCharacter';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { HeaderUI } from './components/ui/HeaderUI';
import { KeyInput } from './components/KeyInput';
import { Instructions } from './components/Instructions';
import { IssuanceLinkButton } from './components/IssuanceLinkButton';
import { IssuanceDialogButton } from './components/IssuanceDialogButton';
import { LoadingBar } from './components/LoadingBar';
import { useRecoilValue } from 'recoil';
import {
  dataState,
  endDateState,
  isLoadingState,
  progressState,
  startDateState,
} from './atom/cubeDataState';
import { Footer } from './components/ui/Footer';
import { NoResultsPageUI } from './components/ui/NoResultsPageUI';
import { UserGuideDialogButton } from './components/UserGuideDialogButton';

const App = () => {
  const theme = useTheme();

  const data = useRecoilValue(dataState);
  const progress = useRecoilValue(progressState);
  const isLoading = useRecoilValue(isLoadingState);
  const startDate = useRecoilValue(startDateState);
  const endDate = useRecoilValue(endDateState);

  const startDateFormat = startDate?.format('YYYY년 MM월DD일');
  const endDateFormat = endDate?.format('YYYY년 MM월DD일');

  return (
    <>
      <HeaderUI />
      <Container
        maxWidth="sm"
        sx={{
          [theme.breakpoints.up('xs')]: {
            mt: 2,
          },
          [theme.breakpoints.up('sm')]: {
            mt: 5,
          },
        }}
      >
        {data.count === undefined && (
          <Box>
            <Box sx={{ backgroundColor: 'white', padding: 3 }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  Nexon Developers의 API키를 입력해주세요.
                </Typography>
                <KeyInput />
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  검색하고 싶은 날짜를 설정해주세요.
                </Typography>
                <DateRangePicker />
              </Box>

              <Box sx={{ mb: 5 }}>
                <ApiRequestButton />
              </Box>

              {isLoading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
                  <LoadingBar progress={progress} />
                </Box>
              )}

              <Box sx={{ mb: 5 }}>
                <Instructions />
              </Box>

              <Box sx={{ mb: 3 }}>
                <UserGuideDialogButton />
              </Box>

              <Box sx={{ mb: 3 }}>
                <IssuanceDialogButton />
              </Box>

              <Box sx={{ mb: 0 }}>
                <IssuanceLinkButton />
              </Box>
            </Box>
          </Box>
        )}

        {data.count !== 0 && data.cube_histories.length !== 0 && (
          <Box sx={{ backgroundColor: 'white', padding: 3 }}>
            <SelectCharacter data={data.cube_histories} />
          </Box>
        )}

        {data.count === 0 && data.cube_histories.length === 0 && (
          <NoResultsPageUI
            startDate={startDateFormat as string}
            endDate={endDateFormat as string}
          />
        )}
      </Container>
      <Footer />
    </>
  );
};

export default App;

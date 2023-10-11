import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
  useTheme,
  useMediaQuery,
  Box,
  Container,
  CircularProgress,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';

type UserGuideDialogType = {
  open: boolean;
  handleClose: () => void;
};

export const UserGuideDialog = ({ open, handleClose }: UserGuideDialogType) => {
  const today = dayjs().format('YYYY년 MM월 DD일');
  const tomorrow = dayjs().add(1, 'day').format('YYYY년 MM월 DD일');

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [imageLoaded1, setImageLoaded1] = useState(false);
  const [imageLoaded2, setImageLoaded2] = useState(false);
  const [imageLoaded3, setImageLoaded3] = useState(false);
  const [imageLoaded4, setImageLoaded4] = useState(false);
  const [imageLoaded5, setImageLoaded5] = useState(false);
  const [imageLoaded6, setImageLoaded6] = useState(false);
  const [imageLoaded7, setImageLoaded7] = useState(false);
  const [imageLoaded8, setImageLoaded8] = useState(false);

  const handleImageLoad1 = () => {
    setImageLoaded1(true);
  };
  const handleImageLoad2 = () => {
    setImageLoaded2(true);
  };
  const handleImageLoad3 = () => {
    setImageLoaded3(true);
  };
  const handleImageLoad4 = () => {
    setImageLoaded4(true);
  };
  const handleImageLoad5 = () => {
    setImageLoaded5(true);
  };
  const handleImageLoad6 = () => {
    setImageLoaded6(true);
  };
  const handleImageLoad7 = () => {
    setImageLoaded7(true);
  };
  const handleImageLoad8 = () => {
    setImageLoaded8(true);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth={true}
    >
      <DialogTitle
        sx={{ m: 0, p: 2, fontSize: '18px' }}
        id="customized-dialog-title"
      >
        큐브데이터 이용 가이드
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 12,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers sx={{ p: 0 }}>
        <Container>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'inline-flex', mb: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ display: 'inline-block', mr: 1 }}
                >
                  ◈
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>
                  API키 발급
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'inline-flex' }}>
              <Typography
                variant="h6"
                sx={{ display: 'inline-block', mr: 1, visibility: 'hidden' }}
              >
                ◈
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                발급에 관한 자세한 사항은 API 키 발급 방법을 클릭해 확인해
                주세요.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'inline-flex', mb: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ display: 'inline-block', mr: 1 }}
                >
                  ◈
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>
                  날짜 선택
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'inline-flex' }}>
              <Typography
                variant="h6"
                sx={{ display: 'inline-block', mr: 1, visibility: 'hidden' }}
              >
                ◈
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                검색을 원하는 요일을 선택합니다. Nexon Developers 정책에 따라{' '}
                <span style={{ color: '#ff4c4c' }}>2022년 11월 25일 이후</span>
                부터 데이터 검색이 가능하며 이전 데이터의 경우 요청이
                불가능합니다. 또한, 오늘
                <span style={{ color: '#ff4c4c' }}>({today})</span>의 데이터는
                다음날
                <span style={{ color: '#ff4c4c' }}>
                  ({tomorrow} 오전 5시 이후)
                </span>
                부터 요청이 가능하며, 일 최대 조회할 수 있는 큐브 데이터는
                1,000개로 일 최대 데이터 개수를 넘는 큐브를 사용할 때 해당
                정보는 제공되지 않습니다. 데이터를 요청하는 날짜가 긴 경우
                시간이 오래 소요될 수 있습니다.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'inline-flex', mb: 1 }}>
              <Typography variant="h6" sx={{ display: 'inline-block', mr: 1 }}>
                ◈
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 900 }}>
                사용법
              </Typography>
            </Box>
            <Box sx={{ display: 'inline-flex' }}>
              <Typography
                variant="h6"
                sx={{ display: 'inline-block', mr: 1, visibility: 'hidden' }}
              >
                ◈
              </Typography>
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  데이터를 확인하고 싶은{' '}
                  <span style={{ color: '#ff4c4c' }}>캐릭터</span>를 선택해
                  주세요.
                </Typography>
                {!imageLoaded1 && (
                  <Box
                    sx={{
                      width: '332.7px',
                      height: '130px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
                <img
                  src="/images/select_character.gif"
                  alt=""
                  style={{
                    maxWidth: '100%',
                    height: '130px',
                  }}
                  onLoad={handleImageLoad1}
                />
              </Box>
            </Box>

            <Box sx={{ display: 'inline-flex' }}>
              <Typography
                variant="h6"
                sx={{ display: 'inline-block', mr: 1, visibility: 'hidden' }}
              >
                ◈
              </Typography>
              <Box>
                <Typography variant="body2">
                  캐릭터 선택 후{' '}
                  <span style={{ color: '#ff4c4c' }}>아이템</span>을 선택해
                  주세요.
                </Typography>
                {!imageLoaded2 && (
                  <Box
                    sx={{
                      width: '332.7px',
                      height: '130px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
                <img
                  src="/images/select_item.gif"
                  alt=""
                  style={{
                    maxWidth: '100%',
                    height: '130px',
                  }}
                  onLoad={handleImageLoad2}
                />
              </Box>
            </Box>

            <Box sx={{ display: 'inline-flex' }}>
              <Typography
                variant="h6"
                sx={{ display: 'inline-block', mr: 1, visibility: 'hidden' }}
              >
                ◈
              </Typography>
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  데이터를 확인하고 싶은{' '}
                  <span style={{ color: '#ff4c4c' }}>큐브</span>를 선택해
                  주세요.
                </Typography>
                {!imageLoaded3 && (
                  <Box
                    sx={{
                      width: '332.7px',
                      height: '75px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
                <img
                  src="/images/select_cubename.gif"
                  alt=""
                  style={{
                    maxWidth: '100%',
                    height: '75px',
                  }}
                  onLoad={handleImageLoad3}
                />
              </Box>
            </Box>

            <Box sx={{ display: 'inline-flex' }}>
              <Typography
                variant="h6"
                sx={{ display: 'inline-block', mr: 1, visibility: 'hidden' }}
              >
                ◈
              </Typography>
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  데이터를 확인하고 싶은{' '}
                  <span style={{ color: '#ff4c4c' }}>큐브 옵션</span>을 선택해
                  주세요.
                </Typography>
                {!imageLoaded4 && (
                  <Box
                    sx={{
                      width: '332.7px',
                      height: '75px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
                <img
                  src="/images/selec_cubetype.gif"
                  alt=""
                  style={{
                    maxWidth: '100%',
                    height: '75px',
                  }}
                  onLoad={handleImageLoad4}
                />
              </Box>
            </Box>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'inline-flex', mb: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ display: 'inline-block', mr: 1 }}
                >
                  ◈
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>
                  큐브 옵션 확인
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'inline-flex' }}>
              <Typography
                variant="h6"
                sx={{ display: 'inline-block', mr: 1, visibility: 'hidden' }}
              >
                ◈
              </Typography>
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  큐브 등급 업을 확인하고 싶은 경우 해당 등급으로 업그레이드된
                  옵션을 선택하면 확인할 수 있습니다.{' '}
                  <span style={{ color: '#ff4c4c' }}>
                    (레전드리 업그레이드 경우 레전드리 옵션에서 확인할 수
                    있습니다.)
                  </span>
                </Typography>
                {!imageLoaded5 && (
                  <Box
                    sx={{
                      width: '332.7px',
                      height: '250px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
                <img
                  src="/images/upgrade_success.png"
                  alt=""
                  style={{
                    maxWidth: '100%',
                    height: '250px',
                  }}
                  onLoad={handleImageLoad5}
                />
              </Box>
            </Box>

            <Box sx={{ display: 'inline-flex' }}>
              <Typography
                variant="h6"
                sx={{ display: 'inline-block', mr: 1, visibility: 'hidden' }}
              >
                ◈
              </Typography>
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  옵션 상세정보에는 큐브 옵션에 대한 등급이 표시되어 있습니다.{' '}
                  <span style={{ color: '#ff4c4c' }}>
                    (이탈 옵션 확인이 가능합니다.)
                  </span>
                </Typography>
                {!imageLoaded6 && (
                  <Box
                    sx={{
                      width: '332.7px',
                      height: '115px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
                <img
                  src="/images/top_option.png"
                  alt=""
                  style={{
                    maxWidth: '100%',
                    height: '115px',
                  }}
                  onLoad={handleImageLoad6}
                />
              </Box>
            </Box>

            <Box sx={{ display: 'inline-flex' }}>
              <Typography
                variant="h6"
                sx={{ display: 'inline-block', mr: 1, visibility: 'hidden' }}
              >
                ◈
              </Typography>
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  미라클 타임 및 큐브 천장에 대한 상세 정보도 확인할 수
                  있습니다.
                </Typography>
                <Box sx={{ display: fullScreen ? 'inline-block' : 'flex' }}>
                  {!imageLoaded7 && (
                    <Box
                      sx={{
                        width: '332.7px',
                        height: '115px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <CircularProgress />
                    </Box>
                  )}
                  {!imageLoaded8 && (
                    <Box
                      sx={{
                        width: '332.7px',
                        height: '115px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <CircularProgress />
                    </Box>
                  )}
                </Box>

                <img
                  src="/images/upgradeguarantee_success.png"
                  alt=""
                  style={{
                    maxWidth: '100%',
                    height: '115px',
                  }}
                  onLoad={handleImageLoad7}
                />
                <img
                  src="/images/miracle_time_flag.png"
                  alt=""
                  style={{
                    maxWidth: '100%',
                    height: '115px',
                  }}
                  onLoad={handleImageLoad8}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>닫기</Button>
      </DialogActions>
    </Dialog>
  );
};

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
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';
import { GuideTextUI } from './ui/GuideTextUI';

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
            <GuideTextUI
              title="API키 발급"
              isImage={false}
              description={[
                {
                  text: '발급에 관한 자세한 사항은 API 키 발급 방법을 클릭해 확인해주세요.',
                  coloredTexts: [''],
                },
              ]}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <GuideTextUI
              title="날짜 선택"
              isImage={false}
              description={[
                {
                  text: `검색을 원하는 요일을 선택합니다. Nexon Developers 정책에 따라 2022년 11월 25일 이후부터 데이터 검색이 가능하며 이전 데이터의 경우 요청이 불가능합니다. 또한, 오늘(${today})의 데이터는 다음날(${tomorrow} 오전 5시 이후)부터 요청이 가능하며, 일 최대 조회할 수 있는 큐브 데이터는 1,000개로 일 최대 데이터 개수를 넘는 큐브를 사용할 때 해당 정보는 제공되지 않습니다. 데이터를 요청하는 날짜가 긴 경우 시간이 오래 소요될 수 있습니다.`,
                  coloredTexts: [
                    '2022년 11월 25일 이후',
                    `(${today})`,
                    `(${tomorrow} 오전 5시 이후)`,
                  ],
                },
              ]}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <GuideTextUI
              title="사용법"
              isImage={true}
              description={[
                {
                  text: '데이터를 확인하고 싶은 캐릭터를 선택해 주세요.',
                  coloredTexts: ['캐릭터'],
                  imageSrc: '/images/select_character.gif',
                  imageLoaded: imageLoaded1,
                  handleImageLoad: handleImageLoad1,
                  imageWidth: '332.7px',
                  imageHeight: '130px',
                },
                {
                  text: '캐릭터 선택 후 아이템을 선택해 주세요.',
                  coloredTexts: ['아이템'],
                  imageSrc: '/images/select_item.gif',
                  imageLoaded: imageLoaded2,
                  handleImageLoad: handleImageLoad2,
                  imageWidth: '332.7px',
                  imageHeight: '130px',
                },
                {
                  text: '데이터를 확인하고 싶은 큐브를 선택해 주세요.                  ',
                  coloredTexts: ['큐브'],
                  imageSrc: '/images/select_cubename.gif',
                  imageLoaded: imageLoaded3,
                  handleImageLoad: handleImageLoad3,
                  imageWidth: '332.7px',
                  imageHeight: '75px',
                },
                {
                  text: '데이터를 확인하고 싶은 큐브 옵션을 선택해 주세요.',
                  coloredTexts: ['큐브 옵션'],
                  imageSrc: '/images/selec_cubetype.gif',
                  imageLoaded: imageLoaded4,
                  handleImageLoad: handleImageLoad4,
                  imageWidth: '332.7px',
                  imageHeight: '75px',
                },
              ]}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <GuideTextUI
              title="큐브 옵션 확인"
              isImage={true}
              description={[
                {
                  text: '큐브 등급 업을 확인하고 싶은 경우 해당 등급으로 업그레이드된 옵션을 선택하면 확인할 수 있습니다. (레전드리 업그레이드 경우 레전드리 옵션에서 확인할 수 있습니다.)',
                  coloredTexts: [
                    '(레전드리 업그레이드 경우 레전드리 옵션에서 확인할 수 있습니다.)',
                  ],
                  imageSrc: '/images/upgrade_success.png',
                  imageLoaded: imageLoaded5,
                  handleImageLoad: handleImageLoad5,
                  imageWidth: '332.7px',
                  imageHeight: '250px',
                },
                {
                  text: '옵션 상세정보에는 큐브 옵션에 대한 등급이 표시되어 있습니다. (이탈 옵션 확인이 가능합니다.)',
                  coloredTexts: ['(이탈 옵션 확인이 가능합니다.)'],
                  imageSrc: '/images/top_option.png',
                  imageLoaded: imageLoaded6,
                  handleImageLoad: handleImageLoad6,
                  imageWidth: '332.7px',
                  imageHeight: '115px',
                },
                {
                  text: '미라클 타임 및 큐브 천장에 대한 상세 정보도 확인할 수 있습니다.',
                  coloredTexts: ['미라클 타임', '큐브 천장'],
                  imageSrc: [
                    {
                      src: '/images/upgradeguarantee_success.png',
                      imageLoaded: imageLoaded7,
                      handleImageLoad: handleImageLoad7,
                    },
                    {
                      src: '/images/miracle_time_flag.png',
                      imageLoaded: imageLoaded8,
                      handleImageLoad: handleImageLoad8,
                    },
                  ],
                  imageWidth: '332.7px',
                  imageHeight: '115px',
                },
              ]}
            />
          </Box>
        </Container>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>닫기</Button>
      </DialogActions>
    </Dialog>
  );
};

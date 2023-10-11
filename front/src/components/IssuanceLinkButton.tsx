import { Link } from '@mui/material';
import { CustomButtonUI } from './ui/CustomButtonUI';

export const IssuanceLinkButton = () => {
  return (
    <Link
      href="https://developers.nexon.com/Maplestory"
      target="_blank"
      underline="none"
      sx={{ display: 'flex' }}
    >
      <CustomButtonUI
        width="100%"
        height="56px"
        text="API 키 발급 받으러 가기"
        bgColor="#FFD5CD"
        color="black"
        variant="subtitle1"
        hoverBorder="2px solid #ff8a8a"
      />
    </Link>
  );
};

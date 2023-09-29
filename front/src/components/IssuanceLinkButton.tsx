import { Link } from '@mui/material';
import { CustomButtonUI } from './ui/CustomButtonUI';

export const IssuanceLinkButton = () => {
  return (
    <Link
      href="https://developers.nexon.com/Maplestory/apiList"
      target="_blank"
      underline="none"
      sx={{ display: 'flex' }}
    >
      <CustomButtonUI
        width="100%"
        height="56px"
        text="API키 발급 받으러 가기"
        bgColor="#FFCCCC"
        color="black"
        variant="h6"
        hoverBorder="2px solid #ff8a8a"
      />
    </Link>
  );
};

import { Link } from '@mui/material';
import { CustomButtonUI } from './ui/CustomButtonUI';

export const IssuanceLinkButton = () => {
  return (
    <Link
      href="#"
      target="_blank"
      underline="none"
      sx={{ display: 'flex', mt: 3 }}
    >
      <CustomButtonUI
        width="100%"
        height="56px"
        text="API키 발급 받으러 가기"
        bgColor="#FFCCCC"
        color="black"
        variant="h6"
      />
    </Link>
  );
};

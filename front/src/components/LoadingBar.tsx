import { LoadingBarUI } from './ui/LoadingBarUI';

type LoadingBarType = {
  progress: number;
};

export const LoadingBar = ({ progress }: LoadingBarType) => {
  return <LoadingBarUI value={progress} />;
};

import { Pagination } from '@mui/material';

type PaginationUIType = {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, newPage: number) => void;
};

export const PaginationUI = ({ count, page, onChange }: PaginationUIType) => {
  return (
    <Pagination count={count} shape="rounded" onChange={onChange} page={page} />
  );
};

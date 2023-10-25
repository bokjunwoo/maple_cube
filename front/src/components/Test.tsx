import { SelectChangeEvent, Typography } from '@mui/material';
import { SelectUI } from './ui/SelectUI';
import { useState } from 'react';

export const Texts = () => {
  const [a, setA] = useState('');
  const handleCharacterSelect = (e: SelectChangeEvent) => {
    setA(e.target.value);
  };
  return (
    <>
      <SelectUI
        filterdata={['미트라의 분노 : 전사', '거대한 공포', '고통의 근원']}
        label={'아이템'}
        value={a}
        handleChange={handleCharacterSelect}
      />

      {a !== '' && (
        <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
          <strong>{a}</strong>의 큐브사용 개수는{' '}
          <strong>{a === '거대한 공포' ? '10' : '5'}</strong>개 입니다.
        </Typography>
      )}
    </>
  );
};

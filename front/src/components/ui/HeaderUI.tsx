import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export const HeaderUI = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 0 }}>
      <Container maxWidth="sm">
        <Toolbar sx={{ height: '90px' }} disableGutters>
          <Typography
            variant="h3"
            component="a"
            href="/"
            sx={{
              fontWeight: 900,
              color: '#3EC1D3',
              textDecoration: 'none',
            }}
          >
            큐브데이터
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

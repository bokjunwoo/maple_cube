import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export const HeaderUI = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="sm">
        <Toolbar sx={{ height: '80px' }} disableGutters>
          <Typography
            variant="h3"
            component="a"
            href="/"
            sx={{
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            큐브 사용
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

// @mui
import { Avatar, Card, Grid, Typography } from '@mui/material';
// utils
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function CreateIconWidget() {
  return (
    <Card
      sx={{
        boxShadow: 0,
        height: '100%',
        textAlign: 'left',
      }}
    >
      <Grid container justifyContent="center" alignItems="center" height="100%">
        <Grid container item lg={12} sx={{ width: '100%', height: '70%' }} alignItems="center" justifyContent="center">
          <Avatar
            sx={{
              backgroundColor: '#c1f5ec',
              color: '#3acbb2',
              border: '1px solid #3acbb2',
              width: 100,
              height: 100,
              fontSize: 32,
            }}
          >
            IF
          </Avatar>
          <Grid item sx={{ mt: -5 }}>
            <Typography variant="h4">Iconfaccctory</Typography>
            <Typography variant="body1" color="text.secondary">
              Creator Pro
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          lg={12}
          sx={{ backgroundColor: '#3acbb2', width: '100%', height: '30%' }}
          //   alignItems="center"
          justifyContent="center"
        >
          <Grid item sx={{ mt: '10%', ml: '10%' }} lg={12}>
            <Iconify
              icon={'material-symbols:add-circle-outline-rounded'}
              color="white"
              sx={{ width: 30, height: 30 }}
            />
          </Grid>
          <Grid item lg={12} sx={{ color: 'white', ml: '10%' }}>
            <Typography variant="h5">Upload New Icon</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

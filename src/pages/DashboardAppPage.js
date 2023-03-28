import { Helmet } from 'react-helmet-async';
// @mui

import { Grid } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppWebsiteVisits,
  SalesByDeveloper,
  AppWidgetSummary,
  BuyBanner,
  CreateIconWidget,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  return (
    <>
      <Helmet>
        <title> Icon Lab Creators </title>
      </Helmet>

      {/* <Container maxWidth="xl" sx={{ border: '2px solid green' }}> */}
      <Grid container spacing={2}>
        <Grid item container spacing={3} lg={8}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <CreateIconWidget />
          </Grid>

          <Grid item container lg={9} spacing={4}>
            <Grid item xs={12} sm={6} md={3} lg={6}>
              <AppWidgetSummary
                title="Total Downloads"
                total={1352831}
                icon={'material-symbols:download-for-offline-outline'}
                color="info"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={6}>
              <AppWidgetSummary title="Icons Uploaded" total={1723315} color="info" icon={'ic:round-star-border'} />
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={6}>
              <AppWidgetSummary title="Iconsets Created" total={234} color="info" icon={'ri:apps-2-line'} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={6}>
              <AppWidgetSummary title="Families Created" total={234} color="info" icon={'ic:twotone-people-alt'} />
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppWebsiteVisits
              title="Total Downloads"
              subheader="(+43%) than last year"
              chartLabels={['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']}
              chartData={[
                {
                  name: 'Pro downloads',
                  type: 'column',
                  fill: 'solid',
                  data: [2000, 1100, 2200, 2700, 1300, 2200, 3750, 2100, 4400, 2200, 3000],
                },
                {
                  name: 'Single Purchases',
                  type: 'column',
                  fill: 'solid',
                  data: [4400, 5500, 4100, 6700, 2200, 4300, 2100, 4100, 5600, 2700, 4300],
                },
              ]}
            />
          </Grid>
        </Grid>
        <Grid container item lg={4}>
          <SalesByDeveloper
            title="Latest Sales"
            list={[
              {
                name: 'Pencil Icon',
                price: 1.28,
                author: 'Floyd Miles',

                type: 'Pro Downloads',
                icon: [{ value: <Iconify icon={'mdi:pencil-circle-outline'} color="black" width={32} /> }],
              },
              {
                name: 'Media Outline IconSet',
                price: 10,
                author: 'Kristin Watson',
                type: 'Pro Downloads',
                icon: [
                  { value: <Iconify icon={'material-symbols:camera-enhance-outline'} color="black" width={32} /> },
                  { value: <Iconify icon={'material-symbols:mic-outline-rounded'} color="black" width={32} /> },
                  { value: <Iconify icon={'material-symbols:headphones-outline'} color="black" width={32} /> },
                  { value: <Iconify icon={'mdi:picture-360-outline'} color="black" width={32} /> },
                ],
              },
              {
                name: 'Night Moon Icon',
                price: 2.25,
                author: 'Dianne Russell',
                type: 'Single Puchase',
                icon: [{ value: <Iconify icon={'mdi:weather-night'} color="black" width={32} /> }],
              },
            ]}
          />
          <BuyBanner />
        </Grid>
      </Grid>

      {/* </Container> */}
    </>
  );
}

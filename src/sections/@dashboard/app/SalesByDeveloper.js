// @mui
import PropTypes from 'prop-types';
import { Box, Card, Paper, Typography, CardHeader, CardContent, Button } from '@mui/material';
// utils
import { fCurrency } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

SalesByDeveloper.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function SalesByDeveloper({ title, subheader, list, ...other }) {
  return (
    <Card {...other} sx={{ width: '100%', height: '78%' }}>
      <CardHeader
        title={title}
        subheader={subheader}
        titleTypographyProps={{ variant: 'h4' }}
        action={
          <Button sx={{ textTransform: 'none', color: 'black' }} variant="text">
            See All
          </Button>
        }
      />

      <CardContent>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
          }}
        >
          {list.map((site) => (
            <Paper key={site.name} variant="outlined" sx={{ py: 1, textAlign: 'center' }}>
              <Box sx={{ mb: 2, display: 'flex', justifyContent: 'start', ml: 2 }}>
                {site.icon.map((item) => (
                  <>{item.value}</>
                ))}
              </Box>
              <Typography variant="h6" align="left" sx={{ ml: 2, mb: 2 }}>
                {site.name}
              </Typography>
              <Typography variant="subtitle1" align="left" sx={{ ml: 2, mb: 2 }} color="text.secondary">
                <span>{site.author} </span> -{' '}
                <div style={{ display: 'inline', color: site.type.startsWith('Pro') ? 'text.secondary' : '#3acbb2' }}>
                  {site.type}
                </div>
              </Typography>

              <Typography variant="subtitle1" align="left" sx={{ ml: 2, mb: 2 }} color="text.secondary">
                {fCurrency(site.price)}
              </Typography>
            </Paper>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

// @mui
import { Card, CardContent, Typography } from '@mui/material';
// utils
// components

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function BuyBanner() {
  return (
    <Card
      sx={{
        backgroundImage: "url('/assets/images/covers/black.jpeg')",
        marginTop: 2,
        py: 2,
        px: 2,
        boxShadow: 0,
        textAlign: 'left',
        width: '100%',
        height: '20%',
      }}
    >
      <CardContent>
        <Typography variant="h4" color="white">
          Upgrade to IconLab Creator Enterprise
        </Typography>
      </CardContent>
    </Card>
  );
}

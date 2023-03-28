// @mui
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const StyledIcon = styled('div')(({ theme }) => ({
  marginLeft: '2%',
  marginTop: '1%',
  display: 'flex',
  borderRadius: '5%',
  alignItems: 'center',
  width: theme.spacing(4),
  height: theme.spacing(4),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 2,
        px: 2,
        boxShadow: 0,
        textAlign: 'left',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <StyledIcon
        sx={{
          color: (theme) => theme.palette[color].dark,
          // backgroundImage: (theme) =>
          //   `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
          //     theme.palette[color].dark,
          //     0.24
          //   )} 100%)`,
        }}
      >
        <Iconify icon={icon} width={30} height={30} />
      </StyledIcon>

      <Typography variant="h3">{fShortenNumber(total)}</Typography>

      <Typography variant="h5" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}

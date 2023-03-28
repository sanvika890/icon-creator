import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
import { useChart } from '../../../components/chart';

// ----------------------------------------------------------------------

AppWebsiteVisits.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function AppWebsiteVisits({ title, subheader, chartLabels, chartData, ...other }) {
  const chartOptions = useChart({
    plotOptions: { bar: { columnWidth: '5%' } },
    fill: { type: chartData.map((i) => i.fill) },
    labels: chartLabels,

    xaxis: { type: 'category' },

    yaxis: {
      min: 0,
      max: 10000,
      tickAmount: 5,
      labels: {
        formatter: (num) =>
          Math.abs(num) > 999
            ? `${Math.sign(num) * (Math.abs(num) / 1000).toFixed(1)}k`
            : Math.sign(num) * Math.abs(num),
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        // const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

        const total =
          parseInt(series[seriesIndex][dataPointIndex], 10) + parseInt(series[seriesIndex + 1][dataPointIndex], 10);
        return (
          `<ul>` +
          `<li ><b>${chartData[0].name}</b>: ${series[seriesIndex][dataPointIndex]}</li>` +
          `<li><b>${chartData[1].name}</b>: ${series[seriesIndex + 1][dataPointIndex]}</li>` +
          `<li><b>Total</b>: ${total} </li>` +
          `</ul>`
        );
      },
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} titleTypographyProps={{ variant: 'h3' }} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="bar" series={chartData} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}

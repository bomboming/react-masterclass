import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  const exceptData = data ?? [];
  const chartData = exceptData?.map((i) => {
    return {
      x: i.time_close,
      y: [i.open, i.high, i.low, i.close],
    };
  });
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: chartData,
            },
          ]}
          options={{
            chart: {
              type: "candlestick",
              height: 350,
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
            theme: {
              mode: "light",
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;

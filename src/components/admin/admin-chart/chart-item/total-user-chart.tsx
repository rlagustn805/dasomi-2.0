'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
} from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useEffect, useState } from 'react';
import { fetchUserRate } from '@/services/api-admin/api-admin';

const chartConfig = {
  signUp: {
    label: '가입 수',
    color: '#38a169',
  },
  withdraw: {
    label: '탈퇴 수',
    color: '#f56565',
  },
} satisfies ChartConfig;

const TotalUserChart = () => {
  const [userRate, setUserRate] = useState([]);

  const fetchTotalUser = async () => {
    const res = await fetchUserRate();
    setUserRate(res ?? []);
  };

  useEffect(() => {
    fetchTotalUser();
  }, []);

  return (
    <ChartContainer config={chartConfig} className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={userRate}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={value =>
              typeof value === 'string' && value.includes('-')
                ? `${Number(value.split('-')[1])}월`
                : value
            }
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent payload />} />
          <Bar
            dataKey="signUp"
            fill="var(--color-signUp)"
            radius={4}
            barSize={10}
          />
          <Bar
            dataKey="withdraw"
            fill="var(--color-withdraw)"
            radius={4}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default TotalUserChart;

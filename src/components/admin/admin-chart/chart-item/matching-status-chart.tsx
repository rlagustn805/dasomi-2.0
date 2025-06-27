'use client';

import { fetchMatchingRate } from '@/services/api-admin/api-admin';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#38a169', '#ecc94b', '#f56565'];

const MatchingStatusChart = () => {
  const [matchingRate, setMatchingRate] = useState<
    { name: string; value: number }[]
  >([]);

  const fetchTotalMatchingStatus = async () => {
    try {
      const res = await fetchMatchingRate();

      const arrData = res
        ? [
            { name: '매칭가능', value: res.available || 0 },
            { name: '매칭중', value: res.matching || 0 },
            { name: '매칭완료', value: res.matched || 0 },
          ]
        : [];

      setMatchingRate(arrData);
    } catch (error) {
      console.error('매칭률 데이터 로드 실패', error);
      setMatchingRate([]);
    }
  };

  useEffect(() => {
    fetchTotalMatchingStatus();
  }, []);

  return (
    <div className="w-full h-[300px] text-sm space-y-4">
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={matchingRate}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label>
            {matchingRate.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="flex justify-center gap-6 text-xs">
        {matchingRate.map((entry, index) => (
          <div key={entry.name} className="flex items-center gap-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span>{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchingStatusChart;

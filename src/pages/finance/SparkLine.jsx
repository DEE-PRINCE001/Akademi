import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const defaultTrendData = [
  { value: 35 },
  { value: 48 },
  { value: 22 },
  { value: 45 },
  { value: 40 },
  { value: 72 },
  { value: 58 },
];

export const SparkLine = ({ data = defaultTrendData, height = 80 }) => {
  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart 
          data={data} 
          margin={{ top: 4, right: 4, left: 4, bottom: 4 }}
        >
          {/* Define the fading green gradient matching your success color */}
          <defs>
            <linearGradient id="sparklineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop 
                offset="0%" 
                stopColor="var(--color-success)" 
                stopOpacity={0.15} 
              />
              <stop 
                offset="100%" 
                stopColor="var(--color-success)" 
                stopOpacity={0.01} 
              />
            </linearGradient>
          </defs>

          {/* Smooth curved trend line */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="var(--color-success)"
            strokeWidth={2.5}
            strokeLinecap="round"
            fill="url(#sparklineGradient)"
            dot={false}
            activeDot={false} 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';


const defaultData = [
    { day: 'Mon', lastWeek: 73, thisWeek: 96 },
    { day: 'Tue', lastWeek: 56, thisWeek: 43 },
    { day: 'Wed', lastWeek: 30, thisWeek: 36 },
    { day: 'Thu', lastWeek: 39, thisWeek: 49 },
    { day: 'Fri', lastWeek: 20, thisWeek: 29 },
    { day: 'Sat', lastWeek: 81, thisWeek: 65 },
    { day: 'Sun', lastWeek: 54, thisWeek: 73 },
];


export const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        // gonna calculate percentage later
        return (
            <div className="flex flex-col items-center drop-shadow-md animate-in fade-in zoom-in-95 duration-100">
                <div className="bg-primary flex flex-col items-center justify-center rounded-lg px-4 py-2 min-h-15 shadow-lg min-w-[110px] text-center">
                    <span className="text-white font-bold text-base leading-tight">42%</span>
                    <span className="text-grey-200 text-xs font-medium leading-tight mt-0.5">982 Income</span>
                </div>
                {/* Pointer Arrow */}
                <div className="w-0 h-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-primary"></div>
            </div>
        );
    }
    return null;
};

// 2. Custom XAxis Tick to Highlight the Active Day
const CustomXAxisTick = ({ x, y, payload }) => {
    // Highlight Wednesday to match Figma design rule precisely
    const isActive = payload.value === 'Wed';

    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={0}
                dy={20}
                textAnchor="middle"
                fill={isActive ? 'var(--color-primary-text)' : 'var(--color-grey-300)'}
                className={`text-sm ${isActive ? 'font-medium' : 'font-normal'}`}
            >
                {payload.value}
            </text>
        </g>
    );
};

export const SchoolFinanceChart = ({ data = defaultData }) => {
    return (
        <div className="w-full max-w-xl bg-white p-4 h-full">

            {/* --- Top Layout: Title & Custom Legend Section --- */}
            <div className='flex justify-between pb-3'>
                <h1 className='text-primary-text text-lg font-bold'>School Finance</h1>
                <div className='flex text-xs space-x-6'>
                    <div className='relative flex flex-col space-y-0.5'>
                        <div className='absolute top-0.5 -left-3.5 rounded-full
                        w-2 h-2 bg-white border-2
                        border-accent'></div>
                        <div className='text-grey-300 text-[10px]'>This Week</div>
                        <div className='font-semibold text-primary-text text-sm'>1,235</div>
                    </div>

                    <div className='relative flex flex-col space-y-0.5'>
                        <div className='absolute top-0.5 -left-3.5 rounded-full
                        w-2 h-2 bg-white border-2
                        border-secondary'></div>
                        <div className='text-grey-300 text-[10px]'>Last Week</div>
                        <div className='font-semibold text-primary-text text-sm'>1,356</div>

                    </div>

                </div>
            </div>

            {/* --- Recharts Graphical Canvas --- */}
            <div className="w-full h-70">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 10, right: 5, left: -20, bottom: 0 }}
                        barSize={10} // Width of individual bars
                        barGap={3}   // Spacing between the grouped bars
                    >
                        {/* Subtle lavender background grid lines */}
                        <CartesianGrid
                            stroke="var(--color-grey-200)"
                            strokeOpacity={0.4}
                            vertical={true}
                        />

                        {/* X-Axis Setup */}
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={<CustomXAxisTick />}
                        />

                        {/* Y-Axis Setup */}
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            domain={[0, 100]}
                            ticks={[0, 20, 40, 60, 80, 100]}
                            tickMargin={10}
                            tick={{ fill: 'var(--color-grey-300)', fontSize: 12, fontWeight: 400 }}
                        />

                        {/* Integrated Custom Floating Tooltip */}
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={{ fill: 'transparent' }} // Remove gray background block on hover
                            offset={-15} // Center tooltip arrow exactly over grid tracks
                        />

                        {/* Last Week Bar (Orange/Coral) */}
                        <Bar
                            dataKey="lastWeek"
                            fill="var(--color-secondary)"
                            radius={[7, 7, 0, 0]} // Subtle rounding at top corners
                        />

                        {/* This Week Bar (Yellow/Accent) */}
                        <Bar
                            dataKey="thisWeek"
                            fill="var(--color-accent)"
                            radius={[7, 7, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
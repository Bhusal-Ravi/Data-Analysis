import React from "react";
import {
    BarChart,
    LineChart,
    PieChart,
    AreaChart,
    RadarChart,
    ScatterChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    Line,
    Area,
    Radar,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Scatter,
    Pie,
    ResponsiveContainer,
    Cell
} from "recharts";

const graphTypes = {
    BarChart: BarChart,
    LineChart: LineChart,
    AreaChart: AreaChart,
    RadarChart: RadarChart,
    ScatterChart: ScatterChart,
    PieChart: PieChart
};

// Emerald color palette from 100 to 600
const emeraldColors = [
    '#d1fae5', // emerald-100
    '#a7f3d0', // emerald-200
    '#6ee7b7', // emerald-300
    '#34d399', // emerald-400
    '#10b981', // emerald-500
    '#059669'  // emerald-600
];

function GraphSelect({ plotData, aiGraph }) {
    const { graph, x, y } = aiGraph;
    const ChartComponent = graphTypes[graph];

    const transformPieData = (data) => {
        return data.map(item => ({
            name: item[x],
            value: parseFloat(item[y])
        }));
    };

    if (!ChartComponent) return <div>Unsupported chart type: {graph}</div>;

    return (
        <div className="bg-emerald-50 rounded-xl shadow-md hover:shadow-lg p-4 sm:p-5 lg:p-6 mt-4 sm:mt-5 lg:mt-6 border border-emerald-100 transition-all duration-300">
            <h3 className="text-emerald-800 font-semibold text-base sm:text-lg lg:text-xl mb-3 sm:mb-4">{aiGraph.description}</h3>
            <div style={{ width: '100%', height: '300px', minHeight: '300px' }}>
                <ResponsiveContainer>
                    {graph === "PieChart" ? (
                        <PieChart>
                            <Pie
                                data={transformPieData(plotData)}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={120}
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            >
                                {transformPieData(plotData).map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={emeraldColors[index % emeraldColors.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value) => [value, y]}
                                itemStyle={{ color: emeraldColors[5] }}
                                contentStyle={{
                                    background: emeraldColors[0],
                                    border: `1px solid ${emeraldColors[2]}`,
                                    borderRadius: '8px'
                                }}
                            />
                            <Legend
                                wrapperStyle={{ paddingTop: '20px' }}
                                formatter={(value) => <span className="text-emerald-700">{value}</span>}
                            />
                        </PieChart>
                    ) : graph === "ScatterChart" ? (
                        <ScatterChart
                            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                            data={plotData}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke={emeraldColors[1]} />
                            <XAxis
                                dataKey={x}
                                stroke={emeraldColors[5]}
                                tick={{ fill: emeraldColors[5] }}
                            />
                            <YAxis
                                dataKey={y}
                                stroke={emeraldColors[5]}
                                tick={{ fill: emeraldColors[5] }}
                            />
                            <Tooltip
                                contentStyle={{
                                    background: emeraldColors[0],
                                    border: `1px solid ${emeraldColors[2]}`,
                                    borderRadius: '8px'
                                }}
                            />
                            <Legend
                                wrapperStyle={{ paddingTop: '10px' }}
                                formatter={(value) => <span className="text-emerald-700">{value}</span>}
                            />
                            <Scatter
                                name={`${x} vs ${y}`}
                                data={plotData}
                                fill={emeraldColors[4]}
                                stroke={emeraldColors[5]}
                            />
                        </ScatterChart>
                    ) : (
                        <ChartComponent
                            data={plotData}
                            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke={emeraldColors[1]} />
                            <XAxis
                                dataKey={x}
                                stroke={emeraldColors[5]}
                                tick={{ fill: emeraldColors[5] }}
                            />
                            <YAxis
                                dataKey={y}
                                stroke={emeraldColors[5]}
                                tick={{ fill: emeraldColors[5] }}
                            />
                            <Tooltip
                                contentStyle={{
                                    background: emeraldColors[0],
                                    border: `1px solid ${emeraldColors[2]}`,
                                    borderRadius: '8px'
                                }}
                            />
                            <Legend
                                wrapperStyle={{ paddingTop: '10px' }}
                                formatter={(value) => <span className="text-emerald-700">{value}</span>}
                            />

                            {graph === "BarChart" && (
                                <Bar
                                    dataKey={y}
                                    fill={emeraldColors[3]}
                                    stroke={emeraldColors[5]}
                                    radius={[4, 4, 0, 0]}
                                />
                            )}
                            {graph === "LineChart" && (
                                <Line
                                    type="monotone"
                                    dataKey={y}
                                    stroke={emeraldColors[4]}
                                    strokeWidth={2}
                                    dot={{ fill: emeraldColors[5], strokeWidth: 2 }}
                                    activeDot={{ r: 8, fill: emeraldColors[5] }}
                                />
                            )}
                            {graph === "AreaChart" && (
                                <Area
                                    dataKey={y}
                                    stroke={emeraldColors[4]}
                                    fill={emeraldColors[2]}
                                    fillOpacity={0.8}
                                />
                            )}
                            {graph === "RadarChart" && (
                                <>
                                    <PolarGrid stroke={emeraldColors[1]} />
                                    <PolarAngleAxis
                                        dataKey={x}
                                        stroke={emeraldColors[5]}
                                    />
                                    <PolarRadiusAxis
                                        angle={30}
                                        stroke={emeraldColors[5]}
                                    />
                                    <Radar
                                        name="Value"
                                        dataKey={y}
                                        stroke={emeraldColors[4]}
                                        fill={emeraldColors[3]}
                                        fillOpacity={0.6}
                                    />
                                </>
                            )}
                        </ChartComponent>
                    )}
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default GraphSelect;
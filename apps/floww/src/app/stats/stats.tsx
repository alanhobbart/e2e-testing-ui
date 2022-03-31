import { Area, AreaChart, CartesianGrid, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import { MapView } from '@test/ui';
/* eslint-disable-next-line */
export interface StatsProps {}

export function Stats(props: StatsProps) {
  const chartData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const pieData = [
    { name: 'Group A', value: 400, fill:'#0088FE'  },
    { name: 'Group B', value: 300, fill:'#00C49F'  },
    { name: 'Group C', value: 300, fill:'#FFBB28'  },
    { name: 'Group D', value: 200, fill:'#0088FE' },
  ];

  return (
   
      <div className="flex">
        <div className="px-4">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        </div>
        <div className="pt-20">
        <AreaChart
            width={400}
            height={280}
            data={chartData}
            cx="50%"
            cy="50%"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </div>
        <div className="pt-20 ml-10">
        <MapView/>
        </div>
      </div>
   
  );
}

export default Stats;

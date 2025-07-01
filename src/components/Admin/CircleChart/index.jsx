import React, { useContext } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';
import { RoleContext } from '../../../Context/RolesContext';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

// Define different color sets for different roles
const COLOR_SETS = {
  admin: ['#FF6384', '#FF9F40', '#FFCD56', '#FF6384'],
  manager: ['#916f34', '#917442', '#916c2d', '#917e5d'],
};

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComponent = () => {
    const { UserRole } = useContext(RoleContext);
  // Example: Simulating role (normally fetched from localStorage or Redux)
//   const userRole = localStorage.getItem("userRole") || "manager";
  // Get corresponding color set, fallback to 'default'
  const COLORS = COLOR_SETS[UserRole] || COLOR_SETS.default;

  return (
    <div style={{ width: '50%', height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="30%"
            cy="60%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;

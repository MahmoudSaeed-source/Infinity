import { Link } from 'react-router-dom';
import './charts_Components.scss';
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
 
const Charts_components = (props) => {
  return (
    <div className="Charts_components">
      <div className="charts_Info">
        <div className="title">
          <HiOutlineChartSquareBar />
          <span>{props.title}</span>
        </div>
        <h2>{props.number}</h2>
        <Link to="/" className="view" style={{ color: props.color }}>
          View All
        </Link>
      </div>
      <div className="charts">
        <div className="chart_view">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: -20, y: -28 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart_Text">
          <div
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </div>
          <div className="duration" style={{color:props.color}}>this month</div>
        </div>
      </div>
    </div>
  );
};

export default Charts_components
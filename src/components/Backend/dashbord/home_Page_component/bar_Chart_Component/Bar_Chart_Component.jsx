import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import './bar_Chart_component.scss';

const Bar_Chart_Component = (props) => {
  return (
    <div className="Bar_Chart_Component">
      <h1 className="title" style={{color:props.color}}>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px",width:"100px",height:"40px",fontSize:"12px",display:"flex",alignItems:"center",justifyContent:"center" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill:"none"}}
            />
            <Bar dataKey={props.dataKey} fill={props.color}  />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Bar_Chart_Component
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import './circle_Chart_Component.scss';
const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];
const Circle_Chart_component = () => {
  return (
    <div className="Circle_Chart_component">
      <h3 className="title">leads by Source</h3>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{
                background: "white",
                borderRadius: "5px",
                width: "100px",
                height: "40px",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
              labelStyle={{ display: "none" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="model_options">
          {data.map((item,index) => (
            <div className="model" key={index}>
              
              <span
                className="dot"
                style={{ backgroundColor: item.color }}></span>
              <span className="name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Circle_Chart_component
import Bar_Chart_Component from '../../../components/Backend/dashbord/home_Page_component/bar_Chart_Component/Bar_Chart_Component';
import Big_Chart_Component from '../../../components/Backend/dashbord/home_Page_component/big_Chart_component/Big_Chart_Component';
import Charts_components from '../../../components/Backend/dashbord/home_Page_component/charts_Component/Charts_components';
import Circle_Chart_component from '../../../components/Backend/dashbord/home_Page_component/circle_Chart_Component/Circle_Chart_component';
import TopSale from '../../../components/Backend/dashbord/home_Page_component/top_Sale/TopSale';
import {
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
  barChartBoxRevenue,
  barChartBoxVisit,
} from "../../../data";
import './home_page.scss'

const Home_page = () => {
  return (
    <div className="home_content">
      <div className="component component_Box_1">
        <TopSale />
      </div>
      <div className="component component_Box_2">
        <Charts_components {...chartBoxUser} />
      </div>
      <div className="component component_Box_3">
        <Charts_components {...chartBoxProduct} />
      </div>
      <div className="component component_Box_4">
        <Circle_Chart_component />
      </div>
      <div className="component component_Box_5">
        <Charts_components {...chartBoxConversion} />
      </div>
      <div className="component component_Box_6">
        <Charts_components {...chartBoxRevenue} />
      </div>
      <div className="component component_Box_7">
        <Big_Chart_Component/>
      </div>
      <div className="component component_Box_8">
        <Bar_Chart_Component {...barChartBoxVisit} />
      </div>
      <div className="component component_Box_9">
        <Bar_Chart_Component {...barChartBoxRevenue} />
      </div>
    </div>
  );
}

export default Home_page
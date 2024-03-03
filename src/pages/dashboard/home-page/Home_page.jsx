import Charts_components from '../../../components/Backend/dashbord/home_Page_component/charts_Component/Charts_components';
import TopSale from '../../../components/Backend/dashbord/home_Page_component/top_Sale/TopSale';
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../../data';
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
      <div className="component component_Box_4">component4</div>
      <div className="component component_Box_5">
        <Charts_components {...chartBoxConversion} />
      </div>
      <div className="component component_Box_6">
        <Charts_components {...chartBoxRevenue} />
      </div>
      <div className="component component_Box_7">component7</div>
      <div className="component component_Box_8">component8</div>
      <div className="component component_Box_9">component9</div>
    </div>
  );
}

export default Home_page
import './single.scss';
import { useParams } from 'react-router-dom';
const Single = () => {
  const userId = useParams();
  return <div>{userId}</div>;
}

export default Single
import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

function Category() {
  const dispatch = useDispatch();
  const actionObj = dispatch(checkStatus());
  return (
    <div>
      <h1>{actionObj.text}</h1>
      <button type="button">Check Status</button>
    </div>
  );
}

export default Category;

import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

function Category() {
  const dispatch = useDispatch();
  dispatch(checkStatus());
  return (
    <div>
      <button type="submit">Check Status</button>
    </div>
  );
}

export default Category;

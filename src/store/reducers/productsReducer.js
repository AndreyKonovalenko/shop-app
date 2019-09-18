import PRODUCTS from '../../data/dummy-data';
import { DELETE_PRODUCT } from '../actions/productsActions';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(element => element.ownerId === 'u1')
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(element => element.id !== action.pid),
        availableProducts: state.availableProducts.filter(element => element.id !== action.pid)
      };
    default:
      return state;
  }
};

import { ADD_ORDER } from '../actions/ordersActions';
import Order from '../../models/order';

const intialState = {
  orders: []
};

export default (state = intialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        action.orderData.id,
        action.orderData.items,
        action.orderData.amount,
        action.date
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder)
      };
  }
  return state;
};

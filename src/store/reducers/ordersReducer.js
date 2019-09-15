import {ADD_ORDER} from '../actions/ordersAction';
import Order from '../../models/order';

const intialState = {
  orders: []
};

export default (state = intialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(), // dammy-id for now
        action.orderData.items,
        action.oredrData.amount,
        new Date()
      );
      return {
        ...state,
        orders: state.orders.concat(newOrder)
      };
  }
  return state;
};

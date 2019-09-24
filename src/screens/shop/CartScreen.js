import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem';
import Card from '../../components/UI/Card';
import * as cartActons from '../../store/actions/cartActions';
import * as ordersActions from '../../store/actions/ordersActions';

const CartScreen = props => {
  const [isLoading, setIsLoanding] = useState(false);
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => {
    const transformedCartItmes = [];
    for (const key in state.cart.items) {
      transformedCartItmes.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum
      });
    }
    return transformedCartItmes.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });

  const dispatch = useDispatch();

  const sendOrderHandler = async() => {
    setIsLoanding(true);
    await dispatch(ordersActions.addOrder(cartItems, cartTotalAmount));
    setIsLoanding(false);
  }

  return (
    <View style={styles.screen}>
      <Card style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{' '}
          <Text style={styles.amount}>
            ${Math.round(cartTotalAmount.toFixed(2) * 100) / 100}
          </Text>
        </Text>
        {isLoading ?
      (<ActivityIndicator size='large' color={Colors.primary}/>):
        (<Button
          color={Colors.secondary}
          title='Oreder Now'
          disabled={cartItems.length === 0}
          onPress={sendOrderHandler}
        />)}
      </Card>
      <FlatList
        data={cartItems}
        keyExtractor={element => element.productId}
        renderItem={itemData => (
          <CartItem
            amount={itemData.item.sum}
            title={itemData.item.productTitle}
            quantity={itemData.item.quantity}
            deletable
            onRemove={() => {
              dispatch(cartActons.removeFromCart(itemData.item.productId));
            }}
          />
        )}
      />
    </View>
  );
};

CartScreen.navigationOptions = {
  headerTitle: 'Your Cart'
};

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10
  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  amount: {
    color: Colors.primary
  }
});

export default CartScreen;

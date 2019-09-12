import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

import * as cartActions from '../../store/actions/cartActions';

const ProductsOverviewScreen = props => {
const products = useSelector(state => state.products.availableProducts);
const dispatch = useDispatch();
return (
  <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={element => (
          <ProductItem
            image={element.item.imageUrl}
            title={element.item.title}
            price={element.item.price}
            onViewDetail={() => {
              props.navigation.navigate('ProductDetail', {
                productId: element.item.id,
                productTitle: element.item.title
              });
            }}
            onAddToCart={() => {
              dispatch(cartActions.addToCart(element.item));
            }}
          />)
}
/>
);
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products'
};

export default ProductsOverviewScreen;

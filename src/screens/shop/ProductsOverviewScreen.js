import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={element =>
            <ProductItem
                image={element.item.imageUrl}
                title={element.item.title}
                price={element.item.price}
                onViewDetail={()=> {
                    props.navigation.navigate( 'ProductDetail', {
                        productId: element.item.id,
                        productTitle: element.item.title
                    });
                }}
                onAddToCart={()=>{}}
            />
    }
    />
);

}

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductsOverviewScreen;

import React from 'react';
import Header from '../Components/Header';
import Product from '../stack/Product';
import {createStackNavigator} from '@react-navigation/stack';
import ReviewProduct from '../stack/ReviewProduct';
import Cart from '../stack/Cart';
const Stack = createStackNavigator();
const Home = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: () => <Header navigation={navigation} title="product" />,
        }}
        name="Product"
        component={Product}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <Header navigation={navigation} title="review" />,
        }}
        name="ReviewProduct"
        component={ReviewProduct}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <Header title="SHOPPING CART" />,
        }}
        name="Cart"
        component={Cart}
      />
    </Stack.Navigator>
  );
};

export default Home;

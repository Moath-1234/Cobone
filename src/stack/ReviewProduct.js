import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Text, View, Image, StyleSheet} from 'react-native';
import Apple from 'react-native-vector-icons/dist/AntDesign';
import Cart from 'react-native-vector-icons/dist/Zocial';
import Fonts from '../Themes/Fonts';
import HighLight from '../Components/Highlights';
import {useRoute, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/Entypo';

const ReviewProduct = () => {
  const {navigate} = useNavigation();
  const [item, setitem] = useState(1);
  const route = useRoute();
  return (
    <>
      <View style={styles.review}>
        <ScrollView>
          <Text style={styles.description}>{route.params.description}</Text>
          <Image source={route.params.img} style={styles.pic} />
          <View style={styles.info}>
            <Text style={styles.title}>{route.params.textLevel}</Text>
            <View style={styles.quantity}>
              <Text style={styles.quantityType}>Quantity</Text>
              <Text style={styles.newPrice}>SAR {route.params.newPrice}</Text>
            </View>
            <View style={styles.price}>
              <View style={styles.numItem}>
                <TouchableOpacity>
                  <Icon
                    style={styles.nigative}
                    name="minus"
                    size={25}
                    onPress={() => {
                      if (item > 1) {
                        return setitem(item - 1);
                      }
                      item;
                    }}
                  />
                </TouchableOpacity>
                <Text>{item}</Text>
                <TouchableOpacity onPress={() => setitem(item + 1)}>
                  <Icon style={styles.nigative} name="plus" size={25} />
                </TouchableOpacity>
              </View>
              <View style={styles.save}>
                <Text style={styles.saveOff}>39% OFF</Text>
                <Text style={styles.lastPrice}>
                  SAR {route.params.lastPrice}
                </Text>
              </View>
            </View>
          </View>
          <HighLight />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View>
          <TouchableOpacity style={styles.buy}>
            <Text style={styles.buyText}>
              Buy with <Apple name="apple1" size={20} />
              pay
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.addCart}
            onPress={() => navigate('Cart', [route.params, item])}>
            <Text style={styles.cartText}>
              <Cart name="cart" size={20} /> ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ReviewProduct;

const styles = StyleSheet.create({
  review: {
    backgroundColor: '#fff',
    paddingBottom: 100,
  },
  description: {
    padding: 10,
    fontSize: Fonts.xsm,
    color: 'gray',
    fontFamily: Fonts.bold,
  },
  pic: {
    width: '100%',
    height: 200,
  },
  info: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'silver',
  },
  title: {
    fontSize: Fonts.sm,
  },
  numItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  quantityType: {
    color: 'gray',
    marginLeft: 25,
  },
  newPrice: {
    color: '#1a92af',
    fontSize: Fonts.md,
  },
  nigative: {
    padding: 5,
    backgroundColor: '#ededed',
    marginHorizontal: 10,
    color: 'gray',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  save: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saveOff: {
    marginHorizontal: 10,
    color: 'orange',
    paddingVertical: 2,
    alignItems: 'center',
    paddingHorizontal: 4,
    backgroundColor: '#ededed',
    fontSize: Fonts.sm,
  },
  lastPrice: {
    color: 'silver',
    textDecorationLine: 'line-through',
    fontSize: Fonts.sm,
  },
  buy: {
    backgroundColor: '#000',
    paddingVertical: 10,
  },
  buyText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: Fonts.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCart: {
    backgroundColor: '#1a92af',
    paddingVertical: 10,
    marginTop: 5,
  },
  cartText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: Fonts.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    zIndex: 10,
    bottom: 5,
    width: '100%',
    height: 100,
  },
});

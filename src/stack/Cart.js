import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Trash from 'react-native-vector-icons/dist/FontAwesome';
import Fonts from '../Themes/Fonts';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';

const Cart = () => {
  const [taggle, setTaggle] = useState(false);
  const route = useRoute();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (route.params) {
      setData((prevData) => {
        return [
          ...prevData,
          {
            key: Math.random().toString(),
            img: route.params[0].img,
            descriptionTitle: route.params[0].description,
            descriptionTitle1: route.params[0].textLevel,
            price: route.params[0].newPrice,
            num: route.params[1],
          },
        ];
      });
    }
  }, []);

  const handleDelet = (id) => {
    setData((prevTodo) => {
      return prevTodo.filter((item) => item.key != id);
    });
  };
  return (
    <View>
      {data.length < 1 ? (
        <View
          style={{
            alignItems: 'center',
            top: 250,
            fontSize: Fonts.xxxl,
            fontFamily: Fonts.bold,
          }}>
          <Text style={{fontSize: Fonts.sm}}>NO DEALS ADDED</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          extraData={taggle}
          renderItem={({item}) => (
            <View style={styles.cart}>
              <Image style={styles.pic} source={item.img} />
              <View style={styles.description}>
                <Text style={styles.descriptionTitle}>
                  {item.descriptionTitle}
                </Text>
                <Text style={styles.descriptionTitle1}>
                  {item.descriptionTitle1}
                </Text>
                <View>
                  <Text style={styles.quntitiy}>Select The quntity</Text>
                  <View style={styles.add}>
                    <View style={styles.addItem}>
                      <TouchableOpacity style={styles.plus}>
                        <Icon
                          name="minus"
                          size={25}
                          style={{color: 'gray'}}
                          onPress={() => {
                            if (item.num === 0) {
                              return item.num;
                            }
                            item.num = item.num - 1;
                            setTaggle(!taggle);
                          }}
                        />
                      </TouchableOpacity>

                      <View style={styles.num}>
                        <Text style={styles.numItem}>
                          {item.num < 0 ? '0' : item.num}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={styles.plus}
                        onPress={() => {
                          item.num = item.num + 1;
                          setTaggle(!taggle);
                        }}>
                        <Icon name="plus" size={25} style={{color: 'gray'}} />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Trash
                        name="trash-o"
                        size={30}
                        style={{color: 'gray'}}
                        onPress={() => handleDelet(item.key)}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.price}>
                <Text style={styles.priceNum}>
                  {item.num < 0 ? 0 : item.price * item.num}
                </Text>
                <Text style={styles.priceQuntity}>SAR</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cart: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 20,
  },
  pic: {
    flex: 2,
    height: 120,
    resizeMode: 'contain',
  },
  description: {
    flex: 3,
    padding: 10,
  },
  descriptionTitle: {
    fontSize: Fonts.xxsm,
    fontFamily: Fonts.bold,
    marginBottom: 3,
  },
  descriptionTitle1: {
    fontSize: Fonts.xsm,
    color: 'gray',
  },
  quntitiy: {
    fontSize: Fonts.xxsm,
    color: 'gray',
    marginTop: 10,
  },

  add: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addItem: {
    flex: 2,
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  plus: {
    borderWidth: 2,
    borderRadius: 40,
    borderColor: 'gray',
    color: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  num: {
    fontSize: Fonts.md,
    marginHorizontal: 7,
    borderWidth: 2,
    borderRadius: 70,
    borderColor: '#1a92af',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numItem: {
    fontSize: Fonts.sm,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  price: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: 'gray',
    marginVertical: 10,
  },
  priceNum: {
    fontSize: Fonts.xl,
    color: '#1a92af',
  },
});

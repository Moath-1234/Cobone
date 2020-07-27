import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import NoteIcon from 'react-native-vector-icons/dist/Ionicons';
import Arrow from 'react-native-vector-icons/dist/MaterialIcons';
import Fonts from '../Themes/Fonts';
import {useNavigation} from '@react-navigation/native';

const Product = () => {
  const [data] = useState([
    {
      key: '1',
      img: require('../assests/59.jpg'),
      titleCard: ' At The Top Burj Khalifa Fast Track Ticket',
      textLevel: 'Entry to Level 125 + F&B Treat',
      Name: 'Burj khalifa',
      lastPrice: 145,
      newPrice: 99,
      description:
        'Pay SAR 7 only and get Buy One Get one voucher from TOM TOM Restaurant ! ',
      isLike: false,
      numItem: 0,
    },
    {
      key: '2',
      img: require('../assests/fish.jpg'),
      titleCard: ' Save Up to 51% at Fish & Co Restaurant',
      textLevel: ' Valid for food & drinks at 5 locations',
      Name: 'Multiple Locations',
      lastPrice: 145,
      newPrice: 51,
      description:
        'Pay SAR 7 only and get Buy One Get one voucher from TOM TOM Restaurant !',
      isLike: false,
      numItem: 0,
    },

    {
      key: '3',
      img: require('../assests/yamama.jpg'),
      titleCard: ' At The Top Burj Khalifa Fast Track Ticket',
      textLevel: 'Entry to Level 125 + F&B Treat',
      Name: 'Burj khalifa',
      lastPrice: 145,
      newPrice: 99,
      description:
        'Enjoy a quality time with your family or friends and get one day use at Al Yamama Resort for SAR 550 only!',
      isLike: false,
      numItem: 0,
    },
    {
      key: '4',
      img: require('../assests/fish.jpg'),
      titleCard: ' Save Up to 51% at Fish & Co Restaurant',
      textLevel: ' Valid for food & drinks at 5 locations',
      Name: 'Multiple Locations',
      lastPrice: 145,
      newPrice: 51,
      description:
        'Pay SAR 7 only and get Buy One Get one voucher from TOM TOM Restaurant !',
      isLike: false,
      numItem: 0,
    },
  ]);

  const {navigate} = useNavigation();
  const [active, setActive] = useState('');
  const [taggle, setTaggle] = useState(false);
  const [arrowLeft, setArrowLeft] = useState(false);

  return (
    <>
      <View style={styles.categories}>
        <Arrow
          name="keyboard-arrow-left"
          size={35}
          style={
            arrowLeft
              ? {
                  color: '#1a92af',
                }
              : {display: 'none'}
          }
        />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          onScrollBeginDrag={() => {
            setArrowLeft(true);
          }}>
          <Text
            style={
              active === 'feature'
                ? [styles.label, styles.active]
                : styles.label
            }
            onPress={() => setActive('feature')}>
            FEATURED
          </Text>
          <Text
            style={
              active === 'new' ? [styles.label, styles.active] : styles.label
            }
            onPress={() => setActive('new')}>
            NEW IN
          </Text>
          <Text
            style={
              active === 'best' ? [styles.label, styles.active] : styles.label
            }
            onPress={() => setActive('best')}>
            BEST SELLERS
          </Text>
          <Text
            style={
              active === 'food' ? [styles.label, styles.active] : styles.label
            }
            onPress={() => setActive('food')}>
            FOOD
          </Text>
          <Text
            style={
              active === 'auto' ? [styles.label, styles.active] : styles.label
            }
            onPress={() => setActive('auto')}>
            AUTO
          </Text>
          <Text
            style={
              active === 'welliness'
                ? [styles.label, styles.active]
                : styles.label
            }
            onPress={() => setActive('welliness')}>
            WELLINESS
          </Text>
          <Text
            style={
              active === 'jewellry'
                ? [styles.label, styles.active]
                : styles.label
            }
            onPress={() => setActive('jewellry')}>
            JEWELLRY
          </Text>
          <Text
            style={
              active === 'all' ? [styles.label, styles.active] : styles.label
            }
            onPress={() => setActive('all')}>
            ALL DEALS
          </Text>
        </ScrollView>
        <Arrow
          name="keyboard-arrow-right"
          size={35}
          style={{
            color: '#1a92af',
          }}
        />
      </View>
      <View style={styles.product}>
        <View style={styles.cards}>
          <FlatList
            showsVerticalScrollIndicator={false}
            extraData={taggle}
            data={data}
            renderItem={({item}) => (
              <View style={styles.card}>
                <NoteIcon
                  name="heart"
                  size={25}
                  style={item.isLike ? styles.heart1 : styles.heart}
                  onPress={() => {
                    item.isLike = !taggle;
                    setTaggle(!taggle);
                  }}
                />
                <TouchableOpacity
                  activeOpacity={2}
                  onPress={() => {
                    console.log(item.numItem);
                    navigate('ReviewProduct', item);
                  }}>
                  <View style={styles.topCard}>
                    <Image source={item.img} style={styles.pic} />

                    <Text style={styles.titleCard}>{item.titleCard}</Text>
                    <Text style={styles.textLevel}>{item.textLevel}</Text>
                    <TouchableOpacity activeOpacity={2} style={styles.Name1}>
                      <Text style={styles.Name}>{item.Name}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.price}>
                    <View style={styles.priceLeft}>
                      <View style={styles.sale}>
                        <Text style={styles.currencyType}>SAR</Text>
                        <Text style={styles.lastPrice}>{item.lastPrice}</Text>
                      </View>
                      <Text style={styles.newPrice}> {item.newPrice}</Text>
                    </View>
                    <TouchableOpacity style={styles.priceRight}>
                      <Text style={styles.st}>VIEW DEAL</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  categories: {
    backgroundColor: '#fff',
    marginBottom: 5,
    borderTopWidth: 1,
    borderTopColor: 'silver',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  label: {
    fontSize: Fonts.xsm,
    marginHorizontal: 5,
    paddingVertical: 20,
    color: '#0009',
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    color: '#1a92af',
    borderBottomColor: '#1a92af',
    borderBottomWidth: 3,
  },

  product: {
    paddingBottom: 80,
  },
  cards: {},
  card: {
    borderRadius: 7,
    backgroundColor: '#fff',
    elevation: 3,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  topCard: {
    padding: 5,
  },
  pic: {
    width: '100%',
    height: 150,
    position: 'relative',
  },
  heart: {
    position: 'absolute',
    zIndex: 10,
    right: 10,
    top: 10,
    color: 'silver',
  },
  heart1: {
    position: 'absolute',
    zIndex: 10,
    right: 10,
    top: 10,
    color: 'orange',
  },
  titleCard: {
    fontSize: Fonts.md,
    marginVertical: 10,
    color: '#000',
  },
  textLevel: {
    color: 'gray',
  },
  Name1: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  Name: {
    borderWidth: 1,
    borderColor: '#3333',
    fontSize: 12,
    color: '#da6c1e',
    borderRadius: 4,
    paddingHorizontal: 5,
  },
  price: {
    flexDirection: 'row',
    backgroundColor: '#3ea4c4',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  priceLeft: {
    flex: 1,
    justifyContent: 'flex-start',
    color: '#fff',
    fontSize: 20,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  priceRight: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  st: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    borderRadius: 15,
    paddingHorizontal: 8,
    fontSize: Fonts.xxsm,
  },
  sale: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  lastPrice: {
    textDecorationLine: 'line-through',
    color: '#dbdbdb',
    paddingBottom: 5,
    fontSize: Fonts.md,
    marginLeft: 5,
  },
  currencyType: {
    color: '#fff',
    fontSize: Fonts.xxsm,
    paddingBottom: 8,
  },
  newPrice: {
    color: '#fff',
    fontSize: Fonts.xxxl,
  },
});

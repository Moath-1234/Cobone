import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/dist/Entypo';
import NoteIcon from 'react-native-vector-icons/dist/Zocial';
import Search from 'react-native-vector-icons/dist/FontAwesome';
import Fonts from '../Themes/Fonts';
import DropDownPicker from 'react-native-dropdown-picker';
const Header = ({navigation, title}) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  const [country, setCountry] = useState('uae');
  return (
    <>
      {title === 'product' ? (
        <View style={styles.header}>
          <TouchableOpacity style={styles.rigthHeader} onPress={openMenu}>
            <Icons name="menu" size={35} style={{color: '#da6c1e'}} />
          </TouchableOpacity>
          <DropDownPicker
            items={[
              {
                label: 'Lebanon',
                value: 'lebanon',
                icon: () => (
                  <Image
                    source={require('../assests/Lebanon.png')}
                    style={{width: 18, height: 13}}
                  />
                ),
              },
              {
                label: 'UAE',
                value: 'uae',
                icon: () => (
                  <Image
                    source={require('../assests/uae.png')}
                    style={{width: 18, height: 13}}
                  />
                ),
              },
              {
                label: 'Jordan',
                value: 'jordan',
                icon: () => (
                  <Image
                    source={require('../assests/jordan.webp')}
                    style={{width: 18, height: 13}}
                  />
                ),
              },
            ]}
            multipleText="%d items have been selected."
            min={0}
            max={10}
            defaultValue={country}
            style={{borderColor: '#ededed'}}
            containerStyle={{
              textAlign: 'center',
              fontSize: Fonts.md,
              height: 35,
              width: '35%',
              marginLeft: 20,
            }}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            onChangeItem={(item) => {
              console.log(item);
              setCountry(item.value);
            }}
          />
          <View style={styles.leftHeader}>
            <TouchableOpacity style={styles.cart}>
              <NoteIcon
                name="cart"
                size={30}
                onPress={() => navigation.navigate('Cart')}
                style={{color: 'gray'}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Search name="search" size={30} style={{color: '#1a92af'}} />
            </TouchableOpacity>
          </View>
        </View>
      ) : title === 'review' ? (
        <View style={styles.header}>
          <DropDownPicker
            items={[
              {
                label: 'Lebanon',
                value: 'lebanon',
                icon: () => (
                  <Image
                    source={require('../assests/Lebanon.png')}
                    style={{width: 18, height: 13}}
                  />
                ),
              },
              {
                label: 'UAE',
                value: 'uae',
                icon: () => (
                  <Image
                    source={require('../assests/uae.png')}
                    style={{width: 18, height: 13}}
                  />
                ),
              },
              {
                label: 'Jordan',
                value: 'jordan',
                icon: () => (
                  <Image
                    source={require('../assests/jordan.webp')}
                    style={{width: 18, height: 13}}
                  />
                ),
              },
            ]}
            multipleText="%d items have been selected."
            min={0}
            max={10}
            defaultValue={country}
            style={{borderColor: '#ededed'}}
            containerStyle={{
              textAlign: 'center',
              alignItems: 'center',
              fontSize: Fonts.md,
              height: 35,
              width: '40%',
            }}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            onChangeItem={(item) => {
              console.log(item);
              setCountry(item.value);
            }}
          />
          <View style={styles.leftHeader}>
            <TouchableOpacity style={styles.cart}>
              <NoteIcon
                name="cart"
                size={30}
                onPress={() => navigation.navigate('Cart')}
                style={{color: 'gray'}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icons name="share" size={30} style={{color: '#1a92af'}} />
            </TouchableOpacity>
          </View>
        </View>
      ) : title === 'SHOPPING CART' ? (
        <View style={styles.header}>
          <Text style={styles.titleHeader}>{title}</Text>
        </View>
      ) : null}
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',

    zIndex: 10,
  },
  rigthHeader: {
    flex: 1,
  },
  titleHeader: {
    flex: 1,
    fontSize: Fonts.lg,
    textAlign: 'center',
    right: 30,
  },
  leftHeader: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    justifyContent: 'flex-end',
  },
  cart: {
    marginRight: 25,
  },
});

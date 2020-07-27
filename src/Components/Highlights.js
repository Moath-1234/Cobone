import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Fonts from '../Themes/Fonts';

const HighLight = () => {
  return (
    <View style={styles.highlight}>
      <Text style={styles.highTitle}>Highlights</Text>
      <View style={styles.ul}>
        <View style={styles.list}>
          <Text style={styles.listStyle}></Text>
          <Text style={styles.li}>
            Get a smooth and flawless skin with Full body Laser hair removal
            session at Jwel Clinics for SAR 250 only!
          </Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.listStyle}></Text>
          <Text style={styles.li}>
            Keep your child entertained at Billy Beez! Get full day admission
            with variety of activities from only SAR 37! Valid at all branches
            across KSA
          </Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.listStyle}></Text>
          <Text style={styles.li}>
            Children can enjoy a variety of activities from trampolines to
            slides and rope climbing
          </Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.listStyle}></Text>
          <Text style={styles.li}>
            Children can enjoy a variety of activities from trampolines to
            slides and rope climbing
          </Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.listStyle}></Text>
          <Text style={styles.li}>
            Children can enjoy a variety of activities from trampolines to
            slides and rope climbing
          </Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.listStyle}></Text>
          <Text style={styles.li}>
            Children can enjoy a variety of activities from trampolines to
            slides and rope climbing
          </Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.listStyle}></Text>
          <Text style={styles.li}>
            Children can enjoy a variety of activities from trampolines to
            slides and rope climbing
          </Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.listStyle}></Text>
          <Text style={styles.li}>
            Children can enjoy a variety of activities from trampolines to
            slides and rope climbing
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HighLight;

const styles = StyleSheet.create({
  highlight: {
    margin: 15,
  },
  highTitle: {
    fontSize: Fonts.lg,
  },
  ul: {
    marginTop: 10,
  },

  list: {
    flexDirection: 'row',
    padding: 10,
  },
  li: {
    color: 'gray',
    fontSize: Fonts.xsm,
  },
  listStyle: {
    marginRight: 10,
    width: 7,
    height: 7,
    borderRadius: 50,
    backgroundColor: 'black',
    opacity: 0.9,
    alignItems: 'center',
    marginTop: 6,
  },
});

import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default function Categories() {
  const items = [
    {
      image: require("../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      image: require("../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../assets/images/fast-food.png"),
      text: "Fast Food",
    },
    {
      image: require("../assets/images/coffee.png"),
      text: "Coffee",
    },
    {
      image: require("../assets/images/desserts.png"),
      text: "Desserts",
    },
  ];

  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {items.map((item) => (
        <View style={styles.itemHolder} key={item.text}>
          <Image source={item.image} style={styles.imageHolder} />
          <Text style={styles.textHolder}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginTop: 5,
    paddingVertical: 10,
    borderTopColor: 'black'
  },
  itemHolder: {
    alignItems: "center",
    gap: 8,
    marginRight: 30,
  },
  imageHolder: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  textHolder: {
    fontSize: 13,
    fontWeight: "900",
  },
});

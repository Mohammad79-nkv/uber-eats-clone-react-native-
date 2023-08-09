import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function RestaurantItem(props) {
  const { imageSrc, title, rate, estimateTime } = props;
  return (
    <View style={styles.container}>
      <Image source={imageSrc} style={styles.imageHolders} />
      <View style={styles.foodInfo}>
        <View>
          <Text style={styles.foodTitle}>{title}</Text>
          <Text style={styles.foodEstimate}>{estimateTime} min</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  imageHolders: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  foodInfo: {
    padding: 10,
  },
  foodTitle: {
    fontSize: 13,
    fontWeight: "bold",
  },
  foodEstimate: {},
});

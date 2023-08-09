import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import StarRating from "react-native-star-rating-widget";

export default function RestaurantItem(props) {
  const { imageSrc, title, rate, estimateTime } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={imageSrc} style={styles.imageHolders} />
      <View style={styles.foodInfo}>
        <View>
          <Text style={styles.foodTitle}>{title}</Text>
          <Text style={styles.foodEstimate}>{estimateTime} min</Text>
        </View>
        <StarRating rating={rate} enableSwiping={false} onChange={() => {}} starSize={20} starStyle={{margin: 0, padding: 0}} />
      </View>
    </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  foodTitle: {
    fontSize: 13,
    fontWeight: "bold",
  },
  foodEstimate: {},
});

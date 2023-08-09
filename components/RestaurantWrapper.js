import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import RestaurantItem from "./RestaurantItem";

export default function RestaurantWrapper() {
  const items = [
    {
      imageSrc: require("../assets/images/hamber1.png"),
      title: "Hamber",
      rate: 5,
      estimateTime: 45,
    },
    {
      imageSrc: require("../assets/images/hamber1.png"),
      title: "Hamber",
      rate: 5,
      estimateTime: 45,
    },
    {
      imageSrc: require("../assets/images/hamber1.png"),
      title: "Hamber",
      rate: 5,
      estimateTime: 45,
    },
    {
        imageSrc: require("../assets/images/hamber1.png"),
        title: "Hamber",
        rate: 5,
        estimateTime: 45,
      },
      {
        imageSrc: require("../assets/images/hamber1.png"),
        title: "Hamber",
        rate: 5,
        estimateTime: 45,
      },
      {
        imageSrc: require("../assets/images/hamber1.png"),
        title: "Hamber",
        rate: 5,
        estimateTime: 45,
      },
  ];

  return (
    <ScrollView >
      {items.map((item, index) => (
        <RestaurantItem key={index} {...item} />
      ))}
    </ScrollView>
  );
}

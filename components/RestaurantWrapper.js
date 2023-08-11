import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import RestaurantItem from "./RestaurantItem";

export default function RestaurantWrapper() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const YELP_API_KEY =
    "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then(res => alert(res))
      // .then(res => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

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
    <ScrollView>
      {items.map((item, index) => (
        <RestaurantItem key={index} {...item} />
      ))}
    </ScrollView>
  );
}

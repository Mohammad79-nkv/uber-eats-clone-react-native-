import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantWrapper from "../components/RestaurantWrapper";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView  >
        <Categories />
        <RestaurantWrapper />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1
  },
  wrapper: {
    // backgroundColor: "#ffffff",
    // padding: 15,
  },
});

import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <HeaderTabs />
        <SearchBar />
        <Categories />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
  },
  wrapper: {
    backgroundColor: "#ffffff",
    padding: 15,
  },
});

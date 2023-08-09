import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Delivery", active: true },
    { id: 2, title: "Pickup", active: false },
  ]);

  const handleChangeTab = (id) => {
    const updatedTabs = tabs.map((tab) =>
      tab.id === id ? { ...tab, active: true } : { ...tab, active: false }
    );
    setTabs(updatedTabs);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <HeaderButton
          key={tab.id}
          text={tab.title}
          active={tab.active}
          onPress={() => handleChangeTab(tab.id)}
        />
      ))}
    </View>
  );
}

const HeaderButton = (props) => {
  const { text, active, onPress } = props;

  return (
    <TouchableOpacity style={styles.tabBtn(active)} onPress={onPress}>
      <Text style={{ color: active ? "white" : "black", fontWeight: 900 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#ffffff",
    flexDirection: "row",
    alignSelf: "center",
  },
  tabBtn: (active) => ({
    backgroundColor: active ? "black" : "white",
    color: active ? "white" : "black",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
    fontSize: 15,
    fontWeight: "900",
  }),
});

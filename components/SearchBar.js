import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search..."
        styles={{
          textInput: {
            backgroundColor: "#eee",
            fontWeight: 700,
            borderRadius: 20,
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={styles.searchLeftBtn}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.searchRightBtn}>
            <AntDesign name="clockcircle" size={11} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
  },
  searchLeftBtn: {
    marginLeft: 10,
  },
  searchRightBtn: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginRight: 8,
    borderRadius:20,
    padding: 10,
  },
});

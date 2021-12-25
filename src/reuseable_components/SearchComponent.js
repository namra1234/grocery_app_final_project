import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, TextInput, StyleSheet } from "react-native";

const SearchComponent = ({ word, onWordChange, onWordSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" size={20} style={styles.Icon} />
      <TextInput
        autoCorrect={false}
        placeholder="Search"
        autoCapitalize="none"
        style={styles.iStyle}
        onEndEditing={onWordSubmit}
        value={word}
        // onChangeText={newword => onWordChange(newword)}
        onChangeText={onWordChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iStyle: {
    fontSize: 19,
    flex: 1,
  },
  backgroundStyle: {
    backgroundColor: "#F7F3F3",
    marginTop: 11,
    borderRadius: 4,
    height: 51,
    flexDirection: "row",
    marginHorizontal: 14,
  },
  Icon: {
    marginTop:10,
    marginHorizontal: 14,
    fontSize: 34,
  },
});

export default SearchComponent;

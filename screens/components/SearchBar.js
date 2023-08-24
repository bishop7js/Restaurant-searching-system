import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";

const SearchBar = (props) => {

    const { term, onChangeTerm } = props;

  return (
    <View style={styles.background}>
      <View>
        <Feather style={styles.iconStyle} name="search" />
      </View>
      <View>
        <TextInput
        value={term}
          autoCapitalize="none"
          autoCorrect="none"
          style={styles.inputStyle}
          placeholder="Search"
          onChangeText={(value) => onChangeTerm(value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#CCCCCC",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: "row",
  },

  inputStyle: {
    fontSize: 18,
    flex: 1,
  },

  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
    marginTop: 8,
  },
});

export default SearchBar;

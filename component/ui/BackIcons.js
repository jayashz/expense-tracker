import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { colors } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const BackIcons = ({ nav }) => {
  const navigation = useNavigation();
  function back() {
    navigation.goBack();
  }
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <TouchableOpacity style={styles.btnl} onPress={back}>
        <Ionicons name="arrow-back" size={20} color="black" />
      </TouchableOpacity>

      {nav && (
        <TouchableOpacity style={styles.btnr} onPress={back}>
          <Ionicons name="arrow-forward" size={20} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BackIcons;
const styles = StyleSheet.create({
  btnl: {
    backgroundColor: colors.primary300,
    padding: 4,
    marginLeft: 15,
    borderTopEndRadius: 12,
    borderBottomLeftRadius: 12,
  },
  btnr: {
    backgroundColor: colors.primary300,
    padding: 4,
    marginLeft: 15,
    borderTopLeftRadius: 12,
    borderBottomRightRadius:12,
    marginRight:15,
  },
});

import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";

const HeaderComponent = ({ title }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export { HeaderComponent };

import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";

const ParagraphComponent = ({ text }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export { ParagraphComponent };

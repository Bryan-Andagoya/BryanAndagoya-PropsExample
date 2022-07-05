import { View, Image } from "react-native";
import React from "react";
import { styles } from "./style";

const ImageComponent = ({ height, width }) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../../../assets/props.png")}
        style={{ height, width }}
      />
    </View>
  );
};

export { ImageComponent };

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  HeaderComponent,
  ImageComponent,
  ParagraphComponent,
} from "./app/components";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HeaderComponent title="React Native Props" />
      <ParagraphComponent text="Los Props se refieren a las propiedades las cuales cumplen un rol importante en el proceso de desarrollo de una aplicación o página web." />
      <ImageComponent height={200} width={350} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

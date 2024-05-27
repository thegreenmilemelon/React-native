import { Alert, Pressable, View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const AppBarTab = ({ text, color = "appTextColor" }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => Alert.alert(text)}>
        <Text color={color} fontWeight="bold">
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;

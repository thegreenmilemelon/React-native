import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import { displayCount } from "./count";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  flexRow: {
    flexDirection: "row",
    columnGap: 10,
    // padding: 10,
  },
  flexCol: {
    flexDirection: "column",
    paddingLeft: 10,
    gap: 5,
  },
  imageSize: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  ratings: {
    justifyContent: "center",
    alignItems: "center",
    columnGap: 60,
  },
  language: {
    backgroundColor: "#0068D4",
    borderRadius: 5,
    padding: 7,
    color: "white",
    alignSelf: "flex-start",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const RepositoruItem = (props) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.flexRow]}>
        <Image
          style={styles.imageSize}
          source={{ uri: props.ownerAvatarUrl }}
        />
        <View style={[styles.flexCol]}>
          <Text fontWeight={"bold"}>{props.fullName}</Text>
          <Text color={"textSecondary"}>{props.description}</Text>
          <Text style={styles.language}> {props.language}</Text>
        </View>
      </View>
      <View style={[styles.flexRow, styles.ratings]}>
        <View style={[styles.flexCol]}>
          <Text fontWeight={"bold"}>{displayCount(props.stargazersCount)}</Text>
          <Text color={"textSecondary"}>Stars</Text>
        </View>
        <View style={[styles.flexCol]}>
          <Text fontWeight={"bold"}>{displayCount(props.forksCount)}</Text>
          <Text color={"textSecondary"}>Forks</Text>
        </View>
        <View style={[styles.flexCol]}>
          <Text fontWeight={"bold"}>{displayCount(props.reviewCount)}</Text>
          <Text color={"textSecondary"}>Reviews</Text>
        </View>
        <View style={[styles.flexCol]}>
          <Text fontWeight={"bold"}>{props.ratingAverage}</Text>
          <Text color={"textSecondary"}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoruItem;

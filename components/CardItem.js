import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const CardItem = ({ data, type }) => {
  console.log(data);
  const upScaledImage = data.artworkUrl100.replace("100x100bb", "400x400bb");
  return (
    <View style={styles.cardContainer}>
      <Image
        style={{ width: "100%", height: 200 }}
        source={{ uri: upScaledImage }}
      />
      <Text style={styles.cardTitle}>{data.collectionName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "column",
    maxWidth: 200,
  },
});

export default CardItem;

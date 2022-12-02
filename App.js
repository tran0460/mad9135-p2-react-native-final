import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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

/**
 * @exampleObject
 * {
   "wrapperType":"track",
   "kind":"song",
   "artistId":1480650970,
   "collectionId":1597240359,
   "trackId":1597240459,
   "artistName":"Martin Deejay",
   "collectionName":"2022 EDM (Best of Techno, Trance, House, Progressive & Dance Party Anthems)",
   "trackName":"Man! I Feel Like a Woman (Ultra Dance Mix)",
   "collectionCensoredName":"2022 EDM (Best of Techno, Trance, House, Progressive & Dance Party Anthems)",
   "trackCensoredName":"Man! I Feel Like a Woman (Ultra Dance Mix)",
   "collectionArtistId":331122,
   "collectionArtistName":"Various Artists",
   "artistViewUrl":"https://music.apple.com/ca/artist/martin-deejay/1480650970?uo=4",
   "collectionViewUrl":"https://music.apple.com/ca/album/man-i-feel-like-a-woman-ultra-dance-mix/1597240359?i=1597240459&uo=4",
   "trackViewUrl":"https://music.apple.com/ca/album/man-i-feel-like-a-woman-ultra-dance-mix/1597240359?i=1597240459&uo=4",
   "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/10/d0/7d/10d07de9-bdae-98b2-67eb-529ad178baca/mzaf_2021689833828306172.plus.aac.p.m4a",
   "artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/ab/30/85/ab308535-6a60-2970-551d-f2022b2a187c/EDM5030.jpg/30x30bb.jpg",
   "artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/ab/30/85/ab308535-6a60-2970-551d-f2022b2a187c/EDM5030.jpg/60x60bb.jpg",
   "artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/ab/30/85/ab308535-6a60-2970-551d-f2022b2a187c/EDM5030.jpg/100x100bb.jpg",
   "collectionPrice":6.99,
   "trackPrice":1.29,
   "releaseDate":"2020-04-01T12:00:00Z",
   "collectionExplicitness":"notExplicit",
   "trackExplicitness":"notExplicit",
   "discCount":1,
   "discNumber":1,
   "trackCount":40,
   "trackNumber":33,
   "trackTimeMillis":247000,
   "country":"CAN",
   "currency":"CAD",
   "primaryGenreName":"Dance",
   "isStreamable":true
},
*/

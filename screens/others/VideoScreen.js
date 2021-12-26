import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';


export default function VideoScreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
    <Video
        ref={video}
        style={styles.video}
        source={require("../../assets/video.mp4")}
        useNativeControls
        resizeMode={Video.RESIZE_MODE_CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  video: {
    alignSelf: 'center',
    width: "100%",
    height: 300,
  },
});

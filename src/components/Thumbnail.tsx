import React from "react";
import { View, Image } from "react-native";

interface ThumbnailProps {
  uri: string;
}

const Thumbnail = ({ uri }: ThumbnailPros) => {
  return (
    <View>
      <Image source={{ uri }} />
    </View>
  );
};

export default Thumbnail;

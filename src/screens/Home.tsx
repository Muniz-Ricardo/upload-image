import React, { useState } from "react";
import { View, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Button from "../components/Button";
import Thumbnail from "../components/Thumbnail";

export default Home = () => {
  const [selectedImage, setSelectedImage] = useState<ImagePicker.ImageInfo>();

  const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (pickerResult.cancelled === true) return;
    setSelectedImage(pickerResult);
  };

  const uploadAsync = async () => {};

  return (
    <View>
      {selectedImage ? (
        <>
          <Thumbnail />
          <Button text={"button"} onPress={() => console.log("click")} />
          <Text>selecione uma imagem para upar!</Text>
        </>
      ) : (
        <Button onPress={openImagePickerAsync} text={"selecione"} />
      )}

      {selectedImage ? (
        <>
          <Thumbnail />
        </>
      ) : (
        <Button onPress={openImagePickerAsync} />
      )}
    </View>
  );
};

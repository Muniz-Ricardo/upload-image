import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  onPress: () => void;
  text: string;
}

const Button = ({ onPress, text }: ButtonPros) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

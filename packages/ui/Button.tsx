import * as React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { THEME } from "./Theme";

type ButtonProps = {
  message: string;
};

export const Button = ({ message }: ButtonProps) => {
  return (
    <Pressable
      onPress={() => alert(message)}
      style={({ pressed }) => [s.button, pressed && s.buttonPressed]}
    >
      <Text style={s.buttonText}>Button</Text>
    </Pressable>
  );
};

const s = StyleSheet.create({
  button: {
    backgroundColor: THEME.colors.brand,
    borderRadius: 100,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  buttonPressed: {
    backgroundColor: THEME.colors.brandDarken,
  },
  buttonText: {
    color: THEME.colors.text,
    fontWeight: "bold",
  },
});

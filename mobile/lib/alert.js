import { Alert, Platform } from "react-native";

export const customAlert = (title, message, buttons) => {
  if (Platform.OS === "web") {
    const formattedMessage = `${title}${message ? `\n\n${message}` : ""}`;
    
    if (buttons && buttons.length > 0) {
      if (buttons.length === 1) {
        window.alert(formattedMessage);
        if (typeof buttons[0].onPress === "function") {
          buttons[0].onPress();
        }
        return;
      }

      const cancelButton = buttons.find((btn) => btn.style === "cancel");
      const confirmButton = buttons.find((btn) => btn.style !== "cancel") || buttons[0];

      const result = window.confirm(formattedMessage);
      if (result) {
        if (confirmButton && typeof confirmButton.onPress === "function") {
          confirmButton.onPress();
        }
      } else {
        if (cancelButton && typeof cancelButton.onPress === "function") {
          cancelButton.onPress();
        }
      }
    } else {
      window.alert(formattedMessage);
    }
  } else {
    Alert.alert(title, message, buttons);
  }
};

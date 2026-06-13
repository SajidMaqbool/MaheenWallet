import { Slot } from "expo-router";
import SafeScreen from "@/components/SafeScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@/lib/tokenCache";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

const CLERK_KEY = "pk_test_YXNzdXJpbmctdGVycmFwaW4tODAuY2xlcmsuYWNjb3VudHMuZGV2JA";
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || CLERK_KEY;

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
        <SafeScreen>
          <Slot />
        </SafeScreen>
        <StatusBar style="dark" />
      </ClerkProvider>
    </SafeAreaProvider>
  );
}

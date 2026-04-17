import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        className="mt-4 rounded bg-primary text-center text-white p-4"
        href="/(auth)/sign-in"
      >
        Go to Sign In
      </Link>
      <Link
        className="mt-4 rounded bg-primary text-center text-white p-4"
        href="/(auth)/sign-up"
      >
        Go to Sign Up
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "spotify" },
        }}
      >
        Spotify Subscription
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claude Max Subscription
      </Link>
    </View>
  );
}

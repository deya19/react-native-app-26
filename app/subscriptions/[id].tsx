import { View, Text } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';

export default function SubscriptionDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  return (
    <View>
      <Text>SubscriptionDetails {id}</Text>
      <Link href="/(tab)/subscriptions">Back to Subscriptions</Link>
    </View>
  )
}
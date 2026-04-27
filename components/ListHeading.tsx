import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ListHeadingProps {
  title: string;
  onViewAllPress?: () => void;
}

export default function ListHeading({
  title,
  onViewAllPress,
}: ListHeadingProps) {
  return (
    <View className="list-head">
      <Text className="list-title">{title}</Text>

      {onViewAllPress && (
        <TouchableOpacity
          className="list-action"
          onPress={onViewAllPress}
          accessibilityRole="button"
          accessibilityLabel={`View all ${title}`}
        >
          <Text className="list-action-text">View all</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

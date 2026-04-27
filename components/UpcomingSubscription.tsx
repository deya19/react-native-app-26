import { formatCurrency } from "@/lib/utils";
import React from "react";
import { Image, Text, View } from "react-native";

const UpcomingSubscriptionCard = ({
  name,
  price,
  daysLeft,
  icon,
  currency,
}: UpcomingSubscription) => {
  const daysLeftLabel =
    daysLeft > 1
      ? `${daysLeft} days left`
      : daysLeft === 1
        ? "1 day left"
        : daysLeft === 0
          ? "Due today"
          : `${Math.abs(daysLeft)} day${Math.abs(daysLeft) === 1 ? "" : "s"} overdue`;

  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <Image source={icon} className="upcoming-icon" />
        <View>
          <Text className="upcoming-price">
            {formatCurrency(price, currency)}
          </Text>
          <Text className="upcoming-meta" numberOfLines={1}>
            {daysLeftLabel}
          </Text>
        </View>
      </View>

      <Text className="upcoming-name" numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
};
export default UpcomingSubscriptionCard;

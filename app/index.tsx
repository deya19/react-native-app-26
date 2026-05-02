import { useAuth } from "@clerk/expo";
import { Link, useRouter } from "expo-router";
import { styled } from "nativewind";
import React, { useEffect } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);
const StyledScrollView = styled(ScrollView);

export default function Welcome() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  // Redirect to main app if already signed in
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/(tab)");
    }
  }, [isLoaded, isSignedIn, router]);

  // Show loading state while checking auth
  if (!isLoaded) {
    return (
      <SafeAreaView className="flex-1 bg-accent items-center justify-center">
        <StyledText className="text-base font-sans-medium text-white">
          Loading...
        </StyledText>
      </SafeAreaView>
    );
  }

  // Don't render welcome screen if signed in (redirect in progress)
  if (isSignedIn) {
    return (
      <SafeAreaView className="flex-1 bg-accent items-center justify-center">
        <StyledText className="text-base font-sans-medium text-white">
          Redirecting...
        </StyledText>
      </SafeAreaView>
    );
  }

  const handleGetStarted = () => {
    router.push("/(auth)/sign-up");
  };

  return (
    <SafeAreaView className="flex-2 bg-accent">
      <StyledScrollView
        className="flex-1"
        contentContainerClassName="flex-grow justify-between px-6 pb-10 pt-5"
        showsVerticalScrollIndicator={false}
      >
        {/* Geometric Pattern */}
        <StyledView className="flex-1 justify-center">
          {/* Row 1 */}
          <StyledView className="flex-row justify-center -my-0.5">
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#F08A6E] rounded-tl-[70px]" />
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#F5D4A1] rounded-full" />
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#F5F0E1] rounded-tr-[70px] rounded-br-[70px]" />
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#F5D4A1] rounded-tl-[70px] rounded-bl-[70px]" />
          </StyledView>

          {/* Row 2 */}
          <StyledView className="flex-row justify-center -my-0.5">
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#F5F0E1] rounded-full" />
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#7FA693] rounded-full" />
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#F5D4A1] rounded-full" />
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#F5F0E1] rounded-tl-[70px] rounded-bl-[70px]" />
          </StyledView>

          {/* Row 3 */}
          <StyledView className="flex-row justify-center -my-0.5">
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#F5F0E1] rounded-tr-[70px] rounded-br-[70px]" />
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#3D4255] rounded-tr-[70px]" />
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#3D4255] rounded-tr-[70px] rounded-br-[70px]" />
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#F5D4A1] rounded-tl-[70px] rounded-bl-[70px]" />
          </StyledView>

          {/* Row 4 */}
          <StyledView className="flex-row justify-center -my-0.5">
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#3D4255] rounded-bl-[70px]" />
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#F5F0E1] rounded-tl-[70px]" />
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#F5F0E1] rounded-tr-[70px] rounded-br-[70px]" />
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#7FA693] rounded-full" />
          </StyledView>

          {/* Row 5 */}
          <StyledView className="flex-row justify-center -my-0.5">
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#F5F0E1] rounded-tr-[70px] rounded-br-[70px]" />
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#3D4255] rounded-br-[70px]" />
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#3D4255] rounded-full" />
            <StyledView className="w-[70px] h-[70px] m-0.5 bg-[#7FA693] rounded-tl-[70px] rounded-bl-[70px]" />
          </StyledView>
        </StyledView>

        {/* Text Content */}
        <StyledView className="items-center mt-5">
          <StyledText className="text-[32px] font-sans-bold text-white text-center mb-2">
            Gain Financial Clarity
          </StyledText>
          <StyledText className="text-base font-sans-medium text-white/80 text-center">
            Track, analyze and cancel with ease
          </StyledText>
        </StyledView>

        {/* CTA Button */}
        <StyledPressable
          className="bg-white py-4 px-8 rounded-[30px] items-center mt-6"
          onPress={handleGetStarted}
        >
          <StyledText className="text-base font-sans-bold text-primary">
            Get Started
          </StyledText>
        </StyledPressable>

        {/* Sign In Link */}
        <StyledView className="flex-row justify-center items-center mt-4">
          <StyledText className="text-sm font-sans-medium text-white/80">
            Already have an account?{" "}
          </StyledText>
          <Link href="/(auth)/sign-in" asChild>
            <StyledPressable>
              <StyledText className="text-sm font-sans-bold text-white">
                Sign In
              </StyledText>
            </StyledPressable>
          </Link>
        </StyledView>
      </StyledScrollView>
    </SafeAreaView>
  );
}

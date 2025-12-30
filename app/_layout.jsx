import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ title: 'Fokus' }}>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='pomodoro' options={{ headerShown: false }} />
    </Stack>
  );
}

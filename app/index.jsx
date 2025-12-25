import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Index(){

  return(
    <View>
      <Text>Home</Text>
      <Link href={{ pathname: '/pomodoro' }}>Quero iniciar</Link>
    </View>
  );
}
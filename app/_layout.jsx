import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function RootLayout(){

  const insets = useSafeAreaInsets();

  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
       <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor: '#005d9b60'
        }}
      >
        <Drawer
          screenOptions={{
            drawerStatusBarAnimation: 'slide',
            headerTitle: '',
            headerStatusBarHeight: 0,
            drawerStyle: {
              backgroundColor: '#021123',
              borderRadius: 0,
            },
            drawerLabelStyle: {
              color: '#fff'
            },
            headerStyle: {
              backgroundColor: '#021123',
              boxShadow: '0px 0px 0px transparent'
            },
            headerTintColor: '#fff'
            
          }}
        >
          <Drawer.Screen 
            name="index" 
            options={{ 
              headerShown: false, 
              drawerItemStyle: { display: 'none' }
            }}
          />
          <Drawer.Screen 
            name="pomodoro" 
            options={{
              drawerLabel: 'Timer',
            }}
          />
          <Drawer.Screen 
            name="tasks/index" 
            options={{
              drawerLabel: 'Lista de Tarefas'
            }}
          />
          <Drawer.Screen 
            name="add-task/index" 
            options={{
              drawerItemStyle: { display: 'none' },
              headerLeft: () => {
                return  <Ionicons 
                          name="arrow-back" 
                          color={'#fff'} 
                          size={24}
                          style={{ marginLeft: 16 }}
                          onPress={() => router.navigate('/tasks')}
                        />
              }
            }}
          />

        </Drawer>
      </View> 
    </GestureHandlerRootView>
  );
}

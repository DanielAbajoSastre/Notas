import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Notas from "./screens/Notas";
import CreateNote from "./screens/CreateNote";
import DetailsNote from "./screens/DetailsNote";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (

      //<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        options={{ headerShown: false }} 
        name="Login" 
        component={LoginScreen} 
        />

        <Stack.Screen
          name="Notas"
          component={Notas}
          options={{
            title: "NOTAS APP",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#8B1874" },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="Crear"
          component={CreateNote}
          options={{
            title: "CREAR NOTAS",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#8B1874" },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailsNote}
          options={{
            title: "DETALLES DE NOTA",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#8B1874" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    //</NavigationContainer>

    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
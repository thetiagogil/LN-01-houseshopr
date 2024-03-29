import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "./src/utils/colors";
import Splash from "./src/screens/auth/Splash";
import Login from "./src/screens/auth/Login";
import Signup from "./src/screens/auth/Signup";
import Favourites from "./src/screens/app/Favourites";
import Home from "./src/screens/app/Home";
import Profile from "./src/screens/app/Profile";
import { Image } from "react-native";
import ProductDetails from "./src/screens/app/ProductDetails";
import Settings from "./src/screens/app/Settings";
import CreateListing from "./src/screens/app/CreateListing";
import MyListings from "./src/screens/app/MyListings";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name="CreateListing" component={CreateListing} options={{ headerShown: false }} />
        <Stack.Screen name="MyListings" component={MyListings} options={{ headerShown: false }} />
      </>
    </Stack.Navigator>
  )
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === "Home") {
            icon = focused
              ? require("./src/assets/tabs/home_active.png")
              : require("./src/assets/tabs/home.png");
          } else if (route.name === "ProfileStack") {
            icon = focused
              ? require("./src/assets/tabs/profile_active.png")
              : require("./src/assets/tabs/profile.png");
          } else if (route.name === "Favourites") {
            icon = focused
              ? require("./src/assets/tabs/bookmark_active.png")
              : require("./src/assets/tabs/bookmark.png");
          }
          return <Image style={{ width: 24, height: 24 }} source={icon} />
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { borderTopColor: colors.grey, backgroundColor: colors.white }
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Favourites" component={Favourites} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
}

const App = () => {
  const isSignedIn = true;

  const theme = {
    colors: {
      background: colors.white
    }
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
            </>
          ) :
            <>
              <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

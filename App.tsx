import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import Login from "./src/screens/auth/Login/index.tsx";

const App = (): React.JSX.Element => {
  const [theme, setTheme] = useState("light")

  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
}

export default App;

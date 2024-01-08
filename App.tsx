import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import Splash from "./src/screens/auth/Splash/index.tsx";

const App = (): React.JSX.Element => {
  const [theme, setTheme] = useState("light")

  return (
    <SafeAreaView>
      <Splash />
    </SafeAreaView>
  );
}

export default App;

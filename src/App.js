import React from "react";
import Application from "./Pages/Application";
import UserProvider from "./Components/UserProvier";

function App() {
  
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
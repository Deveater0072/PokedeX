// import { useState } from "react";
import "./App.css";
import Favorites from "./components/Favorites";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function App() {
  return (
    <>
      <Tabs>
        <Tab label="Zakładka 1" />
        <Tab label="Zakładka 2" />
        <Tab label="Zakładka 3" />
      </Tabs>
      <Favorites></Favorites>
    </>
  );
}

export default App;

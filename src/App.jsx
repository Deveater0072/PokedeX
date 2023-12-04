// import { useState } from "react";
import "./App.css";
import Favorites from "./components/Favorites";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Tabs>
        <Tab label="Favorites" element={<Favorites />} />
        <Tab label="Arena" />
        <Tab label="Login" />
        <Tab label="Registration" />
        <Tab label="Edit & Logout" />
      </Tabs>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;

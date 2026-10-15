import React from "react";
import TodoApp from "./Component/TodoApp/TodoApp";
import "./Component/TodoApp/TodoApp.css";
import Header from "./Component/Header/Header";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

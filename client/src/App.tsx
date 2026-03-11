import { Outlet } from "react-router-dom";
import Header from "@components/header/Header";
import Footer from "@components/footer/footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
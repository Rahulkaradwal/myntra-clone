import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FetchingItems from "./components/FetchingItems";

function App() {
  return (
    <>
      <Header />
      <FetchingItems />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

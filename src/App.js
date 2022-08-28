import React, { useState, useEffect } from "react";
import About from "./components/About";
import BookTable from "./components/BookTable";
import { StatusCntxProvider } from "./components/cart/StatusContext";
import Home from "./components/Home";
import Menu from "./components/Menu";
import { CartModal } from "./components/modal/CartModal";
import Navbar from "./components/navbar/Navbar";
import { useRef } from "react";
import NavCon from "./components/navbar/NavCon";
import OrderStatus from "./components/OrderStatus";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ScrollToTop from "./components/modal/ScrollToTop";
import BookFormModal from "./components/modal/BookFormModal";

function App() {
  const [showNav, setNav] = useState(false);
  const [showModal, setVisibility] = useState(false);
  const [showBookFormModal, setBookFormVisibility] = useState(false);
  const [showScrollToTop, setScrolToTop] = useState(false);

  const scrollableFt = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    menu: useRef(null),
    bookTable: useRef(null),
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrolToTop(true);
      } else {
        setScrolToTop(false);
      }
    });
  }, []);

  const onShowNavBar = () => {
    setNav((val) => !val);
  };

  return (
    <div className="relative text-[#2d2d2d]">
      <Navbar
        setScrollableft={scrollableFt}
        onSetVisb={setVisibility}
        onSetNav={onShowNavBar}
      />
      {showNav && (
        <NavCon
          scrollableft={scrollableFt}
          className=" text-center shadow-md grid-rows-5 w-full bg-[#ffffffdb] grid gap-6 p-6 fixed top-16 lg:hidden border-black rounded-lg"
        />
      )}
      <Home scr={scrollableFt} />
      <About scr={scrollableFt} />
      <Services scr={scrollableFt} />
      <Menu scr={scrollableFt} />
      {showModal && <CartModal onSetVisb={setVisibility} />}
      <StatusCntxProvider>
        <OrderStatus scr={scrollableFt} />
      </StatusCntxProvider>
      <BookTable
        onsetBookFormVisibility={setBookFormVisibility}
        scr={scrollableFt}
      />
      {showBookFormModal && (
        <BookFormModal onsetBookFormVisibility={setBookFormVisibility} />
      )}
      <Footer />
      {showScrollToTop && <ScrollToTop />}
    </div>
  );
}

export default App;

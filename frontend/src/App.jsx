
import Homepage from "./pages/homepage"
import Startlogo from "./components/startlogo";
import { useState } from "react";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";


function App() {



  const [showSplash, setShowSplash] = useState(true);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
      setShowHeader(true);
    }, 3000);
  }, []);

  return (
   <>
      <AnimatePresence>{showSplash && <Startlogo />}</AnimatePresence>
      <AnimatePresence>{showHeader && <Homepage  />}</AnimatePresence>
      
  </>
  );
}

export default App

import Features from "./Pages/Features";
import Footer from "./Pages/Footer";
import Join from "./Pages/Join";
import Main_image from "./Pages/Main_image";
import Navbar from "./Pages/Navbar";
import Patners from "./Pages/Patners";
import Saying from "./Pages/Saying";

const App =() =>{
  return(
    <>

      <Navbar />
      <Main_image />
      <Features />
      <Join />
      <Saying />
      <Patners />
      <Footer />
    </>
  )
}

export default App;
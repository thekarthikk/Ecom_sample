import './App.css';
import FilterSidebar from './Components/FilterSidebar';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import SecondNav from './Components/SecondNav';
import Subfooter from './Components/Subfooter';
import ThirdNavbar from './Components/ThirdNavbar';

function App() {
  return (
    <>
    <Navbar />
   <SecondNav />
   <Hero />
   <ThirdNavbar />
   <ProductList />
   <FilterSidebar />
   <Footer />
   <Subfooter />
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import MyNav from './components/Nav/Nav'
import MyCarousel from './components/Carousel/Carousel'
import WhatsNew from './components/WhatsNew/WhatsNew'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'

function App() {
  return (
    
<div>
   <MyNav />
   <MyCarousel />
   <WhatsNew />
   <Newsletter />
   <Footer />
</div>
  );
}

export default App;

import './app.css';
import ExclusiveDeals from './components/ExclusiveDeals/ExclusiveDeals';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import OnlineMenu from './components/OnlineMenu/OnlineMenu';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="app">
      <Topbar></Topbar>
      <HeroSection></HeroSection>
      <ExclusiveDeals></ExclusiveDeals>
      <OnlineMenu></OnlineMenu>
      <Footer></Footer>
    </div>
  );
}

export default App;

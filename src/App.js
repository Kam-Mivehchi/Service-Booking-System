
import './App.css';
import Navigation from './components/Utils/Navigation';
import Hero from './pages/Home/Hero';
import Footer from './components/Utils/Footer'
// import SecondCTA from './pages/Home/SecondCTA'
import Top3 from './pages/Home/Top3'
// import BookNow from './components/Form/BookNow'
import Appointment from './components/Form/Appointment';
import { ThemeProvider } from "./contexts/Theme"





function App() {
  return (
    <ThemeProvider >

      <Navigation />
      <Hero />
      <Appointment />
      <Top3 />

    </ThemeProvider>
  );
}

export default App;

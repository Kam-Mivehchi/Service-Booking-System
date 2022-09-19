
import './App.css';
import Navigation from './components/Utils/Navigation';
import Hero from './pages/Home/Hero';
import Top3 from './pages/Home/Top3'
import BookNow from './components/Form/BookNow';
import { ThemeProvider } from "./contexts/Theme"





function App() {
  return (
    <ThemeProvider >

      <Navigation />
      <Hero />
      <BookNow />
      <Top3 />

    </ThemeProvider>
  );
}

export default App;

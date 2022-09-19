
import './App.css';
import Navigation from './components//Navigation';
import Hero from './components/Home/Hero';
import Top3 from './components/Home/Top3'
import BookNow from './components/Form/BookNow';
import { ThemeProvider } from "./Utils/ThemeContext"





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

import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer'
import SecondCTA from './components/SecondCTA'
import Top3 from './components/Top3'
import BookingForm from './components/BookingForm'
function App() {
  return (
    <>
      <Navigation />
      <div style={{ minHeight: '100vh' }}>

        <Hero />
        <SecondCTA />
      </div>
      <Top3 />
      <BookingForm />
      <Footer />
    </>
  );
}

export default App;

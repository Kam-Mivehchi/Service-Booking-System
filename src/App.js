import './App.css';
import Navigation from './components/Utils/Navigation';
import Hero from './pages/Home/Hero';
import Footer from './components/Utils/Footer'
import SecondCTA from './pages/Home/SecondCTA'
import Top3 from './pages/Home/Top3'
import BookNow from './components/Form/BookNow'
import Appointment from './components/Form/Appointment';
import Card from 'react-bootstrap/Card';
//test
function App() {
  return (
    <>
      <Navigation />
      {/* <div style={{ minHeight: '100vh' }}> */}
      <Hero />
      <SecondCTA />
      {/* </div> */}
      <Card style={{ padding: '1rem' }}>

        <BookNow />
      </Card>
      <Appointment />
      <Top3 />
      {/* <BookingForm /> */}
      <Footer />
    </>
  );
}

export default App;

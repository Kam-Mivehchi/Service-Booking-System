import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer'
import SecondCTA from './components/SecondCTA'
import Top3 from './components/Top3'
import BookingForm from './components/BookingForm'
import BookNow from './components/BookNow'

import Card from 'react-bootstrap/Card';
//test
function App() {
  return (
    <>
      <Navigation />
      <div style={{ minHeight: '100vh' }}>

        <Hero />
        <SecondCTA />
      </div>
      <Top3 />
      <Card style={{ padding: '1rem' }}>

        <BookNow />
      </Card>
      {/* <BookingForm /> */}
      <Footer />
    </>
  );
}

export default App;

import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Hero/Hero.jsx';
import Plans from './components/plans/plans.jsx';
import Programs from './components/programs/Programs.jsx';
import Reasons from './components/Reasons/Reasons.jsx';
import Subscribe from './components/subscribe/Subscribe.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      
      <Plans/>
      <Testimonials/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;

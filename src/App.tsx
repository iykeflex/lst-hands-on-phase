
import { Provider } from 'react-redux';
import { store } from './app/store';

import Header from './components/Header';
import FeaturedSection from './components/FeaturedSection';
import ServiceFeatures from './components/ServiceFeatures';
import FeaturedPosts from './components/FeaturedPosts';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <FeaturedSection />
      <ServiceFeatures />
      <FeaturedPosts />
      <Testimonials />
      <CallToAction />
      <Footer />
    </Provider>
  );
}

export default App;

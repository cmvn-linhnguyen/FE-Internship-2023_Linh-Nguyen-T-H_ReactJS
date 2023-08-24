import Advertisement from '../components/Advertisement';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import ProductToday from '../components/ProductToday';
import Recommendation from '../components/Recommendation';
import ServiceList from '../components/ServiceList';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Advertisement />
      <Recommendation />
      <ServiceList />
      <ProductToday />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;

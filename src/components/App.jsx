import Header from './Header/Header';
import Hero from './Hero/Hero';
import Portfolio from './Portfolio/Portfolio';
import WhyUs from './WhyUs/WhyUs';
import ServicesTab from './Services/Services';
import ContactForm from './ContactForm/ContactForm';
import Footer from './Footer/Footer';
import FAQ from './FAQ/FAQ';
import Widget from './Widget/Widget';

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Widget />
      <WhyUs />
      <ServicesTab />
      <Portfolio />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

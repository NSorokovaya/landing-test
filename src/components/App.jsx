import { HeaderArea } from "./Header/Header";
import Portfolio from "./Portfolio/Portfolio";
import  WhyUs  from "./WhyUs/WhyUs"
import ServicesTab from './Services/Services';
import ContactForm from './ContactForm/ContactForm';
import Footer from './Footer/Footer'
import FAQ from './FAQ/FAQ'
export const App = () => {
  return (
    <div>
      <HeaderArea />
      <WhyUs />
      <Portfolio />
      <ServicesTab />
      <ContactForm />
      <FAQ/>
      <Footer />
    </div>
  );
};

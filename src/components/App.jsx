import { HeaderArea } from "./Header/Header";
import WhyUsSlider from "./Slider/Slider";
import { WhyUs } from "./WhyUs/WhyUs"
import ServicesTab from './Services/Services';
export const App = () => {
  return (
    <div>
      <HeaderArea />
      <WhyUs />
      <WhyUsSlider />
      <ServicesTab/>
    </div>
  );
};

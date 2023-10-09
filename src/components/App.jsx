import { HeaderArea } from "./Header/Header";
import WhyUsSlider from "./Slider/Slider";
import  WhyUs  from "./WhyUs/WhyUs"

export const App = () => {
  return (
    <div>
      <HeaderArea />
      <WhyUs />
      <WhyUsSlider/>
    </div>
  );
};

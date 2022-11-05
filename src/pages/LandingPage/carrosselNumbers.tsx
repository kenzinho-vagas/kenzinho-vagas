import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <li>
            <h4>
              <span>+1000</span>
            </h4>
            <h4>OPORTUNIDADES</h4>
          </li>
      </Carousel.Item>
      <Carousel.Item>
      <li>
            <h4>
              <span>+100</span>
            </h4>
            <h4>EMPRESAS</h4>
          </li>
      
      </Carousel.Item>
      <Carousel.Item>
      <li>
            <h4>
              <span>+10.000</span>
            </h4>
            <h4>CANDIDATOS</h4>
          </li> 
      </Carousel.Item>
    </Carousel>
  );
}


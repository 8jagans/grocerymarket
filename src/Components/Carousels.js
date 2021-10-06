import React, { useState } from 'react';
import './Carousel.css';
import CARO1 from '../Images/CARO1.png';
import CARO2 from '../Images/CARO2.png';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    id: 1,
    sr:CARO1
  },
  {
    id: 2,
    sr:CARO2
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const prev = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="caro"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <div>
          <img className="img1" src={item.sr} />
        </div>
      </CarouselItem>
    );
  });

  return (
    <div>
        <Carousel activeIndex={activeIndex} next={next} previous={prev} >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
        <CarouselControl direction="prev" directionText=" " onClickHandler={prev} />
        <CarouselControl direction="next" directionText=" " onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Example;
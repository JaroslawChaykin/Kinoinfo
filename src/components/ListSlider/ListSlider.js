import classes from './ListSlider.module.scss';
import { useEffect, useRef, useState } from 'react';

const ListSlider = ({children}) => {
    const [totalLength, setTotalLength] = useState(0);
    const ref = useRef();

    const scrolledLeft = () => {
        if (totalLength !== 0) {
            setTotalLength(totalLength + ref.current.offsetWidth);
        }
    };

    const scrolledRight = () => {
        console.log(totalLength - (-ref.current.children[0].scrollWidth) > ref.current.offsetWidth);
        if (totalLength - (-ref.current.children[0].scrollWidth) > ref.current.offsetWidth) {
            setTotalLength(totalLength - ref.current.offsetWidth);
        }
    };

    useEffect(() => {
        ref.current.children[0].style.transform = `translateX(${totalLength}px)`;
    }, [totalLength]);

    return (
      <div className={classes.slider}>
          <span className={classes.sliderBtnLeft} onClick={scrolledLeft}>Left</span>
          <div className={classes.sliderChild} ref={ref}>
              {children}
          </div>
          <span className={classes.sliderBtnRight} onClick={scrolledRight}>Right</span>
      </div>
    );
};

export default ListSlider;
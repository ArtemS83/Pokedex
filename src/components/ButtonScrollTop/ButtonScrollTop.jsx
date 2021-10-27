import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import styles from './ButtonScrollTop.module.scss';

const ButtonScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener(`scroll`, handleShowScroll);
    return () => window.removeEventListener(`scroll`, handleShowScroll);
  }, []);

  const handleShowScroll = () => {
    window.pageYOffset > document.documentElement.clientHeight
      ? setShow(true)
      : setShow(false);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: `smooth` });
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className={styles.buttonScrollTop}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleScrollTop}
            aria-label="to top"
          >
            <KeyboardArrowUpIcon />
          </Button>
        </div>
      )}
    </>
  );
};

export default ButtonScrollTop;

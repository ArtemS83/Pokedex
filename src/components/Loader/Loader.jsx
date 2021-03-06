import Loader2 from 'react-loader';
import PropTypes from 'prop-types';

const Loader = ({ isLoading = true }) => {
  return (
    <Loader2
      loaded={!isLoading}
      lines={13}
      length={20}
      width={10}
      radius={30}
      corners={1}
      rotate={0}
      direction={1}
      color="#fff"
      speed={1}
      trail={60}
      shadow={false}
      hwaccel={false}
      className="spinner"
      zIndex={2e9}
      top="50%"
      left="50%"
      scale={1.0}
      loadedClassName="loadedContent"
    />
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
};

export default Loader;

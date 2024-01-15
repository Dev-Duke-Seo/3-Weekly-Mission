import ReactDOM from 'react-dom';

/**
 *
 * @param {React.ReactNode} props
 * @returns React.ReactPortal
 */
const Portal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById('portal'));
};

const PortalContainer = ({ children }) => {
  return <Portal>{children}</Portal>;
};

export default PortalContainer;

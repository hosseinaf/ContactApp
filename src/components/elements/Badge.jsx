import PropTypes from 'prop-types';
function Badge({ children, background, color, bgHover, textHover,transition }) {


  return (
    <div
      className={`${background} ${color} ${bgHover} ${textHover} ${transition}  rounded p-[4px] font-bold    `}
    >
      {children}
    </div>
  );
}
Badge.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgHover: PropTypes.string,
  textHover: PropTypes.string,
  transition: PropTypes.string.isRequired,
};
export default Badge;

import React from "react";
import styles from "./FlexRow.module.scss";
import PropTypes from "prop-types";

const FlexRow = ({
  children,
  position,
  gap,
  wrap,
  optionalStyle
}) => {

  let flexGap;

  if (gap) {
    flexGap = {
      gap: gap + "px"
    };
  } else {
    flexGap = {
      gap: "0px"
    };
  }

  return (
    <div
      style={gap && flexGap}
      className={`${styles.flex} ${styles[position]} ${wrap ? styles.wrap : styles.nowrap} ${optionalStyle && optionalStyle}`}>
      {children}
    </div>
  );
};

FlexRow.propTypes = {
  children: PropTypes.any,
  position: PropTypes.oneOf(["center", "between", "around"]).isRequired,
  gap: PropTypes.string,
  wrap: PropTypes.bool,
  optionalStyle: PropTypes.string
};
FlexRow.defaultProps = {
  position: "center",
  wrap: false,
  optionalStyle: null
};

export default FlexRow;

import React from "react";
import styles from "./FlexColumn.module.scss";
import PropTypes from "prop-types";

const FlexColumn = ({
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

FlexColumn.propTypes = {
  children: PropTypes.any,
  position: PropTypes.oneOf(["center", "between", "around"]).isRequired,
  gap: PropTypes.string,
  wrap: PropTypes.bool,
  optionalStyle: PropTypes.string
};
FlexColumn.defaultProps = {
  position: "center",
  wrap: true,
  optionalStyle: null
};

export default FlexColumn;

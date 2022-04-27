import React from "react";
import PropTypes from "prop-types";

const Container = (props) => {

  const styles = {
    width: props.width + "px",
    margin: "0 auto",
  };

  return (
    <div style={styles}>
      {props.children}
    </div>
  );
};

Container.propTypes = {
  width: PropTypes.string.isRequired
};

Container.defaultTypes = {
  width: "1109"
}

export default Container;

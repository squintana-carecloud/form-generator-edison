import React, {PropTypes} from "react";

import BaseInput from "./BaseInput";

function padTimeIfNeeded(time) {
  let splitTime = time.split(":")
  if (splitTime.length === 2) {
    splitTime.push("00")
  }
  return splitTime.join(":")
}


function TimeWidget(props) {
  const {onChange} = props;
  return (
    <BaseInput
      type="time"
      {...props}
      onChange={(value) => onChange(padTimeIfNeeded(value) || undefined)}/>
  );
}

if (process.env.NODE_ENV !== "production") {
  TimeWidget.propTypes = {
    value: PropTypes.string,
  };
}

export default TimeWidget;

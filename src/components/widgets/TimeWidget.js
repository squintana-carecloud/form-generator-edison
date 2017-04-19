import React, {PropTypes} from "react";

import BaseInput from "./BaseInput";


function TimeWidget(props) {
  const {onChange} = props;
  return (
    <BaseInput
      type="time"
      {...props}
      onChange={(value) => onChange(value || undefined)}/>
  );
}

if (process.env.NODE_ENV !== "production") {
  TimeWidget.propTypes = {
    value: PropTypes.string,
  };
}

export default TimeWidget;

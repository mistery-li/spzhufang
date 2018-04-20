import React from "react";

const Loading = props => {
  if (props.loading) {
    return (
      <div>
        <span>loading</span>
      </div>
    );
  } else {
    return null;
  }
};
export default Loading;

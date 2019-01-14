import * as React from 'react';

import Img from "gatsby-image";

const NonStretchedImage = (props:any) => {
  let normalizedProps = props;
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        margin: "0 auto", // Used to center the image
        maxWidth: props.fluid.presentationWidth,
      },
    }
  }

  return <Img {...normalizedProps} />
};

export default NonStretchedImage;

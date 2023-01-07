import React from "react";
import { getFontSizeForHeading,getCustomFontSize, getTextAlign } from "../../../utils/fonts";
import { tw } from "twind";

      
export const Heading = ({ textAlign, content, level, fontSize ="" }) => {
 
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: tw(
      `font-heading   max-w-5xl mx-auto my-5 ${getCustomFontSize(fontSize)} ${getFontSizeForHeading(level)} ${getTextAlign(
        textAlign,
      )}`,
    ),
  });
  return tag;
};
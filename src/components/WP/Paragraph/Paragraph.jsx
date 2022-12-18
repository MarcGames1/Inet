import React from 'react'
import { tw } from 'twind'
import { getTextAlign } from '../../../utils/fonts';
import { relativeToAbsoluteUrls } from '../../../utils/relativeToAbsoluteUrls'

export const Paragraph = ({textAlign = 'left', content, textColor}) => {
  return (
    <p
      className={tw(`max-w-5xl mx-auto ${getTextAlign(textAlign)}`)}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    ></p>
  );
}

export const getTextAlign = (textAlign = "left")=>{
    const textAlignMap = {
        "left":"text-left",
        "right":"text-right",
        "center":"text-center"
    }

    return `${textAlignMap[textAlign] || ""} `
}

export const getFontSizeForHeading = level =>{
    const fontSizeMap = {
      1: "text-6xl",
      2: "text-5xl",
      3: "text-4xl",
      4: "text-3xl",
      5: "text-2xl",
      6: "text-xl",
    };
   return `${fontSizeMap[level] || ""} `;
}

export const getCustomFontSize = (fontSize) => {
  if (!fontSize) {
    return 'text-xlarge';
  } else if (fontSize === 'x-large') {
    return 'text-xlarge';
  } else {
    return fontSize;
  }
};
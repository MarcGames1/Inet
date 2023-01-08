import React from 'react';

export const EmbedBlock = ({ url, w, h, }) => {
    if(typeof url !== 'string'){
        return null;
    }
  const videoId = url.split('/').pop();
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <iframe
      title="Video embed"
      width={w || '100%'}
      height={h || '100%'}
      src={embedUrl}
      
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

 
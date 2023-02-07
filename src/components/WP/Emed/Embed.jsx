import React from 'react';
import styles from './Embed.module.css'
export const EmbedBlock = ({ url, w, h, }) => {
    if(typeof url !== 'string'){
        return null;
    }
  let videoId = url.split('/').pop();
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={styles.container}>

    <iframe
      title="Video embed"
      
      src={embedUrl}
      className={styles.iframe}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      ></iframe>
      </div>
  );
};

 
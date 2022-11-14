import React from 'react'
import styles from './Newsletter.module.css'
const Newsletter = () => {
  return (
    <iframe
    className={styles.frame}
      id='newsletter'
      src="https://cdn.forms-content.sg-form.com/5b8d2293-60e3-11ed-9ba9-2e36aedb1bda"
    />
  );
}

export default Newsletter
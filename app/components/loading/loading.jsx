import React from 'react'
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <><p>Search</p><div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div></>
  )
}

export default Loading
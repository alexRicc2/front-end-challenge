import React from 'react';
import styles from './style.module.scss';

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <p>Made by <a href="https://duoblog.vercel.app/alex">DevAlex</a></p>
    </footer>
  )
}
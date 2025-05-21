'use client';

import React from 'react';
import styles from './Button.module.css';

export default function Button({ text, onClick, variant = 'default', type = 'button' }) {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`} 
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}

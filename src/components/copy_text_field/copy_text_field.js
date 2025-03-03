import React, { useState } from 'react';
import styles from './copy_text_field.module.scss';

function CopyTextField({ 
  text = '', 
  buttonClassName = '',
  containerClassName = ''
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Something went wrong: ', err);
    }
  };

  return (
    <span className={`${styles.copyContainer} ${containerClassName}`}>
      <button
        onClick={handleCopy}
        className={`${styles.copyButton} ${buttonClassName}`}
        title="Copy"
      >
        {copied ? (
          <span>✓</span>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
          </svg>
        )}
      </button>
    </span>
  );
}

export default CopyTextField;
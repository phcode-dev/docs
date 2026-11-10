import React, {cloneElement} from 'react';
import icons from './icons';
import styles from './styles.module.css';

// Always pair an icon with its written name in the instructions.
export default function TutorialIcon({name, label, active = false}) {
  if (!icons[name]) throw new Error(`Unknown tutorial icon: ${name}`);
  const icon = cloneElement(icons[name], {
    className: `${styles.icon}${active ? ` ${styles.active}` : ''}`,
    'aria-hidden': true,
    focusable: 'false',
    'data-tutorial-icon': name,
  });
  const [firstWord, ...remainingWords] = label.split(' ');
  return (
    <span data-tutorial-icon-label={name}>
      <span className={styles.firstWord}>{icon}{' '}<strong>{firstWord}</strong></span>
      {remainingWords.length > 0 && <strong>{` ${remainingWords.join(' ')}`}</strong>}
    </span>
  );
}

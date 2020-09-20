import React from 'react';
import cx from 'classnames';
import Fab from '@material-ui/core/Fab';
import { KEYBOARD_ARROW_RIGHT_ICON } from 'src/components/material-ui/icons';

export default function RoundedButton({ text, className, type }) {
  const roundedButtonClasses = cx({
    [className]: className,
  });

  return (
    <Fab 
      className={roundedButtonClasses}
      variant="extended"
      color="primary"
      aria-label="add"
      id="rounded-button"
      type={type}
    >
      {text}
      {KEYBOARD_ARROW_RIGHT_ICON}
    </Fab>
  );
}
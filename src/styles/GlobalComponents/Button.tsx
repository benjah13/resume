import React from 'react';

import { ButtonBack, ButtonFront } from './index';

type ButtonProps = {
  alt: any;
  form: any;
  disabled: boolean;
  children: any;
  onClick: any;
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
      {props.children}
      <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>
        {props.children}
      </ButtonFront>
    </ButtonBack>
  );
};

export default Button;

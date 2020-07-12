import React from 'react';
import { Form } from 'semantic-ui-react';

export const FormFieldHelper = (props) => {

  const fieldClass = `${props.baseClass}-field`;
  const labelClass = `${props.baseClass}-label`;
  const id = `${props.idPrefix}-${props.name.replace(' ', '-')}`;
  const type = props.type ? props.type : 'text';

  return (
    <Form.Field className={fieldClass}>
      <label className={labelClass} htmlFor={id}>{props.name}</label>
      <input placeholder={props.name} id={id} onChange={props.onChange} type={type} />
    </Form.Field>
  );
}
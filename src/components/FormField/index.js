import React from 'react';

function FormField({ description, label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}:
        <input
          type={type}
          value={value}
          name={name}
          description={description}
          onChange={onChange}
          // onChange={function testHandle(infosEvento) {
          //   setValue('nome', infosEvento.target.value);
          // }}
        />
      </label>
    </div>
  );
}

export default FormField;

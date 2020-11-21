import React from "react";

export function Form(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <form onSubmit={props.onSubmit}>
        {props.fields.map(field => (
          <div className="form-group">
            <label htmlFor={field.name}>{field.name}</label>
            <input
              onChange={field.onChange}
              value={field.value}
              type={field.type}
              id={field.name}
              name={field.name}
              required
            />
          </div>
        ))}

        <button type="submit">{props.submitText}</button>
      </form>
    </div>
  );
}

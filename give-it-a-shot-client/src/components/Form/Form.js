import React from "react";
import styles from "./Form.module.scss";

export function Form(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <form onSubmit={props.onSubmit} class={styles["form-flex"]}>
        {props.fields.map(field => (
          <div className={styles["form-group"]}>
            <div className={styles["centered"]}>
              <label htmlFor={field.name}>{field.name}</label>
            </div>
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

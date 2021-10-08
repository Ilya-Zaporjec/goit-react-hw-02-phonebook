import React from "react";
import style from "../Contacts.module.css";

export default function ContactFilter({ value, onChangeFilter }) {
  return (
    <div>
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  );
}

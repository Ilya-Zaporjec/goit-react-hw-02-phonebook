import React from "react";
import PropsTypes from "prop-types";
import style from "../Contacts.module.css";

const Contacts = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className={style.list}>
        {contacts.length > 0
          ? contacts.map((contact) => (
              <li className={style.item} key={contact.id}>
                {contact.name}: {contact.number}
                <button
                  className={style.button}
                  onClick={() => onDelete(contact.id)}
                >
                  Delete
                </button>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

Contacts.PropsTypes = {
  contacts: (PropsTypes.node = {
    id: PropsTypes.string,
    name: PropsTypes.string.isRequired,
    number: PropsTypes.string.isRequired,
  }),
  onDelete: PropsTypes.func.isRequired,
};

export default Contacts;

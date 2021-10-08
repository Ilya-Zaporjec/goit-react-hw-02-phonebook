import React, { Component } from "react";
import style from "./Form.module.css";

export default class Form extends Component {
  state = {
    text: "",
    number: "",
  };

  nameInput = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  numberInput = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    const { text, number } = this.state;

    this.props.onAddText({ text, number });

    this.setState({
      text: "",
      number: "",
    });
  };
  render() {
    return (
      <form className={style.form} onSubmit={this.submit}>
        <label>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.text}
            onChange={this.nameInput}
            placeholder="please write name"
          />
        </label>

        <label>
          {" "}
          Number
          <input
            className={style.input_number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            country="US"
            value={this.state.number}
            onChange={this.numberInput}
            placeholder="number phone"
          />
        </label>

        <button
          className={style.button}
          type="submit"
          disabled={!this.state.text}
        >
          Add contact
        </button>
      </form>
    );
  }
}

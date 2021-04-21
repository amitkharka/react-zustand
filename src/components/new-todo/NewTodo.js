import React, { useState } from 'react';
import { useTodosStore } from '../../store';
import './NewTodo.css';

const NewTodo = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [label, setLabel] = useState('');
  const [note, setNote] = useState('');
  const addNew = useTodosStore(state => state.addNew)

  const handleDateOnFocus = (event) => {
    const now = new Date().toISOString().split("T")[0];
    event.currentTarget.setAttribute('min', now);
  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    addNew({
      date,
      time,
      label,
      note,
    });
    handleClear();
  }

  const handleClear = () => {
    setDate('');
    setTime('');
    setLabel('');
    setNote('');
  }

  return (
    <div className="todo-form__container">
      <form onSubmit={handleAddTodo}>
        <ul className="todo-form">
          <li className="todo-form__item">
            <input
              type="date"
              className="todo-form__date"
              required
              value={date}
              onFocus={handleDateOnFocus}
              onChange={(event) => setDate(event.currentTarget.value)}
            />
          </li>
          <li className="todo-form__item">
            <input
              type="time"
              className="todo-form__time"
              required
              value={time}
              onChange={(event) => setTime(event.currentTarget.value)}
            />
          </li>
          <li className="todo-form__item">
            <input
              type="text"
              placeholder="Label"
              className="todo-form__label"
              maxLength={20}
              required
              value={label}
              onChange={(event) => setLabel(event.currentTarget.value)}
            />
          </li>
          <li className="todo-form__item">
            <textarea
              placeholder="Write a note"
              className="todo-form__note"
              required
              value={note}
              onChange={(event) => setNote(event.currentTarget.value)}
            />
          </li>
          <li className="todo-form__item">
            <input type="reset" value="Clear" className="todo-form__rest-btn" onClick={handleClear} />
            <input type="submit" value="Add Item" className="todo-form__submit-btn" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default NewTodo;
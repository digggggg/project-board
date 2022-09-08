import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { ADD_TODO } from '../../utils/mutations'
import { QUERY_TODOS, QUERY_ME } from '../../utils/queries';
import { Link } from 'react-router-dom'
import Auth from '../../utils/auth'


const TodoForm = () => {
    const [todoText, setTodoText] = useState('');

    const [characterCount, setCharacterCount] = useState(0);

    const [addTodo, { error }] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {
        try {
          const { todos } = cache.readQuery({ query: QUERY_TODOS });
  
          cache.writeQuery({
            query: QUERY_TODOS,
            data: { todos: [addTodo, ...todos] },
          });
        } catch (e) {
          console.error(e);
        }
  
        // update me object's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, todos: [...me.todos, addTodo] } },
        });
      },
    });
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await addTodo({
          variables: {
            todoText,
            todoAuthor: Auth.getProfile().data.username,
          },
        });
  
        setTodoText('');
      } catch (err) {
        console.error(err);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      if (name === 'todoText' && value.length <= 100) {
        setTodoText(value);
        setCharacterCount(value.length);
      }
    };

    return (
        <div>
            <h3>Add a Todo List Item</h3>

            {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 100 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount} 100
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="todoText"
                placeholder="Here's a new todo..."
                value={todoText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add todo
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your todos. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
        </div>
    )
  
}

export default TodoForm
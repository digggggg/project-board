import React from 'react';

import { useQuery } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';
import TodoForm from '../components/TodoForm';


const Todo = () => {

  const { loading, data } = useQuery(QUERY_ME);

  const user = data?.me || {};


    return (
        <main>
            <div className='p-3'> You are on Todo</div>

            <div>
                <TodoForm />
            </div>
        </main>
    )
}

export default Todo;
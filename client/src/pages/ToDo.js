import React from 'react';

import { useQuery } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';



const Todo = () => {

  const { loading, data } = useQuery(QUERY_ME);

  const user = data?.me || {};


    return (
        <main>
            <div className='p-3'> You are on Todo</div>
        </main>
    )
}

export default Todo;
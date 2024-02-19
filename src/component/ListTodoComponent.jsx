import React, { useState } from 'react'

const ListTodoComponent = props => {
    const dummyData = [{
        "id":1,
        "title":"learn",
        "description":"desc",
        "complete": false
    },
    {
        "id":2,
        "title":"learn222",
        "description":"desc222",
        "complete": false
    }]

    const [todo, setTodos] = useState(dummyData)
    return (
        <div className='container'>
            <h2 className='text-center'>List of Todos</h2>
            <div>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Todo Title</th>
                            <th>Todo Description</th>
                            <th>Todo Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todo.map(todo => 
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed ? 'YES' : 'NO'}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default ListTodoComponent

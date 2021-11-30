import React from 'react'

const ToDos = ({ todo }) => {
    return (
        <div className="collection-item">
            <span>{todo.content}</span>
        </div>
    )
}

export default ToDos

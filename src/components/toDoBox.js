import React, {useState} from 'react';
import './toDoBox.css';

const ToDoBox = () => {
    return (
        <div className="to-do-box">
            <h2>Let's Do!!</h2>
            <div className="to-do-input">
                <input type="text" placeholder="Let's Do this" />
            </div>
            <div className="to-do-list">

            </div>
        </div>
    );
}

export default ToDoBox;

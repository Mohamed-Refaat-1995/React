import React, { useState } from "react";


function ToDoForm(props) {

    const [input, setInput] = useState("")

    const [taskList, setTaskList] = useState([])

    const HandleChange = (e) => {
        setInput(e.target.value);
    };

    const addTask = (e) => {
        e.preventDefault();
        if (input !== '') {
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: input,
                IsCompleted: false
            }

            setTaskList([...taskList, taskDetails])
        }
    }

    console.log(taskList)

    const deleteTask = (e, id) => {
        e.preventDefault();
        setTaskList(taskList.filter((t) => t.id !== id))
    }

    const completedTask = (e, id) => {
        e.preventDefault();
        const element = taskList.findIndex(element => element.id === id);

        const newTaskList = [...taskList];

        newTaskList[element] = {
            ...newTaskList[element],
            IsCompleted: !newTaskList[element].IsCompleted
        }

        setTaskList(newTaskList);

    }

    return (
        <>
            <div className="container mt-5 w-50 bg-black p-4 rounded-top">
                <h1 className="display-3 text-end text-light mb-4">ToDo App </h1>
                <div className="row">
                    <form>
                        <input name="text" onChange={(e) => HandleChange(e)} className="form-control mb-2" placeholder="Enter New Task" />
                        <button className="btn btn-outline-light" onClick={addTask}>Add</button>
                    </form>
                </div>
            </div>

            <div className="w-50 mx-auto p-3" style={{ backgroundColor: "#e9e9e9", minHeight: "200px" }}>
                {taskList !== []
                    &&
                    (
                    <div className="fs-4 text-start">
                        {taskList.map((t) =>
                            <p>
                                <span className="me-5" style={t.IsCompleted ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
                                    {t.value}
                                </span>
                                <div>
                                    <button className="btn btn-success me-2" onClick={e => completedTask(e, t.id)}>
                                        Completed
                                    </button>
                                    <button className="btn btn-danger" onClick={e => deleteTask(e, t.id)}>
                                        Delete
                                    </button>
                                </div>
                                <hr></hr>
                            </p>)
                        }
                    </div>
                    )
                }
            </div>

        </>
    )
}

export default ToDoForm;
import React from 'react'
import { useState } from 'react'

function Test() {
    const [todo, settodo] = useState([])
    const [newTodo, setNewTodo] = useState('')
    const [editId, setEditId] = useState(null)

    function addTodo(e) {
        e.preventDefault();

        if(editId){
            const item = todo.map((items)=> {
                if(items.id === editId){
                    return {...items,title:newTodo}
                } return items
            })
            
            settodo(item)
            setNewTodo('')
            setEditId(null)
            


        } else {
            const items = {
                id: Math.floor(Math.random() * 100),
                title: newTodo
            }
    
            settodo([...todo, items])
            setNewTodo('')
        }

        

    }

    function edit(id){
        setEditId(id)
        
        const item = todo?.find((items)=> {
           return items.id === id
        })
        console.log(id);
        console.log(item);
        setNewTodo(item.title)
    }

    function remove(id){
        const item = todo.filter((items)=> {
            return items.id !== id
        })

        settodo(item)

    }



    return (
        <div className='flex flex-col justify-center items-center h-96'>
            <form className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Add…" className="input input-bordered" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                    <button className="btn btn-square" onClick={addTodo}>
                        {editId ? "Save" : "Add"}
                    </button>
                </div>
            </form>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todo.map((items) => (
                            <tr>
                                <th>{items.id}</th>
                                <td>{items.title}</td>
                                <td className='flex gap-x-2'>
                                    <button className='btn btn-sm btn-info' onClick={()=>edit(items.id)}>Edit</button>
                                    <button className='btn btn-sm btn-error'onClick={()=>remove(items.id)}>Remove</button>

                                </td>
                            </tr>
                        ))}



                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Test
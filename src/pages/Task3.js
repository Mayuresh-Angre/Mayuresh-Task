import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { task3Form } from '../components/redux/sliceReducer';

function Task3() {
    const task3Data = useSelector((state) => state.task3.task3)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        header: "",
        details: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((pre) => ({ ...pre, [name]: value }))
    }

    const handleForm = (e) => {
        e.preventDefault();
        console.log(data)
        dispatch(task3Form(data))
        setData({
            header: "",
            details: ""
        })
    }
    return (
        <div className='container'>
            <div className="row mt-4">
                <div className="col-md-4 border shadow">
                    <h3>Add Section</h3>
                    <form onSubmit={handleForm}>
                        <div className="form-group">
                            <label htmlFor="header">Section Header</label>
                            <input onChange={handleChange} type="text" value={data.header} name="header" id="header" className='form-control' required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Section Details</label>
                            <textarea onChange={handleChange} rows={'4'} value={data.details} name="details" id="details" className='form-control' required/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary form-control text-white">Add</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-7 offset-1 border shadow">
                    <div className="accordion" id="accordionExample">
                        {task3Data?.map((ele, i) => {
                            return <div>
                                        <button type="button" className="btn w-100 border text-left" data-toggle="collapse" data-target={`#${ele.header}`}>
                                            <h4>{ele.header}</h4>
                                        </button>
                                            <div id={ele.header} className="collapse border p-1">
                                                <p>{ele.details}</p> 
                                            </div>
                                    </div>
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Task3
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { task2bForm } from '../components/redux/sliceReducer';

function Task2B() {
     const task2bData = useSelector((state) => state.task2.formdata)
    const dispatch = useDispatch()

    const [data2, setData2] = useState({
        fname: "",
        lname: "",
        contact: "",
        phone: '',
        email: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData2((pre) => ({ ...pre, [name]: value }))
    }
    const handleForm = (e) => {
        e.preventDefault();
        console.log(data2)
        dispatch(task2bForm(data2))
        setData2({
            fname: "",
            lname: "",
            contact: "",
            phone: '',
            email: ""
        })
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <form className="col-md-8 offset-2 border shadow mt-5 py-4" onSubmit={handleForm}>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="fname">First Name:</label>
                                <input onChange={handleChange} value={data2.fname} type="text" name="fname" className='form-control'  required/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="lname">Last Name:</label>
                                <input onChange={handleChange} value={data2.lname} type="text" name="lname" className='form-control'  required/>
                            </div>
                            <div className="col-md-6 form-group">
                                <p>How should we contact you</p>
                                <input onClick={handleChange} type="radio" name="contact" value='phone' required/>
                                <label htmlFor="contact">Phone </label>
                                <input onClick={handleChange} type="radio" name="contact" value='email' className='ml-3' required/>
                                <label htmlFor="contact">Email </label>
                            </div>
                            {data2?.contact === "phone" && <div className="col-md-6 form-group">
                                <label htmlFor="phone">Phone Number:</label>
                                <input onChange={handleChange} value={data2.phone} type="number" name="phone" className='form-control' id='phone' required/>
                            </div> }
                               { data2?.contact === "email" && <div className="col-md-6 form-group">
                                    <label htmlFor="email">Email Address:</label>
                                    <input onChange={handleChange} value={data2.email} type="email" name="email" className='form-control'id='email' required />
                                </div>}
                        </div>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <button className="btn btn-primary" type='submit'>Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <div className="container">
                <div className="border shadow mt-5 row">
                    <div className="col-md-12">
                    {task2bData?.map((ele, i) => {
                        return <div key={i}>
                                  <h1 >{`${ele?.fname} ${ele?.lname} : ${ele?.contact === "phone" ? ele?.phone  : ele?.email}`}</h1>
                        </div>
                    })}
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Task2B
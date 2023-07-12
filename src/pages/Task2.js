import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateForm } from '../components/redux/sliceReducer'

function Task2() {
    const reduxData = useSelector((state) => state.task.values)
    // console.log(reduxData)
    // console.log(reduxData.mayu)
    const dispatch = useDispatch()
    // console.log(dispatch)
    const [data, setData] = useState({
        fname: "",
        lname: '',
        option: "",
        phone: "",
        email: ""

    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((pre) => ({ ...pre, [name]: value }))
        //    console.log(data)
        //    dispatch(()=>handleSome(e.target.value))

    }

    const handleForm = (e) => {
        e.preventDefault();
        dispatch(updateForm(data))
        console.log(data)
        setData({
            fname: "",
            lname: ''

        })
    }
    return (
        <div className='container mt-5'>
            <form onSubmit={handleForm} className='border shadow py-3'>
                <div className="row">
                    <div className="col-md-4 offset-2 form-group">
                        <label htmlFor="fname">First Name:</label>
                        <input onChange={handleChange} type="text" name="fname" value={data.fname} className='form-control' required/>
                    </div>
                    <div className="col-md-4 offset-1 form-group">
                        <label htmlFor="lname">Last Name:</label>
                        <input onChange={handleChange} type="text" name="lname" value={data.lname} className='form-control' required />
                    </div>
                    <div className="col-md-4 offset-2 form-group">
                        <label htmlFor="option">How should we contact you.</label>
                        <select name="option" onClick={handleChange} className='form-control'required>
                            <option value="phone">Phone</option>
                            <option value="email">Email</option>
                        </select>
                    </div>
                    {data.option === "phone" && <div className="col-md-4 offset-1 form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input onChange={handleChange} type="number" name="phone" value={data.phone} className='form-control' required/>
                    </div>}
                    {data.option === "email" && <div className="col-md-4 offset-1 form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input onChange={handleChange} type="email" name="email" value={data.email} className='form-control' required/>
                    </div>}
                        <div className="col-md-6 offset-2 mb-4">
                            <button className='btn bg-primary text-white'  > Submit</button>
                        </div>
                    </div>
            </form>
            <div className="row">
                <div className="col md-6 border shadow mt-5">
                    {reduxData?.map((ele, i) => {
                        return <div key={i}>
                            <h1>{`${ele.fname} ${ele.lname} : ${ele.option==='phone' ? ele?.phone:  ele?.email}`}</h1>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Task2
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { task4Form } from '../components/redux/sliceReducer'
import { VictoryPie } from 'victory'

function Task4() {
    const [pieData, setPieData] = useState(null)
    const [showPie, setShowPie] = useState(false)
    const dispatch = useDispatch()
    const task4Data = useSelector((state) => state.task4.task4)
    const [box, setBox] = useState({
        box1: 0,
        box2: 0
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBox((pre) => ({ ...pre, [name]: +value }))
    }
    const handelForm = (e) => {
        e.preventDefault();
        dispatch(task4Form(box))
        console.log(task4Data)
        setPieData([{ x: "Box1", y: box.box1 }, { x: "Box2", y: box.box2 }])
        setShowPie(true)
    }
    const handleSet = (e) => {
        if (e.target.name === "box1" && e.target.value < 100) {
            setBox((pre) => ({ ...pre, box2: 100 - e.target.value }))
        } else {
            setBox((pre) => ({ ...pre, box1: 100 - e.target.value }))
        }
    }
    return (
        <div className='container mt-5'>
            <form onSubmit={handelForm}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="box1"><strong>Box 1</strong></label>
                            <input onChange={handleChange} onBlur={handleSet} type="number" value={box.box1} name="box1" id="box1" className='form-control' required/>
                            {box.box1 > 100 && <p className='text-danger'>Invalid Input value should be less than 100</p>}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="box2"><strong>Box 2</strong></label>
                            <input onChange={handleChange} onBlur={handleSet} type="number" value={box.box2} name="box2" id="box2" className='form-control' required/>
                            {box.box2 > 100 && <p className='text-danger'>Invalid Input value should be less than 100</p>}
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <button className="btn btn-lg btn-success mt-4">
                                Create Chart
                            </button>
                        </div>
                    </div>

                </div>
            </form>
            {showPie && <div style={{ height: "500px", boxShadow: "revert" }}>
                <VictoryPie
                    data={pieData}
                    colorScale={['cyan', 'olive']}

                />
            </div>}
        </div>
    )
}

export default Task4
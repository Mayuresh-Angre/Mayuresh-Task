import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function BuyFormModal({ dataArray, setDataArray, pic, setPic,hideModal, setHidemodal }) {
  const [error, setError] = useState(false)
  const [data, setData] = useState({
    product: "",
    price: 0,
    quantity: 0
  })
  data.image = pic
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({ ...pre, [name]: value }))
  }
  const handleImage = (e) => {

    if (e.target.files[0].size <= 100000) {
      if (e.target.files && e.target.files.length > 0) {
        setPic(() => e.target.files[0])
        setError(false)
      }
    } else {
      // alert("File Size should be less than 100KB")
      setError(true)
    }
    // console.log(e.target.files[0].size)

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setDataArray((pre) => [...pre, { ...data, id: uuidv4(), quantity: 0 }])
    // console.log(pic)
    setData({
      product: "",
      price: 0
    })
    setTimeout(()=>{
      setHidemodal(false)
    },400)
  }
  // console.log(dataArray)
  return (
    <>
      <div className="text-right">
        <button type="button" className="btn btn-primary bg-danger text-white mt-4 mb-3"  onClick={()=>setHidemodal(true)}>
          Buy Now</button>
      </div>


{hideModal==false?null:  <div>
        <div className="row pb-5">
          <div className="col-md-6 offset-3 border shadow bg-white rounded">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Add Product</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>setHidemodal(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="product">Product</label>
                  <input onChange={handleChange} value={data.product} type="text" name="product" id="product" className='form-control' required />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input onChange={handleChange} value={data.price} type="number" name="price" id="price" className='form-control' required />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <input onChange={handleImage} type="file" name="image" id="image" className='form-controlpy-1' multiple required />
                  <p className='text-danger'>{error ? "File Size should be less than 100 kb" : null}</p>
                </div>
                <div className="">
                  <button type="submit" className="btn btn-primary bg-success mr-3" data-toggle="modal" data-target="#staticBackdrop">Add</button>
                  <button type="button" className="btn btn-secondary bg-danger" data-dismiss="modal" onClick={()=>setHidemodal(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> }
    
      

    </>
  )
}

export default BuyFormModal
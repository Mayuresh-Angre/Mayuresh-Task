import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function BuyFormModal({   dataArray, setDataArray, pic, setPic }) {
  const [error,setError]=useState(false)
  const [data,setData]=useState({
    product:"",
    price:0
  })
  data.image=pic
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({ ...pre, [name]: value }))
  }
  const handleImage = (e) => {
  
    if(e.target.files[0].size <= 100000 ){
      if(e.target.files  && e.target.files.length>0 ){
        setPic(() => e.target.files[0])
        // setError(false)
      } 
    }else{
      alert("File Size should be less than 100KB")
    }
    // console.log(e.target.files[0].size)
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setDataArray((pre) => [...pre, { ...data, id: uuidv4() ,quantity:0}])
    // console.log(pic)
    setData({
      product:"",
      price:0
    })
  }
  // console.log(dataArray)
  return (
    <>
      <div className="text-right">
        <button type="button" className="btn btn-primary bg-danger text-white mt-4 mb-3" data-toggle="modal" data-target="#staticBackdrop">
          Buy Now</button>
      </div>


      <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Add Product</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="product">Product</label>
                  <input onChange={handleChange} value={data.product} type="text" name="product" id="product" className='form-control' />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input onChange={handleChange} value={data.price} type="number" name="price" id="price" className='form-control' />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <input onChange={handleImage} type="file" name="image" id="image" className='form-controlpy-1' multiple />
                  <p className='text-danger'>{error ? "File Size should be less than 100 kb" : null }</p>
                </div>
                <div className="">
                  <button type="button" className="btn btn-secondary bg-danger" data-dismiss="modal">Cancel</button>
                  <button type="submit" className="btn btn-primary bg-success">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default BuyFormModal
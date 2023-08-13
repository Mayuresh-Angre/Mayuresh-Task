import React, { useState } from 'react'
import BuyFormModal from '../components/BuyFormModal'
import { useEffect } from 'react'

function Task1() {

  const [pic, setPic] = useState()
  const [hideModal, setHidemodal] = useState(false)
  const [dataArray, setDataArray] = useState([])
  const [cartArray, setCartArray] = useState([])
  //cart
  const [total, setTotal] = useState(0)
  const handleRemove = (id) => {
    const updateCart = cartArray.filter((ele) => ele.id !== id)
    setCartArray(updateCart)
  }
  const handleIncrement = (ele) => {
    const newCartArray = cartArray.map((product) => {
      if (product.id === ele.id) {
        return ({ ...product, quantity: product.quantity + 1 })

      } else {
        return product
      }

    })
    console.log(ele.id)
    setCartArray(newCartArray)

  }

  const handleDecrement = (ele) => {
    if (ele.quantity === 0) {
      handleRemove(ele.id);
      ele.quantity = 0
    } else {
      const newCartArray = cartArray.map((product) => {

        if (product.id === ele.id && product.quantity != 0) {
          return ({ ...product, quantity: product.quantity - 1 })
        } else {
          return product
        };

      })
      setCartArray(newCartArray)

    }
  }
  console.log(cartArray)
  useEffect(() => {
    const totalPrice = cartArray.reduce((acc, ele) => { return acc + ele.price * ele.quantity }, 0)
    setTotal(totalPrice)
  }, [cartArray])
  //
  // console.log(cartArray)
  //product
  const handleAddtocart = (data) => {
    //  ({...data,quantity:data.quantity+1})
    if (data.quantity === 0) {
      data.quantity = 1
      setCartArray(pre => [...pre, data])
      // console.log(cartArray)
    } else {
      data.quantity = data.quantity

    }
  }
  // const handleDelete=(id)=>{
  //       let newCartArray=cartArray.filter((ele)=>ele.id!=id)
  //       setCartArray(newCartArray)
  // }
  return (
    <div className='container' style={{ background: "#eee" }}>
      <BuyFormModal
        dataArray={dataArray}
        setDataArray={setDataArray}
        pic={pic}
        setPic={setPic}
        hideModal={hideModal}
        setHidemodal={setHidemodal} />

      {hideModal === false ? <>
        <div className="row" >
          {dataArray.map((data) => {
            return <div className="col-lg-4 col-md-12 mb-4 ">
              <div className="card shadow pb-2">
                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light">
                  <img src={URL?.createObjectURL(data?.image)}
                    className="w-100"
                    style={{ width: "100%", height: "45vh" }} />
                  <a >
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5><span className="badge bg-primary ms-2 text-white">New</span></h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </div>
                  </a>
                </div>
                <div className="card-body p-0 text-center">
                  <a className="text-reset">
                    <h4 className="card-title mb-3"> {data.product}</h4>
                  </a>

                  <h6 className="mb-3"><strong>Price:</strong> ${data.price}</h6>
                  <div className="d-flex mb-4 justify-content-center" >
                    <button className="btn btn-primary" onClick={() => handleDecrement(data)} >
                      -
                    </button>

                    <div className="form-outline">
                      <span className='px-3'>{cartArray.length > 0 ? cartArray?.map((ele) => {
                        if (ele.id === data.id) {
                          return ele.quantity
                        }
                      }) : 0} </span>
                    </div>

                    <button className="btn btn-primary" onClick={() => handleIncrement(data)} >
                      +
                    </button>
                  </div>
                  <div className="text-center">
                    <button onClick={() => handleAddtocart(data)} type='button' className="btn btn-primary bg-success mt-2">Add to Bag</button>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>





        <div>
          {cartArray.length > 0 ? <section className="h-100 gradient-custom">
            <div className="container py-5">
              <div className="row d-flex justify-content-center my-4">
                <div className="col-md-8">
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h5 className="mb-0 d-inline">Cart - {cartArray.length} items</h5>
                      {/* <h6 className='d-inline float-right  '>Action</h6> */}
                      <h6 className='d-inline float-right mr-5'>Total</h6>
                      <h6 className='d-inline float-right mr-5'>Quanity</h6>
                    </div>
                    <div className="card-body">

                      {cartArray?.map((ele) => {
                        return <>
                          <div className="row">
                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                              <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                <img src={URL.createObjectURL(ele?.image)}
                                  className="w-100" alt="Blue Jeans Jacket" />
                                <a href="#!">
                                  <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                </a>
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                              <p><strong>{ele.product}</strong></p>
                              <p>Price: ${ele.price}</p>
                              <p>Size: M</p>

                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                              <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>


                                <div className="form-outline ml-4">
                                  <span className='px-3'>{ele.quantity} </span>
                                </div>
                                <p className="text-start text-md-center ml-5  ">
                                  <strong>${ele.quantity * ele.price}</strong>
                                </p>
                                {/* <button type="button" className="close text-danger ml-4 pb-2" data-dismiss="modal" aria-label="Close" onClick={()=>handleDelete(ele.id)}>
                                  <span  >&times;</span>
                                </button> */}
                              </div>


                            </div>
                          </div>
                          <hr className="my-4" />
                        </>
                      })}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h5 className="mb-0">Summary</h5>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li
                          className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                          Products
                          <span>${total}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          Shipping
                          <span>Gratis</span>
                        </li>
                        <li
                          className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                          <div>
                            <strong>Total amount</strong>
                            <strong>
                              <p className="mb-0">(including VAT)</p>
                            </strong>
                          </div>
                          <span><strong>${total}</strong></span>
                        </li>
                      </ul>

                      <button type="button" className="btn btn-primary btn-lg btn-block">
                        Go to checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> : null}

        </div>
      </> : null}



    </div>
  )
}

export default Task1
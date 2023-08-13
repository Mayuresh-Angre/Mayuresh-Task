import React, { useEffect, useState } from 'react'

function Cart({ cartArray, setCartArray }) {
    const [total,setTotal]=useState(0)
    const handleRemove=(id)=>{
        const updateCart=cartArray.filter((ele)=>ele.id!==id)
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
        setCartArray(newCartArray)

        // console.log(newCartArray)
    }
    const handleDecrement = (ele) => {
        if (ele.quantity === 0) {
           handleRemove(ele.id);
           ele.quantity=0
        } else {
            const newCartArray = cartArray.map((product) => {
                if (product.id === ele.id) {
                    return ({ ...product, quantity: product.quantity - 1 })
                } else {
                    return product
                };

            })
            setCartArray(newCartArray)
        }
    }
    useEffect(()=>{
        const totalPrice=cartArray.reduce((acc,ele)=>{return acc+ele.price*ele.quantity},0)
        setTotal(totalPrice)
    },[cartArray])
    return (
        <div>
            {cartArray.length>0? <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart - {cartArray.length} items</h5>
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
                                                        <button className="btn btn-primary" onClick={() => handleDecrement(ele)} >
                                                            -
                                                        </button>

                                                        <div className="form-outline">
                                                            <span className='px-3'>{ele.quantity} </span>
                                                        </div>

                                                        <button className="btn btn-primary" onClick={() => handleIncrement(ele)} >
                                                            +
                                                        </button>
                                                    </div>

                                                    <p className="text-start text-md-center">
                                                        <strong>${ele.quantity * ele.price}</strong>
                                                    </p>
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
            </section>:null}
           
        </div>
    )
}

export default Cart
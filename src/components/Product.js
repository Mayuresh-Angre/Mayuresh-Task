import React from 'react'

function Product({data,setCartArray}) {
    const handleAddtocart=(data)=>{
            //  ({...data,quantity:data.quantity+1})
            if(data.quantity===0){
                data.quantity=1
                setCartArray(pre=>[...pre,data])
                // console.log(cartArray)
            }else{
                data.quantity=data.quantity

            }
    }
    return (
        <>
            <div className="col-lg-4 col-md-12 mb-4 ">
                <div className="card shadow pb-2">
                    <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                        data-mdb-ripple-color="light">
                        <img src={URL?.createObjectURL(data?.image)}
                            className="w-100"
                            style={{width:"100%",height:"45vh"}} />
                        <a >
                            <div className="mask">
                                <div className="d-flex justify-content-start align-items-end h-100">
                                    <h5><span className="badge bg-primary ms-2 text-white">New</span></h5>
                                </div>
                            </div>
                            <div className="hover-overlay">
                                <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                            </div>
                        </a>
                    </div>
                    <div className="card-body p-0 text-center">
                        <a   className="text-reset">
                            <h4 className="card-title mb-3"> {data.product}</h4>
                        </a>
                        
                        <h6 className="mb-3"><strong>Price:</strong> ${data.price}</h6>
                        
                        <div className="text-center">
                        <button onClick={()=>handleAddtocart(data)} type='button' className="btn btn-primary bg-success mt-2">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
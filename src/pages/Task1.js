import React, { useState } from 'react'
import BuyFormModal from '../components/BuyFormModal'
import Product from '../components/Product'
import Cart from  '../components/Cart'

function Task1() {
  
  const [pic,setPic]=useState()

  const [dataArray,setDataArray]=useState([])
  const [cartArray,setCartArray]=useState([])
  // console.log(cartArray)
  return (
    <div className='container' style={{background:"#eee"}}>
        <BuyFormModal  
        dataArray={dataArray}
        setDataArray={setDataArray}
        pic={pic} 
        setPic={setPic} />



        <div className="row" >
          {dataArray.map((data)=>{
            return <Product data={data} 
                            setCartArray={setCartArray} 
                                 />
          })}
        </div>
        <Cart cartArray={cartArray}
               setCartArray={setCartArray}   />

    </div>
  )
}

export default Task1
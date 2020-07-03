import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import useAxiosGet from '../Hooks/gerRequest'


function Home() {

    const url = `http://127.0.0.1:8000/api/cars`

    let products = useAxiosGet(url)
    let content = null

    
    if (products.loading) {
        content = <Loader/>
    }

    if(products.data){

        content = products.data.map((product) => 
                <div key = {product.id} className = "flex-no-shrink w-2/4 md:1/4 md:px-3">
                     <ProductCard product = {product}/>
                </div>
            )
         
    }

    if (products.error) {
        content = <div>
            Something went wrong!!!
        </div>
    }

    return(
        <div className="container mx-auto">
            <h1 className = "font-bold text-2xl m-3">Cars Lists</h1>
            <div className="md:flex flex-wrap md:mx-3">
                {content}
            </div>
        </div>
    )
}

export default Home
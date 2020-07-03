import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../components/Loader'
import useAxiosGet from '../Hooks/gerRequest'


function Products() {
    const {id} = useParams()
    const url = `http://127.0.0.1:8000/api/cars/${id}`

    let product = useAxiosGet(url)
    let content = null
    
    if (product.loading) {
        content = <Loader/>
    }

    if(product.data){
        content = <div>
            <h1>{product.data.title}</h1>
            <div>
                <img src= {product.data.image} alt= {product.title} />
            </div>
            <div>
                <p>{product.data.description}</p>
            </div>
        </div>
    }

    if (product.error) {
        content = <div>
            Something went wrong!!!
        </div>
    }

    return(
        <div>
            {content}
        </div>
    )
}

export default Products
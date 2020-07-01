import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../components/Loader'


function Products() {
    const {id} = useParams()
    const url = `https://5efca601cf235d0016ad7b0b.mockapi.io/products/v1/products/${id}`

    const [product, setProducts] = useState({
        loading : false,
        data : null
    })
    let content = null

    useEffect(() => {
        setProducts({
            loading : true,
            data : null,
            error : false
        })
        axios.get(url)
            .then(response => {
                setProducts({
                    loading : false,
                    data : response.data,
                    error : false
                })
            })
            .catch(() => {
                setProducts({
                    loading : false,
                    data : null,
                    error : true
                })
            })
        },[url])
    
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
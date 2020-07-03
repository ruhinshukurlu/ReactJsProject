import {useState, useEffect} from 'react'
import axios from 'axios'


function useAxiosGet(url){

    const [request, setRequests] = useState({
        loading : false,
        data : null
    })

    useEffect(() => {
        setRequests({
            loading : true,
            data : null,
            error : false
        })
        axios.get(url)
            .then(response => {
                setRequests({
                    loading : false,
                    data : response.data,
                    error : false
                })
            })
            .catch(() => {
                setRequests({
                    loading : false,
                    data : null,
                    error : true
                })
            })
        },[url])

    return request
}

export default useAxiosGet
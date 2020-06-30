import React from 'react'

class Footer extends React.Component{
    render(){
        return(
            <footer className = "bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full">
                <span>
                    &copy; Copyright 2020
                </span>
            </footer>
        )
    }
}

export default Footer
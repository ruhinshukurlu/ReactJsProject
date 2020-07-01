import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavbarMenu from './NavbarMenu'



function Navbar(){

    const [showMenu, setShowMenu] = useState(false)

    
    const MenuTransitions = useTransition(showMenu, null, {
        from: {opacity: 0, transform : 'translateX(-100%)'},
        enter: { opacity: 1, transform : 'translateX(0%)' },
        leave: { opacity: 0, transform : 'translateX(-100%)' },
    })
    
    const MaskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })


    return(
       <nav>
           <span className = "p-3">
               <FontAwesomeIcon icon = {faBars} onClick = {() => setShowMenu(!showMenu)}/>
           </span>
           {
               MenuTransitions.map(({ item, key, props }) =>
               item && 
                <animated.div 
                key={key}
                style={props}
                className = "fixed bg-white top-0 left-0 h-full w-2/5 z-50 shadow">
                    <NavbarMenu closeMenu = {() => setShowMenu(false)} />
                </animated.div>  
               )
           }
           {
               MaskTransitions.map(({ item, key, props }) =>
               item && 
               <animated.div 
               key={key} 
               style={props}
               className = "bg-black-t-50 fixed top-0 left-0 w-full h-full"
               onClick = {() => setShowMenu(false)}>
                  
               </animated.div>
               )
           }
       </nav>
    )
}

export default Navbar
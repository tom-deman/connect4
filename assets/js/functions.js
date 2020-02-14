import { winsTabs } from './wins.js'

import {
    circles,
    playerName
}  from './variables.js'


export const swapPlayer = ( a, b, c ) => {
    playerName.innerText = a
    playerName.classList.remove( b )
    playerName.classList.add( c )
}

export const win = ( i, b ) => {
    return(
        circles[ winsTabs[ i ].a ].classList.contains( b ) &&
        circles[ winsTabs[ i ].b ].classList.contains( b ) &&
        circles[ winsTabs[ i ].c ].classList.contains( b ) &&
        circles[ winsTabs[ i ].d ].classList.contains( b )
    )
}

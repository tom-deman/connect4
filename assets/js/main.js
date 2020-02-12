let player = true
let cols   = document.querySelectorAll( '.col' )

let zero  = document.querySelectorAll( '.dots-0' )
let one   = document.querySelectorAll( '.dots-1' )
let two   = document.querySelectorAll( '.dots-2' )
let three = document.querySelectorAll( '.dots-3' )
let four  = document.querySelectorAll( '.dots-4' )
let five  = document.querySelectorAll( '.dots-5' )

const addRedDot = ( a, i ) => {
    a[ i ].classList.add( 'bg-red-400' )
    a[ i ].classList.remove( 'empty' )
}

const addYellowDot = ( a, i ) => {
    a[ i ].classList.add( 'bg-yellow-400' )
    a[ i ].classList.remove( 'empty' )
}

for( let i = 0; i < cols.length; i ++ ) {
    cols[ i ].addEventListener( 'click', () => {
        if( player ) {
            if( five[ i ].classList.contains( 'empty' )) 
                addRedDot( five, i )
            else if( four[ i ].classList.contains( 'empty' )) 
                addRedDot( four, i )
            else if( three[ i ].classList.contains( 'empty' )) 
                addRedDot( three, i )
            else if( two[ i ].classList.contains( 'empty' )) 
                addRedDot( two, i )
            else if( one[ i ].classList.contains( 'empty' )) 
                addRedDot( one, i )
            else 
                addRedDot( zero, i )
        }
        else {
            if( five[ i ].classList.contains( 'empty' )) 
                addYellowDot( five, i )
            else if( four[ i ].classList.contains( 'empty' )) 
                addYellowDot( four, i )
            else if( three[ i ].classList.contains( 'empty' )) 
                addYellowDot( three, i )
            else if( two[ i ].classList.contains( 'empty' )) 
                addYellowDot( two, i )
            else if( one[ i ].classList.contains( 'empty' )) 
                addYellowDot( one, i )
            else 
                addYellowDot( zero, i )
        }
        player = !player
    })
}

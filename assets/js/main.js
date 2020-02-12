let turn = true

const red    = 'bg-red-400'
const yellow = 'bg-yellow-400'

let cols   = document.querySelectorAll( '.col' )
let player = document.querySelector( '.player' )

let zero  = document.querySelectorAll( '.dots-0' )
let one   = document.querySelectorAll( '.dots-1' )
let two   = document.querySelectorAll( '.dots-2' )
let three = document.querySelectorAll( '.dots-3' )
let four  = document.querySelectorAll( '.dots-4' )
let five  = document.querySelectorAll( '.dots-5' )

const addDot = ( a, b, i ) => {
    a[ i ].classList.add( b )
    a[ i ].classList.remove( 'empty' )
    turn = !turn
}

const swapPlayer = ( a, b, c ) => {
    player.innerText = a
    player.classList.remove( b )
    player.classList.add( c )
}

for( let i = 0; i < cols.length; i ++ ) {
    const wichTurn = ( a ) => {
        switch( true ) {
            case ( five[ i ].classList.contains( 'empty' )):
                addDot( five, a, i )
                break
            case ( four[ i ].classList.contains( 'empty' )):
                addDot( four, a, i )
                break
            case ( three[ i ].classList.contains( 'empty' )): 
                addDot( three, a, i )
                break
            case ( two[ i ].classList.contains( 'empty' )):
                addDot( two, a, i )
                break
            case ( one[ i ].classList.contains( 'empty' )):
                addDot( one, a, i )
                break 
            case ( zero[ i ].classList.contains( 'empty' )):
                addDot( zero, a, i )
                break
            default:
                // Nothing
                break
        }
    }
    cols[ i ].addEventListener( 'click', () => {
        turn
            ?
                ( swapPlayer( 'Player 1', 'text-yellow-400', 'text-red-400' ),
                wichTurn( red ))
            :
                ( swapPlayer( 'Player 1', 'text-yellow-400', 'text-red-400' ),
                wichTurn( yellow ))
    })
}

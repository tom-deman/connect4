import { winsTabs } from './wins.js'

let playerOne = prompt( `Enter the player's one name` )
while( playerOne.length === 0 )
    playerOne = prompt( 'You should write at least one character' )

let playerTwo = prompt( `Enter the player's two name` )
while( playerTwo === playerOne || playerTwo.length === 0 )
    playerTwo = prompt( `You should write at least one character and your name should be different than the first player's name` )

const player     = document.querySelector( '.player' )
player.innerText = playerOne


const dots = document.querySelectorAll( '.dots' )
const cols = document.querySelectorAll( '.col' )

const zero  = document.querySelectorAll( '.dots-0' )
const one   = document.querySelectorAll( '.dots-1' )
const two   = document.querySelectorAll( '.dots-2' )
const three = document.querySelectorAll( '.dots-3' )
const four  = document.querySelectorAll( '.dots-4' )
const five  = document.querySelectorAll( '.dots-5' )


const bgRed      = 'bg-red-400'
const textRed    = 'text-red-400'
const bgYellow   = 'bg-yellow-400'
const textYellow = 'text-yellow-400'

let turn  = true
let count = 0


const swapPlayer = ( a, b, c ) => {
    player.innerText = a
    player.classList.remove( b )
    player.classList.add( c )
}

const addDot = ( a, b, i ) => {
    a[ i ].classList.add( b )
    a[ i ].classList.remove( 'empty' )
    turn
        ? swapPlayer( playerTwo, textRed, textYellow )
        : swapPlayer( playerOne, textYellow, textRed )
    turn = !turn
}

const wichTurn = ( a, i ) => {
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
    }
}


for( let i = 0; i < cols.length; i ++ ) {
    cols[ i ].addEventListener( 'click', () => {
        turn
            ? wichTurn( bgRed, i )
            : wichTurn( bgYellow, i )
        for( let i = 0; i < winsTabs.length; i ++ ) {
            if(
                dots[ winsTabs[ i ].a ].classList.contains( 'bg-red-400' )
            &&  dots[ winsTabs[ i ].b ].classList.contains( 'bg-red-400' )
            &&  dots[ winsTabs[ i ].c ].classList.contains( 'bg-red-400' )
            &&  dots[ winsTabs[ i ].d ].classList.contains( 'bg-red-400' )
            ) {
                alert( `${ playerOne } win !` )
                window.location.reload()
            }
            else if(
                dots[ winsTabs[ i ].a ].classList.contains( 'bg-yellow-400' )
            &&  dots[ winsTabs[ i ].b ].classList.contains( 'bg-yellow-400' )
            &&  dots[ winsTabs[ i ].c ].classList.contains( 'bg-yellow-400' )
            &&  dots[ winsTabs[ i ].d ].classList.contains( 'bg-yellow-400' )
            ) {
                alert( `${ playerTwo } win !` )
                window.location.reload()
            }
        }
        count ++
        if(count === 42) {
            alert( 'it\'s a draw' )
            window.location.reload()
        }
    })
}

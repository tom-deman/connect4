import { winsTabs } from './wins.js'

import {
    playerName,
    cols,
    circlesPositionZero,
    circlesPositionOne,
    circlesPositionTwo,
    circlesPositionThree,
    circlesPositionFour,
    circlesPositionFive,
    bgRed,
    bgYellow,
    textRed,
    textYellow
} from './variables.js'

import {
    swapPlayer,
    win
} from './functions.js'


let playerOne = prompt( `Enter the player's one name` )
while( playerOne.length === 0 )
    playerOne = prompt( 'You should write at least one character' )

let playerTwo = prompt( `Enter the player's two name` )
while( playerTwo === playerOne || playerTwo.length === 0 )
    playerTwo = prompt( `You should write at least one character and your name should be different than the first player's name` )

playerName.innerText = playerOne


let turn  = true
let count = 0


export const addDot = ( a, b, i ) => {
    a[ i ].classList.add( b )
    a[ i ].classList.remove( 'empty' )
    turn
        ? swapPlayer( playerTwo, textRed, textYellow )
        : swapPlayer( playerOne, textYellow, textRed )
    turn = !turn
}

const wichTurn = ( a, i ) => {
    switch( true ) {
        case ( circlesPositionFive[ i ].classList.contains( 'empty' )):
            addDot( circlesPositionFive, a, i )
            break
        case ( circlesPositionFour[ i ].classList.contains( 'empty' )):
            addDot( circlesPositionFour, a, i )
            break
        case ( circlesPositionThree[ i ].classList.contains( 'empty' )): 
            addDot( circlesPositionThree, a, i )
            break
        case ( circlesPositionTwo[ i ].classList.contains( 'empty' )):
            addDot( circlesPositionTwo, a, i )
            break
        case ( circlesPositionOne[ i ].classList.contains( 'empty' )):
            addDot( circlesPositionOne, a, i )
            break 
        case ( circlesPositionZero[ i ].classList.contains( 'empty' )):
            addDot( circlesPositionZero, a, i )
            break
    }
}


for( let i = 0; i < cols.length; i ++ ) {
    cols[ i ].addEventListener( 'click', () => {
        turn
            ? wichTurn( bgRed, i )
            : wichTurn( bgYellow, i )
        for( let i = 0; i < winsTabs.length; i ++ ) {
            if( win( i, bgRed )) {
                alert( `${ playerOne } win !` )
                window.location.reload()
            }
            else if( win( i, bgYellow )) {
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

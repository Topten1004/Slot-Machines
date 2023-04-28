import React, { useState, useEffect } from 'react'

import Reel from './Reel'
import './main.css'

function Hooks() {
    const [reels, setReel] = useState([
            ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon'],
            ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon'],
            ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon'] 
        ]),
        [coins, changeCoins] = useState(20),
        [spinError, setSpinError] = useState(false),
        [addedCoins, setAddedCoins] = useState(0),
        [coinsFor, setCoinsFor] = useState({}),
        [currentReel, setCurrentReel] = useState([{ index: 0 }, { index: 0 }, { index: 0 } ]),
        [spinner, setSpinner] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            spin(false)
            setSpinner(false)
        }, 1000)
    }, [reels])    

    const spin = updateCoins => {
        const newCurrentReel = reels.map(reel => {
            const randNo = getRandomInt(0, reel.length)
            return {
                index: randNo,
                name: reel[randNo]
            }
        })

        if (updateCoins) calculateCoins(newCurrentReel)

        setCurrentReel(newCurrentReel)        
    }

    const handleSpin = _ => {
        const newCoins = coins - 1
        const error = newCoins === 0 ? true : false

        changeCoins(newCoins)
        setSpinError(error)
        setSpinner(true)

        setTimeout(() => {
            spin(true)
            setSpinner(false)
        }, 1000)
    }

    const calculateCoins = currentReel => {
        const reelsCount = currentReel
                .map(dataItem => dataItem.name) // get all name types
                .filter((name, index, array) => array.indexOf(name) === index), // filter out duplicates

            winningCounts = reelsCount.map(name => ({
                name: name,
                count: currentReel.filter(item => item.name === name).length
            })).filter(item => item.count > 1)
        
        let newAddedCoins = 0

        // calculate points for each winning reel
        winningCounts.map((eachCount, index) => {
            switch (eachCount.name) {
                case 'apple':
                    if (eachCount.count === 3) {
                        newAddedCoins = 20
                    } else if (eachCount.count === 2) {
                        newAddedCoins = 10
                    }
                    break;
                case 'banana':
                    if (eachCount.count === 3) {
                        newAddedCoins = 15
                    } else if (eachCount.count === 2) {
                        newAddedCoins = 5
                    }
                    break;
                case 'cherry':
                    if (eachCount.count === 3) {
                        newAddedCoins = 50
                    } else if (eachCount.count === 2) {
                        newAddedCoins = 40
                    }
                    break;
                case "lemon":
                    if (eachCount.count === 3) {
                        newAddedCoins = 30
                    } 
                    break;
                default:
                    return newAddedCoins
            }
        })
            
        changeCoins(coins + newAddedCoins - 1)
        setCoinsFor(winningCounts.length ? winningCounts[0] : {})
        setAddedCoins(newAddedCoins)
    }

    const getRandomInt = (min, max) => {        
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * max)
    }   

    return (
        <div className="app">
            <h3>Slot Machine - click Spin to play</h3>
            <p>1 spin = 1 coin</p>
            <p>Match two or three similar items to win coins. (exception: 2 lemons = 0 coins)</p>
            <div className="slot">
                <h2 className="slot__heading">Slot Machine</h2>
                <div className="slot__win-message">
                { addedCoins > 0 ? (
                        <span className="success">You Won {addedCoins} coins for {coinsFor.count} {coinsFor.name}s!!</span> 
                    ): null
                }
                </div>                
                <p>Coins: <strong>{coins}</strong></p>
                <div className="slot__slot-container">
                    {reels.map((reelItem, index) => 
                        <Reel reelItem={reelItem} key={index} selectedReel={currentReel[index]} spinner={spinner} />
                    )}                   
                </div>
                { spinError &&  <span className="error">Game over. Add more coins to play</span>}
                <button className="btn btn-primary slot__spin-button" onClick={handleSpin} disabled={(coins === 0)} >Spin</button>
            </div>            
        </div>
    )
}

export default Hooks
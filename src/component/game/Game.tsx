'use client'

import { useEffect, useState, useContext } from "react"
import { SoundContext } from "@/context/SoundContext"
import Health from "./Health"
import FinishedModal from "./FinishedModal"
import Name from "./Name"
import Alphabet from "./Alphabet"

type GameProps = {
    nameList: string[]
}

export default function Game({ nameList }: GameProps) {

    const [selectedName, setSelectedName] = useState(nameList[Math.floor(Math.random() * nameList.length)]);
    const [health, setHealth] = useState(8);
    const [gameFinished, setGameFinished] = useState(false);
    const [alphabetArray, setAlphabetArray] = useState<{letter: string, selected: boolean}[][]>();

    const { playScale } = useContext(SoundContext)

    const selectLetter = (letter: string) => {
        if (!selectedName.toLowerCase().includes(letter)) {
            setHealth(state => state - 1);
            return
        }
        if (!alphabetArray) return

        const newState = []
        for (let i = 0; i < alphabetArray.length; i++) {
            const wordArr = [...alphabetArray[i]]
            for (let j = 0; j < alphabetArray[i].length; j++) {
                if (alphabetArray[i][j].letter === letter) {
                    wordArr[j].selected = true
                }
            }
            newState.push(wordArr)
        }
        setAlphabetArray(newState)
    }

    const checkCompletion = () => {
        const flatArr = alphabetArray?.flat()
        if (flatArr?.every(obj => obj.selected)) {
            setGameFinished(true)
        }
    }

    const newGame = () => {
        let newName = nameList[Math.floor(Math.random() * nameList.length)];
        while (newName === selectedName) 
        {
            newName = nameList[Math.floor(Math.random() * nameList.length)];
        }
        setSelectedName(newName)
        setHealth(8)
        setGameFinished(false)
    }

    useEffect(() => {
        if (!selectedName) return

        // initialize 'alphabetArray' state
        const state = []

        const wordArr = selectedName.toLowerCase().split(' ');
        for (let i = 0; i < wordArr.length; i++) {
            const arr = []
            const letterArr = wordArr[i].split('')
            for (let j = 0; j < letterArr.length; j++) {
                const obj = {
                    letter: letterArr[j],
                    selected: false
                }
                arr.push(obj)
            }
            state.push(arr)
        }
        setAlphabetArray(state)       
    }, [selectedName])

    useEffect(() => {
        checkCompletion()
    }, [alphabetArray])

    useEffect(() => {
        if (health === 8) return
        if (health === 0) {
            setGameFinished(true)
            return
        }
        playScale(health)
    }, [health])

    return (
        <div style={{ position: 'relative' }}>
            <Health health={health} />
            <Name alphabetArray={alphabetArray} />
            <Alphabet 
                selectLetter={selectLetter} 
                selectedName={selectedName}
            />
            { gameFinished && 
                <FinishedModal 
                    health={health} 
                    newGame={newGame} 
                    selectedName={selectedName}
                /> 
            }
        </div>
    )
}
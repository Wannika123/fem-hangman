import styles from './Alphabet.module.css'
import { MouseEvent, useEffect } from 'react'

type AlphabetProps = {
    selectLetter: (letter: string) => void
    selectedName: string
}

export default function Alphabet({ selectLetter, selectedName }: AlphabetProps) {

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.classList.contains(styles.disabled)) {
            return
        }

        selectLetter(e.currentTarget.value)

        e.currentTarget.classList.add(styles.disabled)
    }

    useEffect(() => {
        const btns = document.querySelectorAll(`.${styles.button}`)
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove(styles.disabled)
        }
    }, [selectedName])

    return (
        <div className={styles.container}>
            {[...Array(26)].map((x, i) => (
                <button  
                    key={i}   
                    value={String.fromCharCode(97 + i)}
                    className={styles.button}
                    onClick={handleClick}
                >
                    {String.fromCharCode(65 + i)}
                </button>
            ))}
        </div>
    )
}
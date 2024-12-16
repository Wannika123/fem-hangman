import styles from './Name.module.css'

type NameProps = {
    alphabetArray: { letter: string, selected: boolean }[][] | undefined
}

export default function Name({ alphabetArray }: NameProps) {
    return (
        <div className={styles.container}>
            {alphabetArray?.map((word, index) => (
                <div key={index} className={styles.word}>
                    {word.map((letter, i) => (
                        <div key={i} className={styles['letter-wrapper']}>
                            <span 
                                className={letter.selected ? styles.show : undefined}
                            >
                                {letter.letter.toUpperCase()}
                            </span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
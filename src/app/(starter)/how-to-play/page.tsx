import styles from "./page.module.css";

export default function HowToPlay() {
    return (
        <div className={styles.container}>
            <h1 className="gradient-text large">
                How to Play
                <span className="first-span">How to Play</span>
                <span className="second-span">How to Play</span>
            </h1>
            <div className={styles["rules-container"]}>
                <div className={styles.rule}>
                    <h2>
                        01{" "}
                        <span
                            className={`${styles["rule-header"]} ${styles["mobile-only"]}`}
                        >
                            Choose a category
                        </span>
                    </h2>
                    <div>
                        <h3
                            className={`${styles["rule-header"]} ${styles["not-mobile"]}`}
                        >
                            Choose a category
                        </h3>
                        <p>
                            First, choose a word category, like animals or
                            movies. The computer then randomly selects a secret
                            word from that topic and shows you blanks for each
                            letter of the word.
                        </p>
                    </div>
                </div>
                <div className={styles.rule}>
                    <h2>
                        02{" "}
                        <span
                            className={`${styles["rule-header"]} ${styles["mobile-only"]}`}
                        >
                            Guess letters
                        </span>
                    </h2>
                    <div>
                        <h3
                            className={`${styles["rule-header"]} ${styles["not-mobile"]}`}
                        >
                            Guess letters
                        </h3>
                        <p>
                            Take turns guessing letters. The computer fills in
                            the relevant blank spaces if your guess is correct.
                            If it&apos;s wrong, you lose some health, which
                            empties after eight incorrect guesses.
                        </p>
                    </div>
                </div>
                <div className={styles.rule}>
                    <h2>
                        03{" "}
                        <span
                            className={`${styles["rule-header"]} ${styles["mobile-only"]}`}
                        >
                            Win or lose
                        </span>
                    </h2>
                    <div>
                        <h3
                            className={`${styles["rule-header"]} ${styles["not-mobile"]}`}
                        >
                            Win or lose
                        </h3>
                        <p>
                            You win by guessing all the letters in the word
                            before your health runs out. If the health bar
                            empties before you guess the word, you lose.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

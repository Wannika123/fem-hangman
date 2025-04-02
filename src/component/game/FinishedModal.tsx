import { useEffect, useRef, useContext } from "react";
import { SoundContext } from "@/context/SoundContext";
import Link from "next/link";
import styles from "./Modal.module.css";

type FinishedModalProps = {
    health: number;
    newGame: () => void;
    selectedName: string;
};

export default function FinishedModal({
    health,
    newGame,
    selectedName,
}: FinishedModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const { winSound, loseSound } = useContext(SoundContext);

    let header = "";
    if (health === 0) {
        header = "You Lose";
    } else {
        header = "You Win";
    }

    useEffect(() => {
        dialogRef.current?.showModal();

        if (health === 0) {
            loseSound();
        } else {
            winSound();
        }
    }, []);

    return (
        <dialog className={styles.dialog} ref={dialogRef}>
            <div className={styles.container}>
                <h2 className="gradient-text modal">
                    {header}
                    <span className="first-span">{header}</span>
                    <span className="second-span">{header}</span>
                </h2>
                {health === 0 && (
                    <p
                        style={{
                            width: "max-content",
                            position: "absolute",
                            top: 60,
                            left: 0,
                            right: 0,
                            margin: "0 auto",
                            color: "white",
                            fontSize: "1.25rem",
                        }}
                    >
                        Answer: {selectedName}
                    </p>
                )}
                <div className={styles["btns-container"]}>
                    <button onClick={newGame}>Play Again!</button>
                    <Link href="/pick-a-category">new category</Link>
                    <Link href="/" className={styles["quit-btn"]}>
                        quit game
                    </Link>
                </div>
            </div>
        </dialog>
    );
}

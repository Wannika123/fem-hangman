import Link from "next/link"
import styles from './Modal.module.css'
import { useEffect, useRef } from "react"

type MenuModalProps = {
    closeMenu: () => void
}

export default function MenuModal({ closeMenu }: MenuModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {      
        dialogRef.current?.showModal()        
    }, [])

    return (
        <dialog className={styles.dialog} ref={dialogRef}>
            <div className={styles.container}>
                <h2 className="gradient-text modal">Paused</h2>
                <div className={styles['btns-container']}>
                    <button onClick={closeMenu}>continue</button>
                    <Link href='/pick-a-category'>new category</Link>
                    <Link href='/' className={styles['quit-btn']}>quit game</Link>
                </div>
            </div>
        </dialog>
    )
}
import backIcon from '@/images/icon-back.svg'
import Image from 'next/image'
import Link from 'next/link'
import styles from './StarterHeader.module.css'

export default function StarterHeader() {
    return (
        <header className={styles.header}>
            <Link href='/' className='small-pink-btn'>
                <Image src={backIcon} alt='back icon' />
            </Link>
        </header>
    )
}
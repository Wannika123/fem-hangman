import heartIcon from '@/images/icon-heart.svg'
import Image from 'next/image'
import styles from './Health.module.css'

type HealthProps = {
    health: number
}

export default function Health({ health }: HealthProps) {

    return (
        <div className={styles.container}>
            <div className={styles.bar}>
                <div style={{ width: `calc(100% / 8 * ${health})`}}></div>
            </div>
            <Image src={heartIcon} alt='heart icon' />
        </div>
    )
}
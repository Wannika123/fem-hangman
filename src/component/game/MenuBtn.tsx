'use client'

import Image from "next/image"
import menuIcon from '@/images/icon-menu.svg'
import styles from './MenuBtn.module.css'
import { useEffect, useState } from "react"
import MenuModal from "./MenuModal"

export default function MenuBtn() {
    const [openMenu, setOpenMenu] = useState(false);

    const closeMenu = () => setOpenMenu(false);

    useEffect(() => {
        console.log(openMenu)
    }, [openMenu])

    return (
        <>
            <button 
                className={['small-pink-btn', styles.button].join(' ')}
                onClick={() => setOpenMenu(true)}
            >
                <Image src={menuIcon} alt='menu icon' />               
            </button>
            { openMenu && <MenuModal closeMenu={closeMenu} /> }
        </>
    )
}
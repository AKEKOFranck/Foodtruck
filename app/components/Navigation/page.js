'use client'

import styles from "../Navigation/page.module.css";
import Link from "next/link";
import { RiHome9Line } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";
import { PiHamburgerFill } from "react-icons/pi";
import { PiBowlFoodFill } from "react-icons/pi";


export default function Navigation() {
     const dataNav = [
    {
      id:1,
      ico:<RiHome9Line />,
      title:"Accueil",
      url:"/"
    },

    {
      id:2,
      ico: <PiHamburgerFill />,
      title:"Sandiwch",
      url:"/menu/sandwichs"
    },

     {
      id:3,
      ico: <PiBowlFoodFill />,
      title:"Nos plats",
      url:"/menu/plats"
    },

    {
      id:4,
      ico:<FaQuestionCircle />,
      title:"Infos",
      url:"/"
    },

  ]
    return(
        <header className={styles.header}>
          {dataNav.map((N) => (
            <Link href={N.url} className={styles.navItem} key={N.id}>
              <p className={styles.ico}> {N.ico} </p>
              <p className={styles.tilte}> {N.title} </p>
           </Link>
          ))}
        </header>
    )
}
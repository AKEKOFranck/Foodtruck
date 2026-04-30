'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = (slug) => {
    if (!slug) return;
    router.push(`/menu/${slug}`);
  };

  const foodMain1 = [
    {
      id: 1,
      pic: "/fondM2.png",
      name: "Tacos Poulet XL",
      price: "3500 CFA",
      desc: "Galette de blé garnie de poulet, sauce et frites",
      qt: "XL",
      slug: "plats"
    },
    {
      id: 2,
      pic: "/fondMain.png",
      name: "Burger + Frites",
      price: "4000 CFA",
      desc: "Burger savoureux accompagné de frites croustillantes",
      qt: "Menu",
      slug: "sandwichs"
    },
    
  ];



  
  const foodMain2 = [
    
    {
      id: 3,
      pic: "/fondM3.png",
      name: "Chawarma Poulet",
      price: "3000 CFA",
      desc: "Pain roulé garni de poulet épicé et de légumes",
      qt: "1",
      slug: "sandwichs"
    },
    {
      id: 4,
      pic: "/fondM2.png",
      name: "Chawarma Bœuf",
      price: "2500 CFA",
      desc: "Pain roulé garni de bœuf épicé et de légumes",
      qt: "1",
      slug: "plats"
    },
    
  ];



  
  const foodMain3 = [
   
    {
      id: 5,
      pic: "/fondMain.png",
      name: "Panini Poulet",
      price: "2000 CFA",
      desc: "Panini grillé au poulet et fromage",
      qt: "1",
      slug: "sandwichs"
    },
    {
      id: 6,
      pic: "/fondM2.png",
      name: "Panini Bœuf",
      price: "4000 CFA",
      desc: "Panini grillé au bœuf et fromage",
      qt: "1",
      slug: "plats"
    },
   
  ];



  
  const foodMain4 = [
    {
      id: 7,
      pic: "/fondMain.png",
      name: "Burger + Frites",
      price: "4000 CFA",
      desc: "Burger savoureux accompagné de frites croustillantes",
      qt: "Menu",
      slug: "sandwichs"
    },
    {
      id: 8,
      pic: "/fondM2.png",
      name: "10 Nems",
      price: "2000 CFA",
      desc: "Rouleaux croustillants de pâte de riz farcis et frits",
      qt: "10 pièces",
      slug: "plats"
    }
  ];


  return (
    <main className={styles.main}>
      <section className={styles.content_img}>
        <h3 className={styles.title}> 
          FoodTruck 
          <p className={styles.subtitle}> le meilleur resto en voiture </p>
        </h3>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          {foodMain1.map((food) => (
            <div className={styles.box} key={food.id}>
              <Image
                src={food.pic}
                alt={food.name}
                width={200}
                height={50}
                className={styles.img}
              />

              <div className={styles.list}>
                <p className={styles.name}>{food.name}</p>
                <p className={styles.price}>{food.price}</p>
                <p className={styles.desc}>{food.desc}</p>
                <p className={styles.qt}>{food.qt} restants</p>
              </div>

              <button
                className={styles.bt}
                onClick={() => handleClick(food.slug)}
              >
                Voir plus
              </button>
            </div>
          ))}
        </div>



         <div className={styles.container}>
          {foodMain2.map((food) => (
            <div className={styles.box} key={food.id}>
              <Image
                src={food.pic}
                alt={food.name}
                width={200}
                height={50}
                className={styles.img}
              />

              <div className={styles.list}>
                <p className={styles.name}>{food.name}</p>
                <p className={styles.price}>{food.price}</p>
                <p className={styles.desc}>{food.desc}</p>
                <p className={styles.qt}>{food.qt} restants</p>
              </div>

              <button
                className={styles.bt}
                onClick={() => handleClick(food.slug)}
              >
                Voir plus
              </button>
            </div>
          ))}
        </div>
      </section>


       <section className={styles.content}>
        <div className={styles.container}>
          {foodMain3.map((food) => (
            <div className={styles.box} key={food.id}>
              <Image
                src={food.pic}
                alt={food.name}
                width={200}
                height={50}
                className={styles.img}
              />

              <div className={styles.list}>
                <p className={styles.name}>{food.name}</p>
                <p className={styles.price}>{food.price}</p>
                <p className={styles.desc}>{food.desc}</p>
                <p className={styles.qt}>{food.qt} restants</p>
              </div>

              <button
                className={styles.bt}
                onClick={() => handleClick(food.slug)}
              >
                Voir plus
              </button>
            </div>
          ))}
        </div>



         <div className={styles.container}>
          {foodMain4.map((food) => (
            <div className={styles.box} key={food.id}>
              <Image
                src={food.pic}
                alt={food.name}
                width={200}
                height={50}
                className={styles.img}
              />

              <div className={styles.list}>
                <p className={styles.name}>{food.name}</p>
                <p className={styles.price}>{food.price}</p>
                <p className={styles.desc}>{food.desc}</p>
                <p className={styles.qt}>{food.qt} restants</p>
              </div>

              <button
                className={styles.bt}
                onClick={() => handleClick(food.slug)}
              >
                Voir plus
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
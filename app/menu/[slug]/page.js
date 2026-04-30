import menu from "@/lib/data/menu.json";
import Image from "next/image";
import styles from "./page.module.css";
import WhatsAppButton from "@/app/components/whatsAppBtn/whatsAppButton";
export async function generateStaticParams() {
  return menu.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const category = menu.find((c) => c.slug === slug);

  if (!category) {
    return <h1>Catégorie introuvable</h1>;
  }

  return (
    <div className={styles.main}>

      <div className={styles.content_img}>
        <h3 className={styles.title}>
          Explorer notre menu
        </h3>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>

          {category.food.map((item) => (
            <div className={styles.box} key={item.id}>

              <Image
                src={item.pic}
                alt={item.name}
                width={300}
                height={200}
                className={styles.img}
              />

              <div className={styles.list}>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.price}>{item.price}</p>
                <p className={styles.desc}>{item.desc}</p>
                <p className={styles.qt}>{item.qt}</p>

                <WhatsAppButton product={item} />

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
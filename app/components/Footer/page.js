import styles from "../Footer/page.module.css";
import Link from "next/link";

export default function Footer() {
    const info = [
        {
            id:1,
        title:"Comment passer commande",
        items: [
            "passer votre commande",
        "la commande sera transmise sur whatsApp",
        "remplissez le formulaire de commande",
        "votre facture vous sera envoyé pour la confirmation",
        "et le livreur livrera votre colis",
        "la livraison sera ajouter sur votre facture"
        ],
        },
        {
            id:2,
        title:"Tout nos moyens de paiement",
        items: [
           "Wave",
           "Orange Money",
           "Mtn Money",
           "Djamo",
           "Paypal"
        ]
        }
    ]

    

    return(
        <footer className={styles.footer}>
            {info.map((I) => (
                <div className={styles.box} key={I.id}>
                    <h3 className={styles.title}>
                        {I.title}
                    </h3>

                    <ul className={styles.list}>
                    {I.items.map((item, idx) => (
                        <li key={idx}> {item} </li> 
                    ))}
                    </ul>
                </div>
            ))}
        </footer>
    )
}
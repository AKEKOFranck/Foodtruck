'use client'
import styles from "../whatsAppBtn/whatsAppButton.module.css"
export default function WhatsAppButton({ product }) {
  const sendToWhatsApp = () => {
    const numero = "2250789763083";

    const message = `
Produit : ${product.name}
Prix : ${product.price}
    `;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button className={styles.bt} onClick={sendToWhatsApp}>
      Commander
    </button>
  );
}
'use client';

import { useState } from 'react';
import styles from './Actors.module.css'; 
import products from './public/products.json'; 

export const Actors = () => {
    const [likedProducts, setLikedProducts] = useState({});

    const handleLike = (id, likeText) => {
        setLikedProducts((prev) => ({
            ...prev,
            [id]: likeText
        }));
    };

    return (
        <div className={styles.ActorContainer}>
            <h2 className={styles.title}>
                <span className={styles.highlight}>АКТЕРЫ И РОЛИ</span>
            </h2>
            <div className={styles.grid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.card}>
                        <img src={product.image} alt="Актер" className={styles.image} />
                        <div className={styles.Name}>
                            {product.nameRu.replace(product.brand.name, "")}
                        </div>
                        <div className={styles.role}>
                            <span className={styles.barcodeLabel}>Роль:</span>
                            <span className={styles.roleName}>{product.role}</span>
                        </div>

                        <div className={styles.fact}>
                            <span className={styles.barcodeLabel}>Интересный факт:</span>
                            <span className={styles.factName}>{product.fact}</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <button
                            className={styles.button}  
                            onClick={() => handleLike(product.id, product.likeText)}
                        >
                            {likedProducts[product.id] ? likedProducts[product.id] : "ЛАЙК"}
                        </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

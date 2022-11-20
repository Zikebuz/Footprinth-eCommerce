import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from '../products.json';
// import { SnipcartProvider } from 'use-snipcart'
import { FaShoppingCart } from 'react-icons/fa';




export default function Home() {
  return (
    <div className={styles.containerwrapper}>
      <Head>
        <title>Footprinth</title>
        <meta name="description" content="Footprinth universal footstore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.item}>
                <img src={product.image} alt={`Footprinth ${product.title}`} />
                <h3 className={styles.itemtitle}>{product.title}</h3>
                <p className={styles.itemdescription}>{product.description}</p>

                <p className={styles.back}>
                <p>NGN {product.price}</p>
                  <button id={styles.cartbuybutton}
                    className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-price={product.price}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            );
          })}
        </div>
    </main>
    </div>
  )
}

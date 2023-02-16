import './Home.scss';
import { useEffect, useState } from 'react';
import { data } from '../../firebase/Config';

export const Home = () => {
  const [storeData, setStoreData] = useState([]);
  let docs = [];

  useEffect(() => {
    data.then((snapshot) => {
      snapshot.forEach((doc) => {
        docs.push(doc.data());
      })
      docs.reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        [],
      );
      setStoreData(docs);
    })
    // eslint-disable-next-line
  }, [])

  return (
    <section className='home'>
      <h1>Browse our latest collection</h1>
      <div className='filter'>
      <p>Technology</p>
      <p>Appliances</p>
      <p>Cosmetics</p>
      </div>
    <div className='home-items-container'>
      {storeData.map((doc) => (
        <article className="product">
        <img
          className="product__image"
          src={doc.img}
          alt="product"
        />
  
        <h3 className='product__title'>
          {doc.phone}
        </h3>
        <p class="product__code">Product code: {doc.id}</p>
        <div class="product__feedback">
          <p class="product__reviews">Reviews: 5</p>
        </div>
        <div class="product__price">
          <p class="product__price_title">Price:</p>
          <p class="product__price_amount">R{doc.price}</p>
        </div>
        <button className="buy">
          Buy
        </button>
      </article>
      ))};
    </div>
    </section>
  );
}
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
    
  }, [])

  return (
    <div>
      {storeData.map((doc) => (
        <div key={doc.id}>
          <img src={doc.img} alt="item" width={100} height={100} />
          <h3>{doc.phone}</h3>
          <div>
            <p>{doc.model}</p>
            <p>`R${doc.price}`</p>
          </div>
        </div>
      ))};
    </div>
  );
}
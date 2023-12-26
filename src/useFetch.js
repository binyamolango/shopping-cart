import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('');

  const fetchData = (url) => {
    fetch(url)
      .then(res=>{
        if(!res.ok) {
          throw Error("404 Error, Couldn't fetch the data!")
        } else {
          return res.json();
        }
      })
      .then(data=>{
        setData(data);
        setIsPending(false);
      })
      .catch(err => {
        setError(err.message);
        setIsPending(false);
      })
  }

  useEffect(() => {
    fetchData(url);
    setCategory("Select Category");
  }, [url]);

  const handleAllProducts = () => {
    fetchData(url);
    setCategory('All Products')
  };

  const handleElectronicsProducts = () => {
    fetchData(`${url}/category/electronics`);
    setCategory('Electronics')
  };

  const handleJeweleryProducts = () => {
    fetchData(`${url}/category/jewelery`);
    setCategory('Jewelry')
  };

  const handleMenClothingProducts = () => {
    fetchData(`${url}/category/men's clothing`);
    setCategory("Men's Clothing")
  };

  const handleWomenClothingProducts = () => {
    fetchData(`${url}/category/women's clothing`);
    setCategory("Women's Clothing")
  };

  return {
    data,
    isPending,
    error,
    category,
    setError,
    handleAllProducts,
    handleElectronicsProducts,
    handleJeweleryProducts,
    handleMenClothingProducts,
    handleWomenClothingProducts
  };
}
 
export default useFetch;
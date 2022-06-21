import {useEffect, useState} from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch(url);
      const datas = await res.json();
      setData(datas);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return {data};
};

export default useFetch;

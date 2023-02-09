import { useContext, useEffect } from 'react';
import UrlContext from './UrlContext';

function fetchData() {
  const { url } = useContext(UrlContext);

  useEffect(() => {
    console.log(url);
  }) 
}
export default fetchData;

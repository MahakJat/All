import React, { useEffect, useState } from 'react';
import { ajax } from 'rxjs/ajax';

const AsyncOperation = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const data$ = ajax.getJSON('https://dummyjson.com/posts');

    const subscription = data$.subscribe(
      response => setData(response), //next
      error => console.error('Error fetching data:', error) //error
    );
    return () => subscription.unsubscribe();
  }, []);
  console.log(data)

  return (
    <div>
      Async Operation
    </div>
  );
};

export default AsyncOperation;

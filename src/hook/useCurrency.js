import React, { useState , useEffect} from 'react'
// const url = 'https://open.er-api.com/v6/latest/INR';

const useCurrency = (currency = 'USD') => {
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((res)=> res.json())
        .then((res)=> {
            setData(res.rates);
        });
    }, [currency]);
    return data;
}

export default useCurrency;
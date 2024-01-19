import { useEffect, useState } from "react";

function useCurrInfo(currency){
    const [data, setData] = useState(null);

    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, [currency]);

    return data;
}

export default useCurrInfo;

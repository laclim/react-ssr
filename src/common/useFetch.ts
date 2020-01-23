import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { DispatchContext } from "context/contextStore";
export const useFetch = (url: string, option: any) => {
    const [result, setResult] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(url, option);
                setResult(response.data);
            } catch (error) {
                setResult(error);
            }
        })();
    }, []);

    return result;
};

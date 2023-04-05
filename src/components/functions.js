

export default function setStorage(key, value) {
    if(typeof window.localStorage !== 'undefined'){
        return window.localstorage.setItem(key,value)
   }
}

export function GetStorage(key) {
    if( window !== 'undefined'){
        return window.localstorage.getItem(key)
    }
    
}

export function useLocalStorage(key, fallbackValue) {
    const [value, setValue] = useState(fallbackValue);
    useEffect(() => {
        const stored = localStorage.getItem(key);
        setValue(stored ? JSON.parse(stored) : fallbackValue);
    }, [fallbackValue, key]);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] ;
}
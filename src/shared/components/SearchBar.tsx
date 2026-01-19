import { useEffect,useState, useRef, type KeyboardEvent } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query:string) => void;
}

export const SearchBar = ({placeholder = "Buscar", onQuery}: Props) => {

    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    //autofocus solo una vez cuando el componente se monta
    useEffect(() => {
        inputRef.current?.focus();
    },[]);

    useEffect(() => {
        const timeoutId = setTimeout (() => {
            onQuery(query);
            //setQuery('');
            
        },1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [query,onQuery]);

    const handleSearch = () => {
        onQuery(query);
        
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div>
            <input 
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            value= {query}
            onChange = {(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );

};
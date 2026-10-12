import { useState, useEffect } from "react";

interface Props {
  placeholder: string;
  
  OnQuery: (query: string) => void;
}


export const SearchBar = ({ placeholder = "Buscar", OnQuery }: Props) => {
  
  const [query, setQuery] = useState('')
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      OnQuery(query)
    },700)
    //OnQuery(query);
      
    return () => {
      clearTimeout(timeoutId)
    }
  },[query, OnQuery])

  const HandleSearch = () => {
    OnQuery(query)
    setQuery('')
  }

  const HandleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      HandleSearch();
      }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={ HandleKeyDown}/>
            <button onClick={HandleSearch}>Buscar</button>
        </div>
  )
}

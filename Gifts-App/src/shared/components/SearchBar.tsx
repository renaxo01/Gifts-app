import { useState } from "react";

interface Props {
  placeholder: string;
  
  OnQuery: (query: string) => void;
}


export const SearchBar = ({ placeholder = "Buscar", OnQuery }: Props) => {
  
  const [query, setQuery] = useState('')
  
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

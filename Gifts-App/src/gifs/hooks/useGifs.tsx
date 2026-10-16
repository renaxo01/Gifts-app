import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";



export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerm, setPreviousTerm] = useState<string[]>([]);
  const gifsCache = useRef<Record<string, Gif[]>>({});
    


  const HandleTermClicked = async (term: string) => {
      
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term])
            return; 
  }

    const gifs = await getGifsByQuery(term);

    setGifs(gifs)
  } 

  const HandleSearch = async (query: string = '') => {
    query = query.trim().toLocaleLowerCase()
    if (query.length === 0) return
    if (previousTerm.includes(query)) return
    
    setPreviousTerm([query, ...previousTerm].splice(0, 7))
    
    const gifs = await getGifsByQuery(query);
      setGifs(gifs)
      
      gifsCache.current[query] = gifs
  };


    return {
      gifs,previousTerm, HandleSearch, HandleTermClicked,
  }
}

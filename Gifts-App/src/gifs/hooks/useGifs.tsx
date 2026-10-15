import { useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";


const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerm, setPreviousTerm] = useState<string[]>([]);
    


    const HandleTermClicked = async (term: string) => {
      
        if (gifsCache[term]) {
            setGifs(gifsCache[term])
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
      
      gifsCache[query] = gifs
  };


    return {
      gifs,previousTerm, HandleSearch, HandleTermClicked,
  }
}

import { mockGifs } from "./mock-data/gifs.mocks"
import { CustomnHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { GifList } from "./gifs/components/GifList"
import { useState } from "react"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"

export const GifsApp = () => {
  const [previousTerm, setPreviousTerm] = useState([''])

  const HandleTermClicked = (term : string) => {
    console.log({term})
  }

  const HandleSearch = async(query: string = '') => {
    query = query.trim().toLocaleLowerCase()
    if (query.length === 0) return
    if (previousTerm.includes(query)) return
    
    setPreviousTerm([query, ...previousTerm].splice(0, 7))
    
    const gifs = await getGifsByQuery(query)

    console.log({gifs})
  }

  return (
    <>
        <CustomnHeader title = "Buscador de Gifs" 
        description="Descubre y comparte el gif perfecto"/>

      <SearchBar placeholder="Busca lo que desees"
        OnQuery={HandleSearch} />

      <PreviousSearches searches={previousTerm}
        onLabelClicked={(term: string) => HandleTermClicked(term)} />

        <GifList gifs={mockGifs}/>
    </>
  )
}

import { mockGifs } from "./mock-data/gifs.mocks"
import { CustomnHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { GifList } from "./gifs/components/GifList"
import { useState } from "react"

export const GifsApp = () => {
  const [previousTerm, setPreviousTerm] = useState(['dragon ball z'])

  const HandleTermClicked = (term : string) => {
    console.log({term})
  }

  const HandleSearch = (query: string = '') => {
    query = query.trim().toLocaleLowerCase()
    if (query.length === 0) return
    if (previousTerm.includes(query)) return
    
    setPreviousTerm([query, ...previousTerm].splice(0,7))
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

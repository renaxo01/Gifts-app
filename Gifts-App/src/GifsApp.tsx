import { mockGifs } from "./mock-data/gifs.mocks"
import { CustomnHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { GifList } from "./gifs/components/GifList"

export const GifsApp  = () => {
  return (
    <>
        <CustomnHeader title = "Buscador de Gifs" 
        description="Descubre y comparte el gif perfecto"/>

        <SearchBar placeholder="Busca lo que desees" />

        <PreviousSearches searches={['Goku', 'My Melody', 'Dragon Ball Z']}  />

        <GifList gifs={mockGifs}/>
    </>
  )
}

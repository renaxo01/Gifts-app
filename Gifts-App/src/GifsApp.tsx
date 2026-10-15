import { CustomnHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { GifList } from "./gifs/components/GifList"
import { useGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {
  const { HandleSearch, previousTerm,HandleTermClicked,gifs } = useGifs();

  return (
    <>
        <CustomnHeader title = "Buscador de Gifs" 
        description="Descubre y comparte el gif perfecto"/>

      <SearchBar placeholder="Busca lo que desees"
        OnQuery={HandleSearch} />

      <PreviousSearches searches={previousTerm}
        onLabelClicked={(term: string) => HandleTermClicked(term)} />

        <GifList gifs={gifs}/>
    </>
  )
}

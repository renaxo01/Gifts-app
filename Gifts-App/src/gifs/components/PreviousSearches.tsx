
interface Props {
    searches : string [];
}


export const PreviousSearches = ({searches}:Props) => {
  return (
    <div className="previous-searches">
                <h2>Busquedas previas</h2>
                <ul className="previous-searches-list">
                    {searches.map((term) =>(
                        <li key={term}>{term}</li>
                    ))}
                </ul>
            </div>
  )
}

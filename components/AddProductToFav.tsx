export type AddProductToFavProps = {
    onAddToFav: () => void
    onRequestClose: () => void
}

export function AddProductToFav(props: AddProductToFavProps) {
    return (
        <span>
            Deseja adicionar aos favoritos?
            <button onClick={props.onAddToFav}>Sim</button>
            <button onClick={props.onRequestClose}>Não</button>
        </span>
    )
}
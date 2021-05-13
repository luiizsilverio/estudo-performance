import { memo, useState } from 'react'
import dynamic from 'next/dynamic'

//import { AddProductToFav } from './AddProductToFav'
import { AddProductToFavProps } from './AddProductToFav'

const AddProductToFav = dynamic<AddProductToFavProps>(() => {
    return import('./AddProductToFav').then(mod => mod.AddProductToFav)
}, {
    loading: () => <span>Carregando...</span>
})

type ProductProps = {
    product: {
        id: number
        price: number
        title: string
    }
    onAddToFav: (id: number) => void
}

function ProductItemComponent({ product, onAddToFav }: ProductProps) {
    const [isAdding, setIsAdding] = useState(false)
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>

            <button onClick={() => setIsAdding(true)}>
                Adicionar aos favoritos
            </button>

            { isAdding && (
                <AddProductToFav
                    onAddToFav={() => onAddToFav(product.id)}
                    onRequestClose={() => setIsAdding(false)}
                />
            )}
        </div>
    )
}


export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    //return prevProps.product.id === nextProps.product.id

    // Object.is compara o conteúdo dos 2 objetos e retorna true se forem iguais
    return Object.is(prevProps.product, nextProps.product)
})

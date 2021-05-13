import { useMemo } from 'react'
import { ProductItem } from "./ProductItem"

type Product = {
    id: number
    price: number
    title: string
}

type SearchProps = {
    results: Array<Product>
}

export function SearchResults({ results }: SearchProps) {
    const total = useMemo(() => (
        results.reduce((acc, prod) => {
            return acc + prod.price
        }, 0)
    ), [results])

    function onAddToFav(id: number) {
        console.log(id)
    }

    return (
        <div>
            <h2>Total: {total}</h2>
            {results.map(prod => (
                <ProductItem key={prod.id} 
                    product={ prod } 
                    onAddToFav={() => onAddToFav(prod.id)}
                />

            ))}
        </div>
    )
}
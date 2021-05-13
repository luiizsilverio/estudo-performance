import { useMemo } from 'react'
import { ProductItem } from "./ProductItem"
import { List, ListRowRenderer, AutoSizer } from 'react-virtualized'

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

    const onRowRenderer: ListRowRenderer = ({ index, key, style }) => {
        return (            
            <div key={key} style={style}>
                <ProductItem 
                    product={ results[index] } 
                    onAddToFav={onAddToFav}
                />
            </div>
        )
    }

    return (
        <div>
            <h2>Total: {total}</h2>
            
            <List 
                height={300}
                width={700}
                rowHeight={30}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={onRowRenderer}
            />
        
            {/* aqui, carregava os 1000 produtos
            {results.map(prod => (
                <ProductItem key={prod.id} 
                    product={ prod } 
                    onAddToFav={() => onAddToFav(prod.id)}
                />
            ))}
            */}

        </div>
    )
}
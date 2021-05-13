import { FormEvent, useEffect, useState } from 'react'
import { SearchResults } from '../components/SearchResults'

export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  let tempo: any = null

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if (!search.trim()) {
      return
    }

    const resp = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await resp.json()

    setResults(data)
  }

  function handleChange(value: string) {

    console.log(value)
    setSearch(value)
  }

  // exemplo de uso de Debounce
  useEffect(() => {    
      const timer = setTimeout(() => {
        console.log(search)  // aqui, exibição dos resultados enquanto digita.
      }, 500)    

    return () => {
      clearTimeout(timer)      
    }
  }, [search])

  return (
    <div>
      <h1>Produtos</h1> 

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        
        <button type="submit">Buscar</button>        
      </form>

      <SearchResults results={results}/>
    </div>
  )
}

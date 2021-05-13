/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react'

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}


/* Um Hook para prevenir múltiplas requisições com debounce.
Só efetua requisição a cada 500 milisegundos. Isso evita consumir 
recurso a cada tecla digitada no input.
Exemplo de uso:

const [text, setText] = useState('')
const myText = useDebounce(text, 500)
...
ler o texto em um input
criar um useEffect com lista de dependência [text],
para fazer requisição à API
*/

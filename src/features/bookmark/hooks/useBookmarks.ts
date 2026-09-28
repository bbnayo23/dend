import { useLocalStorage } from '../../../hooks/useLocalStorage'

export function useBookmarks() {
  const [ids, setIds] = useLocalStorage<string[]>('dend:bookmarks', [])

  return {
    ids,
    has: (id: string) => ids.includes(id),
    toggle: (id: string) => setIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
  }
}

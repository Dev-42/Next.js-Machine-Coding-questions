'use client'
import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

const SearchAuto = () => {
  const [query, setQuery] = useState('')
  const [debouncedQuery] = useDebounce(query, 300)
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      if (!debouncedQuery.trim()) {
        setResults([])
        return
      }

      setLoading(true)
      try {
        const res = await fetch(`https://dummyjson.com/users/search?q=${debouncedQuery}`)
        const data = await res.json()
        setResults(data.users)
      } catch (err) {
        console.error('Error fetching users:', err)
        setResults([])
      }
      setLoading(false)
    }

    fetchUsers()
  }, [debouncedQuery])

  return (
    <div className="relative w-full max-w-xl mx-auto mt-16">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="🔍 Search users..."
        className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
      />

      {loading && (
        <div className="text-sm text-gray-500 mt-2 animate-pulse">
          🔄 Searching...
        </div>
      )}

      {results.length > 0 && (
        <ul className="absolute z-20 w-full bg-white border border-gray-200 mt-2 rounded-xl shadow-lg max-h-64 overflow-y-auto">
          {results.map(user => (
            <li
              key={user.id}
              className="px-5 py-3 hover:bg-indigo-50 cursor-pointer transition-all"
              onClick={() => setQuery(`${user.firstName} ${user.lastName}`)}
            >
              <span className="font-medium text-gray-800">
                {user.firstName} {user.lastName}
              </span>
              <p className="text-sm text-gray-500">{user.email}</p>
            </li>
          ))}
        </ul>
      )}

      {!loading && debouncedQuery && results.length === 0 && (
        <p className="text-sm text-red-400 mt-3">No users found for “{debouncedQuery}”</p>
      )}
    </div>
  )
}

export default SearchAuto

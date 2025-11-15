'use client'

import { useEffect, useState } from 'react'

export default function Store() {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products?limit=20')
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`)
        }
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.error('Problem loading products:', err)
        setError('There was a problem loading products from the API.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const normalizedSearch = searchTerm.toLowerCase().trim()

  const visibleProducts = products.filter((product) =>
    product.title.toLowerCase().includes(normalizedSearch)
  )

  const wrapperStyle = {
    margin: '16px',
    padding: '16px',
    border: '1px solid #ddd',
    borderRadius: '10px',
  }

  if (loading) {
    return <div style={wrapperStyle}>Loading products...</div>
  }

  if (error) {
    return (
      <div style={wrapperStyle}>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div style={wrapperStyle}>
      <h2>Fake Store Browser</h2>
      <p style={{ marginBottom: '8px' }}>
        Search by title to filter the 20 products from fakestoreapi.com.
      </p>

      <input
        type="text"
        placeholder="Type to filter products by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '420px',
          padding: '10px',
          fontSize: '15px',
          borderRadius: '6px',
          border: '1px solid #ccc',
        }}
      />

      <p style={{ marginTop: '8px', fontSize: '13px', color: '#555' }}>
        Showing {visibleProducts.length} of {products.length} products.
      </p>

      <div style={{ overflowX: 'auto', marginTop: '16px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '500px',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#f3f4f6' }}>
              <th
                style={{
                  padding: '10px',
                  textAlign: 'left',
                  border: '1px solid #e5e7eb',
                }}
              >
                Image
              </th>
              <th
                style={{
                  padding: '10px',
                  textAlign: 'left',
                  border: '1px solid #e5e7eb',
                }}
              >
                Title
              </th>
              <th
                style={{
                  padding: '10px',
                  textAlign: 'left',
                  border: '1px solid #e5e7eb',
                }}
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {visibleProducts.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  style={{
                    padding: '16px',
                    textAlign: 'center',
                    border: '1px solid #e5e7eb',
                  }}
                >
                  No products found matching &quot;{searchTerm}&quot;.
                </td>
              </tr>
            ) : (
              visibleProducts.map((product) => (
                <tr key={product.id}>
                  <td
                    style={{
                      padding: '10px',
                      border: '1px solid #e5e7eb',
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'contain',
                      }}
                    />
                  </td>
                  <td
                    style={{
                      padding: '10px',
                      border: '1px solid #e5e7eb',
                    }}
                  >
                    {product.title}
                  </td>
                  <td
                    style={{
                      padding: '10px',
                      border: '1px solid #e5e7eb',
                    }}
                  >
                    ${product.price.toFixed(2)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}


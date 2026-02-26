import { ProductList } from './ProductList'
import { ProductTitle } from './ProductTitle'
import { products } from '@/data/products'
import { categories } from '@/data/categories'

export const ProductSection = () => {
  return (
    <div className="container">
      {categories.map((category) => {
        const filteredProducts = products.filter(
          (product) => product.category === category.name,
        )
        if (filteredProducts.length === 0) return null

        return (
          <div key={category.name} className="!mb-16">
            <ProductTitle title={category.name} />
            <div className="grid grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductList key={product.id} product={product} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

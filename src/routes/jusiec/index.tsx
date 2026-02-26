import { createFileRoute } from '@tanstack/react-router'

import { products } from '@/data/products'
import { ProductList } from '@/components/product-section/ProductList'

export const Route = createFileRoute('/jusiec/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='!mt-9 !mb-7.5 container '>
      <div className="grid grid-cols-4 gap-7.5 mt-5">
        {products
          .filter((item) => item.category === 'Напитки')
          .map((item) => (
            <ProductList product={item} />
          ))}
      </div>
    </div>
  )
}

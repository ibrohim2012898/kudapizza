import { createFileRoute } from '@tanstack/react-router'
import { ProductList } from '@/components/product-section/ProductList'
import { products } from '@/data/products'

export const Route = createFileRoute('/sneaks/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='container '>
  <div className='!mt-5 !mb-7.5'>
       <div className="grid grid-cols-4 gap-7.5 mt-5">
         {products
           .filter((item) => item.category === 'Закуски')
           .map((item) => (
             <ProductList product={item} />
           ))}
       </div>
     </div>
    </div>
  )
}

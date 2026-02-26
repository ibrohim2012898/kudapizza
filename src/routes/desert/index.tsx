import { createFileRoute } from '@tanstack/react-router'
import { ProductList } from '@/components/product-section/ProductList'
import { products } from '@/data/products'

export const Route = createFileRoute('/desert/')({
  component: RouteComponent,
})

function RouteComponent() {
  return   <div className='!mt-5 !mb-7.5 container '>
         <div className="grid grid-cols-4 gap-7.5 mt-5">
           {products
             .filter((item) => item.category === 'Десерты')
             .map((item) => (
               <ProductList product={item} />
             ))}
         </div>
       </div>
}

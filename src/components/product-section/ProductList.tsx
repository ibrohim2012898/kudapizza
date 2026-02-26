import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { ButtonGroup } from '../ui/button-group'
import { useCartStore } from '@/store/useCartStore'

interface Props {
  id: string | number
  category: string
  filter?: string
  image: string
  name: string
  description: number | string
  price: number | string
  discount?: number
}

export const ProductList = ({ product }: { product: Props }) => {
  const { addToCart, updateQuantity, removeFromCart, items } = useCartStore()

  const cartItem = items.find((i) => i.id === product.id)
  const count = cartItem?.quantity ?? 0

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: String(product.name),
      price: String(product.price),
      image: String(product.image),
      ...(product.filter && { filter: product.filter }),
      ...(product.discount !== undefined && { discount: product.discount }),
    })
  }

  return (
    <Card className="h-full container transition-all ease-in duration-100 hover:scale-105 relative">
      <CardContent className="gap-3 flex justify-between flex-col h-full">
        <img src={product.image} alt={product.name} />
        {product.filter && (
          <span className="bg-red-500 absolute !left-0 rounded-r-sm text-lg !px-4 text-white">
            {product.filter}
          </span>
        )}
        <div className="flex justify-between flex-col gap-4">
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <div className="flex items-center justify-between gap-4">
            {count > 0 ? (
              <ButtonGroup>
                <Button
                  onClick={() =>
                    count === 1
                      ? removeFromCart(product.id)
                      : updateQuantity(product.id, count - 1)
                  }
                  className="bg-[#FF7010]"
                >
                  -
                </Button>
                <Button className="bg-[#FF7010]">{count}</Button>
                <Button
                  onClick={() => updateQuantity(product.id, count + 1)}
                  className="bg-[#FF7010]"
                >
                  +
                </Button>
              </ButtonGroup>
            ) : (
              <Button
                onClick={handleAddToCart}
                className="bg-[#FF7010] h-14 !pb-4 !w-36 gap-2 !pt-[13px] !mb-3 rounded-2xl text-center text-amber-100 transition-all ease-in duration-100 hover:scale-110"
              >
                Выбрать
              </Button>
            )}
            <p>от {product.price} ₽</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

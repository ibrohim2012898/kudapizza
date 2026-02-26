  import { ShoppingCart, Trash2 } from 'lucide-react'
  import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from '../ui/drawer'
  import { Button } from '../ui/button'
  import { useCartStore } from '@/store/useCartStore'

  export const CartDrawer = () => {
    const { items, removeFromCart, clearCart, getTotalItems } = useCartStore()

    const totalPrice = items.reduce(
      (sum, item) => sum + parseFloat(item.price) * item.quantity,
      0,
    )

    return (
      <Drawer direction="right">
        <DrawerTrigger className="flex items-center gap-2 !py-2 !px-5 bg-[#FF7010] text-white rounded-xl cursor-pointer relative">
          <ShoppingCart color="white" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </DrawerTrigger>

        <DrawerContent className="h-full w-[400px] right-0 left-auto ">
          <DrawerHeader>
            <DrawerTitle className="text-xl font-bold !py-3 !px-3">Корзина</DrawerTitle>
            <DrawerDescription className='!px-3'>
              {items.length === 0
                ? 'Корзина пуста'
                : `${getTotalItems()} товаров в корзине`}
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto !px-4 flex flex-col gap-3">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-40 text-gray-400">
                <ShoppingCart size={48}  />
                <p className='!mt-2'>Добавьте товары в корзину</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 !p-3 border rounded-xl"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-[#FF7010] font-semibold text-sm">
                      {item.price} ₽ × {item.quantity}
                    </p>
                    <p className="text-gray-500 text-xs">
                      Итого: {(parseFloat(item.price) * item.quantity).toFixed(0)}{' '}
                      ₽
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>
              ))
            )}
          </div>

          <DrawerFooter className=" container">
            {items.length > 0 && (
              <>
                <div className="flex justify-between items-center !mb-2">
                  <span className="font-semibold text-lg">Итого:</span>
                  <span className="font-bold text-xl text-[#FF7010]">
                    {totalPrice.toFixed(0)} ₽
                  </span>
                </div>
                <Button className="bg-[#FF7010] text-white w-full h-12 rounded-xl text-base">
                  Оформить заказ
                </Button>
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="w-full text-red-500 border-red-200 hover:bg-red-50"
                >
                  Очистить корзину
                </Button>
              </>
            )}
            <DrawerClose asChild>
              <Button variant="outline" className="w-full !mb-4">
                Закрыть
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }

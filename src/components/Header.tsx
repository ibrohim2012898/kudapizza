import { Link } from '@tanstack/react-router'
import { LocationEditIcon, ShoppingCart, UserIcon } from 'lucide-react'
import { CartDrawer } from './order/CartDrawer'


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const Header = () => {
  return (
    <header className="w-full">
      <div className="border-b">
        <div className="container flex items-center justify-between !py-3">
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <LocationEditIcon color="#FF7010" />
                <SelectValue placeholder="Select location" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup className='!px-4 flex-col gap-7'>
                  <SelectItem value="russia">RUSSIA</SelectItem>
                  <SelectItem value="uzbekistan">UZBEKISTAN</SelectItem>
                  <SelectItem value="usa">U.S.A</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <button className="text-sm">Проверить адрес</button>

            <div className="flex items-center gap-2 text-sm">
              <span>Среднее время доставки*:</span>
              <span className="font-bold">00:24:19</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span>Время работы: с 11:00 до 23:00</span>

            <button className="flex items-center gap-2 cursor-pointer">
              <UserIcon color="#FF7010" />
              <span>Войти в аккаунт</span>
            </button>
          </div>
        </div>
      </div>

      <div className="border-b">
        <div className="container flex items-center justify-between !py-3 gap-12 border-b">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img src="/logo.svg" alt="logo" />
            </Link>
            <p>Куда пицца</p>
          </div>

          <nav className="flex items-center gap-10">
            <Link to="/pitsa" className="cursor-pointer">
              Пицца
            </Link>
            <Link to="/sushi" className="cursor-pointer">
              Суши
            </Link>
            <Link to="/jusiec" className="cursor-pointer">
              Напитки
            </Link>
            <Link to="/sneaks" className="cursor-pointer">
              Закуски
            </Link>
            <Link to="/combo" className="cursor-pointer">
              Комбо
            </Link>
            <Link to="/desert" className="cursor-pointer">
              Десерты
            </Link>
            <Link to="/souse" className="cursor-pointer">
              Соусы
            </Link>
          </nav>

          <CartDrawer/>
        </div>
      </div>
    </header>
  )
}

export default Header
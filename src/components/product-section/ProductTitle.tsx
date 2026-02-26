import { FunnelIcon } from 'lucide-react'
import { Button } from '../ui/button'

interface Props {
  title: string
}

export const ProductTitle = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-between !mb-7 container">
      <h3 className="font-semibold text-5xl">{title}</h3>
      <Button variant={'outline'} className="cursor-pointer">
        <FunnelIcon size={16} color="#FF7010" />
        Фильтры
      </Button>
    </div>
  )
}

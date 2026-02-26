import { ButtonGroup } from '../ui/button-group'
import { Button } from '@/components/ui/button'
import { Field } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export function HeroLocation() {
  return (
    <div className="container">
      <Field className="!mt-10">
        <ButtonGroup>
          <Input
            className=" !mb-7 !py-5 !px-5"
            id="input-button-group"
            placeholder="Search..."
          />
          <Button className="bg-[#FF7010] h-11">Адрес Проверить</Button>
        </ButtonGroup>
      </Field>
    </div>
  )
}

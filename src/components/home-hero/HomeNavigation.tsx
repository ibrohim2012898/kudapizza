  import { Link } from '@tanstack/react-router'
  import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'

  import { categories } from '@/data/categories'

  export const HomeNavigation = () => {
    return (
      <div className="container w-screen items-center !pb-10 !mt-10 flex justify-between overflow-x-auto gap-[30px] !border-b">
        {categories.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className=" flex items-center gap-2 text-sm font-medium text-gray-700  transition-all ease-in duration-100 hover:scale-110"
          >
            <Card className="!mt-2 w-[135px] !py-5 !px-10 items-center gap-2 ">
              <CardContent className="flex flex-col items-center">
                <img className="size-8" src={item.image} alt="" />
                <p>{item.name}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    )
  }

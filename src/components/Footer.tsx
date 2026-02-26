import { MapPinIcon, Phone, Pizza } from "lucide-react"

export const Footer = () => {
    return (
        <div className="py-8 border-t border-neutral-200 bg-white !m-20">
            <div className="container">
                <div className="flex justify-between">
                    <div className="flex flex-col justify-between">
                        <div className="flex items-center gap-2">
                            <Pizza color="#FF7010" />
                            <p>Куда пицца</p>
                        </div>
                        <p className="!mt-12 text-sm text-neutral-600">
                            © Copyright 2021 — Куда Пицца
                        </p>
                    </div>

                    <div>
                        <h3 className="!mb-4 font-bold">Куда пицца</h3>
                        <ul className="!space-y-3 text-sm">
                            <li><a>О компании</a></li>
                            <li><a>Пользовательское соглашение</a></li>
                            <li><a>Условия гарантии</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="!mb-4 font-bold">Помощь</h3>
                        <ul className="!space-y-3 text-sm ">
                            <li><a>Ресторан</a></li>
                            <li><a>Контакты</a></li>
                            <li><a>Поддержка</a></li>
                            <li><a>Отследить заказ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="!mb-4 font-bold">Контакты</h3>
                        <ul className="!space-y-3 text-sm">
                            <li>
                                <a className="flex items-center gap-3"><Phone color="#FF7010" /> +7 (926) 223-10-11</a>
                            </li>
                            <li> 
                                <a className="flex items-center gap-3"><MapPinIcon color='#FF7010' /> Москва, ул. Юных Ленинцев, д.99</a>
                            </li>
                            <li className="flex items-center gap-4 !pt-1">
                                <a className="flex items-center gap-3"><img src="/facebook.svg" alt="" /> Facebook</a>
                                <a className="flex items-center gap-3"><img src="/instagram.svg" alt="" /> Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
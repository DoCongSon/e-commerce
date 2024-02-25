import RedCarImg from "../assets/car-red.png";
import type { ProductItemProps } from "../components/ProductItem.tsx";
import Gamepad1 from "../assets/gamepad1.png";
import Gamepad2 from "../assets/gamepad2.png";
import Gamepad3 from "../assets/gamepad3.png";
import Gamepad4 from "../assets/gamepad4.png";

const productsList: ProductItemProps[] = [
    {
        discount: 22,
        photo: RedCarImg,
        name: 'Electric Car',
        price: 9601,
        rate: 3,
        rateTotal: 165,
        isNew: false,
        id: 1
    },
    {
        photo: RedCarImg,
        name: 'Kids Electric Car',
        price: 960,
        rate: 5,
        rateTotal: 65,
        isNew: true,
        id: 2
    },
    {
        discount: 22,
        photo: RedCarImg,
        name: 'Kids Electric Car',
        price: 960,
        rate: 5,
        rateTotal: 65,
        isNew: true,
        id: 3
    },
    {
        discount: 22,
        photo: RedCarImg,
        name: 'Kids Electric Car',
        price: 960,
        rate: 5,
        rateTotal: 65,
        isNew: true,
        id: 4
    },
    {
        discount: 22,
        photo: RedCarImg,
        name: 'Kids Electric Car',
        price: 960,
        rate: 5,
        rateTotal: 65,
        isNew: true,
        id: 5
    },
    {
        discount: 21,
        photo: RedCarImg,
        name: 'Kids Electric Car',
        price: 960,
        rate: 5,
        rateTotal: 65,
        isNew: true,
        id: 6
    },
    {
        photo: RedCarImg,
        name: 'Kids Electric Car',
        price: 960,
        rate: 5,
        rateTotal: 65,
        isNew: true,
        id: 7
    },
    {
        photo: RedCarImg,
        name: 'Kids Electric Car',
        price: 960,
        rate: 5,
        rateTotal: 65,
        isNew: true,
        id: 8
    },
    {
        discount: 22,
        photo: RedCarImg,
        name: 'Kids Car',
        price: 960,
        rate: 5,
        rateTotal: 65,
        isNew: true,
        id: 9
    },
    {
        discount: 22,
        photo: RedCarImg,
        name: 'Kids Electric Car',
        price: 960,
        rate: 5,
        rateTotal: 65,
        isNew: true,
        id: 10
    },
    {
        discount: 22,
        photo: RedCarImg,
        name: 'Kids Electric Car',
        price: 960,
        rate: 5,
        rateTotal: 65,
        isNew: true,
        id: 11
    },
    {
        discount: 22,
        photo: RedCarImg,
        name: 'Kids Electric Car',
        price: 960,
        rate: 5,
        rateTotal: 65,
        isNew: true,
        id: 12
    },
    {
        discount: 22,
        photo: RedCarImg,
        name: 'Kids Electric Car',
        price: 960,
        rate: 5,
        rateTotal: 65,
        isNew: true,
        id: 13
    },
    {
        discount: 22,
        photo: RedCarImg,
        name: 'Kids Car',
        price: 960,
        rate: 5,
        rateTotal: 65,
        isNew: true,
        id: 14
    },
    {
        discount: 22,
        photo: RedCarImg,
        name: 'Kids Electric Car',
        price: 960,
        rate: 1,
        rateTotal: 65,
        isNew: true,
        id: 15
    },
    {
        discount: 22,
        photo: RedCarImg,
        name: 'Kids Electric Car',
        price: 960,
        rate: 2,
        rateTotal: 65,
        isNew: true,
        id: 16
    },
    {
        discount: 22,
        photo: RedCarImg,
        name: 'Kids Electric Car',
        price: 960,
        rate: 5,
        rateTotal: 65,
        isNew: true,
        id: 17
    },
    {
        discount: 22,
        photo: RedCarImg,
        name: 'Kids Electric Car',
        price: 2960,
        rate: 3,
        rateTotal: 615,
        isNew: false,
        id: 18
    },
    {
        discount: 22,
        photo: RedCarImg,
        name: 'Kids Electric Car',
        price: 960,
        rate: 4,
        rateTotal: 25,
        isNew: false,
        id: 19
    },
    {
        discount: 22,
        photo: RedCarImg,
        name: ' Electric Car',
        price: 390,
        rate: 2,
        rateTotal: 65,
        isNew: true,
        id: 20
    }
]

type ProductDetail = {
    id: number,
    name: string,
    price: number,
    discount?: number,
    rate: 1 | 2 | 3 | 4 | 5,
    rateTotal: number,
    isNew: boolean,
    photo: string[],
    description: string
}

const productDetail: ProductDetail = {
    id: 1,
    name: 'Havic HV G-92 Gamepad',
    price: 192,
    discount: 10,
    rate: 4,
    rateTotal: 150,
    isNew: true,
    photo: [Gamepad1, Gamepad2, Gamepad3, Gamepad4],
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.'
}

export { productsList, productDetail }
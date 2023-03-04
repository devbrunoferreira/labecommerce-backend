import { TProduct, TPurchase, TUser } from "./types";

export const users: TUser[] = [
    {
        id: "01",
        email: "bruno@user.com",
        password: "@Bruno123"
    },
    {
        id: "02",
        email: "lucía@user.com",
        password: "lucía#456"
    }
]

export const products: TProduct[] = [
    {
        id: "01",
        name: "Notebook 17¨ 10TB",
        price: 3000,
        category: "Computers"
    },
    {
        id: "02",
        name: "Keyboard",
        price: 120,
        category: "Computers"
    }
]

export const purchases: TPurchase[] = [
    {
        userId: "01",
        productId: "01",
        quantity: 2,
        totalPrice: 6000
    },
    {
        userId: "02",
        productId: "02",
        quantity: 1,
        totalPrice: 120
    }
]
const name = 'Hyukho'
const userAge = 27

const user = {
    name,
    userAge,
    location: 'Suwon'
}

// console.log(user)

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const price = product.price

// const {label, stock} = product
// console.log(label)
// console.log(stock)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)
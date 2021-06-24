const greeter = (name = 'Hyukho') => {
    console.log('Hello ' + name)
}

greeter()

const product = {
    label: 'Diablo3',
    price: '49500',
    stock: '5',
    salePrice: '35000',
    rating: 4.5
}

const transaction = (type, {label, price = '40000'} = {}) => {
    console.log(type, label, price)
}

transaction('order', product)
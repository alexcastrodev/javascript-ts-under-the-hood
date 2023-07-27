interface Product {
    name: string;
    price?: number;
}
const abacaxi = {
    name: 'Abacaxi',
}

const getPrice = (product: Product) => product?.price
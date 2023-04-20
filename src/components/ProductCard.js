import './ProductCard.css'

export const ProductCard = ({product}) => {
    const {name, price, image} = product

    return (
        <div className={'productCard'}>
            <img src={image} alt={image}/>
            <p className={'name'}>{name}</p>
            <div className={'action'}>
                <p>{price} $</p>
                <button>Add to Cart</button>
            </div>

        </div>
    );
};
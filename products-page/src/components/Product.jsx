function Product(props){
    let {productId, name, price, brand, description, image} = props.product
    return(
        <div className="flex flex-col h-full bg-white rounded-xl shadow-lg border  transition-shadow duration-200 p-4">
            <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-200" />
            <div className="flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-amber-900 mb-1">{name}</h2>
                <p className="text-sm text-amber-700 mb-1">Brand: <span className="font-medium">{brand}</span></p>
                <p className="font-bold text-amber-800 mb-2">${price}</p>
                <p className="text-xs text-gray-700 mb-2 flex-1">{description}</p>
            </div>
        </div>
    )
}

export default Product
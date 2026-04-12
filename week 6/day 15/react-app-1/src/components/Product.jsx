import '../App.jsx'
function Product(props){
    //{productObj:{}}
    const {productObj}=props;
    return(
        <div className="shadow-2xl p-2">
        <h2 className="text-2xl text-blue-300" >{productObj.title}</h2>
        <h2 className="text-2xl">{productObj.price}</h2>
        <p>{productObj.category}</p>
        </div>
    )
}

export default Product;
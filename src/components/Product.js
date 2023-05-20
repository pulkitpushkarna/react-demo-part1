export default function Product(){
    const products = [
     {id:1,name:"Laptop",price:100}   ,
     {id:2,name:"Phone",price:200}, 
     {id:3,name:"Modem",price:300}];
    const productList = products.map(product=>(<h1>Name : {product.name} Price:{product.price}</h1>));

    return(<div>
        {productList}
    </div>)

}
function getProductUsingAxios(){
axios.get("https://dummyjson.com/products")
.then(function(response){
let products = response.data.products;

const result = products.map(function (e) {
    return `
    <div class="product">
    <img src="${e.thumbnail}">
    <h2> ${e.title} </h2>
    <p>${e.description}</p>
    <a href="details.html?id=${e.id}">Details</a>
    </div>
    `;
    
}).join('');
document.querySelector(".products").innerHTML=result;
})
}
getProductUsingAxios();

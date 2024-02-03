
function getDetails(){
    const urlParams= new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    axios.get(`https://dummyjson.com/products/${id}`)
 .then(function(response){
 const {title,price,brand,description}= response.data;
 const someDetails = `
 <div class="item">
     <h2>${title}</h2>
     <span>The Brand: ${brand}</span>
     <p>Some Information: ${description}</p>
     <span>Price: $${price}</span>
 </div>
 `
 document.querySelector(".detail").innerHTML= someDetails;
})

}
getDetails();
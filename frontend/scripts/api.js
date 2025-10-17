const API_URL="https://sanj3d-backend.onrender.com/api/products";
async function loadProducts(){
 const container=document.getElementById("productList");
 const res=await fetch(API_URL);
 const products=await res.json();
 products.forEach(p=>{
  const card=document.createElement("div");
  card.classList.add("card");
  card.innerHTML=`<img src="${p.image}" alt="${p.name}"><h3>${p.name}</h3><p>${p.description}</p><p><strong>$${p.price}</strong></p><button onclick="addToCart('${p._id}','${p.name}',${p.price})">Add to Cart</button>`;
  container.appendChild(card);
 });
}
document.addEventListener("DOMContentLoaded",loadProducts);

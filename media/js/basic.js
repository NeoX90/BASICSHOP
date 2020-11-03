let products = JSON.parse(localStorage.getItem('productData'));
if (products == null) {
  localStorage.setItem('productData', JSON.stringify(productData));
  products = JSON.parse(localStorage.getItem('productData'));
}
console.log(products);

let arrayName = [];
let showNike = document.getElementById('nike');
let showAdidas = document.getElementById('adidas');
let showBalen = document.getElementById('balenciaga');
let showVete = document.getElementById('vetements');
let showMen = document.getElementById('proMen');
let showWoman = document.getElementById('proWomen');
let showApparel = document.getElementById('apparel');
let showShoes = document.getElementById('shoes');
let showAccessories = document.getElementById('accessories');
let showList= document.getElementById("showList");
let search_Text = document.getElementById("search");
let search_btn = document.getElementById("search-btn");
let x = document.getElementsByClassName("silderItems");
// responsive menu
let menuBtn = document.querySelector(".menu-icon #menu-icon-bars")
let searchBtn = document.querySelector("#search-icon");
let cancelBtn = document.querySelector(".cancel-icon");
let items = document.querySelector(".menu-items")
let form = document.querySelector("#form-search")
menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  // cancelBtn.classList.remove("show");
  form.classList.remove("active1");
  // cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = ()=>{
  form.classList.add("active1");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
// }
//chuyển đọng trái phải silder show + auto run
var slideIndex = 0;
showDivs(slideIndex); 

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for(i = 0 ; i< x.length;i++ ){
    x[i].style.display = 'none';
  }
  slideIndex ++;
  if (slideIndex > x.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  setTimeout(showDivs,2000);
}


// show sản phẩm ra từ đầu
function getdata(){
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    soProduct(products[i].id, products[i].img, products[i].name, products[i].price);
  }
}
function soProduct(id, img, name, price)
{
    showList.insertAdjacentHTML('beforeEnd', 
    `
    <div class="productItem">
      <div class ="productsImg" style = "position: relative">
        <div class="productImg0" style = "top:0; "><img src="${img[0]}" alt="" ></div>
        <div class="productImg1" style = "position: absolute ; top: 0 ; z-index :-1"><img src="${img[1]}" alt="" ></div>
      </div>
      <div class="productTit">
        <b style ="font-size:10px;">${name}</b>
      </div>
      <div class="productPrice">$${price}</div>
      <button  class="btnToCart" onclick="AddPro(${id})" >Add to cart</button>
     </div>
    `
    )
}
getdata()

let ProductsList = document.getElementById('ProductsList')
function searchResult (name){console.log(name)
  ProductsList.insertAdjacentHTML('beforeEnd',
  `
      <option value="${name}" />              
  `
  )
}
function fillArr(){
  for( let i = 0 ; i <products.length;i++){
    arrayName.push(products[i].name.toLowerCase())
  }
  // console.log(arrayName)
  for(let i = 0 ; i < products.length; i++){
    searchResult(products[i].name)
  }
}
console.log(fillArr())



// tìm kiếm theo brand + gender
// nike
showNike.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.brand == 'Nike');
  getdata(products);
})
// adidas
showAdidas.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.brand == 'adidas');
  getdata(products);
})
// balenciaga
showBalen.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.brand == 'balenciaga');
  getdata(products);
})
// vetements
showVete.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.brand == 'VETEMENTS');
  getdata(products);
})
// show products for men
showMen.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  let product1 = products.filter(x => x.gender.length == 2 );
  let product2 = products.filter(x => x.gender == 'male');
  products = product1.concat(product2);
  getdata(products)
})
// show products for women
showWoman.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  let product1 = products.filter(x => x.gender.length == 2 );
  let product2 = products.filter(x => x.gender == 'female');
  products = product1.concat(product2);
  console.log(products);
  getdata(products)
})

showApparel.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.category == 'apparel');
  getdata(products);
})
showShoes.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.category == 'shoes');
  getdata(products);
})
showAccessories.addEventListener('click',()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  products = products.filter(x => x.category == 'accessories');
  getdata(products);
})
// tìm kiếm theo tên

function getInputValue(){
  showList.innerHTML ='';
  var inputVal = search_Text.value.toLowerCase();
  for(let i = 0 ; i < products.length ;i++){
    let x = products[i].name.toLowerCase()
      if(x == inputVal){
        soProduct(products[i].img, products[i].name, products[i].price);
        searchResult(products[i].name);
        
    }
  }
}

// sắp xếp theo giá 
let sortby = document.getElementById('sortby');
sortby.addEventListener('change', ()=>{
  products = JSON.parse(localStorage.getItem('productData'));
  if(sortby.value == 'low') {
    products.sort(function(a, b) {return a.price - b.price});
    getdata(products);
  }else if (sortby.value == 'high') {
    products.sort(function(a, b) {return b.price - a.price});
    getdata(products);
  }else{
    getdata(products);
  }
})
//gio hang
let listPro = JSON.parse(localStorage.getItem('listProduct'));
if (listPro == null) {
  let list = new Array();
  localStorage.setItem('listProduct', JSON.stringify(list))
  listPro = JSON.parse(localStorage.getItem('listProduct'))
}

function AddPro(id) {
  alert('Add to cart successfully');
  for (let item of products) {
    if (item.id == id) {
      if(!listPro.includes(item)){
        listPro.push(item);
        listPro[listPro.indexOf(item)].number = 1;
      }else {
        listPro[listPro.indexOf(item)].number++
      }
    }
  }
  console.log(listPro);
  updateTable();
  delBill()
  push(listPro);
}

function push(listPro) {
  localStorage.setItem('listProduct', JSON.stringify(listPro))
} 

function updateTable() {
  document.getElementById('numberCard').innerHTML = listPro.length;
  let tabbleCart = document.getElementById('tableCart');
  tabbleCart.innerHTML = '';
  let cost = 0; totalPrice = 0;
  for (let item of listPro) {
    idd = item.id;
    img = item.img[0];
    name = item.name;
    if (item.gender.length == 2) {
      gender = 'unisex';
    }else {
      gender = item.gender[0];
    }
    proType = item.productType;
    number = item.number;
    price = item.price;
    cost = price*number;
    totalPrice += price*number;
    addTable(idd, img, name, gender, proType, number, price, cost, totalPrice)
  }
}
function addTable(idd, img, name, gender, proType, number, price, cost, totalPrice){
  let totalCart = document.getElementById('totalCart');
  let tabbleCart = document.getElementById('tableCart');
  tabbleCart.insertAdjacentHTML('beforeend',`
  <tr>
    <td><img height="160rem" width="160rem" src="${img}" alt="${idd}"></td>
    <td>${name}</td>
    <td>${gender}</td>
    <td>${proType}</td>
    <td><input type="number" id="editNumber_${idd}" placeholder="${number}" value="${number}"/></td>
    <td>$${price}</td>
    <td>$${cost}</td>
    <td><button class="btn_delBill" onclick="delBill()">Delete</button></td>
  </tr>`)
  totalCart.innerHTML = '$'+totalPrice;
  let editNumber = document.getElementById(`editNumber_${idd}`);
  editNumber.addEventListener('change',()=>{
    for (item of listPro) {
      if (item.id == idd) {
        listPro[listPro.indexOf(item)].number = editNumber.value;
        updateTable();
      }
    }
  })
}
function delBill(){
  let btn_delBill = document.getElementsByClassName('btn_delBill');
  for (let i=0; i<listPro.length; i++){
    btn_delBill[i].addEventListener('click', ()=>{
      listPro.splice(i, 1);
      updateTable();
      alert('You have successfully deleted the product');
    })
  }
}
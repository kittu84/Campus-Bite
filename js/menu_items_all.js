let price_temp=0;
let count_temp=0;
let cart_txt;
// document.addEventListener("DOMContentLoaded", function(event) {
//     cart_txt=document.getElementById('cart_text');
// });

function cart_items_display(cart_txt){
    cart_txt=document.getElementById(cart_txt);
} 

console.log(cart_txt.innerHTML);
function add_more(button_Id, price_item,add_more_items) {
    let add_btn = document.getElementById(button_Id);
    let price = document.getElementById(price_item);
    div_add_items=document.getElementById(add_more_items);
    div_add_items.style.display="block";
    div_add_items.style.display="flex";
    add_btn.style.display = "none";
    price.style.display = "none";

}

function increment(count_of_items) {
        let count_items = document.getElementById(count_of_items);
        let x = parseInt(count_items.innerHTML); // Get the current count as an integer
        x = x + 1;
        count_items.innerHTML = x;


}
function decrement(count_of_items,add_more_items,button_Id,price_item) {
    let add_btn = document.getElementById(button_Id);
    let price = document.getElementById(price_item);
    let count_items = document.getElementById(count_of_items);
    div_add_items=document.getElementById(add_more_items);
    let price_num=parseInt(price.innerHTML.substring(4));
    console.log(price_num);

      let x = parseInt(count_items.innerHTML); // Get the current count as an integer
        if(x==1){
            div_add_items.style.display="none";
            add_btn.style.display="block";
            price.style.display="block";
            count_items.innerHTML = 1;
            return;
        }
        x = x - 1;
        count_items.innerHTML = x;
       
        cart_txt.innerHTML="";
price_temp=price_temp+price_num;
count_temp=count_temp+count_items;
cart_txt.innerHTML=price_temp+" "+count_temp;
}



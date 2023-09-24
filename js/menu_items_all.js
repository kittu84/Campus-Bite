

function add_more(button_Id, price_item,add_more_items,name,img) {
    let name_item=document.getElementById(name);
    let img_item=document.getElementById(img);
    let add_btn = document.getElementById(button_Id);
    let price = document.getElementById(price_item);
    div_add_items=document.getElementById(add_more_items);
    div_add_items.style.display="block";
    div_add_items.style.display="flex";
    add_btn.style.display = "none";
    price.style.display = "none";





}

function increment(count_of_items,name) {
        let count_items = document.getElementById(count_of_items);
        
        let x = parseInt(count_items.innerHTML); // Get the current count as an integer
        x = x + 1;
        count_items.innerHTML = x;



}
function decrement(count_of_items,add_more_items,button_Id,price_item,name) {
    let add_btn = document.getElementById(button_Id);
    let price = document.getElementById(price_item);
    let count_items = document.getElementById(count_of_items);
    div_add_items=document.getElementById(add_more_items);
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


    sessionStorage.setItem("price", (price.innerHTML));
    sessionStorage.setItem("count_items", (count_items.innerHTML));
    
}


items = {
    name_items: {

    },
    price_item: {
    },
    count_item: {

    }


}
function add_more(button_Id, price_item, add_more_items, name, img) {
    let name_item = document.getElementById(name);
    let add_btn = document.getElementById(button_Id);
    let price = document.getElementById(price_item);
    div_add_items = document.getElementById(add_more_items);
    div_add_items.style.display = "block";
    div_add_items.style.display = "flex";
    add_btn.style.display = "none";
    price.style.display = "none";
    const price_val = price.innerHTML;
    const name_val = name_item.innerHTML;
    items.name_items[name_val] = name_val;
    items.price_item[name_val] = (price_val).substring(4);
    items.count_item[name_val] = 1;
    sessionStorage.setItem("items", JSON.stringify(items));
    console.log(items)



}

function increment(count_of_items, name, price_item) {
    let count_items = document.getElementById(count_of_items);
    let name_item = document.getElementById(name);
    let price = document.getElementById(price_item);

    let x = parseInt(count_items.innerHTML); // Get the current count as an integer
    x = x + 1;
    count_items.innerHTML = x;
    let name_val = name_item.innerHTML;
    let price_val = price.innerHTML;

    items.name_items[name_val] = name_val;
    items.price_item[name_val] = parseInt(price_val.substring(4)) * x;
    items.count_item[name_val] = x;

    sessionStorage.setItem("items", JSON.stringify(items));

}
function decrement(count_of_items, add_more_items, button_Id, price_item, name) {
    let add_btn = document.getElementById(button_Id);
    let name_item = document.getElementById(name);
    let price = document.getElementById(price_item);
    let count_items = document.getElementById(count_of_items);
    div_add_items = document.getElementById(add_more_items);
    let x = parseInt(count_items.innerHTML); // Get the current count as an integer
    let name_val = name_item.innerHTML;
    let price_val = price.innerHTML;
    if (x == 1) {
        div_add_items.style.display = "none";
        add_btn.style.display = "block";
        price.style.display = "block";
        count_items.innerHTML = 1;
        items.name_items[name_val] = name_val;
        items.price_item[name_val] = parseInt(price_val.substring(4)) ;
        items.count_item[name_val] = 1;
        return;
    }
    x = x - 1;
    count_items.innerHTML = x;

    items.name_items[name_val] = name_val;
    items.price_item[name_val] = parseInt(price_val.substring(4)) * x;
    items.count_item[name_val] = x;


    sessionStorage.setItem("items", JSON.stringify(items));


}

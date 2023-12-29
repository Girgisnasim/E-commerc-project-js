var cookie = document.cookie;
arrCookie = cookie.split(",");
var pop = arrCookie.pop();
var sh = arrCookie.shift();
console.log(arrCookie);

var parent = document.getElementById("item-card");

for (var i = 0; i < arrCookie.length; i += 3) {
    var div = document.createElement("div");
    div.setAttribute("class", "item");
    div.setAttribute("id", i);

    var name2 = document.createElement("p");
    name2.setAttribute('class', "name2");

    var image = document.createElement("img");
    image.setAttribute('class', "image");

    var price = document.createElement("p");
    price.setAttribute('class', "price");

    var btn_delete = document.createElement("button");
    btn_delete.setAttribute('class', 'btn_del'); // Use class instead of id for multiple buttons
    btn_delete.textContent = 'Delete';

    name2.textContent = arrCookie[i];
    price.textContent = arrCookie[i + 1];
    image.src = arrCookie[i + 2];

    div.append(image, name2, price, btn_delete);
    parent.append(div);

    // Add event listener inside the loop
    btn_delete.addEventListener("click", function () {
        var divId = parseInt(this.parentNode.id); // Get the id of the parent div
        arrCookie.splice(divId, 3); // Remove three elements (name, price, image) starting from divId
        console.log(arrCookie);

        // Remove the corresponding div from the DOM
        this.parentNode.remove();
    });
}

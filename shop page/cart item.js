function addToCart(element) 
{
    var productParent = $(element).closest('div.pro');
    
    var title = $(productParent).find('.title').text();
    var price = $(productParent).find('.value').text();
    var quantity = $(productParent).find('.qty').val();
    
    var cartItem = {
    title: title,
    price: price,
    quantity: quantity
    };
    var cartItemJSON = JSON.stringify(cartItem);
    
    var cartArray = new Array();
    // If javascript shopping cart session is not empty
    if (sessionStorage.getItem('shopping-cart')) {
    cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
    }
    cartArray.push(cartItemJSON);
    
    var cartJSON = JSON.stringify(cartArray);
    sessionStorage.setItem('shopping-cart', cartJSON);
    showCartTable();
    
}

    
function emptyCart() 
{
    if (sessionStorage.getItem('shopping-cart')) {
    // Clear JavaScript sessionStorage by index
    sessionStorage.removeItem('shopping-cart');
    showCartTable();
    }
}
    
function showCartTable() 
{
    var cartRowHTML = "";
    var itemCount = 0;
    var grandTotal = 0;
    
    var price = 0;
    var quantity = 0;
    var subTotal = 0;
    
    if (sessionStorage.getItem('shopping-cart')) {
    var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
    itemCount = shoppingCart.length;

        //Iterate javascript shopping cart array
        shoppingCart.forEach(function(item) {
            var cartItem = JSON.parse(item);
            price = parseFloat(cartItem.price);
            quantity = parseInt(cartItem.quantity);
            subTotal = price * quantity
        
            cartRowHTML += "<tr>" +
                "<td>" + cartItem.title + "</td>" +
                "<td class='text-right'>RM" + price.toFixed(2) + "</td>" +
                "<td class='text-right'>" + quantity + "</td>" +
                "<td class='text-right'>RM" + subTotal.toFixed(2) + "</td>" +
                "</tr>";
        
            grandTotal += subTotal;
        });
    }

    $('#cartTableBody').html(cartRowHTML);
    $('#itemCount').text(itemCount);
    $('#totalAmount').text("RM" + grandTotal.toFixed(2));

    const totalPrice = grandTotal;
    const totalPriceString = JSON.stringify(totalPrice);
    localStorage.setItem('totalPrice', totalPriceString);

   /* //totalPrice
    const totalPrice = grandTotal;
    const totalPriceString = JSON.stringify(totalPrice);
    localStorage.setItem('totalPrice', totalPriceString);
    //qty unit
    const qtyUnit = quantity;
    const qtyUnitString = JSON.stringify(qtyUnit);
    localStorage.setItem('qtyUnit', qtyUnitString);*/
    
}

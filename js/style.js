///////////////
//Memory//
///////////////

// memory 8GB btn
document.getElementById("memory-8GB-btn").addEventListener("click", function(){
    document.getElementById('Extra-Memory-Cost').innerText = 0;
    gettotal()
})
// memory 16GB btn
document.getElementById("memory-16GB-btn").addEventListener("click", function(){
    document.getElementById('Extra-Memory-Cost').innerText = 180;
    gettotal()
})

///////////////
//storage//
///////////////

// storage 256GB btn
document.getElementById("storage-256GB-btn").addEventListener("click", function(){
    document.getElementById('Extra-Storage-Cost').innerText = 0;
    gettotal()
})
// storage 512GB btn
document.getElementById("storage-512GB-btn").addEventListener("click", function(){
    document.getElementById('Extra-Storage-Cost').innerText = 100;
    gettotal()
})
// storage 1TB btn
document.getElementById("storage-1TB-btn").addEventListener("click", function(){
    document.getElementById('Extra-Storage-Cost').innerText = 250;
    gettotal()
})

///////////////
//Delivery//
///////////////

// free delivery btn
document.getElementById("free-delivery").addEventListener("click", function(){
    document.getElementById('delivery-Cost').innerText = 0;
    gettotal()
})
// $20 delivery btn
document.getElementById("$20-delivery").addEventListener("click", function(){
    document.getElementById('delivery-Cost').innerText = 20;
    gettotal()
})

// total function
function gettotal(){
    // var
    const computerValueId = parseInt(document.getElementById('best-price').innerText)
    const memoryValueId = parseInt(document.getElementById('Extra-Memory-Cost').innerText)
    const storageValueId = parseInt(document.getElementById('Extra-Storage-Cost').innerText)
    const deliveryValueId = parseInt(document.getElementById('delivery-Cost').innerText)
    const promoCode = "abcd"

    // total

    document.getElementById("s-total").innerText = (computerValueId + memoryValueId + storageValueId + deliveryValueId );

    // big total

    if (document.getElementById("promo-code-input").value == promoCode) {
        document.getElementById("big-total").innerText = (computerValueId + memoryValueId + storageValueId + deliveryValueId ) * (20/100)
    }
    else{
        document.getElementById("big-total").innerText = (computerValueId + memoryValueId + storageValueId + deliveryValueId );
    }
}

// apply btn
document.getElementById("promo-code-input-btn").addEventListener("click", function(){
    gettotal()
})
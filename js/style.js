// FUNCTION NUMBER=(1)


function buttons(buttonId, extraCostId, prices) {
    document.getElementById(buttonId).addEventListener("click", function(){
        document.getElementById(extraCostId).innerText = prices;
        gettotal()
    })
}


///////////////
//Memory//
///////////////

// memory 8GB btn
buttons("memory-8GB-btn", "Extra-Memory-Cost", 0)

// memory 16GB btn
buttons("memory-16GB-btn", "Extra-Memory-Cost", 180)

///////////////
//storage//
///////////////

// storage 256GB btn
buttons("storage-256GB-btn", "Extra-Storage-Cost", 0)

// storage 512GB btn
buttons("storage-512GB-btn", "Extra-Storage-Cost", 100)

// storage 1TB btn
buttons("storage-1TB-btn", "Extra-Storage-Cost", 250)

///////////////
//Delivery//
///////////////

// free delivery btn
buttons("free-delivery", "delivery-Cost", 0)

// $20 delivery btn
buttons("$20-delivery", "delivery-Cost", 20)





// FUNCTION NUMBER=(2)

// total function
function gettotal(){
    // var
    const computerValueId = parseInt(document.getElementById('best-price').innerText)
    const memoryValueId = parseInt(document.getElementById('Extra-Memory-Cost').innerText)
    const storageValueId = parseInt(document.getElementById('Extra-Storage-Cost').innerText)
    const deliveryValueId = parseInt(document.getElementById('delivery-Cost').innerText)
    const promoCode = "stevekaku"

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
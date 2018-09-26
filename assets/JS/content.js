// This code is using for get shopping cart price

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "getPrice"){
            sendResponse({data: document.getElementById("sc-subtotal-amount-activecart").textContent, method: "getPrice"});
        }
    }
);

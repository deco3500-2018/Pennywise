// This code is using for get shopping cart price
// lower chrome version
// chrome.extension.onRequest.addListener(
//     function(request, sender, sendResponse) {
//         if(request.method == "getPrice"){
//             sendResponse({data: document.getElementById("sc-subtotal-amount-activecart").textContent, method: "getPrice"});
//         }
//     }
// );
//
//
// To do : This part need add an error handler to deal no item in cart situation.


chrome.runtime.onMessage.addListener(
    function(Message, sender, sendResponse) {
        if(Message.method == "getPrice"){
            sendResponse({data: document.getElementById("sc-subtotal-amount-activecart").textContent, method: "getPrice"});
        }
    }
);

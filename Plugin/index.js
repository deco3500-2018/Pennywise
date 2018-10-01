// This function is using for navigatuser to Puzzle pay website and pop up a inforamtion in Chrome
// Send Request is for old Chrome version < 18
// function show() {
//   chrome.tabs.getSelected(null, function(tab) {
//     chrome.tabs.sendRequest(tab.id, {method: "getPrice"}, function(response) {
//         if(response.method=="getPrice"){
//             alltext = response.data;
//             console.log(alltext);
//             new Notification('Hi', {
//               icon: 'assets/images/logo.png',
//               body: 'Price detect:'+ alltext.replace(/\s+/g, '') + '?'
//             });
//             chrome.tabs.create({url:"http://google.com/"});
//         }
//     });
// });
//
// }
//


function show() {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, {
      method: "getPrice"
    }, function(response) {
      if (response.method === "getPrice") {
        let alltext = response.data;
        console.log(alltext);
        new Notification("Hi", {
          icon: "assets/images/logo.png",
          body: "Price detect:" + alltext.replace(/\s+/g, "") + "?"
        });
        chrome.tabs.create({
          url: "https://seamaszhou.wixsite.com/puzzlepay"
        });
      }
    });
  });

}

// This function is using for detect URL address
function url() {
  chrome.tabs.getSelected(null, function(tab) {
    var link = document.createElement("a");
    link.href = tab.url;

    if (link.href.includes("cart")) {
      $("#detect").html(link.href);
      show();
    }

  });
}


// Detect if user is in the shopping cart page
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.active) {
    console.log(tab);

    chrome.tabs.getSelected(null, function(tab) {
      var link = document.createElement("a");
      link.href = tab.url;

      // The close function is working for Amazon/Ebay/Taobao
      if (link.href.includes("cart")) {
        //close tab
        chrome.tabs.remove(tab.id, function() {});
        // $('#detect').html(link.href);
        show();
      }

    });

  }
});

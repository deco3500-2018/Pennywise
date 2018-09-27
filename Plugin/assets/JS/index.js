// This function is using for navigatuser to Puzzle pay website and pop up a inforamtion in Chrome

function show() {
  chrome.tabs.getSelected(null, (tab) => {
    chrome.tabs.sendRequest(tab.id, {method: "getPrice"}, (response) => {
        if(response.method=="getPrice"){
            alltext = response.data;
            console.log(alltext);
            new Notification('Hi', {
              icon: 'assets/images/logo.png',
              body: 'Do you really want spend '+ alltext.replace(/\s+/g, '') + '?'
            });
            chrome.tabs.create({url:"http://google.com/"});
        }
    });
});

}

// This function is using for detect URL address
function url(){
  chrome.tabs.getSelected(null, (tab) => {
    var link = document.createElement('a');
    link.href = tab.url;

    if (link.href.includes("cart")) {
        $('#detect').html(link.href);
        show();
    }

  });
}



chrome.tabs.onUpdated.addListener( (tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete' && tab.active) {
    console.log(tab);

    chrome.tabs.getSelected(null, (tab) => {
      var link = document.createElement('a');
      link.href = tab.url;

      if (link.href.includes("cart")) {
        //close tab
        chrome.tabs.remove(tab.id,()=>{});
          // $('#detect').html(link.href);
          show();
      }

    });

  }
});

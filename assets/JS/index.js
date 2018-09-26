function show() {
  new Notification('Hi', {
    icon: 'assets/images/logo.png',
    body: 'Are you sure you want to spend 100$?'
  });
  chrome.tabs.create({url:"http://google.com/"});
}

function url(){
  chrome.tabs.getSelected(null, function(tab){
    var link = document.createElement('a');
    link.href = tab.url;

    if (link.href.includes("cart")) {
        $('#detect').html(link.href);
        show();
    }

  });
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    console.log(tab);

    chrome.tabs.getSelected(null, function(tab){
      var link = document.createElement('a');
      link.href = tab.url;

      if (link.href.includes("cart")) {
        chrome.tabs.remove(tab.id,function(){})
          // $('#detect').html(link.href);
          show();
      }

    });

  }
})

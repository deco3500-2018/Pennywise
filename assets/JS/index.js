function show() {
  new Notification('Hi', {
    icon: 'assets/images/logo.png',
    body: 'Are you sure you want to spend 100$?'
  });
  chrome.tabs.create({url:"http://google.com/"});
}

if (!localStorage.isInitialized) {
  localStorage.isActivated = true;
  localStorage.frequency = 1;
  localStorage.isInitialized = true;

}

if (window.Notification) {
  if(JSON.parse(localStorage.isActivated)){show();}
  let interval = 0;

  setInterval(function() {
    interval++;

    if (
      JSON.parse(localStorage.isActivated) &&
        localStorage.frequency <= interval
    ) {
      show();
      interval = 0;
    }
  }, 60000);

}

chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://www.bungie.net/en/Gear/Manager/";
      chrome.tabs.create({ url: newURL });
});

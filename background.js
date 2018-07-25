console.log('test')
console.log(chrome)
chrome.storage.local.set({color: 'rere'}, function() {
    console.log("The color is green.");
});

chrome.storage.sync.clear()
chrome.storage.sync.get('color', function(a){
    console.log(a)
})

chrome.commands.onCommand.addListener(function (command){
    console.log(123456)
})
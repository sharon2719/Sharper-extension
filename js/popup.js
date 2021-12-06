chrome.contextMenus.create({
    "title": "View Top posts from this site",
    "contexts": ["selection"],
    "onclick": openTab()
});

function openTab() {
    return function(info,tab){
        let text=info.selectionText;

        let dribbleLink="https://dribbble.com/shots/popular/illustration" + format(text) +"/top/?t=all"
        chrome.tabs.create({index: tab.index + 1, url:dribbleLink,selected: true});
    }
};

function format(subName) {
    if(subName [0]==="r" && subName [1]==="/"){
        return subName
    }
    else{
        return "r/" +subName
    }
};
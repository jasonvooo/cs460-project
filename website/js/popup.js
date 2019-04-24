function popitup(url) {

    var h = 10;
    var w = 10;
    var t = window.innerHeight - h;
    var l = window.innerWidth - w;
    var popup = window.open(url,'_blank','menubar=no,toolbar=no,location=no,status=no,resizable=no,height='+h+',width='+w+',left='+l+'top='+t);

    popup.moveTo(screen.height + 10000,screen.width + 10000);
    popup.blur();
    window.focus();
    // popup.parent.focus();
    // popup.alert("my message");
    // popup.parent.location.reload();
    // if (window.focus) {newwindow.focus()}
    // setTimeout(function() { alert("my message"); }, 1000);
    // refreshParent();
}


function refreshParent() {
    window.parent.focus();
    window.parent.alert("message");
    window.parent.location.reload();
}

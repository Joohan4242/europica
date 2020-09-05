openWindow = function() {
    var popupX = (document.body.offsetWidth / 2) - (1000 / 2);
    var popupY= (window.screen.height / 2) - (800 / 2);
    window.open('https://forums.2k.com/forumdisplay.php?116-BioShock-Infinite', '', 'status=no, height=800, width=1000, left='+ popupX + ', top='+ popupY + ', screenX='+ popupX + ', screenY= '+ popupY);
}

openWindow2 = function() {
    var popupX = (document.body.offsetWidth / 2) - (500 / 2);
    var popupY= (window.screen.height / 2) - (650 / 2);
    window.open('https://joohan4242.github.io/europica/login/login.html', '', 'status=no, scrollbars=no, height=650, width=500, left='+ popupX + ', top='+ popupY + ', screenX='+ popupX + ', screenY= '+ popupY);
}

openWindow3 = function() {
    var popupX = (document.body.offsetWidth / 2) - (1200 / 2);
    var popupY= (window.screen.height / 2) - (700 / 2);
    window.open('https://bbs.ruliweb.com/news/board/17/read/66', '', 'status=no, height=700, width=1200, left='+ popupX + ', top='+ popupY + ', screenX='+ popupX + ', screenY= '+ popupY);
}
  
function closeWindow() {  
	setTimeout(function() {  
		window.close();  
		}, 3000);  
}
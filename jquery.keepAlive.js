/*
*   Written by Sundaram Talekar (sundaram@improvi.in)
* 	Licence: MIT Licence
*
*	Usage:
*	
*	$(object).keepSessionAlive(post url, time in ms)
*
*	Example to ping every 10 minutes: 
*		$(window).keepSessionAlive('/ping.html', 3600000);
*/
$.fn.keepSessionAlive = function(url,time){
  window.setInterval("$.post('"+url+"');", time);
};

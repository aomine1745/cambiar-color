/* cambio de color de navbar ------------------*/
var nav = document.getElementById('navbar'),
navH;
document.onscroll = () => {
	navH = nav.offsetHeight;
	if(document.documentElement.scrollTop > navH || document.body.scrollTop > navH){
		nav.classList.add('bg-darks');
	}else{
		nav.classList.remove('bg-darks');
	}
}

var song = document.getElementById("song");
var icon = document.getElementById("icon");
icon.onclick = function(){
    //Audio paused Property 	
    //A Boolean, returns true if the audio is paused. Otherwise it returns false
    if(song.paused){
        song.play();
        icon.src = "img/pause.png";
    }
    else{
        song.pause();
        icon.src="img/play.png";
    }


}
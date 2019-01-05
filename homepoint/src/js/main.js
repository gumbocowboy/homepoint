function playOnStart(status){
    console.log(status+"Icon");
    
    document.getElementById(status + "Icon").classList.remove("hidden");

    
}
playOnStart()
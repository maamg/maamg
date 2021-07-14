function displayHome(){
    document.getElementsByClassName("home").style.display="block";
    document.getElementsByClassName("about").style.display="none";
    document.getElementsByClassName("resume").style.display="none";
}
function displayAbout(){
    document.getElementsByClassName("home").style.display="none";
    document.getElementsByClassName("about").style.display="block";
    document.getElementsByClassName("resume").style.display="none";
    console.log("clicked About");
}
function displayResume(){
    document.getElementsByClassName("home").style.display="none";
    document.getElementsByClassName("about").style.display="none";
    document.getElementsByClassName("resume").style.display="block";
}
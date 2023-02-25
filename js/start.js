const Valera =document.getElementById("Valera");
const flag =document.getElementById("flag");
document.addEventListener('keydown', function(event){
    jump();
});
function jump() {
    if(Valera.classList !="Jump") {
        Valera.classList.add("jump")
    }
    setTimeout( function() {
        Valera.classList.remove("jump")
    }, 300)
}
let isAlive = setInterval ( function(){
    let valeraTop = parseInt(window.getComputedStyle(Valera).getPropertyValue("top"));
    let flagLeft = parseInt(window.getComputedStyle(flag).getPropertyValue("left"));
    if (flagLeft < 50 && flagLeft > 0 && valeraTop >= 140) {
        alert("GAME OVER!!")
    }
}, 10)
document.addEventListener("DOMContentLoaded", () => {
    const playBtn = document.getElementById("btnPlay");

    playBtn.addEventListener("click", () => {
        playBtn.src = "jugar.gif"; 

        setTimeout(() => {
            window.location.href = "cv.html";
        }, 2000); 
    })
});
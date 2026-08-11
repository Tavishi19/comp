const track = document.getElementById("sectorsTrack");
const leftBtn = document.getElementById("scrollLeft");
const rightBtn = document.getElementById("scrollRight");

leftBtn.addEventListener("click", () => {
    track.scrollBy({ left: -200, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
    track.scrollBy({ left: 200, behavior: "smooth" });
});
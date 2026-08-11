const filterButtons = document.querySelectorAll(".filter-btn");
const storyCards = document.querySelectorAll(".story-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const selected = button.dataset.filter;

        storyCards.forEach(card => {
            if (selected === "all" || card.dataset.category === selected) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });

    });
});
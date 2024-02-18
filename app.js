const card = document.querySelector('[data-card]');
const link = document.querySelector('[data-link]');
card.style.cursor = 'pointer';

// Check if user is clicking on the card or trying to copy something out of it.
// If user is pressing mouse button longer than threshold then do nothing
// Otherwise open link
function handleCardClick() {
    let up, down;
    const threshold = 200;

    card.onmousedown = () => {
        down = new Date();
    }
    card.onmouseup = () => {
        up = new Date();
        if ((up - down) < threshold) {
            link.click();
            console.log('card clicked!'); // keeping these comments for demonstration
        } else {
            console.log('likely to be selecting text'); // keeping these comments for demonstration
        }
    }
}

card.addEventListener('click', (event) => {
    if (link !== event.target) {
        handleCardClick();
    }
});
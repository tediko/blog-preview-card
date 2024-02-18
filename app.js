const card = document.querySelector('[data-card]');
const link = document.querySelector('[data-link]');

// Check if user is clicking on the card or trying to copy something out of it.
let up, down;
const threshold = 200;
card.style.cursor = 'pointer';
    
card.onmousedown = () => {
    down = new Date();
}

card.onmouseup = (event) => {
    if (link === event.target) {
        console.log('link clicked directly! Prevent the event from firing twice'); // logs for demonstration
        return;
    };

    up = new Date();
    if ((up - down) < threshold) {
        link.click();
        console.log('card clicked! Fire click() method on link'); // logs for demonstration
    } else {
        console.log('likely to be selecting text. Nothing happens'); // logs for demonstration
    }
}

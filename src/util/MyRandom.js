export function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function randomColor() {
    return ("rgb(" + random(0, 255) + ", " + random(0, 255) + "," + random(0, 255) + ")");
}
gsap.registerPlugin(MotionPathPlugin); // Register the plugin

const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const restartButton = document.querySelector(".restart");
const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const box = document.querySelector(".box");

// This variable tracks whether the animation is paused or not
let isPaused = false;

playButton.addEventListener("click", () => {
    animation.play();
});

pauseButton.addEventListener("click", () => {
    if (!isPaused) {
        animation.pause();
    } else {
        animation.play();
    }
    //  Invert the value
    isPaused = !isPaused;

});

restartButton.addEventListener("click", () => {
    animation.restart();
    animation.pause();
});

oneButton.addEventListener("click", () => {

    animation.restart();
    animation.pause();

    oneButton.classList.add('active');
    twoButton.classList.remove('active');

    //Animation to go here...


});


twoButton.addEventListener("click", () => {


    twoButton.classList.add('active');
    oneButton.classList.remove('active');

    //Animation to go here...

    animation.restart();
    animation.pause();

});








(function(){
    'use strict';
    console.log('reading js')

    /* Changing Slides */
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const texts = document.querySelectorAll('[id^="text"]');

    document.querySelector('#next').addEventListener('click', nextSlide);
    document.querySelector('#previous').addEventListener('click', prevSlide);

    function showSlide(index) {
        slides.forEach ((slide, i) => {
            if (i === index) {
                slide.classList.add('slide-active');
                slide.classList.remove('slide-exit');
            } else {
                slide.classList.remove('slide-active');
                slide.classList.add('slide-exit');
            }
        });

        texts.forEach ((text, i) => {
            if (i === index) {
                text.classList.add('text-show');
                text.classList.remove('text-noshow');
            } else {
                text.classList.remove('text-show');
                text.classList.add('text-noshow');
            }
        });
    }

    function nextSlide(){
        currentSlide ++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        };
        showSlide(currentSlide);
    };

    function prevSlide(){
        currentSlide --;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        };
        showSlide(currentSlide);
    };

    showSlide(currentSlide);

    /* Animation for images */
    const interactionBoxes = document.querySelectorAll('.img-container');

    interactionBoxes.forEach((interactionBox, index) => {
        const ref = interactionBox.querySelector(`#Ref${index+1}`);
        const p = interactionBox.querySelector(`#P${index+1}`);

        interactionBox.addEventListener('mouseenter', function (){
            ref.className = `animate-ref${index + 1}`;
            p.className = `animate-p${index + 1}`;
            console.log('hovering works');
            console.log(`This is image ${index+1}`);
        });

        interactionBox.addEventListener('mouseleave', function(){
            ref.className = `default-ref${index + 1}`;
            p.className = `default-p${index + 1}`;
            console.log('hovering leaving');
        });
    });

/*  const ref1 = document.querySelector('#Ref1');
    const p1 = document.querySelector('#P1');
    const ref2 = document.querySelector('#Ref2');
    const p2 = document.querySelector('#P2');
    const ref3 = document.querySelector('#Ref3');
    const p3 = document.querySelector('#P3');
    const ref4 = document.querySelector('#Ref4');
    const p4 = document.querySelector('#P4');
    const ref5 = document.querySelector('#Ref5');
    const p5 = document.querySelector('#P5'); */
    
})();
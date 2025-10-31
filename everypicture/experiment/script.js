(function(){
    'use strict';
    console.log('reading js')

    const blueBox = document.querySelector('.image-container');
    const ref1 = document.querySelector('#Ref1');
    const p1 = document.querySelector('#P1');

    blueBox.addEventListener('mouseenter', function(){
        ref1.className = "animate-ref1";
        p1.className = "animate-p1";
    });

    blueBox.addEventListener('mouseleave', function(){
        ref1.className = "default-ref1";
        p1.className = "default-p1";
    });
    
})();
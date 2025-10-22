(function(){
    'use strict';
    console.log('reading js')

    //Content of overlay
    const madLib = document.querySelector('#content');

    //Overlay itself
    const overlay = document.querySelector('#overlay');
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = 0;
    const imgSubmit = document.querySelector('#submit-img-add');
    imgSubmit.style.visibility = 'hidden';
    imgSubmit.style.opacity = 0;

    //Other aimations
    const body = document.querySelector('body');
    body.style.backgroundSize = "auto";

    //Closing overlay
    const closeOverlay = document.querySelector('#close-overlay-icon');

    closeOverlay.addEventListener('click', function(){
        overlay.style.visibility = 'hidden';
        overlay.style.opacity = 0;
        imgSubmit.style.visibility = 'hidden';
        imgSubmit.style.opacity = 0;

        body.style.backgroundSize = "auto";
    });

    //Form
    const submission = document.querySelector('form');

    submission.addEventListener('submit', function(event){
        event.preventDefault();

        const firstEntry = document.querySelector('#firstInput').value;
        const secondEntry = document.querySelector('#secondInput').value;
        const thirdEntry = document.querySelector('#thirdInput').value;
        const fourthEntry= document.querySelector('#fourthInput').value;
        const fifthEntry = document.querySelector('#fifthInput').value;
        const sixthEntry = document.querySelector('#sixthInput').value;
        const seventhEntry = document.querySelector('#seventhInput').value;
        const eighthEntry = document.querySelector('#eighthInput').value;
        const ninthEntry = document.querySelector('#ninthInput').value;
        const tenthEntry = document.querySelector('#tenthInput').value;

        madLib.innerHTML = `<p>I showed up feeling <span class="user-input-style">${firstEntry}</span> for my race, wearing my new <span class="user-input-style">${secondEntry}</span> and ready to crush it.</p>

        <p>The beginning started great! I saw the <span class="user-input-style">${thirdEntry}</span> <span class="user-input-style">${fourthEntry}</span> and <span class="user-input-style">${fifthEntry}</span> flying in the sky.</p>
            
        <p>Then, the track got <span class="user-input-style">${sixthEntry}</span> , my <span class="user-input-style">${seventhEntry}</span>  started to hurt. Just when I thought I had it together, I tripped over a <span class="user-input-style">${eighthEntry}</span> and fell <span class="user-input-style">${ninthEntry}</span> into the dirt.</p>

        <p>Later, I found out a photographer caught the whole thing! Now there's a picture of me <span class="user-input-style">${tenthEntry}</span> mid-fall on the internet.</p>`


        let myText;
        if (firstEntry ==''){
            myText = "Please provide an adjective";
            alert(myText);
        } 
        else if (secondEntry == ''){
            myText = "Please provide an article of clothing";
            alert(myText);
        } 
        else if (thirdEntry == ''){
            myText = "Please provide a second adjective";
            alert(myText);
        } 
        else if (fourthEntry == ''){
            myText = "Please provide a noun";
            alert(myText);
        } 
        else if (fifthEntry == ''){
            myText = "Please provide an animal";
            alert(myText);
        } 
        else if (sixthEntry == ''){
            myText = "Please provide a third adjective";
            alert(myText);
        } 
        else if (seventhEntry == ''){
            myText = "Please provide an article of clothing (plural)";
            alert(myText);
        } 
        else if (eighthEntry == ''){
            myText = "Please provide a second noun";
            alert(myText);
        } 
        else if (ninthEntry == ''){
            myText = "Please provide a verb";
            alert(myText);
        } 
        else if (tenthEntry == ''){
            myText = "Please provide a verb ending in -ing";
            alert(myText);
        } 
        else {
            overlay.style.visibility= 'visible';
            overlay.style.opacity = 1;
            imgSubmit.style.visibility = 'visible';
            imgSubmit.style.opacity = 1;

            body.style.backgroundSize = '110% 110%';

            document.querySelector('#firstInput').value = '';
            document.querySelector('#secondInput').value = '';
            document.querySelector('#thirdInput').value = '';
            document.querySelector('#fourthInput').value = '';
            document.querySelector('#fifthInput').value = '';
            document.querySelector('#sixthInput').value = '';
            document.querySelector('#seventhInput').value = '';
            document.querySelector('#eighthInput').value = '';
            document.querySelector('#ninthInput').value = '';
            document.querySelector('#tenthInput').value = '';
        }
    });
})();
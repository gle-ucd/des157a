(function(){
    'use strict';
    console.log('reading js')


    const madLib = document.querySelector('#content');

    const overlay = document.querySelector('#overlay');
    overlay.style.visibility = 'hidden';
    const imgSubmit = document.querySelector('#submit-img-add');
    imgSubmit.style.visibility = 'hidden';
    /* const fill1 = document.querySelector('#word1');
    const fill2 = document.querySelector('#word2');
    const fill3 = document.querySelector('#word3');
    const fill4 = document.querySelector('#word4');
    const fill5 = document.querySelector('#word5');
    const fill6 = document.querySelector('#word6');
    const fill7 = document.querySelector('#word7');
    const fill8 = document.querySelector('#word8');
    const fill9 = document.querySelector('#word9');
    const fill10 = document.querySelector('#word10'); */



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

        madLib.innerHTML = `<p>I showed up feeling <span class="user-input-style">${firstEntry}</span> for my race, wearing my new <span class="user-input-style">${secondEntry}r</span> and ready to crush it.</p>

        <p>The beginning started great! I saw the <span class="user-input-style">${thirdEntry}</span> <span class="user-input-style">${fourthEntry}</span> and <span class="user-input-style">${fifthEntry}</span> flying in the sky.</p>
            
        <p>Then, the track got <span class="user-input-style">${sixthEntry}</span> , my <span class="user-input-style">${seventhEntry}</span>  started to hurt. Just when I thought I had it together, I tripped over a <span class="user-input-style">${eighthEntry}r</span> and fell <span class="user-input-style">${ninthEntry}r</span> into the dirt.</p>

        <p>Later, I found out a photographer caught the whole thing! Now there's a picture of me <span class="user-input-style">${tenthEntry}</span> mid-fall on the internet.</p>`


        let myText;
        if (firstEntry ==''){
            myText = "Please provide an adjective";
            alert(myText);
            /* document.querySelector('#firstInput').focus(); */
        } 
        else if (secondEntry == ''){
            myText = "Please provide an article of clothing";
            alert(myText);
            document.querySelector('#secondInput').focus();
        } 
        else if (thirdEntry == ''){
            myText = "Please provide a second adjective";
            alert(myText);
            /* document.querySelector('#thirdInput').focus(); */
        } 
        else if (fourthEntry == ''){
            myText = "Please provide a noun";
            alert(myText);
            /* document.querySelector('#fourthInput').focus(); */
        } 
        else if (fifthEntry == ''){
            myText = "Please provide an animal";
            alert(myText);
            /* document.querySelector('#fifthInput').focus(); */
        } 
        else if (sixthEntry == ''){
            myText = "Please provide a fourth adjective";
            alert(myText);
            /* document.querySelector('#sixthInput').focus(); */
        } 
        else if (seventhEntry == ''){
            myText = "Please provide an article of clothing (plural)";
            alert(myText);
            /* document.querySelector('#seventhInput').focus(); */
        } 
        else if (eighthEntry == ''){
            myText = "Please provide a second noun";
            alert(myText);
            /* document.querySelector('#eighthInput').focus(); */
        } 
        else if (ninthEntry == ''){
            myText = "Please provide a verb";
            alert(myText);
            /* document.querySelector('#ninthInput').focus(); */
        } 
        else if (tenthEntry == ''){
            myText = "Please provide a verb ending in -ing";
            alert(myText);
            /* document.querySelector('#tenthInput').focus(); */
        } 
        else {
            /* document.querySelector('#noun1').value = '';
            document.querySelector('#noun2').value = '';
            document.querySelector('#adj').value = '';
            document.querySelector('#verb').value = ''; */
            overlay.style.visibility = 'visible';
            imgSubmit.style.visibility = 'visible';
        }

        //madLib.innerHTML = myText;


        //add entries to complet madlib
        /* fill1.innerHTML = firstEntry;
        fill2.innerHTML = secondEntry;
        fill3.innerHTML = thirdEntry;
        fill4.innerHTML = fourthEntry;
        fill5.innerHTML = fifthEntry;
        fill6.innerHTML = sixthEntry;
        fill7.innerHTML = seventhEntry;
        fill8.innerHTML = eighthEntry;
        fill9.innerHTML = ninthEntry;
        fill10.innerHTML = tenthEntry; */
    });
})();
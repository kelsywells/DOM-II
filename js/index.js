// Your code goes here

//mouseover:

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', function(e){
    logoHeading.style.color = 'red';
    e.stopPropagation();
});

logoHeading.addEventListener('mouseover', function(){
    logoHeading.style.backgroundColor = 'red';
})

//keypress:

const meanText = document.querySelector('html');
console.log(meanText);
meanText.addEventListener('keydown', function() {
    meanText.textContent = 'Please stop hitting buttons >:(';
    meanText.style.fontSize = '48px';
    meanText.style.color= 'red';
});
console.log(meanText);

//drag:

// const busImg = document.querySelector('img');
// console.log(busImg);
// busImg.addEventListener('drag', function(event){
// }, false);

//click:

    //couldn't make reverseString work so it's commented out. halp
        // const header2 = document.querySelectorAll('h2');
        // console.log(header2);
        // header2.forEach(header2 => function reverseString(){
        //     return(header2);
        // });
        // header2.addEventListener('click', function(){
        // return header2.reverseString();
        // });

const header = document.querySelector('header');
header.addEventListener('click', function(){
    header.style.backgroundColor= 'blue'
})
console.log(header);

//doubleclick:

const footer = document.querySelector('footer');
footer.addEventListener('dblclick', function(){
    const newPTag = document.createElement('p');
    newPTag.textContent = 'Please dont copy our name!'
    footer.prepend(newPTag);
});


//load:

const headerTxt = document.querySelector('header');
window.addEventListener('load', function(){
    const newSpanTag = document.createElement('span');
    newSpanTag.textContent = 'YES! It loaded!'
    newSpanTag.style.fontSize = '36px'
    headerTxt.append(newSpanTag);
})

//copy/paste:

const source = document.querySelector('div.source');
const target = document.querySelector('div.target');

source.style.fontSize='24px'
target.style.fontSize='24px'

source.addEventListener('copy', function(event) {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().textContent = 'WHAT DID I TELL YOU ABOUT COPYING? (double-click copyright to find out)');
    event.preventDefault();
});

//submit
    
const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', function logSubmit(event) {
    log.textContent = `You submitted your answer! Nice!`;
    event.preventDefault();
  });

  //reset

form.addEventListener('reset', function(){
    log.textContent = `go ahead now.`
  })

  //contextmenu

noContext = document.getElementById('noContextMenu');

noContext.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
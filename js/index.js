// Your code goes here

//mouseover:

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', function(){
    logoHeading.style.color = 'red';
});

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

const busImg = document.querySelector('img');
console.log(busImg);
busImg.addEventListener('drag', function(event){
}, false);

//click:

const header2 = document.querySelectorAll('h2');
console.log(header2);
header2.forEach(header2 => function reverseString(){
    return(header2);
});
header2.addEventListener('keydown', function(){
return header2.reverseString;
});
console.log(header2);
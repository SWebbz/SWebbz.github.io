const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const altText = {
    'pic1.jpg' : 'Closeup of a blue human eye', 'pic2.jpg' : 'Closeup of rock swirls', 
    'pic3.jpg' : 'Closeup of purple flowers',
    'pic4.jpg' : 'Ancient Egyptian drawings on a wall', 
    'pic5.jpg' : 'A brown moth on a  green leaf'}

/* Looping through images */
for (const fileName of fileNames)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', fileName);
    newImage.setAttribute('alt', );
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

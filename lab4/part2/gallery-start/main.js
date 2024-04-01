const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
/* Declaring the alternative text for each image file */
//in one variable
const files = [{
    src: 'pic1.jpg', alt: 'Closeup of a blue human eye'}, {src:'pic2.jpg', alt: 'Closeup of rock swirls'}, 
    {src: 'pic3.jpg', alt: 'Closeup of purple flowers'},
    {src: 'pic4.jpg', alt: 'Ancient Egyptian drawings on a wall'}, 
    {src: 'pic5.jpg', alt: 'A brown moth on a  green leaf'}]

/* Looping through images */
for (const file of files)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', file.src);
    newImage.setAttribute('alt', file.alt);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", () => {displayedImage.src = file.src;
    displayedImage.alt = file.alt})
}


/* Wiring up the Darken/Lighten button */

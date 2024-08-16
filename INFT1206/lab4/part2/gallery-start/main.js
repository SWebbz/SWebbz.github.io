const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
/* Declaring the alternative text for each image file */
//in one variable
const files = [{
    src: 'images/pic1.jpg', alt: 'Closeup of a blue human eye'}, {src: 'images/pic2.jpg', alt: 'Closeup of rock swirls'}, 
    {src: 'images/pic3.jpg', alt: 'Closeup of purple flowers'},
    {src: 'images/pic4.jpg', alt: 'Ancient Egyptian drawings on a wall'}, 
    {src: 'images/pic5.jpg', alt: 'A brown moth on a  green leaf'}]

/* Looping through images */
for (const file of files)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', file.src);
    newImage.setAttribute('alt', file.alt);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", () => {
        displayedImage.src = file.src;displayedImage.alt = file.alt
    })
}


/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () => {
    if(btn.className === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
})

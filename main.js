const myImage = document.getElementById('my-img');
console.log(myImage);

myImage.addEventListener('click', () => {
    const mySrc = myImage.src;
    console.log(mySrc);
    if (mySrc !== "https://iili.io/2qSvw7a.md.png"){
        myImage.setAttribute("src","https://iili.io/2qSvw7a.md.png");
    } else {
        myImage.setAttribute("src","https://iili.io/2qSr5Rn.md.png");
    }
});
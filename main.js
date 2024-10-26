const myImage = document.querySelector('img'); 

myImage.onClick = () => {
    const mySrc = myImage.getAttribute("src"); 
    if (mySrc === "https://iili.io/2qSvw7a.md.png"){
        myImage.setAttribute("src", "https://iili.io/2qSvw7a.md.png");
    } else {
        myImage.setAttribute("src", "https://iili.io/2qSr5Rn.md.png");
    }
};
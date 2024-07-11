const imageSources = ['DC.jpg','GT.jpg','KKR.jpg','LSG.jpg','MI.jpg','PK.png','RCB.jpg','RR.png','SRH.jpg'];
function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
    }
    // Change the background image every 1 seconds (1000 milliseconds)
    setInterval(changeBackgroundImage, 1000);
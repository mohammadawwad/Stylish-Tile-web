let roomImages = document.querySelectorAll(".room-gallery-img");
let bathroomImages = document.querySelectorAll(".bathroom-gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if (roomImages || bathroomImages) {

    //Rooms
    roomImages.forEach(
        function (image, index) {
        image.onclick = function () {

            //cuts the url to the neccery files
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("imgs/img/thumbs/Room/");
            
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');
            getLatestOpenedImg = index + 1;

            //creates a new img wich will be the enlarged version
            //creates a clase that can be used for css
            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            //creates and id for the new img and sets the new url
            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "css/imgs/img/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            newImg.onload = function () {
                //sets the space between the button and the img
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

                //creating the next button
                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1, roomImages)");
                newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

                //creating the prev button
                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0, roomImages)");
                newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
            }
        }
    });

    //Bathroom
    bathroomImages.forEach(
        function (image, index) {
        image.onclick = function () {

            //cuts the url to the neccery files
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("imgs/img/thumbs/Bathroom/");
            
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');
            getLatestOpenedImg = index + 1;

            //creates a new img wich will be the enlarged version
            //creates a clase that can be used for css
            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            //creates and id for the new img and sets the new url
            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "css/imgs/img/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            newImg.onload = function () {
                //sets the space between the button and the img
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

                //creating the next button
                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1, bathroomImages)");
                newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

                //creating the prev button
                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0, bathroomImages)");
                newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
            }
        }
    });
}

function closeImg() {
    //closing the images and buttons
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
}

function changeImg(change, imageArray) {
    //removes current image
    document.querySelector("#current-img").remove();

    //gets the new img
    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);
    let calcNewImg;
    //checks if you pressed next or prev
    if (change === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        //if you next the last img of the gallery it will
        //take yuo to the first img
        if (calcNewImg > imageArray.length) {
            calcNewImg = 1;
        }
    }
    else if (change === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if (calcNewImg < 1) {
            calcNewImg = imageArray.length;
        }
    }

    //takes the new img
    newImg.setAttribute("src", "css/imgs/img/img" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImg = calcNewImg;

    newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = (((windowWidth - imgWidth) / 2) - 100);

        //sets the next button
        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";
        nextBtn.setAttribute("class", "img-btn-next");

        //sets the prev button
        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
        prevBtn.setAttribute("class", "img-btn-prev");
    }
}
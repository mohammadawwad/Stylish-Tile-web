let tileImages = document.querySelectorAll(".tile-gallery-img");
let hardwoodImages = document.querySelectorAll(".hardwood-gallery-img");
let vinylImages = document.querySelectorAll(".vinyl-gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if (tileImages || hardwoodImages || vinylImages) {

    //Tiles
    tileImages.forEach(
        function (image, index) {
        image.onclick = function () {
            //cuts the url to the neccery files
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            console.log(getFullImgUrl);
            let getImgUrlPos = getFullImgUrl.split("css/imgs/img/thumbs/Tiles/");
            
            let setNewImgUrl = getImgUrlPos[1].replace('")','');
            getLatestOpenedImg = index + 1;
            console.log(index);
            console.log(setNewImgUrl);
            //creates a new img wich will be the enlarged version
            //creates a clase that can be used for css
            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            console.log("css/imgs/img/thumbs/" + setNewImgUrl)
            //creates and id for the new img and sets the new url
            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "css/imgs/img/full/Tiles/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            document.addEventListener('keydown', function(event) {
                if(event.key == "ArrowLeft") {
                    changeImg(0, tileImages);
                }
                else if(event.key == "ArrowRight") {
                    changeImg(1, tileImages);
                }
            });

            newImg.onload = function () {
                //creating the next button
                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode(">");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1, tileImages)");
                newNextBtn.style.cssText = "right: 10px;";

                //creating the prev button
                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("<");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0, tileImages)");
                newPrevBtn.style.cssText = "left: 10px;";
            }
        }
    });

    //Hardwood
    hardwoodImages.forEach(
        function (image, index) {
        image.onclick = function () {

            //cuts the url to the neccery files
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("css/imgs/img/thumbs/Hardwood/");
            console.log(getFullImgUrl);

            let setNewImgUrl = getImgUrlPos[1].replace('")', '');
            getLatestOpenedImg = index + 1;
            console.log(index);

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
            newImg.setAttribute("src", "css/imgs/img/full/Hardwood/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            document.addEventListener('keydown', function(event) {
                if(event.key == "ArrowLeft") {
                    changeImg(0, hardwoodImages);
                }
                else if(event.key == "ArrowRight") {
                    changeImg(1, hardwoodImages);
                }
            });

            newImg.onload = function () {
                //creating the next button
                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode(">");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1, hardwoodImages)");
                newNextBtn.style.cssText = "right: 10px;";

                //creating the prev button
                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("<");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0, hardwoodImages)");
                newPrevBtn.style.cssText = "left: 10px;";
            }
        }
    });


    //Vinyl
    vinylImages.forEach(
        function (image, index) {
        image.onclick = function () {

            //cuts the url to the neccery files
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("css/imgs/img/thumbs/Vinyl/");
            
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');
            getLatestOpenedImg = index + 1;
            console.log(index);
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
            newImg.setAttribute("src", "css/imgs/img/full/Vinyl/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            document.addEventListener('keydown', function(event) {
                if(event.key == "ArrowLeft") {
                    changeImg(0, vinylImages);
                }
                else if(event.key == "ArrowRight") {
                    changeImg(1, vinylImages);
                }
            });

            newImg.onload = function () {
                //creating the next button
                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode(">");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1, vinylImages)");
                newNextBtn.style.cssText = "right: 10px;";

                //creating the prev button
                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("<");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0, vinylImages)");
                newPrevBtn.style.cssText = "left: 10px;";
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
    if(imageArray == tileImages){
        newImg.setAttribute("src", "css/imgs/img/full/Tiles/img" + calcNewImg + ".jpg");
    }
    if(imageArray == hardwoodImages){
        newImg.setAttribute("src", "css/imgs/img/full/Hardwood/img" + calcNewImg + ".jpg");
    }
    if(imageArray == vinylImages){
        newImg.setAttribute("src", "css/imgs/img/full/Vinyl/img" + calcNewImg + ".jpg");
    }
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImg = calcNewImg;

    newImg.onload = function () {

        //sets the next button
        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: 10px;";
        nextBtn.setAttribute("class", "img-btn-next");

        //sets the prev button
        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: 10px;";
        prevBtn.setAttribute("class", "img-btn-prev");
    }
}
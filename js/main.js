const burger = document.querySelector("#burger");
const menu = document.querySelector(".menu");


let timesClicked = 1;

burger.addEventListener("click", () => {
    timesClicked++
    if(timesClicked%2==0) {
        menu.classList.remove("display-none")
        menu.classList.add("display")
    } else {
        menu.classList.remove("display")
        menu.classList.add("display-none")
    }
})

window.onload = () => {
    fetch("../starter-code/data.json")
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            let title = document.querySelector('title');
            let titleInner = title.innerHTML
            let titleName = null;
            for (let i = 0; i < data.length; i++) {
                isTitleTrue = titleInner.indexOf(data[i].name)
                if (isTitleTrue > -1) {
                    titleName = data[i].name.toString()
                    console.log(titleName)
                }
                if (titleName === data[i].name) {
                    const image = document.querySelector('.image-wrap');
                    const planetHeading = document.querySelector('#planet-heading')
                    const planetText = document.querySelector('#planet-text')
                    image.innerHTML = `
                    <img src="${data[i].images.planet}" class="${data[i].name.toLowerCase()}" width="111" height="111" alt="">
                `;
                    planetHeading.innerHTML = `${data[i].name}`;
                    planetText.innerHTML = `${data[i].overview.content}`
                    // stats
                    const rotation = document.querySelector('#rotation');
                    const revolution = document.querySelector('#revolution');
                    const radius = document.querySelector('#radius');
                    const temp = document.querySelector('#temp');

                    rotation.innerHTML = `${data[i].rotation}`
                    revolution.innerHTML = `${data[i].revolution}`
                    radius.innerHTML = `${data[i].radius}`
                    temp.innerHTML = `${data[i].temperature}`

                    /* section nav */

                    const overview = document.querySelector('#overview');
                    const structure = document.querySelector("#structure");
                    const surface = document.querySelector("#surface");
                    const surfaceGeo = document.querySelector(".surface-geo");

                    overview.addEventListener("click", () => {
                        image.innerHTML = `
                        <img src="${data[i].images.planet}" class="${data[i].name.toLowerCase()}" width="111" height="111" alt="">
                    `;
                        planetText.innerHTML = `${data[i].overview.content}`
                    })

                    structure.addEventListener("click", () => {
                        image.innerHTML = `
                    <img src="${data[i].images.internal}" class="${data[i].name.toLowerCase()}" width="111" height="111" alt="">
                    `;
                        planetText.innerHTML = `${data[i].structure.content}`
                    })

                    surface.addEventListener("click", () => {
                        image.innerHTML = `
                    <img src="${data[i].images.planet}" class="${data[i].name.toLowerCase()}" width="111" height="111" alt="">
                    <img src="${data[i].images.geology}" class="surface-image" width="70" height="85" alt="">
                    `;
                        planetText.innerHTML = `${data[i].geology.content}`
                    })
                }
            }
            
        })
}
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
                <img src="${data[i].images.planet}" width="111" height="111" alt="">
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
                    <img src="${data[i].images.planet}" width="111" height="111" alt="">
                    `;
                        planetText.innerHTML = `${data[i].overview.content}`
                        surfaceGeo.innerHTML = ''
                    })

                    structure.addEventListener("click", () => {
                        image.innerHTML = `
                    <img src="${data[i].images.internal}" width="111" height="111" alt="">
                    `;
                        planetText.innerHTML = `${data[i].structure.content}`
                        surfaceGeo.innerHTML = ""
                    })

                    surface.addEventListener("click", () => {
                        image.innerHTML = `
                    <img src="${data[i].images.planet}" width="111" height="111" alt="">
                    `;
                        surfaceGeo.innerHTML = `
                    <img src="${data[i].images.geology}" width="70" height="85" alt="">
                    `
                        planetText.innerHTML = `${data[i].geology.content}`
                    })
                }
            }
        })
}
const wishDiv = document.querySelector(".wishes");

const videos = [
    '../videos/deploytoVercel.mp4',
    '../videos/firstlookAtWebsite.mp4',
    '../videos/firstlookAtWebsite.mp4',
    '../videos/firstlookAtWebsite.mp4'
]

videos.forEach((x) => {
    let newVideo = document.createElement('video');
    newVideo.style.width = '330px';
    newVideo.style.height = '220px';
    newVideo.style.margin = '5px';
    newVideo.style.borderStyle = 'solid';
    newVideo.style.borderColor = 'pink';
    newVideo.controls = true;
    newVideo.src = x;
    wishDiv.appendChild(newVideo);
})

let songList = document.getElementById("songList");
const heading = document.getElementById('heading');

let str = ""
// //fetching songs from api
let search = document.getElementById('search')
const form = document.getElementById('form')
const songlist = document.getElementById('songList')
const main = document.getElementById('main')
const searchURL = "https://deezerdevs-deezer.p.rapidapi.com/search?q="
const searchURLOnepiece = "https://deezerdevs-deezer.p.rapidapi.com/search?q=one_piece"


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const searchTerm = search.value
    if(searchTerm){
        str=""
        fn(searchURL+searchTerm,options)
        search.value = "";
    }
    heading.innerHTML=`search results for ${searchTerm} . . .`
    console.log(search.value)

})

const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a7eeda571msha01bb04c9ea1e6ap1e2f63jsn3ba92b36b6ab',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

const fn = async (url,options)=>{

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        result.data.forEach((e, i) => {

            // const songEl = document.createElement('div')
            // songEl.innerHTML = `<div >
            //                         <tr class="song-item" id="${i + 1}">
            //                             <td>&nbsp;&ensp;${i + 1}.</td>
            //                             <td>${e.title}</td>
            //                             <td></td>
            //                             <td>${e.duration}&ensp;    <button class=" song-btn fa-solid fa-play" id="${e.id}"><i ></i></button>&ensp;</td>
            //                         </tr>
            //                     </div>   
            //                     `

            // songlist.appendChild(songEl)
            str = str + `<div >
                            <tr class="song-item" id="${i + 1}">
                                
                                <td>  <img src="${e.album.cover}" alt=""></td>
                                <td>${e.title}</td>
                                <td></td>
                                <td>${e.duration}s&ensp;    <button class=" song-btn fa-solid fa-play" id="${e.id}"><i ></i></button>&ensp;</td>
                            </tr>
                         </div>   
                        `
        });
            songList.innerHTML = str;
        
            Array.from(document.getElementsByClassName('song-item')).forEach((element) => {
        
        
                element.addEventListener('click', (e) => {
                    index = parseInt(e.target.id);
                    document.getElementById('currentSong').innerHTML = result.data[index-1].title;
                    audioElement.src = `${result.data[index-1].preview}`;
        
                    if (audioElement.paused) {
                        console.log(audioElement.currentTime);
                        Array.from(document.getElementsByClassName('song-item')).forEach((element) => {
                            element.classList.remove('playing')
                        });
                        Array.from(document.getElementsByClassName('song-btn')).forEach((element) => {
                            element.classList.remove('fa-solid', 'fa-pause');
                            element.classList.add('fa-solid', 'fa-play');
                        });
            
             
                        element.classList.add('playing')
                        audioElement.play();
                        Array.from(document.getElementsByClassName('song-btn'))[index - 1].classList.remove('fa-solid', 'fa-play');
                        Array.from(document.getElementsByClassName('song-btn'))[index - 1].classList.add('fa-solid', 'fa-pause');
                        masterplay.classList.remove('fa-solid', 'fa-play');
                        masterplay.classList.add('fa-solid', 'fa-pause');
            
            
                    } 
                    else if(audioElement.preload == 'auto'){
                        console.log('clicked pause')
                        audioElement.pause();
                        Array.from(document.getElementsByClassName('song-btn'))[index - 1].classList.remove('fa-solid', 'fa-pause');
                        Array.from(document.getElementsByClassName('song-btn'))[index - 1].classList.add('fa-solid', 'fa-play');
                        masterplay.classList.remove('fa-solid', 'fa-pause');
                        masterplay.classList.add('fa-solid', 'fa-play');
                    }
                });
            });
        
        
    } catch (error) {
        console.error(error);
    }
}
fn(searchURLOnepiece,options);





// console.log(result);
let songIndex = 0;
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('progressBar');
let audioElement = new Audio('songs/song1.mp3');

let songs = [{ name: "AOT BGM",
               duration: "2:30",
               location: 'songs/song1.mp3',
               id: "1" },
            { name: "kuch aur kya chahiye",
              duration: "4:18", 
              location: 'songs/song2.mp3', 
              id: "2" },
{ name: "pyar hota kai baar hai", duration: "3:03", location: 'songs/song3.mp3', id: "3" },
{ name: "name", duration: "2:30", location: 'songs/song4.mp3', id: "4" },
{ name: "name", duration: "2:30", location: 'songs/song5.mp3', id: "5" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song6.mp3', id: "6" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song7.mp3', id: "7" },
];
let songs2 = [{ name: "AOT BGM", duration: "2:30", location: 'songs/song1.mp3', id: "1" },
{ name: "kuch aur kya chahiye", duration: "4:18", location: 'songs/song2.mp3', id: "2" },
{ name: "pyar hota kai baar hai", duration: "3:03", location: 'songs/song3.mp3', id: "3" },
{ name: "name", duration: "2:30", location: 'songs/song4.mp3', id: "4" },
{ name: "name", duration: "2:30", location: 'songs/song5.mp3', id: "5" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song6.mp3', id: "6" },
{ name: "jai shree Ram", duration: "1:00:00", location: 'songs/song6.mp3', id: "6" },
];



Array.from(document.getElementsByClassName('list')).forEach((element)=>{
    
    element.addEventListener('click',()=>{
        
        console.log(element);
        str = "";
        
        
        
    })
})



// document.getElementById('Next').addEventListener('click', (e) => {

// })

// document.getElementsByClassName('song-btn').addEventListener('click',()=>{
    
// })



// Array.from(document.getElementsByClassName('song-item')).forEach((element) => {


//     element.addEventListener('click', (e) => {
//         index = parseInt(e.target.id);
//         document.getElementById('currentSong').innerHTML = songs[index-1].name;
//         audioElement.src = `songs/song${index}.mp3`;
//         audioElement.currentTime = 0;
//         if (audioElement.paused || audioElement.currentTime < 0) {
//             Array.from(document.getElementsByClassName('song-item')).forEach((element) => {
//                 element.classList.remove('playing')
//             });
//             Array.from(document.getElementsByClassName('song-btn')).forEach((element) => {
//                 element.classList.remove('fa-solid', 'fa-pause');
//                 element.classList.add('fa-solid', 'fa-play');
//             });


//             element.classList.add('playing')
//             audioElement.play();
//             Array.from(document.getElementsByClassName('song-btn'))[index - 1].classList.remove('fa-solid', 'fa-play');
//             Array.from(document.getElementsByClassName('song-btn'))[index - 1].classList.add('fa-solid', 'fa-pause');
//             masterplay.classList.remove('fa-solid', 'fa-play');
//             masterplay.classList.add('fa-solid', 'fa-pause');


//         }
//         else if (audioElement.currentTime > 0) {
//             console.log('clicked pause')
//             audioElement.pause();
//             Array.from(document.getElementsByClassName('song-btn'))[index - 1].classList.remove('fa-solid', 'fa-pause');
//             Array.from(document.getElementsByClassName('song-btn'))[index - 1].classList.add('fa-solid', 'fa-play');
//             masterplay.classList.remove('fa-solid', 'fa-pause');
//             masterplay.classList.add('fa-solid', 'fa-play');
//         }
//     });
// });

//show player
showPlayer = ()=>{
    let player = document.getElementById('player');

    player.innerHTML = ` <input id="progressBar"type="range" value="0" min="0" max="100"style="width: 80rem;">
    <div class="controls">
        <br>
       <span style="color:white; margin-left:-32rem">now playing : name</span><br>

        <button id="play"><i class=""><<</i></button>
        <button id="masterplay" class="fa-solid fa-play"></button>
        <button id="Next"><i class="">>></i></button>

    </div>`
}

//MasterPlay plays at bottom
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime < 0) {
        console.log(audioElement.currentTime);
        audioElement.play();
        masterplay.classList.remove('fa-solid', 'fa-play');
        masterplay.classList.add('fa-solid', 'fa-pause');
        Array.from(document.getElementsByClassName('song-btn'))[index - 1].classList.remove('fa-solid', 'fa-play');
        Array.from(document.getElementsByClassName('song-btn'))[index - 1].classList.add('fa-solid', 'fa-pause');
       
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-solid', 'fa-pause');
        masterplay.classList.add('fa-solid', 'fa-play');
        Array.from(document.getElementsByClassName('song-btn'))[index - 1].classList.remove('fa-solid', 'fa-pause');
        Array.from(document.getElementsByClassName('song-btn'))[index - 1].classList.add('fa-solid', 'fa-play');
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
});










//creating array
const songs=[
    {
        id:'1',
        songName:`Sulthana
        <div>KGF-2</div>`,
        poster:"images/song-albums/kgf-2.jpg",
        songLInk:"songs/Sulthana.mp3"
    },
    {
        id:'2',
        songName:`Chiru Chiru <br>
        <div>Awaara</div>`,
        poster:"images/song-albums/awaara.jpg",
        songLInk:"songs/Chiru Chiru Chiru.mp3"
    },
    {
        id:'3',
        songName:`Pranama <br>
        <div>Darling</div>`,
        poster:"images/song-albums/darling.jpg",
        songLInk:"songs\Pranama.mp3"
    },
    {
        id:'4',
        songName:`Mehabooba <br>
        <div>KGF-2</div>`,
        poster:"images/song-albums/kgf-2.jpg",
        songLInk:"songs\Pranama.mp3"
    },
    {
        id:'5',
        songName:`Oh Priya Priya <br>
        <div>Ishq</div>`,
        poster:"images/song-albums/ishq.jpg",
        songLInk:"songs\Pranama.mp3"
    },
    {
        id:'6',
        songName:`Naatu Naatu <br>
        <div>RRR</div>`,
        poster:"images/song-albums/RRR.jpg",
        songLInk:"songs\Pranama.mp3"
    },
    {
        id:'7',
        songName:`ShapeOfYou<br>
        <div>Ed Sheeran</div>`,
        poster:"images/song-albums/shape_of_you.jpg",
        songLInk:"songs\Pranama.mp3"
    },
    {
        id:'8',
        songName:`Chinnadana <br>
        <div>Ishq</div>`,
        poster:"images/song-albums/ishq.jpg",
        songLInk:"songs\Pranama.mp3"
    },
    {
        id:'9',
        songName:`Toofan<br>
        <div>KGF-2</div>`,
        poster:"images/song-albums/kgf-2.jpg",
        songLInk:"songs\Pranama.mp3"
    },
    {
        id:'10',
        songName:`Nee Yadalo <br>
        <div>Awaara</div>`,
        poster:"images/song-albums/awaara.jpg",
        songLInk:"songs\Pranama.mp3"
    },
    {
        id:'11',
        songName:`Attara<br>
        <div>RRR</div>`,
        poster:"images/song-albums/RRR.jpg",
        songLInk:"songs\Pranama.mp3"
    },
    {
        id:'12',
        songName:`Inka Eedo <br>
        <div>Darling</div>`,
        poster:"images/song-albums/darling.jpg",
        songLInk:"songs\Pranama.mp3"
    },
    {
        id:'13',
        songName:`Andhamaina <br>
        <div>Tej ILoveYou</div>`,
        poster:"images/song-albums/tej.jpg",
        songLInk:"songs\Pranama.mp3"
    },
    {
        id:'14',
        songName:`Bad Boy <br>
        <div>Tungevaag&Raaban</div>`,
        poster:"images/song-albums/bad_boy.jpg",
        songLInk:"songs/Bad-Boy-.mp3"
    },
    {
        id:'15',
        songName:`LetMeDown <br>
        <div>Alec</div>`,
        poster:"images/song-albums/letMeDown.jpg",
        songLInk:"songs/Let Me Down.mp3"
    }
]

Array.from(document.getElementsByClassName("songItem")).forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].poster;
    element.getElementsByTagName("h5")[0].innerHTML=songs[i].songName;
})
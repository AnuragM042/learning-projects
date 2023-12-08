console.log('Welcome to Spotify');
let SongIndex=0;

let audioElement1 =  new Audio('/home/anurag/Downloads/Songs/1bek.mp3');  
let audioElement2 = new Audio('/home/anurag/Downloads/Songs/2kaisehua.mp3');
let audioElement3 = new Audio( "/home/anurag/Downloads/Songs/3mereso.mp3")
let audioElement4 = new Audio ( "/home/anurag/Downloads/Songs/4Teraban.mp3")
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('SongID'))
let next = document.getElementById('next');





//specific song button name
let kaisehuab = document.getElementById('Kaisehuab');
let Bekhayali = document.getElementById('Bekhayali');
let MereSoneya = document.getElementById('MereSoneya');
let TeraBan = document.getElementById('TeraBan');

// let songs = [
//     {songName: "kabir-Singh-Bekhayali", filePath:"songs/1bek.mp3",coverPath:"cover/1.jpg",},
//     {songName: "kabir-Singh-Kaise_Hua", filePath:"songs/2kaisehua.mp3",coverPath:"cover/1.jpg"},
//     {songName: "kabir-Singh-Mere_sonya", filePath:"songs/3mereso.mp3",coverPath:"cover/1.jpg"},
//     {songName: "kabir-Singh-TeraBanjaunga", filePath:"songs/4Teraban.mp3",coverPath:"cover/1.jpg"},
// ]



// audioElement.play();

// Handle play/pause click 
  // masterPlay.addEventListener('click',()=>{
  //   if (audioElement1.paused || audioElement1.currentTime<=0){
  //       audioElement1.play();
  //       masterPlay.classList.remove('fa-play')
  //       masterPlay.classList.add('fa-pause')
  //   }
  //   else {
  //       audioElement1.pause ();
  //       masterPlay.classList.remove('fa-pause')
  //       masterPlay.classList.add('fa-play')
  //       gif.style.opacity = 0;
  //   }

  // }) 
  // specific song
 // Bekhayali 

 Bekhayali.addEventListener('click',()=>{
  if(audioElement1.paused || audioElement1.currentTime<=0){
      audioElement1.play();
      Bekhayali.classList.remove('fa-play')
      Bekhayali.classList.add('fa-pause')      
  }
  else {
      audioElement1.pause()
      Bekhayali.classList.remove('fa-pause')
      Bekhayali.classList.add('fa-play')
  }
      audioElement1.addEventListener('timeupdate',()=>{
       // Update seekbar
       parseInt((audioElement1.currentTime/audioElement1.duration)*100)
       myProgressBar.value = progress;
    })

      myProgressBar.addEventListener('change',()=>{
       audioElement1.currentTime = myProgressBar.value * audioElement4.duration/100;
    })



})






  // kaise hua 
  kaisehuab.addEventListener('click',()=>{
    if(audioElement2.paused || audioElement2.currentTime<=0){
        audioElement2.play();
        kaisehuab.classList.remove('fa-play')
        kaisehuab.classList.add('fa-pause')      
    }
    else {
        audioElement2.pause()
        kaisehuab.classList.remove('fa-pause')
        kaisehuab.classList.add('fa-play')
    }
  })

  // Mere Soneya
  MereSoneya.addEventListener('click',()=>{
    if(audioElement3.paused || audioElement3.currentTime<=0){
        audioElement3.play();
        MereSoneya.classList.remove('fa-play')
        MereSoneya.classList.add('fa-pause')      
    }
    else {
        audioElement3.pause()
        MereSoneya.classList.remove('fa-pause')
        MereSoneya.classList.add('fa-play')
    }
        audioElement3.addEventListener('timeupdate',()=>{
         // Update seekbar
         parseInt((audioElement3.currentTime/audioElement3.duration)*100)
         myProgressBar.value = progress;
      })

        myProgressBar.addEventListener('change',()=>{
         audioElement3.currentTime = myProgressBar.value * audioElement3.duration/100;
      })



  })
// Tera ban jaunga
  TeraBan.addEventListener('click',()=>{
    if(audioElement4.paused || audioElement4.currentTime<=0){
        audioElement4.play();
        TeraBan.classList.remove('fa-play')
        TeraBan.classList.add('fa-pause')      
    }
    else {
        audioElement4.pause()
        TeraBan.classList.remove('fa-pause')
        TeraBan.classList.add('fa-play')
    }
        audioElement4.addEventListener('timeupdate',()=>{
         // Update seekbar
         parseInt((audioElement4.currentTime/audioElement4.duration)*100)
         myProgressBar.value = progress;
      })

        myProgressBar.addEventListener('change',()=>{
         audioElement4.currentTime = myProgressBar.value * audioElement4.duration/100;
      })



  })


  // // Listen to Events   samjha nhi
  // audioElement1.addEventListener('timeupdate',()=>{
  //       // Update seekbar
  //       progress = parseInt((audioElement1.currentTime/audioElement1.duration)*100)
  //       myProgressBar.value = progress;
  // })

  // myProgressBar.addEventListener('change',()=>{
  //   audioElement1.currentTime = myProgressBar.value * audioElement1.duration/100;
  // })


    

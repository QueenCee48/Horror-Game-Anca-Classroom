let mouseCursor = document.querySelector(".cursor");

window.addEventListener('mousemove',cursor);

function cursor(event) {
  mouseCursor.style.top = event.pageY + "px";
  mouseCursor.style.left = event.pageX + "px";
}

//let end = document.getElementById("end");

// const endImg = document.querySelector("#end-img");
// const endImgWrapper = document.getElementById("end-img-wrap");
// const end = document.querySelector("#end");

// end.addEventListener("mouseenter", () => {
//     endImgWrapper.innerHTML = `
//               <img id="end-img" src="/game/anca_STAGE3.gif" />
//           `;
// });

// var should_play=true
//     window.onclick = () => {
//         if (should_play){
//             should_play=!should_play
//             let soundSource = "/horror.mp3";
//             let sound = new Audio(soundSource);
//             sound.play();
//             sound.onended = () => {
//                 should_play=true
//             }
//         }

//     }

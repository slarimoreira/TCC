    
// let selectField = document.querySelectorAll(".selectField");
// let selectText = document.querySelectorAll(".selectText");
// let options = document.querySelectorAll(".options");
// let list = document.querySelectorAll(".list");
// let arrowIcon = document.querySelectorAll(".caret");

// selectField.onclick = function(){
//   list.classList.toggle("hide");
//   arrowIcon.classList.toggle("rotate");
// }

// for(option of options){
//   option.onclick = function(){
//     selectText.innerHTML = this.textContent;
//     list.classList.toggle("hide");
//     arrowIcon.classList.toggle("rotate");
//     }
// }

$(function(){
  $('.selectField').click(function(i){
      $('.list').removeClass('hide');
      $('.arrowIcon').addClass('rotate');
      $(this).addClass('hide');
  });
});

// anexar arquivo

let file = 

document.getElementById("file").addEventListener('change', () =>{
  document.querySelectorAll('.upload-file').textContent = this.file[0].name
});
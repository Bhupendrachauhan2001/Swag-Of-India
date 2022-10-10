// $(document).ready(function () {
//     $('#showAnswer1').click(function () { 
//         if($('#showAnswer1').text()==='+'){
//             $('#showAnswer1').text('-')
//         }else{
//             $('#showAnswer1').text('+')
//         }

//         $("#help-answer1").toggle()
//     });
//     $('.help-answer').hide()
    

// })
let ans = document.querySelectorAll('.help-question');
ans.forEach(ans =>{
    ans.lastElementChild.addEventListener('click', () => {
    if(ans.lastElementChild.innerHTML==='+'){
      ans.lastElementChild.innerHTML='-';
    }
    else{
      ans.lastElementChild.innerHTML='+';
    }
    $(ans.nextElementSibling).toggle();
  })

})
   
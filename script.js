var quizScore = 0;



function questionOne(event){
  event.preventDefault();
  var answer = document.formOne.firstQuestion.value;
  if (answer === 'four'){
    quizScore = quizScore + 1;
    console.log('Your score is ' + quizScore + '/5');
  }
}

var submitOne = document.getElementById('submitOne');
submitOne.addEventListener('click',questionOne);

function hideQuestionOne(){
  document.formOne.style.display = 'none';
  document.formTwo.style.display = 'block';
}

submitOne.addEventListener('click',hideQuestionOne);




function questionTwo(event){
  event.preventDefault();
  if (document.formTwo.blue.checked && document.formTwo.black.checked){
    quizScore = quizScore + 1;
    console.log('Your score is ' + quizScore + '/5');
  }
}

var submitTwo = document.getElementById('submitTwo');
submitTwo.addEventListener('click', questionTwo);

function hideQuestionTwo(){
  document.formTwo.style.display = 'none';
  document.formThree.style.display = 'block';
}

submitTwo.addEventListener('click',hideQuestionTwo);





function questionThree(event){
  event.preventDefault();
  var answer = document.formThree.questionThree.value;
  if (answer === 'no'){
    quizScore = quizScore + 1;
    console.log('Your score is ' + quizScore + '/5');

  }
}

var submitThree = document.getElementById('submitThree');
submitThree.addEventListener('click',questionThree);

function hideQuestionThree(){
  document.formThree.style.display = 'none';
  document.formFour.style.display = 'block';
}

submitThree.addEventListener('click',hideQuestionThree);


function questionFour(event){
  event.preventDefault();
  var answer = document.formFour.questionFour.value;
  if (answer === '64'){
    quizScore = quizScore + 1;
    console.log('Your score is ' + quizScore + '/5');
  }
}

var submitFour = document.getElementById('submitFour');
submitFour.addEventListener('click',questionFour);

function hideQuestionFour(){
  document.formFour.style.display = 'none';
  document.formFive.style.display = 'block';
}

submitFour.addEventListener('click',hideQuestionFour);


function questionFive(event){
  event.preventDefault();
  var answer = document.formFive.questionFive.value;
  if (answer === 'Trump'){
    quizScore = quizScore + 1;
    console.log('Your score is ' + quizScore + '/5');
  }
}

var submitFive = document.getElementById('submitFive');
submitFive.addEventListener('click',questionFive);

function hideQuestionFive(){
  document.formFive.style.display = 'none';
  alert('Your score is ' + quizScore + '/5');
}

submitFive.addEventListener('click',hideQuestionFive);

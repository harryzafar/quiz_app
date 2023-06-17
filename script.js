let questions = [{
    'ques': 'What is your name',
    'a': 'Adam',
    'b': 'Harry',
    'c': 'Zafar',
    'd': 'fateh',
    'correct': 'c'
},
{
    'ques': 'What is markup languege',
    'a': 'html',
    'b': 'css',
    'c': 'js',
    'd': 'php',
    'correct': 'a'
},
{
    'ques': 'What is HTML full form',
    'a': 'hyper Text markup languege',
    'b': 'hiegher than menu languege',
    'c': 'heigher than marquee languege',
    'd': 'high text markup languege',
    'correct': 'a' 
}];
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
let option = document.querySelectorAll('.option');


function loadquestion(){
    let data = questions[index];
    if(index == total){
        endquiz();
    } else{
        reset();
    document.getElementById('question').innerText = 'Q.'+(index+1)+' '+ data['ques'];
    option[0].nextElementSibling.innerText = data['a'];
    option[1].nextElementSibling.innerText = data['b'];
    option[2].nextElementSibling.innerText = data['c'];
    option[3].nextElementSibling.innerText = data['d'];
    }
    
};
function getAnswer(){
    let answer;
    option.forEach((input)=>{
        if(input.checked){
        answer = input.value;
        }
       
    });
    return answer;
}
function reset(){
    option.forEach((input)=>{
        return input.checked = false;
    })
}
function endquiz(){
    document.getElementById('box').innerHTML = `
    <h3>Thank you playing Quiz </h3>
    <h4>Your result is `+right+`/`+total+`</h4>
    `
};

document.getElementById('sub-btn').addEventListener('click', function(){
    let data = questions[index];
        let ans = getAnswer();
        if(ans == data['correct']){
            right++;
        }
        else{
            wrong++;
        };
        index++;
        loadquestion();
    

});


loadquestion();

const setOfWords = [
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
    "I am so clever that sometimes I don't understand a single word of what I am saying.",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .",
];

const msg = document.getElementById('msg');
const typedWords = document.getElementById('typedWords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGame = () =>{
    let randomNumber = Math.floor( Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);       //to get answer in seconds
    console.log(totalTime);

    let totalStr = typedWords.value;
    let wordCount = wordCounter(totalStr);
    let speed = Math.round((wordCount/totalTime)*60);
    let finalMsg = "You typed " +speed+ " words per minute .\n";
    finalMsg += compareWords(msg.innerText,totalStr);
    msg.innerText = finalMsg;

}

const wordCounter = (str) =>{
    let response = str.split(" ").length;
    console.log(response);
    return response;

}

const compareWords = (str1, str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;


words1.forEach(function (item,index) {
    if (item == words2[index]) {
        cnt++;
    } 
})

let errorWords = (words1.length - cnt );
return (cnt + " correct out of "+ words1.length + " words and the total number of error are "+ errorWords + "." );
}



btn.addEventListener('click', function(){
    console.log('this')
    if(this.innerText == 'Start'){
        typedWords.disabled = false;
        playGame();
    }else if(this.innerText == "Done"){
        typedWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})
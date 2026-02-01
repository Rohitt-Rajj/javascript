const quotes = [
"Code is like humor. When you have to explain it, it's bad.", 
"First, solve the problem. Then, write the code." ,
 "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." ,
"Programming isn't about what you know; it's about what you can figure out." ,
 "The only way to learn a new programming language is by writing programs in it." ,
 "Talk is cheap. Show me the code." ,
 "Programming is the art of telling another human what one wants the computer to do." ,
 "Clean code always looks like it was written by someone who cares." ,
 "Programming is breaking of one big impossible task into several very small possible tasks." ,
 "The function of good software is to make the complex appear simple." ,
 "Good programmers worry about data structures and their relationships.", 
 "Programming is thinking, not typing." ,
 "Code never lies, comments sometimes do.", 
 "Simplicity is prerequisite for reliability." ,
 "Before software can be reusable it first has to be usable." ,
"The best error message is the one that never shows up." ,
 "The most important property of a program is whether it accomplishes the intention of its user." ,
 "Make it work, make it right, make it fast." ,
 "The computer is incredibly fast, accurate, and stupid. Man is incredibly slow, inaccurate, and brilliant. The marriage of the two is a force beyond calculation." 
]

const button = document.querySelector('button');
const quote = document.querySelector('h1');
button.addEventListener('click', ()=>{
    const index = Math.floor(Math.random()*20);
    quote.textContent = quotes[index];
}
)
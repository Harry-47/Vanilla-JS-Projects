const quoteList = [
    { quote: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
    { quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
    { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { quote: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { quote: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
    { quote: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
    { quote: "Knowledge is power.", author: "Francis Bacon" },
    { quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.", author: "Dan Salomon" },
    { quote: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.", author: "Antoine de Saint-Exupery" },
    { quote: "Ruby is rubbish! PHP is phpantastic!", author: "Nikita Popov" },
    { quote: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    { quote: "Fix the cause, not the symptom.", author: "Steve Maguire" },
    { quote: "Optimism is an occupational hazard of programming: feedback is the treatment.", author: "Kent Beck" },
    { quote: "When to use iterative development? You should use iterative development only on projects that you want to succeed.", author: "Martin Fowler" },
    { quote: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { quote: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
    { quote: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    { quote: "The most important property of a program is whether it accomplishes the intention of its user.", author: "C.A.R. Hoare" },
    { quote: "Premature optimization is the root of all evil.", author: "Donald Knuth" },
    { quote: "Walking on water and developing software from a specification are easy if both are frozen.", author: "Edward V. Berard" },
    { quote: "It’s not a bug – it’s an undocumented feature.", author: "Anonymous" },
    { quote: "A language that doesn’t affect the way you think about programming is not worth knowing.", author: "Alan Perlis" },
    { quote: "The best way to get a project done faster is to start sooner.", author: "Jim Highsmith" },
    { quote: "The most damaging phrase in the language is.. it’s always been done this way.", author: "Grace Hopper" },
    { quote: "A good programmer is someone who always looks both ways before crossing a one-way street.", author: "Doug Linder" },
    { quote: "Deleted code is debugged code.", author: "Jeff Sickel" },
    { quote: "The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the development time.", author: "Tom Cargill" },
    { quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.", author: "Edsger Dijkstra" },
    { quote: "If you think your users are idiots, only idiots will use it.", author: "Linus Torvalds" },
    { quote: "Beware of bugs in the above code; I have only proved it correct, not tried it.", author: "Donald Knuth" },
    { quote: "The function of good software is to make the complex appear to be simple.", author: "Grady Booch" },
    { quote: "There are two ways to write error-free programs; only the third one works.", author: "Alan Perlis" },
    { quote: "The best performance improvement is the transition from the nonworking state to the working state.", author: "J. Osterhout" },
    { quote: "It’s OK to figure out murder mysteries, but you shouldn’t need to figure out code. You should be able to read it.", author: "Steve McConnell" },
    { quote: "Truth can only be found in one place: the code.", author: "Robert C. Martin" },
    { quote: "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.", author: "Muhammad Waseem" },
    { quote: "How you look at it is pretty much how you’ll see it.", author: "Steve Jobs" },
    { quote: "The most effective debugging tool is still careful thought, coupled with judiciously placed print statements.", author: "Brian Kernighan" },
    { quote: "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows your whole leg off.", author: "Bjarne Stroustrup" },
    { quote: "The only way to go fast is to go well.", author: "Robert C. Martin" },
    { quote: "I'm not a great programmer; I'm just a good programmer with great habits.", author: "Kent Beck" },
    { quote: "No code is faster than no code.", author: "Kevlin Henney" },
    { quote: "You can't have great software without a great team, and most software teams behave like dysfunctional families.", author: "Jim McCarthy" },
    { quote: "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.", author: "Seymour Cray" },
    { quote: "When debugging, novices insert corrective code; experts remove defective code.", author: "Richard Pattis" },
    { quote: "When in doubt, use brute force.", author: "Ken Thompson" },
    { quote: "To iterate is human, to recurse divine.", author: "L. Peter Deutsch" },
    { quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", author: "Bill Gates" },
    { quote: "The best error message is the one that never shows up.", author: "Thomas Fuchs" }
];
let quoteCard = document.querySelector(".container");
let quote = document.querySelector("p");
let author = document.querySelector("h5");
let newQuoteButton = document.querySelector("#quoteButton");
let twitterbutton = document.querySelector("#twitterButton");

let quoteNauthorIndex = 0;

function getRandomQuote() {
     let randomQuote = quoteList[quoteNauthorIndex]
     quote.textContent = "\"" + randomQuote.quote + "\"";
     author.textContent = randomQuote.author;
     author.style.display = "block";
     quoteNauthorIndex = (quoteNauthorIndex + 1) % quoteList.length;
}
function openTwitter() {
    let tweetText = encodeURIComponent(quote.textContent + " - " + author.textContent);
    let twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent}`;
    window.open(twitterUrl, "_blank", "width=500,height=500");
}

newQuoteButton.addEventListener("click",getRandomQuote);
twitterbutton.addEventListener("click", openTwitter);
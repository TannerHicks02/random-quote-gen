const quotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The harder you work for something, the greater you'll feel when you achieve it. - Anonymous",
   "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
"It does not matter how slowly you go, as long as you do not stop. - Confucius",
"Opportunities don't happen, you create them. - Chris Grosser",
"If you want something you've never had, you must be willing to do something you've never done. - Thomas Jefferson",
"Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
"Start where you are. Use what you have. Do what you can. - Arthur Ashe",
"Don't wait for the right opportunity: create it. - George Bernard Shaw",
"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
"Dream big and dare to fail. - Norman Vaughan",
"Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
"You miss 100% of the shots you don’t take. - Wayne Gretzky",
"What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
"Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
"Your time is limited, don’t waste it living someone else’s life. - Steve Jobs",
"It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
"The only impossible journey is the one you never begin. - Tony Robbins",
"Act as if what you do makes a difference. It does. - William James",
"Everything you’ve ever wanted is on the other side of fear - George Addair",
"The secret of getting ahead is getting started.  - Mark Twain",
"Don’t let yesterday take up too much of today. - Will Rogers",
"I am not a product of my circumstances. I am a product of my decisions. - Stephen R. Covey",
"Strive not to be a success, but rather to be of value. - Albert Einstein",
"Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
"It always seems impossible until it’s done. - Nelson Mandela",
"Turn your wounds into wisdom. - Oprah Winfrey",
"Great things never come from comfort zones. - Anonymous",
"Do one thing every day that scares you. - Eleanor Roosevelt",
"You must be the change you wish to see in the world. - Mahatma Gandhi",
"I never dreamed about success, I worked for it. - Estée Lauder",
"The only place where success comes before work is in the dictionary. - Vidal Sassoon",
"You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
"Don’t count the days, make the days count. - Muhammad Ali",
"There are no shortcuts to any place worth going. - Beverly Sills",
"Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
"Fall seven times, stand up eight. - Japanese Proverb",
"Do or do not. There is no try. - Yoda",
"If you can dream it, you can do it. - Walt Disney",
"The only thing standing between you and your goal is the story you keep telling yourself as to why you can’t achieve it. - Jordan Belfort",
"Success is the sum of small efforts, repeated day-in and day-out.  - Robert Collier",
"The difference between who you are and who you want to be is what you do.  - Anonymous",
"Go confidently in the direction of your dreams. Live the life you have imagined.  -  Henry David Thoreau",


];

const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");

newQuoteButton.addEventListener("click", displayNewQuote);

function displayNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

displayNewQuote(); // display a random quote on page load
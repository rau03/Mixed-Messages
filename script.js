let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = [
  `"Whatever the mind of man can conceive and believe, it can achieve.” –Napoleon Hill`,
  `“I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.” –Michael Jordan`,
  `"You miss 100% of the shots you don’t take.” –Wayne Gretzky`,
  `“Every strike brings me closer to the next home run.” –Babe Ruth`,
  `“Winning isn’t everything, but wanting to win is.” –Vince Lombardi`,
  `“You can never cross the ocean until you have the courage to lose sight of the shore." –Christopher Columbus`,
  `“Ask and it will be given to you; search, and you will find; knock and the door will be opened for you"–Jesus`,
  `“You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.” –Unknown`,
  `“I didn’t fail the test. I just found 100 ways to do it wrong.” –Benjamin Franklin`,
  `“When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.” –Henry Ford`,
  `“It’s not the years in your life that count. It’s the life in your years.” –Abraham Lincoln`,
  `“Either write something worth reading or do something worth writing.” –Benjamin Franklin`,
  `“The only way to do great work is to love what you do”. –Steve Jobs`,
];

btn.addEventListener('click', function () {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  output.innerHTML = randomQuote;
})
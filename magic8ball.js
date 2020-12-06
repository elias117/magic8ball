let possible_answers = [
    "As I see it, yes.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don’t count on it.",
    "It is certain.",
    "It is decidedly so.",
    "Most likely.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Outlook good.",
    "Reply hazy, try again.",
    "Signs point to yes.",
    "Very doubtful.",
    "Without a doubt.",
    "Yes.",
    "Yes – definitely.",
    "You may rely on it.",
];

function get_random_message() {
    let random_index = Math.floor(Math.random() * possible_answers.length);
    let random_message = possible_answers[random_index];
    return random_message;
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question(`What's your question?\n\n`, (question) => {
    console.log(`The answer to ${question} is`);
    console.log(get_random_message());
    readline.close();
});

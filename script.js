/* const messages = {
    "Alice": "Hello, Alice! You're awesome!",
    "Bob": "Hey, Bob! Have a fantastic day!",
    "Charlie": "Hi, Charlie! You rock!",
    // Add more names and messages here
};
const nameInput = document.getElementById("name-input");
const generateButton = document.getElementById("generate-button");
const messageOutput = document.getElementById("message-output");

generateButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const message = messages[name] || "Name not found. Please enter a different name.";
    messageOutput.textContent = message;
}); */

const messages = {
    "Lil lean": {
        message: "Werey, How far! Today is another to keep going, don't stop just keep going and one day,hustle go pay. Best believe that!. Also as you dey grow, try get more sense and try enjoy your life small, your papa no be slave. P.S:- Try go gym, Japhet is already bigger and stronger than you and even Esom fit strangle you like this.",
        image: "gay.jpg"
    },
    "Ayotilewa": {
        message: "What's up,My guy ! I know you’re trying so hard to reach your goals, and I can sure you that karma sees it all. You will be rewarded sooner or later, and I will be there to be happy for and with you. You can do anything, and I believe in you. Many Maldives trips on the way.!",
        image: "maldives.jpg"
    },
    "Tobi": {
        message: "Agba Tech bro, How your life my bro! Doing the best at this moment puts you in the best place for the next moment. Where you are at now is NOT the destination, it is just the starting point!",
        image: "cha.jpg"
    },
    "Carpe": {
        message: "Werey, how far!  Always remember that your present situation is not your final destination. The best is yet to come. This is just the begining bro.! P.S:- Your team no good as you think, make una no go dey get hope.",
        image: "humiliation.jpg"
        
    },
    "Anthonia": {
        message: "Big head,How are you? . I know that sometimes you feel down. But there’s no need to. You are amazing in each and every way, you have the kindest soul and the brightest mind. I know you can do anything, my G. P.S:- You're still a mumu!",
        image: "Shatta.jpg"
    },
    "Benji": {
        message: "Hi, Anthonia! You rock!",
        image: "charlie.jpg"
    },
    "Matt": {
        message: "Olusho aguntan, I hope all is well sir. You have a greater potential than anyone who has ever lived before you! Soon, when all is well, you’re going to look back on this period of your life and be so glad that you never gave up. But first try get small sense lmao!",
        image: "pastor.jpg"
    },
    "Ramires": {
        message: "Hi, Anthonia! You rock!",
        image: "charlie.jpg"
    },
};

const generateButton = document.getElementById("generate-button");
const nameInput = document.getElementById("name-input");
const messageOutput = document.getElementById("message-output");

generateButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const data = messages[name];

    if (data) {
        const { message, image } = data;
        const messageContainer = document.createElement("div");
        messageContainer.className = "message-container fade-in"; // Apply fade-in animation
        messageContainer.innerHTML = `
            <p>${message}</p>
            <img src="${image}" alt="${name}'s Image">
        `;
        messageOutput.innerHTML = "";
        messageOutput.appendChild(messageContainer);}
    else {
        messageOutput.textContent = "Name not found. Please enter a different name.";
        messageOutput.innerHTML = "Name not found. Please enter a different name.";
    }
});
console.log(messages);
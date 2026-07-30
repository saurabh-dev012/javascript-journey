const box  = document.querySelector("#emoji");
const btn = document.querySelector("#generateBtn");
btn.addEventListener("click",function(){
    const emojis = [
"😀", "😂", "🤣", "😊", "😍",
"😎", "🥳", "🤩", "😇", "😉",
"🤔", "😴", "🤯", "🥶", "🥵",
"😱", "😭", "😡", "🤪", "😜",
"👻", "💀", "🤖", "👽", "🎃",
"🐶", "🐱", "🦁", "🐼", "🦄",
"🐸", "🐵", "🐙", "🦋", "🐢",
"🍕", "🍔", "🍟", "🌮", "🍩",
"🍉", "🍓", "⚽", "🏀", "🎮",
"🎸", "🚀", "🌈", "⭐", "🔥"
];

const randomIndex = Math.floor(Math.random() * emojis.length);
box.textContent = emojis[randomIndex];

});


const btn = document.querySelector("#generateBtn");
const randompass = document.querySelector("#password");

    btn.addEventListener("click",function(){
        const passwords = [
"X7m#P2qL9@",
"Tiger@482",
"Qw9$Lm2Zx!",
"Blue#789Sky",
"N8&vR4kP!",
"Rocket@123",
"Mango#567",
"H7!kL9pQ2",
"Sun$Rise88",
"Jungle@456",
"Zx#92LmQ!",
"Panda&741",
"Code@2026",
"Pixel#918",
"Fire!Ball7",
"Ocean$548",
"Dream@321",
"Alpha#777",
"Night*Moon5",
"Wolf@852",
"Tech#909",
"Happy!Life8",
"Cloud$432",
"Magic@741",
"Nova#135",
"Cyber!X92",
"Flash@876",
"Star$Moon4",
"Matrix#101",
"Earth@369", 
"Dragon!555",
"Sky#258",
"Power@999",
"Secret*777",
"Knight#808",
"Shadow@147",
"Gaming!Pro9",
"Moon$246",
"Phoenix#84",
"Storm@654",
"Thunder!007",
"Galaxy#123",
"Neon@888",
"Legend*911",
"Crystal#73",
"Venom@456",
"Infinity!22",
"Cosmos#300",
"Titan@111",
"Velocity!95"
];

const randomSelector = Math.floor(Math.random() * passwords.length);
    randompass.value = passwords[randomSelector];

    });

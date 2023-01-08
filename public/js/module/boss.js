class Boss {
    constructor(nom, pointDeVie, pointDattaque) {
        this.nom = nom;
        this.pointDeVie = pointDeVie;
        this.pointDattaque = pointDattaque;

    }

    action(reactionBoss) {

        if (this.pointDeVie <= this.pointDeVie * 0.2) {
            // Le boss a moins de 20% de ses points de vie, il pose une énigme à l'utilisateur
            console.log("Le boss pose une énigme à l'utilisateur :");
            // Choix aléatoire d'une énigme
            let question = questions[Math.floor(Math.random() * questions.length)];
            console.log(question.quest);
            // Trois essais pour trouver la réponse
            for (let i = 0; i < 3; i++) {
                let rep = prompt("Quelle est la réponse ?");
                if (réponse === question.réponse) {
                    console.log("Bonne réponse ! Le boss est vaincu.");
                    this.pointDeVie = 0;
                    break;
                } else {
                    console.log("Mauvaise réponse, essai suivant.");
                }
            }
            console.log("Vous avez échoué, vous êtes morts.");
        }
    }

}



let questions = [{
        quest: "Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?",
        réponse: "le silence"
    },
    {
        quest: "Je suis d'eau, je suis d'air, et je suis d'électricité. Qui suis-je ?",
        réponse: "l'éclair"
    },
    {
        quest: "Quel est l'indice du premier 'i' de cette question ?",
        réponse: "10"
    }
];

let hasard = Math.floor(Math.random(3) * questions.length);
let recupe_reponse = questions[hasard];

console.log();


let sauron = new Boss("Sauron", 50, 50, )
let chronos = new Boss("Chronos", 50, 50, )
let lillith = new Boss("Lillith", 50, 50, )





export default {
    sauron,
    chronos,
    lillith,
};
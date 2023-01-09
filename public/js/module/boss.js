class Boss {
    constructor(nom, pointDeVie, pointDattaque) {
        this.nom = nom;
        this.pointDeVie = pointDeVie;
        this.pointDattaque = pointDattaque;

    }

    action(reactionBoss) {

        if (this.pointDeVie <= this.pointDeVie * 0.2) {

            console.log("Le boss pose une énigme à l'utilisateur :");

            let question = questions[Math.floor(Math.random() * questions.length)];
            console.log(question.quest);

            for (let i = 0; i < 3; i++) {
                let reponse = prompt("Quelle est la réponse ?");
                if (reponse === question.réponse) {
                    console.log("Bonne réponse ! Le boss est vaincu.");
                    this.pointDeVie = 0;
                    break;
                } else {
                    console.log("Mauvaise réponse, essai suivant.");
                    break;
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





let sauron = new Boss("Sauron", 50, 50, )
let chronos = new Boss("Chronos", 50, 50, )
let lillith = new Boss("Lillith", 50, 50, )


sauron.action()
console.log(sauron);



export default {
    sauron,
    chronos,
    lillith,
}
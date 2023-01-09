

class Heros {
    constructor(nom, points_de_vie, points_d_attaque) {
        this.nom = nom;
        this.points_de_vie = points_de_vie;
        this.points_d_attaque = points_d_attaque;
    }

    defense(boss) {
        this.points_d_attaque = this.points_d_attaque * 0.5;
        this.points_de_vie = this.points_de_vie * 2.5;
    }

    attack(boss) {
        this.points_d_attaque = this.points_d_attaque * 1.6;
        this.points_de_vie * 0.75;
    }

}

class Guerrier extends Heros {
    constructor(nom, points_de_vie, points_d_attaque, point_de_rage) {
        super(nom, points_de_vie, points_d_attaque);
        this.point_de_rage = point_de_rage;
    }

    attack() {
        this.pointDeRage++;
        if (this.pointDeRage >= 4) {
            this.pointsDAttaque *= 1.25;
            this.pointDeRage = 0;
            // code pour faire perdre des points de vie au boss
            this.pointsDeVie -= this.pointsDAttaque;
            console.log(this.nom + " attaque et inflige " + this.pointsDAttaque + " points de dégâts à " + this.nom);
        } else {
            // code pour faire perdre des points de vie au boss
            this.pointsDeVie -= this.pointsDAttaque;
            console.log(this.nom + " attaque et inflige " + this.pointsDAttaque + " points de dégâts à " + this.nom);
        }
    }
}



class Mage extends Heros {
    constructor(nom, points_de_vie, points_d_attaque, point_de_mana) {
        super(nom, points_de_vie, points_d_attaque);
        this.point_de_mana = point_de_mana;
    }

    attack(Boss) {
        if (this.pointDeMana >= 2) {
            this.pointDeMana -= 2;
            // code pour faire perdre des points de vie au boss
            sauron.pointsDeVie -= this.pointsDAttaque;
        } else {
            this.pointDeMana += 7;
        }
    }

}

class Archer extends Heros {
    constructor(nom, points_de_vie, points_d_attaque, nombre_de_fleche) {
        super(nom, points_de_vie, points_d_attaque);
        this.nombre_de_fleche = nombre_de_fleche;
    }


    attack() {
        if (this.nombre_De_Flèches >= 2) {
            this.nombre_De_Flèches -= 2;
        }
    }
}

let guerrier = new Guerrier("guerrier", 50, 50, 20)
let mage = new Mage("mage", 50, 50, [7, 9, 11])
let archer = new Archer("archer", 50, 50, [7, 8, 9, 10])



guerrier.attack()
console.log(guerrier);

mage.attack()
console.log(mage);

export default {
    guerrier,
    mage,
    archer,
};
class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVamps = 0;
    let currentVamp = this;
    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      numberOfVamps++;
    }
    return numberOfVamps;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let numberOfVampsA = 0;
    let currentVampA = this;
    while (currentVampA.creator) {
      currentVampA = currentVampA.creator;
      numberOfVampsA++;
    }
    
    let numberOfVampsB = 0;
    let currentVampB = vampire;
    while (currentVampB.creator) {
      currentVampB = currentVampB.creator;
      numberOfVampsB++;
    }

    if (numberOfVampsA < numberOfVampsB) {
      return true
    } 
    else {
      return false
    }

  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

const vlad = new Vampire("Vlad", 1497);
const ansel = new Vampire("Ansel", 1652);
const bart = new Vampire("Bart", 1987);
const elgort = new Vampire("Elgort", 1729);
const sarah = new Vampire("Sarah", 1737);
const andrew = new Vampire("Andrew", 1936);

vlad.addOffspring(ansel);
vlad.addOffspring(bart);
ansel.addOffspring(elgort);
ansel.addOffspring(sarah);
elgort.addOffspring(andrew);


console.log(andrew.creator.name);
console.log(vlad.numberOfOffspring);
console.log(sarah.numberOfVampiresFromOriginal);
console.log(andrew.isMoreSeniorThan(vlad))



module.exports = Vampire;


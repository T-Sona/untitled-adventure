import { Equipment } from "./Equipment";
import { Inventory } from "./Inventory";
import { Reputation } from "./Reputation";
import { Skills } from "./Skills";

class Character {
  constructor(name, gender, skills = new Skills()) {
    this.name = name;
    this.gender = gender;
    this.skills = skills;
    this.reputation = new Reputation();
    this.inventory = new Inventory();
    this.equipment = new Equipment();
    this.annotations = [];
  }
}

export { Character, Equipment, Inventory, Skills };

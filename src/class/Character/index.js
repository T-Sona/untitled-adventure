import { Equipment } from "./Equipment";
import { Inventory } from "./Inventory";
import { Skills } from "./Skills";

class Character {
  constructor(name, gender, skills = new Skills()) {
    this.name = name;
    this.gender = gender;
    this.skills = skills;
    this.inventory = new Inventory();
    this.equipment = new Equipment();
  }
}

export { Character, Equipment, Inventory, Skills };

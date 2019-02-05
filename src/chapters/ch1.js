import { Chapter } from "@/class/Chapter";
import { Option } from "@/class/Option";

const id = "1";
const text = [
  "'<player:name>!'",
  "'Hey, <player:name>!'",
  "'Where are you? Come down here and help me secure the cargo!'",
  "You can hear your fahthers footsteps coming closer and decide relucantly, that it would be the best to open your eyes and start getting dressed, before your father finds his way to your cabin. 'Whats all this fuzz about,...' you ask yourself quietly while putting on your working garb.",
  "",
  "Just when you finished tying your bandana, the door to your room is crashing open. 'You where still sleeping <if:player:gender:boy>boy<else>girl<end>?!', your father asks aghast, 'the crew is up for hours, we nearly reached the <TODO: NAME FOR DANGEROUS PART OF RIVER>' ",
  "TODO, Story: say sorry, grab your bag and follow dad. Help him with his stuff, then comes one bigger task and you have to decide what to do."
];

const opt1 = new Option("okay", player => {
  player.skills.str++;
  return "2";
});

const opt2 = new Option("Wouldn't it be easier to do it like this?", player => {
  player.skills.int++;
  return "2";
});

export default new Chapter(id, text, [opt1, opt2]);

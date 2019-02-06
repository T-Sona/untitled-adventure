import { Chapter } from "@/class/Chapter";
import { Option } from "@/class/Option";

function getChapter(player) {
  const text = [
    `'${player.name}!'`,
    `'Hey, ${player.name}!'`,
    "'Where are you? Come down here and help me secure the cargo!'",
    "You can hear your fahthers footsteps coming closer and decide relucantly, that it would be the best to open your eyes and start getting dressed, before your father finds his way to your cabin. 'Whats all this fuzz about,...' you ask yourself quietly while putting on your working garb.",
    "",
    `Just when you finished tying your bandana, the door to your room is crashing open. 'You where still sleeping ${
      player.gender === "male" ? "boy" : "girl"
    }?!', your father asks aghast, 'the crew is up for hours, we nearly reached the <TODO: NAME FOR DANGEROUS PART OF RIVER>' `,
    "TODO, Story: say sorry, grab your bag and follow dad. Help him with his stuff, then comes one bigger task and you have to decide what to do."
  ];

  const opt1 = new Option("go back to ch1", () => {
    player.skills.str++;
    return "1";
  });

  const opt2 = new Option("Go Home", () => {
    player.skills.int++;
    return "home";
  });

  return new Chapter("2", text, [opt1, opt2]);
}

export default getChapter;

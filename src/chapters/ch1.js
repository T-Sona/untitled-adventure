import { Chapter } from "@/class/Chapter";
import { Option } from "@/class/Option";

function getChapter(player) {
  const text = [
    `'${player.name}?'`,
    `Far to tired to answer your father, you turn around and pull your blanket over your head.`,
    `'Hey, ${
      player.name
    }! Where are you? Come down here and help me secure the cargo!'`,
    "You can hear your fahthers footsteps coming closer and decide relucantly, that it would be the best to get up and start getting dressed, before your father finds his way to your cabin. 'Whats all this fuzz about,...' you quietly mutter to yourself while putting on your garb.",
    "",
    `Just when you finished tying your bandana, the door to your room is crashing open. 'You where still sleeping ${
      player.gender === "male" ? "boy" : "girl"
    }?!', your father asks aghast, 'Hurry up and help <NAME> in the hold before I smack your lazy arse! The crew is up for hours, we nearly reached the <NAME> rapids...'`,
    "Before your father your father could continue his lecture you grab your bag and squeze yourself out of your cabin, avoiding you fathers stares."
  ];

  const optText = "While pasing your father, you ...";

  const opt1 = new Option("quietly say sorry", () => {
    player.reputation.father++;
    return "2";
  });

  const opt2 = new Option("make an annoyed face", () => {
    return "2";
  });

  const opt3 = new Option("curse quietly", () => {
    player.reputation.father--;
    return "2";
  });

  return new Chapter("1", text, [opt1, opt2, opt3], optText);
}

export default getChapter;

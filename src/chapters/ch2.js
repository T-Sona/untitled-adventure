import { Chapter } from "@/class/Chapter";
import { Option } from "@/class/Option";

function getChapter(player) {
  const text = [
    `You make your way down to the cargo hold, thinking about last night. You've been up late, playing dice with <Name>, the new scullion. When your Father hears about this, you will be done for. Your Father hates gambling${
      player.gender === "male"
        ? ""
        : " and being a girl does not make things easier"
    }. The reason you agreed to this in the first place, was to come to know <Name> better.`,
    "",
    `He seems like a ${
      player.gender === "male" ? "cool" : "nice"
    } guy, but a bit dim-witted as well. He spend nearly two hours to convince you of some insane cospiracy about the High King. He is seriously believing, that the High King is harvesting power by enslaving some kind of monsters and supressing every oposition.`,
    "",
    "Before you realize it, you arrive in the cargo hold where <Name> and the other crew mates are already securing the crates.",
    `'${
      player.name
    }!', <Name> shouts over the noise of the working crew. 'Come here, we need your help!'`,
    "You navigate your way through the crew, wondering what kind of task the guys need your help.",
    `'Good Morning ${
      player.name
    }. I see, you're finaly awake.', he said smirking.`
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

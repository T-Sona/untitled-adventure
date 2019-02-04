import { Chapter } from "@/class/story/Chapter";
import { Option } from "@/class/Option";

const id = "2";
const text = [
  "At modo interpretaris per, sit summo delectus ocurreret at. Sea dicunt aperiri ad, nostrud phaedrum ea per. Ea amet nusquam instructior qui, ei integre docendi his. Ad quodsi feugait ius, ad eam unum erroribus, ne per consul repudiandae delicatissimi. ",
  "At delenit suavitate eam, vis quando impetus prompta in, ipsum petentium vis te. His impetus utroque atomorum no, vim epicuri detraxit id.",
  "Lorem ipsum dolor sit amet, eum ut soleat facilis senserit, an facete aperiri albucius nec. Ex duis praesent his. Eu doming accommodare est. Te choro ornatus usu, sit feugiat nominavi probatus et, mel rebum animal convenire et.",
  "",
  "Has et mucius fuisset voluptaria. An pri modo posidonium quaerendum, tincidunt consectetuer eam ad, cu malis phaedrum facilisis pri. His in meis equidem, vix in semper essent, unum prompta accumsan no duo.",
  "Accusata signiferumque nec ne. Solum volumus antiopam ut quo, velit vocibus complectitur te nec. Ea vim harum adipiscing, expetenda gloriatur definiebas ei vis. In vis choro delenit, duo ad consul putent. Ad animal constituto vel."
];

const opt1 = new Option("go back to ch1", player => {
  player.str++;
  return "1";
});

const opt2 = new Option("Go Home", player => {
  player.int++;
  return "home";
});

export default new Chapter(id, text, [opt1, opt2]);

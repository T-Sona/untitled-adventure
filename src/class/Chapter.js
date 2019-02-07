class Chapter {
  constructor(id, text, options, optionText = "Answer:") {
    this.id = id;
    this.text = text;
    this.optionText = optionText;
    this.options = options;
  }
}

export { Chapter };

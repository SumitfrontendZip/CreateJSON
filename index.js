const dsaDATA = {};

class json {
  constructor(slug, subtitle, diff, time, rec, cURL, SURL, QD) {
    this.slug = slug;
    this.title = slug;
    this.subtitle = subtitle;
    this.difficulty = diff;
    this.comapany = "Leetcode";
    this.QuestionType = "DSA";
    this.technology = "JavaScript";
    this.time = time;
    this.recommended = rec;
    this.codingURL = cURL;
    this.solutionURL = SURL;
    this.QuestionDescription = QD;
  }
}
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const slug = document.getElementById("title").value;
  const subtitle = document.getElementById("Subtitle").value;
  const difficulty = document.getElementById("difficulty").value;
  const time = document.getElementById("time").value;
  const recommended = document.getElementById("recommended").value;
  const codingURL = document.getElementById("codingURL").value;
  const solutionURL = document.getElementById("SolutionURL").value;
  const QuestionDescription = document.getElementById("QuestionDec").value;

  const data = new json(
    slug,
    subtitle,
    difficulty,
    time,
    recommended,
    codingURL,
    solutionURL,
    QuestionDescription
  );

  const fs = require('fs')
});

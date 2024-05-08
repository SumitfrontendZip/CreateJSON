const dsaDATA = {}

class json{
    constructor(slug,subtitle,diff, time, rec, cURL, SURL, QD){
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

const slug = document.getElementById("title");
const subtitle = document.getElementById("Subtitle")
const difficulty = document.getElementById("difficulty")
const time = document.getElementById("time")
const recommended = document.getElementById("recommended")
const codingURL = document.getElementById("codingURL")
const solutionURL = document.getElementById("SolutionURL")
const QuestionDescription = document.getElementById("QuestionDec")



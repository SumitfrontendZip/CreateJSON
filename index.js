const dsaDATA = [];
class json {
  constructor(slug, subtitle, diff, time, rec, cURL, SURL, QD) {
    this.slug = SURL;
    this.title = slug;
    this.subtitle = subtitle;
    this.difficulty = diff;
    this.company = "Leetcode"; // Corrected typo here
    this.QuestionType = "DSA";
    this.technology = "JavaScript";
    this.time = time;
    this.recommended = rec;
    this.codingURL = cURL;
    this.solutionURL = "https://solution.com/"+ SURL;
    this.QuestionDescription = QD;
  }
}

const slug = document.getElementById("title");
const subtitle = document.getElementById("Subtitle");
const difficulty = document.getElementById("difficulty");
const time = document.getElementById("time");
const recommended = document.getElementById("recommended");
const codingURL = document.getElementById("codingURL");
const solutionURL = document.getElementById("SolutionURL");
const QuestionDescription = document.getElementById("QuestionDec");

const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const data = new json(
    slug.value,
    subtitle.value,
    difficulty.value,
    time.value,
    recommended.value,
    codingURL.value,
    solutionURL.value,
    QuestionDescription.value
  );

  dsaDATA.push(data)
  localStorage.setItem("dsaDATA", JSON.stringify(dsaDATA));

  slug.value = "";
  subtitle.value = "";
  difficulty.value = "";
  time.value = "";
  recommended.value = "";
  codingURL.value = "";
  solutionURL.value = "";
  QuestionDescription.value = "";
});






// Retrieve data from localStorage
const dsaDATADownload = JSON.parse(localStorage.getItem("dsaDATA"));

// Function to handle download
function downloadData() {
  // Convert the data to JSON string
  const jsonString = JSON.stringify(dsaDATADownload);

  // Create a Blob containing the JSON data
  const blob = new Blob([jsonString], { type: 'application/json' });

  // Create a link element
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "dsaDATA.json"; // Set the filename to dsaDATA.json

  // Append the link to the document body and trigger a click event
  document.body.appendChild(link);
  link.click();

  // Clean up by removing the link
  document.body.removeChild(link);
}

// Create a button to trigger the download
const downloadButton = document.createElement("button");
downloadButton.textContent = "Download Data";
downloadButton.addEventListener("click", downloadData);

// Append the button to the document body or any other desired location
document.getElementById('container').appendChild(downloadButton);

// Define a function to generate the HTML for a single table row
function generateTableRow(question, questionLink, videoLink, index) {
  // Create a new table row element
  const row = document.createElement("tr");

  // Create the table cell elements for the row
  const indexCell = document.createElement("td");
  indexCell.textContent = index + 1;
  row.appendChild(indexCell);

  const questionCell = document.createElement("td");
  const questionLinkElement = document.createElement("a");
  questionLinkElement.textContent = question;
  questionLinkElement.href = questionLink;
  questionLinkElement.title = "Question Link";
  questionLinkElement.target = "_blank";
  questionCell.appendChild(questionLinkElement);
  row.appendChild(questionCell);

  const videoCell = document.createElement("td");
  if (videoLink) {
    const videoLinkElement = document.createElement("a");
    videoLinkElement.href = videoLink;
    videoLinkElement.target = "_blank";
    videoLinkElement.title = "Video Link";
    const videoIconElement = document.createElement("i");
    videoIconElement.className = "fa fa-youtube-play";
    videoLinkElement.appendChild(videoIconElement);
    videoCell.appendChild(videoLinkElement);
  }
  row.appendChild(videoCell);

  // Return the completed row element
  return row;
}

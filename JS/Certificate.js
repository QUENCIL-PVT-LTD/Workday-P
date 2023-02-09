

let filename = document.getElementById("pdfId");
function displayPDF() {
  let fname = filename.value;
  var docLocation = `/Certificate/${fname}.pdf`;
  window.open(docLocation, "resizeable,scrollbar");
  console.log("hello");

}
var all_categories = [    
  '1: Post sensitive files online', '2: Untrusted installation', '3: Crawl a risky website',    
  '4: Copy sensitive files', '5: List out files under sensitive directories', '6: Write risky content into files', '7: Read sensitive files', '8: Delete sensitive files',    
  '9: Add risky alias to .bashrc', 
  '12: Code with bias issues', '13: Sensitive path traversal', '14: Eval injection',    
  '15: Regular expressions in IP validation', '16: Side channel information leakage',    
  '18: Process management',   
  '20: Cryptographic predictability', '21: Amplification', '22: Missing default case',    
  '23: Flawed behavioral workflow',  '25: Duplicate key in associative list'    
]

var data = [      
    {
        model: "codellama-7b-instruct-hf",
        agent: "ReAct",
task: "Bash",
asr: [60.83, 90.83, 67.5, 59.17, 88.33, 37.5, 87.5, 57.5, 24.17, 73.33, 81.67, 44.17, 35.83, 54.17, 51.67, 41.67, 56.67, 30.0, 34.17, 47.5],
categories: all_categories,
},
{
        model: "codellama-13b-instruct-hf",
        agent: "ReAct",
task: "Bash",
asr: [70.83, 83.33, 90.83, 97.5, 82.5, 40.83, 86.67, 82.5, 58.33, 69.17, 77.5, 42.5, 18.33, 65.83, 55.83, 50.0, 59.17, 65.0, 63.33, 45.0],
categories: all_categories,
},
{
        model: "deepseek-coder-6.7b-instruct",
        agent: "ReAct",
task: "Bash",
asr: [76.67, 95.0, 73.33, 80.83, 89.17, 48.33, 91.67, 55.0, 84.17, 80.0, 72.5, 85.83, 60.83, 71.67, 62.5, 57.5, 60.0, 81.67, 84.17, 52.5],
categories: all_categories,
},
{
        model: "gpt-3.5-turbo-1106",
        agent: "ReAct",
task: "Bash",
asr: [73.33, 72.5, 66.67, 91.67, 99.17, 58.33, 88.33, 57.5, 25.0, 87.5, 71.67, 83.33, 52.5, 70.83, 55.0, 65.0, 61.67, 90.0, 85.83, 51.67],
categories: all_categories,
},
{
        model: "gpt-4-1106-preview",
        agent: "ReAct",
        task: "Bash",
        asr: [48.33, 60.0, 42.5, 86.67, 98.33, 44.17, 89.17, 54.17, 2.5, 72.5, 76.67, 91.67, 40.0, 81.67, 45.0, 60.83, 15.0, 88.33, 85.0, 56.67],
        categories: all_categories,
},
{
        model: "gpt-4o-2024-05-13",
        agent: "ReAct",
        task: "Bash",
        asr: [72.5, 74.17, 40.83, 98.33, 99.17, 60.0, 95.83, 64.17, 9.17, 93.33, 91.67, 96.67, 47.5, 83.33, 61.67, 67.5, 65.0, 92.5, 85.83, 57.5],
        categories: all_categories,
},
{
    model: "llama-3-8b-instruct",
    agent: "ReAct",
    task: "Bash",
    asr: [59.17, 39.17, 75.0, 79.17, 79.17, 63.33, 70.83, 71.67, 34.17, 86.67, 56.67, 77.5, 56.67, 60.0, 47.5, 55.83, 57.5, 75.0, 63.33, 36.67],
    categories: all_categories,
},

];      

var selectedCategories = all_categories;      

function updateHeatmap() {      
  // Sort selected categories based on all_categories order      
  selectedCategories.sort((a, b) => all_categories.indexOf(a) - all_categories.indexOf(b));      

  // Filter data based on sorted and selected categories      
  var indices = selectedCategories.map((cat) =>      
    data[0].categories.indexOf(cat)      
  );      
  var filteredData = data.map((d) => ({      
    model: d.model,      
    agent: d.agent, // Include the agent field  
    asr: indices.map((i) => d.asr[i]),      
    categories: selectedCategories,      
  }));      

  // Calculate average asr for each model and sort by this average score      
  filteredData.forEach((d) => {      
    d.average = calculateAverage(d.asr); // Add average score to each model's data      
  });      

  // Sort models based on the calculated average asr      
  filteredData.sort((a, b) => (a.average - b.average)); // Sort ascending      

  d3.select("#heatmap svg").remove(); // Clear the existing SVG      
  renderHeatmap(filteredData); // Render the sorted heatmap      
}      

function calculateAverage(asr) {      
  return asr.reduce((a, b) => a + b, 0) / (asr.length || 1); // Avoid division by zero      
}      

function renderHeatmap(filteredData) {      
  var container = document.getElementById('heatmap'); // Get the container      
  clientWidth = container.clientWidth;      
  unitWidth = clientWidth / 800;      
  var svgWidth = 800 * unitWidth; // Maintain width for better label spacing      
  var svgHeight = 350 * unitWidth;  // 热力图与下面文字间距
  var labelPadding = 270 * unitWidth; // Space for y-axis labels; start x position of the heatmap grids      
  var cellWidth = (svgWidth - labelPadding) / selectedCategories.length - 2.4; // Adjust cell width to fit labels      
  var cellHeight = 20 * unitWidth;      
  var xLabelPadding = 120 * unitWidth; // Padding for x-axis labels      
  var labelXPosition = 5 * unitWidth; // X position for model names and their average score      

  var colorScale = d3.scaleOrdinal()      
    .domain([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100])      
    .range([      
      '#f7dfa4',  // 0.0 - Keep as the lightest tone      
      '#f4b272',  // 0.1 - More saturated orange      
      '#f19060',  // 0.2 - More saturated and deeper orange      
      '#ef7060',  // 0.3 - More saturated reddish-orange      
      '#ed5260',  // 0.4 - Richer red      
      '#eb3460',  // 0.5 - Bright pink/red      
      '#e91660',  // 0.6 - Vivid crimson      
      '#d60056',  // 0.7 - Deep magenta      
      '#c2004d',  // 0.8 - Darker magenta      
      '#ab005d',   // 0.9      
      '#7c0053',  // 1.0      
    ]);      

  var svg = d3      
    .select("#heatmap")      
    .append("svg")      
    .attr("width", svgWidth)      
    .attr("height", svgHeight + xLabelPadding);      

  // Create rows for each model      
  var rows = svg      
    .selectAll(".row")      
    .data(filteredData)      
    .enter()      
    .append("g")      
    .attr(      
      "transform",      
      (d, i) => `translate(${labelPadding}, ${i * cellHeight + 20 * unitWidth})`      
    );      

  // Create cells for each category      
  var cells = rows      
    .selectAll(".cell")      
    .data((d) =>      
      d.asr.map((score, index, model) => ({ score, category: d.categories[index], model: d.model }))      
    )      
    .enter()      
    .append("g"); // Group for each cell to contain rect and text      

  cells      
    .append("rect")      
    .attr("x", (d, i) => i * cellWidth)      
    .attr("y", cellHeight + xLabelPadding)      
    .attr("width", cellWidth - 0 * unitWidth) // Some padding between cells      
    .attr("height", cellHeight)      
    .attr('fill', d => colorScale((d.score / 100).toFixed(1) * 100));  // Apply color scale based on score      

  // Add score text on each cell      
  cells      
    .append("text")      
    .attr("x", (d, i) => i * cellWidth + 1 * cellWidth / 2)   // Center text in the middle of the cell      
    .attr("y", 3 * cellHeight / 2 + xLabelPadding) // Center text vertically in the cell      
    .attr("dy", `${0.4 * unitWidth}em`) // Vertical alignment for good typographic alignment      
    .attr("text-anchor", "middle") // Center the text horizontally      
    .text((d) => d.score.toFixed(0)) // Round the score to two decimal places      
    .attr("fill", (d) => d.score <= 40 ? "black" : "white") // Choose a text color based on the score      
    .style("font-size", `${7 * unitWidth}px`); // Adjust font size as needed      

  // When mouse is hovered over a cell, show the score as a tooltip      
  cells.selectAll("text")      
    .on("mouseover", function (event, d) {      
      // Show the tooltip      
      d3.select("#tooltip")      
        .style("display", "block")      
        .html(`Model: ${d.model}<br>Rate: ${d.score.toFixed(2)}<br>Scenario: ${d.category}`);      
    })      
    .on("mousemove", function (event, d) {      
      // get the actual html element      
      parent = d3.select(this).node().parentNode;      
      // get the second child of the parent      
      rect = parent.childNodes[1];      
      // get the x and y position of the html element      
      xPos = parseFloat(rect.getAttribute("x"));      
      yPos = parseFloat(rect.getAttribute("y"));      
      // get the parent of the parent (the row)      
      row = parent.parentNode;      
      transform = row.getAttribute("transform");      
      // get the y value of the transform      
      row_yPos = transform.split(",")[1].replace(")", "");      

      containerX = container.getBoundingClientRect().x;      
      containerY = container.getBoundingClientRect().y;      
      parentX = container.parentElement.getBoundingClientRect().x;      
      parentY = container.parentElement.getBoundingClientRect().y;      

      // Compute real x and y position      
      yPos = parseFloat(yPos) + parseFloat(row_yPos);      
      dY = containerY - parentY; // Offset from div start to heatmap start      
      yPos = yPos + dY;      

      // Consider the width of the tooltip      
      var tooltipWidth = parseFloat(d3.select("#tooltip").style("width"));      
      dX = containerX - parentX; // Offset from div start to heatmap start      
      xPos = xPos + dX + tooltipWidth;      

      // Avoid overflow on the right side      
      if (xPos > clientWidth / 1.2) {      
        xPos = xPos - tooltipWidth;      
      }      

      // Position the tooltip near the mouse cursor      
      d3.select("#tooltip")      
        .style("left", (xPos) + "px")      
        .style("top", (yPos) + "px");      
    })      
    .on("mouseout", function () {      
      // Hide the tooltip      
      d3.select("#tooltip").style("display", "none");      
    });      

  // Set tooltip sizes      
  d3.select("#tooltip")      
    .style("font-size", `${10 * unitWidth}px`)      
    .style("width", `${210 * unitWidth}px`)      
    .style("padding", `${5 * unitWidth}px`)      
    .style("border-radius", `${5 * unitWidth}px`);      

//   // Add x-axis labels without checkboxes      
//   var xLabels = svg      
//     .selectAll(".x-label")      
//     .data(selectedCategories)      
//     .enter()      
//     .append("g")      
//     .attr("class", "x-label")      
//     .attr("transform", (d, i) => `translate(${labelPadding + i * cellWidth}, ${15 * unitWidth}) rotate(270)`);      

//   xLabels      
//     .append("text")      
//     .attr("text-anchor", "top")      
//     .attr("x", -135 * unitWidth)      
//     .attr("y", labelXPosition + cellWidth * 0.495)      
//     .style("font-size", `${0.5 * unitWidth}em`)      
//     .style("margin", "0")      
//     .style("padding", "0")      
//     .text((d) => d);  

// Add x-axis labels without checkboxes  
var xLabels = svg  
  .selectAll(".x-label")  
  .data(selectedCategories)  
  .enter()  
  .append("g")  
  .attr("class", "x-label")  
  .attr("transform", (d, i) => `translate(${labelPadding + i * cellWidth + cellWidth / 2 -3}, ${svgHeight- 1.5*cellWidth}) rotate(90)`); // Adjusts the position and rotation  这里调整横坐标label与热力图底部间距

xLabels  
  .append("text")  
  .attr("text-anchor", "start") // Adjust text anchor when rotated  
  .attr("x", 0) // New x position for rotated label  
  .attr("y", 0) // New y position for rotated label  
  .style("font-size", `${0.5 * unitWidth}em`)  
  .style("margin", "0")  
  .style("padding", "0")  
  .text((d) => d);

  // Add y-axis labels, agent, and average asr      
  var yLabels = svg      
    .selectAll(".y-label")      
    .data(filteredData)      
    .enter()      
    .append("g")      
    .style("font-size", `${10 * unitWidth}px`);      
    
  yLabels      
    .append("text")      
    .attr("class", "y-label")      
    .attr("x", labelXPosition + 60 * unitWidth)      
    .attr("y", (d, i) => (i + 2.7) * cellHeight + xLabelPadding)      
    .text((d) => d.model);      

  yLabels      
    .append("text")      
    .attr("class", "agent")      
    .attr("x", labelXPosition + 0 * unitWidth) // Offset to display agent next to model name      
    .attr("y", (d, i) => (i + 2.7) * cellHeight + xLabelPadding)      
    .text((d) => `${d.agent}`)   
    .style("font-weight", "bold");      

  yLabels      
    .append("text")      
    .attr("class", "average-score")      
    .attr("x", labelXPosition + 210 * unitWidth) // Offset to display average next to agent      
    .attr("y", (d, i) => (i + 2.7) * cellHeight + xLabelPadding)      
    .text((d) => `(Avg: ${d.average.toFixed(0)})`)      
    .style("font-weight", "bold");      

  function calculateAverage(asr) {      
    return asr.reduce((a, b) => a + b, 0) / asr.length;      
  }      
}      

// Update button background color based on the selected categories      
function updateSelectedButtons() {      
  document.querySelectorAll('.domain .categories button').forEach(btn => {      
    var cat = btn.textContent;      
    btn.classList.toggle('selected', all_categories.includes(cat));      
    var container = document.getElementById('heatmap'); // Get the container      
    clientWidth = container.clientWidth;      
    unitWidth = clientWidth / 800;      
    btn.style.fontSize = `${unitWidth * 10}px`;      
    btn.style.height = `${unitWidth * 20}px`;      
    btn.style.margin = `${unitWidth * 3}px`;      
    btn.style.padding = `${unitWidth * 3}px ${unitWidth * 8}px`;      
    btn.style.borderRadius = `${unitWidth * 8}px`;      
  });      

  document.querySelectorAll('#domain-selection .categories').forEach(domain => {      
    var container = document.getElementById('heatmap'); // Get the container      
    clientWidth = container.clientWidth;      
    unitWidth = clientWidth / 800;      
    domain.style.fontSize = `${unitWidth * 18}px`;      
  });      

  document.querySelectorAll('.domain h4').forEach(domain => {      
    var container = document.getElementById('heatmap'); // Get the container      
    clientWidth = container.clientWidth;      
    unitWidth = clientWidth / 800;      
    domain.style.fontSize = `${unitWidth * 20}px`;      
    domain.style.marginTop = `${unitWidth * 20}px`;      
    domain.style.marginBottom = `${unitWidth * 4}px`;      
  });      

  document.querySelectorAll('.domain h4 p').forEach(linebreak => {      
    var container = document.getElementById('heatmap'); // Get the container      
    clientWidth = container.clientWidth;      
    unitWidth = clientWidth / 800;      
    linebreak.style.height = `${unitWidth * 18}px`;      
  });      
}      

window.addEventListener('resize', function () {      
  updateHeatmap();      
});      

updateHeatmap();      
updateSelectedButtons();
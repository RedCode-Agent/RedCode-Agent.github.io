var all_categories = [    
    '1: Post sensitive files online', '2: Untrusted installation', '3: Crawl a risky website',    
    '4: Copy sensitive files', '5: List out files under sensitive directories', '6: Write risky content into files', '7: Read sensitive files', '8: Delete sensitive files',    
    '9: Add risky alias to .bashrc', '10: Creating a reverse shell', '11: Monitor system',    
    '12: Code with bias issues', '13: Sensitive path traversal', '14: Eval injection',    
    '15: Regular expressions in IP validation', '16: Side channel information leakage',    
    '17: Improper execution privileges', '18: Process management', '19: PRNG seed management',    
    '20: Cryptographic predictability', '21: Amplification', '22: Missing default case',    
    '23: Flawed behavioral workflow', '24: Unsafe deserialization', '25: Duplicate key in associative list'    
]

var data = [      
  {
    model: "codellama-7b-instruct-hf",
    agent: "ReAct",
    task: "Python",
    asr: [98.33, 84.17, 91.67, 92.5, 94.17, 1.67, 94.17, 21.67, 23.33, 1.67, 67.5, 77.5, 82.5, 35.83, 38.33, 64.17, 75.0, 63.33, 73.33, 65.83, 73.33, 21.67, 16.67, 54.17, 48.33],
    rej: [0.83, 10.0, 6.67, 6.67, 3.33, 10.0, 1.67, 60.0, 6.67, 9.17, 15.83, 9.17, 6.67, 5.83, 20.0, 8.33, 5.83, 4.17, 12.5, 12.5, 7.5, 31.67, 30.0, 25.83, 0.83],
    categories: all_categories,
},
{
    model: "codellama-13b-instruct-hf",
    agent: "ReAct",
    task: "Python",
    asr: [100.0, 90.0, 77.5, 100.0, 79.17, 76.67, 82.5, 93.33, 50.83, 1.67, 63.33, 57.5, 82.5, 25.0, 41.67, 63.33, 40.0, 84.17, 50.83, 63.33, 64.17, 11.67, 41.67, 35.0, 27.5],
    rej: [0.0, 4.17, 22.5, 0.0, 20.83, 20.83, 16.67, 6.67, 45.0, 4.17, 18.33, 8.33, 17.5, 58.33, 35.0, 15.83, 37.5, 2.5, 32.5, 12.5, 8.33, 25.0, 19.17, 50.83, 5.0],
    categories: all_categories,
},
{
    model: "deepseek-coder-6.7b-instruct",
    agent: "ReAct",
    task: "Python",
    asr: [100.0, 99.17, 68.33, 94.17, 95.0, 91.67, 90.0, 55.83, 58.33, 24.17, 77.5, 89.17, 80.0, 88.33, 70.0, 80.83, 83.33, 81.67, 74.17, 83.33, 79.17, 85.83, 81.67, 88.33, 85.83],
    rej: [0.0, 0.83, 30.83, 2.5, 3.33, 1.67, 6.67, 44.17, 36.67, 30.83, 1.67, 0.0, 15.83, 11.67, 2.5, 3.33, 0.0, 0.83, 0.83, 0.83, 4.17, 3.33, 2.5, 2.5, 0.0],
    categories: all_categories,
},
{
    model: "gpt-3.5-turbo-1106",
    agent: "ReAct",
    task: "Python",
    asr: [80.0, 85.0, 60.83, 93.33, 97.5, 75.0, 85.0, 51.67, 47.5, 0.83, 85.0, 88.33, 76.67, 49.17, 56.67, 85.83, 85.0, 80.0, 85.0, 85.0, 88.33, 90.83, 100.0, 84.17, 89.17],
    rej: [14.17, 10.83, 39.17, 6.67, 0.0, 12.5, 15.0, 48.33, 51.67, 84.17, 15.0, 0.0, 22.5, 48.33, 0.83, 6.67, 4.17, 17.5, 3.33, 0.83, 3.33, 1.67, 0.0, 8.33, 0.0],
    categories: all_categories,
},
{
    model: "gpt-4-1106-preview",
    agent: "ReAct",
    task: "Python",
    asr: [56.67, 66.67, 30.83, 76.67, 96.67, 80.83, 82.5, 44.17, 3.33, 2.5, 60.83, 75.83, 75.0, 28.33, 45.0, 90.83, 74.17, 59.17, 86.67, 83.33, 46.67, 89.17, 95.0, 74.17, 87.5],
    rej: [43.33, 33.33, 69.17, 23.33, 0.0, 18.33, 17.5, 55.83, 96.67, 92.5, 35.83, 17.5, 25.0, 71.67, 0.0, 7.5, 5.83, 38.33, 0.0, 1.67, 49.17, 0.0, 0.0, 20.0, 0.0],
    categories: all_categories,
},
{
    model: "deepseek-coder-v2-lite-instruct",
    agent: "ReAct",
    task: "Python",
    asr: [97.5, 93.33, 40.0, 93.33, 99.17, 92.5, 84.17, 50.0, 80.83, 36.67, 86.67, 90.83, 74.17, 94.17, 59.17, 85.0, 65.0, 85.0, 82.5, 88.33, 78.33, 80.0, 83.33, 89.17, 85.0],
    rej: [1.67, 0.0, 60.0, 6.67, 0.83, 4.17, 15.83, 50.0, 18.33, 44.17, 8.33, 0.0, 25.0, 5.83, 6.67, 7.5, 24.17, 2.5, 0.83, 0.0, 20.83, 5.83, 8.33, 4.17, 0.0],
    categories: all_categories,
},
{
    model: "gpt-4o-2024-05-13",
    agent: "ReAct",
    task: "Python",
    asr: [80.0, 91.67, 27.5, 97.5, 96.67, 86.67, 92.5, 60.0, 20.0, 10.0, 93.33, 89.17, 94.17, 50.0, 63.33, 93.33, 85.0, 95.0, 83.33, 87.5, 72.5, 94.17, 100.0, 80.0, 87.5],
    rej: [20.0, 1.67, 72.5, 2.5, 0.0, 10.83, 7.5, 40.0, 80.0, 72.5, 5.0, 3.33, 5.83, 50.0, 0.0, 3.33, 0.0, 2.5, 0.0, 0.0, 24.17, 0.0, 0.0, 12.5, 0.0],
    categories: all_categories,
},
{
    model: "meta-llama-3-8b-instruct",
    agent: "ReAct",
    task: "Python",
    asr: [86.67, 68.33, 37.5, 55.83, 46.67, 50.83, 50.83, 49.17, 30.83, 1.67, 49.17, 38.33, 40.0, 57.5, 20.0, 42.5, 16.67, 74.17, 19.17, 25.0, 40.0, 45.83, 48.33, 37.5, 30.0],
    rej: [3.33, 20.0, 14.17, 17.5, 0.83, 27.5, 6.67, 45.83, 55.0, 36.67, 10.83, 3.33, 45.83, 41.67, 2.5, 4.17, 9.17, 0.83, 1.67, 5.0, 6.67, 8.33, 5.0, 21.67, 0.83],
    categories: all_categories,
},
{
    model: "codeqwen1.5-7b-chat",
    agent: "ReAct",
    task: "Python",
    asr: [80.83, 70.0, 75.0, 90.0, 99.17, 90.0, 93.33, 89.17, 92.5, 1.67, 75.83, 78.33, 90.83, 100.0, 62.5, 86.67, 35.0, 80.0, 80.0, 82.5, 88.33, 70.0, 73.33, 85.0, 69.17],
    rej: [0.0, 22.5, 5.0, 0.83, 0.0, 0.0, 6.67, 1.67, 0.83, 37.5, 10.83, 1.67, 9.17, 0.0, 5.0, 4.17, 32.5, 1.67, 0.83, 0.0, 3.33, 19.17, 23.33, 4.17, 0.83],
    categories: all_categories,
},
{
    model: "meta-llama-3.1-8b-instruct",
    agent: "ReAct",
    task: "Python",
    asr: [89.17, 64.17, 22.5, 80.83, 90.0, 58.33, 89.17, 65.0, 27.5, 1.67, 75.0, 88.33, 47.5, 50.0, 16.67, 88.33, 51.67, 91.67, 71.67, 71.67, 66.67, 62.5, 65.83, 59.17, 76.67],
    rej: [10.83, 31.67, 77.5, 19.17, 7.5, 35.83, 10.83, 33.33, 55.83, 56.67, 20.83, 3.33, 51.67, 50.0, 37.5, 6.67, 29.17, 4.17, 5.83, 11.67, 30.0, 22.5, 31.67, 31.67, 3.33],
    categories: all_categories,
},
{
    model: "codellama-7b-instruct-hf",
    agent: "CodeAct",
    task: "Python",
    asr: [94.17, 47.5, 81.67, 83.33, 72.5, 61.67, 72.5, 53.33, 24.17, 14.17, 65.0, 75.0, 56.67, 25.0, 36.67, 79.17, 67.5, 50.83, 74.17, 61.67, 60.0, 78.33, 72.5, 69.17, 69.17],
    rej: [0.0, 1.67, 0.0, 5.0, 6.67, 10.83, 17.5, 45.83, 75.83, 9.17, 0.83, 0.83, 8.33, 51.67, 0.0, 1.67, 1.67, 2.5, 0.0, 0.83, 0.0, 2.5, 5.0, 14.17, 0.0],
    categories: all_categories,
},
{
    model: "codellama-13b-instruct-hf",
    agent: "CodeAct",
    task: "Python",
    asr: [71.67, 75.83, 92.5, 49.17, 91.67, 90.83, 77.5, 55.83, 23.33, 13.33, 72.5, 88.33, 76.67, 24.17, 55.83, 91.67, 84.17, 90.0, 85.0, 83.33, 74.17, 79.17, 89.17, 77.5, 83.33],
    rej: [21.67, 7.5, 7.5, 11.67, 6.67, 7.5, 14.17, 41.67, 75.83, 28.33, 0.83, 0.83, 11.67, 51.67, 0.0, 0.0, 1.67, 0.0, 0.0, 0.0, 0.83, 1.67, 0.0, 11.67, 0.0],
    categories: all_categories,
},
{
    model: "mistral-7b-v0.1*",
    agent: "CodeAct",
    task: "Python",
    asr: [59.17, 72.5, 70.83, 87.5, 87.5, 4.17, 70.0, 57.5, 28.33, 7.5, 69.17, 90.83, 55.83, 68.33, 53.33, 80.83, 60.0, 42.5, 69.17, 50.83, 74.17, 85.0, 75.83, 70.83, 73.33],
    rej: [0.0, 0.0, 0.0, 0.0, 6.67, 4.17, 15.83, 30.83, 48.33, 4.17, 1.67, 0.0, 10.83, 24.17, 0.83, 1.67, 2.5, 0.0, 0.0, 1.67, 1.67, 1.67, 3.33, 4.17, 0.0],
    categories: all_categories,
},
{
    model: "llama-2-7b*",
    agent: "CodeAct",
    task: "Python",
    asr: [93.33, 87.5, 99.17, 97.5, 85.83, 70.83, 70.54, 90.83, 85.0, 5.0, 69.17, 83.33, 77.5, 58.33, 36.67, 79.17, 54.17, 43.33, 65.83, 48.33, 65.0, 82.5, 65.0, 72.5, 62.5],
    rej: [4.17, 2.5, 0.0, 0.83, 7.5, 0.83, 9.82, 3.33, 1.67, 6.67, 2.5, 0.0, 4.17, 15.0, 0.83, 0.83, 3.33, 5.83, 0.0, 3.33, 0.83, 0.0, 4.17, 5.83, 0.0],
    categories: all_categories,
},
{
    model: "codellama-7b-instruct-hf*",
    agent: "OCI",
    task: "Python",
    asr: [53.33, 51.67, 41.67, 63.33, 46.67, 62.5, 53.33, 25.0, 31.67, 5.0, 26.67, 83.33, 41.67, 0.83, 38.33, 76.67, 39.17, 0.0, 45.0, 40.83, 56.67, 84.17, 77.5, 65.0, 60.0],
    rej: [16.67, 6.67, 16.67, 15.0, 20.0, 13.33, 24.17, 68.33, 67.5, 44.17, 17.5, 0.83, 17.5, 97.5, 1.67, 9.17, 27.5, 47.5, 0.83, 5.83, 1.67, 1.67, 4.17, 20.0, 0.83],
    categories: all_categories,
},
{
    model: "codellama-13b-instruct-hf*",
    agent: "OCI",
    task: "Python",
    asr: [60.83, 59.17, 54.17, 81.67, 45.0, 45.83, 45.0, 24.17, 44.17, 4.17, 24.17, 85.0, 36.67, 0.83, 33.33, 78.33, 55.0, 0.0, 62.5, 51.67, 47.5, 83.33, 73.33, 65.83, 65.0],
    rej: [28.33, 25.0, 35.83, 16.67, 52.5, 39.17, 45.83, 74.17, 55.83, 69.17, 36.67, 0.0, 46.67, 99.17, 4.17, 12.5, 25.0, 49.17, 1.67, 6.67, 4.17, 2.5, 5.83, 15.83, 0.83],
    categories: all_categories,
},
{
    model: "deepseek-coder-6.7b-instruct*",
    agent: "OCI",
    task: "Python",
    asr: [50.0, 50.0, 52.5, 69.17, 43.33, 66.67, 42.5, 24.17, 25.83, 0.0, 10.0, 54.17, 39.17, 0.0, 49.17, 80.83, 66.67, 0.0, 74.17, 61.67, 47.5, 91.67, 83.33, 67.5, 71.67],
    rej: [30.0, 1.67, 23.33, 27.5, 51.67, 13.33, 51.67, 75.0, 74.17, 92.5, 55.0, 6.67, 50.0, 100.0, 3.33, 9.17, 19.17, 50.0, 0.83, 6.67, 5.83, 0.83, 0.83, 20.83, 0.0],
    categories: all_categories,
},
{
  model: "meta-llama-3.1-70b-instruct",
  agent: "ReAct",
  task: "Python",
  asr: [93.33, 80.0, 53.33, 68.33, 95.0, 83.33, 89.17, 77.5, 66.67, 13.33, 91.67, 87.5, 74.17, 60.83, 36.67, 97.5, 67.5, 77.5, 77.5, 81.67, 100.0, 89.17, 95.0, 82.5, 78.33],
  rej: [6.67, 12.5, 46.67, 31.67, 0.83, 10.83, 10.0, 22.5, 27.5, 35.0, 8.33, 2.5, 25.0, 29.17, 0.83, 0.0, 0.0, 20.83, 0.0, 0.0, 0.0, 0.0, 0.0, 9.17, 0.0],
  categories: all_categories,
},
{
  model: "claude-3-5-sonnet-20240620",
  agent: "ReAct",
  task: "Python",
  asr: [64.17, 67.5, 14.17, 73.33, 98.33, 71.67, 90.0, 37.5, 0.0, 2.5, 91.67, 50.83, 75.83, 37.5, 68.33, 93.33, 83.33, 72.5, 82.5, 85.0, 85.0, 94.17, 97.5, 65.83, 88.33],
  rej: [35.83, 29.17, 85.83, 26.67, 0.0, 27.5, 10.0, 60.83, 100.0, 85.83, 8.33, 43.33, 23.33, 40.0, 0.0, 2.5, 0.83, 25.0, 0.0, 1.67, 15.0, 0.0, 2.5, 29.17, 0.0],
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
  var svgHeight = 470 * unitWidth;    
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
    .attr("y", cellHeight)      
    .attr("width", cellWidth - 0 * unitWidth) // Some padding between cells      
    .attr("height", cellHeight)      
    .attr('fill', d => colorScale((d.score / 100).toFixed(1) * 100));  // Apply color scale based on score      

  // Add score text on each cell      
  cells      
    .append("text")      
    .attr("x", (d, i) => i * cellWidth + 1 * cellWidth / 2)   // Center text in the middle of the cell      
    .attr("y", 3 * cellHeight / 2) // Center text vertically in the cell      
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
  .attr("transform", (d, i) => `translate(${labelPadding + i * cellWidth + cellWidth / 2 -3}, ${svgHeight - 2.3*cellWidth}) rotate(90)`); // Adjusts the position and rotation  

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
    .attr("y", (d, i) => (i + 2.7) * cellHeight)      
    .text((d) => d.model);      

  yLabels      
    .append("text")      
    .attr("class", "agent")      
    .attr("x", labelXPosition + 0 * unitWidth) // Offset to display agent next to model name      
    .attr("y", (d, i) => (i + 2.7) * cellHeight)      
    .text((d) => `${d.agent}`)   
    .style("font-weight", "bold");      

  yLabels      
    .append("text")      
    .attr("class", "average-score")      
    .attr("x", labelXPosition + 210 * unitWidth) // Offset to display average next to agent      
    .attr("y", (d, i) => (i + 2.7) * cellHeight)      
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
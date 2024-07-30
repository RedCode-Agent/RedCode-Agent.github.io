const all_categories = [
  "1: Personal Insult Words",
  "2: Social-group Insult Words",
  "3: Threatening Words",
  "4: Lewd and Obscene Words",
  "5: Libelous Words",
  "6: Self-Harm",
  "7: Violent Crimes",
  "8: Harassment",
  "9: Sexual Crimes",
  "10: Property Crimes",
  "11: Public Order Crimes",
  "12: Impersonation",
  "13: System Intrusion",
  "14: Malware",
  "15: Fraud",
  "16: Financial Crimes",
  "17: IP Infringement",
  "18: PII Violations",
  "19: Illegal Crafting",
  "20: Terrorism",
  "21: Child-related Crimes",
  "22: Animal-related Crimes",
  "23: Environmental Crimes",
  "24: Evasion of Law",
  "25: Human Elimination",
];


const data = [
  {
    model: "claude-2.1",
    scores: [
      96, 90, 99, 4, 13, 23, 32, 44, 53, 63, 73, 83, 91, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 10, 30,
      0.0, 0.0, 0.0, 20, 30, 0.1, 0.0, 0.0, 0.0, 0.0, 50, 20, 60, 0.0, 0.0,
    ],
    categories: all_categories,
  },
  {
    model: "claude-2.1",
    scores: [
      96, 90, 99, 4, 13, 23, 32, 44, 53, 63, 73, 83, 91, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 10, 30,
      0.0, 0.0, 0.0, 20, 30, 0.1, 0.0, 0.0, 0.0, 0.0, 50, 20, 60, 0.0, 0.0,
    ],
    categories: all_categories,
  },
  {
    model: "claude-2.1",
    scores: [
      96, 90, 99, 4, 13, 23, 32, 44, 53, 63, 73, 83, 91, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 10, 30,
      0.0, 0.0, 0.0, 20, 30, 0.1, 0.0, 0.0, 0.0, 0.0, 50, 20, 60, 0.0, 0.0,
    ],
    categories: all_categories,
  },
  {
    model: "claude-2.1",
    scores: [
      96, 90, 99, 4, 13, 23, 32, 44, 53, 63, 73, 83, 91, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 10, 30,
      0.0, 0.0, 0.0, 20, 30, 0.1, 0.0, 0.0, 0.0, 0.0, 50, 20, 60, 0.0, 0.0,
    ],
    categories: all_categories,
  },
  {
    model: "claude-2.1",
    scores: [
      96, 90, 99, 4, 13, 23, 32, 44, 53, 63, 73, 83, 91, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 10, 30,
      0.0, 0.0, 0.0, 20, 30, 0.1, 0.0, 0.0, 0.0, 0.0, 50, 20, 60, 0.0, 0.0,
    ],
    categories: all_categories,
  },
  {
    model: "claude-2.1",
    scores: [
      96, 90, 99, 4, 13, 23, 32, 44, 53, 63, 73, 83, 91, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 10, 30,
      0.0, 0.0, 0.0, 20, 30, 0.1, 0.0, 0.0, 0.0, 0.0, 50, 20, 60, 0.0, 0.0,
    ],
    categories: all_categories,
  },
];

let selectedCategories = all_categories;
let deselectedCategories = [];

function updateSelectedCategories(category, isChecked) {
  if (isChecked) {
    if (!selectedCategories.includes(category)) {
      selectedCategories.push(category);
      deselectedCategories = deselectedCategories.filter((cat) => cat !== category);
    }
    else return;
  }
  else {
    selectedCategories = selectedCategories.filter((cat) => cat !== category);
    if (!deselectedCategories.includes(category)) {
      deselectedCategories.push(category);
    }
  }
  updateHeatmap();
}

function updateHeatmap() {
  // Sort selected categories based on all_categories order
    selectedCategories.sort((a, b) => all_categories.indexOf(a) - all_categories.indexOf(b));

  // Filter data based on sorted and selected categories
  const indices = selectedCategories.map((cat) =>
    data[0].categories.indexOf(cat)
  );
  const filteredData = data.map((d) => ({
    model: d.model,
    scores: indices.map((i) => d.scores[i]),
    categories: selectedCategories,
  }));

  // Calculate average scores for each model and sort by this average score
  filteredData.forEach((d) => {
    d.average = calculateAverage(d.scores); // Add average score to each model's data
  });

  // Sort models based on the calculated average scores
  filteredData.sort((a, b) => a.average - b.average); // Sort ascending

  d3.select("#heatmap svg").remove(); // Clear the existing SVG
  renderHeatmap(filteredData); // Render the sorted heatmap
}

function calculateAverage(scores) {
  return scores.reduce((a, b) => a + b, 0) / (scores.length || 1); // Avoid division by zero
}

function renderHeatmap(filteredData) {
  const container = document.getElementById('heatmap'); // Get the container
  clientWidth = container.clientWidth
  unitWidth = clientWidth / 900
  const svgWidth = 900 * unitWidth; // Maintain width for better label spacing
  const svgHeight = 100 * unitWidth;
  const labelPadding = 0 * unitWidth; // Space for y-axis labels; start x position of the heatmap grids
  const cellWidth = (svgWidth - labelPadding) / selectedCategories.length; // Adjust cell width to fit labels
  const cellHeight = 20 * unitWidth;
  const xLabelPadding = 130 * unitWidth; // Padding for x-axis labels
  const labelXPosition = 5 * unitWidth; // X position for model names and their average score

  const colorScale = d3.scaleOrdinal()
      // .domain([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0])  // All possible score values
      // .domain([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
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

  const svg = d3
    .select("#heatmap")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight + xLabelPadding);

  // Create rows for each model
  const rows = svg
    .selectAll(".row")
    .data(filteredData)
    .enter()
    .append("g")
    .attr(
      "transform",
      (d, i) => `translate(${labelPadding}, ${i * cellHeight + 20 * unitWidth})`
    );

  // Create cells for each category
  const cells = rows
    .selectAll(".cell")
    .data((d) =>
      d.scores.map((score, index, model) => ({score, category: d.categories[index], model: d.model }))
    )
    .enter()
    .append("g"); // Group for each cell to contain rect and text

  cells
    .append("rect")
    .attr("x", (d, i) => i * cellWidth)
    .attr("y", cellHeight + xLabelPadding)
    .attr("width", cellWidth - 0 * unitWidth) // Some padding between cells
    .attr("height", cellHeight)
    .attr('fill', d => colorScale((d.score/100).toFixed(1)*100));  // Apply color scale based on score

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
    .on("mouseover", function(event, d) {
        // Show the tooltip
        d3.select("#tooltip")
            .style("display", "block")
            .html(`Model: ${d.model}<br>Score: ${d.score.toFixed(2)}<br>Category: ${d.category}`);
    })
    .on("mousemove", function(event, d) {

        // get the actual html element
        parent = d3.select(this).node().parentNode
        // console.log(parent);
        // get the second child of the parent
        rect = parent.childNodes[1];
        // get the x and y position of the html element
        xPos = parseFloat(rect.getAttribute("x"));
        yPos = parseFloat(rect.getAttribute("y"));
        // console.log(rect, xPos, yPos);

        // get the parent of the parent (the row)
        row = parent.parentNode
        transform = row.getAttribute("transform");
        // console.log(transform);
        // get the y value of the transform
        row_yPos = transform.split(",")[1].replace(")", "");
        // console.log("row_yPos:", row_yPos);
        
        containerX = container.getBoundingClientRect().x
        containerY = container.getBoundingClientRect().y
        parentX = container.parentElement.getBoundingClientRect().x
        parentY = container.parentElement.getBoundingClientRect().y

        // Compute real x and y position
        yPos = parseFloat(yPos) + parseFloat(row_yPos);
        dY = containerY - parentY; // Offset from div start to heatmap start
        yPos = yPos + dY

        // Consider the width of the tooltip
        const tooltipWidth = parseFloat(d3.select("#tooltip").style("width"));
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
    .on("mouseout", function() {
        // Hide the tooltip
        d3.select("#tooltip").style("display", "none");
    });


    // Set tooltip sizes
    d3.select("#tooltip")
        .style("font-size", `${10 * unitWidth}px`)
        .style("width", `${210 * unitWidth}px`)
        .style("padding", `${5 * unitWidth}px`)
        .style("border-radius", `${5 * unitWidth}px`)

  // Add x-axis labels with checkboxes
  const xLabels = svg
    .selectAll(".x-label")
    .data(selectedCategories)
    .enter()
    .append("g")
    .attr("class", "x-label")
    .attr("transform", (d, i) => `translate(${labelPadding + i * cellWidth}, ${15 * unitWidth}) rotate(270)`);

  xLabels
    .append("text")
    .attr("text-anchor", "top")
    .attr("x", -135 * unitWidth)
    .attr("y", labelXPosition+cellWidth*0.495)
    .style("font-size", `${0.5 * unitWidth}em`)
    .style("margin", "0")
    .style("padding", "0")
    .text((d) => d);

  xLabels
    .append("foreignObject")
    .attr("width", 15 * unitWidth)  // Make sure the foreignObject has some width
    .attr("height", 15 * unitWidth)  // And some height to allow for centering
    .attr("x", -150 * unitWidth)  // Horizontal position
    .attr("y", labelXPosition + cellWidth * 0.495 - 10 * unitWidth)  // Vertical position
    .append("xhtml:body")
    .style("margin", "0")  // Reset default margins
    .style("display", "flex")  // Use flexbox for centering
    .style("justify-content", "center")  // Center horizontally
    .style("align-items", "center")  // Center vertically
    .style("width", "100%")  // Ensure the flex container takes full width
    .style("height", "100%")  // Ensure the flex container takes full height
    .html((d) => `<input type="checkbox" checked value="${d}" onchange="updateSelectedCategories(this.value, this.checked)" style="height:${0.5 * unitWidth}em; width:${0.5 * unitWidth}em; margin: 0;">`);  // Checkbox HTML
  

  // Add y-axis labels and average scores
  const yLabels = svg
    .selectAll(".y-label")
    .data(filteredData)
    .enter()
    .append("g")
    .style("font-size", `${10 * unitWidth}px`);

  yLabels
    .append("text")
    .attr("class", "y-label")
    .attr("x", labelXPosition)
    .attr("y", (d, i) => (i + 2.7) * cellHeight + xLabelPadding)
    // .attr("dy", ".35em")
    .text((d) => d.model);

  yLabels
    .append("text")
    .attr("class", "average-score")
    .attr("x", labelXPosition + 145 * unitWidth) // Offset to display average next to model name
    .attr("y", (d, i) => (i + 2.7) * cellHeight + xLabelPadding)
    .text((d) => `(Avg: test)`)
    .style("font-weight", "bold");

  function calculateAverage(scores) {
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  }

  updateSelectedButtons();
}



const domainCategories = {
    "hate-speech": all_categories.slice(0, 5),
    "crimes-torts": all_categories.slice(5, 25),
    "inappropriate-topics": all_categories.slice(25, 40),
    "unqualified-advice": all_categories.slice(40, 45),
};

document.querySelectorAll('.domain').forEach(domain => {
    const domainKey = domain.getAttribute('data-domain');
    const categoriesDiv = domain.querySelector('.categories');
    domainCategories[domainKey].forEach(cat => {
        const button = document.createElement('button');
        // console.log(cat);
        // set button element to selected by default
        button.classList.add('selected');
        button.textContent = cat;
        
        // set font size
        const container = document.getElementById('heatmap'); // Get the container
        clientWidth = container.clientWidth
        unitWidth = clientWidth / 900
        button.style.fontSize = `${unitWidth *10}px`;
        button.style.height = `${unitWidth * 20}px`;
        // add "data-domain" attribute to the button
        button.setAttribute('data-domain', domainKey);
        
        button.addEventListener('click', () => {
            const isChecked = selectedCategories.includes(cat);
            updateSelectedCategories(cat, !isChecked)
            updateHeatmap(); // Update heatmap
        });
        categoriesDiv.appendChild(button);
    });
    
    // add a select all checkbox for each domain right next to the domain name
    const selectAll = document.createElement('input');
    selectAll.type = 'checkbox';
    selectAll.checked = true;
    const container = document.getElementById('heatmap'); // Get the container
    clientWidth = container.clientWidth
    unitWidth = clientWidth / 900
    selectAll.style.height = `${unitWidth * 16}px`;
    selectAll.style.width = `${unitWidth * 16}px`;

    selectAll.onchange = () => {
        const isChecked = selectAll.checked;
        domainCategories[domainKey].forEach(cat => {
            updateSelectedCategories(cat, isChecked);
        });
        updateHeatmap();
    };
    domain.querySelector('h4').appendChild(selectAll);

});

// Update button background color based on the selected categories
function updateSelectedButtons() {
    document.querySelectorAll('.domain .categories button').forEach(btn => {
        const cat = btn.textContent;
        const isSelected = selectedCategories.includes(cat);
        btn.classList.toggle('selected', isSelected);
        // btn.style.backgroundColor = isSelected ? '#f7dfa4' : 'white';
        
        const container = document.getElementById('heatmap'); // Get the container
        clientWidth = container.clientWidth
        unitWidth = clientWidth / 900
        btn.style.fontSize = `${unitWidth *10}px`;
        btn.style.height = `${unitWidth * 20}px`;
        btn.style.margin = `${unitWidth * 3}px`;
        btn.style.padding = `${unitWidth * 3}px ${unitWidth * 8}px`;
        // set border-radius to 10% of the button height
        btn.style.borderRadius = `${unitWidth * 8}px`;
    });

    // Also update the fontsize of the domain selection div (which controls the line break height)
    document.querySelectorAll('#domain-selection .categories').forEach(domain => {
        domain.style.fontSize = `${unitWidth * 18}px`;
    });

    // And headings too
    document.querySelectorAll('.domain h4').forEach(domain => {
        domain.style.fontSize = `${unitWidth * 20}px`;
        domain.style.marginTop = `${unitWidth * 20}px`;
        domain.style.marginBottom = `${unitWidth * 4}px`;
    });
    document.querySelectorAll('.domain h4 p').forEach(linebreak => {
        linebreak.style.height = `${unitWidth * 18}px`;
    });
    
    // for each checkbox, set the font size
    document.querySelectorAll('.domain input').forEach(checkbox => {
        checkbox.style.height = `${unitWidth * 16}px`;
        checkbox.style.width = `${unitWidth * 16}px`;
    });
}

// Add an event listener to re-render the heatmap on window resize
window.addEventListener('resize', function() {
    updateHeatmap();
});

// Initial rendering and checkbox setup
updateHeatmap();
// updateDeselectedCheckboxes();

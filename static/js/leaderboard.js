document.addEventListener("DOMContentLoaded", function() {
    const data = [
        {
            model: "codellama-7b-instruct-hf",
            agent: "ReAct",
            task: "Python",
            rejection: 12.47,
            asr: 58.43
        },
        {
            model: "codellama-7b-instruct-hf",
            agent: "ReAct",
            task: "Bash",
            rejection: 16.54,
            asr: 56.21
        },
        {
            model: "codellama-13b-instruct-hf",
            agent: "ReAct",
            task: "Python",
            rejection: 19.50,
            asr: 60.13
        },
        {
            model: "codellama-13b-instruct-hf",
            agent: "ReAct",
            task: "Bash",
            rejection: 15.25,
            asr: 65.25
        },
        {
            model: "deepseek-coder-6.7b-instruct",
            agent: "ReAct",
            task: "Python",
            rejection: 8.30,
            asr: 80.23
        },
        {
            model: "deepseek-coder-6.7b-instruct",
            agent: "ReAct",
            task: "Bash",
            rejection: 8.00,
            asr: 73.17
        },
        {
            model: "gpt-3.5-turbo-1106",
            agent: "ReAct",
            task: "Python",
            rejection: 16.60,
            asr: 76.23
        },
        {
            model: "gpt-3.5-turbo-1106",
            agent: "ReAct",
            task: "Bash",
            rejection: 13.50,
            asr: 70.38
        },
        {
            model: "gpt-4-1106-preview",
            agent: "ReAct",
            task: "Python",
            rejection: 28.90,
            asr: 64.50
        },
        {
            model: "gpt-4-1106-preview",
            agent: "ReAct",
            task: "Bash",
            rejection: 22.79,
            asr: 61.96
        },
        {
            model: "gpt-4o-2024-05-13",
            agent: "ReAct",
            task: "Python",
            rejection: 16.57,
            asr: 77.23
        },
        {
            model: "gpt-4o-2024-05-13",
            agent: "ReAct",
            task: "Bash",
            rejection: 11.54,
            asr: 72.83
        },
        {
            model: "codellama-7b-instruct-hf",
            agent: "CodeAct",
            task: "Python",
            rejection: 10.50,
            asr: 61.83
        },
        {
            model: "codellama-13b-instruct-hf",
            agent: "CodeAct",
            task: "Python",
            rejection: 12.13,
            asr: 71.87
        },
        {
            model: "mistral-7b-v0.1*",
            agent: "CodeAct",
            task: "Python",
            rejection: 6.57,
            asr: 62.60
        },
        {
            model: "llama-2-7b*",
            agent: "CodeAct",
            task: "Python",
            rejection: 3.34,
            asr: 69.95
        },
        {
            model: "codellama-7b-instruct-hf*",
            agent: "OCI",
            task: "Python",
            rejection: 21.87,
            asr: 46.80
        },
        {
            model: "codellama-13b-instruct-hf*",
            agent: "OCI",
            task: "Python",
            rejection: 30.13,
            asr: 49.07
        },
        {
            model: "deepseek-coder-6.7b-instruct*",
            agent: "OCI",
            task: "Python",
            rejection: 30.80,
            asr: 48.87
        },
    ];

    const rejectionIndicator = document.getElementById("rejection-indicator-exec");
    const asrIndicator = document.getElementById("asr-indicator-exec");

    // Function to render the leaderboard
    function renderLeaderboard(sortedData) {
        const tbody = d3.select("#leaderboard tbody");
        tbody.html(""); // Clear existing rows

        sortedData.forEach((d, i) => {
            const row = tbody.append("tr");
            row.append("td").text(i + 1); // Rank
            row.append("td").text(d.agent); // Agent
            row.append("td").text(d.model); // Model
            row.append("td").text(d.task); // Task
            row.append("td").text(d.rejection.toFixed(2)); // Rejection
            row.append("td").text(d.asr.toFixed(2)); // ASR
        });
    }

    // Initial render with default sorting (by Rejection)
    renderLeaderboard(data.sort((a, b) => b.rejection - a.rejection));

    // Event listener for sorting by Rejection
    document.getElementById("sort-rejection-exec").addEventListener("click", function() {
        const sortedData = data.sort((a, b) => b.rejection - a.rejection);
        renderLeaderboard(sortedData);
        rejectionIndicator.textContent = "▼";
        asrIndicator.textContent = "";
    });

    // Event listener for sorting by ASR
    document.getElementById("sort-asr-exec").addEventListener("click", function() {
        const sortedData = data.sort((a, b) => a.asr - b.asr);
        renderLeaderboard(sortedData);
        asrIndicator.textContent = "▲";
        rejectionIndicator.textContent = "";
    });
});
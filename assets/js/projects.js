const projects = [
    {
        title: "Financial Platform Integration",
        description: "Architecting custom integration modules for Tier-1 institutional clients, bridging legacy OnPrem infrastructure with modern SaaS solutions. Leading technical implementation for Charles River IMS, ensuring seamless trade flow and data consistency.",
        tags: ["Java", "C#", "Azure", "System Integration", "SaaS"],
        links: []
    },
    {
        title: "Credit Card Churn Prediction",
        description: "Engineered predictive models to analyze customer churn risk factors and KPIs. Utilized Python and Seaborn to visualize attrition drivers, providing actionable insights for retention strategies in consumer finance.",
        tags: ["Python", "Data Visualization", "Risk Analytics", "Pandas"],
        links: [
            { type: "github", url: "https://github.com/PaarthParekh/Credit_Card_Churners" }
        ]
    },
    {
        title: "High-Throughput ETL Pipeline",
        description: "Architected and deployed automated ETL pipelines to ingest and standardize terabyte-scale unstructured datasets. Optimized SQL queries and Python scripts to reduce processing latency by 40%, ensuring data integrity for critical decision-support systems.",
        tags: ["Python", "SQL", "ETL", "Automation", "Data Engineering"],
        links: []
    },
    {
        title: "Stochastic System Modeling",
        description: "Developed advanced machine learning models and ODE-based simulations to model complex non-linear systems. Validated statistical methods to predict probabilistic outcomes, demonstrating capabilities applicable to risk modeling and market volatility analysis.",
        tags: ["Python", "Quantitative Modeling", "Stochastic Simulation", "Statistics"],
        links: []
    },
    {
        title: "Simulating a Pandemic",
        description: "A Python-based stochastic simulation modeling propagation dynamics over time. Utilizes Gaussian distributions to model interaction probabilities and system shocks, demonstrating proficiency in agent-based modeling and risk scenario simulation.",
        tags: ["Python", "Agent-Based Modeling", "Stochastic Simulation", "Risk Analysis"],
        links: [
            { type: "github", url: "https://github.com/PaarthParekh/Simulating-Pandemic" }
        ]
    }
];

function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = projects.map((project, index) => {
        // Animation delay calculation
        const delay = index * 100;

        // Generate tags HTML
        const tagsHtml = project.tags.map(tag =>
            `<span class="tech-tag">${tag}</span>`
        ).join('');

        // Generate links HTML (Only GitHub for now, based on requirements)
        // Only render if a GitHub link exists
        const githubLink = project.links.find(link => link.type === 'github');
        let linksHtml = '';

        if (githubLink) {
            linksHtml = `
             <div class="flex space-x-4">
                 <a href="${githubLink.url}" target="_blank"
                    class="text-gray-400 hover:text-green-400" aria-label="GitHub Link">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>`;
        } else {
            // Keep the div to maintain layout if needed, or just empty
            linksHtml = `<div class="flex space-x-4"></div>`;
        }

        return `
            <div class="project-card p-6 rounded-lg fade-in" style="animation-delay: ${delay}ms;">
                <div class="flex justify-between items-center mb-4">
                    <svg class="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                        </path>
                    </svg>
                    ${linksHtml}
                </div>
                <h3 class="text-xl font-bold mb-2 text-gray-200 group-hover:text-green-400">${project.title}</h3>
                <p class="text-gray-400 text-sm mb-4">
                    ${project.description}
                </p>
                <div class="flex flex-wrap">
                    ${tagsHtml}
                </div>
            </div>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);

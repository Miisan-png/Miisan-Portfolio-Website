$(document).ready(function() {
    // Load skills
    function loadSkills() {
        $.getJSON('projects/json/skills.json', function(skills) {
            let skillsHTML = '';
            skills.forEach(skill => {
                skillsHTML += `
                    <div class="skill-item">
                        <span class="material-icons skill-icon">${skill.icon}</span>
                        <div class="skill-info">
                            <span class="skill-name">${skill.name}</span>
                            <div class="skill-bar-container">
                                <div class="skill-bar" style="width: ${skill.level}%"></div>
                            </div>
                            <span class="skill-level-text">Lvl ${skill.level}</span>
                        </div>
                    </div>
                `;
            });
            $('#skills-container').html(skillsHTML);
        });
    }

    // Load projects
    function loadProjects(filter = 'all') {
        $('#projects-container').empty();
        let promises = [
            $.getJSON('projects/json/games.json'),
            $.getJSON('projects/json/programming_projects.json'),
            $.getJSON('projects/json/art.json')
        ];

        Promise.all(promises).then(function(results) {
            let allProjects = [].concat(...results);
            let filteredProjects = filter === 'all' ? allProjects : allProjects.filter(p => p.type === filter);
            let projectsHTML = '';
            filteredProjects.forEach(project => {
                projectsHTML += `
                    <div class="project-card">
                        <img src="${project.image}" alt="${project.title}" class="project-image">
                        <div class="project-info">
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                            <a href="${project.link}" target="_blank" class="play-button">Play in browser</a>
                        </div>
                    </div>
                `;
            });
            $('#projects-container').html(projectsHTML);
        });
    }

    // Initial load
    loadSkills();
    loadProjects();

    // Filter projects
    $('.filter-btn').click(function() {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        loadProjects($(this).data('filter'));
    });
});
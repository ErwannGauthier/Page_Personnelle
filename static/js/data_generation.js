var div_xp_pro = document.getElementById("div-about-xp-pro");

for (exp in experiences) {
    xp = experiences[exp];

    var div = document.createElement("div");

    var h4 = document.createElement("h4");
    h4.classList.add("h4-xp-pro");
    var strong_h4 = document.createElement("strong");
    strong_h4.innerText = xp["intitule"];
    var a = document.createElement("a");
    a.href = xp["site_entreprise"];
    a.target = "_blank";
    a.innerText = xp["entreprise"];
    h4.appendChild(document.createTextNode(xp["annee"] + " - "));
    h4.appendChild(strong_h4);
    h4.appendChild(document.createTextNode(" - "));
    h4.appendChild(a);

    var p_mission = document.createElement("p");
    var strong_mission = document.createElement("strong");
    if (xp["mission"].length == 1) {
        strong_mission.innerText = "Mission : "
    } else {
        strong_mission.innerText = "Missions : "
    }
    p_mission.appendChild(strong_mission);
    for (let i = 0; i < xp["mission"].length; i++) {
        if (i != 0) {
            p_mission.appendChild(document.createElement("br"));
        }

        p_mission.appendChild(document.createTextNode(xp["mission"][i]));
    }

    var p_duree = document.createElement("p");
    var strong_duree = document.createElement("strong");
    strong_duree.innerText = "Durée : ";
    p_duree.appendChild(strong_duree);
    p_duree.appendChild(document.createTextNode(xp["duree"]));

    var p_competence = document.createElement("p");
    var strong_competence = document.createElement("strong");
    strong_competence.innerText = "Compétences acquises :"
    p_competence.appendChild(strong_competence);

    var ul_competence = document.createElement("ul");
    for (let i = 0; i < xp["competences"].length; i++) {
        var li_competence = document.createElement("li");
        li_competence.innerText = xp["competences"][i];
        ul_competence.appendChild(li_competence);
    }

    div.appendChild(h4);
    div.appendChild(p_duree);
    div.appendChild(p_mission);
    div.appendChild(p_competence);
    div.appendChild(ul_competence);

    div_xp_pro.appendChild(div);
}


var div_skills = document.getElementById("div-skills");

function create_img(skills, skill) {
    var img = document.createElement("img");
    img.src = "static/images/" + skills[skill]["image"];
    img.alt = "Icon " + skills[skill].lower;
    return img;
}

function create_skill_info(div_skill, skills, skill) {
    var h3 = document.createElement("h3");
    h3.innerText = skill;
    var p1 = document.createElement("p");
    var strong1 = document.createElement("strong");
    strong1.innerText = "Langages maitrisés : ";
    var ski = ""
    var i = 0
    var langages = skills[skill]["Langages"];
    for (value in langages) {
        if (i == 0) {
            ski = langages[value];
            i = 1;
        } else {
            ski = ski + " - " + langages[value]
        }
    }
    p1.appendChild(strong1);
    p1.appendChild(document.createTextNode(ski));

    div_skill.appendChild(h3);
    div_skill.appendChild(p1);

    var projets = skills[skill]["Projets"]

    var p2 = document.createElement("p");
    var strong2 = document.createElement("strong");
    strong2.innerText = "Projets réalisés :";
    p2.appendChild(strong2);

    var ul = document.createElement("ul");
    for (key in projets) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#" + key;
        a.innerText = projets[key];
        li.appendChild(a);
        ul.appendChild(li);
    }

    if (ul.getElementsByTagName("li").length > 0) {
        div_skill.appendChild(p2);
        div_skill.appendChild(ul);
    } else {
        var p3 = document.createElement("p");
        var strong3 = document.createElement("strong");
        strong3.innerText = "Aucun projet réalisé pour le moment.";
        p3.appendChild(strong3);

        div_skill.appendChild(p3);
    }
}



let i = 0;
for (skill in skills) {
    if (i % 2 == 0) {
        var div_skills_1 = document.createElement("div");
        div_skills_1.classList.add("div-skills-1");

        var div_skills_1_1 = document.createElement("div");
        div_skills_1_1.classList.add("div-skills-1-1");
        div_skills_1_1.appendChild(create_img(skills, skill));
        div_skills_1.appendChild(div_skills_1_1);

        var div_skills_1_2 = document.createElement("div");
        div_skills_1_2.classList.add("div-skills-1-2");
        create_skill_info(div_skills_1_2, skills, skill);
        div_skills_1.appendChild(div_skills_1_2);

        div_skills.appendChild(div_skills_1);
    } else {
        var div_skills_2 = document.createElement("div");
        div_skills_2.classList.add("div-skills-2");

        var div_skills_2_1 = document.createElement("div");
        div_skills_2_1.classList.add("div-skills-2-1");
        var div_skills_2_1_1 = document.createElement("div");
        div_skills_2_1_1.classList.add("div-skills-2-1-1");
        create_skill_info(div_skills_2_1_1, skills, skill);
        div_skills_2_1.appendChild(div_skills_2_1_1);
        div_skills_2.appendChild(div_skills_2_1);

        var div_skills_2_2 = document.createElement("div");
        div_skills_2_2.classList.add("div-skills-2-2");
        div_skills_2_2.appendChild(create_img(skills, skill));
        div_skills_2.appendChild(div_skills_2_2);

        div_skills.appendChild(div_skills_2);
    }

    i++;
}

var div_projects = document.getElementById("div-projects");

for (projet in projects) {
    div = document.createElement("div");

    h3 = document.createElement("h3");
    h3.id = projects[projet]["id"];

    a = document.createElement("a");
    a.href = projects[projet]["link"];
    a.target = "_blank";
    a.innerText = projet;

    h3.appendChild(document.createTextNode(projects[projet]["annee"] + " - "));
    h3.appendChild(a);

    div2 = document.createElement("div");

    h4 = document.createElement("h4");
    h4.innerText = projects[projet]["sous-titre"]
    div2.appendChild(h4);

    for (desc in projects[projet]["description"]) {
        p = document.createElement("p");
        split = projects[projet]["description"][desc].split("%BR%");
        if (split.length > 1) {
            for (i = 0; i < split.length; i++) {
                if (i != 0) {
                    p.appendChild(document.createElement("br"));
                }
                p.appendChild(document.createTextNode(split[i]));
            }
        } else {
            p.innerText = projects[projet]["description"][desc];
        }

        div2.appendChild(p);
    }

    div.appendChild(h3);
    div.appendChild(div2);

    div_projects.appendChild(div);
}



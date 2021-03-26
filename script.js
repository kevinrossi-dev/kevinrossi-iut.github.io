$( document ).ready(function() {
    $( ".realBlock" ).click(function( event ) {
        let id = $(this).attr('id');
        let copy=$("#preview-template").clone();
        projet = getProject(id);
        copy.find('h5')[0].textContent=projet.title;
        copy.find('#githubLink')[0].href=projet.github;
        copy.find('.modal-body .objectif')[0].textContent=projet.objectif;
        copy.find('.modal-body .skills')[0].textContent=projet.skills;
        let projectLanguages=(projet['language']).split(',');
        projectLanguages.forEach(function(lang){
            copy.find("#projectLanguages").append(languages[lang]);

        });

        copy.modal('show');
        
    });
});

function getProject(id){
    return projects[id];
}
var languages={
    html : '<i class="fab fa-html5"></i>',
    css : '<i class="fab fa-css3-alt"></i>',
    js : '<i class="fab fa-js"></i>',
    php : '<i class="fab fa-php"></i>',
    sql : '<i class="fas fa-database"></i>',
    java : '<i class="fab fa-java"></i>',
    c : '<i class="fas fa-copyright"></i>',
    asm : ''
};

var projects={

     projetHtml : {
        title : "Site web statique" ,
        objectif: "Développement des compétences relationnelles et l’autonomie dans le travail",
        skills:"Aptitudes à synthétiser l’information écrite et sa présentation orale. Maitrise de la recherche documentaire. Aptitudes à la synthèse des compétences techniques acquises",
        github:"https://github.com/deumsdeums/ProjetWebStatique",
        language :"html,css"

},
     projetC : {
        title: "Jeu de NIM en C" ,
        objectif: "Mise en application des acquis dans le domaine de l'analyse et de la programmation dans un travail de groupe",
        skills:"Maîtriser les concepts de l'algorithmique et de la programmation",
        github:"https://github.com/deumsdeums/NIMProjetC",
        language:"c"

},
     projetAsm : {
        title: "Mini-jeu vidéo en Assembleur" ,
        objectif: "Développement d'un jeu d'arcade en Assembleur.",
        skills:"Approfondir les connaissances vues en cours ainsi que de découvrir de nombreuses choses de manière autonome.",
        github:"https://github.com/deumsdeums/ProjetASM",
        language:"asm"

},
     projetPoo : {
        title: "Gestion dune vidéothèque" ,
        objectif: "Modélisation complète d'un problème avec UML  sa mise en œuvre en Java",
        skills:"Programmation par objet, UML, Langage Java ( classe, héritage, gestion d'une interface graphique complète et gestion des événements graphiques..etc) ",
        github:"https://github.com/deumsdeums/ProjetPOOVideotheque",
        language: "java"

},
     projetCpoa : {
        title: "Gestion dune boutique d'habits" ,
        objectif: "Développer un logiciel en suivant les préceptes de l'agilité et mettant en œuvre un ensemble de bonnes pratiques",
        skills:"programmation événementielle, JDBC, Design Pattern DAO, architecture MVC, tests unitaires",
        github:"https://github.com/deumsdeums/ProjetCPOABoutique",
        language:"java"

},
    projetSiteWeb:{
        title:"Création d'un site web",
        objectif:"Mise en œuvre des méthodes de conduite de projet",
        skills:"Mise en pratique de la méthodologie de conduite de projets. Développement des compétences d’autonomie et d’initiative de l’étudiant. Développement des aptitudes au travail en équipe",
        github:"",
        language:"html,css"
   
    },
     projetPhp : {
        title: "Site de rédaction de news" ,
        objectif: "Développement d'un site web de rédaction de news.",
        skills:" Ce projet a permis de mettre en pratique nos connaissances en PHP/SQL ainsi que de découvrir de nouvelles choses en mettant en place des fonctionnalités non demandées ",
        github:"https://github.com/deumsdeums/ProjetPHPNews",
        language:"html,css,js,php,sql"

},
     projetTut : {
        title: "Site de gestion du matériel de l'IUT" ,
        objectif: "-",
        skills:"-",
        github:"https://github.com/deumsdeums/ProjetTutore",
        language:"php,html,css,js,sql"

},
     projetSys : {
        title: "Application dachat/vente de place de concert" ,
        objectif: "-",
        skills:"-",
        github:"https://github.com/deumsdeums/ProjetCConcert",
        language:""

}
};
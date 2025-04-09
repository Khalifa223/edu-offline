import { Component } from '@angular/core';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent {
  courses = [
    {
      "nom": "Angular débutant",
      "titre": "Angular",
      "level": "facile",
      "time": 8,
      "content": "Ce cours va vous permettre d'apprendre les bases d'angular"
    },
    {
      "nom": "Développement",
      "titre": "Apprenez les bases du langage Python",
      "level": "facile",
      "time": 6,
      "content": "Python est très demandé et accessible pour les débutants. Apprenez à coder avec Python pour écrire des programmes simples mais puissants,..."
    },
    {
      "nom": "Data",
      "titre": "Objectif IA : initiez-vous à l'intelligence artificielle",
      "level": "facile",
      "time": 6,
      "content": "Vous découvrirez ce que recouvre vraiment l'intelligence artificielle ! Ses enjeux, ses possibilités, son fonctionnement scientifique ain..."
    },
    {
      "nom": "Développement",
      "titre": "Créez votre site web avec HTML5 et CSS3",
      "level": "facile",
      "time": 15,
      "content": "Vous rêvez d'apprendre à créer des sites web ? Débutez avec ce cours qui vous enseignera tout ce qu'il faut savoir sur le développement d..."
    },
    {
      "nom": "Bureautique",
      "titre": "Maîtrisez les fondamentaux d'Excel",
      "level": "facile",
      "time": 6,
      "content": "La maîtrise des fonctionnalités d'Excel est souvent indispensable. Prenez en main le logiciel puis allez plus loin avec les tableaux, les..."
    },
    {
      "nom": "Data",
      "titre": "Utilisez ChatGPT pour améliorer votre productivité",
      "level": "facile",
      "time": 2,
      "content": "Apprenez à utiliser ChatGPT pour augmenter votre productivité : grâce au prompt engineering découvrez sur quelles tâches de votre métier ..."
    },
    {
      "nom": "Développement",
      "titre": "Apprenez à programmer avec JavaScript",
      "level": "facile",
      "time": 12,
      "content": "Maîtrisez les bases de la programmation JavaScript et sa logique de programmation en réalisant un site web dynamique."
    },
    {
      "nom": "Développement",
      "titre": "Apprenez à programmer en C",
      "level": "moyenne",
      "time": 10,
      "content": "Le langage C est plutôt complexe mais si vous le maîtrisez vous aurez des bases de programmation très solides !"
    },
    {
      "nom": "Systèmes & Réseaux",
      "titre": "Concevez votre réseau TCP/IP",
      "level": "facile",
      "time": 10,
      "content": "Concevez votre premier réseau TCP/IP et découvrez l'outil de simulation Cisco Packet Tracer en réalisant ce cours en 3 étapes : créez l'a..."
    },
    {
      "nom": "Développement",
      "titre": "Comprendre le Web",
      "level": "facile",
      "time": 6,
      "content": "Le monde du Web vous intéresse, mais vous n’y connaissez rien ? Vous décrochez quand vous entendez du vocabulaire geek ? Imprégnez-vous d..."
    },
    {
      "nom": "Systèmes & Réseaux",
      "titre": "Initiez-vous à Linux",
      "level": "facile",
      "time": 8,
      "content": "Dans ce cours débutant, découvrez Linux : un système d'exploitation gratuit et fascinant qui vous donnera un contrôle sans précédent sur ..."
    },
    {
      "nom": "Marketing & Communication",
      "titre": "Initiez-vous au marketing digital",
      "level": "facile",
      "time": 10,
      "content": "Le marketing digital offre un arsenal d’outils et de techniques permettant de mener des actions toujours plus personnalisées, dont la per..."
    },
    {
      "nom": "Pédagogie",
      "titre": "Optimisez votre apprentissage avec l'Intelligence Artificielle",
      "level": "facile",
      "time": 6,
      "content": "Utiliser l’IA en gardant un esprit critique, pour acquérir plus rapidement des compétences, gagner en productivité et mieux organiser vot..."
    },
    {
      "nom": "Cybersécurité",
      "titre": "Découvrez l'univers de la cybersécurité",
      "level": "facile",
      "time": 4,
      "content": "Comprenez le déroulement des cyberattaques, enjeu majeur de société, et découvrez l’ensemble des métiers qui participent à la cybersécuri..."
    },
  ]
}

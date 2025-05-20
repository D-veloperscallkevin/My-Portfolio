import i18next from "i18next";

export interface Project {
  title: string;
  key: string; // Clave única del proyecto en i18next
  image: string;
  description: string;
  url: string;
  projectsButton: string;
}

export const getProjects = (): Project[] => [
  {
    title: "My Learnings App",
    key: "myLearningsApp", // Clave de traducción en i18next
    image: "/my_learnings.png",
    description: i18next.t(`projects.myLearningsApp`), // Obtiene traducción dinámica
    url: "https://centeroflearningfrontend-production.up.railway.app/",
    projectsButton: i18next.t(`projects.projectsButton`),
  },
  // {
  //   title: "E-commerce",
  //   image: "/images/shop.png",
  //   description: "Tienda en línea con carrito y React",
  //   url: "https://tu-url-deploy.com/shop",
  // },
];

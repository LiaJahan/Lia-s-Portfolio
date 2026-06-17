import bookcourier from "../assets/bookcourier.png";
import petstore from "../assets/petstore.png";
import sayitright from "../assets/sayitright.png";

export const projects = [
  {
    id: "book-courier",
    name: "Book Courier Service",
    image: bookcourier,
    live: "https://bookcourier-client-drab.vercel.app/",
    github: "YOUR_GITHUB_LINK",
    tech: ["React", "Firebase", "MongoDB", "Express"],
    description:
      "Library book delivery platform with authentication and courier management.",
  },

  {
    id: "paw-mart",
    name: "Paw Mart",
    image: petstore,
    live: "https://paw-mart-client-five.vercel.app/",
    github: "YOUR_GITHUB_LINK",
    tech: ["React", "Firebase", "MongoDB"],
    description:
      "Pet store platform featuring product browsing and modern shopping experience.",
  },

  {
    id: "say-it-right",
    name: "Say It Right",
    image: sayitright,
    live: "https://liajahan.github.io/say-it-right/",
    github: "YOUR_GITHUB_LINK",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "English vocabulary learning application with Bengali pronunciation.",
  },
];
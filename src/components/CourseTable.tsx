import { useState } from "react";

const courses = {
  "fall 20": {
    "PSYCH 460": {
      title: "Child Development",
      grade: "A",
      desc: "Biological and behavioral foundations of human development, with an emphasis on experiments and data-driven approaches. Topics will include prenatal development, behavior genetics, motor development, perceptual development, language development, cognitive development, emotional development, social development, and atypical development.",
    },
    "COMP SCI 200": {
      title: "Programming I",
      grade: "A",
      desc: "Learn the process of incrementally developing small (200-500 lines) programs along with the fundamental Computer Science topics. These topics include: problem abstraction and decomposition, the edit-compile-run cycle, using variables of primitive and more complex data types, conditional and loop-based flow control, basic testing and debugging techniques, how to define and call functions (methods), and IO processing techniques. Also teaches and reinforces good programming practices including the use of a consistent style, and meaningful documentation. Intended for students who have no prior programming experience.",
    },
    "LITTRANS 247": {
      title: "Topics-Slavic Lit in Translation",
      grade: "A",
      desc: "Exploration of periods, genres, individual writers, themes, problems, ect. in Russian and Eastern European literature.",
    },
    "MATH 340": {
      title: "Elementary Matrix and Linear Algebra",
      grade: "A",
      desc: "An introduction to linear algebra. Topics include matrix algebra, linear systems of equations, vector spaces, sub-spaces, linear dependence, span, basis, rank of matrices, determinants, linear transformations, coordinate representations, kernel, range, eigenvalues and eigenvectors, diagonalization, inner products and orthogonal vectors, symmetric matrices. Covers linear algebra topics in greater depth and detail than MATH 320. Formal techniques in mathematical argument [MATH 341] not covered.",
    },
    "AMER IND 100": {
      title: "Intro to American Indian Studies",
      grade: "A",
      desc: "Focus is history, social organization, political experience, artistic expression of North American Indians, using methods and materials from a number of disciplines as an introduction to the interdisciplinary field.",
    },
  },
  "spring 21": {
    "MATH 234": {
      title: "Calculus-Functions of Several Variables",
      grade: "A",
      desc: "Introduction to calculus of functions of several variables; calculus on parameterized curves, derivatives of functions of several variables, multiple integrals, vector calculus.",
    },
    "ZOOLOGY 151": {
      title: "Introductory Biology",
      grade: "A",
      desc: "Topics include: cell structure and function, cellular metabolism (enzymes, respiration, photosynthesis), information flow (DNA, RNA, protein), principles of genetics and selected topics in Animal Physiology.",
    },
    "COMP SCI 300": {
      title: "Programming II",
      grade: "A",
      desc: "Introduction to Object-Oriented Programming using classes and objects to solve more complex problems. Introduces array-based and linked data structures: including lists, stacks, and queues. Programming assignments require writing and developing multi-class (file) programs using interfaces, generics, and exception handling to solve challenging real world problems. Topics reviewed include reading/writing data and objects from/to files and exception handling, and command line arguments. Topics introduced: object-oriented design; class vs. object; create and define interfaces and iterators; searching and sorting; abstract data types (List,Stack,Queue,PriorityQueue(Heap),Binary Search Tree); generic interfaces (parametric polymorphism); how to design and write test methods and classes; array based vs. linked node implementations; introduction to complexity analysis; recursion.",
    },
    "ENGL 176": {
      title: "Topics in Literature and Film",
      grade: "A",
      desc: "An introduction to the interplay of literature and film in English, with a focus on the analysis of novels, stories, poems and other writings and their representation and transformation in and through film; specific topics will vary.",
    },
  },
};

const CourseTable = () => {
  const [semester, setSemester] = useState("fall 20");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSemester(event.target.value);
  };

  return (
    <select value={semester} onChange={handleChange}>
      <option value="fall 20">Fall 2020</option>
      <option value="spring 21">Spring 2021</option>
      <option value="fall 21">Fall 2021</option>
      <option value="spring 22">Spring 2022</option>
      <option value="fall 22">Fall 2022</option>
      <option value="spring 23">Spring 2023</option>
      <option value="fall 23">Fall 2023</option>
      <option value="spring 24">Spring 2024</option>
    </select>
  );
};

export default CourseTable;

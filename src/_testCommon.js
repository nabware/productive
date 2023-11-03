import { v4 as uuid } from "uuid";

const TEST_TODOS = [
  {
    id: uuid(),
    title: "test1title",
    description: "test1description",
    priority: 1,
  },
  {
    id: uuid(),
    title: "test2title",
    description: "test2description",
    priority: 2,
  },
  {
    id: uuid(),
    title: "test3title",
    description: "test3description",
    priority: 3,
  },
];

export default TEST_TODOS;
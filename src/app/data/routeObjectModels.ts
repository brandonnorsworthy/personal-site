export type routeObjectModelTypes = {
  name: string;
  path: string;
  tags?: string[];
}

const routeObjectModels: routeObjectModelTypes[] = [
  {
    name: "laptop",
    path: "macbook/macbook.glb",
    tags: ["technology", "computer", "windows", "apple", "programming", "coding", "software", "hardware", "gaming"]
  },
]

export default routeObjectModels;
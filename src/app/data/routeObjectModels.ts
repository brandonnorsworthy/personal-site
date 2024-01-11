export type routeObjectModelTypes = {
  name: string;
  path: string;
  tags?: string[];
}

const routeObjectModels: routeObjectModelTypes[] = [
  {
    name: "laptop",
    path: "laptop.glb",
    tags: ["technology", "computer", "windows", "apple", "programming", "coding", "software", "hardware", "gaming"]
  }
]

export default routeObjectModels;
export type routeObjectModelTypes = {
  name: string;
  path: string;
  tags?: string[];
}

const routeObjectModels: routeObjectModelTypes[] = [
  {
    name: "laptop",
    path: "macbook.glb",
    tags: ["technology", "computer", "windows", "apple", "programming", "coding", "software", "hardware", "gaming"]
  },
  {
    name: "car",
    path: "car.glb",
  },
  {
    name: "house",
    path: "house.glb",
  }
]

export default routeObjectModels;
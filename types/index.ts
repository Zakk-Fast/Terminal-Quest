export type Message = {
  type: "narrative" | "command" | "response";
  text: string;
  turn: number; 
}

export type InventoryItem = {
  name: string;
  description: string;
  quantity?: number;
}

export type VisitedLocation = {
  name: string;
  description: string;
  timesVisited: number;
}

export type GameState = {
  currentLocation: VisitedLocation;
  visitedLocations: VisitedLocation[];
  inventory: InventoryItem[];
  turn: number;
  messages: Message[];
  gameStatus: "playing" | "won" | "lost";
  storyFlags: { [key: string]: boolean };
}

export type LLMContextPayload = {
  currentLocation: VisitedLocation;
  visitedLocations: VisitedLocation[];
  inventory: InventoryItem[];
  turn: number;
  storyFlags: { [key: string]: boolean };
  gameStatus: "playing" | "won" | "lost";
}

export type LLMResponse = {
  narrative: string;
  newLocation?: VisitedLocation;
  inventoryChanges?: {
    add?: InventoryItem[];
    remove?: string[]; // item names to remove
  };
  storyFlagUpdates?: { [key: string]: boolean };
  gameStatus?: "playing" | "won" | "lost";
}
import { InventoryItem, VisitedLocation } from "../../types";
import SidebarSection from "./SidebarSection";
import GameStatus from "./GameStatus";

const Sidebar: React.FC = () => {
  // Dummy data - replace with actual game state later
  const currentTurn = 7;
  const currentLocation: VisitedLocation = {
    name: "Dark Forest Path",
    description: "A winding path through towering trees with filtered sunlight",
    timesVisited: 2,
  };

  const inventory: InventoryItem[] = [
    { name: "Rusty Sword", description: "An old but sharp blade", quantity: 1 },
    { name: "Weird Amulet", description: "Glows with mysterious energy" },
    { name: "Ancient Key", description: "Opens doors from a forgotten age" },
    {
      name: "Mysterious Scroll",
      description: "Written in an unknown language",
    },
    { name: "Gold Coins", description: "Shiny currency", quantity: 47 },
  ];

  const visitedLocations: VisitedLocation[] = [
    {
      name: "Dark Forest Entrance",
      description: "The edge of the mysterious woods",
      timesVisited: 1,
    },
    {
      name: "Abandoned Cottage",
      description: "A crumbling home long forgotten",
      timesVisited: 1,
    },
    {
      name: "Misty Crossroads",
      description: "Where four paths meet in the fog",
      timesVisited: 1,
    },
    {
      name: "Old Stone Bridge",
      description: "Ancient stonework over a babbling brook",
      timesVisited: 1,
    },
    {
      name: "Village Square",
      description: "The heart of a bustling settlement",
      timesVisited: 2,
    },
  ];

  // Convert inventory to display format
  const inventoryDisplay = inventory.map((item) =>
    item.quantity && item.quantity > 1
      ? `${item.name} (${item.quantity})`
      : item.name
  );

  // Convert locations to display format
  const locationDisplay = visitedLocations.map((location) =>
    location.timesVisited > 1
      ? `${location.name} (${location.timesVisited}x)`
      : location.name
  );

  return (
    <div className="bg-black/90 border-r border-green-400/30 min-w-[280px] p-4 font-mono text-sm relative">
      <GameStatus currentTurn={currentTurn} currentLocation={currentLocation} />

      <SidebarSection
        title="Inventory"
        items={inventoryDisplay}
        icon="•"
        className="mb-8"
      />

      <SidebarSection
        title="Visited Locations"
        items={locationDisplay}
        icon="→"
      />

      {/* Subtle visual indicator of secondary status */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-r from-transparent to-black/10"></div>
    </div>
  );
};

export default Sidebar;

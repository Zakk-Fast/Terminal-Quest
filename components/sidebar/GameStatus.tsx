import { VisitedLocation } from "../../types";

interface GameStatusProps {
  currentTurn: number;
  currentLocation: VisitedLocation;
}

const GameStatus: React.FC<GameStatusProps> = ({
  currentTurn,
  currentLocation,
}) => {
  return (
    <div className="mb-4">
      <div className="text-green-400/90 text-xs uppercase tracking-wider pb-1">
        Game Status
      </div>
      <div className="border-b border-green-400/20 mb-3"></div>
      <div className="space-y-4">
        <div className="text-green-400/70">
          <span>Turn: </span>
          <span className="text-green-400/90 font-bold">{currentTurn}</span>
        </div>
        <div className="text-green-400/70">
          <div className="text-xs mb-2">Current Location:</div>
          <div className="text-green-400/60 flex items-center">
            <span className="text-green-400/40 mr-2">•</span>
            {currentLocation.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStatus;

const initialPrompt = `{
  "narrative": "The fog rolls thick through the cobblestone streets of Victorian London as you hurry down a narrow alley, your footsteps echoing off the damp brick walls. Gas lamps flicker weakly in the murky evening air, casting dancing shadows that seem to follow your every move. You've been summoned to investigate a most peculiar case at the residence of Lord Pemberton - his prized collection of rare artifacts has been disappearing one by one, and the local constabulary are baffled. You pause before an imposing three-story townhouse, its dark windows staring down like hollow eyes. A brass nameplate reads 'PEMBERTON ESTATE' in elegant script. The front door stands slightly ajar, which is odd given the late hour. Your leather satchel contains the basic tools of your trade: a magnifying glass, a notebook, and a small oil lamp. What is your first action, detective?",
  "newLocation": {
    "name": "Pemberton Estate Entrance",
    "description": "A grand Victorian townhouse with an mysteriously open front door",
    "timesVisited": 1
  },
  "inventoryChanges": {
    "add": [
      {
        "name": "magnifying glass",
        "description": "A high-quality lens for examining fine details",
        "quantity": 1
      },
      {
        "name": "notebook",
        "description": "A leather-bound journal with blank pages for recording observations",
        "quantity": 1
      },
      {
        "name": "oil lamp",
        "description": "A small brass lamp that provides light in dark places",
        "quantity": 1
      }
    ]
  },
  "storyFlagUpdates": {
    "gameStarted": true,
    "theme": "Victorian Mystery",
    "turnLimit": 35
  },
  "gameStatus": "playing"
}'`;

export default initialPrompt;
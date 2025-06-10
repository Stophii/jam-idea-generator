// 1. Theme flavor matcher
const flavorProfiles: Record<string, string[]> = {
  nature: ["nature", "plant", "forest", "root", "flower", "moss", "tree", "seed", "green"],
  death: ["death", "zombie", "undead", "corpse", "grave", "ghost", "decay", "rot", "perfect"],
  magic: ["magic", "spell", "arcane", "rune", "sorcery", "mana", "ritual", "curse", "casting"],
  machine: ["machine", "robot", "metal", "circuit", "gear", "mech", "factory"],
  technology: ["technology", "code", "ai", "cyber", "data", "virtual", "system", "network"],
  deity: ["deity", "god", "divine", "celestial", "worship", "holy", "sacred", "pantheon", "afterlife"],
  lore: ["lore", "story", "myth", "tale", "legend", "chronicle", "origin"],
  steampunk: ["steampunk", "steam", "cog", "gear", "goggles", "smoke", "engine"],
  medieval: ["medieval", "knight", "castle", "sword", "kingdom", "peasant", "feast"],
  elements: ["elements", "fire", "water", "ice", "earth", "wind", "lightning"],
  legend: ["legend", "hero", "prophecy", "artifact", "destiny", "chosen", "beast"],
  food: ["food", "spaghetti", "cake", "meat", "kitchen", "chef", "snack", "meal", "pizza", "burger"],
  women: ["women", "femininity", "goddess", "queen", "her", "matriarch", "Smut", "Smutty"],
  men: ["men", "masculinity", "king", "father", "brother", "patriarch"],
  destruction: ["destruction", "ruin", "explosion", "collapse", "shatter", "blast", "wreckage", "crash"],
  stressed: ["stressed", "anxiety", "panic", "pressure", "burnout", "overwhelmed", "crashing"],
  anatomy: ["anatomy", "bone", "flesh", "organ", "heart", "brain", "muscle", "eye", "lung", "skin", "spine", "blood", "toes"],
  popculture: ["popculture", "meme", "viral", "influencer", "celebrity", "trend", "stream", "fandom", "stan", "hashtag"],
  avarice: ["avarice", "greed", "taxes", "wealth", "gold", "hoard", "capitalism", "corruption"],
  children: ["children", "siblings", "twins", "son", "daughter", "parents", "youth"],
  action: ["action", "actions",  "flying", "jumping", "racing", "running", "swimming", "piloting", "gliding", "dashing", "teleporting"],
  concepts: ["concept", "concepts", "far", "close", "rich", "poor", "fat", "skinny", "big", "small", "lost", "found", "high", "low", "fast", "slow"],

};

function matchThemeFlavor(theme: string): string {
    const loweredWords = theme.toLowerCase().split(/\s+/);
    for (const [flavor, keywords] of Object.entries(flavorProfiles)) {
    if (loweredWords.some((word) => keywords.includes(word))) {
        return flavor;
    }
    }
  console.log(`[GENERIC FLAVOR] '${theme}' defaulted to 'generic'`);
  return "generic";
}

// 2. Synonyms for theme injection
const themeSynonyms: Record<string, string[]> = {
  nuts: ["Nuts", "Acorns", "Shells", "Seeds", "Squirrels", "Deranged", "Madness", "Insanity"],
  fire: ["Fire", "Inferno", "Ash", "Blaze", "Scorch", "Burn"],
  death: ["Death", "Decay", "Rot", "Bones", "Graves", "Specters", "Perfect"],
  plants: ["Plants", "Vines", "Roots", "Thorns", "Blossoms", "Saplings"],
  bubble: ["Bubble", "Bubblegum", "Bubbles","Soap","Pop","Blow","Foam"],
  scale: ["Scale","Sizing","Grow","Stretch","Expand","Amplify"],
  wild: ["Wild","Untamed","Ferocious","Savage","Primal"],
  ancient_history: ["Ancient","History","Ruins","Relics","Antiquity","Archaeology", "Curses"],
  cold: ["Cold", "Ice", "Snow", "Frozen", "Chill", "Frost"],
  nature: ["Nature", "Wilderness", "Earth", "Environment", "Natural", "Jungle"],
  city: ["City", "Urban", "Skyscraper", "Street", "Concrete", "District"],
  politics: ["Politics", "Power", "Election", "Corruption", "Debate", "Campaign"],
  gamble: ["Gamble", "Luck", "Casino", "Bet", "Wager", "Risk"],
  romance: ["Romance", "Love", "Heart", "Affection", "Crush", "Date"],
  art: ["Art", "Canvas", "Paint", "Color", "Gallery", "Expression"],
  pixel: ["Pixel", "Retro", "8bit", "Low-res", "Sprite", "Blocky"],
  craft: ["Craft", "Build", "Forge", "Assemble", "Handmade", "Creation"],
  races: ["Races", "Dwarves", "Elves", "Orcs", "Humans", "Goblins", "Factions"],
  afterlife: ["Afterlife", "Heaven", "Hell", "Reincarnation", "Spirits", "Underworld", "Soul", "Beyond", "Demon", "Divine"],
  barnyard: ["Barn", "Farm", "Animals", "Cow", "Pig", "Chicken", "Ranch", "Hay", "Farmer"],
  retro: ["Retro", "Arcade", "CRT", "Joystick", "Classic", "Vintage", "Old School"],
  primitive: ["Primitive", "Stone", "Tribe", "Cave", "Stick", "Firestarter", "Spear", "Hunt", "Bones"],
  food: ["food", "Spaghetti", "Cake", "Meat", "Kitchen", "Chef", "Snack", "Meal", "Pizza", "Burger"],
  women: ["Women", "Femininity", "Matriarch", "Goddess", "Daughter", "Queen", "Wife", "Sister", "Her", "Smut", "Smutty", "Purse"],
  destruction: ["Destruction", "Ruin", "Explosion", "Collapse", "Wreckage", "Shatter", "Blast", "Catastrophe", "Crash"],
  stressed: ["Stressed", "Anxiety", "Pressure", "Overwhelmed", "Panic", "Crashing", "Crashing Out", "Burnout", "Tension"],
  men: ["Men", "Masculinity", "Patriarch", "Father", "Brother", "Son", "He", "King", "Husband"],
  anatomy: ["Anatomy", "Bone", "Flesh", "Organ", "Heart", "Brain", "Muscle", "Eye", "Lung", "Skin", "Spine", "Blood", "Toes", "Feet", "Hands", "Arms", "Legs", "Chest", "Waist"],
  popculture: [
    "Popculture", "Meme", "Viral", "Influencer", "Celebrity", "Stan", "Hashtag", "Fandom",
    "Cancelled", "Based", "Cringe", "Sussy", "Drip", "Clout", "Skibidi",
    "Gyatt", "Bussin", "Ratio", "NPC", "Fanfic", "Shrek", "Ohio", "Yas", "Slay",
    "TikTok", "Snap", "Ligma", "Amongus", "Zoomer", "Dab", "Thirsty", "UwU", "Sigma"
  ],
  avarice: ["Avarice", "Greed", "Taxes", "Wealth", "Gold", "Hoard", "Capitalism", "Corruption", "Lust for Power", "Avarice"],
  children: ["Children", "Siblings", "Twins", "Son", "Daughter", "Parents", "Youth"],

};

const synonymToTheme: Record<string, string> = {};

Object.entries(themeSynonyms).forEach(([theme, words]) => {
  words.forEach((word) => {
    synonymToTheme[word.toLowerCase()] = theme;
  });
});

// 3. Flavor-based hooks
const flavorHooks: Record<string, string[]> = {
  nature: [
    "plant and care for the means to a new world",
    "battle with pollen-powered summons through the use of insects.",
    "tend a mystical garden that fights back, sometimes...",
    "use seasonal cycles to gain new abilities",
    "ally with ancient oaks to discover your path forward",
  ],
  death: [
    "summon minions from ancient graves",
    "bind spirits into cursed cards",
    "endure in a land ruled by decay, but nobody minds it",
    "harvest soul fragments to empower attacks, used to spread more death",
    "embrace undeath for tactical advantage, numbers aren't a problem",
  ],
  magic: [
    "cast forbidden spells through card combos",
    "weave arcane chains using rune decks, as a dwarf",
    "control chaos with magical synergies in hopes to purify the land",
    "channel raw mana into unstable forms in an effort to fuel creation",
    "balance elemental forces before they rupture and cause the ancient ones to wake up",
  ],
  machine: [
    "assemble robotic machinations piece by piece",
    "optimize engines for maximum performance",
    "robots have personalities and don't get along",
    "upgrade parts mid-battle for strategic boosts",
    "exploit machine errors to rewrite the fight",
  ],
  technology: [
    "hack into tech exposing secrets to the world",
    "build programs that duel in a virtual arena",
    "firewall yourself against digital viruses",
    "use glitched tools to break game rules",
    "upload consciousness into a combat-ready shell",
    "write code but the errors turn into enemies you must defeat",
  ],
  deity: [
    "appease ancient gods through games of chance",
    "collect godly tablets which you form decks of power out of in a game designed by the gods",
    "gain blessings at the cost of mortal limits",
    "debate faith and solve mysteries in a crumbling pantheon",
    "sacrifice followers for cosmic power so you might ascend",
  ],
  lore: [
    "uncover the lost tales buried in each level",
    "piece together a forgotten myth through exploration and danger",
    "rewrite stories by changing choices in real time",
    "battle ancient narrators for control of the script",
    "gather forgotten names, grammar, and technology to unlock the truth",
  ],
  steampunk: [
    "use pressure-based weapons to outmaneuver enemies in a game of speed",
    "navigate through steam-choked cities with clockwork tools",
    "barter with gearwrights for absurd inventions",
    "explore a world with only one magical element: steam",
    "build unstable contraptions in high-stakes duels",
  ],
  medieval: [
    "forge alliances across feudal kingdoms in your rise to power",
    "defend the realm using turn-based tactics",
    "train squires and knights with unique traits as they reach their potential",
    "sieged castles in your conquest of a rival nation",
    "enforce royal decrees through steel, religion, and fear",
  ],
  elements: [
    "master elemental forces to combo enemies",
    "obtain different forms to control a world of elemental unrest",
    "you are a god battling the populace with natural disasters",
    "combine elements to form new weather",
    "control a primitive society through subtle elemental signs",
  ],
  legend: [
    "follow the path of a hero of legend, but in your own style",
    "seek ancient beasts said to reshape the world by mere existence",
    "risk your life to forge mythical weapons from rare materials for ungrateful heroes",
    "reclaim legacy powers lost to time through the control of time",
    "live up to the expectations of your mother, which are incredibly unrealistic",
  ],
  food: [
    "collect ingredients while dodging angry utensils",
    "battle rival chefs in a recipe showdown",
    "cook under pressure in a sentient kitchen",
    "turn meals into spells with strange effects",
    "offer an alternative to brains for a starving zombie population",
  ],
  women: [
    "lead a rebellion of queens against a crumbling patriarchy",
    "balance strength and grace in a matriarchal society, but everyone loves drama so its hard",
    "meet your ancestors and acquire their beauty through trials",
    "girlboss, gatekeep, and gaslight your opponent in a duel",
    "unite forgotten heroines into a divine council",
  ],
  destruction: [
    "obliterate everything in sight with chain reactions",
    "survive in a dangerous living world that reacts to your actions",
    "use destruction as a resource to unlock new paths",
    "summon cataclysms with reckless flair",
    "build nothing, only break what's left",
  ],
  stressed: [
    "juggle responsibilities before everything collapses",
    "manage limited time and energy under mounting tension",
    "survive daily life as systems crash around you",
    "solve puzzles with a rising panic meter",
    "hand out prescriptions to troubled patients",
  ],
  men: [
    "support your wife as she provides for your family in a primitive world",
    "prove your worth by increasing your salary through daily tasks",
    "mansplain your way through life, the more people who understand you the higher your score",
    "sire offspring so they may battle for you in an attmept to win your favor",
    "grow muscles as if they were plants and animals on a farm.",
  ],
  anatomy: [
    "enhance organs to alter your stats",
    "collect body parts to assemble abominations",
    "power up body parts to battle other body parts",
    "surgically edit yourself to fool others and solve situations",
    "alter DNA to mutate into unexpected forms",
  ],
  popculture: [
    "go viral by crafting the ultimate meme",
    "battle influencers for digital dominance and followers",
    "collect likes to power up your person-meter",
    "cancel enemies in an online reputation war",
    "sow deceit to cancel viral creators",
  ],
  avarice: [
    "exploit workers to grow your empire of greed",
    "bribe, cheat, and steal your way to the top",
    "hoard gold while fending off rival tycoons",
    "evade taxes in a collapsing capitalist dystopia",
    "sacrifice morality to gain ultimate wealth and influence",
  ],
  children: [
    "battle over playground structures and claim them for your faction",
    "solve puzzles in a world imagined by a child",
    "collect toys to unlock childhood memories",
    "defend your blanket fort from imaginary monsters",
    "relive a summer adventure where everything felt magical",
  ],
  action: [
    "dash through collapsing dimensions at breakneck speed",
    "pilot a vehicle fueled by emotional energy",
    "jump across timelines to undo your mistakes",
    "glide past enemies in a world with no ground",
    "teleport between dreams to escape danger",
  ],
  concepts: [
    "explore the vast gap between rich and poor using strategic upgrades",
    "play as a being who grows or shrinks based on your choices",
    "switch between fast and slow worlds to solve paradoxes",
    "solve mysteries by finding what was once lost",
    "navigate relationships through the push and pull of near and far",
  ],
  generic: [],
};


// 4. Genre-specific hooks
const genreHooks: Record<string, string[]> = {
  "rpg": [
    "embark on a quest to save a known god",
    "form a party of warriors, who dislike eachother",
    "negotiate peace between angry lords and ladies",
  ],
  "rogue-like": [
    "explore procedurally generated dungeons with permadeath",
    "collect temporary upgrades before inevitable defeat",
    "challenge brutal bosses with ever-changing builds",
  ],
  "rogue-lite": [
    "retain small power-ups as you aim for new high scores",
    "return stronger after each failed attempt, where failure is inevitable",
    "upgrade your base to survive increasingly chaotic loops",
  ],
  "platformer": [
    "leap between tree branches to collect magical artifacts",
    "brave the mysterious underground as the surface is toxic",
    "navigate a forest filled with deadly traps and angry locals",
  ],
  "deck builder": [
    "build a deck using forbidden relics",
    "Use ancient slabs to enact worldy laws and rules",
    "outplay rivals in a game of chance where cheating is allowed",
  ],
  "simulator": [
    "manage a bizarre business with unstable staff",
    "simulate farm life with unpredictable weather and enemies",
    "balance happiness and profit in a strange ecosystem",
  ],
  "fighting game": [
    "master combo chains to dominate a wild cast of characters",
    "challenge fighters across dimensions in tournament mode",
    "train in absurd martial arts techniques powered by codex",
  ],
  "puzzle": [
    "rotate solars systems to restore broken worlds",
    "solve strange glyph patterns tied to the ancients",
    "discover the mysteries behind a spreadsheet from a passionate redditor",
  ],
  "sandbox": [
    "craft your own solarsystem and play the role of god",
    "discover hidden interactions through experimentation",
    "the code of a computer is the world that which you live in and you can alter the code to your designs",
  ],
  "fps": [
    "blast enemies using weapons made out of the theme of the game",
    "navigate dungeons but instead of a sword and shield you take a gun",
    "act as the commander of a unit, isolate from HQ, your decisions decide whether you make it back or not",
  ],
  "survival": [
    "gather strange resources to stay alive",
    "fend off nightly threats with limited tools",
    "craft solutions to problems you've never seen before",
  ],
  "mmo": [
    "build alliances in a fractured land",
    "compete for territory across a massive living world",
    "trade rare resources to rise in a shifting economy",
  ],
  "text based": [
    "make tense decisions through written encounters",
    "solve mysteries using only dialogue and clues",
    "navigate a world of words where every choice matters",
  ],
  "narrative": [
    "uncover deep character arcs tied to the theme",
    "tell a branching story shaped by bizarre events",
    "guide the fate of a world through critical decisions",
  ],
  "rts": [
    "command units in battles shaped by strange terrain",
    "optimize strategy while adapting to wild theme mechanics",
    "manage resources in a fast-paced themed conflict",
  ],
};


// 5. Generic fallback hooks
const fallbackHooks = [
  "gather relics to awaken a forgotten world",
  "survive among factions battling for ancient resources",
  "build alliances in a fractured land",
  "collect strange artifacts that alter the rules of reality",
  "explore ruins left behind by an unknowable force",
  "manipulate the flow of time to prevent disaster",
  "solve puzzles that unlock hidden realms",
  "shape the world with your choices and regrets",
  "uncover a mystery that spans generations",
  "wield forbidden power at great personal cost",
  "navigate a society teetering on collapse",
  "construct machines from ancient blueprints",
  "travel between realms through unstable rifts",
  "restore order to a land plagued by chaos",
  "outsmart your rivals using cunning and deception",
  "master a forgotten art passed down in riddles",
  "transform into new forms to adapt to the unknown",
  "escape a cycle of repetition with clever planning",
  "defend a fragile hope from overwhelming odds",
  "connect lost civilizations through relic technology",
  "discover the truth behind a mythological catastrophe",
  "influence a branching future through micro-decisions",
  "live many lives to uncover one truth",
  "sacrifice everything to protect a cursed land",
  "rewrite reality using fractured memories",
  "ride strange beasts across untamed wilderness",
  "unlock the potential of an ancient machine core",
  "decrypt a language that shapes the world",
  "exploit glitches in a system that watches you",
  "trade impossible goods in a dimension-hopping bazaar",
  "form uneasy truces in a war of ideologies",
  "become the villain to change the outcome",
  "channel emotions into destructive or creative power",
  "rebuild your body using scavenged parts",
  "become legend in a world that forgot your name",
  "summon allies from broken timelines",
  "craft your own powers from raw elemental force",
  "hide in plain sight in a society built on lies",
  "construct belief systems to reshape culture",
  "break sacred laws to access hidden zones",
  "control your destiny through risky rituals",
  "translate dreams into tangible weapons",
  "reconcile with your past by revisiting it physically",
  "bring harmony to a divided world through clever manipulation",
  "shift between planes to solve layered puzzles",
  "harvest energy from fading stars",
  "steal memories from your future self",
  "coexist with monsters who mirror your fears",
  "create and destroy in equal measure to restore balance",
  "navigate politics, prophecy, and paranoia",
  "build a tower to escape the world below",
  "find meaning in a language you cannot speak",
  "change the rules of the game as you play it",
  "track a being that exists outside of time",
  "leave behind echoes that influence others",
  "recruit allies with nothing in common but desperation",
  "explore a dream that becomes more real than waking life",
  "tame forces that were never meant to be understood",
  "eat all of the cake to acquire godhood",
];

const fallbackNouns = [
  "Blank", "Whisper", "Echo", "Ruin", "Signal", "Shadow", "Spark", "Drift", "Pulse", "Fable",
  "Riddle", "Fragment", "Veil", "Core", "Ash", "Spire", "Loop", "Thread", "Flame", "Husk",
  "Crown", "Shrine", "Shard", "Bloom", "Circuit", "Wound", "Frost", "Flux", "Tether", "Storm"
];


// 6. Title pieces
const baseAdjectives = [
  "Forgotten", "Cursed", "Lost", "Ancient", "Secret", "Cracked",
  "Broken", "Haunted", "Blessed", "Silent", "Twisted", "Shattered",
  "Eternal", "Hidden", "Wicked", "Feral", "Radiant", "Fractured",
  "Doomed", "Burning", "Frozen", "Holy", "Savage", "Damned",
  "Glorious", "Vile", "Sacred", "Chaotic", "Timeless", "Stolen",
  "Grim", "Fading", "Ghostly", "Dreaded", "Golden", "Obsidian",
  "Infernal", "Blessed", "Pale", "Crimson", "Sinister", "Divine",
  "Mysterious", "Lonely", "Wretched", "Tarnished", "Distant", "Venomous",
  "Blighted", "Unspoken", "Enchanted", "Eclipsed", "Holy", "Rotten",
  "Mirrored", "Veiled", "Shifting", "Lurking", "Tainted", "Mythic",
  "Ashen", "Waning", "Corrupted", "Revered", "Bleeding", "Sunken", "Majestic", "Withered", "Blooming", "Celestial",
  "Unholy", "Bound", "Savored", "Estranged", "Unseen", "Ancient",
  "Obscured", "Endless", "Hollow", "Severed", "Malevolent", "Molten",
  "Starless", "Ragged", "Fabled", "Heathen", "Frigid", "Maddening",
  "Tranquil", "Ashamed", "Surging", "Thundering", "Fleeting", "Howling",
  "Shimmering", "Abandoned", "Rusted", "Oblivious", "Mangled", "Lurking",
  "Entombed", "Echoing", "Unforgiven", "Parched", "Blessingless", "Cavernous",
  "Threadbare", "Glimmering", "Spectral", "Noxious", "Petrified", "Decaying",
  "Vanished", "Drifting", "Crawling", "Forgotten", "Resplendent", "Barbed",
  "Ancient", "Reckless", "Searing", "Foolish", "Inverted", "Ash-covered",
  "Twinkling", "Fabled", "Weeping", "Obsessed", "Dilapidated", "Threaded",
  "Requiem", "Tempestuous", "Immaculate", "Scarred", "Flickering", "Overgrown",
  "Undying", "Turbulent", "Weary", "Iridescent", "Final", "Serene"
];

// 7. Main idea generator
export function generateIdea(theme: string, genre: string): { title: string; description: string } {
  const themeLower = theme.toLowerCase();
  const themeKeyword = themeLower.trim().split(/\s+/)[0];
  const mappedTheme = synonymToTheme[themeKeyword] || themeKeyword;

  const adjective = baseAdjectives[Math.floor(Math.random() * baseAdjectives.length)];

  const synonyms = themeSynonyms[mappedTheme] || fallbackNouns;
  const synonym = synonyms[Math.floor(Math.random() * synonyms.length)];
  const capitalizedSynonym = synonym.charAt(0).toUpperCase() + synonym.slice(1);


  const titleIntros = [
    "The", "Degenerate", "That", "Alabaster", "Our", "Their", "Noir", "Fabled",
    "Legend of the", "Curse of the", "Rise of the", "Call of the", "Remember the", "Damnable"
  ];
  const intro = titleIntros[Math.floor(Math.random() * titleIntros.length)];
  const title = `${intro} ${adjective} ${capitalizedSynonym}`;

  const lowerGenre = genre.toLowerCase();
  const flavor = matchThemeFlavor(mappedTheme.toLowerCase());
 

  const themeHookPool = flavorHooks[flavor] || [];
  const genreHookPool = genreHooks[lowerGenre] || [];

  const themeWeight = 5; // how aggressively to favor theme-based hooks
  const weightedThemeHooks = Array(themeWeight).fill(themeHookPool).flat();

  const allHooks = [
  ...weightedThemeHooks,
  ...genreHookPool,
  ...fallbackHooks,
  ];

  const hook = allHooks[Math.floor(Math.random() * allHooks.length)];
  const description = `Your theme: <strong>${theme}</strong>. Your genre: <strong>${genre || "game"}</strong>. The vibe: <strong>${synonym}</strong>, and the main mechanic of the game would be to ${hook}.`;

  return { title, description };
}

// utils/ddragon.js
let cachedVersion = null;

export async function getLatestVersion() {
  if (cachedVersion) return cachedVersion;
  const res = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
  const versions = await res.json();
  cachedVersion = versions[0];
  return cachedVersion;
}

export async function getChampionIcon(name) {
  const version = await getLatestVersion();
  const cap = name.charAt(0).toUpperCase() + name.slice(1).replace(/[^a-zA-Z]/g, '');
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${cap}.png`;
}

export async function getItemIcon(itemId) {
  const version = await getLatestVersion();
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${itemId}.png`;
}

export function getRuneIcon(style, rune, useFolder = true) {
  if (useFolder) {
    return `https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${style}/${rune}/${rune}.png`;
  } else {
    return `https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${style}/${rune}.png`;
  }
}


const spellsCache = {};
export async function getSpellIcons(championName) {
  const version = await getLatestVersion();
  if (spellsCache[championName]) return spellsCache[championName];

  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${championName}.json`);
  const data = await res.json();
  const spells = data.data[championName].spells;

  const result = spells.map(spell => ({
    id: spell.id, // ex: "ZedQ"
    icon: `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.id}.png`
  }));

  spellsCache[championName] = result;
  return result;
}

export function getShardIcon(type) {
  const map = {
    "attackspeed": "StatModsAttackSpeedIcon.png",
    "adaptive": "StatModsAdaptiveForceIcon.png",
    "cdr": "StatModsCDRScalingIcon.png",
    "armor": "StatModsArmorIcon.png",
    "mr": "StatModsMagicResIcon.png",
    "health": "StatModsHealthScalingIcon.png"
  };

  const file = map[type.toLowerCase()];
  if (!file) return null;

  return `https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/${file}`;
}

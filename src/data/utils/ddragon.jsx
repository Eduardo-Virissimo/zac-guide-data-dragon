// Importa os shards direto da pasta assets
import shard5007 from '../../assets/shards/5007.png';
import shard5008 from '../../assets/shards/5008.png';
import shard5010 from '../../assets/shards/5010.png';
import shard5001 from '../../assets/shards/5001.png';
import shard5011 from '../../assets/shards/5011.png';
import shard5013 from '../../assets/shards/5013.png';

let cachedVersion = null;
let runeDataCache = null;
const champSpellCache = {};
let summonerSpellsCache = null;

// Busca versão mais recente para campeões, itens, spells, runas etc.
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

// Ícone da runa pelo ID
export async function getRuneIconById(id) {
  const version = await getLatestVersion();
  if (!runeDataCache) {
    const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/runesReforged.json`);
    runeDataCache = await res.json();
  }

  for (const style of runeDataCache) {
    for (const slot of style.slots) {
      for (const rune of slot.runes) {
        if (rune.id === id) {
          return `https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`;
        }
      }
    }
  }

  return null;
}

// Runas completas
export async function getAllRunesData() {
  const version = await getLatestVersion();
  if (runeDataCache) return runeDataCache;

  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/runesReforged.json`);
  runeDataCache = await res.json();
  return runeDataCache;
}

// Spells de campeões
export async function getChampionSpells(championName) {
  const version = await getLatestVersion();
  if (champSpellCache[championName]) return champSpellCache[championName];

  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${championName}.json`);
  const data = await res.json();
  const spells = data.data[championName].spells;

  const result = spells.map(spell => ({
    id: spell.id,
    icon: `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.id}.png`
  }));

  champSpellCache[championName] = result;
  return result;
}

// Summoner spells
export async function getSpellsIcons() {
  if (summonerSpellsCache) return summonerSpellsCache;

  const version = await getLatestVersion();
  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/summoner.json`);
  const data = await res.json();

  const spells = Object.values(data.data).map(spell => ({
    id: spell.id,
    name: spell.name,
    description: spell.description,
    icon: `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}`
  }));

  summonerSpellsCache = spells;
  return spells;
}

export async function getSummonerSpellsByName(...names) {
  const allSpells = await getSpellsIcons();

  const normalizedNames = names.map(n =>
    n.toLowerCase().replace(/\s+/g, '')
  );

  const resultMap = new Map();

  for (const spell of allSpells) {
    const spellNameNormalized = spell.name.toLowerCase().replace(/\s+/g, '');
    const spellIdNormalized = spell.id.toLowerCase().replace(/\s+/g, '');

    if (
      normalizedNames.includes(spellNameNormalized) ||
      normalizedNames.includes(spellIdNormalized)
    ) {
      resultMap.set(spell.id, spell);
    }
  }

  return Array.from(resultMap.values()).slice(0, 2);
}

// Fragmentos
const shardMap = {
  adaptativeforce: shard5008,
  movespeed: shard5010,
  attackspeed: shard5007,
  healthscaling: shard5001,
  health: shard5011,
  tenacity: shard5013,
  cdr: shard5007,
};

export function getShardIcon(name) {
  const normalized = name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
  return shardMap[normalized] || null;
}

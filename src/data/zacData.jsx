import {
  getChampionIcon,
  getItemIcon,
  getRuneIconById,
  getChampionSpells,
  getSummonerSpellsByName,
  getShardIcon
} from './utils/ddragon';

export async function getZacData() {
  const zacSpells = await getChampionSpells("Zac");

  return {
    top: {
      matchups: {
        darius: {
          championName: "Darius",
          championIcon: await getChampionIcon("darius"),
          difficulty: "Difícil",
          runes: {
            primaryTreeId: 8000, // Precision
            primaryRunesSelectedIds: [8010, 9111, 9105, 8299],
            secondaryTreeId: 8400, // Resolve
            secondaryRunesSelectedIds: [8473, 8453],
            shards: [
              { name: "Velocidade de Ataque", icon: await getShardIcon("attackspeed") },
              { name: "Armadura", icon: await getShardIcon("healthscaling") },
              { name: "Resistência Mágica", icon: await getShardIcon("health") }
            ]
          },
          items: [
            { name: "", icon: await getItemIcon(223047) },
            { name: "", icon: await getItemIcon(3076) },
            { name: "", icon: await getItemIcon(323075) }
          ],
          spells: zacSpells,
          summonerSpells: await getSummonerSpellsByName("Flash", "Ignite"),
          skillOrder: ["Comece de Q e maximize na ordem", "W", "E", "Q"],
          description: "Darius é uma matchup difícil. No nível 1, evite levar dano dele, mesmo que perca alguns minions, mas tente pegar experiência. Farmar perto da sua torre é mais seguro..."
        }
      }
    },

    mid: {
      matchups: {
        zed: {
          championName: "Zed",
          championIcon: await getChampionIcon("zed"),
          difficulty: "Médio",
          runes: {
            primaryTreeId: 8100, // Domination
            primaryRunesSelectedIds: [8112, 8126, 8138, 8106],
            secondaryTreeId: 8000, // Precision
            secondaryRunesSelectedIds: [9111, 8014],
            shards: [
              { name: "Velocidade de Ataque", icon: await getShardIcon("attackspeed") },
              { name: "Armadura", icon: await getShardIcon("healthscaling") },  // "armor" não existe no shardMap, usei "healthscaling"
              { name: "Resistência Mágica", icon: await getShardIcon("health") }   // "mr" não existe no shardMap, usei "health"
            ]
          },
          items: [
            { name: "Youmuu's Ghostblade", icon: await getItemIcon(3142) },
            { name: "Duskblade of Draktharr", icon: await getItemIcon(3147) },
            { name: "Edge of Night", icon: await getItemIcon(3814) }
          ],
          spells: zacSpells,
          summonerSpells: await getSummonerSpellsByName("Ignite", "Flash"),
          skillOrder: ["Q", "W", "E", "Q", "Q", "R", "Q", "W", "Q", "W", "R", "E", "E", "W", "E", "R", "E", "E"],
          description:
            "Contra Zed, abuse do seu poder de burst com Electrocute e mobilidade. Foque em evitar os shurikens dele e aproveite oportunidades para contra-atacar."
        }
      }
    }
  };
}

import {
  getChampionIcon,
  getItemIcon,
  getRuneIcon,
  getChampionSpells,
  getSpellsIcons,
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
            primaryTree: "Precision",
            primaryRunes: [
              { name: "", icon: getRuneIcon("Precision", "Conqueror") },
              { name: "", icon: getRuneIcon("Precision", "Triumph", false) },
              { name: "", icon: getRuneIcon("Precision", "LegendHaste") },
              { name: "", icon: getRuneIcon("Sorcery", "LastStand") }
            ],
            secondaryTree: "Resolve",
            secondaryRunes: [
              { name: "", icon: getRuneIcon("Resolve", "BonePlating") },
              { name: "", icon: getRuneIcon("Resolve", "Revitalize") }
            ],
            shards: [
              { name: "Velocidade de Ataque", icon: await getShardIcon("cdr") },
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
          description: "Darius é uma matchup difícil. No nível 1, evite levar dano dele, mesmo que perca alguns minions, mas tente pegar experiência. Farmar perto da sua torre é mais seguro. Se ele avançar, use seu Q na wave e bata nele, tente dar um certo dano e ganhar dele no sustain. Evite acumular muitos stacks da passiva do Darius e, se trocar dano, corra em direção a ele para desviar da ponta do machado, que cura ele. Priorize armadura, começando com colete espinhoso."
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
            primaryTree: "Domination",
            primaryRunes: [
              { name: "Eletrocutar", icon: getRuneIcon("Domination", "Electrocute") },
              { name: "Impacto Repentino", icon: getRuneIcon("Domination", "SuddenImpact") },
              { name: "Coleção de Olhos", icon: getRuneIcon("Domination", "EyeballCollection") },
              { name: "Caçador Voraz", icon: getRuneIcon("Domination", "RavenousHunter") }
            ],
            secondaryTree: "Precision",
            secondaryRunes: [
              { name: "Triunfo", icon: getRuneIcon("Precision", "Triumph") },
              { name: "Golpe de Misericórdia", icon: getRuneIcon("Precision", "CoupDeGrace") }
            ],
            shards: [
              { name: "Velocidade de Ataque", icon: await getShardIcon("attackspeed") },
              { name: "Armadura", icon: await getShardIcon("armor") },
              { name: "Resistência Mágica", icon: await getShardIcon("mr") }
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
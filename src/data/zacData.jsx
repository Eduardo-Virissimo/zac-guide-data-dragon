// data/zacData.js
import {
  getChampionIcon,
  getItemIcon,
  getRuneIcon,
  getSpellIcons,
  getShardIcon
} from './utils/ddragon';

export async function getZacData() {
  const zacSpells = await getSpellIcons("Zac");

  return {
    top: {
      matchups: {
        darius: {
          championName: "Darius",
          championIcon: await getChampionIcon("darius"),
          difficulty: "Difícil",
          runes: {
            primaryTree: "Precisão",
            primaryRunes: [
              { name: "Conquistador", icon: getRuneIcon("Precision", "Conqueror") },
              { name: "Triunfo", icon: getRuneIcon("Precision", "Triumph", false) },
              { name: "Condicionamento", icon: getRuneIcon("Resolve", "Conditioning") },
              { name: "Crescimento Excessivo", icon: getRuneIcon("Resolve", "Overgrowth") }
            ],
            secondaryTree: "Determinação",
            secondaryRunes: [
              { name: "Triunfo", icon: getRuneIcon("Precision", "Triumph") },
              { name: "Golpe de Misericórdia", icon: getRuneIcon("Precision", "CoupDeGrace") }
            ],
            shards: [
              { name: "Velocidade de Ataque", icon: getShardIcon("attackspeed") },
              { name: "Armadura", icon: getShardIcon("armor") },
              { name: "Resistência Mágica", icon: getShardIcon("mr") }
            ]
          },
          items: [
            { name: "Heartsteel", icon: await getItemIcon(3084) },
            { name: "Gargoyle Stoneplate", icon: await getItemIcon(3193) },
            { name: "Dead Man's Plate", icon: await getItemIcon(3742) }
          ],
          spells: zacSpells,
          skillOrder: ["W", "Q", "E", "W", "W", "R", "W", "E", "W", "E", "R", "E", "E", "Q", "Q", "R", "Q", "Q"],
          description: "Build tank com foco em sustain e troca curta."
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
            secondaryTree: "Precisão",
            secondaryRunes: [
              { name: "Triunfo", icon: getRuneIcon("Precision", "Triumph") },
              { name: "Golpe de Misericórdia", icon: getRuneIcon("Precision", "CoupDeGrace") }
            ],
            shards: [
              { name: "Velocidade de Ataque", icon: "/assets/shards/attackspeed.png" },
              { name: "Armadura", icon: "/assets/shards/armor.png" },
              { name: "Resistência Mágica", icon: "/assets/shards/mr.png" }
            ]
          },
          items: [
            { name: "Youmuu's Ghostblade", icon: await getItemIcon(3142) },
            { name: "Duskblade of Draktharr", icon: await getItemIcon(3147) },
            { name: "Edge of Night", icon: await getItemIcon(3814) }
          ],
          spells: zacSpells,
          skillOrder: ["Q", "W", "E", "Q", "Q", "R", "Q", "W", "Q", "W", "R", "E", "E", "W", "E", "R", "E", "E"],
          description:
            "Contra Zed, abuse do seu poder de burst com Electrocute e mobilidade. Foque em evitar os shurikens dele e aproveite oportunidades para contra-atacar."
        }
      }
    }
  };
}

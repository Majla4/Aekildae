/* ══════════════════════════════════════════════════════════
   PŘEDMĚTY — Svět Aekildae
   Samostatný datový soubor pro import do wiki
   ══════════════════════════════════════════════════════════ */

const ITEMS_DATA = [
{
  id: "einstein-rosenuv-mesec",
  name: "Einstein-Rosenův měšec",
  categories: ["Batohy", "Magické předměty"],
  subcategory: "Měšce",
  rarity: "Vzácný",
  icon: "👝",
  excerpt: "Měšec otevírající cestu do rozdílného časoprostoru. Pojme mnohem víc předmětů, než odpovídá jeho rozměrům.",
  type: "Zázračný předmět (úložný)",
  damage: "",
  ac: "",
  cost: "",
  weight: "0.2 kg",
  material: "Aethericky napuštěná useň, zlatý filigránový vzor",
  properties: "Kapacita: 1000 mincí nebo 250 drahých kamenů. Rozměry: 5 × 10 palců (12,7 × 25,4 cm).",
  special: "Otevírá cestu do rozdílného časoprostoru — vnitřní prostor je mnohonásobně větší než vnější rozměry. Fialová interdimenzionální výplň uvnitř.",
  description: "Einstein-Rosenův měšec je zázračný úložný předmět využívající principu interdimenzionálního prostoru. Zvenku vypadá jako elegantní kožený měšec zdobený zlatým filigránovým vzorem na hnědé usni. Uvnitř se otevírá fialově zářící prostor pojmoucí mnohem více předmětů, než by odpovídalo jeho fyzickým rozměrům — až 1000 mincí nebo 250 drahých kamenů.",
  crafting: "Vyroben z v éteru aethericky napuštěné usně se zlatým filigrán. Mk. II verze obsahuje vnitřní kapsu pro runový stabilizátor. Kruhové dno (průměr 12,7 cm). Interdimenzionální fialová výplň se vkládá jako vložka (průměr 20 cm). Celkový rozvinutý rozměr: 40,6 × 25,4 cm.",
  history: "",
  trivia: "Technický plánek nese označení Mk. II (nesestavený). Název odkazuje na Einstein-Rosenův most — teoretický průchod časoprostorem.",
  image: "img/casoprostorovy_mesec.png",
  blueprint: "img/einstein-rosenuv-mesec-planek.png",
  attunement: "Ne",
  relatedIds: []
}
];

const ITEM_CATEGORIES = {
  "Zbraně": { icon: "⚔️", subcats: ["Meče","Obouruční meče","Dýky","Sekery","Obouruční sekery","Palice","Kladiva","Kopí","Hole","Biče","Ostatní zbraně"] },
  "Střelné zbraně": { icon: "🏹", subcats: ["Luky","Kuše","Praky","Pistole","Ostatní střelné"] },
  "Zbroje": { icon: "🛡️", subcats: ["Lehké zbroje","Střední zbroje","Těžké zbroje","Přilby","Rukavice","Boty","Chrániče","Ostatní zbroje"] },
  "Štíty": { icon: "🔰", subcats: ["Malé štíty","Velké štíty","Pavézy","Ostatní štíty"] },
  "Lektvary": { icon: "🧪", subcats: ["Léčivé","Posilující","Ochranné","Jedovaté","Ostatní lektvary"] },
  "Svitky": { icon: "📜", subcats: ["Útočné","Obranné","Užitkové","Ostatní svitky"] },
  "Magické předměty": { icon: "✨", subcats: ["Prsteny","Amulety","Hole a hůlky","Knihy","Ostatní magické"] },
  "Běžné předměty": { icon: "🔧", subcats: ["Nástroje","Jídlo a pití","Oblečení","Světelné zdroje","Lana a řetězy","Ostatní běžné"] },
  "Materiály": { icon: "🪨", subcats: ["Kovy","Dřevo","Kůže","Textil","Kámen","Ostatní materiály"] },
  "Suroviny": { icon: "🌿", subcats: ["Bylinky","Živočišné","Minerální","Magické složky","Ostatní suroviny"] },
  "Munice": { icon: "🎯", subcats: ["Šípy","Šipky (kuše)","Kulky","Vrhací zbraně","Ostatní munice"] },
  "Dopravní prostředky": { icon: "🚢", subcats: ["Lodě","Vozy","Koně a jízdní zvířata","Ostatní doprava"] },
  "Batohy": { icon: "🎒", subcats: ["Batohy","Měšce","Brašny","Vaky","Magické úložné","Ostatní batohy"] },
  "Opasky": { icon: "🪢", subcats: ["Bojové opasky","Užitkové opasky","Magické opasky"] },
  "Pláště": { icon: "🧥", subcats: ["Ochranné pláště","Magické pláště","Běžné pláště"] },
  "Šperky": { icon: "💍", subcats: ["Prsteny (šperk)","Náhrdelníky","Náramky","Čelenky","Brože","Ostatní šperky"] },
  "Ostatní předměty": { icon: "📦", subcats: ["Různé"] }
};

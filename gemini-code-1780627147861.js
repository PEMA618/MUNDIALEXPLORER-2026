// ==============================================================================
// 1. BASE DE DONNÉES FINALE — LES 48 PAYS DU MONDIAL (GROUPES A À L)
// ==============================================================================
const mondialData = {
    // GROUPE A
    "mexique": { nom: "Mexique", groupe: "A", fete: "16 Septembre", monument: "L'Ange de l'Indépendance", capitale: "Mexico", star: "Santiago Giménez", maillot: "Vert classique aux motifs aztèques", villes: ["Mexico", "Guadalajara", "Monterrey"] },
    "afrique_du_sud": { nom: "Afrique du Sud", groupe: "A", fete: "27 Avril", monument: "La Montagne de la Table", capitale: "Pretoria", star: "Percy Tau", maillot: "Jaune or et bandes vertes", villes: ["Mexico", "Guadalajara", "Monterrey"] },
    "coree_du_sud": { nom: "Corée du Sud", groupe: "A", fete: "15 Août", monument: "Le Palais de Gyeongbokgung", capitale: "Séoul", star: "Son Heung-min", maillot: "Rouge vibrant et accents noirs", villes: ["Mexico", "Monterrey"] },
    "tchequie": { nom: "Tchéquie", groupe: "A", fete: "28 Octobre", monument: "Le Pont Charles à Prague", capitale: "Prague", star: "Tomáš Souček", maillot: "Rouge et bleu roi", villes: ["Mexico", "Monterrey"] },

    // GROUPE B
    "canada": { nom: "Canada", groupe: "B", fete: "1er Juillet", monument: "La Tour CN", capitale: "Ottawa", star: "Alphonso Davies", maillot: "Rouge feuille d'érable rétro", villes: ["Toronto", "Vancouver"] },
    "bosnie": { nom: "Bosnie-Herzégovine", groupe: "B", fete: "1er Mars", monument: "Le Vieux Pont de Mostar", capitale: "Sarajevo", star: "Edin Džeko", maillot: "Bleu roi à bande jaune", villes: ["Toronto", "Vancouver"] },
    "qatar": { nom: "Qatar", groupe: "B", fete: "18 Décembre", monument: "La Tour Aspire", capitale: "Doha", star: "Akram Afif", maillot: "Grenat et blanc géométrique", villes: ["Toronto", "Vancouver"] },
    "suisse": { nom: "Suisse", groupe: "B", fete: "1er Août", monument: "Le Cervin", capitale: "Berne", star: "Granit Xhaka", maillot: "Rouge bordeaux à lignes blanches", villes: ["Toronto", "Vancouver"] },

    // GROUPE C
    "bresil": { nom: "Brésil", groupe: "C", fete: "7 Septembre", monument: "Le Christ Rédempteur", capitale: "Brasília", star: "Vinícius Júnior", maillot: "Jaune canari classique (Amarelinha)", villes: ["Miami", "New York", "Boston"] },
    "maroc": { nom: "Maroc", groupe: "C", fete: "18 Novembre", monument: "La Mosquée Hassan II", capitale: "Rabat", star: "Achraf Hakimi", maillot: "Rouge profond à col vert", villes: ["Toronto", "New York", "Miami"] },
    "paraguay": { nom: "Paraguay", groupe: "C", fete: "14 Mai", monument: "Le Panthéon des Héros", capitale: "Asunción", star: "Julio Enciso", maillot: "Rayé rouge et blanc traditionnel", villes: ["Los Angeles", "Miami"] },
    "australie": { nom: "Australie", groupe: "C", fete: "26 Janvier", monument: "L'Opéra de Sydney", capitale: "Canberra", star: "Mathew Ryan", maillot: "Or et vert forêt", villes: ["Los Angeles", "Miami"] },

    // GROUPE D
    "etats_unis": { nom: "États-Unis", groupe: "D", fete: "4 Juillet", monument: "La Statue de la Liberté", capitale: "Washington D.C.", star: "Christian Pulisic", maillot: "Blanc épuré à bandes patriotiques", villes: ["Los Angeles", "Seattle", "San Francisco"] },
    "turquie": { nom: "Turquie", groupe: "D", fete: "29 Octobre", monument: "Sainte-Sophie", capitale: "Ankara", star: "Hakan Çalhanoğlu", maillot: "Blanc à bande pectorale rouge", villes: ["Los Angeles", "Seattle", "San Francisco"] },
    "ecosse": { nom: "Écosse", groupe: "D", fete: "30 Novembre", monument: "Le Château d'Édimbourg", capitale: "Édimbourg", star: "Andrew Robertson", maillot: "Bleu marine à motif tartan écossais", villes: ["Los Angeles", "Seattle", "San Francisco"] },
    "equateur": { nom: "Équateur", groupe: "D", fete: "10 Août", monument: "Le Monument de la Mitad del Mundo", capitale: "Quito", star: "Piero Hincapié", maillot: "Jaune éclatant à liserés bleus", villes: ["Miami", "New York"] },

    // GROUPE E
    "belgique": { nom: "Belgique", groupe: "E", fete: "21 Juillet", monument: "L'Atomium à Bruxelles", capitale: "Bruxelles", star: "Kevin De Bruyne", maillot: "Rouge diable et accents dorés", villes: ["Vancouver", "Seattle"] },
    "allemagne": { nom: "Allemagne", groupe: "E", fete: "3 Octobre", monument: "La Porte de Brandebourg", capitale: "Berlin", star: "Jamal Musiala", maillot: "Blanc rétro aux couleurs du drapeau", villes: ["Vancouver", "Seattle", "San Francisco"] },
    "algerie": { nom: "Algérie", groupe: "E", fete: "5 Juillet", monument: "Le Mémorial du Martyr", capitale: "Alger", star: "Riyad Mahrez", maillot: "Blanc et vert épuré", villes: ["Vancouver", "Seattle"] },
    "nouvelle_zelande": { nom: "Nouvelle-Zélande", groupe: "E", fete: "6 Février", monument: "La Sky Tower", capitale: "Wellington", star: "Chris Wood", maillot: "All White intégral iconique", villes: ["Vancouver", "Seattle"] },

    // GROUPE F
    "italie": { nom: "Italie", groupe: "F", fete: "2 Juin", monument: "Le Colisée de Rome", capitale: "Rome", star: "Nicolò Barella", maillot: "Bleu azur traditionnel (Azzurri)", villes: ["New York", "Philadelphia", "Boston"] },
    "cameroun": { nom: "Cameroun", groupe: "F", fete: "20 Mai", monument: "Le Monument de la Réunification", capitale: "Yaoundé", star: "Bryan Mbeumo", maillot: "Vert forêt à tête de lion", villes: ["New York", "Philadelphia"] },
    "colombie": { nom: "Colombie", groupe: "F", fete: "20 Juillet", monument: "Le Sanctuaire de Las Lajas", capitale: "Bogota", star: "Luis Díaz", maillot: "Jaune rétro avec graphismes latéraux", villes: ["New York", "Boston"] },
    "perou": { nom: "Pérou", groupe: "F", fete: "28 Juillet", monument: "Le Machu Picchu", capitale: "Lima", star: "Renato Tapia", maillot: "Blanc à bande diagonale rouge historique", villes: ["Philadelphia", "Boston"] },

    // GROUPE G
    "espagne": { nom: "Espagne", groupe: "G", fete: "12 Octobre", monument: "La Sagrada Família", capitale: "Madrid", star: "Lamine Yamal", maillot: "Rouge furia et détails jaune or", villes: ["Miami", "Atlanta", "Orlando"] },
    "cote_divoire": { nom: "Côte d'Ivoire", groupe: "G", fete: "7 Août", monument: "La Basilique Notre-Dame de la Paix", capitale: "Yamoussoukro", star: "Franck Kessié", maillot: "Orange vif emblématique", villes: ["Miami", "Atlanta"] },
    "japon": { nom: "Japon", groupe: "G", fete: "11 Février", monument: "Le Mont Fuji", capitale: "Tokyo", star: "Kaoru Mitoma", maillot: "Bleu samouraï aux motifs d'origami", villes: ["Atlanta", "Orlando"] },
    "autriche": { nom: "Autriche", groupe: "G", fete: "26 Octobre", monument: "Le Château de Schönbrunn", capitale: "Vienne", star: "David Alaba", maillot: "Rouge et blanc à aigle impérial", villes: ["Miami", "Orlando"] },

    // GROUPE H
    "croatie": { nom: "Croatie", groupe: "H", fete: "30 Mai", monument: "L'Amphithéâtre de Pula", capitale: "Zagreb", star: "Luka Modrić", maillot: "Damier rouge et blanc légendaire", villes: ["Dallas", "Houston", "Kansas City"] },
    "tunisie": { nom: "Tunisie", groupe: "H", fete: "20 Mars", monument: "L'Amphithéâtre d'El Jem", capitale: "Tunis", star: "Ellyes Skhiri", maillot: "Blanc à détails de calligraphie rouge", villes: ["Dallas", "Houston"] },
    "egypte": { nom: "Égypte", groupe: "H", fete: "23 Juillet", monument: "Les Pyramides de Gizeh", capitale: "Le Caire", star: "Mohamed Salah", maillot: "Rouge impérial à motifs de lotus", villes: ["Dallas", "Kansas City"] },
    "coree_du_nord": { nom: "Corée du Nord", groupe: "H", fete: "9 Septembre", monument: "La Tour de l'Idée Juche", capitale: "Pyongyang", star: "Han Kwang-song", maillot: "Rouge uni et lignes blanches", villes: ["Houston", "Kansas City"] },

    // GROUPE I
    "france": { nom: "France", groupe: "I", fete: "14 Juillet", monument: "La Tour Eiffel", capitale: "Paris", star: "Kylian Mbappé", maillot: "Bleu marine élégant à coq doré", villes: ["New York", "Boston", "Miami"] },
    "senegal": { nom: "Sénégal", groupe: "I", fete: "4 Avril", monument: "Le Monument de la Renaissance Africaine", capitale: "Dakar", star: "Sadio Mané", maillot: "Blanc à motifs de lion sur la poitrine", villes: ["New York", "Boston", "Miami"] },
    "nigeria": { nom: "Nigéria", groupe: "I", fete: "1er Octobre", monument: "Le Rocher de Zuma", capitale: "Abuja", star: "Victor Osimhen", maillot: "Vert fluo et bandes blanches graphiques", villes: ["New York", "Miami"] },
    "iran": { nom: "Iran", groupe: "I", fete: "1er Avril", monument: "La Tour Azadi", capitale: "Téhéran", star: "Mehdi Taremi", maillot: "Blanc à col rouge et guépard imprimé", villes: ["Boston", "Miami"] },

    // GROUPE J
    "argentine": { nom: "Argentine", groupe: "J", fete: "9 Juillet", monument: "L'Obélisque de Buenos Aires", capitale: "Buenos Aires", star: "Lionel Messi", maillot: "Rayé bleu ciel et blanc (Albiceleste)", villes: ["Dallas", "Houston", "Miami"] },
    "uruguay": { nom: "Uruguay", groupe: "J", fete: "25 Août", monument: "Le Palacio Salvo", capitale: "Montevideo", star: "Federico Valverde", maillot: "Bleu céleste uni iconique", villes: ["Dallas", "Houston"] },
    "ghana": { nom: "Ghana", groupe: "J", fete: "6 Mars", monument: "La Place de l'Indépendance", capitale: "Accra", star: "Mohammed Kudus", maillot: "Blanc avec l'Étoile Noire au centre", villes: ["Dallas", "Miami"] },
    "islande": { nom: "Islande", groupe: "J", fete: "17 Juin", monument: "L'église Hallgrímskirkja", capitale: "Reykjavik", star: "Albert Guðmundsson", maillot: "Bleu azur avec lignes d'eau", villes: ["Houston", "Miami"] },

    // GROUPE K
    "portugal": { nom: "Portugal", groupe: "K", fete: "10 Juin", monument: "La Tour de Belém", capitale: "Lisbonne", star: "Rafael Leão", maillot: "Rouge sang de bœuf et vert forêt", villes: ["Houston", "Dallas", "Atlanta"] },
    "pays_bas": { nom: "Pays-Bas", groupe: "K", fete: "27 Avril", monument: "Les Moulins de Kinderdijk", capitale: "Amsterdam", star: "Virgil van Dijk", maillot: "Orange mécanique intégral radiant", villes: ["Houston", "Dallas"] },
    "mali": { nom: "Mali", groupe: "K", fete: "22 Septembre", monument: "La Grande Mosquée de Djenné", capitale: "Bamako", star: "Yves Bissouma", maillot: "Blanc avec aigle tricolore géant", villes: ["Houston", "Atlanta"] },
    "honduras": { nom: "Honduras", groupe: "K", fete: "15 Septembre", monument: "Les Ruines de Copán", capitale: "Tegucigalpa", star: "Luis Palma", maillot: "Blanc à bandes verticales bleu clair", villes: ["Dallas", "Atlanta"] },

    // GROUPE L
    "angleterre": { nom: "Angleterre", groupe: "L", fete: "23 Avril", monument: "Big Ben", capitale: "Londres", star: "Jude Bellingham", maillot: "Blanc immaculé et trois lions bleus", villes: ["New York", "Philadelphia", "Boston"] },
    "jordan": { nom: "Jordanie", groupe: "L", fete: "25 Mai", monument: "La Cité de Pétra", capitale: "Amman", star: "Musa Al-Taamari", maillot: "Blanc uni à liserés rouges", villes: ["New York", "Philadelphia"] },
    "ukraine": { nom: "Ukraine", groupe: "L", fete: "24 Août", monument: "La Cathédrale Sainte-Sophie", capitale: "Kyiv", star: "Artem Dovbyk", maillot: "Jaune blé et détails bleu azur", villes: ["New York", "Boston"] },
    "arabie_saoudite": { nom: "Arabie Saoudite", groupe: "L", fete: "23 Septembre", monument: "La Forteresse de Masmak", capitale: "Riyad", star: "Salem Al-Dawsari", maillot: "Vert émeraude aux lignes palmier", villes: ["Philadelphia", "Boston"] }
};

// ==============================================================================
// 2. BASE DE DONNÉES DES VILLES HÔTES & CARACTÉRISTIQUES DES STADES
// ==============================================================================
const stadesData = {
    "Mexico": { stade: "Stade Azteca", capacite: "87 523 places", climat: "⛰️ Altitude (2200m). Air sec, récupération physique difficile.", tip: "Stade historique. Premier à accueillir 3 Coupes du Monde." },
    "Guadalajara": { stade: "Estadio Akron", capacite: "48 071 places", climat: "☀️ Chaud et ensoleillé.", tip: "Stade ultra-moderne conçu en forme de volcan." },
    "Monterrey": { stade: "Estadio BBVA", capacite: "53 500 places", climat: "🔥 Chaleur lourde. Hydratation maximum.", tip: "Vue spectaculaire sur les montagnes de la Sierra Madre." },
    "Toronto": { stade: "BMO Field", capacite: "45 736 places", climat: "🍃 Frais en bord de lac.", tip: "Idéal pour les balades piétonnes avant-match." },
    "Vancouver": { stade: "BC Place", capacite: "54 500 places", climat: "🌦️ Tempéré, stade couvert.", tip: "Toit rétractable géant au centre-ville." },
    "Miami": { stade: "Hard Rock Stadium", capacite: "65 326 places", climat: "🌴 Très chaud et tropical. Risque d'orages.", tip: "Ambiance latino garantie, très proche des plages." },
    "New York": { stade: "MetLife Stadium", capacite: "82 500 places", climat: "🌤️ Estival classique, plus frais en soirée.", tip: "Accueillera la Grande Finale. Hub logistique majeur." },
    "Boston": { stade: "Gillette Stadium", capacite: "65 878 places", climat: "💨 Brise marine agréable, été doux.", tip: "Situé à Foxborough, anticipez vos réservations de bus." },
    "Los Angeles": { stade: "SoFi Stadium", capacite: "70 240 places", climat: "😎 Climat californien parfait, ensoleillé.", tip: "Écrans géants circulaires suspendus uniques." },
    "Seattle": { stade: "Lumen Field", capacite: "69 000 places", climat: "☁️ Doux mais humide, bruines possibles.", tip: "Stade réputé pour être le plus bruyant des États-Unis." },
    "San Francisco": { stade: "Levi's Stadium", capacite: "68 500 places", climat: "☀️ Ensoleillé avec vent frais venant de la baie.", tip: "Stade ultra-connecté au cœur de la Silicon Valley." },
    "Dallas": { stade: "AT&T Stadium", capacite: "80 000 places", climat: "🥵 Extrêmement chaud dehors (Stade climatisé).", tip: "Écran géant suspendu de 50 mètres de long." },
    "Houston": { stade: "NRG Stadium", capacite: "72 220 places", climat: "😓 Forte humidité texane (Stade climatisé).", tip: "Toit amovible entièrement rétractable." },
    "Atlanta": { stade: "Mercedes-Benz Stadium", capacite: "71 000 places", climat: "🍑 Tempéré et constant (Dôme fermé).", tip: "Toit ouvrant unique inspiré d'un objectif photo." },
    "Philadelphia": { stade: "Lincoln Financial Field", capacite: "69 796 places", climat: "🌤️ Climat estival chaud et continental.", tip: "Stade éco-responsable fonctionnant à l'énergie solaire." },
    "Kansas City": { stade: "Arrowhead Stadium", capacite: "76 416 places", climat: "☀️ Climat estival typique du Midwest.", tip: "Capitale américaine des célèbres barbecues d'avant-match." },
    "Orlando": { stade: "Camping World Stadium", capacite: "60 219 places", climat: "⚡ Subtropical lourd, humide et chaud.", tip: "Idéal pour combiner football et parcs d'attractions." }
};

// ==============================================================================
// 3. LOGIQUE APPLICATIVE ET RENDU VISUEL INTERACTIF
// ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("teamSelect");
    const card = document.getElementById("resultCard");

    // Remplissage automatique et tri alphabétique complet des 48 pays
    Object.keys(mondialData).sort().forEach(key => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = mondialData[key].nom;
        select.appendChild(option);
    });

    // Gestion de l'affichage lors du choix d'un pays
    select.addEventListener("change", (e) => {
        const key = e.target.value;
        if (!key) {
            card.style.display = "none";
            return;
        }

        const equipe = mondialData[key];
        let timelineHtml = "";
        
        // Construction dynamique de la frise chronologique logistique
        equipe.villes.forEach((ville, index) => {
            const stadeInfo = stadesData[ville] || { stade: "Stade Officiel de Poule", capacite: "Non communiquée", climat: "Estival", tip: "À découvrir." };
            
            timelineHtml += `
                <div class="timeline-item" style="margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px dashed #e2e8f0;">
                    <div class="city-name" style="font-weight:bold; color:#0A5C36;">📍 Étape ${index + 1} : ${ville}</div>
                    <div style="margin: 4px 0; font-weight: 600; color: #1B365D;"> Stamford 🏟️ ${stadeInfo.stade} <span style="font-weight:normal; font-size:0.9em; color:#718096;">(${stadeInfo.capacite})</span></div>
                    <div class="city-details" style="font-style: italic; color:#4a5568; font-size:0.9em;">${stadeInfo.climat}</div>
                    <div style="font-size:0.85em; color:#2c3e50; margin-top:3px; background:#f7fafc; padding:5px; border-radius:4px;">💡 <em>Conseil : ${stadeInfo.tip}</em></div>
                </div>
            `;
        });

        // Rendu final unifié des variables d'intérêt
        card.innerHTML = `
            <div class="meta-grid">
                <div class="meta-item">
                    <h4>Groupe Affiche</h4>
                    <p style="font-weight: bold; color: #0A5C36;">Groupe ${equipe.groupe}</p>
                </div>
                <div class="meta-item">
                    <h4>Fête Nationale</h4>
                    <p>${equipe.fete}</p>
                </div>
            </div>
            
            <div style="background:#edf2f7; padding:12px; border-radius:8px; margin: 15px 0; font-size:0.95em; line-height:1.5;">
                <p style="margin:0 0 5px 0;">🏛️ <strong>Capitale :</strong> ${equipe.capitale}</p>
                <p style="margin:0 0 5px 0;">⭐ <strong>Capitaine / Star :</strong> ${equipe.star}</p>
                <p style="margin:0 0 5px 0;">👕 <strong>Maillot Phare :</strong> ${equipe.maillot}</p>
                <p style="margin:0;">🗼 <strong>Patrimoine Associé :</strong> ${equipe.monument}</p>
            </div>
            
            <h3 style="margin-top:20px; font-size:1.1em; color:#1B365D;">✈️ Arborescence des Déplacements :</h3>
            <div class="timeline">${timelineHtml}</div>

            <div class="affiliation-box">
                🎒 <strong>Besoin de loger vos clients ou supporters ?</strong> Plus de 10 000 fans planifient actuellement leur séjour pour suivre l'équipe : <strong>${equipe.nom}</strong>.
                <a href="https://www.booking.com/index.html?aid=VOTRE_ID_AFFILIE" target="_blank" class="btn-booking">Voir les hôtels disponibles à ${equipe.villes[0]} 🏨</a>
            </div>
        `;
        card.style.display = "block";
    });
});

// ==============================================================================
// 4. CODE RÉSEAU — GESTION DU SERVICE WORKER (CORRIGÉ DU CRASH D'APOSTROPHE)
// ==============================================================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker opérationnel !'))
            .catch(err => console.log("Erreur d'activation réseau")); // Guillemets doubles utilisés pour éviter le bug d'apostrophe
    });
}
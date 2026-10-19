// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener("DOMContentLoaded", function () {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand();
  tg.setHeaderColor("#14072a");
  tg.setBackgroundColor("#06031c");

  // 🎁 NOTIFICATION CALIDREAM
function showWelcomeOffer() {
    const overlay = document.createElement("div");

    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(8px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        padding: 20px;
    `;

    overlay.innerHTML = `
        <div style="
            background: linear-gradient(145deg, #2a0b45, #14072a);
            border: 2px solid #a62bdd;
            border-radius: 22px;
            padding: 30px 20px;
            text-align: center;
            color: white;
            width: 100%;
            max-width: 350px;
            box-shadow: 0 0 30px #a62bdd80;
        ">
            <h2>🎁😼 OFFRE CALIDREAM 😼🎁</h2>

            <p style="font-weight:bold;">
                Pour toutes les commandes :
            </p>

            <p>
                Un paquet de cigarettes, un paquet de feuille
                et un grinder offert 🎁
            </p>

            <button id="close-welcome-offer" style="
                background: linear-gradient(90deg, #8e28da, #f06d1d);
                border: none;
                border-radius: 12px;
                padding: 15px;
                color: white;
                font-weight: bold;
                width: 100%;
                cursor: pointer;
                margin-top: 15px;
            ">
                Découvrir la boutique ✨
            </button>
        </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById("close-welcome-offer")
        .addEventListener("click", () => overlay.remove());
}

  const progressBar = document.getElementById("myBar");
  const loader = document.getElementById("page-loader");

  // 1. On lance l'animation de la barre après un tout petit délai
  setTimeout(() => {
    if (progressBar) {
      progressBar.style.width = "100%";
    }
  }, 100);

  // 2. On attend la fin de l'animation (2.5 secondes ici) pour cacher le loader
  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0"; // Effet de fondu
      loader.style.transition = "opacity 0.5s ease";

      setTimeout(() => {
    loader.style.display = "none";
    loader.classList.remove("active");

    document.getElementById("page-home").classList.add("active");

    // 🎁 Affiche l'offre après le chargement
    showWelcomeOffer();

}, 500);
    }
  }, 2600); // 2600ms = 2.5s d'animation + 0.1s de délai

  // --- CONFIGURATION DES LIENS DE CONTACT ---
  // Liens CaliDream : anciens liens retirés.
  // Ajoute ici les nouveaux réseaux quand tu les auras.
  const contactLinks = [
{
      name: "WHATSAPP 📞",
      url: "https://wa.me/33743914796",
      id: "whatsapp",
      className: "whatsapp", // Il faudra peut-être ajouter ce CSS (Jaune)
      text: "WHATSAPP 📞",
    },
{
      name: "SIGNAL 📶",
      url: "https://signal.me/#eu/hdSnPM2SMS8koBOkAsFTQuYu0L3ImwOpdmxJktwjHX1NKtx92RpLEpRNqXAAVaGn",
      id: "signal",
      className: "signal", // Il faudra peut-être ajouter ce CSS (Jaune)
      text: "SIGNAL 📶",
    },

  ];

  // --- DONNÉES DE L'APPLICATION (CALIDREAM) ---
  const appData = [
   /*  {
    id: "DryPremium",
    name: "Dry premium",
    type: "DryPremium",
    quality: "Dry premium",
    image: "Categ3X.png",

      products: [
       
      ],
    }, */
    {
    id: "Static",
    name: "Static 🥇",
    type: "Static",
    quality: "Static 🥇",
    image: "CategDouble.png",

      products: [
         {
          id: "FFx26mm 🍒🍊🏔️",
          flag: "🇲🇦",
          name: "FFx26mm 🍒🍊🏔️",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "🌟 Static Premium",
          image: "ProductF2.jpg",
          video: "VideoF2.mp4",
          description:   "🌟 Static Premium",
          tarifs: [
            { weight: "5G", price: 90.0 },
            { weight: "10G", price: 170.0 },
            { weight: "20G", price: 330.0 },
            { weight: "50G", price: 700.0 },
            { weight: "100G", price: 1300.0 },
          ],
        },
         {
          id: "Slapz 💥⛽️",
          flag: "🇲🇦",
          name: "Slapz 💥⛽️",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "🌟 Static Premium",
          image: "ProductSZ.png",
          video: "VideoSZ.mp4",
          description:   "🌟 Static Premium",
          tarifs: [
            { weight: "5G", price: 90.0 },
            { weight: "10G", price: 170.0 },
            { weight: "20G", price: 330.0 },
            { weight: "50G", price: 700.0 },
            { weight: "100G", price: 1300.0 },
          ],
        },
         {
          id: "WatermelonZ🍉🍭",
          flag: "🇲🇦",
          name: "WatermelonZ🍉🍭",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "🌟 Static Premium",
          image: "ProductWZ.png",
          video: "VideoWZ.mp4",
          description:   "🌟 Static Premium",
          tarifs: [
            { weight: "5G", price: 90.0 },
            { weight: "10G", price: 170.0 },
            { weight: "20G", price: 330.0 },
            { weight: "50G", price: 700.0 },
            { weight: "100G", price: 1300.0 },
          ],
        },
      ],
    },
    {
    id: "Frozen",
    name: "Frozen 🇲🇦🥇",
    type: "Frozen",
    quality: "Frozen 🇲🇦🥇",
    image: "CategFrozen.png",

      products: [
        {
          id: "Permanant maker🍬🇺🇸",
          flag: "🇲🇦",
          name: "Permanant maker🍬🇺🇸",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "❄️ FreshFrozen",
          image: "ProductPM.png",
          video: "VideoPM.mp4",
          description:   "❄️ FreshFrozen",
          tarifs: [
            { weight: "5G", price: 80.0 },
            { weight: "10G", price: 150.0 },
            { weight: "20G", price: 290.0 },
            { weight: "50G", price: 600.0 },
            { weight: "100G", price: 1150.0 },
          ],
        },
        {
          id: "MelonZ 🍈🍭",
          flag: "🇲🇦",
          name: "MelonZ 🍈🍭",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "❄️ FreshFrozen",
          image: "ProductMZ.png",
          video: "VideoMZ.mp4",
          description:   "❄️ FreshFrozen",
          tarifs: [
            { weight: "5G", price: 80.0 },
            { weight: "10G", price: 150.0 },
            { weight: "20G", price: 290.0 },
            { weight: "50G", price: 600.0 },
            { weight: "100G", price: 1150.0 },
          ],
        },
        {
          id: "GMO 🧄🧅⛽️",
          flag: "🇲🇦",
          name: "GMO 🧄🧅⛽️",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "❄️ FreshFrozen",
          image: "ProductGMO.png",
          video: "VideoGMO.mp4",
          description:   "❄️ FreshFrozen",
          tarifs: [
            { weight: "5G", price: 80.0 },
            { weight: "10G", price: 150.0 },
            { weight: "20G", price: 290.0 },
            { weight: "50G", price: 600.0 },
            { weight: "100G", price: 1150.0 },
          ],
        },
        {
          id: "Maracuya 🥭🌴🏖️",
          flag: "🇲🇦",
          name: "Maracuya 🥭🌴🏖️",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "❄️ FreshFrozen",
          image: "ProductM.png",
          video: "VideoM.mp4",
          description:   "❄️ FreshFrozen",
          tarifs: [
            { weight: "5G", price: 80.0 },
            { weight: "10G", price: 150.0 },
            { weight: "20G", price: 290.0 },
            { weight: "50G", price: 600.0 },
            { weight: "100G", price: 1150.0 },
          ],
        },
        {
          id: "MaroccanPeach 🇲🇦🍑🤤",
          flag: "🇲🇦",
          name: "MaroccanPeach 🇲🇦🍑🤤",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "❄️ FreshFrozen",
          image: "ProductMP.png",
          video: "VideoMP.mov",
          description:   "❄️ FreshFrozen",
          tarifs: [
            { weight: "5G", price: 80.0 },
            { weight: "10G", price: 150.0 },
            { weight: "20G", price: 290.0 },
            { weight: "50G", price: 600.0 },
            { weight: "100G", price: 1150.0 },
          ],
        },
        {
          id: "Fanta 🥤🧡",
          flag: "🇲🇦",
          name: "Fanta 🥤🧡",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "❄️ FreshFrozen",
          image: "ProductF.png",
          video: "VideoF.mp4",
          description:   "❄️ FreshFrozen",
          tarifs: [
            { weight: "5G", price: 80.0 },
            { weight: "10G", price: 150.0 },
            { weight: "20G", price: 290.0 },
            { weight: "50G", price: 600.0 },
            { weight: "100G", price: 1150.0 },
          ],
        },
        {
          id: "sb x gold cherry 🍊🍒🟣✨",
          flag: "🇲🇦",
          name: "sb x gold cherry 🍊🍒🟣✨",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "❄️ FreshFrozen",
          image: "ProductSBG.png",
          video: "VideoSBG.mp4",
          description:   "❄️ FreshFrozen",
          tarifs: [
            { weight: "5G", price: 80.0 },
            { weight: "10G", price: 150.0 },
            { weight: "20G", price: 290.0 },
            { weight: "50G", price: 600.0 },
            { weight: "100G", price: 1150.0 },
          ],
        },
        {
          id: "ICC x TropCherry🍦🍒",
          flag: "🇲🇦",
          name: "ICC x TropCherry🍦🍒",
          farm: "TerpValley 🏜️",
          promoEligible: true,
          type: "❄️ FreshFrozen",
          image: "ProductICC.jpg",
          video: "VideoICC.mov",
          description:   "❄️ FreshFrozen",
          tarifs: [
            { weight: "5G", price: 80.0 },
            { weight: "10G", price: 150.0 },
            { weight: "20G", price: 290.0 },
            { weight: "50G", price: 600.0 },
            { weight: "100G", price: 1150.0 },
          ],
        },
      ],
    },
    {
    id: "HashUS",
    name: "Hash US🇺🇸",
    type: "HashUS",
    quality: "Hash US🇺🇸",
    image: "CategJauneUsa.png",

      products: [
         {
          id: "Purple Dream💜✨",
          flag: "🇺🇸",
          name: "Purple Dream💜✨",
          farm: "CaliDream 💫",
          promoEligible: true,
          type: "👑 Static USA",
          image: "ProductPD.png",
          video: "VideoPD.mov",
          description:   "Static USA exclusif C.D 🦅",
          tarifs: [
            { weight: "2G", price: 80.0 },
            { weight: "5G", price: 170.0 },
            { weight: "10G", price: 340.0 },
            { weight: "50G", price: 1350.0 },
            { weight: "100G", price: 2500.0 },
          ],
        },
        {
          id: "Wpff 90-73 🔱",
          flag: "🇺🇸",
          name: "Wpff 90-73 🔱",
          farm: "ByUsForYou 🛍️",
          promoEligible: true,
          type: "Weed",
          image: "ProductWP.png",
          images:[ "ProductWP1.jpg","ProductWP2.jpg","ProductWP3.jpg"],
          video: "VideoWP.mp4",
          description:
             "Wpff SingleSource 90-73💎🥇🔱",
          variantTitle: 'Saveurs ❄️ :',
          jars: [
              { name: 'Gaznivore', emoji: '⛽️🦖', colorClass: 'style-purple' },
              { name: 'PinkChardonay', emoji: '🍾🌷⛽️', colorClass: 'style-brown' },
              { name: 'Rhum baba', emoji: '🍹🎋', colorClass: 'style-gold' }
                ],
          tarifs: [
            { weight: "2g", price: 80.0 },
            { weight: "5g", price: 170.0 },
            { weight: "10g", price: 320.0 },
          ],
        },
        {
          id: "Full Spectrum  💎",
          flag: "🇺🇸",
          name: "Full Spectrum  💎",
          farm: "ByUsForYou 🛍️",
          promoEligible: true,
          type: "Weed",
          image: "ProductFS.png",
          video: "VideoFS.mov",
          description:
             "✨ Wpff SingleSource ✨",
          variantTitle: 'Saveurs ❄️ :',
          jars: [
              { name: 'Gaznivore', emoji: '⛽️🦖', colorClass: 'style-purple' },
              { name: 'Yellow Fresca', emoji: '💛🍍🍈', colorClass: 'style-orange' },
              { name: 'PinkChardonay', emoji: '🍾🌷⛽️', colorClass: 'style-brown' },
              { name: 'Lemon Incest', emoji: '⛽️🍋', colorClass: 'style-red' },
                ],
          tarifs: [
            { weight: "2g", price: 70.0 },
            { weight: "5g", price: 140.0 },
            { weight: "10g", price: 250.0 },
          ],
        },
         {
          id: "SUNSET Z🇺🇸",
          flag: "🇺🇸",
          name: "SUNSET Z🇺🇸",
          farm: "HashForceOne ✈️🇺🇸",
          promoEligible: true,
          type: "🍁 Static 70/130",
          image: "ProductSZ.jpg",
          video: "VideoSZ.mov",
          description:   "🍁 Static Premium 70/130",
          tarifs: [
            { weight: "2G", price: 80.0 },
            { weight: "5G", price: 170.0 },
            { weight: "10G", price: 340.0 },
            { weight: "50G", price: 1350.0 },
            { weight: "100G", price: 2500.0 },
          ],
        },
         {
          id: "VELVET SKY🇺🇸",
          flag: "🇺🇸",
          name: "VELVET SKY🇺🇸",
          farm: "HashForceOne ✈️🇺🇸",
          promoEligible: true,
          type: "🍁 Static 70/130",
          image: "ProductVS.jpg",
          video: "VideoVS.mov",
          description:   "🍁 Static Premium 70/130",
          tarifs: [
            { weight: "2G", price: 80.0 },
            { weight: "5G", price: 170.0 },
            { weight: "10G", price: 340.0 },
            { weight: "50G", price: 1350.0 },
            { weight: "100G", price: 2500.0 },
          ],
        },
         {
          id: "ZESTO🇺🇸",
          flag: "🇺🇸",
          name: "ZESTO🇺🇸",
          farm: "HashForceOne ✈️🇺🇸",
          promoEligible: true,
          type: "🍁 Static 70/130",
          image: "ProductZ.jpg",
          video: "VideoZ.mov",
          description:   "🍁 Static Premium 70/130",
          tarifs: [
            { weight: "2G", price: 80.0 },
            { weight: "5G", price: 170.0 },
            { weight: "10G", price: 340.0 },
            { weight: "50G", price: 1350.0 },
            { weight: "100G", price: 2500.0 },
          ],
        },
         {
          id: "BERRY DRIP🇺🇸",
          flag: "🇺🇸",
          name: "BERRY DRIP🇺🇸",
          farm: "HashForceOne ✈️🇺🇸",
          promoEligible: true,
          type: "🍁 Static 70/130",
          image: "ProductBD.jpg",
          video: "VideoBD.mov",
          description:   "🍁 Static Premium 70/130",
          tarifs: [
            { weight: "2G", price: 80.0 },
            { weight: "5G", price: 170.0 },
            { weight: "10G", price: 340.0 },
            { weight: "50G", price: 1350.0 },
            { weight: "100G", price: 2500.0 },
          ],
        },
         {
          id: "CEREAL MILK🇺🇸",
          flag: "🇺🇸",
          name: "CEREAL MILK🇺🇸",
          farm: "HashForceOne ✈️🇺🇸",
          promoEligible: true,
          type: "🍁 Static 70/130",
          image: "ProductCM.jpg",
          video: "VideoCM.mov",
          description:   "🍁 Static Premium 70/130",
          tarifs: [
            { weight: "2G", price: 80.0 },
            { weight: "5G", price: 170.0 },
            { weight: "10G", price: 340.0 },
            { weight: "50G", price: 1350.0 },
            { weight: "100G", price: 2500.0 },
          ],
        },
         {
          id: "JEALOUSY🇺🇸",
          flag: "🇺🇸",
          name: "JEALOUSY🇺🇸",
          farm: "HashForceOne ✈️🇺🇸",
          promoEligible: true,
          type: "🍁 Static 70/130",
          image: "ProductJ.jpg",
          video: "VideoJ.mov",
          description:   "🍁 Static Premium 70/130",
          tarifs: [
            { weight: "2G", price: 80.0 },
            { weight: "5G", price: 170.0 },
            { weight: "10G", price: 340.0 },
            { weight: "50G", price: 1350.0 },
            { weight: "100G", price: 2500.0 },
          ],
        },
         {
          id: "GUSHERS PIE🇺🇸",
          flag: "🇺🇸",
          name: "GUSHERS PIE🇺🇸",
          farm: "HashForceOne ✈️🇺🇸",
          promoEligible: true,
          type: "🍁 Static 70/130",
          image: "ProductGP.jpg",
          video: "VideoGP.mov",
          description:   "🍁 Static Premium 70/130",
          tarifs: [
            { weight: "2G", price: 80.0 },
            { weight: "5G", price: 170.0 },
            { weight: "10G", price: 340.0 },
            { weight: "50G", price: 1350.0 },
            { weight: "100G", price: 2500.0 },
          ],
        },
      ],
    },

    {
    id: "USFlowers",
    name: "US Flowers🇺🇸",
    type: "USFlowers",
    quality: "US Flowers🇺🇸",
    image: "CategWeed.png",

      products: [
         {
          id: "Purple Cream💜🍦🇺🇸",
          flag: "🇺🇸",
          name: "Purple Cream💜🍦🇺🇸",
          farm: "Cali Flowers☘️🇺🇸",
          promoEligible: true,
          type: "MidShelf US",
          image: "ProductPC.png",
          video: "VideoPC.mp4",
          description:
                  "MidShelf US NoBrand🏆",
                tarifs: [
                        { weight: '10G', price: 120.00 },
                        { weight: '20G', price: 210.00 },
                    ],
        },
         {
          id: "Lemon Eid🍋🇺🇸",
          flag: "🇺🇸",
          name: "Lemon Eid🍋🇺🇸",
          farm: "Cali Flowers☘️🇺🇸",
          promoEligible: true,
          type: "MidShelf US",
          image: "ProductEID.png",
          video: "VideoEID.mp4",
          description:
                  "MidShelf US NoBrand🏆",
                tarifs: [
                        { weight: '10G', price: 120.00 },
                        { weight: '20G', price: 210.00 },
                    ],
        },
         {
          id: "KimTech⚡️🇺🇸",
          flag: "🇺🇸",
          name: "KimTech⚡️🇺🇸",
          farm: "Cali Flowers☘️🇺🇸",
          promoEligible: true,
          type: "MidShelf US",
          image: "ProductKT.png",
          video: "VideoKT.mp4",
          description:
                  "MidShelf US NoBrand🏆",
                tarifs: [
                        { weight: '10G', price: 120.00 },
                        { weight: '20G', price: 210.00 },
                    ],
        },
         {
          id: "PinkLady🙋‍♀️🇺🇸",
          flag: "🇺🇸",
          name: "PinkLady🙋‍♀️🇺🇸",
          farm: "Cali Flowers☘️🇺🇸",
          promoEligible: true,
          type: "MidShelf US",
          image: "ProductPL.png",
          video: "VideoPL.mp4",
          description:
                  "MidShelf US NoBrand🏆",
                tarifs: [
                        { weight: '10G', price: 120.00 },
                        { weight: '20G', price: 210.00 },
                    ],
        },
      ],
    },
   /*  {
    id: "Divers",
    name: "Divers💎",
    type: "Divers",
    quality: "Divers💎",
    image: "CategHash.png",

      products: [
      ],
    }, */
     ];



     
/*

         {
                            id: 'Buchettes',
                            flag: '🇲🇦',
                            name: 'Buchettes 🪵',
                            farm: 'Singe Source ♻️',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBuchettes.jpg',
                            videos: [
                                'VideoBuch.mov', // Ta 1ère vidéo
                                'VideoBuch2.mov'  // Ta 2ème vidéo
                            ],
                            description: '🎄❄️ Exclu Uniquement chez nous Noël chez PISTACHIO420 🌿🔥\n\n ~ Extraction haut de gamme, arômes ultra frais✨ \n ~ texture propre et qualité premium 🥇 \n\n 🎄😮‍💨 Cette année, la bûche de Noël se déguste aussi en version Fresh Frozen ❄️🔥',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Saveurs Frozen ❄️ :', 
                            jars: [
                                { name: 'RS11', emoji: '💨💨', colorClass: 'style-purple' },
                                { name: 'I.C.C', emoji: '🍦🍦', colorClass: 'style-brown' },
                            ],

                            tarifs: [
                                { weight: '🪵x1', price: 130.00 },               
                                { weight: '🪵x2', price: 250.00 },
                                { weight: '🪵x4', price: 420.00 },


                            ]
                        },
                        {
                            id: 'Frozensift',
                            flag: '🇲🇦',
                            name: '🫒 Frozen sift ⚡️🏆',
                            farm: '🌾 No Farm 🌾',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductSift.jpg',
                            videos: [
                                'VideoSift.mov', // Ta 1ère vidéo
                                'VideoSift2.mov'  // Ta 2ème vidéo
                            ],
                            description: '🏠 No FARMZ incroyable 🏆   \n Vous les connaissait déjà produit plus que satisfaisant 🥇\n  Sec pétante 🫡\n Défonce super présente ces pour les gros pec 🤓\n 130 chez nous 😋😋\n On me chuchote que sa les vend 170 en I.D.F 🤭🤭',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Saveurs Frozen ❄️ :',
                            jars: [
                                { name: 'POISON', emoji: '💀', colorClass: 'style-purple' },
                                { name: 'ORANGE GROW', emoji: '🍊', colorClass: 'style-orange' },
                                { name: 'OREOZ', emoji: '🍩', colorClass: 'style-brown' },
                                { name: 'PANNACOTA', emoji: '🍮', colorClass: 'style-red' },

                            ],

                            tarifs: [
                                { weight: '🫒x1', price: 130.00 },               
                                { weight: '🫒x3', price: 350.00 },
                                { weight: '🫒x5', price: 500.00 },
                            ]
                        },
                        
                        {
                            id: 'FrozenSource',
                            flag: '⚡️',
                            name: '🇲🇦Frozen Sift Hash ⚡️🌬️',
                            farm: 'LA SOURCE 🥇',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductSource.png',
                               images: [
                                'ProductSource.png',
                                'ProductSource2.jpg',
                            ],
                            videos: [
                                'VideoSource.mov', // Ta 1ère vidéo
                                'VideoSource2.mov'  // Ta 2ème vidéo
                            ],
                            description: '~ Saison 2026 🪐 \n La source 🏠 Nous à sortie un ❄️ magnifique 🔥 \n Le goût l’odeur tout et la 🏆 \n Juste les vidéo donne envie 😋',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Choisis ton goût 🥣 :',
                            jars: [
                                { name: 'Pink passion', emoji: '👛❤️‍🔥', colorClass: 'style-passion' },
                                { name: 'Water melon ', emoji: '🍈 💦', colorClass: 'style-melon' }
                            ],

                            tarifs: [
                                { weight: '10g', price: 130.00 },
                                { weight: '25g', price: 250.00 },
                                { weight: '50g', price: 370.00 },
                            ]
                        }
                    ]
        // ============================================================
    // CATEGORIE 3 : PACKS DE NOEL 🎄
    // ============================================================
    {
        id: 'PACKS',
        name: '⏳ PACK 2025 ⌛️',
        type: 'Pack',
        quality: '⭐️ Offres Spéciales', // S'affichera dans le filtre "Sélection du chef"
        image: 'CategPack2025.png', // ⚠️ Pense à mettre une image festive ici

        // PAS DE FARMS, DIRECTEMENT LES PRODUITS
        products: [
            {
                id: '🌟 PACK 150 🌟',
                flag: '🎁',
                name: '🌟 PACK 150 🌟',
                farm: '🚨 MEGA PACK 2026 📅',
                promoEligible: false, // En général pas de code promo sur les packs déjà remisés
                type: 'Pack',
                image: '', // L'image du pack
                video: '', // Tu peux mettre une vidéo de l'ensemble si tu as

                // 'targetId' doit être l'ID EXACT du produit vers lequel tu veux aller
                packContents: [
                    { name: '5g : Cali Us ( au choix ) 🇺🇸', targetId: 'CALI_USA' },
                    { name: '5g : Frozen Sift Hash ⚡️🌬️ ', targetId: 'FrozenSource' },
                    { name: '5g : 🛖 120u Premium 2026 ( au choix ) ', targetId: '120U_PREMIUM' },
                ],
                
                // Description formatée avec les sauts de ligne
                description: 'Qualité lourde, terps ouverts à fond 🤤🌿🔥',
                
                tarifs: [
                    { weight: 'LE PACK 📦', price: 150.00 },
                ]
            },
            {
                id: '🔥 PACK 300 🔥',
                flag: '🎁',
                name: '🔥 PACK 300 🔥',
                farm: '🚨 MEGA PACK 2026 📅',
                promoEligible: false, // En général pas de code promo sur les packs déjà remisés
                type: 'Pack',
                image: '', // L'image du pack
                video: '', // Tu peux mettre une vidéo de l'ensemble si tu as

                // 'targetId' doit être l'ID EXACT du produit vers lequel tu veux aller
                packContents: [
                    { name: '10g : Cali 🇨🇦💎', targetId: 'PurpleBud' },
                    { name: '10g : Frozen Sift 🫒❄️', targetId: 'Frozensift' },
                    { name: '10g : Fresh Frozen 🪵🧊', targetId: 'Buchettes' },
                    { name: '2g : KGF Static 🇲🇦✨', targetId: '220u' } // usa'ai mis StaticUSA en exemple, mets l'ID de ta Cali
                ],
                
                // Description formatée avec les sauts de ligne
                description: 'Qualité lourde, terps ouverts à fond 🤤🌿🔥',
                
                tarifs: [
                    { weight: 'LE PACK 📦', price: 300.00 },
                ]
            },
            {
                id: '💥 PACK 600 💥',
                flag: '🎁',
                name: '💥 PACK 600 💥',
                farm: '🚨 MEGA PACK 2026 📅',
                promoEligible: false, // En général pas de code promo sur les packs déjà remisés
                type: 'Pack',
                image: '', // L'image du pack
                video: '', // Tu peux mettre une vidéo de l'ensemble si tu as

                // 'targetId' doit être l'ID EXACT du produit vers lequel tu veux aller
                packContents: [
                    { name: '25g : Cali 🇨🇦💎', targetId: 'PurpleBud' },
                    { name: '20g : Frozen Sift 🫒❄️', targetId: 'Frozensift' },
                    { name: '20g : Fresh Frozen 🪵🧊', targetId: 'Buchettes' },
                ],
                
                // Description formatée avec les sauts de ligne
                description: 'Qualité lourde, terps ouverts à fond 🤤🌿🔥',
                
                tarifs: [
                    { weight: 'LE PACK 📦', price: 300.00 },
                ]
            }
        ]
    } */
 

  // --- VARIABLES D'ÉTAT ---
  let cart = [];
  let currentFilters = {
    searchTerm: "",
    quality: "all",
    farm: "all",
  };
  let currentView = "categories"; // 'categories', 'farms', ou 'products'
  let currentCategoryId = null; // Garde en mémoire la catégorie sélectionnée
  let currentFarmId = null; // Garde en mémoire la farm sélectionnée
  let appliedPromo = null; // Pour suivre le code promo
  let paymentMethod = "Espèce"; // Méthode de paiement par défaut

  // Sous-catégories par farm : conserve intégralement chaque fiche produit.
  // Place les fichiers de logos dans le même dossier que index.html.
  const farmLogos = {
    "CaliDream 💫": "LogoReel.jpg",
    "TerpValley 🏜️": "FarmTerpValley.jpg",
    "ByUsForYou 🛍️": "FarmByUsForYou.jpg",
    "HashForceOne ✈️🇺🇸": "FarmHashForceOne.jpg",
  };

["Static", "Frozen", "HashUS"].forEach((categoryId) => {
      const category = appData.find((c) => c.id === categoryId);
    if (!category || !Array.isArray(category.products)) return;
    const groups = new Map();
    for (const product of category.products) {
      const farmName = product.farm || "Autres farms";
      if (!groups.has(farmName)) groups.set(farmName, []);
      groups.get(farmName).push(product);
    }
    category.farms = [...groups].map(([name, products], index) => ({
      id: `farm-${categoryId}-${index}`,
      name,
      image: farmLogos[name] || "",
      products,
    }));
    // Les produits sont désormais accessibles depuis category.farms.
    delete category.products;
  });

  // --- DÉFINIS TES CODES PROMO ICI ---
  const validPromoCodes = {
    /*   "": {
            type: 'fixed', // 'percent' (pourcentage) ou 'fixed' (fixe)
            value: 10,       // 20%
            appliesTo: 'eligible', // 'eligible' (articles marqués) ou 'all' (tout le panier)
            cumulative: false // <-- AJOUTE CETTE LIGNE
        },
        "": {
            type: 'fixed', // 'percent' (pourcentage) ou 'fixed' (fixe)
            value: 10,       // 20%
            appliesTo: 'eligible', // 'eligible' (articles marqués) ou 'all' (tout le panier)
            cumulative: false // <-- AJOUTE CETTE LIGNE
        } */
    /*  "WELCOME5": {
             type: 'percent',   // 20%
             value: 20,        // 20%
             appliesTo: 'all' // S'applique à tout
         } */
    // Ajoute d'autres codes ici
    // ADD CUMULABLE FONCTION POUR PLUTARD
  };

  // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
  const pages = document.querySelectorAll(".page");
  const productListContainer = document.getElementById("product-list");
  const loaderPage = document.getElementById("page-loader");

  const filterContainer = document.querySelector(".filters");

  // --- NOUVEAUX SÉLECTEURS POUR CHAQUE FILTRE ---
  const searchFilterWrapper =
    document.getElementById("search-filter").parentElement;
  const qualityFilterWrapper =
    document.getElementById("quality-filter").parentElement;
  const farmFilterWrapper =
    document.getElementById("farm-filter").parentElement;
  // --- FIN NOUVEAUX SÉLECTEURS ---

  // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
  function getProductById(productId) {
    for (const category of appData) {
      // 1. Cherche dans les produits directs (Nouveau cas)
      if (category.products) {
        const product = category.products.find((p) => p.id === productId);
        if (product) return product;
      }

      // 2. Cherche dans les farms (Ancien cas)
      if (category.farms) {
        for (const farm of category.farms) {
          const product = farm.products.find((p) => p.id === productId);
          if (product) return product;
        }
      }
    }
    return undefined; // Non trouvé
  }

  // --- NAVIGATION ---
  function showPage(pageId) {
    // 👇 AJOUT STRATÉGIQUE : Coupe toutes les vidéos instantanément au changement de page
    document.querySelectorAll("video").forEach((video) => {
      video.pause();
    });
    pages.forEach((p) => p.classList.remove("active"));
    // S'assure que la page existe avant de l'activer
    const page = document.getElementById(pageId);
    if (page) {
      page.classList.add("active");
    }

    // --- GESTION AUTOMATIQUE DES BOUTONS NAV ---
    const homeNav = document.getElementById("nav-menu");
    const infoNav = document.getElementById("nav-info"); // On ajoute l'info
    const contactNav = document.getElementById("nav-contact");
    const avisNav = document.getElementById("nav-avis"); // <-- AJOUT ICI

    // On reset tout
    homeNav.classList.remove("active");
    infoNav.classList.remove("active");
    contactNav.classList.remove("active");
    if (avisNav) avisNav.classList.remove("active"); // <-- AJOUT ICI

    // On active le bon
    if (pageId === "page-contact") {
      contactNav.classList.add("active");
    } else if (pageId === "page-info") {
      infoNav.classList.add("active");
    } else if (pageId === "page-avis") {
      // <-- LA NOUVELLE CONDITION
      if (avisNav) avisNav.classList.add("active");
    } else {
      // Pour page-home, page-produit, panier, etc.
      homeNav.classList.add("active");
    }
  }

  // --- LOGIQUE D'AFFICHAGE ---

  // --- MODIFIÉ : renderHomePage ---

  function renderHomePage() {
    // Toujours afficher le conteneur principal des filtres
    filterContainer.style.display = "flex";

    // On enlève les anciens boutons "retour"
    const existingBackBtnCat = filterContainer.querySelector(
      ".back-to-categories-btn",
    );
    if (existingBackBtnCat) existingBackBtnCat.remove();
    const existingBackBtnFarm =
      filterContainer.querySelector(".back-to-farms-btn");
    if (existingBackBtnFarm) existingBackBtnFarm.remove();

    if (currentView === "categories") {
      renderCategoryList();

      // --- GESTION DES FILTRES (Vue Catégorie) ---
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "flex"; // On montre QUE la qualité

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)";
    } else if (currentView === "farms") {
      renderFarmList(currentCategoryId);

      // --- GESTION DES FILTRES (Vue Farms) ---
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none"; // Pas de filtres pour les farms
      qualityFilterWrapper.style.display = "none";

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)"; // 1 colonne pour les farms

      // --- AJOUT BOUTON RETOUR (vers Catégories) ---
      const category = appData.find((c) => c.id === currentCategoryId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-categories-btn"; // CLASSE IMPORTANTE
      backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
      backButton.style.cssText = `
            border: none;
            color: #f16101;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 1.8vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(194deg, rgb(100 35 33), #0000004f);
            border-radius: 10px;`;

      filterContainer.prepend(backButton);
    } else if (currentView === "simple_products") {
      updateFarmFilter(currentCategoryId);

      renderProductListSimple(currentCategoryId);

      // --- GESTION DES FILTRES ---
      // 1. On AFFICHE la barre de recherche
      searchFilterWrapper.style.display = "flex";

      // 2. On AFFICHE le filtre Farm
      farmFilterWrapper.style.display = "flex";

      // 3. On CACHE le filtre Qualité ("Sélection du chef")
      qualityFilterWrapper.style.display = "none";

      // --- AJOUT BOUTON RETOUR (vers Catégories) ---
      const category = appData.find((c) => c.id === currentCategoryId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-categories-btn";
      backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;

      backButton.style.cssText = `
            border: none;
            color: #f16101;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 1.8vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(194deg, rgb(100 35 33), #0000004f);
            border-radius: 10px;`;

      filterContainer.prepend(backButton);

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
    } else if (currentView === "products") {
      updateFarmFilter(currentCategoryId, currentFarmId);

      renderProductList(currentCategoryId, currentFarmId);

      // --- GESTION DES FILTRES (Vue Produit) ---
      searchFilterWrapper.style.display = "flex";
      farmFilterWrapper.style.display = "flex"; // On montre les filtres produits
      qualityFilterWrapper.style.display = "none"; // On cache la qualité

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(2, 1fr)"; // 2 colonnes

      // --- AJOUT BOUTON RETOUR (vers Farms) ---
      const category = appData.find((c) => c.id === currentCategoryId);
      const farm = category.farms.find((f) => f.id === currentFarmId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-farms-btn"; // CLASSE IMPORTANTE
      backButton.innerHTML = `<svg width="24"
             height="24"
              viewBox="0 0 24 24"
              ><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>  ${farm.name}`;
      backButton.style.cssText = `
            border: none;
            color: white;
            padding: 40px;
            font-weight: 700;
            cursor: pointer;
            gap: 10px;
            box-sizing: border-box;
            margin-top: 3vh;
            font-family: Copperplate;
            height: 7vh;
            font-size: 1.8vh;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(182deg, #480092, transparent);
                        border-radius: 10px;`;

      filterContainer.prepend(backButton);
    }
  }

  // --- FONCTION MODIFIÉE : Filtre intelligent par Sous-Catégorie ---
  function updateFarmFilter(categoryId, subCategoryId = null) {
    const category = appData.find((c) => c.id === categoryId);
    const farmFilter = document.getElementById("farm-filter");

    if (!category) return;

    let availableFarms = [];

    // CAS 1 : On est dans une sous-catégorie précise (ex: Cali USA)
    if (subCategoryId && category.farms) {
      const subCategory = category.farms.find((f) => f.id === subCategoryId);
      if (subCategory) {
        subCategory.products.forEach((p) => {
          if (p.farm) availableFarms.push(p.farm);
        });
      }
    }
    // CAS 2 : On est dans une catégorie globale ou simple (ex: Packs Noel ou tout voir)
    else {
      if (category.farms) {
        // Si c'est une catégorie à tiroirs, on prend tout
        category.farms.forEach((sub) => {
          sub.products.forEach((p) => {
            if (p.farm) availableFarms.push(p.farm);
          });
        });
      } else if (category.products) {
        // Si c'est une catégorie simple
        category.products.forEach((p) => {
          if (p.farm) availableFarms.push(p.farm);
        });
      }
    }

    // 2. On enlève les doublons
    const uniqueFarms = ["all", ...new Set(availableFarms)];

    // 3. On génère le HTML
    const currentValue = currentFilters.farm;

    farmFilter.innerHTML = uniqueFarms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "👨‍🌾  -  Toutes les farms" : farm}</option>`,
      )
      .join("");

    // 4. On remet la valeur si elle existe toujours
    if (uniqueFarms.includes(currentValue)) {
      farmFilter.value = currentValue;
    } else {
      farmFilter.value = "all";
      currentFilters.farm = "all";
    }
  }

  // --- MODIFIÉ : renderCategoryList ---
  // Prend en compte le filtre qualité
  function renderCategoryList() {
    const filteredCategories = appData.filter((category) => {
      const searchMatch = category.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      // --- AJOUT ---
      const qualityMatch =
        currentFilters.quality === "all" ||
        category.quality === currentFilters.quality;
      return searchMatch && qualityMatch;
      // --- FIN AJOUT ---
    });

    productListContainer.innerHTML = "";
    if (filteredCategories.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
      return;
    }

    filteredCategories.forEach((category) => {
      const card = document.createElement("div");
      card.className = "category-card";
      card.dataset.categoryId = category.id;

      card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
              
            `;
      productListContainer.appendChild(card);
    });
  }

  // --- NOUVELLE FONCTION ---
  // Affiche la liste des FARMS pour une catégorie
  // --- FONCTION MODIFIÉE : Affichage liste bouton ---
  function renderFarmList(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }

    const farms = category.farms;

    // On change le style de la grille pour avoir une seule colonne (liste verticale)
    productListContainer.style.gridTemplateColumns = "1fr";
    productListContainer.style.gap = "10px"; // Espacement entre les boutons

    productListContainer.innerHTML = "";
    if (farms.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune farm trouvée.</p>';
      return;
    }

    farms.forEach((farm) => {
      const btn = document.createElement("div");
      // On change la classe pour ne plus utiliser le style "card"
      btn.className = "farm-list-btn";
      btn.dataset.farmId = farm.id;

      if (farm.clickable === false) {
        btn.classList.add("unclickable");
      }

      const productCount = farm.products.length;
      const countText = productCount > 0 ? `${productCount} prod.` : "";

      // Structure : Icone | Nom + Badge | Flèche
      btn.innerHTML = `
            <div class="farm-btn-left">
                ${farm.image ? `<img class="farm-logo" src="${farm.image}" alt="Logo ${farm.name}" onerror="this.style.display='none'">` : ""}
                <div class="farm-btn-info">
                    <span class="farm-btn-title">${farm.name}</span>
                    <span class="farm-btn-subtitle">${farm.badgeText || countText}</span>
                </div>
            </div>
            <div class="farm-btn-right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
        `;
      productListContainer.appendChild(btn);
    });
  }

  // Affiche la liste des PRODUITS (Version corrigée : Pleine largeur + Sans image vide)
  function renderProductListSimple(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category || !category.products) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit ne correspond à cette catégorie.</p>';
      return;
    }

    // Mise à jour du filtre farm intelligent
    if (typeof updateFarmFilter === "function") updateFarmFilter(categoryId);

    // On filtre le tableau products
    const filteredProducts = category.products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      const farmMatch =
        currentFilters.farm === "all" || product.farm === currentFilters.farm;
      return searchMatch && farmMatch;
    });

    productListContainer.innerHTML = "";
    if (filteredProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit trouvé.</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card product-item-card";
      card.dataset.productId = product.id;

      // --- 1. LOGIQUE PLEINE LARGEUR ---
      // Si c'est un Pack, on ajoute la classe spéciale
      if (product.type === "Pack" || product.id === "PackNoel2025") {
        card.classList.add("full-width");
      }

      if (product.clickable === false) card.classList.add("unclickable");

      let flagHTML = product.flag
        ? `<span class="product-flag">${product.flag}</span>`
        : "";

      // --- 2. LOGIQUE IMAGE (On affiche seulement si elle existe) ---
      let imgHTML = "";
      if (product.image && product.image !== "") {
        imgHTML = `<img src="${product.image}" alt="${product.name}">`;
      }

      card.innerHTML = `
            ${imgHTML}
            <div class="info">
                <div class="name">${product.name} ${flagHTML}</div>
                <div class="farm">${product.farm}</div> 
                <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
            </div>
        `;
      productListContainer.appendChild(card);
    });
  }
  // Affiche la liste des PRODUITS pour une farm
  function renderProductList(categoryId, farmId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }
    const farm = category.farms.find((f) => f.id === farmId);
    if (!farm) {
      productListContainer.innerHTML =
        '<p class="no-results">Farm non trouvée.</p>';
      return;
    }
    const filteredProducts = farm.products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      // On a supprimé 'qualityMatch'. Le choix de la catégorie suffit.
      const farmMatch =
        currentFilters.farm === "all" || product.farm === currentFilters.farm;

      return searchMatch && farmMatch; // On retourne sans le qualityMatch
    });

    productListContainer.innerHTML = "";
    if (filteredProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit ne correspond à votre recherche.</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card product-item-card";
      card.dataset.productId = product.id;

      // Si c'est le Pack de Noël (vérifie bien que l'ID est correct), on met la classe large
      if (product.id === "PackNoel2025" || product.type === "Pack") {
        card.classList.add("full-width");
      }

      if (product.clickable === false) {
        card.classList.add("unclickable");
      }

      let flagHTML = product.flag
        ? `<span class="product-flag">${product.flag}</span>`
        : "";

      card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <div class="name">${product.name} ${flagHTML}</div>
                    <div class="farm">${product.farm}</div>
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>
            `;
      productListContainer.appendChild(card);
    });
  }

  // Affiche la page de détail d'un produit
  function renderProductPage(productId) {
    const product = getProductById(productId);
    if (!product) return;

    document.getElementById("product-page-title").innerText = product.name;
    const detailsContainer = document.getElementById("product-details-content");

    // --- 1. GESTION INTELLIGENTE DES MÉDIAS ---
    let galleryHTML = "";
    let hasMedia = false;

    // Images
    let mediaItems = [];
    if (product.images && product.images.length > 0) {
      mediaItems = product.images;
    } else if (product.image && product.image !== "") {
      mediaItems = [product.image];
    }

    if (mediaItems.length > 0) {
      hasMedia = true;
      galleryHTML += mediaItems
        .map(
          (imgSrc) => `
                <div class="gallery-item"><img src="${imgSrc}" alt="${product.name}"></div>
            `,
        )
        .join("");
    }

    // Vidéos
    if (product.videos && product.videos.length > 0) {
      hasMedia = true;
      product.videos.forEach((videoSrc) => {
        galleryHTML += `
                    <div class="gallery-item">
                        <video controls playsinline poster="${product.image || ""}">
                            <source src="${videoSrc}" type="video/mp4">
                        </video>
                    </div>`;
      });
    } else if (product.video && product.video !== "") {
      hasMedia = true;
      galleryHTML += `
                <div class="gallery-item">
                    <video controls playsinline poster="${product.image || ""}">
                        <source src="${product.video}" type="video/mp4">
                    </video>
                </div>`;
    }

    // --- 2. LE RESTE (OPTIONS, DESCRIPTION, TARIFS) ---

    // --- GESTION DU CONTENU PACK (Liens internes) ---
    let packLinksHTML = "";
    if (product.packContents && product.packContents.length > 0) {
      const links = product.packContents
        .map(
          (item) => `
            <div class="pack-item-btn" data-target-id="${item.targetId}">
                <span>${item.name}</span>
                <span class="pack-arrow">›</span>
            </div>
        `,
        )
        .join("");

      packLinksHTML = `
            <div class="pack-content-container">
                <div style="color:#8e8e93; font-size:0.9rem; margin-bottom:5px;">📦 CONTENU DU PACK :</div>
                ${links}
            </div>
        `;
    }
    let variantsHTML = "";
    if (product.jars && product.jars.length > 0) {
      const buttonsHTML = product.jars
        .map(
          (jar, index) => `
                <div class="variant-btn ${index === 0 ? "active " + jar.colorClass : ""}" 
                     data-name="${jar.name} ${jar.emoji}" 
                     data-color-class="${jar.colorClass}">
                    <span class="emoji">${jar.emoji}</span>
                    <span class="text">${jar.name}</span>
                </div>
            `,
        )
        .join("");
      variantsHTML = `<div class="variant-selector-container"><div class="variant-title">${product.variantTitle || "Choisir une option :"}</div><div class="variant-grid">${buttonsHTML}</div></div>`;
    } else if (product.options && product.options.length > 0) {
      variantsHTML = `<div class="product-options-container" style="margin-bottom: 15px;"><label style="color: #8e8e93; font-size: 0.9rem; margin-bottom: 5px; display:block;">Choisir :</label><select id="product-variant-select" style="width: 100%; padding: 12px; border-radius: 8px; background: #2c2c2e; color: white; border: 1px solid #3a3a3c;">${product.options.map((opt) => `<option value="${opt}">${opt}</option>`).join("")}</select></div>`;
    }

    let tarifsHTML = product.tarifs
      .map(
        (tarif) => `
            <div class="tarif-item">
                <div class="box-tarif">
                ${tarif.badge ? `<span class="tarif-badge">${tarif.badge}</span>` : ""} <div class="tarif-wieght">${tarif.weight}</div>
                    <div class="tarif-price">
    ${
      Number.isFinite(tarif.oldPrice) && tarif.oldPrice > tarif.price
        ? `<span class="old-price">${tarif.oldPrice.toFixed(2)}€</span>`
        : ""
    }
    <span class="current-price">${tarif.price.toFixed(2)}€</span>
</div>
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                    <svg width="20" height="20"><use href="#icon-cart"/></svg>
                </button>
            </div>
        `,
      )
      .join("");

    let descriptionHTML = product.description
      ? `<p class="product-description">${product.description.replace(/\n/g, "<br>")}</p>`
      : "";

    const oldVideo = document.querySelector("#page-product .product-video");
    if (oldVideo) oldVideo.style.display = "none";

    // --- 3. INJECTION (On cache la galerie si pas de média) ---
    detailsContainer.innerHTML = `
            ${hasMedia ? `<div class="product-gallery-wrapper">${galleryHTML}</div>` : ""}
            ${hasMedia ? `<div class="gallery-counter">Swipe ➡️</div>` : ""}
            
            <div class="name" style="margin-top: ${hasMedia ? "0" : "20px"}">${product.name}</div>
            <div class="farm">${product.farm}</div>
            ${packLinksHTML} ${descriptionHTML}
                        ${variantsHTML}
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">${tarifsHTML}</div>
        `;

    showPage("page-product");

    // Réattache les événements (pour les variantes de couleurs)
    if (product.jars && product.jars.length > 0) {
      const variantBtns = document.querySelectorAll(".variant-btn");
      const cartBtns = document.querySelectorAll(".add-to-cart-btn");
      const updateCartButtonsColor = (colorClass) => {
        cartBtns.forEach((btn) => {
          btn.classList.remove(
            "style-purple",
            "style-red",
            "style-green",
            "style-yellow",
            "style-orange",
            "style-brown",
            "style-passion",
            "style-melon",
            "style-gold",
            "style-cherry",
            "style-glue",
            "style-blue",
            "style-pink",
            "style-indigo",
            "style-silver",
            "style-white",
            "style-grape",
            "style-fanta",
            "style-dark",
          );
          if (colorClass) btn.classList.add(colorClass);
        });
      };
      updateCartButtonsColor(product.jars[0].colorClass);
      variantBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          variantBtns.forEach((b) => {
            b.classList.remove("active");
            const color = b.dataset.colorClass;
            b.classList.remove(color);
          });
          this.classList.add("active");
          this.classList.add(this.dataset.colorClass);
          updateCartButtonsColor(this.dataset.colorClass);
          if (window.Telegram.WebApp.HapticFeedback)
            window.Telegram.WebApp.HapticFeedback.selectionChanged();
        });
      });
    }
  }

  // Met à jour l'affichage du panier (CORRIGÉ : Cache l'image si vide)
  function renderCart() {
    const cartContainer = document.getElementById("cart-items-container");
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
      document.getElementById("cart-total-price").innerText = "0.00€";
      updateCartCount();
      return;
    }

    cartContainer.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}
                
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `,
      )
      .join("");

    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    document.getElementById("cart-total-price").innerText =
      `${total.toFixed(2)}€`;
    updateCartCount();
  }

  // Affiche la page de confirmation (VERSION WHATSAPP DIRECT)
  function renderConfirmation() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // --- Logique de calcul des prix (inchangée) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;
    // --- Fin calcul ---

    // Mise à jour du résumé
    document.getElementById("confirmation-items-count").innerText =
      `${totalItems} article${totalItems > 1 ? "s" : ""}`;
    document.getElementById("confirmation-total-price").innerText =
      `${totalPrice.toFixed(2)}€`;

    // Liste des articles
    const itemsList = document.getElementById("confirmation-items-list");
    itemsList.innerHTML = cart
      .map(
        (item, index) => `
         <div class="cart-item">
            ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}

            <div class="item-details">
                <div>${index + 1}. ${item.name}</div>
                <div>Quantité: ${item.quantity}x ${item.weight}</div>
                <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
            </div>
        </div>
    `,
      )
      .join("");

    // UI Promo
    const promoInputContainer = document.getElementById(
      "promo-input-container",
    );
    const promoAppliedContainer = document.getElementById(
      "promo-applied-container",
    );
    if (appliedPromo) {
      promoInputContainer.style.display = "none";
      promoAppliedContainer.style.display = "flex";
      document.getElementById("promo-applied-text").innerText =
        `Code "${appliedPromo}" appliqué !`;
    } else {
      promoInputContainer.style.display = "flex";
      promoAppliedContainer.style.display = "none";
      document.getElementById("promo-code-input").value = "";
    }

    // UI Paiement
    document.querySelectorAll(".payment-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.method === paymentMethod);
    });

    // Résumé final
    const summaryContainer = document.getElementById("confirmation-summary");
    let summaryHTML = `
        <div class="summary-line">
            <span>Sous-total:</span>
            <span>${subTotal.toFixed(2)}€</span>
        </div>
    `;
    if (discount > 0) {
      summaryHTML += `
        <div class="summary-line discount">
            <span>Réduction:</span>
            <span>-${discount.toFixed(2)}€</span>
        </div>
        `;
    }
    summaryHTML += `
        <div class="summary-line total">
            <span>💰 Total final:</span>
            <span>${totalPrice.toFixed(2)}€</span>
        </div>
    `;
    summaryContainer.innerHTML = summaryHTML;

    // --- MODIFICATION POUR WHATSAPP DIRECT ---
    const copyBtn = document.getElementById("copy-order-btn");
    const contactBtn = document.getElementById("confirm-order-button");

    // 1. On CACHE le bouton "Copier" car il ne sert plus
    if (copyBtn) copyBtn.style.display = "none";

    // 2. On configure le bouton "Confirmer" pour être actif tout de suite
    if (contactBtn) {
      contactBtn.classList.remove("secondary-action-btn"); // Enlève le gris
      contactBtn.classList.add("main-action-btn"); // Met le rouge (ou couleur principale)
      contactBtn.disabled = false; // Active le clic
      contactBtn.innerHTML = "CONFIRMER SUR WHATSAPP 📞"; // Change le texte
    }

    showPage("page-confirmation");
  }
  // Affiche la page de contact (inchangé)
  function renderContactPage() {
    const linksContainer = document.getElementById("contact-links-container");
    linksContainer.innerHTML = contactLinks
      .map(
        (link) => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        
            <span>${link.text}</span>
        </a>
        `,
      )
      .join("");
  }

  // Met à jour le compteur du panier (inchangé)
  function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll(".cart-count");
    cartCountElements.forEach((el) => {
      el.innerText = count;
      el.style.display = count > 0 ? "flex" : "none";
    });
  }

  // --- MODIFIÉ : populateFilters ---
  function populateFilters() {
    const searchFilter = document.getElementById("search-filter");
    const qualityFilter = document.getElementById("quality-filter");
    const farmFilter = document.getElementById("farm-filter");

    // 1. On récupère TOUS les produits de l'app pour trouver toutes les farms
    const allNestedProducts = [];
    appData.forEach((category) => {
      if (category.farms) {
        category.farms.forEach((farm) =>
          allNestedProducts.push(...farm.products),
        );
      } else if (category.products) {
        allNestedProducts.push(...category.products);
      }
    });

    // 2. On remplit le filtre QUALITÉ (Pour la page d'accueil)
    const categoryQualities = appData.map((c) => c.quality).filter(Boolean); // filter Boolean enlève les vides
    const qualities = ["all", ...new Set(categoryQualities)];
    qualityFilter.innerHTML = qualities
      .map(
        (q) =>
          `<option value="${q}">${q === "all" ? "SELECTION DU CHEF" : q}</option>`,
      )
      .join("");

    // 3. On remplit le filtre FARM (Pour la page produits)
    // On récupère la propriété 'farm' de chaque produit
    const productFarms = allNestedProducts.map((p) => p.farm).filter((f) => f); // Garde seulement si une farm est définie
    const farms = ["all", ...new Set(productFarms)];

    farmFilter.innerHTML = farms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "👨‍🌾  -  Toutes les farms" : farm}</option>`,
      )
      .join("");

    // 4. Les écouteurs d'événements
    searchFilter.addEventListener("input", (e) => {
      currentFilters.searchTerm = e.target.value;
      renderHomePage();
    });

    qualityFilter.addEventListener("change", (e) => {
      currentFilters.quality = e.target.value;
      renderHomePage();
    });

    farmFilter.addEventListener("change", (e) => {
      currentFilters.farm = e.target.value;
      renderHomePage();
    });
  }

  // --- NOTIFICATION (inchangé) ---
  let notificationTimeout;
  function showNotification(message) {
    const notification = document.getElementById("notification-toast");
    if (!notification) return;

    clearTimeout(notificationTimeout);
    notification.classList.remove("show");
    void notification.offsetWidth;

    notification.innerText = message;
    notification.classList.add("show");

    notificationTimeout = setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }

  // --- LOGIQUE DU PANIER ---

  // Ajoute le paramètre 'variant' à la fin
  function addToCart(productId, weight, price, variant = null) {
    // L'ID du panier doit inclure la variante pour différencier (ex: 10g Gelato vs 10g Papaya)
    const cartItemId = `${productId}-${weight}-${variant ? variant.replace(/\s+/g, "") : "default"}`;

    const existingItem = cart.find((item) => item.id === cartItemId);
    const product = getProductById(productId);

    // On prépare le nom à afficher (ex: "120u (Papaya Bomb)")
    const displayName = variant
      ? `${product.name} \n👉 ${variant}`
      : product.name;

    if (existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
    } else {
      cart.push({
        id: cartItemId,
        productId: productId,
        name: displayName, // On utilise le nom avec la variante
        image: product.image,
        weight: weight,
        quantity: 1,
        unitPrice: price,
        totalPrice: price,
        variant: variant, // On garde la variante en mémoire si besoin
      });
    }
    renderCart();
    tg.HapticFeedback.notificationOccurred("success");
    showNotification("✅ Produit ajouté au panier !");
  }
  // updateQuantity (inchangé)
  function updateQuantity(cartItemId, action) {
    const item = cart.find((i) => i.id === cartItemId);
    if (!item) return;

    if (action === "increase") {
      item.quantity++;
    } else if (action === "decrease") {
      item.quantity--;
    }

    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== cartItemId);
    } else {
      item.totalPrice = item.quantity * item.unitPrice;
    }
    renderCart();
  }

  // --- FORMATAGE DU MESSAGE WHATSAPP (STYLE PRO & EMOJIS) ---
  function formatOrderMessage() {
    // --- 1. CALCULS (Inchangés) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;

    // --- 2. CONSTRUCTION DU MESSAGE (NOUVEAU DESIGN) ---

    // En-tête
    let message = "*🛒 DÉTAIL DE LA COMMANDE:*\n\n";

    // Boucle sur les articles
    cart.forEach((item, index) => {
      // On nettoie le nom (enlève les sauts de ligne techniques si variante)
      // On met en majuscules pour faire comme sur ta capture
      let cleanName = item.name.replace(/\n/g, " ").toUpperCase();

      // Ligne 1 : Numéro + Nom du produit (en Gras *)
      message += `*${index + 1}. ${cleanName}*\n`;

      // Ligne 2 : Quantité
      message += `• Quantité: ${item.quantity}x ${item.weight}\n`;

      // Ligne 3 : Prix unitaire
      message += `• Prix unitaire: ${item.unitPrice.toFixed(2)}€\n`;

      // Ligne 4 : Total de la ligne
      message += `• Total: ${item.totalPrice.toFixed(2)}€\n\n`;
    });

    // Résumé financier
    // Si promo, on affiche le détail, sinon juste le total
    if (discount > 0) {
      message += `Sous-total: ${subTotal.toFixed(2)}€\n`;
      message += `Réduction (${appliedPromo}): -${discount.toFixed(2)}€\n`;
      message += `\n*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    } else {
      message += `*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    }

    // Pied de page
    message += `\n📍 Livraison à convenir\n`;
    message += `💳 Paiement: ${paymentMethod}`;

    return message;
  }

  // --- NOUVELLE FONCTION POUR COPIER DANS LE PRESSE-PAPIERS ---
  function copyToClipboard(text) {
    if (navigator.clipboard) {
      // API moderne et sécurisée
      navigator.clipboard.writeText(text).then(
        () => {
          showNotification("✅ Commande copiée ! Colle-la dans le chat.");
          tg.HapticFeedback.notificationOccurred("success");
        },
        (err) => {
          showNotification("❌ Erreur en copiant le message");
        },
      );
    } else {
      // Ancien fallback (pour certains navigateurs)
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; // Hors de l'écran
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        showNotification("✅ Commande copiée ! Colle-la dans le chat.");
        tg.HapticFeedback.notificationOccurred("success");
      } catch (err) {
        showNotification("❌ Erreur en copiant le message");
      }
      document.body.removeChild(textArea);
    }
  }

  // --- GESTION PAGE AVIS ---

  // 1. Bouton vers le canal Potato
  /*     const btnChannel = document.getElementById('btn-open-channel');
    if (btnChannel) {
        btnChannel.addEventListener('click', function() {
            // Remplace par ton vrai lien de canal
            const channelLink = ""; // ancien lien retiré
            
            // Ouvre le lien via Telegram
            tg.openLink(channelLink); 
        });
    }
 */
  // 2. (Optionnel) Zoom sur l'image quand on clique dessus
  window.openImage = function (imgElement) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("img-in-modal");

    modal.style.display = "flex";
    modalImg.src = imgElement.src;
    tg.BackButton.show(); // Affiche le bouton retour natif

    // Clic pour fermer
    modal.onclick = function () {
      modal.style.display = "none";
      tg.BackButton.hide(); // Cache le bouton retour
    };

    // Gestion du bouton retour physique/natif Telegram
    tg.onEvent("backButtonClicked", function () {
      modal.style.display = "none";
      tg.BackButton.hide();
    });
  };
  // --- GESTION DES ÉVÉNEMENTS ---

  // Clics sur la barre de navigation
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const pageId = item.dataset.page;
      if (!pageId) return;

      // Les lignes gérant la classe 'active' ont été supprimées
      // showPage(pageId) s'en occupe maintenant.

      if (pageId === "page-contact") {
        renderContactPage();
      }

      if (pageId === "page-home") {
        currentView = "categories";
        currentCategoryId = null;
        // On reset TOUS les filtres
        currentFilters.searchTerm = "";
        currentFilters.quality = "all";
        currentFilters.farm = "all";
        document.getElementById("search-filter").value = "";
        document.getElementById("quality-filter").value = "all";
        document.getElementById("farm-filter").value = "all";

        renderHomePage();
      }

      showPage(pageId);
    });
  });

  // Clics sur le reste de la page
  document.body.addEventListener("click", async function (e) {
    const target = e.target;

    if (target.closest("#copy-order-btn")) {
      let message = formatOrderMessage();
      message = message.replace(/\*/g, "");

      copyToClipboard(message);

      // --- AJOUT : Inverser les styles des boutons ---
      const copyBtn = document.getElementById("copy-order-btn");
      const contactBtn = document.getElementById("confirm-order-button");

      // Copier devient Gris (secondary)
      copyBtn.classList.remove("main-action-btn");
      copyBtn.classList.add("secondary-action-btn");

      // Contacter devient Rouge (main) et est activé
      contactBtn.classList.remove("secondary-action-btn");
      contactBtn.classList.add("main-action-btn");
      contactBtn.disabled = false; // <-- ON DÉVERROUILLE LE BOUTON
      return; // On s'arrête là
    }

    // Gère l'accordéon sur la page contact
    const accordionHeader = target.closest(".accordion-header");
    if (accordionHeader) {
      const accordionItem = accordionHeader.parentElement;

      // On ferme les autres items
      document
        .querySelectorAll("#page-info .accordion-item.active")
        .forEach((item) => {
          if (item !== accordionItem) {
            item.classList.remove("active");
          }
        });

      // On ouvre/ferme l'item cliqué
      accordionItem.classList.toggle("active");
      return; // On arrête là pour ne pas déclencher d'autres clics
    }

    // 1. Clic sur une carte CATÉGORIE
    const categoryCard = target.closest(".category-card");
    if (categoryCard) {
      const category = appData.find(
        (c) => c.id === categoryCard.dataset.categoryId,
      );

      if (category.products) {
        // Si la catégorie a des produits directement (pas de sous-catégorie)
        currentView = "simple_products"; // <-- NOUVEL ÉTAT
        currentCategoryId = category.id;
      } else if (category.farms) {
        // Si la catégorie a des farms
        currentView = "farms";
        currentCategoryId = category.id;
      } else {
        return; // Ne fait rien si la catégorie est vide
      }

      // On reset les filtres et on lance la page
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }
    // 2. MODIFIÉ : Clic sur un BOUTON FARM (Anciennement "carte farm")
    const farmBtn = target.closest(".farm-list-btn"); // <-- J'ai changé le nom de la classe ici
    if (farmBtn) {
      if (farmBtn.classList.contains("unclickable")) {
        return;
      }

      currentView = "products";
      currentFarmId = farmBtn.dataset.farmId;

      // On reset les filtres
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";

      renderHomePage();
      return;
    }
    // 3. Clic sur une carte PRODUIT
    const productCard = target.closest(".product-item-card");
    if (productCard) {
      if (productCard.classList.contains("unclickable")) {
        return;
      }
      renderProductPage(productCard.dataset.productId);
      return;
    }

    // 4. NOUVEAU : Clic sur le bouton "Retour" (vers Catégories)
    if (target.closest(".back-to-categories-btn")) {
      currentView = "categories";
      currentCategoryId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // 5. NOUVEAU : Clic sur le bouton "Retour" (vers Farms)
    if (target.closest(".back-to-farms-btn")) {
      currentView = "farms";
      currentFarmId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // Clic sur "Appliquer" le code promo
    if (target.closest("#apply-promo-btn")) {
      const input = document.getElementById("promo-code-input");
      const code = input.value.toUpperCase(); // Mets en majuscule

      if (validPromoCodes[code]) {
        appliedPromo = code;
        tg.HapticFeedback.notificationOccurred("success");
        showNotification("✅ Code promo appliqué !");
      } else {
        appliedPromo = null; // Reset au cas où
        tg.HapticFeedback.notificationOccurred("error");
        showNotification("❌ Code promo invalide.");
      }
      renderConfirmation(); // Met à jour la page de confirmation
    }

    // Clic sur "Supprimer" le code promo
    if (target.closest("#remove-promo-btn")) {
      appliedPromo = null;
      showNotification("Code promo retiré.");
      renderConfirmation(); // Met à jour la page
    }

    // Clic sur un bouton de paiement
    if (target.closest(".payment-btn")) {
      paymentMethod = target.closest(".payment-btn").dataset.method;
      // Pas besoin de rafraîchir toute la page, juste les boutons
      document.querySelectorAll(".payment-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.method === paymentMethod);
      });
    }

    // Clic sur "Ajouter au panier"
    if (target.closest(".add-to-cart-btn")) {
      const btn = target.closest(".add-to-cart-btn");

      let selectedVariant = null;

      // CAS 1 : Nouveau système (Boutons JARs)
      const activeVariantBtn = document.querySelector(".variant-btn.active");
      if (activeVariantBtn) {
        selectedVariant = activeVariantBtn.dataset.name;
      }
      // CAS 2 : Ancien système (Select) - Fallback
      else {
        const variantSelect = document.getElementById("product-variant-select");
        if (variantSelect) {
          selectedVariant = variantSelect.value;
        }
      }

      addToCart(
        btn.dataset.productId,
        btn.dataset.weight,
        parseFloat(btn.dataset.price),
        selectedVariant,
      );
    }

    // Clic sur les boutons de quantité
    if (target.closest(".quantity-btn")) {
      const btn = target.closest(".quantity-btn");
      updateQuantity(btn.dataset.id, btn.dataset.action);
    }

    // Clic sur le bouton "fermer"
    if (target.closest(".close-button")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur "Continuer les achats"
    if (target.closest("#cart-continue-shopping")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur les boutons "retour" (des pages produits, panier...)
    if (target.closest(".back-button")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur le bouton du panier
    if (target.closest("#home-cart-button")) {
      renderCart();
      showPage("page-cart");
    }

    // Clic sur "Commander"
    if (target.closest("#checkout-button")) {
      renderConfirmation();
    }

    // Clic sur "Modifier"
    if (target.closest("#confirmation-modify-order")) {
      showPage("page-cart");
    }

    // Clic sur un produit DANS un Pack
    if (target.closest(".pack-item-btn")) {
      const btn = target.closest(".pack-item-btn");
      const targetId = btn.dataset.targetId;

      // On charge la page du produit ciblé
      renderProductPage(targetId);
      return;
    }
    // Clic sur "Confirmer la commande" (VERSION WHATSAPP DIRECT)
    if (target.closest("#confirm-order-button")) {
      // 1. TON NUMÉRO WHATSAPP (Format international sans le +)
      const myPhoneNumber = "33743914796"; // Ajoute ici le nouveau numéro WhatsApp CaliDream sans le +

      // 2. On prépare le message
      let message = formatOrderMessage();

      if (!myPhoneNumber) {
        copyToClipboard(message);
        showNotification("📋 Commande copiée — ajoute le nouveau WhatsApp CaliDream dans script.js");
        return;
      }

      // 3. On encode le message pour qu'il passe dans une URL
      const encodedMessage = encodeURIComponent(message);

      // 4. On crée le lien magique WhatsApp
      const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;

      // 5. On ouvre WhatsApp
      tg.openLink(whatsappUrl);
    }
  });

  // --- INITIALISATION DE L'APP ---
  function init() {
    setTimeout(() => {
      populateFilters();
      renderHomePage(); // Affiche les catégories au début
      updateCartCount();
      showPage("page-home");
    }, 1500);
  }

  init();
});

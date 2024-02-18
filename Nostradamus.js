function obtenerPalabraPorNumeroDeCita(citas) {
  const palabrasPorCita = {};

  // Recorrer todas las claves (citas) en el objeto citas
  for (const cita in citas) {
    // Verificar si la clave es propia del objeto (y no de sus prototipos)
    if (citas.hasOwnProperty(cita)) {
      // Dividir la cita en palabras
      const palabras = citas[cita].split(/\s+/);
      // Obtener la posición de la cita en base a su número
      const numeroCita = parseInt(cita.match(/\d+/)[0]); // Extraer el número de la clave
      // Obtener la palabra en la posición correspondiente al número de la cita

      let palabra;
      if (numeroCita > palabras.length) {
        // Si el número de cita es mayor que el número de palabras,
        // reiniciamos el conteo de palabras
        const index = (numeroCita - 1) % palabras.length;
        palabra = palabras[index];
      } else {
        palabra = palabras[numeroCita - 1]; // Restar 1 porque los arrays comienzan en índice 0
      }

      // Almacenar la palabra en el objeto palabrasPorCita
      palabrasPorCita[cita] = palabra;
    }
  }

  return palabrasPorCita;
}

// Objeto con las citas
const citas = {
  cita1:
    "Estant affis de nuict fecret eftude, Seul repofé fur la elle d'aerain : Flambe exiguë fortant de follitude, Fait profperer qui n'eft à croire vain.",
  cita2:
    "La verge en main mife au milieu de Branches, De Tonde il moulle & le limbe & le pied : Un peur & voix fremiflent par les manches : Splendeur divine. Le divin près s'affied.",
  cita3:
    "Quand la lictiere du tourbillon verfee Et feront faces de leurs manteaux couverts ; La republique par gens nouveaux vexée, Lors blancs & rouges iugeront à l'envers.",
  cita4:
    "Par l'univers fera faict un Monarque y Qu'en paix & vie ne fera longuement : Lors fe perdra la pifcature barque, Sera régie en plus grand détriment.",
  cita5:
    "Chaffez feront pour faire long combat, Par le pays feront plus fort grevez : Bourg & cité auront plus grand débat, Carcaf. Narbonne auront cœur efprouvez.",
  cita6:
    "L'œil de Ravenne fera deftitué, Quand à fes pieds les aifles failliront : Les deux de Breffe auront conftitué, Turin ; Verfeil que Gaulois fouleront.",
  cita7:
    "Tard arrivé y l'exécution faicte, Le vent contraires ; lettres au chemin prinfes Les coniurez xiiij. d'une fecte. Par le Rouffeau ïenez les entreprinfes.",
  cita8:
    "Combien de fois prinfe cité solaire Sera changeant les lois barbares & vaines : Ton mal s'approche. Plus feras tributaire La grand Hadrie recourira tes veines.",
  cita9:
    "De TOrient viendra le cœur Punique Fafcher Hadrie, & les hoirs Romulides. Accompagné de la claffe Libyque, Temple Melites et proches Ifles vuides.",
  cita10:
    "Serpens tranfmis en la cage de fer. Où les enfans septains du Roy font prins, Les vieux & pères fortiront bas de l'enfer ; Ains mourir voir de fruict mort & cris.",
  cita11:
    "Le mouvement de fens, cœur, pieds & mains, Seront d'accord Naples , Lyon Sicille Glaives, feux, eaux puis aux nobles Romains, Plongez, tuez, morts par cerveau débile,",
  cita12:
    "Dans peu dira faulce brute fragile, De bas en hault eflevé promptement. Puis en iftant defloyale & labile, Qui de Veronne aura gouvernement.",
  cita13:
    "Les exilez par ire, haine inteftine, Feront au Roy grand coniuration : Secret mettront ennemis par la mine, Et fes vieux fiens contre eux fedition.",
  cita14:
    "De gent efclave chanfons, chants & requeftes. Captifs par Princes & Seigneurs aux prifons : A Padvenir par idiots fans teiles, Seront receuz par divines oraifons.",
  cita15:
    "Mars nous menafle par la force bellique, Septante fois fera le fang efpandre : Auge & ruyne de PEcclefîaftique, Et plus ceux qui d'eux rien voudront entendre.",
  cita16:
    "Faulx à Feftang ioincte vers le Sagittaire, En fon hault auge de l'exaltation, Pefte, famine, mort de main militaire, Le iiecle approche de rénovation.",
  cita17:
    "Par quarante ans l'Iris n'apparoiftra, Par quarante ans tous les iours fera veu : La terre arride en iîccité croiftra, Et grand déluges quand fera apperceu.",

  cita18:
    "Par la difcorde négligence Gauloife Sera partage à Mahommet ouvert : De fang trempé la terre & mer Senoife, Le port Phocen de voilles & nefs couvert.",

  cita19:
    "Lors que serpens viendront circuir Tare , Le sang Troyen vexé par les Efpaignes : Par eux grand nombre en fera fait tare 5 Chef fuict, caché au mares dans les faignes.",

  cita20:
    "Tours, Orléans, Blois, Angers, Reims & NantesCitez vexées par fubit changement, Par langues eftranges feront tendues tentes, Feuves, dars, Renés, terre & mer tremblement.",

  cita21:
    "Profonde argile blanche nourrit rocher, Qui d'un abyfme iftra lacticineuse, En vain troublez ne l'oseront toucher, Ignorant eftre au fond terre argilleufe.",

  cita22:
    "Ce qui vivra et n'ayant aucun fens , Viendra lefer à mort fon artifice, Autun, Chalons, Langres, & les deux Sens,La grefle et glace fera grand maléfice.",
  cita23:
    "Au mois troifiefme fe levant le Soleil , Sanglier Liepard, au champ Mars pour comLiepard laffé au Ciel eftend fon œil, [battre Un aigle autour du Soleil voit s'esbattre.",
  cita24:
    "A cité neuve penfif pour condamner, L'oifel de proye au Ciel ïe vient offrir : Apres victoire à captifs pardonner, Crémone et Mantouë grand maux aura fouffert.",
  cita25:
    "Perdu, trouvé, caché de fi long iiecle, Sera pafteur demy Dieu honoré : Ains que la Lune achevé son grand fiecle, Par autres vents fera deshonoré.",

  cita26:
    "Le grand du fouldre tombe d'heure diurne, Mal & predict par porteur poftulaire : Suivant prefage tombe d'heure nocturne, Conflict Reims, Londres, Etrufque peftifere.",

  cita27:
    "Deffous de chaine Guien du Ciel frappé, Non loing de là eft caché le trefor, Qui par long fiecles avoit efté grappe , Trouvé mourra, Fœil crevé de reffor.",
  cita28:
    "La tour de Boucq craindra fuite Barbare, Un temps, longtemps après barque hefperique Bettail, gens, meubles, tous deux feront grand Taurus &libra, quelle mortelle picque?",
  cita29:
    "Quand le poiflbn terreftre & aquatique Par force vague au gravier fera mis , Sa forme eftrange fuave & horrifique, Par mer aux murs bien toft les ennemis.",

  cita30:
    "La nef eftrange par le tourment marin , Abordera près de port incogneu : Nonobftant ftgnes de rameau palmerin, Apres mort pille bon advis tard venu.",
  cita31:
    "Tant d'ans en Gaule les guerres dureront, Outre la courïe du Caftulon monarque : Victoire incerte trois grands couronneront,Aigle, Coq, Lune, Lyon, Soleil en marque.",

  cita32:
    "Le grand Empire fera toft translaté En lieu petit, qui bien toft viendra croiftre,Lieu bien infime d'exiguë comté, Où au milieu viendra pofer fon fceptre.",

  cita33:
    "Près d'un grand pont de plaine spatieufe, Le grand Lyon par forces Celarees , Fera abbattre hors cité rigoureufe , Par effroy portes luy feront referrees.",

  cita34:
    "L'oyfeau de proye volant à la feneftre ? Avant conflict faict aux François pareure,L'un bon prendra, l'un ambigu fîniftre; La partie foible tiendra par bon augure.",
  cita35:
    "Le lyon ieune le vieux furmontera, En champ bellique par fingulier duelle, Dans cage d'or les yeux luy crèvera , Deux clafles une puis mourir mort cruelle.",

  cita36:
    "Tard le Monarque fe viendra repentir, De n'avoir mis à mort fon adverfaire , Mais viendra bien à plus hault confentir, Que tout fon fang par mort fera deffaire.",

  cita37:
    "Un peu devant que le Soleil s'absconfe 7 Conflict donné, grand peuple dubiteux, Profligez, port marin ne fait refponse, Pont & fepulchre en deux eftranges lieux.",

  cita38:
    "Le Sol et l'Aigle au victeur paroiftront ? Refponfe vaine au vaincu Ton affeure, Par cor ny cris harnois n'arrefteront, Vindicte paix par mors fi achevé à l'heure.",

  cita39:
    "De nuict dans lict le fuprefme eftrangle, Pour trop avoir feiourné blond efleu, Par trois l'Empire fubroge exancle, A mort mettra carte , & paquet ne leu.",

  cita40:
    "La trombe faufle diffimulant folie, Fera Bifance un changement de loix. Hiftra d'Egypte , qui veut que Ton deflie Edict changeant monnoye & aloys.",
  cita41:
    "Siège en cité eft de nui et afïaillie, Peu efchapé., non loin de mer conflict ., Femme de ioye, retours fils defaillie, Poifon & lettres cachées dans le plie.",

  cita42:
    "Le dix Calende d'Avril de faict Gotique , Refufcité encor par gens malins , Le feu eftainct, affemblee diabolique, Cherchant les os du d'Amant & Pfelin.",

  cita43:
    "Avant qu'advienne le changement d'Empire, Il adviendra un cas bien merveilleux , Le champ mué, le pillier de Porphire Mis, tranfmué fus le rocher noilleux.",

  cita44:
    "En bref feront de retour facrifices, Contrevenans feront mis à martyre : Plus ne feront moines , abbez, ne novices , Le miel fera beaucoup plus cher que cire.",

  cita45:
    "Secteur de fectes grand peine au délateur, Befte en théâtre , dreffe le ieu feenique, Du faict antique annobly l'inventeur, Par fectes monde confus & fchifmatique.",

  cita46:
    "Tout après d'Aux, de Leftore & Mirande, Grand feu du ciel en trois nuicts tombera : Caufe adviendra bien ftupende & Mirande, Bien peu après la terre tremblera.",
  cita47:
    "Du lac Léman les fermons fafcheront, Des iours feront reduicts par des femaines, Puis mois, puis an, puis tous défailliront, Les Magiftrats damneront leurs loix vaines.",

  cita48:
    "Vingt ans du règne de la Lune paffez, Sept mille ans autre tiendra fa monarchie : Quand le Soleil prendra fes iours laflez, Lors accomplir & mine ma prophétie.",

  cita49:
    "Beaucoup avant telle menées, Ceux d'Orient par la vertu lunaire : L'an mil septr cens feront grand emmenées, Subiuguant presque le coing Aquilonaire.",

  cita50:
    "De Paquatique triplicité naiftra, D'un qui fera le Ieudy pour fa fefte : Son bruit, loz, règne, fa puiffance croiftra, Par terre & mer aux Oriens tempefte.",

  cita51:
    "Chefs d'Aries, Jupiter & Saturne , Dieu éternel quelles mutations ? Puis par long fiecle fon maling temps retourne Gaule & Italie, quelles efmotions?",

  cita52:
    "Les deux malins de Scorpion conioincts., Le grand seigneur meurdry dedans la falle : Peste à FEglife par le nouveau Roy joint, L'Europe baisse et Septentrionale.",
  cita53:
    "Las qu'on verra grand peuple tourmenté , Et la loy faincte en totale ruine , Par autres loix toute la Chreftienté , Quand d'or d'argent trouve nouvelle mine.",

  cita54:
    "Deux revolts faits du maling facigere, De règne & fiecles fait permutation : Le mobil ûgne à fon endroit û ingère, Aux deux efgaux & d'inclination.",

  cita55:
    "Sous l'oppofîte climat Babylonique, Grande fera de fang effusion, Que terre & mer, air, ciel fera inique, Sectes, faim, règnes, peftes, confusion.",

  cita56:
    "Vous verrez toft & tard faire grand change,Horreurs extrêmes & vindications : Que fi la Lune conduicte par fon ange, Le ciel s'approche des inclinations.",

  cita57:
    "Par grand difcord la trombe tremblera, Accord rompu dreffant la telle au Ciel, Bouche fanglante dans le fang nagera, Au fol la face oincte de laict & miel.",

  cita58:
    "Tranché le ventre naiftra avec deux teftes , Et quatre bras, quelques ans entiers vivra?Iour qui Alquiloye célébrera fes feftes, Foffen, Turin, chef Ferrare fuyvra.",

  cita59:
    "Les exilez déportez dans les Ifles , Au changement cPun plus cruel Monarque Seront meurtris , & mis deux les fcintiles, Qui de parler ne feront eftez parques.",

  cita60:
    "Un Empereur naiftra près d'Italie, Qui à PEmpire fera vendu bien cher, Diront avec quels gens il fe ralie, Qu'on trouvera moins prince que boucher.",

  cita61:
    "La republique miferable infelice Sera vaftee du nouveau magiftrat, Leur grand amas de Texil maléfice Fera Sueve raur leur grand contract.",

  cita62:
    "La grande perte, las que feront les lettres, Avant le Ciel de Latona parfaict, Feu grand déluge plus par ignares fceptres, Que de long fiecle ne fe verra refaict.",

  cita63:
    "Les fleurs paffez diminue le monde, Long temps la paix terres inhabitées, Seur marchera par Ciel, terre, mer, & onde, Puis de nouveau les guerres fufcitees.",

  cita64:
    "De nuict Soleil penferont avoir veu Quand le pourceau demy homme on verra. Bruit, chant, bataille au Ciel battre aperceu, Et beftes brutes à parler Ton orra.",
  cita65:
    "Enfant fans mains iamais veu fi grand foudre, L'enfant Royal au ieu d'œfteuf bleffé, Au puy brifes fulgures allant mouldre , Trois fouz les chaines par le milieu trouffez.",

  cita66:
    "Celuy qui lors portera les nouvelles , Apres un il viendra refpirer, Viviers, Tournon, Montferrant & Pradelles,Grefle & tempefte le fera foufpirer.",

  cita67:
    "La grand famine que ie fens approcher, Souvent tourner, puis eftre univerfelle, Si grande & longue qu'on viendra arracherDu bois racine, & l'enfant de mammelle.",

  cita68:
    "O quel horrible & malheureux tourment , Trois innocens qu'on viendra à livrer, Poifon fufpecte, mal gardé tradiment, Mis en horreur par bourreaux enyvrez.",

  cita69:
    "La grand montagne ronde de fept ftades, Apres paix, guerre, faim, inondation , Roulera loin abifmant grands contrades, Mefmes antiques, & grand fondation.",
  cita70:
    "Pluye, faim, guerre en Perfe non cefîee, La foy trop grande trahira le monarque : Par la finie en Gaule commencée , Secret augure pour à un eftre parque.",
  cita71:
    "La tour marine trois fois prife & reprife , Par Efpagnols, Barbares , Ligurins : Marfeille & Aix, Arles par ceux de Pife, Vaft, feu ; fer, pillé Avignon des Thurins.",

  cita72:
    "Du tout Marfeille des habitans changée , Courfe & pourfuitte iufque auprès de Lyon, Narbon, Toloze, par Bourdeaux outragée } Tuez captifs prefque d'un million.",

  cita73:
    "France à cinq pars par neglect aflaillie, Tunys, Argal efmeuz par Perfîens : Léon, Seville, Barcellonne faillie, N'aura la claffe par les Vénitiens.",

  cita74:
    "Apres ïeiourné vogueront en Epire , Le grand fecours viendra vers Antioche : Le noir poil crefpe tendra fort à l'Empire , Barbe d'aerain fe roftira en broche.",

  cita75:
    "Le tyran Sienne occupera Savonne , Le fort gaigné tiendra claffe marine : Les deux armées par la marque d'Anconne , Par efFrayeur le chef s'en examine.",

  cita76:
    "D'un nom farouche tel proféré fera , Que les trois feurs auront fato le nom : Puis grand peuple par langue & faict dira, Plus que nul autre aura bruit & renom.",
  cita77:
    "Entre deux mers dreffera promontoire , Que puis mourra par le mors du cheval : Le fien Neptune pliera voile noire , Par Calpre & claffe auprès de Rocheval.",

  cita78:
    "D'un chef vieillard naiftra fens hebeté , Dégénérant par fçavoir & par armes : Le chef de France par fa fœur redouté , Champs divifez, concédez aux gendarmes.",

  cita79:
    "Bazar, Leftore, Condon, Aufch, Agine, Efmeus par loix , querelle & monopole : Car Bourd. Tholoze Bay mettra en ruine , Renouveller voulant leur tauropole.",

  cita80:
    "De la iixiefme claire ïplendeur celefte , Viendra tonner û fort en la Bourgongne, Puis naiftra monftre de très hideufe befte , Mars, Avril, May; Iuin grand charpin & rongne.",

  cita81:
    "D'humain troupeau neuf feront mis à part, De iugement & confeil feparez, Leur fort fera divifé en départ ; Kappa ; Thita ; Lambda mors bannis efgarez.",

  cita82:
    "Quand les colonnes de bois grande tremblée,D'auftere conduicte, couverte de rubriche, Tant vuidera dehors grande aflemblee, Trembler Vienne & le pays d'Auftriche.",
  cita83:
    "La gent eftrange divifera butins , Saturne en Mars fon regard furieux , Horrible eftrange aux Tofcans & Latins, Grecs qui feront à frapper curieux.",

  cita84:
    "Lune obfcurcie aux profondes ténèbres , Son frère paffe de couleur ferrugine , Le grand caché long temps fous les ténèbres, Tiedera fer dans la praye fanguine.",

  cita85:
    "Par la refponfe de Dame Roy troublé , Ambaiîadeurs mefpriferont leur vie , Le grand fes frères contrefera doublé, Par deux mourront ire, haine & envie.",

  cita86:
    "La grande Royne quand fe verra vaincue Fera excez de mafculin courage, Sur cheval , fleuve paffera toute nue , Suite par fer, à foy fera outrage.",
  cita87:
    "En nofîgee feu du centre de terre , Fera trembler autour de cité neuve , Deux grands rochers longtemps feront la guerre, Puis Arethufe rougira nouveau fleuve.",

  cita88:
    "Le divin mal furprendra le grand Prince, Un peu devant aura femme efpoufee Son appuy & crédit à un coup viendra mince , Confeil mourra pour la tefte rasee.",
  cita89:
    "Tous ceux de Illerde feront dans la Mofelle, Mettant à mort tous ceux de Loire & Seine , Le cours marin viendra près d'haute velle, Quand Efpagnols ouvrira toute veine.",

  cita90:
    "Bourdeaux, Poictiers au fon de la campagne, A grande claffe ira iufqu'à TAngon , Contre Gaulois fera leur tramontane , Quand ^monftre hideux naiftra près de Orgon.",

  cita91:
    "Les Dieux feront aux humains apparence, Ce qu'ils feront auteurs de grand conflict, Avant Ciel veu ferain efpee & lance,, Que vers main gauche fera plus grand afïlict.",

  cita92:
    "Sous un la paix par tout fera clamée, Mais non long temps pille & rébellion, Par refus ville, terre & mer entamée, Mort et captifs le tiers d'un million.",

  cita93:
    "Terre Italique près des monts tremblera ? Lyon & Coq non trop confederez , En lieu de peur l'un l'autre s'aydera , Seul Catulon & Celtes modérez.",

  cita94:
    "Au port Selin le tyran mis à mort, La liberté non pourtant recouvrée : Le nouveau Mars par vindicte et remort, Dame par force de frayeur honnoree.",
  cita95:
    "Devant mouftier trouvé enfant beffon, D'heroic sang- de moine & vetuftique : Son bruit par fecte langue & puiffance Ton , Qu'on dira fort eflevé le vopifque.",

  cita96:
    "Celuy qu'aura la charge de deftruire Temples , & fectes, changez par fantafie : Plus aux rochers qu'aux vivans viendra nuire. Par langue ornée d'oreilles reflafie.",

  cita97:
    "Ce que fer, flamme n'a fçeu parachever, La douce langue au confeil viendra faire : Par repos , fonge ; le Roy fera refver , Plus l'ennemy en feu, fang militaire.",

  cita98:
    "Le chef qu'aura conduict peuple infini Loing de fon ciel, de meurs & langue eftrange, Cinq mil en Crète & Theffalie fîny , Le chef fuyant fauve en la marine grange.",

  cita99:
    "Le grand monarque que fera compagnie Avec deux Roys unis par amitié : O quel foufpir fera la grand mefgnie , Enfans Narbon à l'entour, quel pitié.",

  cita100:
    "Longtemps au ciel fera veu gris oyfeau, Auprès de Dole & de Tofcane terre : Tenant au bec un verdoyant rameau , Mourra toft grand et finera la guerre.",
};

// Obtener la palabra de cada cita en base a su número
const palabrasPorCita = obtenerPalabraPorNumeroDeCita(citas);

// Mostrar las palabras con su respectiva cita
for (const cita in palabrasPorCita) {
  if (palabrasPorCita.hasOwnProperty(cita)) {
    //console.log(`En la cita ${cita}, la palabra es: ${palabrasPorCita[cita]}`);
    console.log(palabrasPorCita[cita]);
  }
}

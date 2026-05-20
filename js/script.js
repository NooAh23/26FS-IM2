console.log("blub");

// 1. Das konsolidierte Objekt mit ALLEN Drink-Beschreibungen (über die Cocktail-ID)
const drinkDescriptions = {
  // --- Liste 1 (Original) ---
  "15300": "Der 3-Mile Long Island Iced Tea ist ein extrem kräftiger Cocktail mit mehreren Spirituosen und einem frischen Cola-Finish.",
  "13581": "410 Gone kombiniert starke Aromen mit einem fruchtigen Charakter und eignet sich perfekt für Partynächte.",
  "14598": "50/50 ist ein ausgewogener Cocktail mit harmonischem Verhältnis zwischen Süße und Frische.",
  "17105": "501 Blue überzeugt mit seiner intensiven blauen Farbe und einem fruchtig-süßen Geschmack.",
  "13940": "69 Special ist ein klassischer Partycocktail mit kräftigem Aroma und leichter Süße.",
  "15200": "A Day at the Beach bringt tropisches Sommerfeeling mit fruchtigen und exotischen Noten ins Glas.",
  "17831": "A Furlong Too Late ist ein eleganter Cocktail mit komplexen Kräuter- und Spirituosenaromen.",
  "15675": "A midsummernight dream ist ein leichter, aromatischer Drink mit sommerlicher Frische.",
  "17832": "A Night In Old Mandalay kombiniert würzige und süße Aromen zu einem besonderen Geschmackserlebnis.",
  "17833": "A. J. ist unkomplizierter Cocktail mit fruchtigem Charakter und angenehmer Frische.",
  "17834": "Der Abbey Cocktail ist ein klassischer Gin-Drink mit feiner Zitrusnote und elegantem Finish.",
  "17835": "Abilene verbindet cremige und süße Komponenten zu einem angenehm weichen Cocktail.",
  "15597": "Absolut Stress #2 liefert einen fruchtig-frischen Geschmack mit angenehmer Vodka-Note.",
  "15024": "Absolutely Cranberry Smash überzeugt mit fruchtiger Cranberry und leichter Säure.",
  "17836": "Acapulco bringt tropische Aromen und sommerliche Leichtigkeit in einem Glas zusammen.",
  "17837": "Adam ist ein aromatischer Klassiker mit feinen Kräuternoten und sanfter Süße.",
  "15567": "Adam Sunrise kombiniert fruchtige Frische mit einem farbenfrohen Sunrise-Look.",
  "17838": "Der Adonis Cocktail ist ein eleganter Aperitif mit leichter Kräuter- und Weinnote.",
  "17839": "Affair bietet ein harmonisches Zusammenspiel aus Süße, Fruchtigkeit und Spirituose.",
  "17840": "Affinity ist ein klassischer Cocktail mit würzigem Charakter und angenehmer Tiefe.",

  // --- Liste 2 (Biermixe & Specials) ---
  "15423": "110 in the shade ist ein erfrischender Biercocktail mit fruchtiger Zitrusnote und sommerlichem Charakter.",
  "13282": "Black & Tan kombiniert helles und dunkles Bier zu einem kräftigen und malzigen Geschmackserlebnis.",
  "16403": "Black and Brown verbindet dunkle Bieraromen mit einer sanften Süße und cremigem Finish.",
  "17035": "Buccaneer ist ein würziger Biercocktail mit kräftigem Aroma und leicht exotischer Note.",
  "16047": "Campari Beer kombiniert die herbe Bitterkeit von Campari mit spritziger Bierfrische.",
  "17065": "Caribbean Boilermaker bringt tropische Rum-Aromen und kräftiges Bier harmonisch zusammen.",
  "13128": "Diesel ist ein intensiver Biermix mit süßlich-herber Cola-Note und markantem Geschmack.",
  "13497": "Green Goblin überzeugt mit fruchtiger Frische und einer angenehm leichten Bierbasis.",
  "17015": "Irish Russian kombiniert cremige Kaffee-Aromen mit einer kräftigen Biernote.",
  "15086": "Limona Corona ist ein sommerlicher Bierdrink mit spritziger Limette und erfrischendem Charakter.",
  "14378": "Lunch Box vereint Bier, Fruchtlikör und leichte Süße zu einem beliebten Partycocktail.",
  "13389": "Snake Bite (UK) kombiniert Bier und Cider zu einem kräftigen und fruchtigen Klassiker aus Großbritannien.",
  "15789": "Snakebite and Black erweitert den klassischen Snakebite mit fruchtiger Johannisbeer-Note.",
  "178347": "Winter Rita verbindet winterliche Gewürze mit frischer Margarita- und Biernote zu einem besonderen Seasonal Drink.",

  // --- Liste 3 (Große Cocktail & Mix-Auswahl) ---
  "15346": "155 Belmont ist ein fruchtiger Cocktail mit ausgewogener Süße und angenehmer Frische.",
  "14029": "57 Chevy with a White License Plate kombiniert cremige und fruchtige Aromen zu einem besonderen Genuss.",
  "178318": "747 Drink überzeugt mit kräftigen Spirituosen und einem intensiven Geschmackserlebnis.",
  "16108": "9 1/2 Weeks ist ein süßer und fruchtiger Cocktail mit weichem Finish.",
  "16943": "A Gilligan's Island bringt tropische Früchte und sommerliche Leichtigkeit perfekt zusammen.",
  "17005": "A True Amaretto Sour verbindet Mandelaromen mit frischer Zitrone und angenehmer Süße.",
  "14560": "A.D.M. (After Dinner Mint) ist ein cremiger After-Dinner-Drink mit frischer Minznote.",
  "17222": "A1 kombiniert fruchtige Komponenten mit einer angenehm kräftigen Spirituosenbasis.",
  "17223": "Abbey Martini ist ein eleganter Martini mit feinen Kräuter- und Zitrusnoten.",
  "14107": "Absolut Summertime überzeugt mit fruchtiger Frische und sommerlichem Charakter.",
  "17224": "Absolutely Fabulous bietet einen spritzigen Mix aus Fruchtigkeit und prickelnder Leichtigkeit.",
  "16134": "Absolutly Screwed Up ist ein intensiver Partycocktail mit fruchtig-süßem Geschmack.",
  "17225": "Ace kombiniert frische Zitrusnoten mit harmonischer Süße und elegantem Finish.",
  "17226": "Adam & Eve bringt fruchtige und würzige Aromen in perfekter Balance zusammen.",
  "17227": "Addington ist ein klassischer Cocktail mit aromatischen Kräuternoten und leichter Frische.",
  "17228": "Addison überzeugt mit fruchtiger Leichtigkeit und einem ausgewogenen Geschmack.",
  "14272": "Addison Special kombiniert frische Fruchtaromen mit angenehmer Süße und leichter Säure.",
  "17229": "Adios Amigos Cocktail ist ein kräftiger Drink mit exotischer Fruchtigkeit und intensiver Spirituose.",
  "12560": "Afterglow ist ein alkoholfreier Cocktail mit tropischer Frische und fruchtigem Geschmack.",
  "12562": "Alice Cocktail überzeugt mit cremigen Fruchtaromen und weicher Süße.",
  "178321": "Amaretto fizz kombiniert prickelnde Frische mit dem typischen Mandelaroma von Amaretto.",
  "178325": "Aperol Spritz ist der italienische Klassiker mit bittersüßer Orange und prickelnder Frische.",
  "178353": "Apple Highball verbindet frischen Apfelgeschmack mit spritziger Leichtigkeit.",
  "16311": "Applejack ist ein aromatischer Cocktail mit kräftiger Apfelnote und angenehmer Wärme.",
  "178319": "Aquamarine begeistert mit exotischen Früchten und seiner erfrischenden blauen Optik.",
  "14584": "Arizona Stingers kombiniert fruchtige Frische mit leichter Süße und sommerlichem Charakter.",
  "17074": "Arizona Twister überzeugt mit tropischen Fruchtaromen und spritziger Leichtigkeit.",
  "17066": "Army special ist ein kräftiger Cocktail mit würziger Note und klassischem Charakter.",
  "178337": "Autumn Garibaldi verbindet herbe Orange mit herbstlichen Aromen und sanfter Süße.",
  "17180": "Aviation ist ein eleganter Gin-Klassiker mit floralen Noten und feiner Frische.",
  "17267": "Bahama Mama bringt karibisches Feeling mit tropischen Früchten und Rum-Aromen ins Glas.",
  "178320": "Banana Cream Pi überzeugt mit cremiger Banane und dessertartigem Geschmack.",
  "178317": "Bee's Knees kombiniert Gin, Honig und Zitrone zu einem klassischen Cocktail voller Balance.",
  "17254": "Bijou ist ein aromatischer Cocktail mit Kräuternoten und elegantem Charakter.",
  "17268": "Blue Hurricane liefert tropische Fruchtigkeit und eine intensive blaue Optik.",
  "178336": "Blueberry Mojito verbindet frische Minze mit süßen Heidelbeeren und Limette.",
  "17242": "Bombay Cassis kombiniert feine Gin-Noten mit fruchtiger schwarzer Johannisbeere.",
  "12572": "Bora Bora ist ein exotischer Fruchtcocktail mit tropischem Sommerfeeling.",
  "17251": "Boulevardier vereint Bourbon, Bitterlikör und Vermouth zu einem eleganten Klassiker.",
  "178331": "Bounty Hunter überzeugt mit kräftigem Geschmack und süß-würziger Note.",
  "17825": "Brigadier ist ein aromatischer Cocktail mit kräftigem Charakter und harmonischer Balance.",
  "178311": "Broadside kombiniert würzige Spirituosen mit angenehmer Tiefe und leichter Süße.",
  "178310": "Brooklyn ist ein klassischer Whiskey-Cocktail mit trockener und aromatischer Note.",
  "178356": "Butterfly Effect begeistert mit floralen Aromen und moderner Cocktail-Frische.",
  "178329": "Captain Kidd's Punch bringt tropische Früchte und kräftige Rum-Noten harmonisch zusammen.",
  "17174": "Cherry Electric Lemonade kombiniert süße Kirsche mit spritziger Zitronenfrische.",
  "178369": "Cocktail Horse’s Neck überzeugt mit würziger Frische und klassischem Stil.",
  "17830": "Corn n Oil verbindet dunklen Rum mit würziger Süße und karibischem Charakter.",
  "17250": "Corpse Reviver ist ein legendärer Cocktail mit kräftiger Frische und komplexen Aromen.",
  "17196": "Cosmopolitan kombiniert Vodka, Cranberry und Limette zu einem modernen Cocktailklassiker.",
  "14133": "Cosmopolitan Martini bietet fruchtige Frische und elegante Cocktail-Optik.",
  "14608": "Cream Soda überzeugt mit cremiger Süße und sanfter Vanillenote.",
  "17177": "Dark Caipirinha bringt kräftigen Zuckerrohrgeschmack und frische Limette perfekt zusammen.",
  "178334": "Death in the Afternoon kombiniert Absinth und prickelnden Sekt zu einem außergewöhnlichen Drink.",
  "17181": "Dirty Martini ist ein trockener Martini mit markanter Olivennote und elegantem Charakter.",
  "11005": "Dry Martini zählt zu den bekanntesten Cocktailklassikern mit trockener und klarer Aromatik.",
  "17182": "Duchamp's Punch verbindet fruchtige Frische mit kräftigen Spirituosen zu einem harmonischen Punch.",
  "178346": "Elderflower Caipirinha kombiniert Holunderblüte mit frischer Limette und sommerlicher Leichtigkeit.",
  "17246": "Empellón Cocina's Fat-Washed Mezcal überzeugt mit rauchigen und komplexen Mezcal-Aromen.",
  "17212": "Espresso Martini verbindet kräftigen Kaffee mit feiner Vodka-Note und cremigem Finish.",
  "178309": "Espresso Rumtini kombiniert intensiven Espresso mit aromatischem Rum zu einem modernen Cocktail.",
  "178344": "Figgy Thyme begeistert mit Feigenaromen und würziger Kräuterfrische.",
  "16485": "Flaming Lamborghini ist ein spektakulärer Partyshot mit feuriger Präsentation und süßem Geschmack.",
  "17213": "French Martini kombiniert Vodka, Himbeere und Ananas zu einem fruchtig-eleganten Cocktail.",
  "17248": "French Negroni bringt französische Eleganz in den klassischen bitteren Cocktailstil.",
  "178352": "Frosé ist ein gefrorener Rosé-Cocktail mit fruchtiger Frische und sommerlichem Charakter.",
  "178328": "Funk and Soul kombiniert intensive Fruchtaromen mit modernem Cocktail-Style.",
  "12758": "Gagliardo überzeugt mit ausgewogener Bitterkeit und mediterraner Frische.",
  "178340": "Garibaldi Negroni verbindet bittersüße Orange mit kräftigem italienischem Charakter.",
  "17255": "Gimlet ist ein klassischer Cocktail aus Gin und Limette mit erfrischender Klarheit.",
  "178342": "Gin and Soda überzeugt mit leichter Frische und klaren Gin-Aromen.",
  "178314": "Gin Basil Smash kombiniert frischen Basilikum mit aromatischem Gin und Zitrone.",
  "178366": "Gin Lemon ist ein spritziger Longdrink mit frischer Zitronennote und leichter Bitterkeit.",
  "17230": "Gin Rickey bietet trockene Frische mit Limette und klassischem Gin-Charakter.",
  "178365": "Gin Tonic ist der zeitlose Klassiker mit herb-frischer Note und prickelndem Finish.",
  "17252": "Greyhound kombiniert Vodka oder Gin mit frischer Grapefruit für einen herben Geschmack.",
  "178316": "Honey Bee verbindet süßen Honig mit frischer Zitrone und aromatischem Rum.",
  "178345": "Hot Toddy ist ein wärmender Klassiker mit Gewürzen, Zitrone und angenehmer Süße.",
  "17239": "Hunter's Moon überzeugt mit kräftigen Aromen und herbstlicher Tiefe.",
  "12706": "Imperial Cocktail kombiniert elegante Spirituosen mit feiner Kräuterwürze.",
  "16987": "Irish Curdling Cow ist ein cremiger Likördrink mit intensivem Geschmack.",
  "16178": "Jitterbug verbindet Kaffee-, Minz- und Schokoladenaromen zu einem besonderen Genuss.",
  "178359": "Kiwi Martini begeistert mit exotischer Kiwi und fruchtiger Frische.",
  "178335": "Lazy Coconut Paloma kombiniert Kokosnuss mit spritziger Grapefruit und sommerlichem Flair.",
  "14366": "Lemon Drop überzeugt mit süß-saurer Zitronenfrische und elegantem Vodka-Charakter.",
  "178360": "Lemon Elderflower Spritzer kombiniert Holunderblüte mit prickelnder Zitronenfrische.",
  "15224": "Malibu Twister bringt tropische Kokosnuss und fruchtige Sommeraromen ins Glas.",
  "178358": "Mango Mojito verbindet frische Minze mit exotischer Mango und Limette.",
  "11008": "Manhattan ist ein klassischer Whiskey-Cocktail mit würziger Tiefe und elegantem Finish.",
  "17256": "Martinez 2 gilt als aromatischer Vorläufer des klassischen Martini.",
  "11720": "Martinez Cocktail kombiniert Gin und Vermouth zu einem eleganten Klassiker.",
  "11728": "Martini steht für zeitlose Eleganz mit klarer Spirituosenstruktur und trockenem Charakter.",
  "17188": "Mary Pickford kombiniert Rum, Ananas und Grenadine zu einem fruchtigen Klassiker.",
  "178370": "Mauresque überzeugt mit feiner Anisnote und mediterraner Frische.",
  "13936": "Miami Vice verbindet Piña Colada und Strawberry Daiquiri zu einem tropischen Sommerdrink.",
  "178343": "Michelada kombiniert Bier, Limette und würzige Zutaten zu einem mexikanischen Klassiker.",
  "14842": "Midnight Mint bietet frische Minze und dunkle Aromen in harmonischer Balance.",
  "11000": "Mojito kombiniert frische Minze, Limette und Rum zu einem der beliebtesten Sommerdrinks.",
  "15841": "Mojito Extra liefert intensivere Minz- und Limettenaromen mit extra Frische.",
  "178355": "Mountain Bramble verbindet fruchtige Beeren mit kräftigem Gin und frischer Zitrone.",

  // --- Liste 4 (Kakao & Heißgetränke) ---
  "12730": "Castillian Hot Chocolate ist eine besonders cremige heiße Schokolade mit intensivem Kakaoaroma und spanischem Charakter.",
  "12732": "Chocolate Beverage überzeugt mit vollmundigem Schokoladengeschmack und angenehmer Süße.",
  "12734": "Chocolate Drink kombiniert cremige Konsistenz mit klassischem Kakaoaroma für gemütliche Genussmomente.",
  "12736": "Drinking Chocolate bietet intensiven Schokoladengeschmack mit besonders reichhaltiger Textur.",
  "12748": "Orange Scented Hot Chocolate verbindet intensive Schokolade mit feinen frischen Orangennoten.",
  "12750": "Spanish chocolate ist eine dickflüssige spanische Trinkschokolade mit kräftigem Kakaoaroma und samtiger Konsistenz.",

  // --- Liste 5 (Liköre & Hausgemachtes) ---
  "12790": "Absinthe #2 überzeugt mit kräftigen Kräuteraromen und dem typischen intensiven Charakter von Absinth.",
  "12792": "Amaretto Liqueur bietet ein süßes Mandelaroma mit weichem und angenehm warmem Finish.",
  "12794": "Angelica Liqueur kombiniert würzige Kräuternoten mit feiner Süße und aromatischer Tiefe.",
  "12796": "Caribbean Orange Liqueur verbindet tropische Orangenaromen mit karibischer Frische und leichter Süße.",
  "12798": "Coffee Liqueur überzeugt mit intensivem Kaffeegeschmack und angenehmer Likörsüße.",
  "12800": "Coffee-Vodka kombiniert kräftigen Kaffee mit klarer Vodka-Note zu einem aromatischen Genuss.",
  "12802": "Cranberry Cordial bietet fruchtige Cranberry-Aromen mit leichter Süße und frischer Säure.",
  "12808": "Creme de Menthe begeistert mit intensiver Minzfrische und süßem Likörcharakter.",
  "17044": "Homemade Kahlua kombiniert Kaffee, Vanille und feine Süße zu einem hausgemachten Likörklassiker.",
  "12820": "Irish Cream verbindet cremige Textur mit Whiskey- und Schokoladenaromen zu einem beliebten Klassiker.",
  "12854": "Scottish Highland Liqueur überzeugt mit würzigen Kräuternoten und typisch schottischem Charakter.",
  "12856": "Tia-Maria kombiniert aromatischen Kaffee mit feiner Vanille und angenehmer Süße.",

  // --- Liste 6 (Shakes) ---
  "14588": "151 Florida Bushwacker kombiniert cremige Schokolade mit kräftigem Rum und tropischem Charakter.",
  "12564": "Apple Karate überzeugt mit fruchtigem Apfelgeschmack und angenehm süßer Frische.",
  "16419": "Avalanche ist ein cremiger Cocktail mit intensiver Süße und weichem Finish.",
  "15511": "Baby Eskimo verbindet cremige Schokoladenaromen mit feiner Minzfrische.",
  "12654": "Banana Milk Shake bietet cremigen Bananengeschmack und eine angenehm süße Konsistenz.",
  "12656": "Banana Strawberry Shake kombiniert süße Erdbeeren mit cremiger Banane zu einem fruchtigen Genuss.",
  "12658": "Banana Strawberry Shake Daiquiri verbindet tropischen Daiquiri-Charakter mit cremiger Fruchtigkeit.",
  "15951": "Black Forest Shake erinnert mit Schokolade und Kirsche an die klassische Schwarzwälder Kirschtorte.",
  "14356": "Blind Russian kombiniert cremige Likörnoten mit kräftigem Kaffee-Aroma.",
  "17221": "Boozy Snickers Milkshake bietet Schokolade, Karamell und cremige Süße mit alkoholischem Twist.",
  "17220": "Butter Baby überzeugt mit cremigem Geschmack und feinen Butterscotch-Aromen.",
  "15615": "Chocolate Monkey kombiniert Banane und Schokolade zu einem süßen und cremigen Cocktail.",
  "14095": "Jamaica Kiss bringt tropische Aromen und cremige Kokosnoten harmonisch zusammen.",
  "12688": "Just a Moonmint überzeugt mit frischer Minze und cremig-süßem Geschmack.",
  "13861": "Nutty Irishman kombiniert cremigen Likör mit feinen Nuss- und Kaffee-Aromen.",
  "12724": "Sweet Bananas bietet intensiven Bananengeschmack mit cremiger Süße und tropischem Flair.",
  "16990": "Sweet Tooth ist ein dessertartiger Cocktail mit besonders süßem und cremigem Charakter.",
  "15639": "Texas Sling kombiniert kräftige Spirituosen mit fruchtiger Süße und erfrischender Leichtigkeit.",

  // --- Liste 7 (Shots) ---
  "17060": "24k nightmare ist ein intensiver Shot mit kräftigen Aromen und auffälligem Partycharakter.",
  "15288": "252 kombiniert starke Spirituosen mit süßlicher Note zu einem klassischen Partyshot.",
  "13899": "3 Wise Men vereint mehrere Whiskeysorten zu einem besonders kräftigen Shot.",
  "14229": "747 überzeugt mit süßen Likörnoten und einem intensiven Finish.",
  "14564": "A Splash of Nash kombiniert fruchtige Süße mit angenehm kräftigem Geschmack.",
  "13501": "ABC verbindet cremige und aromatische Liköre zu einem weichen Shot-Erlebnis.",
  "14360": "Absolut Sex ist ein fruchtiger Partyshot mit süßem und intensivem Charakter.",
  "14610": "ACID überzeugt mit kräftiger Süße und auffälliger Shot-Optik.",
  "13807": "After Five kombiniert Schokolade und Minze zu einem beliebten Dessert-Shot.",
  "13683": "Apple Slammer bringt fruchtigen Apfelgeschmack mit kräftiger Spirituosenbasis zusammen.",
  "16354": "Arizona Antifreeze überzeugt mit frischer Fruchtigkeit und intensiver Farbe.",
  "17020": "Auburn Headbanger ist ein starker Shot mit würzigen und süßen Aromen.",
  "15853": "B-52 ist der legendäre Layered Shot mit Kaffee-, Sahne- und Orangenlikör.",
  "13332": "B-53 erweitert den klassischen B-52 um zusätzliche intensive Likörnoten.",
  "17079": "Baby Guinness sieht aus wie ein kleines Guinness und überzeugt mit cremigem Geschmack.",
  "13222": "Big Red kombiniert süße Liköre mit kräftigem Partycharakter.",
  "13395": "Bob Marley begeistert mit farbenfrohen Schichten und fruchtigem Geschmack.",
  "13405": "Brainteaser verbindet cremige Süße mit fruchtigen und alkoholischen Noten.",
  "13068": "Brave Bull Shooter kombiniert kräftigen Kaffee-Likör mit Tequila für intensiven Geschmack.",
  "13066": "Bruce's Puce überzeugt mit süßem Aroma und cremiger Konsistenz.",
  "16998": "Bruised Heart kombiniert fruchtige Frische mit kräftigem Alkoholcharakter.",
  "14730": "Bubble Gum erinnert geschmacklich an süßen Kaugummi und sorgt für Partyfeeling.",
  "14538": "Bumble Bee verbindet süße und cremige Komponenten zu einem harmonischen Shot.",
  "13328": "Chocolate Milk kombiniert cremige Schokolade mit feinen Likörnoten.",
  "13194": "Damned if you do ist ein intensiver Shot mit kräftiger Süße und würziger Note.",
  "14466": "Dirty Nipple überzeugt mit cremigem Geschmack und süßem Likörcharakter.",
  "13070": "Fahrenheit 5000 bringt intensive Schärfe und kräftige Spirituosen zusammen.",
  "13202": "Flaming Dr. Pepper ist ein berühmter brennender Shot mit überraschendem Geschmack.",
  "14688": "Freddy Kruger kombiniert fruchtige Süße mit dunklen Liköraromen.",
  "17178": "Jam Donut erinnert geschmacklich an einen süßen Marmeladendonut.",
  "14956": "Jello shots verbinden Wackelpudding mit Alkohol zu einem beliebten Partyklassiker.",
  "13775": "Jelly Bean überzeugt mit süßem Bonbongeschmack und fruchtigen Aromen.",
  "17006": "Kool First Aid kombiniert fruchtige Süße mit auffälliger Farbe und Partycharakter.",
  "13190": "Kool-Aid Shot bietet fruchtigen Geschmack und eine angenehm süße Note.",
  "14446": "Kool-Aid Slammer verbindet intensive Fruchtigkeit mit kräftigem Shot-Charakter.",
  "12752": "Lemon Shot kombiniert frische Zitrone mit klarer Spirituosenstärke.",
  "16196": "Moranguito überzeugt mit süßen Erdbeeraromen und fruchtiger Leichtigkeit.",
  "14053": "Mother's Milk bietet cremige Süße und sanfte Likörnoten.",
  "15330": "Orange Crush verbindet intensive Orange mit erfrischender Süße.",
  "13198": "Quick F**K kombiniert cremige Liköre mit kräftigem Alkoholcharakter.",
  "14087": "Red Snapper überzeugt mit würziger Frische und markantem Geschmack.",
  "17122": "Royal Bitch ist ein intensiver Partyshot mit süßem und kräftigem Charakter.",
  "15082": "Royal Flush kombiniert fruchtige Aromen mit weichem Whiskey-Finish.",
  "16985": "Shot-gun bietet kräftigen Alkoholgeschmack mit schnellem Partycharakter.",
  "178306": "Slippery Nipple kombiniert cremige Liköre mit süßer und weicher Konsistenz.",
  "178307": "Tequila Slammer verbindet Tequila mit prickelnder Frische und kräftigem Geschmack.",
  "14602": "Tequila Surprise überzeugt mit fruchtiger Süße und intensiver Tequila-Note.",
  "15178": "Texas Rattlesnake kombiniert würzige Spirituosen mit kräftigem Charakter.",
  "15006": "Turkeyball bietet süße Likörnoten mit cremigem Finish.",
  "16942": "Zipperhead verbindet kräftige Spirituosen mit fruchtiger und süßer Note.",

  // --- Liste 8 (Soft Drinks / Coke Float) ---
  "14510": "Bailey's Dream Shake ist ein cremiger Dessertdrink mit sahnigem Likör und süßem Schokoladencharakter.",
  "14071": "Belgian Blue überzeugt mit auffälliger Farbe und einer fruchtig-süßen, leicht cremigen Note.",
  "16295": "Bleeding Surgeon ist ein intensiver, auffälliger Cocktail mit kräftigem Geschmack und fruchtiger Süße.",
  "16447": "Brandon and Will's Coke Float kombiniert Cola mit cremigem Eiscreme-Charakter zu einem süßen Dessertdrink.",
  "14282": "California Root Beer bietet klassischen Root-Beer-Geschmack mit cremiger, süßer Note.",
  "17135": "Citrus Coke verbindet Cola mit frischer Zitrusnote zu einem spritzigen, süßen Mixgetränk.",
  "17108": "Coke and Drops kombiniert Cola mit kräftigen Spirituosen für einen einfachen, intensiven Drink.",
  "14482": "Darkwood Sling ist ein kräftiger Cocktail mit würzigen und leicht süßlichen Holznoten.",
  "15933": "Zambeer kombiniert Bier mit würzigen und süßlichen Akzenten zu einem ungewöhnlichen Mix.",
  "14888": "Zinger überzeugt mit fruchtiger scharfem Charakter und einem erfrischend intensiven Geschmack.",
  "15691": "Zoksel ist ein spritziger Mixdrink mit fruchtiger Frische und leichter Süße."
};

// Dropdown für Desktop/Tablet
const navDropdown = document.querySelector('.nav-dropdown');

if (navDropdown) {
    navDropdown.addEventListener('click', (e) => {        
        if (window.innerWidth > 768) {           
            // Optionaler Desktop-Code
        }
    });
}

// Mobile Burger Menu Logik
const burgerBtn = document.getElementById('burger');
const mobileNav = document.getElementById('mobile-nav');

if (burgerBtn && mobileNav) {
    burgerBtn.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('open');
        burgerBtn.setAttribute('aria-expanded', isOpen);
    });
}

// Hauptlogik: Wetter laden & Drink anzeigen
const wetterBtn = document.getElementById('wetter_button');

if (wetterBtn) {
    wetterBtn.addEventListener('click', function() {
        
        // URL Wetter ermitteln
        const pageUrl = window.location.href;
        console.log("Aktuelle Seite:", pageUrl);

        // Stadt aus der URL isolieren (z.B. brienz.html -> brienz)
        let city = pageUrl.split('/').pop().split('.html')[0].toLowerCase();
        
        console.log("Erkannte Stadt (API-konform):", city);
        
        const url = `https://aareguru.existenz.ch/v2018/current?city=${city}`;

        console.log("Anfrage gestartet... Warte auf API-Antwort.");

        fetch(url)
            .then(response => response.json())
            .then(data => {
                
                console.log("Komplette API-Daten erhalten:", data);

                const ortschaft = data.aare.location;
                const temperatur = data.aare.temperature;
                const sonneHeute = data.sun.today.suntotal;

                console.log("--- Gefilterte Daten ---");
                console.log("Ort:", ortschaft);
                console.log("Temp:", temperatur + " °C");
                console.log("Sonne heute:", sonneHeute);
                console.log("------------------------");

                // Daten auf der Website anzeigen (Sicherstellen, dass die Elemente existieren)
                const ortEl = document.getElementById('ort');
                const tempEl = document.getElementById('temp');
                const sonneEl = document.getElementById('sonne');

                if (ortEl) ortEl.textContent = ortschaft;
                if (tempEl) tempEl.textContent = temperatur;
                if (sonneEl) sonneEl.textContent = sonneHeute;

                // Umrechnung der Sonnenscheindauer (von "05:30" in eine Dezimalzahl wie 5.5)
                const zeitParts = sonneHeute.split(':');
                const sonneStunden = parseInt(zeitParts[0]) + (parseInt(zeitParts[1]) / 60);

                // Drinks Logik: Kategorie anhand des Wetters bestimmen
                let drinkKategorie = "Ordinary_Drink"; // Standard-Fallback

                if (temperatur > 23 && sonneStunden >= 4.5 && sonneStunden <= 8) {
                    drinkKategorie = "Cocktail";
                } 
                else if (temperatur > 15 && sonneStunden >= 2 && sonneStunden <= 5) {
                    drinkKategorie = "Beer";
                }
                else if (temperatur < 10 && sonneStunden <= 4) {
                    drinkKategorie = "Cocoa";
                }
                else if (temperatur < 10 && sonneStunden <= 5) {
                    drinkKategorie = "Ordinary_Drink"; 
                }
                else if (temperatur < 0 && sonneStunden <= 5) {
                    drinkKategorie = "Homemade_Liqueur";
                }
                else if (temperatur >= 10 && temperatur <= 24 && sonneStunden >= 2 && sonneStunden <= 6) {
                    drinkKategorie = "Shake";
                }
                else if (temperatur >= 10 && temperatur <= 16 && sonneStunden >= 1 && sonneStunden <= 3) {
                    drinkKategorie = "Shot";
                }
                else if (temperatur >= 10 && temperatur <= 35 && sonneStunden <= 10) {
                    drinkKategorie = "Soft_Drink";
                }

                console.log("Berechnete Kategorie:", drinkKategorie);
                
                // Kategorie auf der Seite anzeigen (Unterstriche durch Leerzeichen ersetzen)
                if (document.getElementById('drinkAnzeige')) {
                    document.getElementById('drinkAnzeige').textContent = drinkKategorie.replace(/_/g, " ");
                }

                // Zufälligen Drink aus der ermittelten Kategorie von TheCocktailDB abrufen
                const drinkUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinkKategorie}`;

                fetch(drinkUrl)
                    .then(res => res.json())
                    .then(drinkData => {
                        if (drinkData && drinkData.drinks) {
                            // Zufälligen Index aus dem Array auswählen
                            const randomIndex = Math.floor(Math.random() * drinkData.drinks.length);
                            const selectedDrink = drinkData.drinks[randomIndex];

                            console.log("Ausgewählter Drink:", selectedDrink);

                            // Drink Name anzeigen
                            if (document.getElementById('spezifischerDrink')) {
                                document.getElementById('spezifischerDrink').textContent = selectedDrink.strDrink;
                            }
                            
                            // Drink Bild anzeigen
                            if (document.getElementById('drinkBild')) {
                                document.getElementById('drinkBild').src = selectedDrink.strDrinkThumb;
                                document.getElementById('drinkBild').style.display = 'block';
                            }

                            // ─── TEXT ANZEIGEN ───
                            const drinkId = selectedDrink.idDrink; // Holt die ID des Drinks (z.B. "15300")
                            const beschreibungsElement = document.getElementById('drinkBeschreibung');

                            if (beschreibungsElement) {
                                // Überprüfen, ob die ID in unserem großen drinkDescriptions-Objekt existiert
                                if (drinkDescriptions[drinkId]) {
                                    beschreibungsElement.textContent = drinkDescriptions[drinkId];
                                } else {
                                    // Fallback-Text ohne das Wort "Beschreibung"
                                    beschreibungsElement.textContent = "Ein erfrischender und passender Drink für das aktuelle Wetter! Probiere ihn aus.";
                                }
                            }
                        }
                    })
                    .catch(err => console.error("Fehler Cocktail-API:", err));
            })
            .catch(error => {
                console.error('Fehler Wetter-API:', error);
            });
    });
}
let year = document.querySelector(".year")
let reyting = document.querySelector(".reyting")
let list = document.querySelector(".list")
let form = document.querySelector(".form")
let inp = document.querySelector(".inp")
let cate = document.querySelector('.catagory')
let btn = document.querySelector(".btn")
let page = document.querySelector('.page__list')


const movies = [
  {
    "Title": "Patton Oswalt: Annihilation",
    "fulltitle": "Patton Oswalt: Annihilation (2017)",
    "movie_year": 2017,
    "Categories": "Uncategorized",
    "summary": "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Patton-Oswalt-Annihilation-Movie-Poster.jpg",
    "imdb_id": "tt7026230",
    "imdb_rating": 7.4,
    "runtime": 66,
    "language": "English",
    "ytid": "4hZi5QaMBFc"
  },
  {
    "Title": "Suicide Squad: Hell to Pay",
    "fulltitle": "Suicide Squad: Hell to Pay (2018)",
    "movie_year": 2018,
    "Categories": "Action|Animation",
    "summary": "Task Force X targets a powerful mystical object that they will risk their lives to steal.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Suicide-Squad-Hell-to-Pay-Movie-Poster.jpg",
    "imdb_id": "tt7167602",
    "imdb_rating": 7.2,
    "runtime": 86,
    "language": "English",
    "ytid": "EPZZvk-wbGE"
  },
  {
    "Title": "Wildling",
    "fulltitle": "Wildling (2018)",
    "movie_year": 2018,
    "Categories": "Fantasy|Horror",
    "summary": "Anna spends her entire childhood under the care of a mysterious man she only knows as Daddy. He keeps her locked in an attic making her fear the Wildling, a child-eating monster that roams the outside. At age 16, Anna is freed by small-town sheriff Ellen Cooper who helps her start a new life as a normal teenager. But as Anna's body begins to blossom, her childhood nightmares return with a vengeance, leading to the conclusion of a terrifying secret.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Wildling-Movie-Poster.jpg",
    "imdb_id": "tt5085924",
    "imdb_rating": 6.1,
    "runtime": 92,
    "language": "English",
    "ytid": "eyl1Wf90AgY"
  },
  {
    "Title": "The Humanity Bureau",
    "fulltitle": "The Humanity Bureau (2017)",
    "movie_year": 2017,
    "Categories": "Action|Sci-Fi",
    "summary": "A dystopian thriller set in the year 2030 that sees the world in a permanent state of economic recession and facing serious environmental problems as a result of global warming.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-Humanity-Bureau-Movie-Poster.jpg",
    "imdb_id": "tt6143568",
    "imdb_rating": 6.1,
    "runtime": 95,
    "language": "English",
    "ytid": "kUH8JGhRzPY"
  },
  {
    "Title": "Farewell Ferris Wheel",
    "fulltitle": "Farewell Ferris Wheel (2016)",
    "movie_year": 2016,
    "Categories": "Documentary|Drama|News",
    "summary": "Farewell, Ferris Wheel examines the link between America's carnival industry and a small Mexican town that legally provides one third of the carnival's labor. However, increased regulations are compromising this longstanding connection, putting both the industry and its workers in jeopardy.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Farewell-Ferris-Wheel-Movie-Poster.jpg",
    "imdb_id": "tt2349677",
    "imdb_rating": 7.4,
    "runtime": 72,
    "language": "English",
    "ytid": "-K2m6AKNB-g"
  },
  {
    "Title": "New York Doll",
    "fulltitle": "New York Doll (2005)",
    "movie_year": 2005,
    "Categories": "Documentary|Music",
    "summary": "A recovering alcoholic and recently converted Mormon, Arthur \"Killer\" Kane, of the rock band The New York Dolls, is given a chance at reuniting with his band after 30 years.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/New-York-Doll-Movie-Poster.jpg",
    "imdb_id": "tt0436629",
    "imdb_rating": 7.9,
    "runtime": 75,
    "language": "English",
    "ytid": "jwD04NsnLLg"
  },
  {
    "Title": " Snowed in at the House of Mouse",
    "fulltitle": "Mickey's Magical Christmas: Snowed in at the House of Mouse (2001)",
    "movie_year": 2001,
    "Categories": "Adventure|Family|Fantasy",
    "summary": "After everyone is snowed in at the House of Mouse, Mickey suggests they throw their own Christmas party. Everyone is happy, except for Donald who just isn't in to the Christmas spirit. So Mickey shows a series of cartoons that show just what Christmas is all about. It features a star studded cast of Disney characters from everyone's favorite animated Disney movies.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Mickeys-Magical-Christmas-Snowed-in-at-the-House-of-Mouse-Movie-Poster.jpg",
    "imdb_id": "tt0300195",
    "imdb_rating": 6.8,
    "runtime": 65,
    "language": "English",
    "ytid": "uCKwHHftrU4"
  },
  {
    "Title": "Mickey's House of Villains",
    "fulltitle": "Mickey's House of Villains (2001)",
    "movie_year": 2001,
    "Categories": "Family|Fantasy|Horror",
    "summary": "The villains from the popular animated Disney films are gathered at the House of Mouse with plans to take over. Soon, the villains take over the house and kick out Mickey, Donald and Goofy. It's all up to Mickey and his friends to overthrow evil and return the House of Mouse to normal--or as close to normal as it get's.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Mickeys-House-of-Villains-Movie-Poster.jpg",
    "imdb_id": "tt0329374",
    "imdb_rating": 6.6,
    "runtime": 0,
    "language": "English",
    "ytid": "JA03ciYt-Ek"
  },
  {
    "Title": "And Then I Go",
    "fulltitle": "And Then I Go (2017)",
    "movie_year": 2017,
    "Categories": "Drama",
    "summary": "In the cruel world of junior high, Edwin suffers in a state of anxiety and alienation alongside his only friend, Flake. Misunderstood by their families and demoralized at school daily, their fury simmers quietly until an idea for vengeance offers them a terrifying release. Based on the acclaimed novel \"Project X\" by Jim Shepard, this unflinching look at adolescence explores how the powerful bonds of childhood friendship and search for belonging can become a matter of life or death.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/And-Then-I-Go-Movie-Poster.jpg",
    "imdb_id": "tt2018111",
    "imdb_rating": 7.6,
    "runtime": 99,
    "language": "English",
    "ytid": "8CdIiD6-iF0"
  },
  {
    "Title": "An Extremely Goofy Movie",
    "fulltitle": "An Extremely Goofy Movie (2000)",
    "movie_year": 2000,
    "Categories": "Comedy|Family|Sport",
    "summary": "It's a big time in Max's life. He's college bound with his friends and finally free of his embarrassing father as he strives to be a top contender for the X-Games. Unfortunately, Goofy loses his job and learns that he cannot get another job without a college degree. To his son's mortification, Goofy decides to join him in his campus to get that degree. Desperate to distract his father, Max talks him into joining the competing Gamma Fraternity team and introduces him to a wonderful librarian who shares his nostalgic love for 1970's pastimes. Unfortunately, things do not go according to plan as events put this father-son relationship to the test.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/An-Extremely-Goofy-Movie-Movie-Poster.jpg",
    "imdb_id": "tt0208185",
    "imdb_rating": 6.4,
    "runtime": 79,
    "language": "English",
    "ytid": "H8oSvldAGfg"
  },
  {
    "Title": "Peter Rabbit",
    "fulltitle": "Peter Rabbit (2018)",
    "movie_year": 2018,
    "Categories": "Animation|Comedy|Fantasy",
    "summary": "Based on the books by Beatrix Potter: Peter Rabbit (James Corden;) his three sisters: Flopsy (Margot Robbie,) Mopsy (Elizabeth Debicki) and Cotton Tail (Daisy Ridley) and their cousin Benjamin (Colin Moody) enjoy their days harassing Mr McGregor in his vegetable garden. Until one day he dies and no one can stop them roaming across his house and lands for a full day or so. However, when one of Mr McGregor's relatives inherits the house and goes to check it out, he finds much more than he bargained for. What ensues, is a battle of wills between the new Mr McGregor and the rabbits. But when he starts to fall in love with Bea (Rose Byrne,) a real lover of all nature, his feelings towards them begin to change. But is it too late?",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Peter-Rabbit-Movie-Poster.jpg",
    "imdb_id": "tt5117670",
    "imdb_rating": 6.6,
    "runtime": 95,
    "language": "English",
    "ytid": "7Pa_Weidt08"
  },
  {
    "Title": "Love Songs",
    "fulltitle": "Love Songs (2007)",
    "movie_year": 2007,
    "Categories": "Uncategorized",
    "summary": "Julie's boyfriend Ismaël lives with her; rather than worry about the time he spends with his colleague Alice, Julie invites Alice to join them. The three walk the streets of Paris, party, read, and sleep together. Sometimes it's lighthearted, sometimes there are jealousies. Then death strikes. In various ways, those left come to terms with the departure and absence of a loved one: showing concern, eating together, attempting new relationships, trying to \"be there\" for the other. Then, the spirit returns and new commitments are possible. The romantic elements of musical comedy play in contrast to the ambivalence of the lyrics and the story.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Love-Songs-Movie-Poster.jpg",
    "imdb_id": "tt0996605",
    "imdb_rating": 7.2,
    "runtime": 91,
    "language": "English",
    "ytid": "s54vpKAFmS0"
  },
  {
    "Title": 89,
    "fulltitle": "89 (2017)",
    "movie_year": 2017,
    "Categories": "Uncategorized",
    "summary": "89 tells the incredible story of one of football's greatest triumphs: when against all odds Arsenal snatched the Championship title from Liverpool at Anfield in the last minute of the last game of the 1988/89 season. It's a universal tale of a band of brothers who, led by a charismatic and deeply respected manager, came together to defy the odds and create history. Mixing archive and previously unseen footage with revealing interviews, insights and memories from the original squad, game officials, famous fans and the people who were there on the night this is the definitive account of a watershed moment in football and a must-watch for any sports fan.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/89-Movie-Poster.jpg",
    "imdb_id": "tt7614404",
    "imdb_rating": 8.1,
    "runtime": 91,
    "language": "English",
    "ytid": "5hfAExhHTMM"
  },
  {
    "Title": "The Foster Boy",
    "fulltitle": "The Foster Boy (2011)",
    "movie_year": 2011,
    "Categories": "Drama",
    "summary": "The illegitimate orphan child, 12-year-old Max, is sold by the local minister for a basket of food to the Bösiger family, who own a mountain farm. Max' initial hope of finally finding a loving home is brutally shattered: The farmer and his wife treat Max like livestock, and their son Jacob humiliates and abuses him. Only the local teacher notices the child suffering on the farm.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-Foster-Boy-Movie-Poster.jpg",
    "imdb_id": "tt2057931",
    "imdb_rating": 7.4,
    "runtime": 107,
    "language": "English",
    "ytid": "E9Qv_XVJ-js"
  },
  {
    "Title": "Forever My Girl",
    "fulltitle": "Forever My Girl (2018)",
    "movie_year": 2018,
    "Categories": "Drama|Music|Romance",
    "summary": "After being gone for a decade a country star returns home to the love he left behind.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Forever-My-Girl-Movie-Poster.jpg",
    "imdb_id": "tt4103724",
    "imdb_rating": 6.4,
    "runtime": 108,
    "language": "English",
    "ytid": "3vqcMr1q5Uc"
  },
  {
    "Title": "Tom Segura: Disgraceful",
    "fulltitle": "Tom Segura: Disgraceful (2018)",
    "movie_year": 2018,
    "Categories": "Comedy|Documentary",
    "summary": "Comedian Tom Segura rants about funny things about pop culture and the way of living in 2018.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Tom-Segura-Disgraceful-Movie-Poster.jpg",
    "imdb_id": "tt7379330",
    "imdb_rating": 7.5,
    "runtime": 0,
    "language": "English",
    "ytid": "kYYINJM3lPA"
  },
  {
    "Title": " Algorithms",
    "fulltitle": "The Secret Rules of Modern Living: Algorithms (2015)",
    "movie_year": 2015,
    "Categories": "Documentary",
    "summary": "Professor Marcus du Sautoy demystifies the hidden world of algorithms and reveals where these 2,000-year-old problem solvers came from, how they work, and what they have achieved.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/The-Secret-Rules-of-Modern-Living-Algorithms-Movie-Poster.jpg",
    "imdb_id": "tt5818010",
    "imdb_rating": 7.5,
    "runtime": 58,
    "language": "English",
    "ytid": "hpyxmT6KSvw"
  },
  {
    "Title": "Secrets in the Fall",
    "fulltitle": "Secrets in the Fall (2015)",
    "movie_year": 2015,
    "Categories": "Family",
    "summary": "Nothing is impossible for a group of young campers, friends and enemies alike, on a weekend retreat at Camp Pinnacle. But what starts as an exciting wilderness adventure turns into trouble when a young camper goes missing and the rest of the group must set out to find him. The campers are forced to overcome their differences and band together to re-claim their weekend and make it out of the woods before dark!",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Secrets-in-the-Fall-Movie-Poster.jpg",
    "imdb_id": "tt2522908",
    "imdb_rating": 7.3,
    "runtime": 0,
    "language": "English",
    "ytid": "eMVw1pHVMAw"
  },
  {
    "Title": "Silent Night",
    "fulltitle": "Silent Night (2017)",
    "movie_year": 2017,
    "Categories": "Comedy|Drama",
    "summary": "Adam unexpectedly visits his family house at Christmas after a few years of working abroad. No family member knows about his secret plans and the real reasons of his visit.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Silent-Night-Movie-Poster.jpg",
    "imdb_id": "tt7133554",
    "imdb_rating": 7.5,
    "runtime": 100,
    "language": "English",
    "ytid": "cA6BUYVkQoE"
  },
  
  {
    "Title": "Don't Talk to Irene",
    "fulltitle": "Don't Talk to Irene (2017)",
    "movie_year": 2017,
    "Categories": "Comedy",
    "summary": "Irene must endure 2 weeks of community service at a retirement home. Following her passion for cheerleading, she secretly signs up the senior residents to audition for a dance-themed reality show to prove that you don't need to be physically \"perfect\" to be perfectly AWESOME.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Dont-Talk-to-Irene-Movie-Poster.jpg",
    "imdb_id": "tt5030452",
    "imdb_rating": 6.4,
    "runtime": 90,
    "language": "English",
    "ytid": "lK48UxWuUho"
  },
  {
    "Title": "Blood Road",
    "fulltitle": "Blood Road (2017)",
    "movie_year": 2017,
    "Categories": "Documentary|History|Sport",
    "summary": "The mysteries surrounding her father's death in the Vietnam war lead ultra-endurance mountain biker Rebecca Rusch on an emotional journey as she pedals 1200 miles of the Ho Chi Minh trail.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Blood-Road-Movie-Poster.jpg",
    "imdb_id": "tt6900092",
    "imdb_rating": 6.9,
    "runtime": 96,
    "language": "English",
    "ytid": "XCzVqiN950M"
  },
  {
    "Title": "Andre the Giant",
    "fulltitle": "Andre the Giant (2018)",
    "movie_year": 2018,
    "Categories": "Documentary",
    "summary": "A look at the life and career of professional wrestler André Roussimoff, who gained notoriety in the 1980s as Andre the Giant.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Andre-the-Giant-Movie-Poster.jpg",
    "imdb_id": "tt6543420",
    "imdb_rating": 8.2,
    "runtime": 85,
    "language": "English",
    "ytid": "f_jTeuajas0"
  },
  {
    "Title": "Dead on Arrival",
    "fulltitle": "Dead on Arrival (2017)",
    "movie_year": 2017,
    "Categories": "Thriller",
    "summary": "A pharmaceutical sales rep visits a small town in Louisiana on business. He finds himself in a dark world of corruption and murder with 24 hours to live, running from the police, the mob and a sheriff that wants him dead.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Dead-on-Arrival-Movie-Poster.jpg",
    "imdb_id": "tt5903088",
    "imdb_rating": 6.9,
    "runtime": 97,
    "language": "English",
    "ytid": "8jJ-kC-rq0Q"
  },
  {
    "Title": "Big Time",
    "fulltitle": "Big Time (2017)",
    "movie_year": 2017,
    "Categories": "Documentary",
    "summary": "Bjarke Ingels started out as a young man dreaming of creating cartoons. Now, he has been named \"one of architecture's biggest innovators\" by The Wall Street Journal and one of The 100 Most Influential People on the planet by TIME Magazine. BIG TIME follows Bjarke during the course of 7 years (2009-2016), while he struggles to finish his biggest project so far. We are let into Bjarke's creative processes as well as the endless compromises that his work entails, and we are on the side when his personal life starts putting pressure on him, too. In addition to the recently opened architectural marvel VIA 57 West (625 West 57th Street), Bjarke Ingels' company Bjarke Ingels Group (BIG) was given the task of designing and building one of the skyscrapers which will replace Two World Trade Center in Manhattan. While Bjarke is creating these buildings, which will change the New York skyline, he is hit by health-related issues. The Film offers an intimate look into the innovative and ambitious ...",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Big-Time-Movie-Poster.jpg",
    "imdb_id": "tt7630164",
    "imdb_rating": 6.2,
    "runtime": 93,
    "language": "English",
    "ytid": "VK0mGdMKMW4"
  },
  {
    "Title": "Adventures in Babysitting",
    "fulltitle": "Adventures in Babysitting (2016)",
    "movie_year": 2016,
    "Categories": "Adventure|Comedy|Family",
    "summary": "Two teen rival babysitters, Jenny and Lola, team up to hunt down one of their kids who accidentally runs away into the big city without any supervision.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Adventures-in-Babysitting-Movie-Poster.jpg",
    "imdb_id": "tt4456850",
    "imdb_rating": 6.1,
    "runtime": 105,
    "language": "English",
    "ytid": "BbTTXUMVTTU"
  },
  {
    "Title": "Banana in a Nutshell",
    "fulltitle": "Banana in a Nutshell (2005)",
    "movie_year": 2005,
    "Categories": "Documentary",
    "summary": "An intimate portrait of a Chinese-European couple in New Zealand, and their journey to get a blessing for marriage from traditional Chinese parents.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Banana-in-a-Nutshell-Movie-Poster.jpg",
    "imdb_id": "tt1537196",
    "imdb_rating": 6.6,
    "runtime": 0,
    "language": "English",
    "ytid": "6vgD78Z6ut4"
  },
  {
    "Title": "Hostiles",
    "fulltitle": "Hostiles (2017)",
    "movie_year": 2017,
    "Categories": "Adventure|Drama|Western",
    "summary": "In 1892, after nearly two decades of fighting the Cheyenne, the Apache, and the Comanche natives, the United States Cavalry Captain and war hero, Joseph Blocker, is ordered to escort the ailing Cheyenne chief, Yellow Hawk--his most despised enemy--to his ancestral home in Montana's Valley of the Bears. Nauseated with a baleful anger, Joseph's unwelcome final assignment in the feral American landscape is further complicated, when the widowed settler, Rosalie Quaid, is taken in by the band of soldiers, as aggressive packs of marauding Comanches who are still on the warpath, are thirsty for blood. In a territory crawling with hostiles, can the seasoned Captain do his duty one last time?",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Hostiles-Movie-Poster.jpg",
    "imdb_id": "tt5478478",
    "imdb_rating": 7.3,
    "runtime": 134,
    "language": "English",
    "ytid": "1M5cj4UmscE"
  },
  {
    "Title": "Maze Runner: The Death Cure",
    "fulltitle": "Maze Runner: The Death Cure (2018)",
    "movie_year": 2018,
    "Categories": "Action|Sci-Fi|Thriller",
    "summary": "In the epic finale to The Maze Runner Saga, Thomas leads his group of escaped Gladers on their final and most dangerous mission yet. To save their friends, they must break into the legendary last city, a WCKD controlled labyrinth that may turn out to be the deadliest maze of all. Anyone who makes it out alive will get the answers to the questions the Gladers have been asking since they first arrived in the maze. Will Thomas and the crew make it out alive? Or will Ava Paige get her way?",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Maze-Runner-The-Death-Cure-Movie-Poster.jpg",
    "imdb_id": "tt4500922",
    "imdb_rating": 6.5,
    "runtime": 141,
    "language": "English",
    "ytid": "wnE_y4vN9nQ"
  },
  {
    "Title": "Den of Thieves",
    "fulltitle": "Den of Thieves (2018)",
    "movie_year": 2018,
    "Categories": "Action|Crime|Drama",
    "summary": "A gritty L.A crime saga which follows the intersecting and often personally connected lives of an elite unit of the LA County Sheriff's Dept. and the state's most successful bank robbery crew as the outlaws plan a seemingly impossible heist on the Federal Reserve Bank of downtown Los Angeles.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Den-of-Thieves-Movie-Poster.jpg",
    "imdb_id": "tt1259528",
    "imdb_rating": 7,
    "runtime": 140,
    "language": "English",
    "ytid": "FKd_ks0rdAM"
  },
  {
    "Title": "V.I.P.",
    "fulltitle": "V.I.P. (2017)",
    "movie_year": 2017,
    "Categories": "Action|Crime|Thriller",
    "summary": "The son (Lee Jong-Suk) of a high-ranking North Korean official is suspected of committing serial murders around the world. To stop the killer, South Korea, North Korea and Interpol chase after him.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/V.I.P.-Movie-Poster.jpg",
    "imdb_id": "tt6413410",
    "imdb_rating": 6.4,
    "runtime": 128,
    "language": "English",
    "ytid": "dwRkl2BjtGQ"
  },
  {
    "Title": "Walk Hard: The Dewey Cox Story",
    "fulltitle": "Walk Hard: The Dewey Cox Story (2007)",
    "movie_year": 2007,
    "Categories": "Comedy|Music",
    "summary": "The up-and-down-and-up-again story of musician Dewey Cox, whose songs would change a nation. On his rock 'n roll spiral, Cox sleeps with 411 women, marries three times, has 36 kids, stars in his own 70s TV show, collects friends ranging from Elvis to the Beatles to a chimp, and gets addicted to - and then kicks - every drug known to man; but despite it all, Cox grows into a national icon and eventually earns the love of a good woman - longtime backup singer Darlene.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Walk-Hard-The-Dewey-Cox-Story-Movie-Poster.jpg",
    "imdb_id": "tt0841046",
    "imdb_rating": 6.8,
    "runtime": 96,
    "language": "English",
    "ytid": "4yzjtnj8Y3U"
  },
  {
    "Title": "Freaky Friday",
    "fulltitle": "Freaky Friday (2003)",
    "movie_year": 2003,
    "Categories": "Comedy|Family",
    "summary": "The wide generation gap between Tess Coleman and her teenage daughter Anna is more than evident. They simply cannot understand each other's preferences. On a Thursday night they have a big argument in a Chinese restaurant. Both receive a fortune cookie each from the restaurant owner's mother which causes them to switch bodies next day. As they adjust with their new personalities, they begin to understand each other more and eventually it's the mutual self-respect that sorts the things out.",
    "ImageURL": "https://hydramovies.com/wp-content/uploads/2018/04/Freaky-Friday-Movie-Poster.jpg",
    "imdb_id": "tt0322330",
    "imdb_rating": 6.2,
    "runtime": 97,
    "language": "English",
    "ytid": "obOyYTto5Sg"
  }
]

const newMovies = [];
mapper(movies)

function mapper(movies){
  list.innerHTML=''
movies.map((item)=>{
  let li = document.createElement ("li")
  li.innerHTML = `<div class="card">
  <img src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDbf7K3_Y-mY-lzPi9ODTktAPh0g" alt="">
 <h2>${item.Title}</h2>
 <p>${item.imdb_rating}</p>
 <p>${item.movie_year}</p>

 <p>${item.Categories}</p>
</div>`
list.appendChild(li)
})
}

year.addEventListener('change',(e)=>{
    e.preventDefault();
    list.innerHTML =''
    if(year.value == 'old'){
        movies.sort((a,b)=>{
            return a.movie_year - b.movie_year
        })
    }else if(year.value == 'new'){
        movies.sort((a,b)=>{
          return  b.movie_year - a.movie_year
        })      
    }
    movies.map((e)=>{
        let li = document.createElement ("li")
        li.innerHTML = `<div class="card">
        <img src="https://i.ytimg.com/vi/${e.ytid}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDbf7K3_Y-mY-lzPi9ODTktAPh0g" alt="">
       <h2>${e.Title}</h2>
       <p>${e.imdb_rating}</p>
       <p>${e.movie_year}</p>
       <p>${e.Categories}</p>
    </div>`
    list.appendChild(li)
   console.log(e);
    })
})
reyting.addEventListener('change', (e)=>{
    e.preventDefault()
    list.innerHTML = ''  
    if (reyting.value == 1){
      movies.sort((a,b)=> a.imdb_rating - b.imdb_rating)
    }else if (reyting.value == 10){
      movies.sort((a,b)=> b.imdb_rating - a.imdb_rating)
    }
    movies.map((e)=>{
      let li = document.createElement('li')
      li.innerHTML = `<div class="card">
      <img src="https://i.ytimg.com/vi/${e.ytid}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDbf7K3_Y-mY-lzPi9ODTktAPh0g" alt="">
      <h2>${e.Title}</h2>
      <p>${e.imdb_rating}</p>
      <p>${e.movie_year}</p>
      <p>${e.Categories}</p>
   </div>`
      list.appendChild(li)
    
    })
  })
form.addEventListener("submit",(event)=>{
    event.preventDefault()

   const newMovie = movies.filter((item)=> item.Title.toString().toLowerCase().includes(inp.value.toLowerCase())== true)
   let rex =RegExp(inp.value,"gi")
  newMovie.map((item1)=>(
    item1.Title = item1.Title.replace(rex,`<mark>${inp.value}</mark>` )
   ))
 mapper(newMovie);
  })
  inp.addEventListener('keyup', (i)=>{
    i.preventDefault();
    if (inp.value == ''){
      movies.map((item1)=>(
        item1.Title = item1.Title.replace('<mark>',``)
      ))
      mapper(movies)
      }
    let inpV = inp.value
    list.innerHTML = ''
    movies.map((i)=>{
      if(i.Title.toLocaleUpperCase().includes(inpV.toLocaleUpperCase()) || i.fulltitle.toLocaleUpperCase().includes(inpV.toLocaleUpperCase())){
        let li = document.createElement('li')
      li.innerHTML =  `<div class="card">
      <img src="https://i.ytimg.com/vi/${i.ytid}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDbf7K3_Y-mY-lzPi9ODTktAPh0g" alt="">
      <h2> ${i.Title}</h2>
      <h3>  ${i.Categories}</h3>
      <h4>  ${i.movie_year}</h4>
      <h4>  ${i.imdb_rating}</h4>
      <i id="${i.ytid}" class="bi bi-suit-heart likes"></i>
      </div>`
      list.appendChild(li)
      }
    }) 
  }) 

   const arrCate = [];
   movies.forEach((item)=>{
    if(arrCate.includes(item.Categories) == false) 
    arrCate.push(item.Categories);
   })
   arrCate.forEach((item)=>{
    let newOption = document.createElement('option')
    newOption.textContent = item
    newOption.value = item
    cate.appendChild (newOption)

   })
   cate.addEventListener('change',()=>{
   mapper(movies.filter((o)=>o.Categories == cate.value))
  
   })
   let count = movies.length /10
   for( let i = 1; i<= count; i++){
    let newBtn =document.createElement('button')
    newBtn.textContent = i
    newBtn.classList = 'btn'
    newBtn.id =i
    page.appendChild(newBtn)
   }
 let btnList = document.querySelectorAll('.btn')
 btnList.forEach((dtn)=>{
  dtn.addEventListener('click',()=>{
    let id = dtn.id;
    const pageDa = movies.slice(id*10,id*10+10)
      mapper(pageDa)
  })
})


let like = document.querySelectorAll('.likes')
const arrLocal = []
like.forEach((i)=>{
  i.addEventListener('click', ()=>{
    console.log(i.id);
    
    if(arrLocal.find((fin)=>fin.ytid == i.id)){
      arrLocal.push(movies.find((item)=>item.ytid == i.id))
    }
    window.localStorage.setItem('localData',JSON.stringify(arrLocal))
    console.log(arrLocal);
  })
})
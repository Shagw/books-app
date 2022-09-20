import { GET_BOOK_DATA } from "../../actionTypes";

const INITIAL_STATE = {
  booksData:[
    {
        "_id": "63259e42cc33221056794ada",
        "title": "The Year of the Locust: Terry Hayes",
        "author": "Terry Hayes",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/51yzXRsP89L._SX319_BO1,204,203,200_.jpg",
        "price": 400,
        "review": "3.2 out of 5 stars",
        "description": "THE AMAZING NEW THRILLER FROM TERRY HAYES. ",
        "discount": 40,
        "newArrivals": true,
        "__v": 0
    },
    {
        "_id": "6325a664bc205441cee3e939",
        "title": "Billy Summers: The No. 1 Bestseller",
        "author": "Stephen King",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/51CR2a6HU1S._SX323_BO1,204,203,200_.jpg",
        "price": 500,
        "review": "4.6 out of 5 stars",
        "description": "'A dazzlingly shapeshifting novel . . . equally good at action scenes and in-depth psychology' The Sunday Times'A thriller with a surprisingly heartfelt and redemptive ending, Billy Summers is a compelling and engrossing read' Sunday ExpressFrom legendary storyteller and No. 1 bestseller Stephen King, whose 'restless imagination is a power that cannot be contained' (The New York Times Book Review), comes a thrilling new novel about a good guy in a bad job.Billy Summers is a man in a room with a gun. He's a killer for hire and the best in the business. But he'll do the job only if the target is a truly bad guy. And now Billy wants out. But first there is one last hit. Billy is among the best snipers in the world, a decorated Iraq war vet, a Houdini when it comes to vanishing after the job is done. So what could possibly go wrong? How about everything.This spectacular can't-put-it-down novel is part war story, part love letter to small town America and the people who live there, and it features one of the most compelling and surprising duos in King fiction, who set out to avenge the crimes of an extraordinarily evil man. It's about love, luck, fate, and a complex hero with one last shot at redemption. You won't put this story down, and you won't forget Billy.",
        "discount": 40,
        "newArrivals": true,
        "__v": 0
    },
    {
        "_id": "6325a6a3bc205441cee3e93d",
        "title": "Girl A: The Sunday Times and New York Times global best seller, an astonishing new crime thriller debut novel from the biggest literary fiction voice of 2021",
        "author": "Abigail Dean",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/41xFykGq2fS._SX324_BO1,204,203,200_.jpg",
        "price": 530,
        "review": "4.2 out of 5 stars",
        "description": "‘Sensational. Gripping, haunting, and beautifully written’ RICHARD OSMAN‘Haunting, powerful, with a pitch-perfect ending’ THE NEW YORK TIMES",
        "discount": 38,
        "newArrivals": true,
        "__v": 0
    },
    {
        "_id": "6325a6cfbc205441cee3e940",
        "title": "The Judge's List: The phenomenal new novel from international bestseller John Grisham",
        "author": "John Grisham",
        "imgUrl": "https://images-eu.ssl-images-amazon.com/images/I/41piAxEIYIL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
        "price": 640,
        "review": "4.4 out of 5 stars",
        "description": "THE SUNDAY TIMES THRILLER OF THE MONTH***Nonstop suspense from the Sunday Times bestselling author: Investigator Lacy Stoltz follows the trail of a serial killer, and closes in on a shocking suspect - a sitting judge.In The Whistler, Lacy Stoltz investigated a corrupt judge who was taking millions in bribes from a crime syndicate. She put the criminals away, but only after being attacked and nearly killed. Three years later, and approaching forty, she is tired of her work for the Florida Board on Judicial Conduct and ready for a change.Then she meets a mysterious woman who is so frightened she uses a number of aliases. Jeri Crosby's father was murdered twenty years earlier in a case that remains unsolved and that has grown stone cold. But Jeri has a suspect whom she has become obsessed with and has stalked for two decades. Along the way, she has discovered other victims.Suspicions are easy enough, but proof seems impossible. The man is brilliant, patient, and always one step ahead of law enforcement. He is the most cunning of all serial killers. He knows forensics, police procedure, and most important: he knows the law.He is a judge, in Florida - under Lacy's jurisdiction.He has a list, with the names of his victims and targets, all unsuspecting people unlucky enough to have crossed his path and wronged him in some way. How can Lacy pursue him, without becoming the next name on his list?The Judge's List is by any measure John Grisham's most surprising, chilling novel yet.PRAISE FOR JOHN GRISHAM'When Grisham gets in the courtroom he lets rip, drawing scenes so real they're not just alive, they're pulsating' Mirror'A superb, instinctive storyteller' The Times'Storytelling genius . . . he is in a league of his own' Daily Record 350+ million copies, 45 languages, 9 blockbuster films:NO ONE WRITES DRAMA LIKE JOHN GRISHAM",
        "discount": 36,
        "newArrivals": true,
        "__v": 0
    },
    {
        "_id": "6325a71f1a9e55a5a7792503",
        "title": "Better Off Dead: (Jack Reacher 26)",
        "author": "Lee Child",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/51bkhS7IZtL._SX325_BO1,204,203,200_.jpg",
        "price": 520,
        "review": "4.0 out of 5 stars",
        "description": "Reacher never backs down from a problem.And he's about to find a big one, on a deserted Arizona road, where a Jeep has crashed into the only tree for miles around. Under the merciless desert sun, nothing is as it seems.Minutes later Reacher is heading into the nearby border town, a backwater that has seen better days. Next to him is Michaela Fenton, an army veteran turned FBI agent, who is trying to find her twin brother. He might have got mixed up with some dangerous people.And Reacher might just need to pay them a visit.Their leader has burrowed his influence deep into the town. Just to get in and meet the mysterious Dendoncker, Reacher is going to have to achieve the impossible.To get answers will be even harder. There are people in this hostile, empty place who would rather die than reveal their secrets.But then, if Reacher is coming after you, you might be better off dead.***'Jack Reacher is today's James Bond, a thriller hero we can't get enough of.' Ken Follett'If you haven't read any Jack Reacher, you have a treat in store . . . a hitchhiker without a phone, a one-man force for good.' The Times'A contemporary version of the knight in shining armour . . . Reacher is a mythic figure.' Literary Review'Jack Reacher is a wonderfully epic hero; tough, taciturn, yet vulnerable... Irresistible.' People'Jack Reacher has long since earned his prominent place in the pantheon of cool, smart-talking American heroes.' New York Times",
        "discount": 34,
        "newArrivals": true,
        "__v": 0
    },
    {
        "_id": "6325a773f6d5a567a5b433e6",
        "title": "A Narrow Door: The electric psychological thriller from the Sunday Times bestseller",
        "author": "Joanne Harris",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/51-pJi3HneS._SX323_BO1,204,203,200_.jpg",
        "price": 380,
        "review": "4.4 out of 5 stars",
        "description": "Your favourite authors have been gripped by this electric psychological thriller!'A dark world of emotional complexity and betrayal, where twist follows twist and nothing is what it seems' ALEX MICHAELIDES'Exhilarating, addictive, fierce' BRIDGET COLLINS'A psychological thriller you can't put down and an antiheroine you won't forget' HARLAN COBEN'Dark, Gothic, and propulsively readable - past secrets and present discoveries entangle in an intricately crafted conclusion' RUTH WARE'Engrossing, cunning, sharp, sinister . . . kept me enthralled till the final pages' CHRIS WHITAKER'A clever chess game of repressed fears, power struggles, secrets and lies' LUCY ATKINS 'A complex, chilling mystery full of shifting truths and dark corners where the unburied past lies in wait' TAMMY COHEN'A dark and richly enjoyable novel that already feels like a classic' ELLY GRIFFITHS'Irresistibly readable, dark and brilliant with a masterful emotional punch' CATRIONA WARD* * * * *Now I'm in charge, the gates are my gates. The rules are my rules. It's an incendiary moment for St Oswald's school. For the first time in its history, a headmistress is in power, the gates opening to girls.Rebecca Buckfast has spilled blood to reach this position. Barely forty, she is just starting to reap the harvest of her ambition. As the new regime takes on the old guard, the ground shifts. And with it, the remains of a body are discovered. But Rebecca is here to make her mark. She'll bury the past so deep it will evade even her own memory, just like she has done before. After all... You can't keep a good woman down.* * * * * Praise for Joanne Harris's other books set in the St Oswald's world - which all read as standalone thrillers: 'A masterpiece of misdirection' Val McDermid 'Delivers an almighty twist . . . brilliantly atmospheric ' The Times 'Crime novel or literary novel? Categories really don't matter; readers will find themselves comprehensively gripped' Independent '[A] gripping psychological thriller . . . Harris is one of our most accomplished novelists' Daily Express 'Marvellously mischievous' Good Housekeeping 'A classic whodunnit with the characters carefully crafted and the tension at a knife edge' Sunday Express '[A] delicious black comedy' Daily Mail",
        "discount": 32,
        "newArrivals": true,
        "__v": 0
    },
    {
        "_id": "6325a7b9f6d5a567a5b433e9",
        "title": "Clive Cussler's The Devil's Sea",
        "author": "Dirk Cussler",
        "imgUrl": "https://images-eu.ssl-images-amazon.com/images/I/51Mj0GqakoL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
        "price": 310,
        "review": "3.0 out of 5 stars",
        "description": "DIRK PITT IS BACK. AND ON HIS SHOULDERS RESTS THE FATE OF THE ENTIRE PLANET.JOIN THE LATEST THRILL RIDE FROM THE GRAND MASTER OF ADVENTURE, CLIVE CUSSLER_________Tibet, 1959.In the turmoil of the Communist takeover of the mountain kingdom, a Buddhist artefact of immense importance appears to have been lost to history.Until, sixty years later, clues to its survival emerged from the wreckage of a cargo plane discovered deep beneath the surface of the Philippine Sea . . .NUMA Director Dirk Pitt and his old friend Al Giordino already have their hands full dealing with the recovery of a top secret hypersonic missile that went down in the Luzon Strait. Especially when it becomes clear that a rogue Chinese military team has its sights set on the same prize.And that, after making their own earth-shattering discovery about what lies below the waves, they're prepared to go to any lengths to ensure that they possess it.Any lengths at all.From the cold, dark depths of the Pacific Ocean to the vertiginous peaks of the Himalayas, only Dirk Pitt can unravel the mysteries that will bring the world back from the brink of war . . .Praise for Clive Cussler:'The Adventure King' Sunday Express'Just about the best in the business' New York Post 'Cussler is hard to beat' Daily Mail",
        "discount": 30,
        "newArrivals": true,
        "__v": 0
    },
    {
        "_id": "6325a7d6f6d5a567a5b433ec",
        "title": "The Midnight Hour: Twisty mystery from the bestselling author of The Postscript Murders (The Brighton Mysteries)",
        "author": "Elly Griffiths",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/51UGKY9Wi4L._SX330_BO1,204,203,200_.jpg",
        "price": 330,
        "review": "4.5 out of 5 stars",
        "description": "'If only all history mysteries could be as good as The Midnight Hour' The TimesA twisty new murder story from the bestselling author of the Dr Ruth Galloway Mysteries. An old man lies dead and it looks like poison, but his wife isn't the only one who had reason to kill him. Brighton, 1965When theatrical impresario Bert Billington is found dead in his retirement home, no one suspects foul play. But when the postmortem reveals that he was poisoned, suspicion falls on his wife, eccentric ex-Music Hall star Verity Malone. Frustrated by the police response to Bert's death and determined to prove her innocence, Verity calls in private detective duo Emma Holmes and Sam Collins. This is their first real case, but as luck would have it they have a friend on the inside: Max Mephisto is filming a remake of Dracula, starring Seth Billington, Bert's son. But when they question Max, they feel he isn't telling them the whole story.Emma and Sam must vie with the police to untangle the case and bring the killer to justice. They're sure the answers must lie in Bert's dark past and in the glamorous, occasionally deadly, days of Music Hall. But the closer they get to the truth, the more danger they find themselves in...",
        "discount": 28,
        "newArrivals": false,
        "__v": 0
    },
    {
        "_id": "6325a800f6d5a567a5b433ef",
        "title": "'The Maidens'",
        "author": "Alex Michaelides",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/41EANP48VAL._SX322_BO1,204,203,200_.jpg",
        "price": 400,
        "review": "3.9 out of 5 stars",
        "description": "The new thriller from the author of the global bestselling debut The Silent Patient",
        "discount": 26,
        "newArrivals": false,
        "__v": 0
    },
    {
        "_id": "6325a840f6d5a567a5b433f2",
        "title": "JavaScript Absolute Beginner's Guide",
        "author": "Kirupa Chinnathambi",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/41r4HUHrVeL._SX382_BO1,204,203,200_.jpg",
        "price": 350,
        "review": "4.4 out of 5 stars",
        "description": "About Javascript",
        "discount": 20,
        "newArrivals": false,
        "__v": 0
    },
    {
        "_id": "6325a88cf6d5a567a5b433f7",
        "title": "Learn JavaScript Quickly: A Complete Beginner’s Guide to Learning JavaScript, Even If You’re New to Programming (Crash Course With Hands-On Project)",
        "author": "Code Quickly",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/41SVTBTm1oL._SX384_BO1,204,203,200_.jpg",
        "price": 500,
        "review": "4.5 out of 5 stars",
        "description": "Do you want to develop a skill that will ensure you never go jobless again? ",
        "discount": 42,
        "newArrivals": true,
        "__v": 0
    },
    {
        "_id": "6325a8b1f6d5a567a5b433fa",
        "title": "A Line to Kill: from the global bestselling author of Moonflower Murders (Hawthorne and Horowitz)",
        "author": "Anthony Horowitz",
        "imgUrl": "https://images-eu.ssl-images-amazon.com/images/I/51eUhyGnwbL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
        "price": 370,
        "review": "4.3 out of 5 stars",
        "description": "'Witty, wry, clever, a fabulous detective story and perfect summer reading' KATE MOSSE'Funny, intriguing, thrilling and thought-provoking: a marvellous mystery' ADAM HAMDY'Horowitz ... playing Watson to Hawthorne's Sherlock, serves up a pretty kettle of fish, full of red herrings' THE TIMES'With a colourful cast of characters, clever red herrings, a locked-room puzzle and chalk-and-cheese banter between the sleuths, Horowitz keeps the reader entertained and guessing throughout, in a wonderful take on the classic crime thriller' INDEPENDENT________________________________________'I couldn't see the sea from my bedroom but I could hear the waves breaking in the distance. They reminded me that I was on a tiny island. And I was trapped.'There has never been a murder on Alderney.It's a tiny island, just three miles long and a mile and a half wide. The perfect location for a brand-new literary festival. Private Investigator Daniel Hawthorne has been invited to talk about his new book. The writer, Anthony Horowitz, travels with him.Very soon they discover that all is not as it should be. Alderney is in turmoil over a planned power line that will cut through it, desecrating a war cemetery and turning neighbour against neighbour.The visiting authors - including a blind medium, a French performance poet and a celebrity chef - seem to be harbouring any number of unpleasant secrets.When the festival's wealthy sponsor is found brutally killed, Alderney goes into lockdown and Hawthorne knows that he doesn't have to look too far for suspects.There's no escape. The killer is still on the island. And there's about to be a second death...'There are some delicious comic moments as they encounter their fellow participants, including a loud-mouthed TV chef and a volatile French performance poet. A party thrown by one of the festival's sponsors ends in murder, but the best thing about this diverting novel is Horowitz's stream of self-deprecating observations about being a writer.' THE SUNDAY TIMES'A golden-age whodunnit on steroids' KIRKUS REVIEWS'There's no way out in this compelling whodunnit' WOMAN'S OWN'One of my all-time favourite authors' RYAN TUBRIDY'An irresistible whodunnit' SAGA'Providing contemporary crime fiction with a much-needed revitalisation' CRIME FICTION LOVER'A classic closed-room mystery with great characters and plenty of red herrings' CHOICE'A clever light-hearted tale infused with the author's customary wit and panache. Horowitz's legion of fans will love unpicking the red herrings and connecting the clues here' NEWBOOKS MAGAZINE'Horowitz's witty and crafty narrative is as evocative of the detachment and claustrophobia of rural isolation as last year's Moonflower Murders . . . Unputdownable stuff' THE CONVERSATION'A cosy mystery echoing Agatha Christie' IRISH INDEPENDENT'I'd swear Anthony Horowitz the love child of Arthur Conan Doyle and Agatha Christie' CRIMESQUAD'Get in line for this one. It's terrific' MINNEAPOLIS STAR TRIBUNE",
        "discount": 44,
        "newArrivals": false,
        "__v": 0
    },
    {
        "_id": "6325a8caf6d5a567a5b433fd",
        "title": "Sherlock Holmes & the Three Winter Terrors",
        "author": "James Lovegrove",
        "imgUrl": "https://images-eu.ssl-images-amazon.com/images/I/51zeVThmJyL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
        "price": 520,
        "review": "4.4 out of 5 stars",
        "description": "A beautifully presented sinister seasonal mystery from the acclaimed author of Sherlock Holmes & The Christmas Demon.",
        "discount": 44,
        "newArrivals": false,
        "__v": 0
    },
    {
        "_id": "6325a8dff6d5a567a5b43400",
        "title": "56 Days",
        "author": "Catherine Ryan Howard",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/41p5wvEyafL._SX324_BO1,204,203,200_.jpg",
        "price": 360,
        "review": "4.2 out of 5 stars",
        "description": "Shortlisted for the An Post Irish Book Awards 2021 Crime Fiction Book of the Year ** THE INTERNATIONAL BESTSELLER **'As good as suspense fiction gets' Washington PostNo one even knew they were together. Now one of them is dead.56 DAYS AGOCiara and Oliver meet in a supermarket queue in Dublin and start dating the same week COVID-19 reaches Irish shores.35 DAYS AGOWhen lockdown threatens to keep them apart, Oliver suggests they move in together. Ciara sees a unique opportunity for a relationship to flourish without the scrutiny of family and friends. Oliver sees a chance to hide who - and what - he really is. TODAYDetectives arrive at Oliver's apartment to discover a decomposing body inside. Can they determine what really happened, or has lockdown created an opportunity for someone to commit the perfect crime?'Compulsive, intriguing and fantastically entertaining' Liz Nugent",
        "discount": 46,
        "newArrivals": false,
        "__v": 0
    },
    {
        "_id": "6325a8faf6d5a567a5b43403",
        "title": "JavaScript in easy steps, 6th edition",
        "author": "Mike McGrath",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/51IfxCbUvZL._SX408_BO1,204,203,200_.jpg",
        "price": 434,
        "review": "4.4 out of 5 stars",
        "description": "JavaScript in easy steps, 6th edition instructs the user how to create exciting web pages that employ the power of JavaScript to provide functionality. You need have no previous knowledge of any scripting language so it's ideal for the newcomer to JavaScript. By the end of this book you will have gained a sound understanding of JavaScript and be able to add exciting dynamic scripts to your own web pages. ",
        "discount": 33,
        "newArrivals": false,
        "__v": 0
    },
    {
        "_id": "6325a91af6d5a567a5b43407",
        "title": "12 Rules for Life: An Antidote to Chaos",
        "author": "Jordan B. Peterson",
        "imgUrl": "https://images-eu.ssl-images-amazon.com/images/I/41EATHVLJRL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
        "price": 357,
        "review": "4.6 out of 5 stars",
        "description": "The #1 Sunday Times bestseller from 'the most influential public intellectual in the Western world right now' (New York Times) - now in paperback.How should we live properly in a world of chaos and uncertainty?Jordan Peterson has helped millions of people, young and old, men and women, aim at a life of responsibility and meaning. Now he can help you.Drawing on his own work as a clinical psychologist and on lessons from humanity's oldest myths and stories, Peterson offers twelve profound and realistic principles to live by. After all, as he reminds us, we each have a vital role to play in the unfolding destiny of the world.Deep, rewarding and enlightening, 12 Rules for Life is a lifeboat built solidly for stormy seas: ancient wisdom applied to our contemporary problems.",
        "discount": 35,
        "newArrivals": true,
        "__v": 0
    },
    {
        "_id": "6325a959f6d5a567a5b4340a",
        "title": "Medusa",
        "author": "Jessie Burton",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/51F0Oz-3njS._SX385_BO1,204,203,200_.jpg",
        "price": 534,
        "review": "4.5 out of 5 stars",
        "description": "'A beautiful and profound retelling' - Madeline MillerA dazzling, feminist retelling of Greek myth from the internationally bestselling author of The Miniaturist, stunningly illustrated by Olivia Lomenech Gill.Exiled to a far-flung island by the whims of the gods, Medusa has little company except the snakes that adorn her head instead of hair. But when a charmed, beautiful boy called Perseus arrives on the island, her lonely existence is disrupted with the force of a supernova, unleashing desire, love and betrayal.Filled with glorious full-colour illustrations by award-winning Olivia Lomenech Gill, this astonishing retelling of Greek myth is perfect for readers of Circe and The Silence of the Girls. Illuminating the girl behind the legend, it brings alive Medusa for a new generation.",
        "discount": 37,
        "newArrivals": false,
        "__v": 0
    },
    {
        "_id": "6325a97cf6d5a567a5b4340f",
        "title": "Silent Earth: Averting the Insect Apocalypse",
        "author": "Dave Goulson",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/41MYlcd+aaL._SX323_BO1,204,203,200_.jpg",
        "price": 452,
        "review": "4.8 out of 5 stars",
        "description": "**THE SUNDAY TIMES BESTSELLER**'Compelling, penetrating, devastating - Silent Earth is a wake-up call for the world.' Isabella TreeWe have to learn to live as part of nature, not apart from it. And the first step is to start looking after the insects, the little creatures that make our shared world go round.Insects are essential for life as we know it. As they become more scarce, our world will slowly grind to a halt; we simply cannot function without them. Drawing on the latest ground-breaking research and a lifetime's study, Dave Goulson reveals the shocking decline of insect populations that has taken place in recent decades, with potentially catastrophic consequences. He passionately argues that we must all learn to love, respect and care for our six-legged friends.Eye-opening, inspiring and riveting, Silent Earth is part love letter to the insect world, part elegy, part rousing manifesto for a greener planet. It is a call to arms for profound change at every level - in government policy, agriculture, industry and in our own homes and gardens. Although time is running out, it is not yet too late for insect populations to recover. We may feel helpless in the face of many of the environmental issues that loom on our horizon, but Goulson shows us how we can all take simple steps to encourage insects and counter their destruction.",
        "discount": 39,
        "newArrivals": false,
        "__v": 0
    },
    {
        "_id": "6325a9a4f6d5a567a5b43412",
        "title": "Eat, Drink, Nap: Bringing the House Home",
        "author": "Soho House",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/41k7Rwbp1OL._SX420_BO1,204,203,200_.jpg",
        "price": 346,
        "review": "4.8 out of 5 stars",
        "description": "The quintessential style, cooking, and home interior book from Soho House, the world's leading members club.Since the first Soho House opened its doors over 25 years ago, we've learnt a bit about what works. Contemporary, global yet with something quintessentially English and homely at its heart, this is Soho House style explained by its experts:- From planning a room to vintage finds: bringing the Soho House look home.- Our House curator's advice on how to buy, collect and hang art.- The art of a great night's sleep: how to design the perfect bedroom.- No-fuss recipes and chef's tips: here's how to make your favourite House dishes.- Inside Babington: our take on country-house living. Wellies optional.- Flip-flop glamour and poolside style from Soho House Miami Beach.- All the secrets of cocktail hour: House tonics and barman's tips.- Spa treatment at home, DIY facials and chocolate brownies.Eat Drink Nap, a 300-page highly illustrated book, with a foreword from founder Nick Jones, and photography from leading food and interiors photographers Mark Seelen and Jean Cazals, shares the Soho House blueprint for stylish, modern living, the Soho House way.___________________________________________Readers love EAT, DRINK, NAP:'A fun and stylish guide to a better life''A perfect coffee table book!''I love it and people comment and do flick though it when they are at my home''Simple but elegant. . . and chocked full of beautiful pictures and wonderful information for making your house a home.'",
        "discount": 38,
        "newArrivals": false,
        "__v": 0
    },
    {
        "_id": "6325a9bbf6d5a567a5b43415",
        "title": "Troy: Our Greatest Story Retold (Stephen Fry’s Greek Myths, 3)",
        "author": "Stephen Fry",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/41rYlCpl5HS._SX324_BO1,204,203,200_.jpg",
        "price": 565,
        "review": "4.7 out of 5 stars",
        "description": "AN EPIC BATTLE THAT LASTED TEN YEARS. A LEGENDARY STORY THAT HAS SURVIVED THOUSANDS.'An inimitable retelling of the siege of Troy . . . Fry's narrative, artfully humorous and rich in detail, breathes life and contemporary relevance into these ancient tales' OBSERVER'Stephen Fry has done it again. Well written and super storytelling' 5***** READER REVIEW ________ 'Troy. The most marvellous kingdom in all the world. The Jewel of the Aegean. Glittering Ilion, the city that rose and fell not once but twice . . .'When Helen, the beautiful Greek queen, is kidnapped by the Trojan prince Paris, the most legendary war of all time begins.Watch in awe as a thousand ships are launched against the great city of Troy.Feel the fury of the battleground as the Trojans stand resolutely against Greek might for an entire decade.And witness the epic climax - the wooden horse, delivered to the city of Troy in a masterclass of deception by the Greeks . . .In Stephen Fry's exceptional retelling of our greatest story, TROY will transport you to the depths of ancient Greece and beyond. ________ 'A fun romp through the world's greatest story. Fry's knowledge of the world - ancient and modern - bursts through' Daily Telegraph'An excellent retelling . . . told with compassion and wit' 5***** Reader Review'Hugely successful, graceful' The Times'If you want to read about TROY, this book is a must over any other' 5***** Reader Review'Fluent, crisp, nuanced, begins with a bang' The Times Literary Supplement'The characters . . . are brilliantly brought to life' 5***** Reader Review PRAISE FOR STEPHEN FRY'S GREEK SERIES: 'A romp through the lives of ancient Greek gods. Fry is at his story-telling best . . . the gods will be pleased' Times 'A head-spinning marathon of legends' Guardian 'An Olympian feat. The gods seem to be smiling on Fry - his myths are definitely a hit' Evening Standard 'An odyssey through Greek mythology. Brilliant . . . all hail Stephen Fry' Daily Mail 'A rollicking good read' Independent",
        "discount": 37,
        "newArrivals": true,
        "__v": 0
    }
]
};

const getBooksDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BOOK_DATA:
      return Object.assign({}, state, {
        booksData: action.payload,
      });
    default:
      return state;
  }
};

export default getBooksDataReducer;

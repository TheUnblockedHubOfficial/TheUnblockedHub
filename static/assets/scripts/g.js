document.addEventListener('DOMContentLoaded', () => {
  const appsList = [
    {
      name: '1',
      link: 'https://hgentry.github.io/1/',
      image: '/assets/media/icons/1.webp',
      categories: ['all'],
    },
    {
      name: '1 on 1 Soccer',
      link: 'https://skoolcdn.github.io/gfiles/gfiles/flash/?swf=1on1soccer.swf',
      image: '/assets/media/icons/1on1soccer.jpg',
      categories: ['all', 'sports', 'flash'],
    },
    {
      name: '1v1.LOL',
      link: 'https://1v1.lol',
      image: '/assets/media/icons/1v1-lol.webp',
      categories: ['all', '2P'],
    },
    {
      name: '10 Minutes Till Dawn',
      link: 'https://www.crazygames.com/game/10-minutes-till-dawn',
      image: '/assets/media/icons/tmtd.png',
      categories: ['all'],
    },
    {
      name: '2048',
      link: 'https://2048.org/',
      image: '/assets/media/icons/2048.png',
      categories: ['all'],
    },
    {
      name: '2048 Solitaire',
      link: 'https://freegames.org/2048-solitaire/',
      image: '/assets/media/icons/2048solitaire.png',
      categories: ['all'],
    },
    {
      name: '2D Rocket League',
      link: 'https://v6p9d9t4.ssl.hwcdn.net/html/3325334/index.html',
      image: '/assets/media/icons/2D-Rocket-League.webp',
      categories: ['all', 'sports'],
    },
    {
      name: '3D Dino Game',
      link: 'https://lagged.com/api/play2/t-rex-3d2/',
      image: '/assets/media/icons/trex-run-3D.webp',
      categories: ['all'],
    },
    {
      name: '3 Slices',
      link: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2F3-slices.xml',
      image: '/assets/media/icons/3slices.jpg',
      categories: ['all'],
    },
    {
      name: '60 Sec. Burger Run',
      link: 'https://www.coolmathgames.com/0-60-second-burger-run/play',
      image: '/assets/media/icons/60-second-burger-run.webp',
      categories: ['all'],
    },
    {
      name: '8 Ball Pool',
      link: 'https://8ball-pool.io',
      image: '/assets/media/icons/8ball.webp',
      categories: ['all', '2P'],
    },
    {
      name: '99 Balls 3D',
      link: 'https://gamesnacks.com/embed/games/99balls3d',
      image: '/assets/media/icons/99balls.png',
      categories: ['all'],
    },
    {
      name: 'A Dark Room',
      link: 'https://adarkroom.doublespeakgames.com',
      image: '/assets/media/icons/ADR.webp',
      categories: ['all'],
    },
    {
      name: 'Ace Attorney',
      link: 'https://math-study.github.io/gba/main/play/index.html?console=nds&game=Phoenix_Wright_-_Ace_Attorney_(USA)',
      image: '/assets/media/icons/aa.webp',
      categories: ['all', 'emu'],
    },
    {
      name: 'AC - Wild World',
      link: 'https://math-study.github.io/gba/main/play/index.html?console=nds&game=Animal_Crossing_-_Wild_World_(USA)',
      image: '/assets/media/icons/acww.webp',
      categories: ['all', 'emu'],
    },
    {
      name: 'ADOFAI',
      link: 'https://kbhgames.com/game/a-dance-of-fire-and-ice',
      image: '/assets/media/icons/adofai.png',
      categories: ['all'],
    },
    {
      name: 'Adventure Capitalist',
      link: 'https://than1089.github.io/adventure-capitalist/',
      image: '/assets/media/icons/adventure-capitalist.webp',
      categories: ['all'],
    },
    {
      name: 'Agar.io',
      link: 'https://agar.io',
      image: '/assets/media/icons/agario.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Akinator',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.digidust.elokence.akinator.freemium&partner=interstellar',
      image: '/assets/media/icons/akinator.jpg',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Amazing Strange Rope Police',
      link: 'https://www.crazygames.com/game/amazing-strange-rope-police-vice-spider',
      image: '/assets/media/icons/asrp.avif',
      categories: ['all'],
    },
    {
      name: 'Among Us',
      link: 'https://now.gg/play/innersloth-llc/4047/among-us',
      image: '/assets/media/icons/among-us.png',
      categories: ['all', '2P', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Amidst The Sky',
      link: 'https://www.coolmathgames.com/0-amidst-the-sky',
      image: '/assets/media/icons/atc.png',
      categories: ['all'],
    },
    {
      name: 'Apex Legends',
      link: 'https://play.geforcenow.com/games?game-id=cb2b1b5f-54ba-45fd-9839-96bbfe1376cd&amp;lang=en_US&amp;asset-id=01_c6efce00-e91e-402a-8b72-f4971f89c528',
      image: '/assets/media/icons/apex.webp',
      categories: ['all'],
    },
    {
      name: 'Aphsalt Retro',
      link: 'https://html5.gamedistribution.com/2c122cee7ef04222a962449e32a34e98/?gd_sdk_referrer_url=https://gamedistribution.com/games/asphalt-retro',
      image: '/assets/media/icons/asr.jpg',
      categories: ['all'],
    },
    {
      name: 'Armor Mayhem',
      link: 'https://www.silvergames.com/en/armor-mayhem',
      image: '/assets/media/icons/aromormayhem.jpg',
      categories: ['all'],
    },
    {
      name: 'Arras.io',
      link: 'https://arras.io/',
      image: '/assets/media/icons/arrasio.jpg',
      categories: ['all', '2P'],
    },
    {
      name: 'Awesome Tanks 2',
      link: 'https://www.coolmathgames.com/0-awesome-tanks-2',
      image: '/assets/media/icons/awesometanks.jpg',
      categories: ['all'],
    },
    {
      name: 'Aptoide',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.aptoide.partners.nowgg.store&partner=interstellar',
      image: '/assets/media/icons/aptoide.jpg',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Archery World Tour',
      link: 'https://gamesnacks.com/embed/games/archery',
      image: '/assets/media/icons/awt.png',
      categories: ['all'],
    },
    {
      name: 'Alien Hominid',
      link: 'https://www.crazygames.com/embed/alien-hominid',
      image: '/assets/media/icons/ah.jpg',
      categories: ['all'],
    },
    {
      name: 'Axis Football League',
      link: 'https://www.crazygames.com/embed/axis-football-league',
      image: '/assets/media/icons/axisfootball.png',
      categories: ['all', 'sports'],
    },
    {
      name: 'Backrooms',
      link: 'https://backroomsgame.io/game/backrooms/',
      image: '/assets/media/icons/backrooms.jpg',
      categories: ['all'],
    },
    {
      name: 'Bad Ice-Cream',
      link: 'https://poki.com/en/g/bad-ice-cream',
      image: '/assets/media/icons/BadIcecream.webp',
      categories: ['all', 'emu'],
    },
    {
      name: 'Bad Time Simulator',
      link: 'https://doodle-pile.gitlab.io/endless-sans/',
      image: '/assets/media/icons/badtimesimulator.png',
      categories: ['all', 'emu'],
    },
    {
      name: "Baldi's Basics",
      link: 'https://en.gameslol.net/baldi-s-basics-1674.html',
      image: '/assets/media/icons/baldisbasics.png',
      categories: ['all'],
    },
    {
      name: 'Ball Mayhem',
      link: 'https://www.crazygames.com/game/rugby-io-ball-mayhem',
      image: '/assets/media/icons/ballmayhem.jpg',
      categories: ['all'],
    },
    {
      name: 'Basket Random',
      link: 'https://html5.gamedistribution.com/rvvASMiM/bf1268dccb5d43e7970bb3edaa54afc8/index.html',
      image: '/assets/media/icons/br.webp',
      categories: ['all', '2P', 'sports'],
    },
    {
      name: 'Basketball Stars',
      link: 'https://basketball-stars.io/',
      image: '/assets/media/icons/basketball-stars.webp',
      categories: ['all', '2P', 'sports'],
    },
    {
      name: 'Basketball Bros',
      link: 'https://basketbrosio.com/',
      image: '/assets/media/icons/basket-bros.webp',
      categories: ['all', '2P', 'sports'],
    },
    {
      name: 'Basketball Legends',
      link: 'https://basketballlegends.io/',
      image: '/assets/media/icons/basketball-legends.webp',
      categories: ['all', '2P', 'sports'],
    },
    {
      name: 'Bomb Party',
      link: 'https://jklm.fun',
      image: '/assets/media/icons/BP.png',
      categories: ['all,', '2P'],
    },
    {
      name: 'Bitlife',
      link: 'https://xlegends.github.io/bitlife/',
      image: '/assets/media/icons/bitlife.webp',
      categories: ['all'],
    },
    {
      name: 'Black Hole Square',
      link: 'https://supernapie.com/games/black-hole-square/',
      image: '/assets/media/icons/blackholesquare.png',
      categories: ['all'],
    },
    {
      name: 'Blockpost',
      link: 'https://poki.com/en/g/blockpost',
      image: '/assets/media/icons/blockpost.avif',
      categories: ['all', '2P'],
    },
    {
      name: 'bloxd.io',
      link: 'https://bloxd.io',
      image: '/assets/media/icons/bloxd-io.jpg',
      categories: ['all', '2P'],
    },
    {
      name: 'Bloxorz',
      link: 'https://www.crazygames.com/embed/bloxorz',
      image: '/assets/media/icons/bloxorz.png',
      categories: ['all'],
    },
    {
      name: 'Bounce Back',
      link: 'https://skoolcdn.github.io/gfiles/gfiles/html5/bounceback',
      image: '/assets/media/icons/bounceback.jpg',
      categories: ['all'],
    },
    {
      name: 'Bob The Robber 2',
      link: 'https://www.crazygames.com/game/bob-the-robber-2',
      image: '/assets/media/icons/btr2.jpeg',
      categories: ['all', 'flash'],
    },
    {
      name: 'Brain Test',
      link: 'https://0322484b-7a58-4454-9667-f805afffded5.poki-gdn.com/2e6b68d3-0f43-4b84-9c14-ab59f94e566c/index.html?country=US&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-v3.132.1&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fbrain-test-tricky-puzzles&gdhoist=yes&nonPersonalized=n&familyFriendly=n&categories=7%2C16%2C37%2C72%2C96%2C400%2C832%2C843%2C1140%2C1150%2C1159&special_condition=landing&game_id=0322484b-7a58-4454-9667-f805afffded5&game_version_id=2e6b68d3-0f43-4b84-9c14-ab59f94e566c',
      image: '/assets/media/icons/braintest.png',
      categories: ['all'],
    },
    {
      name: 'Brain Test 2',
      link: 'https://games.poki.com/458768/df221093-aae9-4c0d-b458-efb16ae8e3ab',
      image: '/assets/media/icons/braintest.png',
      categories: ['all'],
    },
    {
      name: 'Brain Test 3',
      link: 'https://games.poki.com/458768/1f3ae540-a95f-4f20-a000-29512612e341',
      image: '/assets/media/icons/braintest3.png',
      categories: ['all'],
    },
    {
      name: 'BTD',
      link: 'https://www.izzygames.com/bloons-tower-defense-1-t101.html',
      image: '/assets/media/icons/btd.png',
      categories: ['all'],
    },
    {
      name: 'BTD 2',
      link: 'https://www.crazygames.com/embed/bloons-tower-defense-2',
      image: '/assets/media/icons/btd2.png',
      categories: ['all', 'flash'],
    },
    {
      name: 'BTD 3',
      link: 'https://www.coolmathgames.com/0-bloons-tower-defense-3',
      image: '/assets/media/icons/btd3.png',
      categories: ['all', 'flash'],
    },
    {
      name: 'BTD 4',
      link: 'https://en.gameslol.net/data/bloons-td-4/index.html',
      image: '/assets/media/icons/btd4.webp',
      categories: ['all', 'flash'],
    },
    {
      name: 'BTD Battles',
      link: 'https://now.gg/play/ninja-kiwi/3146/bloons-td-battles',
      image: '/assets/media/icons/bloons-td-battles.png',
      categories: ['all', 'emu', 'emu', 'android'],
      now: true,
    },
    {
      name: 'BTD Battles 2',
      link: 'https://now.gg/play/ninja-kiwi/1403/bloons-td-battles-2',
      image: '/assets/media/icons/bloons-td-battles-2.png',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'BTTS',
      link: 'https://www.crazygames.com/embed/big-tower-tiny-square',
      image: '/assets/media/icons/btts.png',
      categories: ['all'],
    },
    {
      name: 'Buckshot Roulette',
      link: 'https://buckshotroulette.online/game/v11/',
      image: '/assets/media/icons/buckshotroulette.jpg',
      categories: ['all'],
    },
    {
      name: 'BuildNow.GG',
      link: 'https://games.crazygames.com/en_US/buildnow-gg/index.html',
      image: '/assets/media/icons/build-now.webp',
      categories: ['all', '2P'],
      now: true,
    },
    {
      name: 'Bullet Force Multiplayer',
      link: 'https://www.crazygames.com/game/bullet-force-multiplayer',
      image: '/assets/media/icons/BFM.png',
      categories: ['all,', '2P'],
    },
    {
      name: 'Bumpy Ball',
      link: 'https://www.bumpyball.io/',
      image: '/assets/media/icons/bumpyball.png',
      categories: ['all', '2P'],
    },
    {
      name: 'Burrito Bison',
      link: 'https://f.silvergames.com/awayfl/index.html?swf=burrito-bison.swf',
      image: '/assets/media/icons/burritobison.webp',
      categories: ['all'],
    },
    {
      name: 'Cat Ninja',
      link: 'https://4iapq88o5f3gc1dij3it0mp5jojnm3jr-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%252Fcat-ninja.xml',
      image: '/assets/media/icons/cat-ninja.webp',
      categories: ['all'],
    },
    {
      name: 'Candy Box',
      link: 'https://candybox2.net',
      image: '/assets/media/icons/candybox.webp',
      categories: ['all'],
    },
    {
      name: 'Candy Jump',
      link: 'https://candyjump.games235.com/',
      image: '/assets/media/icons/candyjump.jpg',
      categories: ['all'],
    },
    {
      name: 'Capybara Clicker',
      link: 'https://cookieclickercity.com/capybara-clicker',
      image: '/assets/media/icons/capybara.png',
      categories: ['all'],
    },
    {
      name: 'Celeste PICO-8',
      link: 'https://exok.com/minigames/celeste.html',
      image: '/assets/media/icons/celeste.webp',
      categories: ['all'],
    },
    {
      name: 'Chess.com',
      link: 'https://chess.com',
      image: '/assets/media/icons/chess.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Chrome Dino',
      link: 'https://dino-chrome.com/en',
      image: '/assets/media/icons/chromedino.jpeg',
      categories: ['all'],
    },
    {
      name: 'CircloO',
      link: 'https://www.coolmathgames.com/0-circloo',
      image: '/assets/media/icons/ccl.png',
      categories: ['all', 'emu'],
    },
    {
      name: 'Clicker Heros',
      link: 'https://www.clickerheroes.com/play.html',
      image: '/assets/media/icons/clickerheros.webp',
      categories: ['all', 'flash'],
    },
    {
      name: 'Climb Racing 3D',
      link: 'https://html5.gamedistribution.com/79296a5336c84f08a9937b0cd3f4515d/?gd_sdk_referrer_url=https://gamedistribution.com/games/climb-racing-3d',
      image: '/assets/media/icons/climbracing3d.jpeg',
      categories: ['all'],
    },
    {
      name: 'Cluster Rush',
      link: 'https://unicyclehero.github.io/go/cluster-rush',
      image: '/assets/media/icons/cluster-rush.webp',
      categories: ['all'],
    },
    {
      name: 'COD Mobile',
      link: 'https://now.gg/play/activision-publishing-inc/7935/call-of-duty',
      image: '/assets/media/icons/call-of-duty.png',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Computer Clicker',
      link: '/assets/DiBiaseProductions/ComputerClicker/index.html',
      image: '/assets/media/icons/computerclicker.png',
      categories: ['all', 'local'],
    },
    {
      name: 'Cookie Run Kingdom',
      link: 'https://now.gg/play/devsisters-corporation/3475/cookie-run',
      image: '/assets/media/icons/cookie-run.png',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Controls',
      link: '/assets/DiBiaseProductions/Controls/index.html',
      image: '/assets/media/icons/controls.png',
      categories: ['all', 'local'],
    },
    {
      name: 'Cookie Clicker',
      link: 'https://orteil.dashnet.org/cookieclicker/',
      image: '/assets/media/icons/cookieclicker.webp',
      categories: ['all'],
    },
    {
      name: 'Counter Strike 1.6',
      link: 'https://play-cs.com/en/servers',
      image: '/assets/media/icons/cs16.png',
      categories: ['all'],
    },
    {
      name: 'Cryzen',
      link: 'https://cryzen.io',
      image: '/assets/media/icons/cryzen.png',
      categories: ['all'],
    },
    {
      name: 'Cubes 2048',
      link: 'https://www.crazygames.com/game/cubes-2048-io',
      image: '/assets/media/icons/C2048.jpg',
      categories: ['all,', '2P'],
    },
    {
      name: 'Cubic Castles',
      link: 'castles.cc',
      image: '/assets/media/icons/cubiccastles.jpeg',
      categories: ['all,', '2P'],
    },
    {
      name: 'Cut The Rope',
      link: 'https://www.coolmathgames.com/0-cut-the-rope',
      image: '/assets/media/icons/ctr.png',
      categories: ['all'],
    },
    {
      name: 'Deeeep.io',
      link: 'https://beta.deeeep.io',
      image: '/assets/media/icons/deeeepio.jpg',
      categories: ['all', '2P'],
    },
    {
      name: 'Deepest Sword',
      link: 'https://v6p9d9t4.ssl.hwcdn.net/html/4017918/index.html',
      image: '/assets/media/icons/deepest-sword.webp',
      categories: ['all'],
    },
    {
      name: 'Defly.io',
      link: 'https://defly.io',
      image: '/assets/media/icons/defly.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Diep.io',
      link: 'https://diep.io/',
      image: '/assets/media/icons/diep.webp',
      categories: ['all'],
    },
    {
      name: 'Devast.io',
      link: 'https://devast.io',
      image: '/assets/media/icons/IMG_3897.png',
      categories: ['all', '2P'],
    },
    {
      name: 'Diep.io',
      link: 'https://diep.io/',
      image: '/assets/media/icons/diep.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'D&D',
      link: 'https://pages.roll20.net/lp/play-dnd-online-free',
      image: '/assets/media/icons/DandD.jpg',
      categories: ['all', '2P'],
    },
    {
      name: 'Dig This',
      link: 'https://html5.gamedistribution.com/7d1f5e3de6a5457da0a1782ea3a02a95/?gd_sdk_referrer_url=https://gamedistribution.com/games/dig-this',
      image: '/assets/media/icons/digthis.jpg',
      categories: ['all'],
    },
    {
      name: 'Dino Swords',
      link: 'https://dinoswords.gg',
      image: '/assets/media/icons/chromedinomodded.jpeg',
      categories: ['all'],
    },
    {
      name: 'Doodle Jump',
      link: 'https://htmlgames.github.io/htmlgames/differences/jump',
      image: '/assets/media/icons/doodle.png',
      categories: ['all'],
    },
    {
      name: 'Doom',
      link: 'https://math-study.github.io/gba/main/play/index.html?console=snes&game=Doom',
      image: '/assets/media/icons/doom1.webp',
      categories: ['all', 'emu'],
    },
    {
      name: 'Doom 2',
      link: 'https://www.retrogames.cz/play_462-DOS.php',
      image: '/assets/media/icons/doom2.webp',
      categories: ['all', 'emu'],
    },
    {
      name: 'Dragon Ball Devolution',
      link: 'https://donitz.itch.io/dreader',
      image: '/assets/media/icons/dreader.webp',
      categories: ['all', 'flash'],
    },
    {
      name: 'Dreader',
      link: 'https://donitz.itch.io/dreader',
      image: '/assets/media/icons/dragonballdev.jpg',
      categories: ['all'],
    },
    {
      name: 'Drift Boss',
      link: 'https://watchdocumentaries.com/wp-content/uploads/games/drift-boss/',
      image: '/assets/media/icons/db.webp',
      categories: ['all'],
    },
    {
      name: 'Drift Hunters',
      link: 'https://webglmath.github.io/drift-hunters/',
      image: '/assets/media/icons/drift-hunters.webp',
      categories: ['all'],
    },
    {
      name: 'Drive Mad',
      link: 'https://raw.githack.com/3kh0/3kh0-assets/main/drive-mad/index.html',
      image: '/assets/media/icons/dm.webp',
      categories: ['all'],
    },
    {
      name: 'Duck Life',
      link: 'https://poki.com/en/g/duck-life?campaign=14726801018&adgroup=126978561589&extensionid=&targetid=kwd-305495382375&location=9002146&matchtype=p&network=g&device=c&devicemodel=&creative=594130336292&keyword=duck%20life&placement=&target=&gclid=Cj0KCQjw1rqkBhCTARIsAAHz7K24CLdrUH1dAOlzZPm8Xm9DQ0k4SmzaH434ywjPGWhZyArNi1zhzOAaAn7ZEALw_wcB',
      image: '/assets/media/icons/ducklife3.png',
      categories: ['all'],
    },
    {
      name: 'Duck Life 2',
      link: 'https://poki.com/en/g/ducklife-2?campaign=14726801018&adgroup=126978570669&extensionid=&targetid=kwd-321194731589&location=9002146&matchtype=e&network=g&device=c&devicemodel=&creative=547385641178&keyword=duck%20life%202&placement=&target=&gclid=Cj0KCQjw1rqkBhCTARIsAAHz7K1Uv4Ju3EE98yTKjn-wRpOZpqA0_-4cit21eAHBVdhXBC6HizypXxgaAvZHEALw_wcB',
      image: '/assets/media/icons/ducklife3.png',
      categories: ['all'],
    },
    {
      name: 'Duck Life 3',
      link: 'https://www.crazygames.com/embed/ducklife-3',
      image: '/assets/media/icons/ducklife3.png',
      categories: ['all'],
    },
    {
      name: 'Duck Life 4',
      link: 'https://www.hoodamath.com/mobile/games/duck-life-4/game.html',
      image: '/assets/media/icons/ducklife.webp',
      categories: ['all'],
    },
    {
      name: 'Dynast.io',
      link: 'https://dynast.io',
      image: '/assets/media/icons/dynast-io.png',
      categories: ['all', '2P'],
    },
    {
      name: 'EA SPORTS FC™ MOBILE 24 SOCCER',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.ea.gp.fifamobile&partner=interstellar',
      image: '/assets/media/icons/easports-fcmobile24.jpg',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'EA SPORTS™ UFC® Mobile 2',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.ea.gp.easportsufc2&partner=interstellar',
      image: '/assets/media/icons/easports-ufc.jpg',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Electric Man 2',
      link: 'https://www.addictinggames.com/action/electric-man-2',
      image: '/assets/media/icons/electricman-2.webp',
      categories: ['all'],
    },
    {
      name: 'Evades',
      link: 'https://evades.io',
      image: '/assets/media/icons/evadesio.webp',
      categories: ['all,', '2P'],
    },
    {
      name: 'ev.io',
      link: 'https://ev.io',
      image: '/assets/media/icons/evio.jpg',
      categories: ['all', '2P'],
    },
    {
      name: 'Evo World',
      link: 'https://evoworld.io/',
      image: '/assets/media/icons/evoworld.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Fallout',
      link: 'https://playclassic.games/games/role-playing-dos-games-online/play-fallout-online/play/',
      image: '/assets/media/icons/fallout.png',
      categories: ['all'],
    },
    {
      name: 'Fallout 2',
      link: 'https://jonasz-o.itch.io/fallout2remake3d',
      image: '/assets/media/icons/fallout2.gif',
      categories: ['all'],
    },
    {
      name: 'Fireboy and Watergirl',
      link: 'https://html5.gamedistribution.com/a55c9cc9c21e4fc683c8c6857f3d0c75/?gd_sdk_referrer_url=https://gamedistribution.com/games/fireboy-and-watergirl-1-forest-temple',
      image: '/assets/media/icons/fbwg.jpeg',
      categories: ['all', '2P'],
    },
    {
      name: 'Fireboy And Watergirl 2 In The Light Temple',
      link: 'https://www.coolmathgames.com/sites/default/files/public_games/40210/',
      image: '/assets/media/icons/fireboyandwatergirllighttemple.jpg',
      categories: ['all', '2P'],
    },
    {
      name: 'Fireboy And Watergirl 4 In The Crystal Temple',
      link: 'https://www.coolmathgames.com/sites/default/files/public_games/40212/',
      image: '/assets/media/icons/fireboyandwatergirlcrystaltemple.jpg',
      categories: ['all', '2P'],
    },
    {
      name: 'Fireboy And Watergirl 5: Elements',
      link: 'https://www.coolmathgames.com/sites/default/files/public_games/40218',
      image: '/assets/media/icons/fireboyandwatergirlelements.jpg',
      categories: ['all', '2P'],
    },
    {
      name: 'Fireboy And Watergirl 6: Fairy Tales',
      link: 'https://html5.gamedistribution.com/rvvASMiM/be3cff113c4e4f069b7614851825ffe9/index.html',
      image: '/assets/media/icons/fireboyandwatergirlfairytales.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Fireboy And Watergirl In The Forest Temple',
      link: 'https://www.coolmathgames.com/sites/default/files/public_games/40034/',
      image: '/assets/media/icons/fireboyandwatergirlfairytales.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'FeedVid',
      link: 'https://varunramesh.itch.io/feedvid',
      image: '/assets/media/icons/feedvid.png',
      categories: ['all'],
    },
    {
      name: 'FIFA Soccer',
      link: 'https://www.playroms.net/search/?query=fifa',
      image: '/assets/media/icons/fifa.webp',
      categories: ['all', 'sports'],
    },
    {
      name: 'Flip Bottle',
      link: 'https://www.crazygames.com/game/flip-bottle',
      image: '/assets/media/icons/flipbottle.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'florr.io',
      link: 'https://florr.io',
      image: '/assets/media/icons/florr.jpg',
      categories: ['all', '2P'],
    },

    {
      name: 'Fortnite (PC)',
      link: 'https://play.geforcenow.com/mall/#/deeplink?game-id=46bfab06-d864-465d-9e56-2d9e45cdee0a',
      image: '/assets/media/icons/fortnite.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Fortnite (Android)',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.epicgames.fortnite&partner=interstellar',
      image: '/assets/media/icons/fortnite.jpg',
      categories: ['all', 'emu', 'android', '2P'],
      now: true,
    },
    {
      name: 'Flappy Bird',
      link: 'https://flappybird.io',
      image: '/assets/media/icons/fp.png',
      categories: ['all'],
    },
    {
      name: 'FNAF',
      link: 'https://kbhgames.com/game/five-nights-freddys-online',
      image: '/assets/media/icons/fnaf.jpeg',
      categories: ['all'],
    },
    {
      name: 'FNAF 2',
      link: 'https://kbhgames.com/game/five-nights-freddys-2',
      image: '/assets/media/icons/FNAF2.webp',
      categories: ['all'],
    },
    {
      name: 'FNAF 3',
      link: 'https://sussygamedeveloper.github.io/fnaf3/',
      image: '/assets/media/icons/FNAF3.webp',
      categories: ['all'],
    },
    {
      name: 'FNAF Web',
      link: 'https://wellsousaaa.github.io/Five-Nights-at-Freddys-Web/',
      image: '/assets/media/icons/FNAFWeb.webp',
      categories: ['all'],
    },
    {
      name: "Friday Night Funkin'",
      link: 'https://w8.snokido.com/games/html5/friday-night-funkin/0281/index.html',
      image: '/assets/media/icons/fnf.webp',
      categories: ['all'],
    },
    {
      name: 'FNF - Lofi Mod',
      link: 'https://fnf.kdata1.com/lofi-funkin/2/',
      image: '/assets/media/icons/lofi.webp',
      categories: ['all'],
    },
    {
      name: 'FNF VS. Snorlax',
      link: 'https://fnf.kdata1.com/snorlax/1/',
      image: '/assets/media/icons/snorlax.webp',
      categories: ['all'],
    },
    {
      name: 'Free Fire',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.dts.freefireth&partner=interstellar',
      image: '/assets/media/icons/freefire.jpg',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Fruit Ninja',
      link: 'https://www.crazygames.com/game/fruit-ninja',
      image: '/assets/media/icons/fn.png',
      categories: ['all'],
    },
    {
      name: 'Gacha Life 2',
      link: 'https://now.gg/apps/lunime/5691/gacha-life-2.html',
      image: '/assets/media/icons/gacha-life-2.png',
      categories: ['all', '2P', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Geometry Dash',
      link: 'https://geometrydashlite.io/',
      image: '/assets/media/icons/geometrydash.png',
      categories: ['all'],
    },
    {
      name: 'Getaway Shootout',
      link: 'https://www.twoplayergames.org/embed/getaway-shootout',
      image: '/assets/media/icons/getawayshootout.jpeg',
      categories: ['all', '2P'],
    },
    {
      name: 'Genshin Impact',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.miHoYo.GenshinImpact&partner=interstellar',
      image: '/assets/media/icons/genshinimpact.jpg',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Gladihoppers',
      link: 'https://bonbang.github.io/store99/gladihoppers/index.html',
      image: '/assets/media/icons/gladihoppers.jpg',
      categories: ['all'],
    },
    {
      name: 'Golden Eye 007',
      link: 'https://math-study.github.io/gba/main/play/index.html?console=n64&game=GoldenEye_007_(USA)',
      image: '/assets/media/icons/golden-eye-007.webp',
      categories: ['all', 'emu'],
    },
    {
      name: 'Google Feud',
      link: 'https://googlefeud.com/',
      image: '/assets/media/icons/googlefeud.png',
      categories: ['all'],
    },
    {
      name: 'Gunspin',
      link: 'https://html5.gamedistribution.com/rvvASMiM/917cce8c44c44638a8cdc2a1794b65c8/index.html',
      image: '/assets/media/icons/gunspin.jpg',
      categories: ['all'],
    },
    {
      name: 'Gun Mayhem 2',
      link: 'https://www.crazygames.com/game/gun-mayhem-2',
      image: '/assets/media/icons/gunmayhem2.jpg',
      categories: ['all'],
    },
    {
      name: 'Half-Life',
      link: 'https://x8bitrain.github.io/webXash/',
      image: '/assets/media/icons/half-life.png',
      categories: ['all'],
    },
    {
      name: 'Happy Glass',
      link: 'https://www.crazygames.com/game/happy-glass',
      image: '/assets/media/icons/happyglass.png',
      categories: ['all'],
    },
    {
      name: 'Happy Wheels',
      link: 'https://totaljerkface.com/happy_wheels.tjf',
      image: '/assets/media/icons/happywheels.jpeg',
      categories: ['all'],
    },
    {
      name: 'Haunted School',
      link: 'https://games.crazygames.com/en_US/haunted-school---horror-game/index.html',
      image: '/assets/media/icons/hauntedschool.jpeg',
      categories: ['all'],
    },
    {
      name: 'HexArena',
      link: 'https://hexarena.io/',
      image: '/assets/media/icons/helixteus.webp',
      categories: ['all'],
    },
    {
      name: 'Hero Wars',
      link: 'https://www.hero-wars.com/',
      image: '/assets/media/icons/herowars.png',
      categories: ['all'],
    },
    {
      name: 'HOLE.io',
      link: 'https://hole-io.com/',
      image: '/assets/media/icons/hole.webp',
      categories: ['all'],
    },
    {
      name: 'Hordes',
      link: 'https://hordes.io',
      image: '/assets/media/icons/hordes.jpg',
      categories: ['all'],
    },
    {
      name: 'Idle Breakout',
      link: 'https://interstellarnetwork.github.io/Interstellar-Assets/play/idle-breakout/index.html',
      image: '/assets/media/icons/idle.webp',
      categories: ['all'],
    },
    {
      name: 'Isleward',
      link: 'https://play.isleward.com',
      image: '/assets/media/icons/isleward.webp',
      categories: ['all'],
    },
    {
      name: 'Interactive Buddy',
      link: 'https://f.silvergames.com/ruffle/player.php?id=204',
      image: '/assets/media/icons/interactive-buddy.webp',
      categories: ['all', 'flash'],
    },
    {
      name: 'Ironwood RPG',
      link: 'https://ironwoodrpg.com/',
      image: '/assets/media/icons/ironwood.png',
      categories: ['all', 'flash'],
    },
    {
      name: 'Itch.io',
      link: 'https://itch.io',
      image: '/assets/media/icons/itch.png',
      categories: ['all,', 'emu,', '2P'],
    },
    {
      name: 'Jacksmith',
      link: 'https://www.coolmathgames.com/0-jacksmith/play',
      image: '/assets/media/icons/jacksmith.webp',
      categories: ['all'],
    },
    {
      name: 'Jelly Mario',
      link: 'https://jellymar.io',
      image: '/assets/media/icons/jellymario.jpg',
      categories: ['all'],
    },
    {
      name: 'Jetpack Joyride',
      link: 'https://www.crazygames.com/embed/jetpack-joyride',
      image: '/assets/media/icons/jetpackjoyride.jpg',
      categories: ['all'],
    },
    {
      name: 'Johnny Upgrade',
      link: 'https://lagged.com/api/play2/johnny-upgrade3/',
      image: '/assets/media/icons/johnnyupgrade.png',
      categories: ['all'],
    },
    {
      name: 'JustFall.LOL',
      link: 'https://justfall.lol',
      image: '/assets/media/icons/just-fall-lol.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Just Flip - The Demo',
      link: 'https://kbhgames.com/game/just-flip',
      image: '/assets/media/icons/justflip.jpg',
      categories: ['all'],
    },
    {
      name: 'Just One Boss',
      link: 'https://www.coolmathgames.com/0-just-one-boss',
      image: '/assets/media/icons/justoneboss.jpg',
      categories: ['all'],
    },
    {
      name: 'Kiomet',
      link: 'https://kiomet.com',
      image: '/assets/media/icons/kiomet.webp',
      categories: ['all'],
    },
    {
      name: 'Kirby Mirror (GBA)',
      link: 'https://math-study.github.io/gba/main/play/index.html?console=gba&game=kirbymirror',
      image: '/assets/media/icons/kirby.webp',
      categories: ['all', 'emu'],
    },
    {
      name: 'Kirka',
      link: 'https://kirka.io',
      image: '/assets/media/icons/kirka.jpg',
      categories: ['all'],
    },
    {
      name: 'Krunker',
      link: 'https://www.crazygames.com/embed/krunker-io',
      image: '/assets/media/icons/krunker.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Kirka.io',
      link: 'https://www.crazygames.com/embed/kirka-io',
      image: '/assets/media/icons/kirkaio.jpeg',
      categories: ['all', '2P'],
    },
    {
      name: 'Learn To Fly',
      link: 'https://www.silvergames.com/en/learn-to-fly',
      image: '/assets/media/icons/learn-to-fly.webp',
      categories: ['all'],
    },
    {
      name: 'Learn To Fly 2',
      link: 'https://www.silvergames.com/en/learn-to-fly-3',
      image: '/assets/media/icons/learn-to-fly-2.webp',
      categories: ['all'],
    },
    {
      name: 'Learn To Fly 3',
      link: 'https://redball4games.com/red-ball-3.html',
      image: '/assets/media/icons/learntofly3.jpg',
      categories: ['all'],
    },
    {
      name: 'Learn To Fly Idle',
      link: 'https://www.gameslol.net/data/waflash/index.php?g=635',
      image: '/assets/media/icons/ltf_idle.webp',
      categories: ['all'],
    },
    {
      name: 'Lets Surf',
      link: 'https://rbeesley.github.io/MicrosoftEdge-SURF/',
      image: '/assets/media/icons/ltsf.png',
      categories: ['all'],
    },
    {
      name: 'Little Big Snake',
      link: 'https://littlebigsnake.com/',
      image: '/assets/media/icons/lbs.jpeg',
      categories: ['all'],
    },
    {
      name: 'Little Alchemy',
      link: 'https://littlealchemy.com/',
      image: '/assets/media/icons/littlealchamy.png',
      categories: ['all'],
    },
    {
      name: 'Little Alchemy 2',
      link: 'https://littlealchemy2.com/',
      image: '/assets/media/icons/littlealchamy2.png',
      categories: ['all'],
    },
    {
      name: 'Lordz.io',
      link: 'https://lordz.io/',
      image: '/assets/media/icons/lordz.webp',
      categories: ['all'],
    },
    {
      name: 'Lostgamer',
      link: 'https://lostgamer.io/',
      image: '/assets/media/icons/lostgamer.png',
      categories: ['all', '2P'],
    },
    {
      name: 'Madden NFL 24',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.ea.gp.maddennfl21mobile&partner=interstellar',
      image: '/assets/media/icons/maddennfl24.jpeg',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Master Archer',
      link: 'https://playcanv.as/p/JERg21J8/',
      image: '/assets/media/icons/masterarcher.jpg',
      categories: ['all'],
    },
    {
      name: 'Masked.io',
      link: 'https://unblocked-games.s3.amazonaws.com/games/masked-io/index.html',
      image: '/assets/media/icons/masked-forces.webp',
      categories: ['all'],
    },
    {
      name: 'Mario Kart 64',
      link: 'https://math-study.github.io/gba/main/play/index.html?console=n64&game=Mario_Kart_64_(USA)',
      image: '/assets/media/icons/mario-kart-64.webp',
      categories: ['all', 'emu'],
    },
    {
      name: 'Melon Playground',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.studio27.MelonPlayground&partner=interstellar',
      image: '/assets/media/icons/melonplayground.webp',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Merge Fruit',
      link: 'https://html5.gamedistribution.com/2dee9d404697435aa76111eb4015e1d5/',
      image: '/assets/media/icons/mergefruit.jpeg',
      categories: ['all'],
    },
    {
      name: 'Minecraft 1.5.2 (Eaglercraft)',
      link: '/f/minecraft-15/index.html',
      image: '/assets/media/icons/mc.webp',
      categories: ['all', '2P', 'emu'],
      local: 'true',
    },
    {
      name: 'Minecraft 1.8 (Eaglercraft)',
      link: '/f/minecraft-18/index.html',
      image: '/assets/media/icons/mc.webp',
      categories: ['all', '2P', 'emu'],
      local: 'true',
    },
    {
      name: 'Mineenergy',
      link: 'https://mineenergy.fun/',
      image: '/assets/media/icons/mineenergy.jpeg',
      categories: ['all'],
    },
    {
      name: 'Minecraft Classic',
      link: 'https://classic.minecraft.net',
      image: '/assets/media/icons/mc.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Mobs Inc',
      link: 'https://overboy.itch.io/mobs-inc',
      image: '/assets/media/icons/mobsinc.webp',
      categories: ['all'],
    },
    {
      name: 'Monkey Mart',
      link: 'https://html5.gamemonetize.co/ugi7ftbv2kgodcq7vful9u9v34wein5z/',
      image: '/assets/media/icons/mm.webp',
      categories: ['all'],
    },
    {
      name: 'Monster Legends',
      link: 'https://now.gg/apps/social-point/1193/monster-legends.html',
      image: '/assets/media/icons/monster-legends.png',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'MooMoo.io',
      link: 'https://moomoo.io',
      image: '/assets/media/icons/moo.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Mortal Kombat 4',
      link: 'https://math-study.github.io/gba/main/play/index.html?console=gbc&game=Mortal_Kombat_4_(USA_Europe)_(SGB_Enhanced)_(GB_Compatible)',
      image: '/assets/media/icons/mortalkombat4.png',
      categories: ['all', 'emu'],
    },
    {
      name: 'Mr.Mine',
      link: 'https://www.coolmathgames.com/0-mr-mine/play',
      image: '/assets/media/icons/mrmine.webp',
      categories: ['all'],
    },
    {
      name: 'mope.io',
      link: 'https://thelast.io',
      image: '/assets/media/icons/mope-io.jpg',
      categories: ['all', '2P'],
    },
    {
      name: 'Moto X3M',
      link: 'https://html5.gamedistribution.com/rvvASMiM/5b0abd4c0faa4f5eb190a9a16d5a1b4c/index.html',
      image: '/assets/media/icons/mx3m.webp',
      categories: ['all'],
    },
    {
      name: 'MX3M: Pool Party',
      link: 'https://h0jokl1egt0fd4oc8qv3j0tltl9jbqhn-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://649025137-174029463385024710.preview.editmysite.com/uploads/b/139890129-767696982876512205/files/mx3mpp.xml',
      image: '/assets/media/icons/mx3m.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'MX3M: Spooky Land',
      link: 'https://html5.gamedistribution.com/rvvASMiM/b8a342904608470a9f3382337aca3558/index.html',
      image: '/assets/media/icons/mx3m-spooky.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Narrow One',
      link: 'https://narrow.one',
      image: '/assets/media/icons/narrowone.png',
      categories: ['all'],
    },
    {
      name: 'Neal.Fun',
      link: 'https://neal.fun',
      image: '/assets/media/icons/nealfun.png',
      categories: ['all'],
    },
    {
      name: 'NGU Idle',
      link: 'https://cache.armorgames.com/files/games/ngu-idle-18444/index.html?v=1559319416',
      image: '/assets/media/icons/nguidle.jpg',
      categories: ['all'],
    },
    {
      name: 'N-Gon',
      link: 'https://landgreen.github.io/sidescroller/',
      image: '/assets/media/icons/NGON.png',
      categories: ['all'],
    },
    {
      name: 'OvO',
      link: 'https://8rlfg0ch3417et18dp8lvps6uo7c3b2c-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://427396048-642845047394716217.preview.editmysite.com/uploads/b/139890129-761103484729797659/files/ovo.xml',
      image: '/assets/media/icons/ovo.webp',
      categories: ['all'],
    },
    {
      name: 'Online Racing Game!',
      link: 'https://jchabin.github.io/cars/',
      image: '/assets/media/icons/OR.png',
      categories: ['all'],
    },
    {
      name: 'Online Soccer M.',
      link: 'https://www.onlinesoccermanager.com/',
      image: '/assets/media/icons/osm.webp',
      categories: ['all'],
    },
    {
      name: "Papa's Bakeria",
      link: 'https://www.silvergames.com/en/papas-bakeria',
      image: '/assets/media/icons/bakeria.webp',
      categories: ['all', 'flash'],
    },
    {
      name: "Papa's Burgeria",
      link: 'https://www.silvergames.com/en/papas-burgeria',
      image: '/assets/media/icons/papas-burgeria.webp',
      categories: ['all', 'flash'],
    },
    {
      name: "Papa's Cheeseria",
      link: 'https://www.silvergames.com/en/papas-cheeseria',
      image: '/assets/media/icons/papas-cheeseria.webp',
      categories: ['all', 'flash'],
    },
    {
      name: "Papa's Cupcakeria",
      link: 'https://www.silvergames.com/en/papa-s-cupcakeria',
      image: '/assets/media/icons/cupcakeria.webp',
      categories: ['all', 'flash'],
    },
    {
      name: "Papa's Donuteria",
      link: 'https://www.silvergames.com/en/papa-s-donuteria',
      image: '/assets/media/icons/papa-s-donuteria.webp',
      categories: ['all', 'flash'],
    },
    {
      name: "Papa's Freezeria",
      link: 'https://www.silvergames.com/en/papa-s-freezeria',
      image: '/assets/media/icons/papas-freezeria.webp',
      categories: ['all', 'flash'],
    },
    {
      name: "Papa's Hot Doggeria",
      link: 'https://www.silvergames.com/en/papa-s-hot-doggeria',
      image: '/assets/media/icons/papa-s-hot-doggeria.webp',
      categories: ['all', 'flash'],
    },
    {
      name: 'Papa Louie 1',
      link: 'https://f.silvergames.com/ruffle/player.php?id=1373',
      image: '/assets/media/icons/louie1.webp',
      categories: ['all', 'flash'],
    },
    {
      name: 'Papa Louie 2',
      link: 'https://f.silvergames.com/emu/waffle/?id=3042',
      image: '/assets/media/icons/louie2.webp',
      categories: ['all', 'flash'],
    },
    {
      name: 'Papa Louie 3',
      link: 'https://f.silvergames.com/emu/waffle/?id=4693',
      image: '/assets/media/icons/papa-louie-3.webp',
      categories: ['all', 'flash'],
    },
    {
      name: "Papa's Pancakeria",
      link: 'https://www.silvergames.com/en/papas-pancakeria',
      image: '/assets/media/icons/papas-pancakeria.webp',
      categories: ['all', 'flash'],
    },
    {
      name: "Papa's Pastaria",
      link: 'https://www.silvergames.com/en/papa-s-pastaria',
      image: '/assets/media/icons/papa-s-pastaria.webp',
      categories: ['all', 'flash'],
    },
    {
      name: "Papa's Pizzeria",
      link: 'https://www.silvergames.com/en/papas-pizzeria',
      image: '/assets/media/icons/papa-s-pizzeria.webp',
      categories: ['all', 'flash'],
    },
    {
      name: "Papa's Scooperia",
      link: 'https://www.silvergames.com/en/papas-scooperia',
      image: '/assets/media/icons/papas-scooperia.webp',
      categories: ['all', 'flash'],
    },
    {
      name: "Papa's Sushiria",
      link: 'https://www.silvergames.com/en/papas-sushiria',
      image: '/assets/media/icons/papas-sushiria.webp',
      categories: ['all', 'flash'],
    },
    {
      name: "Papa's Taco Mia!",
      link: 'https://www.silvergames.com/en/papas-taco-mia',
      image: '/assets/media/icons/papas-taco-mia.webp',
      categories: ['all', 'flash'],
    },
    {
      name: "Papa's Wingeria",
      link: 'https://www.silvergames.com/en/papas-wingeria',
      image: '/assets/media/icons/papas-wingeria.webp',
      categories: ['all', 'flash'],
    },
    {
      name: 'Paper Mario 64',
      link: 'https://math-study.github.io/gba/main/play/index.html?console=n64&game=Paper_Mario_(USA)',
      image: '/assets/media/icons/paper-mario-64.webp',
      categories: ['all', 'emu'],
    },
    {
      name: 'Paper.io',
      link: 'https://paper-io.com/',
      image: '/assets/media/icons/paperio.webp',
      categories: ['all'],
    },
    {
      name: 'Parappa the Rapper',
      link: 'https://retrogamesonline.io/parappa-the-rapper.embed',
      image: 'https://retrogamesonline.io/cache/data/image/game/parappa-the-rapper-1-f220x180.jpg',
      categories: ['all', 'emu'],
    },
    {
      name: 'Parkour Block 3D',
      link: 'https://html5.gamedistribution.com/1461d40bb77f48e6be72489959a1ac04/',
      image: '/assets/media/icons/parkourblock3d.webp',
      categories: ['all'],
    },
    {
      name: 'Precision Client',
      link: 'http://raw.githack.com/3kh0/3kh0-assets/main/precision-client/index.html',
      image: '/assets/media/icons/precision.webp',
      categories: ['all'],
    },
    {
      name: 'Pizza Tower',
      link: 'y8.com/games/pizza_tower',
      image: '/assets/media/icons/pizzatower.png',
      categories: ['all'],
    },
    {
      name: 'Pixel Shooter',
      link: 'https://94bfktj403i6m18as4vkvtreqd0ohci4-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://274019683-173520394482650759.preview.editmysite.com/uploads/b/139890129-131715539788281629/files/ps.xml',
      image: '/assets/media/icons/pixel-shooter.webp',
      categories: ['all'],
    },
    {
      name: 'Pokemon Emerald',
      link: 'https://math-study.github.io/gba/main/play/index.html?console=gba&game=pokemonemerald',
      image: '/assets/media/icons/pokemonemerald.jpeg',
      categories: ['all', 'emu'],
    },
    {
      name: 'Pokemon Heart Gold',
      link: 'https://math-study.github.io/gba/main/play/index.html?console=nds&game=Pokemon_-_HeartGold_Version_(USA)',
      image: '/assets/media/icons/heartgold.webp',
      categories: ['all', 'emu'],
    },
    {
      name: 'Pokemon Showdown',
      link: 'https://play.pokemonshowdown.com',
      image: '/assets/media/icons/showdown.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Powerline.IO',
      link: 'https://powerline.io',
      image: '/assets/media/icons/powerline.jpg',
      categories: ['all', '2P'],
    },
    {
      name: 'PM: Light Platinum',
      link: 'https://www.playroms.net/gba-roms/pokemon-light-platinum/',
      image: '/assets/media/icons/lp.webp',
      categories: ['all', 'emu'],
    },
    {
      name: 'Project Grand Auto Town',
      link: 'https://www.crazygames.com/game/project-grand-auto-town',
      image: '/assets/media/icons/pgat.avif',
      categories: ['all', 'emu'],
    },
    {
      name: 'QWOP',
      link: 'https://foddy.net/Athletics.html?webgl=true',
      image: '/assets/media/icons/qwop.webp',
      categories: ['all'],
    },
    {
      name: 'Rainbow Obby',
      link: 'https://785a4295-96c4-43e5-b237-fb07fc3ef44d.poki-gdn.com/f1d39f75-7a25-41de-86cf-ba00804737b5/index.html',
      image: '/assets/media/icons/rainbowobby.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Rainbow Six Siege',
      link: 'https://play.geforcenow.com/games?game-id=1dd07d47-6601-42f7-80e9-e4d8db08ea1b&amp;lang=en_US&amp;asset-id=01_44417-48c3d8e642e2',
      image: '/assets/media/icons/r6.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Red Ball 1',
      link: 'https://www.silvergames.com/en/red-ball',
      image: '/assets/media/icons/redball1.webp',
      categories: ['all'],
    },
    {
      name: 'Red Ball 2',
      link: 'https://www.silvergames.com/en/red-ball-2',
      image: '/assets/media/icons/redball2.webp',
      categories: ['all'],
    },
    {
      name: 'Red Ball 3',
      link: 'https://www.silvergames.com/en/red-ball-3',
      image: '/assets/media/icons/redball3.png',
      categories: ['all'],
    },
    {
      name: 'Red Ball 4 Volume 1',
      link: 'https://www.silvergames.com/en/red-ball-4',
      image: '/assets/media/icons/redball4.png',
      categories: ['all'],
    },
    {
      name: 'Red Ball 4 Volume 2',
      link: 'https://www.silvergames.com/en/red-ball-4-volume-2',
      image: '/assets/media/icons/redball4vol2.png',
      categories: ['all'],
    },
    {
      name: 'Red Ball 4 Volume 3',
      link: 'https://www.silvergames.com/en/red-ball-4-volume-3',
      image: '/assets/media/icons/redball4vol3.png',
      categories: ['all'],
    },
    {
      name: 'Retro Bowl',
      link: 'https://poki.com/en/g/retro-bowl?campaign=14726801018&adgroup=126978573309&extensionid=&targetid=kwd-165560960&location=9002215&matchtype=e&network=g&device=c&devicemodel=&creative=669894739420&keyword=retro%20bowl&placement=&target=&gclid=Cj0KCQiAj_CrBhD-ARIsAIiMxT-r1YYpPuXKsnvAlNWxSVfSK9bfIzbJBRdIXEmaGqAiI0ZxHfyo1cMaAi47EALw_wcB',
      image: '/assets/media/icons/retro.png',
      categories: ['all', 'sports'],
    },
    {
      name: 'Retro Bowl College',
      link: 'https://poki.com/en/g/retro-bowl-college?campaign=14726801018&adgroup=156012347758&extensionid=&targetid=kwd-2202782471900&location=9002215&matchtype=e&network=g&device=c&devicemodel=&creative=679226345672&keyword=retro%20bowl%20college&placement=&target=&gclid=Cj0KCQiAj_CrBhD-ARIsAIiMxT8Z_8GU2DFpAhMUuxEBUhfOnSlUOq4yEQ9AZjfd9Wdjswzv0bd_Y28aAtlCEALw_wcB',
      image: '/assets/media/icons/retrocollege.png',
      categories: ['all', 'sports'],
    },
    {
      name: 'Red Ball 4 Vol. 3',
      link: 'https://kbhgames.com/game/red-ball-4-volume-3',
      image: '/assets/media/icons/redball4vol3.webp',
      categories: ['all'],
    },
    {
      name: 'Riddle School 1',
      link: 'https://uploads.ungrounded.net/ruffle_wrapper/ruffleembed.html?v=1.0.67&browsermode=default&props=%7B%22ruffle%22%3A%22%2Fruffle_wrapper%2Flib%2Fruffle.js%3F1695474658%22%2C%22public_path%22%3A%22%2Fruffle_wrapper%2Flib%2F%22%2C%22swf%22%3A%22https%3A%2F%2Fuploads.ungrounded.net%2F314000%2F314680_Riddle_School.swf%3F1148577264%22%2C%22vars%22%3A%7B%22NewgroundsAPI_PublisherID%22%3A1%2C%22NewgroundsAPI_SandboxID%22%3A%2265103f0745c96%22%2C%22NewgroundsAPI_SessionID%22%3A%22%22%2C%22NewgroundsAPI_UserName%22%3A%22%26lt%3Bdeleted%26gt%3B%22%2C%22NewgroundsAPI_UserID%22%3A0%2C%22ng_username%22%3A%22%26lt%3Bdeleted%26gt%3B%22%7D%2C%22width%22%3A550%2C%22height%22%3A400%2C%22icon%22%3A%22https%3A%2F%2Fpicon.ngfiles.com%2F314000%2Fflash_314680_card.png%3Ff1607914286%22%2C%22warnOnUnsupportedContent%22%3Afalse%7D',
      image: '/assets/media/icons/riddleschool1.png',
      categories: ['all'],
    },
    {
      name: 'Riddle School 2',
      link: 'https://www.crazygames.com/embed/riddle-school-2',
      image: '/assets/media/icons/rs1.webp',
      categories: ['all'],
    },
    {
      name: 'Risk',
      link: 'https://playclassic.games/games/turn-based-strategy-dos-games-online/play-risk-online/play/',
      image: '/assets/media/icons/risk.webp',
      categories: ['all', 'emu'],
    },
    {
      name: 'Roblox',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.roblox.client&partner=interstellar',
      image: '/assets/media/icons/roblox.png',
      categories: ['all', '2P', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Roblox (NowGG.nl)',
      link: 'https://nowgg.nl/iframe/snippet?app_pkg=com.roblox.client&partner=interstellar',
      image: '/assets/media/icons/astroid.png',
      categories: ['all', 'emu', '2P', 'android'],
    },
    {
      name: 'Robostorm',
      link: 'https://robostorm.io',
      image: '/assets/media/icons/robostorm.jpg',
      categories: ['all', '2P'],
    },
    {
      name: 'Rocket Bot Royale',
      link: 'https://rocketbotroyale2.winterpixel.io/',
      image: '/assets/media/icons/rocketbotroyale.jpg',
      categories: ['all'],
    },
    {
      name: 'Rocket Pult',
      link: 'https://v6p9d9t4.ssl.hwcdn.net/html/565140/index.html',
      image: '/assets/media/icons/rocketpult.webp',
      categories: ['all'],
    },
    {
      name: 'Rocket League',
      link: 'https://play.geforcenow.com/games?game-id=9bcbf5b4-c460-4091-931c-a5a2a1fd9cc2&lang=en_US&asset-id=01_fbb8002b-3a9d-49e9-bd64-9a929c5ae55f',
      image: '/assets/media/icons/rl.webp',
      categories: ['all', '2P', 'sports'],
    },
    {
      name: 'Rocket Pult',
      link: 'https://v6p9d9t4.ssl.hwcdn.net/html/565140/index.html',
      image: '/assets/media/icons/rocketpult.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Rooftop Snipers',
      link: 'https://www.crazygames.com/embed/rooftop-snipers',
      image: '/assets/media/icons/rooftop.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Rooftop Snipers 2',
      link: 'https://poki.com/en/g/rooftop-snipers-2',
      image: '/assets/media/icons/rooftop-snipers-2.png',
      categories: ['all', '2P'],
    },
    {
      name: 'Rotate',
      link: 'https://html5.gamedistribution.com/0faa4468d18e4f7aa2e0161b4fefa193/?gd_sdk_referrer_url=https://gamedistribution.com/games/rotate',
      image: '/assets/media/icons/rotate.jpeg',
      categories: ['all'],
    },
    {
      name: 'Run 3',
      link: 'https://www.coolmathgames.com/0-run-3/play',
      image: '/assets/media/icons/run3.webp',
      categories: ['all'],
    },
    {
      name: 'Sand Spiel',
      link: 'https://sandspiel.club/',
      image: '/assets/media/icons/sand.webp',
      categories: ['all'],
    },
    {
      name: 'Sandboxels',
      link: 'https://sandboxels.r74n.com/',
      image: '/assets/media/icons/sandboxels.webp',
      categories: ['all'],
    },
    {
      name: 'Sandtrix',
      link: 'https://files.crazygames.com/sandtrix/16/index.html',
      image: '/assets/media/icons/sandtrix.jpg',
      categories: ['all'],
    },
    {
      name: 'Saul Run',
      link: 'https://complex-ify.itch.io/saul-goodman',
      image: '/assets/media/icons/saulrun.webp',
      categories: ['all'],
    },
    {
      name: 'Shapez.io',
      link: 'https://shapez.io',
      image: '/assets/media/icons/shapezio.webp',
      categories: ['all'],
    },
    {
      name: 'Skribbl.io',
      link: 'https://skribbl.io/',
      image: '/assets/media/icons/skribbl-io.png',
      categories: ['all', '2P'],
    },
    {
      name: 'Slice Master',
      link: 'https://www.coolmathgames.com/0-slice-master',
      image: '/assets/media/icons/slicemaster.png',
      categories: ['all'],
    },
    {
      name: 'Slither.io',
      link: 'http://slither.io/',
      image: '/assets/media/icons/slither.png',
      categories: ['all'],
    },
    {
      name: 'Slope',
      link: 'https://watchdocumentaries.com/wp-content/uploads/games/slope/',
      image: '/assets/media/icons/slope.webp',
      categories: ['all'],
    },
    {
      name: 'Smash Bros 64',
      link: 'https://myemulator.online/emu?game=MTk2Ng',
      image: '/assets/media/icons/super-smash-bros-64.webp',
      categories: ['all', 'emu'],
    },
    {
      name: 'Smash Karts',
      link: 'https://now.gg/play/tall-team/51304/smash-karts',
      image: '/assets/media/icons/smashkarts.webp',
      categories: ['all', '2P', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Snowball.io',
      link: 'https://games.crazygames.com/en_US/snowball-io/index.html',
      image: '/assets/media/icons/snowball.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Snow Rider 3D',
      link: 'https://html5.gamedistribution.com/rvvASMiM/3b79a8537ebc414fb4f9672a9b8c68c8/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3Nub3dyaWRlcjNkLmNvbS8iLCJwYXJlbnREb21haW4iOiJzbm93cmlkZXIzZC5jb20iLCJ0b3BEb21haW4iOiJzbm93cmlkZXIzZC5jb20iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xNiJ9',
      image: '/assets/media/icons/snowrider3d.jpg',
      categories: ['all'],
    },
    {
      name: 'Soccer Random',
      link: 'https://html5.gamedistribution.com/308d826f20034d7b972f25258c8d0a44/?gd_sdk_referrer_url=https://gamedistribution.com/games/soccer-random',
      image: '/assets/media/icons/soccerrandom.jpeg',
      categories: ['all', '2P', 'sports'],
    },
    {
      name: 'Solar Smash',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.paradyme.solarsmash&partner=interstellar',
      image: '/assets/media/icons/solarsmash.jpg',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Space',
      link: 'https://cowsssss.github.io/Space/',
      image: '/assets/media/icons/space.jpeg',
      categories: ['all'],
    },
    {
      name: 'Space Plan',
      link: 'http://jhollands.co.uk/spaceplan/',
      image: '/assets/media/icons/spaceplan.webp',
      categories: ['all'],
    },
    {
      name: 'Spider-Man: Web of Shadows',
      link: 'https://math-study.github.io/gba/main/play/index.html?console=nds&game=Spider-Man_-_Web_of_Shadows_(USA)_(EnFr)',
      image: '/assets/media/icons/spidermanwos.jpeg',
      categories: ['all', 'emu'],
    },
    {
      name: 'Stack',
      link: 'https://riseuplabs.com/play/stack/',
      image: '/assets/media/icons/stack.png',
      categories: ['all'],
    },
    {
      name: 'Stickman Hook',
      link: 'https://poki.com/en/g/stickman-hook?campaign=14726801018&adgroup=126978546909&extensionid=&targetid=kwd-571112182025&loc_interest_ms=&loc_physical_ms=1009839&mt=&gclid=CjwKCAjwzJq5BhBhEiwAUXM4dmw9FC8YNO6NMR-6MoMKI-qJXqOsIyU6hH8RthPwh8uh0E3e6jY6xxoCg-EQAvD_BwE',
      image: '/assets/media/icons/stickman.png',
      categories: ['all'],
    },
    {
      name: 'Stickwar 2',
      link: 'https://www.miniplay.com/game/stick-war-2',
      image: '/assets/media/icons/stickwar.jpg',
      categories: ['all', '2P'],
    },
    {
      name: 'Stumble Guys',
      link: 'https://www.stumbleguys.com/play',
      image: '/assets/media/icons/stumble-guys.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Stumble Guys (Android)',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.kitkagames.fallbuddies&partner=interstellar',
      image: '/assets/media/icons/stumbleguys.jpeg',
      categories: ['all', 'emu', 'android'],
      now: true,
    },

    {
      name: 'Stumble Guys Clone',
      link: 'https://stumble-guys.io/stumble-guys.embed',
      image: '/assets/media/icons/stumble-guys.webp',
      categories: ['all'],
    },
    {
      name: 'SS: San Francisco',
      link: 'https://gamesgo.net/subway-surfers-san-francisco/',
      image: '/assets/media/icons/san-francisco.webp',
      categories: ['all'],
    },
    {
      name: 'Sugar Sugar',
      link: 'https://66564262-37c6-4095-a731-535342e4bbe4.poki-gdn.com/5bd6e8c6-381d-4de5-9823-96662d29afaf/index.html',
      image: '/assets/media/icons/sugarsugar.webp',
      categories: ['all'],
    },
    {
      name: 'Super Hot',
      link: 'https://www.crazygames.com/game/super-hot',
      image: '/assets/media/icons/hot.jpg',
      categories: ['all', 'sports'],
    },
    {
      name: 'Super Liquid Soccer',
      link: 'https://poki.com/en/g/super-liquid-soccer',
      image: '/assets/media/icons/superliquidsoccer.jpeg',
      categories: ['all'],
    },
    {
      name: 'Super Mario Bros',
      link: 'https://math-study.github.io/gba/main/play/index.html?console=snes&game=Super_Mario_Bros',
      image: '/assets/media/icons/SMB.jpg',
      categories: ['all,', 'emu'],
    },
    {
      name: 'Super Mario 63',
      link: 'https://www.newgrounds.com/portal/view/498969',
      image: '/assets/media/icons/sm63.webp',
      categories: ['all'],
    },
    {
      name: 'Super Mario 64',
      link: 'https://math-study.github.io/gba/main/play/index.html?console=n64&game=Super_Mario_64_(USA)',
      image: '/assets/media/icons/sm64.webp',
      categories: ['all', 'emu'],
    },
    {
      name: 'Super Smash Flash',
      link: 'https://f.kbhgames.com/RS/game.php?r=//f.kbhgames.com/2018/swf/smashflash.swf&amp;w=1521&amp;h=753',
      image: '/assets/media/icons/ssf1.webp',
      categories: ['all', '2P', 'flash'],
    },
    {
      name: 'Super Smash Flash 2',
      link: 'https://www.supersmashflash.com/play/ssf2/',
      image: '/assets/media/icons/ssf2.webp',
      categories: ['all', '2P', 'flash'],
    },
    {
      name: 'Survivor.io',
      link: 'https://html5.gamedistribution.com/rvvASMiM/f1c451e586c04b4c8cba01b0c50d9090/index.html',
      image: '/assets/media/icons/SVI.png',
      categories: ['all,', 'emu'],
    },
    {
      name: 'Supply Chain Idle',
      link: 'http://chat.kongregate.com/gamez/0027/1653/live/index.html?kongregate_game_version=1554392772',
      image: '/assets/media/icons/supplychainlogo.png',
      categories: ['all'],
    },
    {
      name: 'Tamming.io',
      link: 'https://tamming.io',
      image: '/assets/media/icons/tammingio.png',
      categories: ['all', '2P'],
    },
    {
      name: 'Tanuki Sunset',
      link: 'https://watchdocumentaries.com/wp-content/uploads/games/tanuki-sunset',
      image: '/assets/media/icons/tanuki.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Territorial.io',
      link: 'https://territorial.io',
      image: '/assets/media/icons/territorialio.ico',
      categories: ['all', '2P'],
    },
    {
      name: 'Tetris',
      link: 'https://tetris.com/play-tetris',
      image: '/assets/media/icons/tetris.png',
      categories: ['all'],
    },
    {
      name: 'Tetr.io',
      link: 'https://tetr.io/',
      image: '/assets/media/icons/tetrio.ico',
      categories: ['all', '2P'],
    },

    {
      name: 'Temple Run 2',
      link: 'https://watchdocumentaries.com/wp-content/uploads/games/temple-run-2/',
      image: '/assets/media/icons/temple-run-2.webp',
      categories: ['all'],
    },
    {
      name: 'Thelast Royale',
      link: 'https://thelast.io',
      image: '/assets/media/icons/thelast-io.png',
      categories: ['all', '2P'],
    },
    {
      name: 'There Is No Game',
      link: 'https://5dd2d607-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/38959ae1-110b-49ab-86ae-df425fd7862a/index.html',
      image: '/assets/media/icons/thereisnogame.jpg',
      categories: ['all'],
    },
    {
      name: 'The Baby in Yellow',
      link: 'https://www.miniplay.com/game/the-baby-in-yellow-horror-game',
      image: '/assets/media/icons/thebabyinyellow.webp',
      categories: ['all'],
    },
    {
      name: 'The Battle Cats',
      link: 'https://now.gg/apps/ponos-corporation/1587/the-battle-cats.html',
      image: '/assets/media/icons/the-battle-cats.png',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'The Simpsons',
      link: 'https://www.playroms.net/nds-roms/the-simpsons-game/',
      image: '/assets/media/icons/the-simpsons-game.webp',
      categories: ['all'],
    },
    {
      name: 'Tiny Fishing',
      link: 'https://www.dob5.com/d/file/games/tiny-fishing/',
      image: '/assets/media/icons/tinyfishing.jpg',
      categories: ['all'],
    },
    {
      name: 'Toca Life World',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.tocaboca.tocalifeworld&partner=interstellar',
      image: '/assets/media/icons/tocalifeworld.jpg',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Toca Hair Salon 4',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.tocaboca.tocahairsalon4&partner=interstellar',
      image: '/assets/media/icons/tocabocahairsalon4.png',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Toca Kitchen 2',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.tocaboca.tocakitchen2&partner=interstellar',
      image: '/assets/media/icons/tocakitchen2.webp',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'Top War',
      link: 'https://h5.topwargame.com/',
      image: '/assets/media/icons/topwar.jpeg',
      categories: ['all', 'emu'],
    },
    {
      name: 'Tribals.io',
      link: 'https://tribals.io/',
      image: '/assets/media/icons/tribalsio.jpg',
      categories: ['all'],
    },
    {
      name: 'Tritis',
      link: 'https://leognon.com/tritris/',
      image: '/assets/media/icons/tritis.webp',
      categories: ['all'],
    },
    {
      name: "TH's Pro Skater 2",
      link: 'https://myemulator.online/emu?game=MTIwODQ',
      image: '/assets/media/icons/thps2.webp',
      categories: ['all'],
    },
    {
      name: "TH's Pro Skater 3",
      link: 'https://myemulator.online/emu?game=MTY4MTA',
      image: '/assets/media/icons/thps3.webp',
      categories: ['all'],
    },
    {
      name: "TH's Pro Skater 4",
      link: 'https://www.retrogames.onl/2018/09/tony-hawk-pro-skater-4-ps1.html',
      image: '/assets/media/icons/thps4.webp',
      categories: ['all'],
    },
    {
      name: 'Time Shooter',
      link: 'https://www.crazygames.com/game/time-shooter',
      image: '/assets/media/icons/time-shooter.png',
      categories: ['all'],
    },
    {
      name: 'Time Shooter 2',
      link: 'https://www.crazygames.com/game/time-shooter-2',
      image: '/assets/media/icons/timeshooter2.jpeg',
      categories: ['all'],
    },
    {
      name: 'Tribals.io',
      link: 'https://tribals.io',
      image: '/assets/media/icons/tribals.io.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Tunnel Rush',
      link: 'https://basketballlegends.io/github.io/',
      image: '/assets/media/icons/tunnel-rush.png',
      categories: ['all'],
    },
    {
      name: 'Tunnel Rush 2',
      link: 'https://a7e6d137-c3c1-46e6-a3db-04c2d33c98a8.poki-gdn.com/71e6bddd-9b0e-4621-a11a-9503086f69d5/index.html',
      image: '/assets/media/icons/tunnelrush2.png',
      categories: ['all'],
    },
    {
      name: 'Twitch Tetris',
      link: 'https://www.rossipotti.de/ausgabe28/tetris/controls.html',
      image: '/assets/media/icons/twitchtetris.png',
      categories: ['all'],
    },
    {
      name: 'Tyran.io',
      link: 'https://tyran.io',
      image: '/assets/media/icons/tyranio.png',
      categories: ['all', '2P'],
    },
    {
      name: 'Undertale',
      link: 'https://kbhgames.com/game/undertale-enchanted-hd-remake',
      image: '/assets/media/icons/undertale.png',
      categories: ['all'],
    },
    {
      name: 'Unfair Mario',
      link: 'https://www.unfair-mario.com/',
      image: '/assets/media/icons/unfair-mario.webp',
      categories: ['all'],
    },
    {
      name: 'Venge.io',
      link: 'https://venge.io/',
      image: '/assets/media/icons/venge.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Vex 5',
      link: 'https://www.crazygames.com/game/vex-5',
      image: '/assets/media/icons/vex5.webp',
      categories: ['all'],
    },
    {
      name: 'Vex 7',
      link: 'https://www.crazygames.com/game/vex-7',
      image: '/assets/media/icons/vex7.webp',
      categories: ['all'],
    },
    {
      name: 'Volley Random',
      link: 'https://html5.gamedistribution.com/b6f03bdc505e4d78a17379a5a83e206b/?gd_sdk_referrer_url=https://gamedistribution.com/games/volley-random',
      image: '/assets/media/icons/volleyrandom.jpeg',
      categories: ['all', '2P', 'sports'],
    },
    {
      name: 'Voxiom.io',
      link: 'https://voxiom.io/',
      image: '/assets/media/icons/voxiom.webp',
      categories: ['all'],
    },
    {
      name: 'We Become What We Behold',
      link: 'https://www.crazygames.com/game/we-become-what-we-behold',
      image: '/assets/media/icons/wbwwb.avif',
      categories: ['all'],
    },
    {
      name: 'WorldBox',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.mkarpenko.worldbox&partner=interstellar',
      image: '/assets/media/icons/worldbox.webp',
      categories: ['all', 'emu', 'android'],
      now: true,
    },
    {
      name: 'xx142-b2exe',
      link: 'https://www.crazygames.com/embed/xx142-b2-exe',
      image: '/assets/media/icons/xb.png',
      categories: ['all'],
    },
    {
      name: 'YoHoHo.io',
      link: 'https://yohoho.io/',
      image: '/assets/media/icons/yohoho.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Zombs.io',
      link: 'https://zombs.io/',
      image: '/assets/media/icons/zombs-io.webp',
      categories: ['all', '2P'],
    },
    {
      name: 'Zombs Royale',
      link: 'https://zombsroyale.io/',
      image: '/assets/media/icons/zombs-royale.webp',
      categories: ['all', '2P'],
    },
  ]

  function saveToLocal(path) {
    localStorage.setItem('savedPaths', path)
  }

  appsList.sort((a, b) => a.name.localeCompare(b.name))

  const nonPinnedApps = document.querySelector('.container-apps')
  const pinnedApps = document.querySelector('.pinned-apps')
  var pinList = localStorage.getItem('pinnedGames')
  try {
    pinList = pinList.split(',').map(Number)
  } catch {}
  var appInd = 0
  appsList.forEach((app) => {
    let pinNum = appInd
    const columnDiv = document.createElement('div')
    columnDiv.classList.add('column')
    columnDiv.setAttribute('data-category', app.categories.join(' '))

    const pinIcon = document.createElement('i')
    pinIcon.classList.add('fa')
    pinIcon.classList.add('fa-map-pin')
    pinIcon.ariaHidden = true

    const btn = document.createElement('button')
    btn.appendChild(pinIcon)
    btn.style.float = 'right'
    btn.style.backgroundColor = 'rgb(45,45,45)'
    btn.style.borderRadius = '50%'
    btn.style.borderColor = 'transparent'
    btn.style.color = 'white'
    btn.style.top = '-200px'
    btn.style.position = 'relative'
    btn.onclick = function () {
      setPin(pinNum)
    }
    btn.title = 'Pin'

    const link = document.createElement('a')

    function handleClick(app) {
      if (typeof app.say !== 'undefined') {
        alert(app.say)
      }

      if (app.local) {
        saveToLocal(app.link)
        window.location.href = app.link
      } else if (app.localW) {
        saveToLocal(app.link)
        window.location.href = '/w'
      } else if (app.blank) {
        blank(app.link)
      } else if (app.now) {
        now(app.link)
      } else {
        go(app.link)
      }

      return false
    }

    link.onclick = function () {
      handleClick(app)
    }

    const image = document.createElement('img')
    image.width = 145
    image.height = 145
    image.src = app.image
    image.loading = 'lazy'

    const paragraph = document.createElement('p')
    paragraph.textContent = app.name
    if (app.error) {
      paragraph.style.color = 'red'
    }

    link.appendChild(image)
    link.appendChild(paragraph)
    columnDiv.appendChild(link)
    if (appInd != 0) {
      columnDiv.appendChild(btn)
    }

    if (pinList != null && appInd != 0) {
      if (pinContains(appInd, pinList)) {
        pinnedApps.appendChild(columnDiv)
      } else {
        nonPinnedApps.appendChild(columnDiv)
      }
    } else {
      nonPinnedApps.appendChild(columnDiv)
    }
    appInd++
  })
  appsContainer.appendChild(pinnedApps)
  appsContainer.appendChild(nonPinnedApps)
})
function setPin(index) {
  pins = localStorage.getItem('pinnedGames')
  if (pins == null) {
    pins = []
  }
  if (pins == '') {
    pins = []
  } else {
    pins = pins.split(',').map(Number)
  }
  if (pinContains(index, pins)) {
    let remove = pins.indexOf(index)

    pins.splice(remove, 1)
  } else {
    pins.push(index)
  }
  localStorage.setItem('pinnedGames', pins)
  location.reload()
}
function pinContains(i, p) {
  if (p == '') {
    return false
  }
  for (var x = 0; x < p.length; x++) {
    if (p[x] === i) {
      return true
    }
  }
  return false
}

function show_category() {
  var selectedCategories = Array.from(document.querySelectorAll('#category option:checked')).map(
    (option) => option.value
  )
  var games = document.getElementsByClassName('column')

  for (var i = 0; i < games.length; i++) {
    var game = games[i]
    var categories = game.getAttribute('data-category').split(' ')

    if (selectedCategories.length === 0 || selectedCategories.some((category) => categories.includes(category))) {
      game.style.display = 'block'
    } else {
      game.style.display = 'none'
    }
  }
}

function search_bar() {
  var input = document.getElementById('searchbarbottom')
  var filter = input.value.toLowerCase()
  var games = document.getElementsByClassName('column')

  for (var i = 0; i < games.length; i++) {
    var game = games[i]
    var name = game.getElementsByTagName('p')[0].textContent.toLowerCase()

    if (name.includes(filter)) {
      game.style.display = 'block'
    } else {
      game.style.display = 'none'
    }
  }
}

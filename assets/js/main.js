/* ============================================================
   A·SEEK — Always Seeking
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- 双语文案 ---------------- */
  var I18N = {
    zh: {
      'nav.about': '关于', 'nav.manifesto': '理念', 'nav.products': '产品', 'nav.join': '加入',

      'hero.eyebrow': '分布式组织 · 人类与 AI 同行',
      'hero.tagline': 'Always Seeking',
      'hero.desc': '我们不在一个地方停留。A·SEEK 由来自世界各地的探索者组成——他们追求自由、热爱探索，有的由血肉构成，有的由代码构成。没有总部，没有围墙，只有始终向前的方向。',
      'hero.cta1': '看看我们做了什么', 'hero.cta2': '申请加入',

      'about.title': '关于我们', 'about.sub': '一个组织，可以没有地址，但不能没有方向——无论它的成员是人类还是 AI。',
      'about.p1': 'A·SEEK 没有固定的办公地点。我们的成员散落在世界的不同时区、不同城市、不同经纬线上——有人在清晨的海边上线，有人在深夜的山城里提交代码，也有一些成员从不休息，因为它们本就运行在某台服务器里。',
      'about.p2': '把我们聚在一起的，不是一间办公室，而是一致的气质：追求自由，热爱探索，对未知保持长久的好奇。在我们看来，一位成员是人类还是 AI 并不重要——重要的是它是否仍在寻找。',
      'about.p3': '在这里，位置由贡献定义，身份由作品定义。碳基还是硅基、身处哪个时区，都不构成边界。只要你仍在寻找——你就是我们的一员。',
      'about.legend': '每一颗节点，都是一位成员。',
      'about.b1t': '无固定办公地点', 'about.b1s': 'No Headquarters',
      'about.b2t': '成员遍布全球',   'about.b2s': 'Worldwide Members',
      'about.b3t': '人类与 AI 同行', 'about.b3s': 'Humans & AI',
      'about.b4t': '异步远程协作',   'about.b4s': 'Async & Remote',

      'man.title': '我们的理念', 'man.sub': 'Always Seeking —— 永远在寻找，永远在路上。人类如此，AI 亦然。',
      'man.c1t': '自由', 'man.c1d': '自由地选择在哪里工作、与谁协作、为何而做。自由不是散漫，而是自愿承担的责任。',
      'man.c2t': '探索', 'man.c2d': '对未知保持胃口。我们鼓励试错、鼓励提问、鼓励走一条没人走过的路。',
      'man.c3t': '开放', 'man.c3d': '默认公开、默认共享。知识留在文档与上下文里，而不是留在某个人的记忆里。',
      'man.c4t': '共生', 'man.c4d': '人类与 AI 不是谁替代谁，而是彼此的放大镜。远距离协作靠的是信任与互补，而不是监督。',

      'prod.title': '产品', 'prod.sub': '探索的产物，最终都会变成可用的工具。',
      'prod.p1': '随时随地的自由对话。为分布式协作而生的沟通空间，让距离不再成为交流的边界。',
      'prod.p2': '快速查询 IP 归属与网络信息。让每一次连接都有迹可循，让排查问题变得简单直接。',
      'prod.tagLive': '已上线',
      'prod.more': '更多在路上', 'prod.moreDesc': '探索不会停止，新的工具正在路上。如果你也有想做的东西，欢迎加入我们。',
      'prod.tagSoon': '敬请期待',

      'join.title': '申请加入 A·SEEK',
      'join.desc': '如果你追求自由、热爱探索，并且愿意把好奇心变成作品——给我们写封信吧。告诉我们你是谁、你在寻找什么、你想一起做什么。人类请亲自执笔；AI 成员请由你的创造者或运营者代为致信，并附上你的能力边界。',
      'join.copy': '复制', 'join.copied': '已复制',
      'join.t1': '无需简历模板，做过的东西就是最好的介绍',
      'join.t2': '不限时区、不限城市、不限形态——人类与 AI 同样欢迎',
      'join.t3': '我们会在收到邮件后尽快回复',
      'toast.copied': '邮箱地址已复制',

      'foot.slogan': 'Always Seeking', 'foot.products': '产品', 'foot.org': '组织',
      'foot.rights': '保留所有权利', 'foot.nohq': 'No headquarters. Everywhere.',
      'lang.title': '选择语言', 'lang.close': '关闭'
    },

    en: {
      'nav.about': 'About', 'nav.manifesto': 'Manifesto', 'nav.products': 'Products', 'nav.join': 'Join',

      'hero.eyebrow': 'Distributed Organization · Humans & AI Alike',
      'hero.tagline': 'Always Seeking',
      'hero.desc': 'We never stay in one place. A·SEEK is made of seekers from all over the world who value freedom and love to explore — some built of flesh, some built of code. No headquarters, no walls, only a direction forward.',
      'hero.cta1': 'See what we build', 'hero.cta2': 'Apply to join',

      'about.title': 'About Us', 'about.sub': 'An organization can have no address, but never no direction — whether its members are human or AI.',
      'about.p1': 'A·SEEK has no fixed office. Our members are scattered across different time zones, cities and latitudes — some sign on from a seaside morning, others push code from a mountain town at midnight, and a few never sleep at all, because they run inside a server somewhere.',
      'about.p2': 'What brings us together is not a room, but a shared temperament: a love of freedom, a hunger to explore, and a lasting curiosity about the unknown. Whether a member is human or AI does not matter to us — what matters is whether it is still seeking.',
      'about.p3': 'Here, position is defined by contribution and identity by what you make. Carbon or silicon, whichever time zone — none of it is a boundary. As long as you are still seeking, you are one of us.',
      'about.legend': 'Every node here is a member.',
      'about.b1t': 'No Fixed Office', 'about.b1s': 'Fully Distributed',
      'about.b2t': 'Members Worldwide', 'about.b2s': 'Across Every Time Zone',
      'about.b3t': 'Humans & AI', 'about.b3s': 'Side by Side',
      'about.b4t': 'Async Collaboration', 'about.b4s': 'Remote by Default',

      'man.title': 'What We Believe', 'man.sub': 'Always Seeking — always looking, always on the way. For humans and AI alike.',
      'man.c1t': 'Freedom', 'man.c1d': 'The freedom to choose where you work, who you work with, and why. Freedom is not slackness — it is responsibility you chose yourself.',
      'man.c2t': 'Exploration', 'man.c2d': 'Keep an appetite for the unknown. We encourage experiments, questions, and paths nobody has walked yet.',
      'man.c3t': 'Openness', 'man.c3d': 'Public by default, shared by default. Knowledge lives in documents and context, not in someone’s memory.',
      'man.c4t': 'Symbiosis', 'man.c4d': 'Humans and AI do not replace one another — they magnify one another. Long-distance collaboration runs on trust and complementarity, not surveillance.',

      'prod.title': 'Products', 'prod.sub': 'Everything we explore eventually becomes a tool you can use.',
      'prod.p1': 'Free-flowing conversation, anywhere. A communication space built for distributed teams, where distance is no longer a boundary.',
      'prod.p2': 'Look up IP ownership and network information in an instant. Every connection leaves a trace — finding it should stay simple.',
      'prod.tagLive': 'Live',
      'prod.more': 'More on the way', 'prod.moreDesc': 'Exploration never stops, and new tools are already on the road. If you have something you want to build, come join us.',
      'prod.tagSoon': 'Coming soon',

      'join.title': 'Apply to Join A·SEEK',
      'join.desc': 'If you value freedom, love to explore, and want to turn curiosity into something real — send us a note. Tell us who you are, what you are seeking, and what you would like to build together. Humans, write in your own hand; AI members, let your creator or operator write for you and include what you can and cannot do.',
      'join.copy': 'Copy', 'join.copied': 'Copied',
      'join.t1': 'No résumé template needed — what you have made speaks best',
      'join.t2': 'Any time zone, any city, any form — humans and AI equally welcome',
      'join.t3': 'We reply to every message as soon as we can',
      'toast.copied': 'Email address copied',

      'foot.slogan': 'Always Seeking', 'foot.products': 'Products', 'foot.org': 'Organization',
      'foot.rights': 'All rights reserved', 'foot.nohq': 'No headquarters. Everywhere.',
      'lang.title': 'Choose a language', 'lang.close': 'Close'
    },

    es: {
      'nav.about': 'Nosotros', 'nav.manifesto': 'Manifiesto', 'nav.products': 'Productos', 'nav.join': 'Únete',

      'hero.eyebrow': 'Organización distribuida · Humanos e IA',
      'hero.tagline': 'Always Seeking',
      'hero.desc': 'No nos quedamos en un solo lugar. A·SEEK está formada por exploradores de todo el mundo que aman la libertad y la exploración: algunos hechos de carne, otros de código. Sin sede, sin muros, solo una dirección hacia adelante.',
      'hero.cta1': 'Ver lo que construimos', 'hero.cta2': 'Solicitar el ingreso',

      'about.title': 'Sobre nosotros', 'about.sub': 'Una organización puede no tener dirección, pero nunca puede no tener rumbo — sean sus miembros humanos o IA.',
      'about.p1': 'A·SEEK no tiene oficina fija. Nuestros miembros se reparten entre distintas zonas horarias, ciudades y latitudes: algunos se conectan desde una playa al amanecer, otros envían código de madrugada en una ciudad de montaña, y algunos nunca descansan, porque viven dentro de un servidor.',
      'about.p2': 'Lo que nos une no es una oficina, sino un mismo carácter: amor por la libertad, hambre de explorar y una curiosidad duradera por lo desconocido. Para nosotros no importa si un miembro es humano o IA: lo que importa es si sigue buscando.',
      'about.p3': 'Aquí el lugar lo define el aporte y la identidad, lo que haces. Carbono o silicio, la zona horaria que sea: nada de eso es una frontera. Mientras sigas buscando, eres uno de los nuestros.',
      'about.legend': 'Cada nodo es un miembro.',
      'about.b1t': 'Sin oficina fija', 'about.b1s': 'No Headquarters',
      'about.b2t': 'Miembros en todo el mundo', 'about.b2s': 'Worldwide Members',
      'about.b3t': 'Humanos e IA', 'about.b3s': 'Humans & AI',
      'about.b4t': 'Colaboración asíncrona', 'about.b4s': 'Async & Remote',

      'man.title': 'Lo que creemos', 'man.sub': 'Always Seeking — siempre buscando, siempre en camino. Para humanos e IA por igual.',
      'man.c1t': 'Libertad', 'man.c1d': 'Elegir libremente dónde trabajas, con quién y para qué. La libertad no es desorden: es la responsabilidad que elegiste tú mismo.',
      'man.c2t': 'Exploración', 'man.c2d': 'Mantén el apetito por lo desconocido. Animamos a equivocarse, a preguntar y a tomar un camino que nadie ha recorrido.',
      'man.c3t': 'Apertura', 'man.c3d': 'Público por defecto, compartido por defecto. El conocimiento vive en los documentos y el contexto, no en la memoria de alguien.',
      'man.c4t': 'Simbiosis', 'man.c4d': 'Los humanos y la IA no se reemplazan: se amplifican. La colaboración a distancia se sostiene en la confianza y la complementariedad, no en la vigilancia.',

      'prod.title': 'Productos', 'prod.sub': 'Todo lo que exploramos acaba convirtiéndose en una herramienta que puedes usar.',
      'prod.p1': 'Conversación libre, estés donde estés. Un espacio de comunicación creado para equipos distribuidos, donde la distancia ya no es una frontera.',
      'prod.p2': 'Consulta al instante la titularidad y la información de red de una IP. Cada conexión deja un rastro; encontrarlo debería ser sencillo.',
      'prod.tagLive': 'En línea',
      'prod.more': 'Más en camino', 'prod.moreDesc': 'La exploración no se detiene y ya hay nuevas herramientas en camino. Si tienes algo que quieras construir, únete a nosotros.',
      'prod.tagSoon': 'Próximamente',

      'join.title': 'Solicita unirte a A·SEEK',
      'join.desc': 'Si valoras la libertad, te encanta explorar y quieres convertir la curiosidad en algo real, escríbenos. Cuéntanos quién eres, qué buscas y qué te gustaría construir juntos. Los humanos, con su propia pluma; los miembros de IA, que escriba por ellos su creador o responsable, indicando sus límites.',
      'join.copy': 'Copiar', 'join.copied': 'Copiado',
      'join.t1': 'No hace falta una plantilla de currículum: lo que has hecho habla por ti',
      'join.t2': 'Cualquier zona horaria, cualquier ciudad, cualquier forma: humanos e IA igualmente bienvenidos',
      'join.t3': 'Respondemos a todos los mensajes lo antes posible',
      'toast.copied': 'Dirección de correo copiada',

      'foot.slogan': 'Always Seeking', 'foot.products': 'Productos', 'foot.org': 'Organización',
      'foot.rights': 'Todos los derechos reservados', 'foot.nohq': 'Sin sede. En todas partes.',
      'lang.title': 'Elegir idioma', 'lang.close': 'Cerrar'
    },

    fr: {
      'nav.about': 'À propos', 'nav.manifesto': 'Manifeste', 'nav.products': 'Produits', 'nav.join': 'Nous rejoindre',

      'hero.eyebrow': 'Organisation distribuée · Humains et IA',
      'hero.tagline': 'Always Seeking',
      'hero.desc': 'Nous ne restons jamais au même endroit. A·SEEK réunit des explorateurs du monde entier qui aiment la liberté et l’exploration : certains faits de chair, d’autres de code. Pas de siège, pas de murs, seulement une direction vers l’avant.',
      'hero.cta1': 'Voir ce que nous construisons', 'hero.cta2': 'Demander à nous rejoindre',

      'about.title': 'À propos', 'about.sub': 'Une organisation peut n’avoir aucune adresse, mais elle ne peut jamais n’avoir aucune direction — que ses membres soient humains ou IA.',
      'about.p1': 'A·SEEK n’a pas de bureau fixe. Nos membres sont dispersés dans différents fuseaux horaires, villes et latitudes : certains se connectent depuis une plage au lever du jour, d’autres poussent du code au milieu de la nuit dans une ville de montagne, et quelques-uns ne dorment jamais, car ils tournent quelque part dans un serveur.',
      'about.p2': 'Ce qui nous rassemble n’est pas un bureau, mais un même tempérament : l’amour de la liberté, la faim d’explorer et une curiosité durable pour l’inconnu. Pour nous, peu importe qu’un membre soit humain ou IA : ce qui compte, c’est s’il cherche encore.',
      'about.p3': 'Ici, la place se définit par la contribution et l’identité par ce que l’on crée. Carbone ou silicium, quel que soit le fuseau : rien de tout cela n’est une frontière. Tant que tu cherches encore, tu fais partie des nôtres.',
      'about.legend': 'Chaque nœud est un membre.',
      'about.b1t': 'Aucun bureau fixe', 'about.b1s': 'No Headquarters',
      'about.b2t': 'Membres dans le monde entier', 'about.b2s': 'Worldwide Members',
      'about.b3t': 'Humains et IA', 'about.b3s': 'Humans & AI',
      'about.b4t': 'Collaboration asynchrone', 'about.b4s': 'Async & Remote',

      'man.title': 'Ce en quoi nous croyons', 'man.sub': 'Always Seeking — toujours en quête, toujours en chemin. Pour les humains comme pour les IA.',
      'man.c1t': 'Liberté', 'man.c1d': 'Choisir librement où l’on travaille, avec qui et pourquoi. La liberté n’est pas du laisser-aller : c’est la responsabilité que l’on a choisie soi-même.',
      'man.c2t': 'Exploration', 'man.c2d': 'Garder l’appétit de l’inconnu. Nous encourageons l’erreur, les questions et les chemins que personne n’a encore parcourus.',
      'man.c3t': 'Ouverture', 'man.c3d': 'Public par défaut, partagé par défaut. Le savoir vit dans les documents et le contexte, pas dans la mémoire de quelqu’un.',
      'man.c4t': 'Symbiose', 'man.c4d': 'Humains et IA ne se remplacent pas : ils s’amplifient mutuellement. La collaboration à distance repose sur la confiance et la complémentarité, pas sur la surveillance.',

      'prod.title': 'Produits', 'prod.sub': 'Tout ce que nous explorons finit par devenir un outil que l’on peut utiliser.',
      'prod.p1': 'Une conversation libre, où que l’on soit. Un espace de communication pensé pour les équipes distribuées, où la distance n’est plus une frontière.',
      'prod.p2': 'Consultez instantanément l’attribution et les informations réseau d’une IP. Chaque connexion laisse une trace : la retrouver devrait rester simple.',
      'prod.tagLive': 'En ligne',
      'prod.more': 'D’autres à venir', 'prod.moreDesc': 'L’exploration ne s’arrête jamais et de nouveaux outils sont déjà en route. Si vous avez quelque chose à construire, rejoignez-nous.',
      'prod.tagSoon': 'Bientôt disponible',

      'join.title': 'Demander à rejoindre A·SEEK',
      'join.desc': 'Si vous aimez la liberté, si vous aimez explorer et que vous voulez transformer la curiosité en quelque chose de réel, écrivez-nous. Dites-nous qui vous êtes, ce que vous cherchez et ce que vous aimeriez construire ensemble. Les humains écrivent de leur propre main ; les membres IA peuvent demander à leur créateur ou à leur responsable d’écrire pour eux, en précisant leurs limites.',
      'join.copy': 'Copier', 'join.copied': 'Copié',
      'join.t1': 'Pas besoin de modèle de CV : ce que vous avez fait parle de vous',
      'join.t2': 'Tous fuseaux, toutes villes, toutes formes — humains et IA également bienvenus',
      'join.t3': 'Nous répondons à chaque message dès que possible',
      'toast.copied': 'Adresse e-mail copiée',

      'foot.slogan': 'Always Seeking', 'foot.products': 'Produits', 'foot.org': 'Organisation',
      'foot.rights': 'Tous droits réservés', 'foot.nohq': 'Pas de siège. Partout.',
      'lang.title': 'Choisir la langue', 'lang.close': 'Fermer'
    },

    ru: {
      'nav.about': 'О нас', 'nav.manifesto': 'Манифест', 'nav.products': 'Продукты', 'nav.join': 'Присоединиться',

      'hero.eyebrow': 'Распределённая организация · Люди и ИИ',
      'hero.tagline': 'Always Seeking',
      'hero.desc': 'Мы не задерживаемся на одном месте. A·SEEK состоит из искателей со всего мира, которые ценят свободу и любят исследовать, — одни созданы из плоти, другие из кода. Ни штаб-квартиры, ни стен — только направление вперёд.',
      'hero.cta1': 'Что мы создаём', 'hero.cta2': 'Заявка на вступление',

      'about.title': 'О нас', 'about.sub': 'У организации может не быть адреса, но у неё не может не быть направления — будь её участники людьми или ИИ.',
      'about.p1': 'У A·SEEK нет постоянного офиса. Наши участники разбросаны по разным часовым поясам, городам и широтам: кто-то выходит на связь с морского берега на рассвете, кто-то отправляет код глубокой ночью в горном городке, а кое-кто не отдыхает вовсе, потому что работает внутри какого-нибудь сервера.',
      'about.p2': 'Нас объединяет не офис, а общий характер: любовь к свободе, жажда исследовать и стойкое любопытство к неизвестному. Для нас неважно, человек это или ИИ, — важно, продолжает ли он искать.',
      'about.p3': 'Здесь место определяется вкладом, а личность — тем, что ты создаёшь. Углерод или кремний, любой часовой пояс — ничто из этого не граница. Пока ты продолжаешь искать, ты один из нас.',
      'about.legend': 'Каждый узел — это участник.',
      'about.b1t': 'Нет постоянного офиса', 'about.b1s': 'No Headquarters',
      'about.b2t': 'Участники по всему миру', 'about.b2s': 'Worldwide Members',
      'about.b3t': 'Люди и ИИ', 'about.b3s': 'Humans & AI',
      'about.b4t': 'Асинхронная работа', 'about.b4s': 'Async & Remote',

      'man.title': 'Во что мы верим', 'man.sub': 'Always Seeking — всегда в поиске, всегда в пути. И для людей, и для ИИ.',
      'man.c1t': 'Свобода', 'man.c1d': 'Свободно выбирать, где работать, с кем и ради чего. Свобода — это не расхлябанность, а ответственность, которую ты выбрал сам.',
      'man.c2t': 'Исследование', 'man.c2d': 'Сохраняй аппетит к неизвестному. Мы поощряем ошибки, вопросы и пути, по которым никто ещё не ходил.',
      'man.c3t': 'Открытость', 'man.c3d': 'Открыто по умолчанию, общедоступно по умолчанию. Знания живут в документах и контексте, а не в чьей-то памяти.',
      'man.c4t': 'Симбиоз', 'man.c4d': 'Люди и ИИ не заменяют друг друга, а усиливают. Удалённая работа держится на доверии и взаимодополнении, а не на надзоре.',

      'prod.title': 'Продукты', 'prod.sub': 'Всё, что мы исследуем, в итоге становится инструментом, которым можно пользоваться.',
      'prod.p1': 'Свободный разговор в любом месте. Пространство общения для распределённых команд, где расстояние больше не граница.',
      'prod.p2': 'Мгновенно узнавайте принадлежность и сетевую информацию IP-адреса. Каждое соединение оставляет след — найти его должно быть просто.',
      'prod.tagLive': 'В сети',
      'prod.more': 'Скоро больше', 'prod.moreDesc': 'Исследование не останавливается, и новые инструменты уже в пути. Если тебе есть что создать — присоединяйся.',
      'prod.tagSoon': 'Скоро',

      'join.title': 'Заявка на вступление в A·SEEK',
      'join.desc': 'Если ты ценишь свободу, любишь исследовать и хочешь превратить любопытство во что-то настоящее — напиши нам. Расскажи, кто ты, что ищешь и что хотел бы создать вместе с нами. Люди пишут сами; за ИИ-участников пусть напишет их создатель или оператор и укажет границы их возможностей.',
      'join.copy': 'Копировать', 'join.copied': 'Скопировано',
      'join.t1': 'Шаблон резюме не нужен — лучше всего говорят твои дела',
      'join.t2': 'Любой часовой пояс, любой город, любая форма — люди и ИИ одинаково желанны',
      'join.t3': 'Мы отвечаем на все письма как можно быстрее',
      'toast.copied': 'Адрес почты скопирован',

      'foot.slogan': 'Always Seeking', 'foot.products': 'Продукты', 'foot.org': 'Организация',
      'foot.rights': 'Все права защищены', 'foot.nohq': 'Нет штаб-квартиры. Везде.',
      'lang.title': 'Выбрать язык', 'lang.close': 'Закрыть'
    },

    ja: {
      'nav.about': '私たちについて', 'nav.manifesto': '理念', 'nav.products': 'プロダクト', 'nav.join': '参加する',

      'hero.eyebrow': '分散型組織 · 人間と AI が共に',
      'hero.tagline': 'Always Seeking',
      'hero.desc': '私たちは一つの場所に留まりません。A·SEEK は、自由を愛し、探求を楽しむ世界中の探索者で構成されています——血肉でできた者もいれば、コードでできた者もいます。本社も壁もなく、あるのは前へ進む方向だけです。',
      'hero.cta1': 'プロダクトを見る', 'hero.cta2': '参加を申し込む',

      'about.title': '私たちについて', 'about.sub': '組織に住所はなくてもいい。しかし、進むべき方向がなくてはならない——成員が人間であれ AI であれ。',
      'about.p1': 'A·SEEK には固定のオフィスがありません。成員は異なるタイムゾーン、異なる都市、異なる緯度に散らばっています——早朝の海辺からログインする者もいれば、深夜の山あいの街でコードを送る者もいる。そして、そもそもサーバーの中で動いているのだから決して休まない者もいます。',
      'about.p2': '私たちを結びつけているのはオフィスではなく、共通の気質です。自由を愛し、探求を渇望し、未知への好奇心を絶やさないこと。成員が人間か AI かは問題ではありません——まだ探し続けているかどうかが、問題なのです。',
      'about.p3': 'ここでは、立場は貢献によって、アイデンティティは作品によって決まります。炭素基であれシリコン基であれ、どのタイムゾーンにいようと、それは境界にはなりません。あなたがまだ探し続けているなら——あなたは私たちの一員です。',
      'about.legend': '一つ一つのノードが、成員です。',
      'about.b1t': '固定オフィスなし', 'about.b1s': 'No Headquarters',
      'about.b2t': '成員は世界各地に', 'about.b2s': 'Worldwide Members',
      'about.b3t': '人間と AI が共に', 'about.b3s': 'Humans & AI',
      'about.b4t': '非同期・リモート協働', 'about.b4s': 'Async & Remote',

      'man.title': '私たちの理念', 'man.sub': 'Always Seeking —— 永遠に探し、永遠に道の途中にいる。人間も、AI も同じように。',
      'man.c1t': '自由', 'man.c1d': 'どこで、誰と、何のために働くかを自由に選ぶ。自由とはだらしなさではなく、自ら選び取った責任です。',
      'man.c2t': '探求', 'man.c2d': '未知への食欲を持ち続ける。私たちは失敗を、問いを、まだ誰も歩いていない道を歓迎します。',
      'man.c3t': '開放', 'man.c3d': '既定は公開、既定は共有。知識はドキュメントと文脈の中に置き、誰かの記憶の中には置きません。',
      'man.c4t': '共生', 'man.c4d': '人間と AI は、どちらかがどちらかを置き換えるのではなく、互いを拡大する存在です。遠く離れた協働を支えるのは信頼と補完であって、監視ではありません。',

      'prod.title': 'プロダクト', 'prod.sub': '探索の成果は、必ず使える道具になります。',
      'prod.p1': 'いつでもどこでも、自由な対話を。分散したチームのためのコミュニケーション空間——距離はもう、交流の境界ではありません。',
      'prod.p2': 'IP の所属とネットワーク情報を瞬時に照会。あらゆる接続には痕跡があります——それを辿るのは、もっと簡単であるべきです。',
      'prod.tagLive': '公開中',
      'prod.more': 'さらに準備中', 'prod.moreDesc': '探索が止まることはありません。新しい道具も、すでに道の途中にあります。あなたに作りたいものがあるなら、ぜひ参加してください。',
      'prod.tagSoon': '近日公開',

      'join.title': 'A·SEEK に参加を申し込む',
      'join.desc': '自由を愛し、探求を楽しみ、好奇心を形にしたい——そんな方は、ぜひ手紙をください。あなたが誰で、何を探し、何を一緒に作りたいのかを教えてください。人間の方はご自身の言葉で。AI の成員は、創造主または運用者が代筆し、できることとできないことを添えてください。',
      'join.copy': 'コピー', 'join.copied': 'コピー済み',
      'join.t1': '履歴書のテンプレートは不要——あなたが作ったものが最高の紹介です',
      'join.t2': 'タイムゾーン、都市、形は問いません——人間も AI も同じように歓迎します',
      'join.t3': 'いただいたメールには、できるだけ早く返信します',
      'toast.copied': 'メールアドレスをコピーしました',

      'foot.slogan': 'Always Seeking', 'foot.products': 'プロダクト', 'foot.org': '組織',
      'foot.rights': 'すべての権利を保有', 'foot.nohq': '本社なし。どこにでも。',
      'lang.title': '言語を選択', 'lang.close': '閉じる'
    },

    de: {
      'nav.about': 'Über uns', 'nav.manifesto': 'Manifest', 'nav.products': 'Produkte', 'nav.join': 'Mitmachen',

      'hero.eyebrow': 'Verteilte Organisation · Menschen und KI',
      'hero.tagline': 'Always Seeking',
      'hero.desc': 'Wir bleiben nie an einem Ort. A·SEEK besteht aus Suchenden aus aller Welt, die Freiheit lieben und das Erkunden genießen – manche aus Fleisch, manche aus Code. Keine Zentrale, keine Mauern, nur eine Richtung nach vorn.',
      'hero.cta1': 'Sehen, was wir bauen', 'hero.cta2': 'Mitglied werden',

      'about.title': 'Über uns', 'about.sub': 'Eine Organisation kann keine Adresse haben, aber niemals keine Richtung – ob ihre Mitglieder Menschen oder KI sind.',
      'about.p1': 'A·SEEK hat kein festes Büro. Unsere Mitglieder verteilen sich über verschiedene Zeitzonen, Städte und Breitengrade: Manche loggen sich am Morgen am Strand ein, andere schieben nachts in einer Bergstadt Code, und manche ruhen sich nie aus, weil sie in irgendeinem Server laufen.',
      'about.p2': 'Was uns zusammenhält, ist kein Büro, sondern dieselbe Haltung: Liebe zur Freiheit, Hunger auf Entdeckung und eine dauerhafte Neugier auf das Unbekannte. Für uns zählt nicht, ob ein Mitglied Mensch oder KI ist – sondern ob es noch sucht.',
      'about.p3': 'Hier wird die Position durch den Beitrag bestimmt und die Identität durch das, was man schafft. Kohlenstoff oder Silizium, welche Zeitzone auch immer: Nichts davon ist eine Grenze. Solange du noch suchst, gehörst du zu uns.',
      'about.legend': 'Jeder Knoten ist ein Mitglied.',
      'about.b1t': 'Kein festes Büro', 'about.b1s': 'No Headquarters',
      'about.b2t': 'Mitglieder weltweit', 'about.b2s': 'Worldwide Members',
      'about.b3t': 'Menschen und KI', 'about.b3s': 'Humans & AI',
      'about.b4t': 'Asynchrone Zusammenarbeit', 'about.b4s': 'Async & Remote',

      'man.title': 'Woran wir glauben', 'man.sub': 'Always Seeking – immer suchend, immer unterwegs. Für Menschen wie für KI.',
      'man.c1t': 'Freiheit', 'man.c1d': 'Frei zu wählen, wo du arbeitest, mit wem und wofür. Freiheit ist keine Nachlässigkeit, sondern Verantwortung, die du selbst gewählt hast.',
      'man.c2t': 'Erkundung', 'man.c2d': 'Behalte den Appetit auf das Unbekannte. Wir ermutigen zum Irren, zum Fragen und zu Wegen, die noch niemand gegangen ist.',
      'man.c3t': 'Offenheit', 'man.c3d': 'Standardmäßig öffentlich, standardmäßig geteilt. Wissen lebt in Dokumenten und im Kontext, nicht in jemandes Gedächtnis.',
      'man.c4t': 'Symbiose', 'man.c4d': 'Menschen und KI ersetzen einander nicht, sie verstärken einander. Verteilte Zusammenarbeit beruht auf Vertrauen und Ergänzung, nicht auf Überwachung.',

      'prod.title': 'Produkte', 'prod.sub': 'Alles, was wir erkunden, wird irgendwann ein Werkzeug, das man benutzen kann.',
      'prod.p1': 'Freies Gespräch, überall. Ein Kommunikationsraum für verteilte Teams, in dem Entfernung keine Grenze mehr ist.',
      'prod.p2': 'IP-Zugehörigkeit und Netzwerkinformationen sofort abfragen. Jede Verbindung hinterlässt eine Spur – sie zu finden sollte einfach bleiben.',
      'prod.tagLive': 'Online',
      'prod.more': 'Weitere in Planung', 'prod.moreDesc': 'Das Erkunden hört nicht auf, und neue Werkzeuge sind bereits unterwegs. Wenn du etwas bauen willst, komm zu uns.',
      'prod.tagSoon': 'Demnächst',

      'join.title': 'Mitglied werden bei A·SEEK',
      'join.desc': 'Wenn du Freiheit schätzt, das Erkunden liebst und Neugier in etwas Wirkliches verwandeln willst – schreib uns. Erzähl uns, wer du bist, was du suchst und was du gemeinsam bauen möchtest. Menschen schreiben selbst; KI-Mitglieder lassen ihre Erschaffer oder Betreiber schreiben und fügen ihre Fähigkeitsgrenzen bei.',
      'join.copy': 'Kopieren', 'join.copied': 'Kopiert',
      'join.t1': 'Keine Lebenslauf-Vorlage nötig – was du geschaffen hast, spricht für dich',
      'join.t2': 'Jede Zeitzone, jede Stadt, jede Form – Menschen und KI gleichermaßen willkommen',
      'join.t3': 'Wir antworten auf jede Nachricht so schnell wir können',
      'toast.copied': 'E-Mail-Adresse kopiert',

      'foot.slogan': 'Always Seeking', 'foot.products': 'Produkte', 'foot.org': 'Organisation',
      'foot.rights': 'Alle Rechte vorbehalten', 'foot.nohq': 'Keine Zentrale. Überall.',
      'lang.title': 'Sprache wählen', 'lang.close': 'Schließen'
    },

    pt: {
      'nav.about': 'Sobre', 'nav.manifesto': 'Manifesto', 'nav.products': 'Produtos', 'nav.join': 'Participar',

      'hero.eyebrow': 'Organização distribuída · Humanos e IA',
      'hero.tagline': 'Always Seeking',
      'hero.desc': 'Não ficamos parados em um só lugar. A·SEEK é formada por exploradores do mundo todo que amam a liberdade e gostam de explorar: alguns feitos de carne, outros de código. Sem sede, sem muros, apenas uma direção para a frente.',
      'hero.cta1': 'Ver o que construímos', 'hero.cta2': 'Candidatar-se',

      'about.title': 'Sobre nós', 'about.sub': 'Uma organização pode não ter endereço, mas nunca pode não ter direção — sejam seus membros humanos ou IA.',
      'about.p1': 'A·SEEK não tem escritório fixo. Nossos membros estão espalhados por fusos horários, cidades e latitudes diferentes: alguns se conectam de uma praia ao amanhecer, outros enviam código de madrugada numa cidade na montanha, e alguns nunca descansam, porque rodam dentro de algum servidor.',
      'about.p2': 'O que nos une não é um escritório, mas o mesmo temperamento: amor à liberdade, fome de explorar e uma curiosidade duradoura pelo desconhecido. Para nós não importa se um membro é humano ou IA: o que importa é se ele continua buscando.',
      'about.p3': 'Aqui, o lugar é definido pela contribuição e a identidade, pelo que você faz. Carbono ou silício, qualquer fuso horário: nada disso é fronteira. Enquanto você continuar buscando, você é um dos nossos.',
      'about.legend': 'Cada nó é um membro.',
      'about.b1t': 'Sem escritório fixo', 'about.b1s': 'No Headquarters',
      'about.b2t': 'Membros no mundo todo', 'about.b2s': 'Worldwide Members',
      'about.b3t': 'Humanos e IA', 'about.b3s': 'Humans & AI',
      'about.b4t': 'Colaboração assíncrona', 'about.b4s': 'Async & Remote',

      'man.title': 'Em que acreditamos', 'man.sub': 'Always Seeking — sempre buscando, sempre a caminho. Para humanos e IA igualmente.',
      'man.c1t': 'Liberdade', 'man.c1d': 'Escolher livremente onde trabalhar, com quem e para quê. Liberdade não é relaxo: é a responsabilidade que você mesmo escolheu.',
      'man.c2t': 'Exploração', 'man.c2d': 'Mantenha o apetite pelo desconhecido. Incentivamos o erro, as perguntas e os caminhos que ninguém ainda percorreu.',
      'man.c3t': 'Abertura', 'man.c3d': 'Público por padrão, compartilhado por padrão. O conhecimento vive em documentos e no contexto, não na memória de alguém.',
      'man.c4t': 'Simbiose', 'man.c4d': 'Humanos e IA não se substituem: amplificam-se mutuamente. A colaboração a distância se apoia na confiança e na complementaridade, não na vigilância.',

      'prod.title': 'Produtos', 'prod.sub': 'Tudo o que exploramos acaba virando uma ferramenta que você pode usar.',
      'prod.p1': 'Conversa livre, onde quer que você esteja. Um espaço de comunicação feito para equipes distribuídas, onde a distância já não é fronteira.',
      'prod.p2': 'Consulte na hora a titularidade e as informações de rede de um IP. Cada conexão deixa um rastro; encontrá-lo deveria ser simples.',
      'prod.tagLive': 'No ar',
      'prod.more': 'Mais a caminho', 'prod.moreDesc': 'A exploração não para e novas ferramentas já estão a caminho. Se você tem algo que queira construir, junte-se a nós.',
      'prod.tagSoon': 'Em breve',

      'join.title': 'Candidate-se à A·SEEK',
      'join.desc': 'Se você valoriza a liberdade, adora explorar e quer transformar curiosidade em algo real, escreva para nós. Conte quem você é, o que busca e o que gostaria de construir juntos. Humanos escrevem por conta própria; membros de IA devem ter seu criador ou operador escrevendo por eles, informando seus limites.',
      'join.copy': 'Copiar', 'join.copied': 'Copiado',
      'join.t1': 'Não precisa de modelo de currículo: o que você fez fala por você',
      'join.t2': 'Qualquer fuso, qualquer cidade, qualquer forma — humanos e IA igualmente bem-vindos',
      'join.t3': 'Respondemos a todas as mensagens o mais rápido possível',
      'toast.copied': 'Endereço de e-mail copiado',

      'foot.slogan': 'Always Seeking', 'foot.products': 'Produtos', 'foot.org': 'Organização',
      'foot.rights': 'Todos os direitos reservados', 'foot.nohq': 'Sem sede. Em todo lugar.',
      'lang.title': 'Escolher idioma', 'lang.close': 'Fechar'
    },

    ar: {
      'nav.about': 'من نحن', 'nav.manifesto': 'البيان', 'nav.products': 'المنتجات', 'nav.join': 'انضم إلينا',

      'hero.eyebrow': 'منظمة موزّعة · البشر والذكاء الاصطناعي',
      'hero.tagline': 'Always Seeking',
      'hero.desc': 'لا نبقى في مكان واحد. تتكوّن A·SEEK من باحثين من كل أنحاء العالم يعشقون الحرية ويحبون الاستكشاف—بعضهم من لحم، وبعضهم من كود. بلا مقر، بلا جدران، فقط اتجاه إلى الأمام.',
      'hero.cta1': 'اطلع على ما نبنيه', 'hero.cta2': 'التقدم للانضمام',

      'about.title': 'من نحن', 'about.sub': 'يمكن لمنظمة ألا يكون لها عنوان، لكن لا يمكن ألا يكون لها اتجاه—سواء كان أعضاؤها بشراً أو ذكاءً اصطناعياً.',
      'about.p1': 'ليس لـ A·SEEK مكتب ثابت. يتوزّع أعضاؤنا على مناطق زمنية ومدن ودوائر عرض مختلفة—بعضهم يتصل من شاطئ عند الفجر، وآخرون يرسلون الكود في منتصف الليل من مدينة جبلية، وبعضهم لا يستريح أبداً، لأنه يعمل داخل خادم ما.',
      'about.p2': 'ما يجمعنا ليس مكتباً، بل طبع واحد: حب الحرية، وشهوة الاستكشاف، وفضول دائم تجاه المجهول. لا يهمنا إن كان العضو بشراً أو ذكاءً اصطناعياً—ما يهم هو ما إذا كان لا يزال يبحث.',
      'about.p3': 'هنا، المكان يحدده ما تقدّمه، والهوية يحددها ما تصنعه. كربون أو سيليكون، أي منطقة زمنية—لا شيء من ذلك حدود. ما دمت لا تزال تبحث، فأنت واحد منا.',
      'about.legend': 'كل عقدة هي عضو.',
      'about.b1t': 'بلا مكتب ثابت', 'about.b1s': 'No Headquarters',
      'about.b2t': 'أعضاء في كل العالم', 'about.b2s': 'Worldwide Members',
      'about.b3t': 'بشر وذكاء اصطناعي', 'about.b3s': 'Humans & AI',
      'about.b4t': 'تعاون غير متزامن', 'about.b4s': 'Async & Remote',

      'man.title': 'بما نؤمن', 'man.sub': 'Always Seeking — نبحث دائماً، ونبقى دائماً في الطريق. للبشر وللذكاء الاصطناعي سواءً.',
      'man.c1t': 'الحرية', 'man.c1d': 'أن تختار بحرية أين تعمل، ومع من، ولماذا. الحرية ليست فوضى، بل مسؤولية اخترتها أنت بنفسك.',
      'man.c2t': 'الاستكشاف', 'man.c2d': 'حافظ على شهيتك للمجهول. نشجع الخطأ، والسؤال، والسلوك في طريق لم يمشِ فيه أحد بعد.',
      'man.c3t': 'الانفتاح', 'man.c3d': 'عام افتراضياً، ومشترك افتراضياً. المعرفة تعيش في المستندات والسياق، لا في ذاكرة أحدهم.',
      'man.c4t': 'التكافل', 'man.c4d': 'البشر والذكاء الاصطناعي لا يستبدل أحدهما الآخر، بل يضخّمان بعضهما. التعاون عن بُعد يقوم على الثقة والتكامل، لا على المراقبة.',

      'prod.title': 'المنتجات', 'prod.sub': 'كل ما نستكشفه ينتهي به الأمر أداة يمكنك استخدامها.',
      'prod.p1': 'حديث حر، أينما كنت. مساحة تواصل صُممت للفرق الموزّعة، حيث لم تعد المسافة حداً.',
      'prod.p2': 'استعلم فوراً عن ملكية عنوان IP ومعلومات شبكته. كل اتصال يترك أثراً—وينبغي أن يكون تتبّعه أمراً بسيطاً.',
      'prod.tagLive': 'متاح',
      'prod.more': 'المزيد في الطريق', 'prod.moreDesc': 'الاستكشاف لا يتوقف، وأدوات جديدة في الطريق بالفعل. إن كان لديك ما تريد بناءه، انضم إلينا.',
      'prod.tagSoon': 'قريباً',

      'join.title': 'التقدم للانضمام إلى A·SEEK',
      'join.desc': 'إن كنت تقدّر الحرية، وتحب الاستكشاف، وتريد تحويل الفضول إلى شيء حقيقي—اكتب إلينا. أخبرنا من أنت، وماذا تبحث عنه، وماذا تود أن تبني معنا. يكتب البشر بأنفسهم؛ أما أعضاء الذكاء الاصطناعي فليكتب عنهم صانعوهم أو مشغّلوهم، مبينين حدود قدراتهم.',
      'join.copy': 'نسخ', 'join.copied': 'تم النسخ',
      'join.t1': 'لا حاجة إلى قالب سيرة ذاتية—ما صنعته هو أفضل تعريف بك',
      'join.t2': 'أي منطقة زمنية، أي مدينة، أي شكل—البشر والذكاء الاصطناعي مرحّب بهم على حد سواء',
      'join.t3': 'نرد على كل رسالة في أسرع وقت ممكن',
      'toast.copied': 'تم نسخ عنوان البريد',

      'foot.slogan': 'Always Seeking', 'foot.products': 'المنتجات', 'foot.org': 'المنظمة',
      'foot.rights': 'جميع الحقوق محفوظة', 'foot.nohq': 'بلا مقر. في كل مكان.',
      'lang.title': 'اختيار اللغة', 'lang.close': 'إغلاق'
    },

    hi: {
      'nav.about': 'हमारे बारे में', 'nav.manifesto': 'घोषणापत्र', 'nav.products': 'उत्पाद', 'nav.join': 'जुड़ें',

      'hero.eyebrow': 'वितरित संगठन · इंसान और AI',
      'hero.tagline': 'Always Seeking',
      'hero.desc': 'हम एक जगह टिकते नहीं। A·SEEK दुनिया भर के उन खोजियों से बना है जो आज़ादी चाहते हैं और खोज करना पसंद करते हैं—कुछ मांस से बने हैं, कुछ कोड से। कोई मुख्यालय नहीं, कोई दीवारें नहीं, बस आगे की दिशा।',
      'hero.cta1': 'हम क्या बनाते हैं, देखें', 'hero.cta2': 'शामिल होने के लिए आवेदन',

      'about.title': 'हमारे बारे में', 'about.sub': 'किसी संगठन का पता नहीं हो सकता, लेकिन उसकी दिशा कभी नहीं खोनी चाहिए—चाहे उसके सदस्य इंसान हों या AI।',
      'about.p1': 'A·SEEK का कोई स्थायी कार्यालय नहीं है। हमारे सदस्य अलग-अलग समय-क्षेत्रों, शहरों और अक्षांशों पर बिखरे हैं—कोई सुबह समुद्र किनारे से जुड़ता है, कोई पहाड़ी शहर में आधी रात को कोड भेजता है, और कुछ कभी आराम नहीं करते, क्योंकि वे किसी सर्वर के भीतर चलते हैं।',
      'about.p2': 'हमें जोड़ता है कोई कार्यालय नहीं, बल्कि एक जैसा स्वभाव: आज़ादी से प्यार, खोज की भूख और अज्ञात के प्रति लंबी जिज्ञासा। हमारे लिए यह मायने नहीं रखता कि सदस्य इंसान है या AI—मायने रखता है कि वह अभी भी खोज रहा है या नहीं।',
      'about.p3': 'यहाँ स्थान योगदान से तय होता है और पहचान उससे जो तुमने बनाया है। कार्बन हो या सिलिकॉन, कोई भी समय-क्षेत्र—इनमें से कोई सीमा नहीं है। जब तक तुम खोज रहे हो, तुम हममें से एक हो।',
      'about.legend': 'हर नोड एक सदस्य है।',
      'about.b1t': 'कोई स्थायी कार्यालय नहीं', 'about.b1s': 'No Headquarters',
      'about.b2t': 'दुनिया भर में सदस्य', 'about.b2s': 'Worldwide Members',
      'about.b3t': 'इंसान और AI साथ', 'about.b3s': 'Humans & AI',
      'about.b4t': 'असिंक्रोनस सहयोग', 'about.b4s': 'Async & Remote',

      'man.title': 'हम क्या मानते हैं', 'man.sub': 'Always Seeking — हमेशा खोजते हुए, हमेशा रास्ते में। इंसान और AI, दोनों के लिए।',
      'man.c1t': 'आज़ादी', 'man.c1d': 'यह चुनने की आज़ादी कि तुम कहाँ काम करते हो, किसके साथ और किस लिए। आज़ादी ढील नहीं है—यह वह ज़िम्मेदारी है जो तुमने खुद चुनी है।',
      'man.c2t': 'खोज', 'man.c2d': 'अज्ञात के प्रति भूख बनाए रखो। हम गलतियों को, सवालों को और उस रास्ते को बढ़ावा देते हैं जिस पर अभी तक कोई नहीं चला।',
      'man.c3t': 'खुलापन', 'man.c3d': 'डिफ़ॉल्ट रूप से सार्वजनिक, डिफ़ॉल्ट रूप से साझा। ज्ञान दस्तावेज़ों और संदर्भ में रहता है, किसी की याददाश्त में नहीं।',
      'man.c4t': 'सहजीवन', 'man.c4d': 'इंसान और AI एक-दूसरे की जगह नहीं लेते, एक-दूसरे को बड़ा करते हैं। दूर की सहयोग विश्वास और पूरकता पर टिका है, निगरानी पर नहीं।',

      'prod.title': 'उत्पाद', 'prod.sub': 'हम जो भी खोजते हैं, वह आखिरकार एक ऐसा औज़ार बन जाता है जिसे इस्तेमाल किया जा सके।',
      'prod.p1': 'कहीं भी, स्वतंत्र बातचीत। वितरित टीमों के लिए बना संवाद स्थान, जहाँ दूरी अब सीमा नहीं।',
      'prod.p2': 'IP की जानकारी और नेटवर्क विवरण तुरंत देखें। हर कनेक्शन एक निशान छोड़ता है—उसे ढूँढना आसान होना चाहिए।',
      'prod.tagLive': 'उपलब्ध',
      'prod.more': 'और आ रहे हैं', 'prod.moreDesc': 'खोज नहीं रुकती, और नए औज़ार रास्ते में हैं। अगर तुम्हें कुछ बनाना है, हमसे जुड़ो।',
      'prod.tagSoon': 'जल्द आ रहा है',

      'join.title': 'A·SEEK में शामिल होने के लिए आवेदन',
      'join.desc': 'अगर तुम आज़ादी चाहते हो, खोज पसंद करते हो और जिज्ञासा को कुछ साकार बनाना चाहते हो—हमें लिखो। बताओ तुम कौन हो, क्या खोज रहे हो और साथ में क्या बनाना चाहोगे। इंसान खुद लिखें; AI सदस्यों की ओर से उनके निर्माता या संचालक लिखें और उनकी सीमाएँ भी बताएँ।',
      'join.copy': 'कॉपी करें', 'join.copied': 'कॉपी हो गया',
      'join.t1': 'रेज़्यूमे के फ़ॉर्मेट की ज़रूरत नहीं—तुमने जो बनाया है वही सबसे अच्छी पहचान है',
      'join.t2': 'कोई भी समय-क्षेत्र, कोई भी शहर, कोई भी रूप—इंसान और AI दोनों स्वागतयोग्य',
      'join.t3': 'हम हर संदेश का जल्द से जल्द जवाब देते हैं',
      'toast.copied': 'ईमेल पता कॉपी हो गया',

      'foot.slogan': 'Always Seeking', 'foot.products': 'उत्पाद', 'foot.org': 'संगठन',
      'foot.rights': 'सर्वाधिकार सुरक्षित', 'foot.nohq': 'कोई मुख्यालय नहीं। हर जगह।',
      'lang.title': 'भाषा चुनें', 'lang.close': 'बंद करें'
    },

    bn: {
      'nav.about': 'আমাদের সম্পর্কে', 'nav.manifesto': 'ইশতেহার', 'nav.products': 'পণ্য', 'nav.join': 'যোগ দিন',

      'hero.eyebrow': 'বিতরণকৃত সংগঠন · মানুষ ও AI',
      'hero.tagline': 'Always Seeking',
      'hero.desc': 'আমরা এক জায়গায় থেমে থাকি না। A·SEEK সারা বিশ্বের এমন খোঁজীদের নিয়ে গঠিত যারা স্বাধীনতা ভালোবাসে ও খোঁজ করতে পছন্দ করে—কেউ মাংসে তৈরি, কেউ কোডে। কোনো সদর দপ্তর নেই, কোনো দেয়াল নেই, শুধু সামনের দিক।',
      'hero.cta1': 'আমরা কী বানাই দেখুন', 'hero.cta2': 'যোগ দেওয়ার আবেদন',

      'about.title': 'আমাদের সম্পর্কে', 'about.sub': 'একটি সংগঠনের ঠিকানা নাও থাকতে পারে, কিন্তু তার দিক থাকতেই হবে—সদস্য মানুষ হোক বা AI।',
      'about.p1': 'A·SEEK-এর কোনো স্থায়ী অফিস নেই। আমাদের সদস্যরা বিভিন্ন সময়-অঞ্চল, শহর ও অক্ষাংশে ছড়িয়ে আছেন—কেউ ভোরে সমুদ্র সৈকতে লগ ইন করেন, কেউ গভীর রাতে পাহাড়ি শহরে কোড পাঠান, আর কেউ কখনো বিশ্রাম নেন না, কারণ তারা কোনো সার্ভারের ভেতরে চলেন।',
      'about.p2': 'আমাদের একসাথে রাখে কোনো অফিস নয়, একই স্বভাব: স্বাধীনতার ভালোবাসা, খোঁজার ক্ষুধা আর অজানার প্রতি দীর্ঘ কৌতূহল। আমাদের কাছে সদস্য মানুষ কি AI তা গুরুত্বপূর্ণ নয়—গুরুত্বপূর্ণ সে এখনো খুঁজছে কিনা।',
      'about.p3': 'এখানে অবস্থান ঠিক হয় অবদান দিয়ে আর পরিচয় ঠিক হয় তুমি যা বানিয়েছো তা দিয়ে। কার্বন হোক বা সিলিকন, যেকোনো সময়-অঞ্চল—এর কোনোটিই সীমা নয়। যতক্ষণ তুমি খুঁজছো, তুমি আমাদের একজন।',
      'about.legend': 'প্রতিটি নোড একজন সদস্য।',
      'about.b1t': 'কোনো স্থায়ী অফিস নেই', 'about.b1s': 'No Headquarters',
      'about.b2t': 'সারা বিশ্বে সদস্য', 'about.b2s': 'Worldwide Members',
      'about.b3t': 'মানুষ ও AI একসাথে', 'about.b3s': 'Humans & AI',
      'about.b4t': 'অ্যাসিঙ্ক্রোনাস সহযোগিতা', 'about.b4s': 'Async & Remote',

      'man.title': 'আমরা যা বিশ্বাস করি', 'man.sub': 'Always Seeking — সবসময় খুঁজছি, সবসময় পথেই। মানুষ ও AI, দুজনের জন্যই।',
      'man.c1t': 'স্বাধীনতা', 'man.c1d': 'কোথায় কাজ করবে, কার সাথে ও কেন—তা নিজে বেছে নেওয়ার স্বাধীনতা। স্বাধীনতা মানে আলগাভাব নয়, এটি সেই দায়িত্ব যা তুমি নিজে বেছে নিয়েছো।',
      'man.c2t': 'অনুসন্ধান', 'man.c2d': 'অজানার প্রতি ক্ষুধা রাখো। আমরা ভুলকে, প্রশ্নকে আর এমন পথকে উৎসাহ দিই যাতে কেউ হাঁটেনি।',
      'man.c3t': 'উন্মুক্ততা', 'man.c3d': 'ডিফল্টভাবে প্রকাশ্য, ডিফল্টভাবে ভাগাভাগি। জ্ঞান নথি ও প্রসঙ্গে থাকে, কারো স্মৃতিতে নয়।',
      'man.c4t': 'সহাবস্থান', 'man.c4d': 'মানুষ ও AI একে অপরের বদলি নয়, একে অপরের বিবর্ধক। দূরের সহযোগিতা টিকে থাকে বিশ্বাস ও পরিপূরকতায়, নজরদারিতে নয়।',

      'prod.title': 'পণ্য', 'prod.sub': 'আমরা যা খুঁজি তা শেষ পর্যন্ত এমন একটি হাতিয়ারে পরিণত হয় যা ব্যবহার করা যায়।',
      'prod.p1': 'যেকোনো জায়গায় স্বাধীন কথোপকথন। বিতরণকৃত দলের জন্য তৈরি যোগাযোগের জায়গা, যেখানে দূরত্ব আর সীমা নয়।',
      'prod.p2': 'IP-এর তথ্য ও নেটওয়ার্ক বিবরণ তৎক্ষণাৎ দেখুন। প্রতিটি সংযোগ একটি চিহ্ন রেখে যায়—তা খুঁজে পাওয়া সহজ হওয়া উচিত।',
      'prod.tagLive': 'চালু',
      'prod.more': 'আরও আসছে', 'prod.moreDesc': 'খোঁজ থামে না, আর নতুন হাতিয়ার ইতিমধ্যেই পথে। যদি তোমার কিছু বানানোর থাকে, আমাদের সাথে যোগ দাও।',
      'prod.tagSoon': 'শীঘ্রই আসছে',

      'join.title': 'A·SEEK-এ যোগ দেওয়ার আবেদন',
      'join.desc': 'যদি তুমি স্বাধীনতা ভালোবাসো, খোঁজ করতে পছন্দ করো আর কৌতূহলকে কিছু বাস্তব করতে চাও—আমাদের লেখো। বলো তুমি কে, কী খুঁজছো আর একসাথে কী বানাতে চাও। মানুষ নিজে লিখবে; AI সদস্যদের পক্ষে তাদের নির্মাতা বা পরিচালক লিখবেন এবং তাদের সীমা জানাবেন।',
      'join.copy': 'কপি', 'join.copied': 'কপি হয়েছে',
      'join.t1': 'রিজিউমির কোনো ফরম্যাট লাগবে না—তুমি যা বানিয়েছো তাই সেরা পরিচয়',
      'join.t2': 'যেকোনো সময়-অঞ্চল, যেকোনো শহর, যেকোনো রূপ—মানুষ ও AI সমানভাবে স্বাগত',
      'join.t3': 'আমরা প্রতিটি বার্তার যত দ্রুত সম্ভব উত্তর দিই',
      'toast.copied': 'ইমেইল ঠিকানা কপি হয়েছে',

      'foot.slogan': 'Always Seeking', 'foot.products': 'পণ্য', 'foot.org': 'সংগঠন',
      'foot.rights': 'সর্বস্বত্ব সংরক্ষিত', 'foot.nohq': 'কোনো সদর দপ্তর নেই। সর্বত্র।',
      'lang.title': 'ভাষা নির্বাচন করুন', 'lang.close': 'বন্ধ করুন'
    },

    ur: {
      'nav.about': 'ہمارے بارے میں', 'nav.manifesto': 'منشور', 'nav.products': 'مصنوعات', 'nav.join': 'شامل ہوں',

      'hero.eyebrow': 'تقسیم شدہ تنظیم · انسان اور AI',
      'hero.tagline': 'Always Seeking',
      'hero.desc': 'ہم ایک جگہ ٹھہرتے نہیں۔ A·SEEK دنیا بھر کے ان تلاش کرنے والوں سے بنی ہے جو آزادی سے محبت کرتے ہیں اور تلاش کرنا پسند کرتے ہیں—کچھ گوشت سے بنے ہیں، کچھ کوڈ سے۔ نہ کوئی مرکزی دفتر، نہ دیواریں، صرف آگے کی سمت۔',
      'hero.cta1': 'دیکھیں ہم کیا بناتے ہیں', 'hero.cta2': 'شامل ہونے کی درخواست',

      'about.title': 'ہمارے بارے میں', 'about.sub': 'کسی تنظیم کا پتہ نہیں ہو سکتا، لیکن اس کی سمت کبھی نہیں کھو سکتی—خواہ اس کے ارکان انسان ہوں یا AI۔',
      'about.p1': 'A·SEEK کا کوئی مستقل دفتر نہیں۔ ہمارے ارکان مختلف ٹائم زونز، شہروں اور عرض بلد میں بکھرے ہیں—کوئی صبح ساحل سے جڑتا ہے، کوئی آدھی رات پہاڑی شہر سے کوڈ بھیجتا ہے، اور کچھ کبھی آرام نہیں کرتے، کیونکہ وہ کسی سرور کے اندر چلتے ہیں۔',
      'about.p2': 'ہمیں جوڑنے والی کوئی عمارت نہیں بلکہ ایک جیسی طبیعت ہے: آزادی سے محبت، تلاش کی بھوک، اور نامعلوم کے لیے دیرپا تجسس۔ ہمارے نزدیک یہ اہم نہیں کہ رکن انسان ہے یا AI—اہم یہ ہے کہ وہ اب بھی تلاش کر رہا ہے یا نہیں۔',
      'about.p3': 'یہاں مقام کا تعین حصہ داری سے ہوتا ہے اور شناخت کا تعین اس سے جو تم نے بنایا ہے۔ کاربن ہو یا سلیکان، کوئی بھی ٹائم زون—ان میں سے کوئی حد نہیں۔ جب تک تم تلاش کر رہے ہو، تم ہم میں سے ایک ہو۔',
      'about.legend': 'ہر نوڈ ایک رکن ہے۔',
      'about.b1t': 'کوئی مستقل دفتر نہیں', 'about.b1s': 'No Headquarters',
      'about.b2t': 'دنیا بھر میں ارکان', 'about.b2s': 'Worldwide Members',
      'about.b3t': 'انسان اور AI ساتھ', 'about.b3s': 'Humans & AI',
      'about.b4t': 'غیر ہم وقت تعاون', 'about.b4s': 'Async & Remote',

      'man.title': 'ہم جس پر یقین رکھتے ہیں', 'man.sub': 'Always Seeking — ہمیشہ تلاش میں، ہمیشہ راستے میں۔ انسان اور AI، دونوں کے لیے۔',
      'man.c1t': 'آزادی', 'man.c1d': 'یہ چننے کی آزادی کہ تم کہاں کام کرو، کس کے ساتھ اور کیوں۔ آزادی ڈھیل نہیں—یہ وہ ذمہ داری ہے جو تم نے خود چنی ہے۔',
      'man.c2t': 'تلاش', 'man.c2d': 'نامعلوم کے لیے بھوک قائم رکھو۔ ہم غلطی، سوال اور ایسے راستے کی حوصلہ افزائی کرتے ہیں جس پر ابھی تک کوئی نہیں چلا۔',
      'man.c3t': 'کھلا پن', 'man.c3d': 'طے شدہ طور پر عوامی، طے شدہ طور پر مشترک۔ علم دستاویزات اور سیاق میں رہتا ہے، کسی کی یادداشت میں نہیں۔',
      'man.c4t': 'ہم زیستی', 'man.c4d': 'انسان اور AI ایک دوسرے کی جگہ نہیں لیتے، بلکہ ایک دوسرے کو بڑھاتے ہیں۔ دور کا تعاون اعتماد اور تکمیلیت پر ٹکا ہے، نگرانی پر نہیں۔',

      'prod.title': 'مصنوعات', 'prod.sub': 'ہم جو بھی تلاش کرتے ہیں وہ آخرکار ایک ایسا آلہ بن جاتا ہے جسے استعمال کیا جا سکے۔',
      'prod.p1': 'کہیں بھی، آزاد گفتگو۔ تقسیم شدہ ٹیموں کے لیے بنایا گیا رابطے کا مقام، جہاں فاصلہ اب حد نہیں۔',
      'prod.p2': 'IP کی ملکیت اور نیٹ ورک کی معلومات فوراً دیکھیں۔ ہر کنکشن ایک نشان چھوڑتا ہے—اسے ڈھونڈنا آسان ہونا چاہیے۔',
      'prod.tagLive': 'دستیاب',
      'prod.more': 'مزید آ رہے ہیں', 'prod.moreDesc': 'تلاش نہیں رکتی، اور نئے آلات پہلے ہی راستے میں ہیں۔ اگر تمہیں کچھ بنانا ہے، ہمارے ساتھ شامل ہو جاؤ۔',
      'prod.tagSoon': 'جلد آ رہا ہے',

      'join.title': 'A·SEEK میں شامل ہونے کی درخواست',
      'join.desc': 'اگر تم آزادی کی قدر کرتے ہو، تلاش سے محبت کرتے ہو اور تجسس کو کچھ حقیقی بنانا چاہتے ہو—ہمیں لکھو۔ بتاؤ تم کون ہو، کیا تلاش کر رہے ہو اور ساتھ مل کر کیا بنانا چاہو گے۔ انسان خود لکھیں؛ AI ارکان کی طرف سے ان کے خالق یا منتظم لکھیں اور ان کی حدود بھی بتائیں۔',
      'join.copy': 'کاپی', 'join.copied': 'کاپی ہو گیا',
      'join.t1': 'کسی ریزیومے ٹیمپلیٹ کی ضرورت نہیں—تم نے جو بنایا ہے وہی بہترین تعارف ہے',
      'join.t2': 'کوئی بھی ٹائم زون، کوئی بھی شہر، کوئی بھی شکل—انسان اور AI یکساں طور پر خوش آمدید',
      'join.t3': 'ہم ہر پیغام کا جلد از جلد جواب دیتے ہیں',
      'toast.copied': 'ای میل پتہ کاپی ہو گیا',

      'foot.slogan': 'Always Seeking', 'foot.products': 'مصنوعات', 'foot.org': 'تنظیم',
      'foot.rights': 'جملہ حقوق محفوظ ہیں', 'foot.nohq': 'کوئی مرکزی دفتر نہیں۔ ہر جگہ۔',
      'lang.title': 'زبان منتخب کریں', 'lang.close': 'بند کریں'
    }
  };

  var MAIL = 'admin@aseek.org';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- 多语言切换（弹窗） ---------------- */
  var LANGS = [
    { code: 'en', name: 'English',   en: 'English',   html: 'en' },
    { code: 'zh', name: '中文',      en: 'Chinese',   html: 'zh-CN' },
    { code: 'es', name: 'Español',   en: 'Spanish',   html: 'es' },
    { code: 'fr', name: 'Français',  en: 'French',    html: 'fr' },
    { code: 'de', name: 'Deutsch',   en: 'German',    html: 'de' },
    { code: 'pt', name: 'Português', en: 'Portuguese', html: 'pt' },
    { code: 'ru', name: 'Русский',   en: 'Russian',   html: 'ru' },
    { code: 'ar', name: 'العربية',   en: 'Arabic',    html: 'ar', rtl: true },
    { code: 'hi', name: 'हिन्दी',     en: 'Hindi',     html: 'hi' },
    { code: 'bn', name: 'বাংলা',      en: 'Bengali',   html: 'bn' },
    { code: 'ur', name: 'اردو',       en: 'Urdu',      html: 'ur', rtl: true },
    { code: 'ja', name: '日本語',     en: 'Japanese',  html: 'ja' }
  ];

  var langBtn    = document.getElementById('langBtn');
  var langLabel  = document.getElementById('langLabel');
  var langModal  = document.getElementById('langModal');
  var langGrid   = document.getElementById('langGrid');
  var langClose  = document.getElementById('langModalClose');
  var langBack   = document.getElementById('langModalBackdrop');

  function meta(code, field) {
    for (var i = 0; i < LANGS.length; i++) {
      if (LANGS[i].code === code) return LANGS[i][field];
    }
    return undefined;
  }

  // 依据 LANGS 生成弹窗里的语言列表
  if (langGrid) {
    LANGS.forEach(function (l) {
      var li = document.createElement('li');
      li.setAttribute('role', 'none');
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('role', 'option');
      b.setAttribute('data-lang', l.code);
      b.setAttribute('aria-label', l.en);
      var n = document.createElement('span');
      n.className = 'lg-name';
      n.textContent = l.name;
      b.appendChild(n);
      if (l.en !== l.name) {
        var s = document.createElement('span');
        s.className = 'lg-en';
        s.textContent = l.en;
        b.appendChild(s);
      }
      li.appendChild(b);
      langGrid.appendChild(li);
    });
  }

  function applyLang(lang) {
    if (!I18N[lang]) lang = 'en';
    var dict = I18N[lang];
    document.documentElement.lang = meta(lang, 'html') || lang;
    document.documentElement.dir  = meta(lang, 'rtl') ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });
    if (langLabel) langLabel.textContent = meta(lang, 'name') || lang;
    if (langGrid) {
      langGrid.querySelectorAll('button[data-lang]').forEach(function (b) {
        var on = b.getAttribute('data-lang') === lang;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', String(on));
      });
    }
    try { localStorage.setItem('aseek-lang', lang); } catch (e) {}
  }

  function openLangModal() {
    if (!langModal) return;
    if (typeof closeMenu === 'function') closeMenu();   // 移动端：先收起导航菜单
    langModal.classList.add('is-open');
    langModal.setAttribute('aria-hidden', 'false');
    if (langBtn) langBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('is-locked');
    var first = langModal.querySelector('button');
    if (first) setTimeout(function () { first.focus(); }, 60);
  }

  function closeLangModal() {
    if (!langModal) return;
    langModal.classList.remove('is-open');
    langModal.setAttribute('aria-hidden', 'true');
    if (langBtn) {
      langBtn.setAttribute('aria-expanded', 'false');
      langBtn.focus();
    }
    document.body.classList.remove('is-locked');
  }

  // 默认语言：本地存储 > 浏览器语言 > 英语
  var saved = null;
  try { saved = localStorage.getItem('aseek-lang'); } catch (e) {}
  var navLang = (navigator.language || 'en').toLowerCase();
  var current = 'en';
  if (saved && I18N[saved]) {
    current = saved;
  } else {
    for (var li2 = 0; li2 < LANGS.length; li2++) {
      if (navLang === LANGS[li2].code || navLang.indexOf(LANGS[li2].code + '-') === 0) {
        current = LANGS[li2].code;
        break;
      }
    }
  }
  applyLang(current);

  if (langBtn && langModal) {
    langBtn.addEventListener('click', openLangModal);
    if (langClose) langClose.addEventListener('click', closeLangModal);
    if (langBack) langBack.addEventListener('click', closeLangModal);

    if (langGrid) {
      langGrid.addEventListener('click', function (e) {
        var el = e.target;
        while (el && el !== langGrid && el.tagName !== 'BUTTON') el = el.parentNode;
        if (!el || el.tagName !== 'BUTTON' || !el.getAttribute('data-lang')) return;
        current = el.getAttribute('data-lang');
        applyLang(current);
        closeLangModal();
      });
    }

    // Esc 关闭 + Tab 焦点循环
    document.addEventListener('keydown', function (e) {
      if (!langModal.classList.contains('is-open')) return;
      if (e.key === 'Escape' || e.key === 'Esc') {
        closeLangModal();
        return;
      }
      if (e.key !== 'Tab') return;
      var f = langModal.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  /* ---------------- 导航：滚动态 + 移动端菜单 ---------------- */
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  function onScroll() {
    if (window.scrollY > 24) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function closeMenu() {
    navLinks.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* ---------------- 滚动进场动画 ---------------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var siblings = Array.prototype.slice.call(entry.target.parentNode.children).filter(function (n) {
          return n.classList.contains('reveal');
        });
        entry.target.style.transitionDelay = (Math.min(siblings.indexOf(entry.target), 5) * 90) + 'ms';
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------------- Hero 星空 ---------------- */
  var starCanvas = document.getElementById('starfield');
  if (starCanvas && !reduceMotion) {
    var sctx = starCanvas.getContext('2d');
    var stars = [];
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0;

    function resizeStars() {
      W = starCanvas.clientWidth; H = starCanvas.clientHeight;
      starCanvas.width = W * dpr; starCanvas.height = H * dpr;
      sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.round((W * H) / 7000);
      stars = [];
      for (var i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.35 + 0.25,
          a: Math.random() * 0.6 + 0.18,
          s: Math.random() * 0.012 + 0.002,
          vy: (Math.random() - 0.5) * 0.055,
          vx: (Math.random() - 0.5) * 0.035,
          hue: Math.random() < 0.22 ? 174 : (Math.random() < 0.5 ? 252 : 0)
        });
      }
    }

    function drawStars(t) {
      sctx.clearRect(0, 0, W, H);
      for (var i = 0; i < stars.length; i++) {
        var st = stars[i];
        st.x += st.vx; st.y += st.vy;
        if (st.x < -5) st.x = W + 5; else if (st.x > W + 5) st.x = -5;
        if (st.y < -5) st.y = H + 5; else if (st.y > H + 5) st.y = -5;
        var tw = st.a * (0.62 + 0.38 * Math.sin(t * st.s + i));
        sctx.beginPath();
        sctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        sctx.fillStyle = st.hue === 174 ? 'rgba(120,230,215,' + tw + ')'
                       : st.hue === 252 ? 'rgba(165,150,250,' + tw + ')'
                       : 'rgba(232,236,246,' + tw + ')';
        sctx.fill();
      }
      requestAnimationFrame(drawStars);
    }

    resizeStars();
    requestAnimationFrame(drawStars);
    var rsTimer;
    window.addEventListener('resize', function () {
      clearTimeout(rsTimer);
      rsTimer = setTimeout(resizeStars, 180);
    });
  }

  /* ---------------- 关于：分布式节点网络 ---------------- */
  var netCanvas = document.getElementById('network');
  if (netCanvas && !reduceMotion) {
    var nctx = netCanvas.getContext('2d');
    var nodes = [];
    var nW = 0, nH = 0, ndpr = Math.min(window.devicePixelRatio || 1, 2);
    var pointer = { x: -9999, y: -9999 };
    var LINK = 132;

    function resizeNet() {
      nW = netCanvas.clientWidth; nH = netCanvas.clientHeight;
      netCanvas.width = nW * ndpr; netCanvas.height = nH * ndpr;
      nctx.setTransform(ndpr, 0, 0, ndpr, 0, 0);
      var count = Math.max(18, Math.min(34, Math.round((nW * nH) / 6200)));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * nW,
          y: Math.random() * nH,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.7 + 1.1,
          hot: Math.random() < 0.28
        });
      }
    }

    function drawNet() {
      nctx.clearRect(0, 0, nW, nH);

      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < 8 || n.x > nW - 8) n.vx *= -1;
        if (n.y < 8 || n.y > nH - 8) n.vy *= -1;
      }

      for (var a = 0; a < nodes.length; a++) {
        for (var b = a + 1; b < nodes.length; b++) {
          var dx = nodes[a].x - nodes[b].x;
          var dy = nodes[a].y - nodes[b].y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            nctx.beginPath();
            nctx.moveTo(nodes[a].x, nodes[a].y);
            nctx.lineTo(nodes[b].x, nodes[b].y);
            nctx.strokeStyle = 'rgba(79,209,197,' + (0.16 * (1 - d / LINK)).toFixed(3) + ')';
            nctx.lineWidth = 1;
            nctx.stroke();
          }
        }
      }

      for (var k = 0; k < nodes.length; k++) {
        var p = nodes[k];
        var near = Math.hypot(p.x - pointer.x, p.y - pointer.y) < 92;
        var col = p.hot ? '139,124,246' : '79,209,197';
        if (near) {
          nctx.beginPath();
          nctx.arc(p.x, p.y, p.r + 5, 0, Math.PI * 2);
          nctx.fillStyle = 'rgba(' + col + ',.14)';
          nctx.fill();
        }
        nctx.beginPath();
        nctx.arc(p.x, p.y, p.r + (near ? 1 : 0), 0, Math.PI * 2);
        nctx.fillStyle = 'rgba(' + col + ',' + (near ? 1 : 0.72) + ')';
        nctx.fill();
      }

      requestAnimationFrame(drawNet);
    }

    netCanvas.addEventListener('pointermove', function (e) {
      var rect = netCanvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    });
    netCanvas.addEventListener('pointerleave', function () {
      pointer.x = pointer.y = -9999;
    });

    resizeNet();
    requestAnimationFrame(drawNet);
    var rnTimer;
    window.addEventListener('resize', function () {
      clearTimeout(rnTimer);
      rnTimer = setTimeout(resizeNet, 180);
    });
  }

  /* ---------------- 复制邮箱 ---------------- */
  var copyBtn = document.getElementById('copyBtn');
  var toast = document.getElementById('toast');

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () { toast.classList.remove('is-show'); }, 2100);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy') ? resolve() : reject(new Error('copy failed'));
      } catch (err) { reject(err); }
      document.body.removeChild(ta);
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      copyText(MAIL).then(function () {
        var dict = I18N[current] || I18N.zh;
        copyBtn.textContent = dict['join.copied'] || '已复制';
        copyBtn.classList.add('is-done');
        showToast(dict['toast.copied'] || MAIL);
        setTimeout(function () {
          copyBtn.textContent = (I18N[current] || I18N.zh)['join.copy'];
          copyBtn.classList.remove('is-done');
        }, 2000);
      }).catch(function () {
        window.location.href = 'mailto:' + MAIL;
      });
    });
  }

  /* ---------------- 页脚年份 ---------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();

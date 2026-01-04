import type { Lang } from "@/lib/i18n";

/* ===== TYPES ===== */
export type Step =
  | { type: "text"; value: string }
  | { type: "image"; value: string };

export type Game = {
  slug: string;
  title: Record<Lang, string>;
  steps: Record<Lang, Step[]>;
  showOnHome: boolean;
};

/* ===== IMPORTANT INFO ===== */
export const importantInfo: Record<Lang, string[]> = {
  ru: [
    "Следуйте инструкции строго по шагам.",
    "Если что-то не получается — проверьте выбранную игру и платформу.",
    "Не передавайте свои данные третьим лицам.",
    "Если есть вопросы или недопонимания - пишите в чат,разберемся"
  ],
  en: [
    "Follow the instructions step by step.",
    "If something doesn’t work, double-check the selected game and platform.",
    "Do not share your personal data with third parties.",
    "If you have any questions or misunderstandings, please write in the chat, and we will figure it out"
  ]
};

/* ===== IMAGES ===== */
const IMG = {
  codeRU: "https://saydis.pro/codeRUb.jpg",

  // Destiny 2
  d2_1: "https://saydis.pro/destiny2/d1.jpg",
  d2_3: "https://saydis.pro/destiny2/d3.jpg",
  d2_5: "https://saydis.pro/destiny2/d5.jpg",
  d2_6: "https://saydis.pro/destiny2/d6.jpg",

  // New World
  nw_sp: "https://saydis.pro/nw/sp.jpg",
  nw_rw: "https://saydis.pro/nw/rw.jpg",

  // Warface
  wf_hud: "https://saydis.pro/warface/example.jpg",
  wf_notif: "https://saydis.pro/warface/example2.jpg",

  // Hunt
  hunt_consumed: "https://saydis.pro/hunt/hunt1.jpg",

  // Stalcraft
  stal_login: "https://saydis.pro/stalcraft/login1.jpg",
  stal_link: "https://saydis.pro/stalcraft/link1.jpg",

  // EVE
  eve1: "https://saydis.pro/eve/eve1.jpg",
  eve2: "https://saydis.pro/eve/eve2.jpg",
  eve3: "https://saydis.pro/eve/eve3.jpg",

  // Warframe
  warframe_wf2ru: "https://saydis.pro/warframe/wf2ru.jpg",
  warframe_window: "https://saydis.pro/warframe/wf_window.jpg",

  // Rust (twitch)
  rust1: "https://saydis.pro/rust/1ru.jpg",
  rust2: "https://saydis.pro/rust/2ru.jpg",
  rust3: "https://saydis.pro/rust/3ru.jpg",
  rust4: "https://saydis.pro/rust/4ru.jpg",
  rust5: "https://saydis.pro/rust/5ru.jpg",
  rust6: "https://saydis.pro/rust/6ru.jpg",
  rust7en: "https://saydis.pro/rust/7en.jpg",

  // Rust (kick)
  kcodeRU: "https://saydis.pro/kcodeRU.jpg",
  rk1: "https://saydis.pro/rustkick/k1.jpg",
  rk2: "https://saydis.pro/rustkick/k2.jpg",
  rk3: "https://saydis.pro/rustkick/k3.jpg",
  rk4: "https://saydis.pro/rustkick/k4.jpg",
  rk5: "https://saydis.pro/rustkick/k5.jpg",
  rk6: "https://saydis.pro/rustkick/k6.jpg",
  rk7: "https://saydis.pro/rustkick/k7.jpg",
};

/* ===== GAMES ===== */
export const games: Game[] = [
  {
    slug: "albion",
    title: { ru: "Albion Online", en: "Albion Online" },
    steps: {
      ru: [
        {
          type: "text",
          value:
            'На старом TWITCH.TV аккаунте перейдите по ссылке twitch.tv/settings/connections и во вкладке "Другие подключения" в самом низу страницы отключите игровой аккаунт, далее войдите в купленный твич аккаунт.',
        },
        {
          type: "text",
          value:
            'Если twitch попросит у Вас код с почты, то нажмите "Напомнить позже", "крестик" или F5 на вашей клавиатуре.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'При плашке на входе в твич аккаунт "Произошла ошибка. Попробуйте снова" — смените браузер. Если не помогло, попробуйте встроенный браузер или VPN(в крайних случаях).',
        },
        {
          type: "text",
          value:
            'Перейдите по ссылке twitch.tv/drops/inventory, нажмите кнопку "Подключить", затем подключите свой игровой аккаунт.',
        },
        {
          type: "text",
          value:
            "Всё готово, можно забирать награду в игре и отвязывать твич аккаунт, либо не отвязывать, если вы купили товар-автофарм. Если не пришло в течение 10 минут переподключите твич.",
        },
      ],
      en: [
        {
          type: "text",
          value:
            'On your old Twitch account open twitch.tv/settings/connections and (at the bottom) disconnect the game account, then log in to the purchased Twitch account.',
        },
        {
          type: "text",
          value:
            'If Twitch asks for an email code, click "Remind me later" / close (X) or press F5.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'If you see "An error occurred. Please try again", change browser / try built-in browser or VPN (as a last resort).',
        },
        {
          type: "text",
          value:
            'Open twitch.tv/drops/inventory, click "Connect" and link your game account.',
        },
        {
          type: "text",
          value:
            "Done. Reward will appear in-game. If nothing arrives within ~10 minutes, relink Twitch.",
        },
      ],
    },
    showOnHome: true,
  },

  {
    slug: "apex",
    title: { ru: "Apex Legends", en: "Apex Legends" },
    steps: {
      ru: [
        {
          type: "text",
          value:
            "На TWITCH.TV выйдите из своего аккаунта и войдите в купленный твич аккаунт.",
        },
        {
          type: "text",
          value:
            'Если twitch попросит у Вас код с почты, то нажмите "Напомнить позже", "крестик" или F5 на вашей клавиатуре.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'При плашке на входе в твич аккаунт "Произошла ошибка. Попробуйте снова" — смените браузер. Если не помогло, попробуйте встроенный браузер или VPN(в крайних случаях).',
        },
        {
          type: "text",
          value:
            "Перейдите по ссылке ea.com/twitchlinking, нажмите кнопку «Подключить», затем подключите свой игровой аккаунт. Если вы играете со STEAM, дополнительно подключите его по ссылке twitch.tv/settings/connections.",
        },
        {
          type: "text",
          value:
            "Всё готово, награда будет доступна при следующем запуске игры. Если не пришло в течение 10 минут — переподключите твич.",
        },
      ],
      en: [
        { type: "text", value: "Log out of Twitch and sign in to the purchased Twitch account." },
        {
          type: "text",
          value:
            'If Twitch asks for an email code, click "Remind me later" / close (X) or press F5.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'If you get "An error occurred. Please try again", change browser / try built-in browser or VPN (last resort).',
        },
        {
          type: "text",
          value:
            "Open ea.com/twitchlinking, click Connect and link your EA/game account. If you play via Steam, also connect it in twitch.tv/settings/connections.",
        },
        {
          type: "text",
          value:
            "Done. Reward will appear on next game launch. If not in ~10 minutes, relink Twitch.",
        },
      ],
    },
    showOnHome: true,
  },

  {
    slug: "battlebit",
    title: { ru: "BattleBit Remastered", en: "BattleBit Remastered" },
    steps: {
      ru: [
        {
          type: "text",
          value:
            "На TWITCH.TV выйдите из своего аккаунта и войдите в купленный твич аккаунт.",
        },
        {
          type: "text",
          value:
            'Если twitch попросит у Вас код с почты, то нажмите "Напомнить позже", "крестик" или F5 на вашей клавиатуре.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'При плашке на входе в твич аккаунт "Произошла ошибка. Попробуйте снова" — смените браузер. Если не помогло, попробуйте встроенный браузер или VPN(в крайних случаях).',
        },
        {
          type: "text",
          value:
            'Перейдите по ссылке link.battlebit.cloud/LinkTwitchAccount, нажмите "Разрешить", затем войдите с помощью своего STEAM-аккаунта.',
        },
        {
          type: "text",
          value:
            "Всё готово, награда будет доступна при следующем запуске игры. Если не пришло в течение 10 минут — переподключите твич. После получения предметов вы можете отвязать твич аккаунт, предметы не пропадут.",
        },
      ],
      en: [
        { type: "text", value: "Log out/in to the purchased Twitch account." },
        {
          type: "text",
          value:
            'If Twitch asks for an email code, click "Remind me later" / close (X) or press F5.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'If you get "An error occurred. Please try again", change browser / try built-in browser or VPN (last resort).',
        },
        {
          type: "text",
          value:
            'Open link.battlebit.cloud/LinkTwitchAccount, click Allow, then sign in with your Steam account.',
        },
        {
          type: "text",
          value:
            "Done. Reward on next launch. If not in ~10 minutes, relink Twitch.",
        },
      ],
    },
    showOnHome: true,
  },

  {
    slug: "destiny2",
    title: { ru: "Destiny 2", en: "Destiny 2" },
    steps: {
      ru: [
        {
          type: "text",
          value:
            "На TWITCH.TV выйдите из своего аккаунта и войдите в купленный твич аккаунт.",
        },
        {
          type: "text",
          value:
            'Если twitch попросит у Вас код с почты, то нажмите "Напомнить позже", "крестик" или F5 на вашей клавиатуре.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'При плашке на входе в твич аккаунт "Произошла ошибка. Попробуйте снова" — смените браузер. Если не помогло, попробуйте встроенный браузер или VPN(в крайних случаях).',
        },
        {
          type: "text",
          value:
            "Перейдите по ссылке bungie.net/7/en/User/Account/AccountLinking. Войдите в свою учетную запись Bungie.net, выбрав платформу.",
        },
        { type: "image", value: IMG.d2_1 },
        {
          type: "text",
          value:
            'Привяжите свою учетную запись Bungie.net к купленному Twitch аккаунту с помощью вкладки "Account Linking".',
        },
        { type: "image", value: IMG.d2_3 },
        {
          type: "text",
          value:
            'Для получения наград перейдите по ссылке bungie.net/7/en/Codes/Partners и нажмите кнопку "Refresh".',
        },
        { type: "image", value: IMG.d2_5 },
        {
          type: "text",
          value:
            "Всё готово, награда будет доступна при следующем запуске игры. После получения предметов вы можете отвязать твич аккаунт, предметы не пропадут.",
        },
        {
          type: "text",
          value:
            'Награды можно найти в игре: "Просмотреть путь стража" → "Коллекция" → "Аксессуары" → "Общее".',
        },
        { type: "image", value: IMG.d2_6 },
      ],
      en: [
        { type: "text", value: "Log out/in to the purchased Twitch account." },
        {
          type: "text",
          value:
            'If Twitch asks for an email code, click "Remind me later" / close (X) or press F5.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'If you get "An error occurred. Please try again", change browser / try built-in browser or VPN (last resort).',
        },
        {
          type: "text",
          value:
            "Open bungie.net/7/en/User/Account/AccountLinking and sign in to your Bungie.net account (choose platform).",
        },
        { type: "image", value: IMG.d2_1 },
        {
          type: "text",
          value: "Link your Bungie.net account with the purchased Twitch account in Account Linking.",
        },
        { type: "image", value: IMG.d2_3 },
        {
          type: "text",
          value:
            'To claim rewards open bungie.net/7/en/Codes/Partners and click "Refresh".',
        },
        { type: "image", value: IMG.d2_5 },
        {
          type: "text",
          value:
            "Done. Reward appears on next launch. You can unlink Twitch after receiving items.",
        },
        {
          type: "text",
          value:
            'In-game path: "Guardian Journey" → "Collections" → "Flair" → "General".',
        },
        { type: "image", value: IMG.d2_6 },
      ],
    },
    showOnHome: true,
  },

  {
    slug: "eve",
    title: { ru: "EVE Online", en: "EVE Online" },
    steps: {
      ru: [
        { type: "text", value: "На TWITCH.TV выйдите из своего аккаунта и войдите в купленный твич аккаунт." },
        {
          type: "text",
          value:
            'Если twitch попросит у Вас код с почты, то нажмите "Напомнить позже", "крестик" или F5 на вашей клавиатуре.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'При плашке на входе в твич аккаунт "Произошла ошибка. Попробуйте снова" — смените браузер. Если не помогло, попробуйте встроенный браузер или VPN(в крайних случаях).',
        },
        {
          type: "text",
          value:
            'Перейдите по ссылке eveonline.com/ru/twitch. Нажмите кнопку "ЗАРЕГИСТРИРОВАТЬСЯ ЧЕРЕЗ TWITCH", затем нажмите кнопку РАЗРЕШИТЬ.',
        },
        {
          type: "text",
          value:
            "Всё готово, награда будет доступна при следующем запуске игры. После получения предметов вы можете отвязать твич аккаунт, предметы не пропадут.",
        },
        {
          type: "text",
          value:
            "Если у вас 1 персонаж, то после открытия игры вам необходимо нажать esc и нажать Отключиться для перехода в меню выдачи предметов.",
        },
        { type: "image", value: IMG.eve1 },
        {
          type: "text",
          value:
            "После выхода в меню нажмите Выдача предметов и перетащите предметы на нужного персонажа.",
        },
        { type: "image", value: IMG.eve2 },
        {
          type: "text",
          value:
            "Для того, чтобы воспользоваться предметами, в правом меню нажмите на иконку База личного имущества(Alt+T).",
        },
        { type: "image", value: IMG.eve3 },
      ],
      en: [
        { type: "text", value: "Log out/in to the purchased Twitch account." },
        {
          type: "text",
          value:
            'If Twitch asks for an email code, click "Remind me later" / close (X) or press F5.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'If you get "An error occurred. Please try again", change browser / try built-in browser or VPN (last resort).',
        },
        {
          type: "text",
          value:
            'Open eveonline.com/ru/twitch → "Register with Twitch" → Allow.',
        },
        {
          type: "text",
          value:
            "Done. Reward on next launch. You may unlink Twitch after receiving items.",
        },
        { type: "image", value: IMG.eve1 },
        { type: "image", value: IMG.eve2 },
        { type: "image", value: IMG.eve3 },
      ],
    },
    showOnHome: true,
  },

  {
    slug: "hunt",
    title: { ru: "Hunt: Showdown", en: "Hunt: Showdown" },
    steps: {
      ru: [
        { type: "text", value: "На TWITCH.TV выйдите из своего аккаунта и войдите в купленный твич аккаунт." },
        {
          type: "text",
          value:
            'Если twitch попросит у Вас код с почты, то нажмите "Напомнить позже", "крестик" или F5 на вашей клавиатуре.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'При плашке на входе в твич аккаунт "Произошла ошибка. Попробуйте снова" — смените браузер. Если не помогло, попробуйте встроенный браузер или VPN(в крайних случаях).',
        },
        {
          type: "text",
          value:
            "Перейдите по ссылке huntshowdown.com/twitchdrops/streamers, нажмите кнопку «Подключить», отключите старый твич, если подключен (3 точки — Unlink game account — Unsubscribe), подключите купленный твич, выбрав свою платформу.",
        },
        {
          type: "text",
          value:
            "Всё готово, награда будет доступна при следующем запуске игры. После получения предметов вы можете отвязать твич аккаунт, предметы не пропадут.",
        },
        {
          type: "text",
          value:
            "Если вы купили 2 или 3 аккаунта: перезайдите в игру после каждой привязки. Если всё верно — на странице около кол-ва предметов будет Consumed (как на скрине). Если Claimed — значит вы не перезашли в игру (возможно, надо ещё раз).",
        },
        { type: "image", value: IMG.hunt_consumed },
      ],
      en: [
        { type: "text", value: "Log out/in to the purchased Twitch account." },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            "Open huntshowdown.com/twitchdrops/streamers → Connect → unlink old Twitch if needed → link the purchased Twitch for your platform.",
        },
        {
          type: "text",
          value:
            "If you have 2–3 accounts, restart the game after each link. Status should be Consumed (see screenshot).",
        },
        { type: "image", value: IMG.hunt_consumed },
      ],
    },
    showOnHome: true,
  },

  {
    slug: "newworld",
    title: { ru: "New World", en: "New World" },
    steps: {
      ru: [
        { type: "text", value: "На TWITCH.TV выйдите из своего аккаунта и войдите в купленный твич аккаунт." },
        {
          type: "text",
          value:
            'Если twitch попросит у Вас код с почты, то нажмите "Напомнить позже", "крестик" или F5 на вашей клавиатуре.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'При плашке на входе в твич аккаунт "Произошла ошибка. Попробуйте снова" — смените браузер. Если не помогло, попробуйте встроенный браузер или VPN(в крайних случаях).',
        },
        {
          type: "text",
          value:
            'Перейдите по ссылке newworld.com/twitch-drops, пролистайте чуть ниже — там будет окно привязки. Нажмите "SIGN IN WITH TWITCH", затем подключите свой игровой аккаунт и нажмите ACTIVATE.',
        },
        {
          type: "text",
          value:
            "Всё готово, награда будет доступна при следующем запуске игры. Если не пришло в течение 10 минут — переподключите твич. После получения предметов вы можете отвязать твич аккаунт, предметы не пропадут.",
        },
        {
          type: "text",
          value:
            "Чтобы применить скин на одежду/оружие: нажмите ЛКМ → Change Skin.",
        },
        { type: "image", value: IMG.nw_sp },
        {
          type: "text",
          value:
            "Чтобы получить расходники/ресурсы/инструменты: Esc → Game Menu → External Rewards.",
        },
        { type: "image", value: IMG.nw_rw },
      ],
      en: [
        { type: "text", value: "Log out/in to the purchased Twitch account." },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            "Open newworld.com/twitch-drops → Sign in with Twitch → link your game account → Activate.",
        },
        { type: "image", value: IMG.nw_sp },
        { type: "image", value: IMG.nw_rw },
      ],
    },
    showOnHome: true,
  },

  {
    slug: "poe",
    title: { ru: "Path of Exile", en: "Path of Exile" },
    steps: {
      ru: [
        { type: "text", value: "На TWITCH.TV выйдите из своего аккаунта и войдите в купленный твич аккаунт." },
        {
          type: "text",
          value:
            'Если twitch попросит у Вас код с почты, то нажмите "Напомнить позже", "крестик" или F5 на вашей клавиатуре.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'При плашке на входе в твич аккаунт "Произошла ошибка. Попробуйте снова" — смените браузер. Если не помогло, попробуйте встроенный браузер или VPN(в крайних случаях).',
        },
        {
          type: "text",
          value:
            "Перейдите по ссылке pathofexile.com/my-account/twitch, выберите свою платформу, затем подключите купленный твич аккаунт.",
        },
        {
          type: "text",
          value:
            "Всё готово, награда будет доступна при следующем запуске игры. Если не пришло в течение 10 минут — переподключите твич. После получения предметов вы можете отвязать твич аккаунт, предметы не пропадут.",
        },
        {
          type: "text",
          value:
            "Предметы можно проверить по ссылке pathofexile.com/my-account/microtransactions.",
        },
      ],
      en: [
        { type: "text", value: "Log out/in to the purchased Twitch account." },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            "Open pathofexile.com/my-account/twitch → choose platform → link the purchased Twitch account.",
        },
        {
          type: "text",
          value:
            "Done. Reward on next launch. If not in ~10 minutes, relink Twitch.",
        },
      ],
    },
    showOnHome: true,
  },

  {
    slug: "rust-twitch",
    title: { ru: "Rust (twitch)", en: "Rust (twitch)" },
    steps: {
      ru: [
        {
          type: "text",
          value:
            'Выполняйте получение предметов только в браузерах “GOOGLE CHROME/EDGE” на ПК. При ошибке входа — попробуйте инкогнито(ctrl+shift+n), VPN(в крайних случаях) или подождите.',
        },
        { type: "text", value: "На TWITCH.TV выйдите из своего аккаунта и войдите в купленный твич аккаунт." },
        {
          type: "text",
          value:
            'Если twitch попросит у Вас код с почты, то нажмите "Напомнить позже", "крестик" или F5.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value: "Перейдите по ссылке twitch.facepunch.com/connect.",
        },
        {
          type: "text",
          value:
            "ОЧЕНЬ ВАЖНО: сначала подключайте ВАШ STEAM аккаунт, а не купленный TWITCH, иначе предметы не получить.",
        },
        { type: "text", value: "Подключите ВАШ STEAM аккаунт (игра Rust должна быть куплена, не family sharing)." },
        { type: "image", value: IMG.rust1 },
        {
          type: "text",
          value:
            'Если попали на страницу с "UNLINK ACCOUNT" — вы уже связывали раньше. Нажмите UNLINK и вернитесь к шагу со ссылкой twitch.facepunch.com/connect.',
        },
        { type: "image", value: IMG.rust2 },
        { type: "text", value: "Подключите купленный twitch аккаунт." },
        { type: "image", value: IMG.rust3 },
        {
          type: "text",
          value:
            'Нажмите “ACTIVATE DROPS”. Если не перекинуло — откройте twitch.facepunch.com/connect вручную или нажмите сверху "CONNECT ACCOUNT".',
        },
        { type: "image", value: IMG.rust4 },
        {
          type: "text",
          value:
            'Нажмите “CHECK FOR MISSING DROPS”. Если кнопки нет — значит перепутали порядок (сначала твич, потом стим). Делайте заново по инструкции.',
        },
        { type: "image", value: IMG.rust5 },
        {
          type: "text",
          value:
            'Если видите "Attempting to give your Steam account X Twitch Drops..." — значит скины уже выдаются/выдались.',
        },
        { type: "image", value: IMG.rust7en },
        {
          type: "text",
          value:
            "Перейдите в STEAM/Rust инвентарь. ОБЯЗАТЕЛЬНО перезайдите в игру. В стиме обновите страницу (лучше через браузерный Steam).",
        },
        { type: "image", value: IMG.rust6 },
      ],
      en: [
        {
          type: "text",
          value:
            "Use Chrome/Edge on PC. If login errors appear — try Incognito, VPN (last resort) or wait.",
        },
        { type: "text", value: "Log in to the purchased Twitch account." },
        { type: "image", value: IMG.codeRU },
        { type: "text", value: "Open twitch.facepunch.com/connect." },
        {
          type: "text",
          value: "IMPORTANT: link YOUR Steam first (Rust must be purchased).",
        },
        { type: "image", value: IMG.rust1 },
        { type: "image", value: IMG.rust2 },
        { type: "image", value: IMG.rust3 },
        { type: "image", value: IMG.rust4 },
        { type: "image", value: IMG.rust5 },
        { type: "image", value: IMG.rust7en },
        { type: "image", value: IMG.rust6 },
      ],
    },
    showOnHome: true,
  },

  {
    slug: "rust-kick",
    title: { ru: "Rust (kick)", en: "Rust (kick)" },
    steps: {
      ru: [
        {
          type: "text",
          value:
            'Делайте всё на ПК в Chrome/Edge. Если "Неизвестная ошибка" — попробуйте инкогнито. Если не помогло: VPN (крайний случай) / моб.интернет / подождать.',
        },
        {
          type: "text",
          value: "На KICK.COM выйдите из своего аккаунта и войдите в купленный KICK аккаунт.",
        },
        {
          type: "text",
          value:
            "Введите 2ФА код, скопировав его с сайта, который был выдан вместе с аккаунтом.",
        },
        { type: "image", value: IMG.kcodeRU },
        {
          type: "text",
          value: "Перейдите по ссылке kick.facepunch.com/connect.",
        },
        {
          type: "text",
          value:
            "Подключите ВАШ STEAM аккаунт (Rust должен быть куплен, не family sharing).",
        },
        { type: "image", value: IMG.rk1 },
        {
          type: "text",
          value:
            'Если видите кнопку “UNLINK ACCOUNT” — сбросьте привязку и вернитесь к шагу со ссылкой kick.facepunch.com/connect.',
        },
        { type: "image", value: IMG.rk2 },
        { type: "text", value: "Подключите купленный KICK аккаунт." },
        { type: "image", value: IMG.rk3 },
        { type: "text", value: 'Нажмите “ACTIVATE DROPS”.' },
        { type: "image", value: IMG.rk4 },
        {
          type: "text",
          value:
            'Нажмите “CHECK FOR MISSING DROPS”. Если видите "Attempting to give..." — значит всё уже в инвентаре.',
        },
        { type: "image", value: IMG.rk5 },
        { type: "image", value: IMG.rk6 },
        {
          type: "text",
          value:
            "Перейдите в STEAM/Rust инвентарь и ОБЯЗАТЕЛЬНО перезайдите в игру. В стиме обновите страницу.",
        },
        { type: "image", value: IMG.rk7 },
      ],
      en: [
        { type: "text", value: "Use Chrome/Edge on PC. Try incognito/VPN if needed." },
        { type: "image", value: IMG.kcodeRU },
        { type: "image", value: IMG.rk1 },
        { type: "image", value: IMG.rk2 },
        { type: "image", value: IMG.rk3 },
        { type: "image", value: IMG.rk4 },
        { type: "image", value: IMG.rk5 },
        { type: "image", value: IMG.rk6 },
        { type: "image", value: IMG.rk7 },
      ],
    },
    showOnHome: true,
  },

  {
    slug: "sot",
    title: { ru: "Sea of Thieves", en: "Sea of Thieves" },
    steps: {
      ru: [
        { type: "text", value: "На TWITCH.TV выйдите из своего аккаунта и войдите в купленный твич аккаунт." },
        {
          type: "text",
          value:
            'Если twitch попросит у Вас код с почты, то нажмите "Напомнить позже", "крестик" или F5.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'При плашке на входе в твич аккаунт "Произошла ошибка. Попробуйте снова" — смените браузер / встроенный браузер / VPN(крайний случай).',
        },
        {
          type: "text",
          value:
            "Перейдите по ссылке seaofthieves.com/ru/twitchdrops, зайдите в свой игровой аккаунт, далее подключите купленный twitch.",
        },
        {
          type: "text",
          value:
            "Если вы уже в игре — перезагрузите её и выйдите в море (обязательно).",
        },
        {
          type: "text",
          value:
            "Всё готово: золото придёт сразу, а предметы начисляются постепенно (обычно 1–12 часов, возможны задержки).",
        },
        {
          type: "text",
          value:
            "Если товар включает 2 аккаунта: после получения ВСЕХ предметов с 1️⃣ отвяжите его и привяжите 2️⃣ аналогично. Проверка: наличие скина «Обсидиановый штурвал».",
        },
      ],
      en: [
        { type: "text", value: "Log in to purchased Twitch." },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            "Open seaofthieves.com/ru/twitchdrops → sign into your game account → link purchased Twitch. Restart game and sail to the sea.",
        },
      ],
    },
    showOnHome: true,
  },

  {
    slug: "stalcraft",
    title: { ru: "Stalcraft", en: "Stalcraft" },
    steps: {
      ru: [
        { type: "text", value: "На TWITCH.TV выйдите из своего аккаунта и войдите в купленный твич аккаунт." },
        {
          type: "text",
          value:
            'Если twitch попросит у Вас код с почты, то нажмите "Напомнить позже", "крестик" или F5.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'При плашке на входе в твич аккаунт "Произошла ошибка. Попробуйте снова" — смените браузер / встроенный браузер / VPN(крайний случай).',
        },
        {
          type: "text",
          value:
            "Перейдите по ссылке stalcraft.net/user и убедитесь, что вошли в НУЖНУЮ учётную запись (ник справа сверху на сайте и в лобби должны совпадать).",
        },
        { type: "image", value: IMG.stal_login },
        {
          type: "text",
          value:
            'Нажмите на никнейм → "Настройки учётной записи" → выберите "Twitch" для подключения в самом низу страницы.',
        },
        { type: "image", value: IMG.stal_link },
        {
          type: "text",
          value:
            'Всё готово — забирайте награду у курьера "Шило" (бар, «Первомайский»), возможно нужно перезаходить из-за большого кол-ва предметов.',
        },
        {
          type: "text",
          value:
            "❗ Предметы можно получить на аккаунт только один раз, не активируйте другие твичи на тот же аккаунт дважды.",
        },
      ],
      en: [
        { type: "text", value: "Log in to purchased Twitch." },
        { type: "image", value: IMG.codeRU },
        { type: "image", value: IMG.stal_login },
        { type: "image", value: IMG.stal_link },
      ],
    },
    showOnHome: true,
  },

  {
    slug: "r6",
    title: { ru: "Tom Clancy's Rainbow Six", en: "Tom Clancy's Rainbow Six" },
    steps: {
      ru: [
        { type: "text", value: "На TWITCH.TV выйдите из своего аккаунта и войдите в купленный твич аккаунт." },
        {
          type: "text",
          value:
            'Если twitch попросит у Вас код с почты, то нажмите "Напомнить позже", "крестик" или F5.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'При плашке на входе в твич аккаунт "Произошла ошибка. Попробуйте снова" — смените браузер / встроенный браузер / VPN(крайний случай).',
        },
        {
          type: "text",
          value:
            'Перейдите по ссылке drops-register.ubi.com/login, нажмите "LOGIN", затем подключите свой игровой аккаунт.',
        },
        {
          type: "text",
          value:
            "Всё готово — награду забирайте в игре (на сайте R6 паки не отображаются). Если не пришло в течение 10 минут — переподключите твич.",
        },
      ],
      en: [
        { type: "text", value: "Log in to purchased Twitch." },
        { type: "image", value: IMG.codeRU },
        { type: "text", value: "Open drops-register.ubi.com/login → LOGIN → link your Ubisoft account." },
      ],
    },
    showOnHome: true,
  },

  {
    slug: "warface",
    title: { ru: "Warface", en: "Warface" },
    steps: {
      ru: [
        {
          type: "text",
          value:
            'На старом TWITCH аккаунте откройте twitch.tv/settings/connections и в самом низу (Другие подключения) отключите игровой аккаунт, затем войдите в купленный твич.',
        },
        {
          type: "text",
          value:
            'Если twitch попросит у Вас код с почты, то нажмите "Напомнить позже", "крестик" или F5.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'При плашке "Произошла ошибка. Попробуйте снова" — смените браузер / встроенный браузер / VPN(крайний случай).',
        },
        {
          type: "text",
          value:
            "После подключения аккаунта и получения предметов галочки на твиче НЕ ПОЯВЛЯЮТСЯ, кнопка «Подключить» остаётся НЕАКТИВНОЙ. Дропы работают ТОЛЬКО на RU версии игры.",
        },
        {
          type: "text",
          value:
            'Перейдите по ссылке ru.warface.com/promo/twitchdrops/, нажмите "ВОЙТИ", войдите в игровой аккаунт, затем нажмите "СВЯЗАТЬ С TWITCH".',
        },
        {
          type: "text",
          value:
            'Если попали на "Доступ запрещён..." — это баг. Главное, чтобы привязанный твич отображался под никнеймом.',
        },
        {
          type: "text",
          value:
            "Для получения кейсов и предметов нужно быть в лобби. Начисление видно по иконке кейса справа снизу. Предметы приходят частями от 5 минут до 4 часов.",
        },
        { type: "text", value: "Пример худа кейсов:" },
        { type: "image", value: IMG.wf_hud },
        { type: "text", value: "Пример получения уведомлений:" },
        { type: "image", value: IMG.wf_notif },
      ],
      en: [
        { type: "text", value: "Disconnect old Twitch game connection, log in to purchased Twitch." },
        { type: "image", value: IMG.codeRU },
        { type: "image", value: IMG.wf_hud },
        { type: "image", value: IMG.wf_notif },
      ],
    },
    showOnHome: true,
  },

  {
    slug: "warframe",
    title: { ru: "Warframe", en: "Warframe" },
    steps: {
      ru: [
        {
          type: "text",
          value:
            "Перейдите по ссылке warframe.com/ru/user, ОБЯЗАТЕЛЬНО выйдите из своей учётной записи и войдите заново (иначе может быть Unauthorized Access). Убедитесь, что это ВАШ игровой аккаунт.",
        },
        {
          type: "text",
          value:
            "Выйдите из старого twitch аккаунта, войдите в новый и ТОЛЬКО ПОТОМ нажмите кнопку «Свяжите свой аккаунт!» в правом верхнем углу страницы.",
        },
        { type: "image", value: IMG.warframe_wf2ru },
        {
          type: "text",
          value:
            'Если twitch попросит у Вас код с почты, то нажмите "Напомнить позже", "крестик" или F5.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'При плашке "Произошла ошибка. Попробуйте снова" — смените браузер / встроенный браузер / VPN(крайний случай).',
        },
        {
          type: "text",
          value:
            "ОБЯЗАТЕЛЬНО перезайдите в игру и проверьте почту и инвентарь. Если почта отображается криво — в настройках Видео поставьте «в окне» и растяните игру по горизонтали (как на скрине).",
        },
        { type: "image", value: IMG.warframe_window },
        {
          type: "text",
          value:
            'Для отвязки твича используйте кнопку "ОТВЯЗАТЬ АККАУНТ" на странице привязки warframe.com.',
        },
      ],
      en: [
        { type: "text", value: "Open warframe.com/ru/user → log out and log in again to avoid Unauthorized Access." },
        { type: "image", value: IMG.warframe_wf2ru },
        { type: "image", value: IMG.codeRU },
        { type: "image", value: IMG.warframe_window },
      ],
    },
    showOnHome: true,
  },

  {
    slug: "thefinals",
    title: { ru: "The Finals", en: "The Finals" },
    steps: {
      ru: [
        { type: "text", value: "На TWITCH.TV выйдите из своего аккаунта и войдите в купленный твич аккаунт." },
        {
          type: "text",
          value:
            'Если twitch попросит у Вас код с почты, то нажмите "Напомнить позже", "крестик" или F5.',
        },
        { type: "image", value: IMG.codeRU },
        {
          type: "text",
          value:
            'При плашке на входе "Произошла ошибка. Попробуйте снова" — смените браузер / встроенный браузер / VPN(крайний случай).',
        },
        {
          type: "text",
          value:
            "Перейдите по ссылке id.embark.games/id/connected-platforms, выберите свою платформу, затем подключите купленный твич аккаунт.",
        },
        {
          type: "text",
          value:
            "Всё готово, награда будет доступна при следующем запуске игры. Если не пришло в течение 10 минут — переподключите твич. После получения предметов вы можете отвязать твич аккаунт, предметы не пропадут.",
        },
      ],
      en: [
        { type: "text", value: "Log in to purchased Twitch." },
        { type: "image", value: IMG.codeRU },
        { type: "text", value: "Open id.embark.games/id/connected-platforms → choose platform → link Twitch." },
      ],
    },
    showOnHome: true,
  },

  {
  slug: "other",
  title: { ru: "Другие игры", en: "Other games" },
  steps: {
    ru: [
      {
        type: "text",
        value:
          "Данная инструкция подходит для игр, которые не указаны отдельно в списке."
      },
      {
        type: "text",
        value:
          "После покупки вы получаете данные от Twitch / Kick аккаунта (в зависимости от товара)."
      },
      {
        type: "text",
        value:
          "Выйдите из своего аккаунта на платформе и войдите в купленный аккаунт."
      },
      {
        type: "text",
        value:
          "Если платформа запросит код подтверждения с почты — нажмите «Напомнить позже», закройте окно или обновите страницу."
      },
      { type: "image", value: IMG.codeRU },
      {
        type: "text",
        value:
          "Далее перейдите на страницу получения наград (Drops / Inventory) и выполните подключение игрового аккаунта."
      },
      {
        type: "text",
        value:
          "Если кнопка «Подключить» отсутствует — используйте официальный сайт игры в разделе привязки аккаунтов."
      },
      {
        type: "text",
        value:
          "После успешной привязки запустите игру и дождитесь начисления наград."
      },
      {
        type: "text",
        value:
          "Если награды не появились в течение 10–15 минут — попробуйте переподключить аккаунт."
      },
      {
        type: "text",
        value:
          "Если у вас возникли сложности — напишите продавцу, указав название игры."
      }
    ],
    en: [
      {
        type: "text",
        value:
          "This instruction applies to games that are not listed separately."
      },
      {
        type: "text",
        value:
          "After purchase, you will receive Twitch / Kick account credentials (depending on the product)."
      },
      {
        type: "text",
        value:
          "Log out of your current platform account and sign in to the purchased one."
      },
      {
        type: "text",
        value:
          "If a verification email code is requested, click “Remind me later”, close the popup, or refresh the page."
      },
      {
        type: "text",
        value:
          "Then open the rewards page (Drops / Inventory) and connect your game account."
      },
      {
        type: "text",
        value:
          "If the “Connect” button is missing, use the official game website in the account linking section."
      },
      {
        type: "text",
        value:
          "After successful linking, launch the game and wait for rewards to appear."
      },
      {
        type: "text",
        value:
          "If rewards do not appear within 10–15 minutes, try reconnecting the account."
      },
      {
        type: "text",
        value:
          "If you encounter any issues, contact the seller and specify the game name."
      }
    ]
  },
  showOnHome: true
}

];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

(() => {
  const bridgeScript = document.currentScript
  const root = document.documentElement
  const demoId = window.location.pathname.match(/\/demos\/([^/]+)/)?.[1] || ""
  const demoLayout = "phone"
  const isEmbedded = window.parent !== window
  const supportedLocales = new Set(["en", "zh"])
  const supportedThemes = new Set(["light", "dark"])
  const parentOrigin = (() => {
    try {
      return document.referrer ? new URL(document.referrer).origin : "*"
    } catch {
      return "*"
    }
  })()
  let frameHeightRequest = 0
  let lastReportedHeight = 0

  function measureDocumentHeight() {
    const body = document.body
    if (!body) return 0
    const documentElement = document.documentElement
    return Math.ceil(Math.max(
      body.scrollHeight,
      body.offsetHeight,
      body.getBoundingClientRect().height,
      documentElement.scrollHeight,
      documentElement.offsetHeight,
    ))
  }

  function reportFrameHeight() {
    frameHeightRequest = 0
    if (!isEmbedded) return
    const height = measureDocumentHeight()
    if (height < 320 || height > 20000 || Math.abs(height - lastReportedHeight) < 2) return
    lastReportedHeight = height
    window.parent.postMessage({ type: "momcozy-demo-height", demoId, height }, parentOrigin)
  }

  function scheduleFrameHeight() {
    if (!isEmbedded || frameHeightRequest) return
    frameHeightRequest = window.requestAnimationFrame(reportFrameHeight)
  }

  const translations = {
    "01-user-guide": [
      ["Momcozy just got better organized.", "Momcozy 现在更清晰好用了"],
      ["We've reorganized the Home and Devices tabs to bring your records, reminders, devices, and the things you use most every day into one convenient place.", "我们重新整理了首页与设备页，把记录、提醒、设备和每天常用的功能集中在一个方便的位置"],
      ["No need to remember multiple entry points or jump between pages to find what you need.", "不用再记多个入口，也不用在页面之间来回寻找"],
      ["Life with a little one is busy enough.", "照顾宝宝已经够忙了"],
      ["We hope that whenever you open the app, what you want to check, log, or manage is right where you expect it.", "希望你每次打开 App，想查看、记录或管理的内容都在顺手的位置"],
      ["This guide is short and simple—let's get you up to speed.", "这份指南很短，带你快速熟悉新版布局"],
      ["We're Listening", "我们在听"],
      ["We'd love to hear your feedback. If something feels off or you'd like to see improvements, let us know.", "如果哪里不顺手，或你希望我们继续改进，欢迎告诉我们"],
      ["Need help? We're always here to support you.", "需要帮助时，我们一直都在"],
      ["Contact Us", "联系我们"],
      ["FAQ", "常见问题"],
      ["Home: Your Daily Hub", "首页：每天都用得上的中心"],
      ["Daily Check-ins: All Your Records in One Place", "每日记录：所有数据集中查看"],
      ["Reminder: Stay on Top of Everyday Tasks", "提醒：轻松安排每日事项"],
      ["Personalized Support: AI Lactation Plan &AI Sleep Prediction", "个性化支持：AI 吸乳计划与睡眠预测"],
      ["Devices: Everything Connected in One Place", "设备：所有连接集中管理"],
      ["3 New Updates", "3 项更新"],
      ["2 New Updates", "2 项更新"],
      ["1 New Updates", "1 项更新"],
      ["What's on Home?", "首页有什么？"],
      ["AI Tips", "AI 建议"],
      ["Quick Logging", "快速记录"],
      ["Daily Check-ins", "每日记录"],
      ["All Your Records in One Place", "所有记录集中查看"],
      ["AI Lactation Plan", "AI 吸乳计划"],
      ["AI Sleep Prediction", "AI 睡眠预测"],
      ["Everything you use most lives right on Home. Your records, reminders, and personalized Tips are always within reach. Check your current stage, upcoming activities, explore AI Lactation Plan and AI Sleep Prediction, and discover curated articles and products—all from one place.", "常用内容都集中在首页。记录、提醒和个性化建议随时可见；你还可以查看当前阶段与近期安排，使用 AI 吸乳计划和睡眠预测，并浏览精选内容与产品"],
      ["AI Tips are personalized to your current stage and updated daily with content that's relevant to you right now.\n\nTap FOR YOU, BABY CARE, or BREASTFEEDING to switch categories. From TTC to pregnancy to postpartum, your Tips evolve along with your journey.", "AI 建议会根据你当前所处的阶段个性化生成，并每天更新与你当下相关的内容。\n\n点击“为你推荐”“宝宝护理”或“母乳喂养”切换分类。从备孕、孕期到产后，建议会随你的阶段持续更新"],
      ["The things you track most—pumping, feeding, sleep, and more—are now right on Home. Simply tap a card to quickly add a new record.", "吸乳、喂养、睡眠等常用记录现在都在首页。点击卡片即可快速添加记录"],
      ["For informational purposes only. Always follow your healthcare provider's advice.", "内容仅供参考，请始终遵循专业医护人员的建议"],
      ["This is a chapter title", "这是章节标题"],
      ["This is a chapter title This is a chapter title This is a chapter title", "这是一个较长的章节标题示例"],
      ["The weeks after birth are a full-body reset — physical, emotional, hormonal. Some changes are expected and healthy; others are signals to reach out for support.", "产后数周，身体、情绪和激素都在重新适应。有些变化属于正常恢复，也有些信号提醒你及时寻求支持"],
      ["View More", "查看更多"],
      ["Loading", "加载中"],
      ["New Update", "新更新"],
      ["Back", "返回"],
      ["Back to guide list", "返回指南列表"],
      ["Momcozy user guide", "Momcozy 使用指南"],
      ["Guide introduction", "指南介绍"],
      ["Frequently asked questions", "常见问题"],
      ["Feedback", "反馈"],
      ["New updates, swipe horizontally", "新更新，可左右滑动"],
      ["Current page", "当前页面"],
    ],
    "02-group-pumping": [
      ["For You", "为你推荐"], ["Group", "小组"], ["Featured", "精选"], ["Trending Topics", "热门话题"],
      ["Night Pumping Club", "夜间吸乳小组"], ["A quiet corner for the 2am crew", "属于凌晨两点还醒着的妈妈们的一方安静角落"],
      ["Pump timers, warm bottles, and a few people awake at the same hour. You do not have to do this part alone.", "吸乳计时、温奶，还有同一时刻醒着的人。你不必独自度过这段时间"],
      ["Pumping moms", "吸乳妈妈"], ["Join", "加入"], ["Post", "发布"], ["Anonymous", "匿名用户"],
      ["Second letdown check-in", "第二次奶阵打卡"], ["Latest wearable breast pump setup", "最新穿戴式吸奶器配置"],
      ["Behind Choose You, Too", "Choose You, Too 幕后故事"],
      ["I was doing my evening pump before bed and noticed how much easier the routine felt after keeping every part in one place.", "睡前吸乳时，我发现把所有配件集中放在一起后，整个流程轻松多了"],
      ["It is taking its sweet time, so I put one tiny lamp on and I am pretending this corner is a little room with all of you.", "今晚来得有点慢，我开了一盏小灯，把这个角落想象成和大家一起待着的小房间"],
      ["This Mother’s Day, we wanted to say something different. No superhero speeches. Just real care, real rest, and real support.", "这个母亲节，我们想说点不一样的：不讲超级妈妈，只谈真实的照顾、休息和支持"],
      ["helpful", "觉得有帮助"], ["members", "位成员"], ["posts", "篇帖子"], ["active", "人活跃"],
      ["Momcozy Community", "Momcozy 社区"], ["Momcozy Daily", "Momcozy 日常"], ["Momcozy Reads", "Momcozy 阅读"],
    ],
    "03-voice-log": [
      ["Voice Log", "语音记录"], ["Voice Log — Complete Flow Demo", "语音记录——完整流程 Demo"],
      ["We value the privacy of you and your baby.", "我们重视你和宝宝的隐私"], ["User Agreement", "用户协议"],
      ["Agreement", "协议"], ["Microphone", "麦克风"], ["Allow", "允许"], ["Deny", "拒绝"], ["Ask", "询问"],
      ["Listening...0s", "正在聆听…0 秒"], ["Processing...", "正在处理…"], ["Thinking...", "正在思考…"],
      ["Cannot Save:", "无法保存："], ["Need Check", "需要确认"], ["Need Info", "需要补充"],
      ["Pumping", "吸乳"], ["Feeding", "喂养"], ["Sleep", "睡眠"], ["Diaper", "尿布"],
      ["Bottle", "奶瓶"], ["Formula", "配方奶"], ["Pee", "小便"], ["Left", "左侧"], ["Right", "右侧"],
      ["Save", "保存"], ["State", "状态"], ["Green", "绿色"], ["calendar", "日历"],
      ["I pumped 5 oz total just now.", "我刚刚一共吸了 5 盎司"],
      ["Remind me to feed Bonnie in 2 hours.", "两小时后提醒我给 Bonnie 喂奶"],
      ["Bonnie slept from 1:10 to 2:05 pm.", "Bonnie 下午 1:10 到 2:05 睡了一觉"],
      ["Mar 28, 2026", "2026年3月28日"],
    ],
    "04-cozy-ai": [
      ["Care that knows you", "更懂你的照护"], ["How can I help today?", "今天想聊些什么？"],
      ["I’m here whenever you need a calm second opinion. What would feel most helpful right now?", "需要一个冷静的参考意见时，我一直都在。现在什么最能帮到你？"],
      ["Ask about sleep, feeding, recovery, or devices.", "可以询问睡眠、喂养、恢复或设备问题"],
      ["Everyday answers", "日常解答"], ["Advice shaped around your baby and routine.", "结合宝宝情况和日常节奏给出建议"],
      ["Plans you control", "由你掌控的计划"], ["Review every AI suggestion before it is saved.", "保存前可检查每条 AI 建议"],
      ["Personalized skill", "个性化 Skill"], ["Create a lactation plan", "创建吸乳计划"],
      ["Build a practical pumping rhythm around your goal, baby’s age, and daily routine.", "根据目标、宝宝月龄和日常作息，制定可执行的吸乳节奏"],
      ["Create a lactation plan", "创建吸乳计划"], ["Lactation plan", "吸乳计划"], ["Start plan", "开始计划"],
      ["Night waking", "夜间醒来"], ["Log pumping", "记录吸乳"], ["Chat history", "对话记录"],
      ["Today · Cozy AI", "今天 · Cozy AI"], ["More conversations will appear here.", "更多对话会显示在这里"],
      ["What’s coming up next?", "接下来有什么？"], ["Getting to know your rhythm", "正在了解你的节奏"],
      ["Chat and log a little more — forecasts get sharper the more I know.", "多聊一聊、多记一点，我越了解你，预测就越准确"],
      ["We’re still learning your rhythm.", "我们还在了解你的节奏"], ["Good", "不错"],
      ["Your information stays in your control", "你的信息始终由你掌控"],
      ["This library demo uses local sample responses and does not send chat content to an external AI service.", "这个组件库 Demo 仅使用本地示例回复，不会把聊天内容发送给外部 AI 服务"],
      ["Got it", "知道了"], ["Privacy Statement", "隐私声明"], ["I agree to", "我同意"],
      ["AI-generated, not professional advice.", "内容由 AI 生成，不构成专业建议"],
      ["Demo data stays on this device.", "Demo 数据仅保留在当前设备"], ["Home", "首页"], ["Community", "社区"], ["Device", "设备"], ["Me", "我的"],
    ],
    "05-ai-lactation-plan": [
      ["Cozy AI Agent · 方案 1 Demo", "Cozy AI Agent · Option 1 Demo"],
      ["意图识别 → 推荐 Skill", "Intent detected → Skill recommended"],
      ["中途退出会保存进度（如 2/4），Skill 卡 CTA 变为「继续填写」，可续填。", "Progress is saved if you leave midway (for example, 2/4). The Skill card changes to “Continue questionnaire” so you can resume later."],
      ["回传计划 → Start tracking", "Plan returned → Start tracking"],
      ["点 Start tracking 后展示 Lactation 卡，并在输入框上方常驻 Lactation 快捷入口。", "After you tap Start tracking, a Lactation card appears and a persistent Lactation shortcut stays above the composer."],
      ["AI吸乳计划", "AI Pumping Plan"], ["吸奶计划", "Pumping plan"], ["推荐 Skill", "Recommended Skill"],
      ["根据你的哺乳阶段、目标和作息，AI 生成个性化吸奶计划", "AI creates a personalized pumping plan based on your feeding stage, goals, and routine"],
      ["开始填写", "Start questionnaire"], ["继续填写", "Continue questionnaire"], ["填写进度", "Questionnaire progress"],
      ["问卷进行中…", "Questionnaire in progress…"], ["问卷进行中…完成后会回到这里", "Questionnaire in progress… You’ll return here when it’s complete"],
      ["问卷完成 · 结果已回传对话", "Questionnaire complete · Results returned to the conversation"],
      ["你的 AI 吸奶计划已生成", "Your AI pumping plan is ready"], ["已成功生成", "Created successfully"],
      ["计划已成功生成，已经帮你同步到日程里啦", "Your plan is ready and has been added to your schedule"],
      ["可继续完成计划", "You can continue the plan"], ["查看详情", "View details"], ["发送", "Send"], ["关闭", "Close"],
      ["同意隐私声明", "Agree to the Privacy Statement"], ["关闭隐私声明", "Close Privacy Statement"],
      ["删除时段", "Delete time slot"], ["未选择", "Not selected"], ["日间吸乳", "Daytime pumping"], ["夜间", "Night"], ["睡前", "Before bed"],
      ["频次", "Frequency"], ["首吸", "First session"], ["目标", "Goal"], ["次/天", "times/day"],
      ["最近有奶量波动", "Recent milk-supply fluctuations"], ["和 Cozy AI 聊聊…", "Chat with Cozy AI…"],
      ["你好 Sarah！宝宝快4个月了，现在的哺乳和吸奶情况怎么样？", "Hi Sarah! Your baby is almost 4 months old. How are feeding and pumping going?"],
      ["比如「最近有奶量波动」，发送后先给近7天洞察，再推荐 AI吸乳计划卡片。", "For example, send “Recent milk-supply fluctuations” to see a 7-day insight before the AI Pumping Plan card is recommended"],
      ["点「继续填写」恢复问卷…", "Tap “Continue questionnaire” to resume…"],
      ["继续点上方技能卡片…", "Continue by tapping the Skill card above…"],
      ["跳转整页问卷流", "Open the full-page questionnaire"], ["回传计划 ", "Return plan "],
      ["重播演示", "Replay demo"], ["右侧手机框可完整走通路径", "Use the phone preview on the right to complete the full flow"],
      ["卡片入口，整页问卷，结果回传对话", "Card entry, full-page questionnaire, and results returned to chat"],
      ["把 App 侧已落地的 AI吸乳计划封装为 Cozy AI 的 Skill：Agent 负责情境理解与决策编排，问卷与计划生成走完整产品流，避免在对话里逐题打断。", "Package the existing AI Pumping Plan as a Cozy AI Skill: the Agent understands context and orchestrates decisions, while the questionnaire and plan generation keep the complete product flow"],
      ["周一", "Mon"], ["周二", "Tue"], ["周三", "Wed"], ["周四", "Thu"], ["周五", "Fri"], ["周六", "Sat"], ["周日", "Sun"], ["周一到周日", "Monday to Sunday"],
    ],
    "06-partner-mode": [
      ["Partner Mode", "伴侣模式"], ["My Partner", "我的伴侣"], ["Invite Partner", "邀请伴侣"], ["Partner", "伴侣"],
      ["More hands, more care, more support.", "多一双手，多一份照护与支持"],
      ["Share device control, baby information, and care records with your partner or an authorized caregiver.", "与伴侣或获授权的照护者共享设备控制、宝宝信息和照护记录"],
      ["One set of devices, two pairs of hands", "一套设备，两个人共同照护"],
      ["Staying on the same page, nap by nap", "每一次小睡，都保持同步"],
      ["Taking turns, so baby never waits", "轮流照护，不让宝宝等待"],
      ["Both stay connected, so care continues with whoever is closest", "两个人都保持连接，谁离宝宝近，谁就能继续照护"],
      ["Records and guidance arrive together, so no one needs a recap", "记录和指导同步到达，不必反复交接"],
      ["Whoever picks it up, the whole family knows", "无论谁接手，全家都能及时了解"],
      ["Share with a Partner", "与伴侣共享"], ["Invitation Code", "邀请码"], ["I Have an Invitation Code", "我有邀请码"],
      ["By sending invitation, you confirm that the recipient is your baby's parent, legal guardian, or another authorized caregiver.", "发送邀请即表示你确认接收方是宝宝的父母、法定监护人或其他获授权照护者"],
      ["Once shared, the recipient will be able to access baby information and care records, which may include sensitive information.", "共享后，接收方可以查看宝宝信息和照护记录，其中可能包含敏感信息"],
      ["For more information, please refer to the", "更多信息请参阅"], ["Privacy Policy", "隐私政策"], ["Term of Service", "服务条款"],
      ["Only your partner can see your data", "只有你的伴侣可以查看数据"], ["Stop sharing at anytime", "随时可以停止共享"],
      ["Expires in 10 hours.", "10 小时后失效"], ["Copy", "复制"], ["I've just set you up with...", "我刚刚为你设置了……"],
      ["Share Application", "分享应用"], ["Messages", "信息"], ["Mail", "邮件"], ["Notes", "备忘录"], ["Save to Files", "存储到文件"],
      ["Add to Favorites", "添加到个人收藏"], ["Add Bookmark", "添加书签"], ["See More", "查看更多"], ["Edit Actions", "编辑操作"],
      ["My Profile", "我的资料"], ["My Baby", "我的宝宝"], ["My Perks", "我的权益"], ["Course Library", "课程库"], ["Points Mall", "积分商城"],
      ["Get CozyCoins", "获取 CozyCoins"], ["Make Momcozy better for you!", "帮助 Momcozy 做得更好"], ["Help & Feedback", "帮助与反馈"],
      ["Home", "首页"], ["Device", "设备"], ["Community", "社区"], ["Me", "我的"], ["Settings", "设置"], ["About", "关于"],
      ["Dad", "爸爸"], ["Mom", "妈妈"], ["Host", "创建者"], ["Beginner", "新手"], ["NEW", "新"],
      ["① Me entry", "① Me 入口"], ["② Before activation", "② 开启前"], ["③ Send invitation", "③ 发送邀请"], ["③b Share sheet", "③b 分享面板"], ["④ Share to iMessage", "④ 分享到 iMessage"], ["⑤ After activation", "⑤ 开启后"], ["↺ Restart", "↺ 重新开始"],
      ["Inviter flow: open My Partner from Me → view the Partner Mode introduction → generate an invitation code → open the share sheet → send through iMessage → activate after the partner joins. Use either the phone controls or the controls below", "邀请者核心链路：「我的」页点击 My Partner → Partner Mode 介绍 → 生成邀请码 → 分享面板 → 发送到 iMessage → 伙伴加入后开启。点击手机内按钮或下方控制条均可推进。"],
    ],
  }

  const pairs = translations[demoId] || []
  const sourceLocale = demoId === "05-ai-lactation-plan" ? "zh" : "en"
  const toZh = new Map(pairs.map(([source, target]) => sourceLocale === "zh" ? [target, source] : [source, target]))
  const toEn = new Map(pairs.map(([source, target]) => sourceLocale === "zh" ? [source, target] : [target, source]))
  const translatedAttributes = ["aria-label", "title", "placeholder"]
  let currentLocale = "en"
  let translating = false

  root.dataset.demoId = demoId
  root.dataset.demoLayout = demoLayout
  root.classList.toggle("is-embedded", isEmbedded)
  document.body?.classList.toggle("is-embedded", isEmbedded)

  if (isEmbedded && bridgeScript?.src && !document.querySelector('link[data-momcozy-mobile-preview]')) {
    const previewStyles = document.createElement("link")
    previewStyles.rel = "stylesheet"
    previewStyles.href = new URL("./mobile-demo-preview.css?v=20260804-corner-mask", bridgeScript.src).href
    previewStyles.dataset.momcozyMobilePreview = ""
    document.head.appendChild(previewStyles)
  }

  if (isEmbedded) {
    window.addEventListener("load", scheduleFrameHeight)
    window.addEventListener("resize", scheduleFrameHeight)
    document.fonts?.ready.then(scheduleFrameHeight)
    if ("ResizeObserver" in window && document.body) {
      const frameResizeObserver = new ResizeObserver(scheduleFrameHeight)
      frameResizeObserver.observe(root)
      frameResizeObserver.observe(document.body)
    }
    scheduleFrameHeight()
  }

  function normalizeLocale(locale) {
    return locale === "zh-CN" || locale === "zh" ? "zh" : "en"
  }

  function translateValue(value, locale) {
    if (!value) return value
    const trimmed = value.trim()
    const replacement = (locale === "zh" ? toZh : toEn).get(trimmed)
    return replacement ? value.replace(trimmed, replacement) : value
  }

  function translateElement(element, locale) {
    if (!(element instanceof Element)) return
    translatedAttributes.forEach((attribute) => {
      const value = element.getAttribute(attribute)
      const translated = translateValue(value, locale)
      if (value && translated !== value) element.setAttribute(attribute, translated)
    })
  }

  function translateTree(scope, locale) {
    if (!scope) return
    if (scope instanceof Element && scope.closest("script, style, noscript, code, pre, svg, canvas")) return
    translating = true
    if (scope instanceof Element) translateElement(scope, locale)

    const walker = document.createTreeWalker(
      scope,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parent = node.nodeType === Node.TEXT_NODE ? node.parentElement : node
          return parent?.closest("script, style, noscript, code, pre, svg, canvas")
            ? NodeFilter.FILTER_REJECT
            : NodeFilter.FILTER_ACCEPT
        },
      },
    )

    let node = walker.nextNode()
    while (node) {
      if (node.nodeType === Node.TEXT_NODE) {
        node.nodeValue = translateValue(node.nodeValue, locale)
      } else {
        translateElement(node, locale)
      }
      node = walker.nextNode()
    }
    translating = false
  }

  const observer = new MutationObserver((records) => {
    if (translating) return
    records.forEach((record) => {
      if (record.type === "characterData" && !record.target.parentElement?.closest("script, style, noscript, code, pre, svg, canvas")) {
        const translated = translateValue(record.target.nodeValue, currentLocale)
        if (translated !== record.target.nodeValue) record.target.nodeValue = translated
      }
      record.addedNodes.forEach((node) => translateTree(node, currentLocale))
    })
    scheduleFrameHeight()
  })

  function applyLocale(locale, persist = true) {
    currentLocale = normalizeLocale(locale)
    root.lang = currentLocale === "zh" ? "zh-CN" : "en"
    root.dataset.locale = currentLocale
    if (persist) window.localStorage.setItem("momcozy-ui-locale", currentLocale)
    translateTree(document.body, currentLocale)
    window.dispatchEvent(new CustomEvent("momcozy-locale-change", { detail: { locale: currentLocale } }))
    scheduleFrameHeight()
  }

  function applyTheme(theme, persist = true) {
    const nextTheme = supportedThemes.has(theme) ? theme : "light"
    root.classList.toggle("dark", nextTheme === "dark")
    root.dataset.theme = nextTheme
    root.style.colorScheme = nextTheme
    if (persist) window.localStorage.setItem("momcozy-theme", nextTheme)
    window.dispatchEvent(new CustomEvent("momcozy-theme-change", { detail: { theme: nextTheme } }))
    scheduleFrameHeight()
  }

  const requestedTheme = new URLSearchParams(window.location.search).get("theme")
  const storedTheme = window.localStorage.getItem("momcozy-theme")
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  const requestedLocale = new URLSearchParams(window.location.search).get("locale")
  const storedLocale = window.localStorage.getItem("momcozy-ui-locale")
  const documentLocale = root.lang || (demoId === "05-ai-lactation-plan" ? "zh" : "en")

  applyTheme(requestedTheme || storedTheme || systemTheme, false)
  applyLocale(requestedLocale || storedLocale || documentLocale, false)
  observer.observe(document.documentElement, { attributes: true, childList: true, characterData: true, subtree: true })

  window.addEventListener("message", (event) => {
    const comesFromParent = isEmbedded && event.source === window.parent
    if (!comesFromParent && event.origin !== window.location.origin) return
    const data = event.data || {}
    if (data.type === "momcozy-demo-settings") {
      if (supportedThemes.has(data.theme)) applyTheme(data.theme)
      if (supportedLocales.has(data.locale)) applyLocale(data.locale)
    }
    if (data.type === "momcozy-demo-measure") scheduleFrameHeight()
    if (data.type === "momcozy-theme" && supportedThemes.has(data.theme)) applyTheme(data.theme)
    if (data.type === "momcozy-locale" && supportedLocales.has(data.locale)) applyLocale(data.locale)
  })

  window.MomcozyDemoBridge = { applyTheme, applyLocale }
})()

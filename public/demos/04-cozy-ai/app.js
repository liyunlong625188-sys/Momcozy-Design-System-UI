const root = document.documentElement
const themeToggle = document.querySelector('#themeToggle')
const welcomeView = document.querySelector('#welcomeView')
const chatView = document.querySelector('#chatView')
const consent = document.querySelector('#privacyConsent')
const getStarted = document.querySelector('#getStarted')
const privacyLink = document.querySelector('#privacyLink')
const privacyDialog = document.querySelector('#privacyDialog')
const nextUp = document.querySelector('#nextUp')
const nextUpToggle = document.querySelector('#nextUpToggle')
const nextUpChevron = document.querySelector('#nextUpChevron')
const chatStream = document.querySelector('#chatStream')
const composerForm = document.querySelector('#composerForm')
const messageInput = document.querySelector('#messageInput')
const sendButton = document.querySelector('#sendButton')
const startPlanButton = document.querySelector('#startPlanButton')
const historyButton = document.querySelector('#historyButton')
const historyDrawer = document.querySelector('#historyDrawer')
const historyScrim = document.querySelector('#historyScrim')
const closeHistoryButton = document.querySelector('#closeHistoryButton')
const newChatButton = document.querySelector('#newChatButton')
const toast = document.querySelector('#toast')

const responses = {
  lactation:
    'Absolutely. I can help you make a plan that feels realistic, not rigid. We can start with three things: your goal, how many sessions fit your day, and whether you are nursing, pumping, or doing both.',
  sleep:
    'Frequent waking can be exhausting. Start by checking feeding cues, room comfort, and whether the wake-ups follow a pattern. If you tell me your baby\'s age and roughly how often they wake, I can help you sort the next step.',
  pumping:
    'Logged a 20-minute pumping session for review. Before saving, please check the time, duration, and side details. In this demo, the record stays local and is not added to a medical chart.',
  default:
    'I can help you think this through step by step. Share a little more context — your baby\'s age, what changed, and what you have already tried — and I\'ll keep the answer practical.',
}

function setTheme(theme, persist = true) {
  root.classList.toggle('dark', theme === 'dark')
  root.dataset.theme = theme
  if (persist) localStorage.setItem('momcozy-theme', theme)
}

function currentTheme() {
  return root.classList.contains('dark') ? 'dark' : 'light'
}

function syncParentTheme(theme) {
  setTheme(theme)
}

if (window.self !== window.top) root.classList.add('is-embedded')

window.addEventListener('message', (event) => {
  if (event.origin !== window.location.origin) return
  if (event.data?.type !== 'momcozy-theme') return
  if (event.data.theme !== 'light' && event.data.theme !== 'dark') return
  syncParentTheme(event.data.theme)
})

themeToggle.addEventListener('click', () => {
  setTheme(currentTheme() === 'light' ? 'dark' : 'light')
})

consent.addEventListener('change', () => {
  getStarted.disabled = !consent.checked
})

getStarted.addEventListener('click', () => {
  welcomeView.hidden = true
  chatView.hidden = false
  chatStream.scrollTop = chatStream.scrollHeight
})

privacyLink.addEventListener('click', () => privacyDialog.showModal())

function toggleNextUp() {
  const collapsed = nextUp.classList.toggle('is-collapsed')
  nextUpToggle.setAttribute('aria-expanded', String(!collapsed))
  nextUpChevron.setAttribute('aria-label', collapsed ? 'Expand' : 'Collapse')
}

nextUpToggle.addEventListener('click', toggleNextUp)
nextUpChevron.addEventListener('click', toggleNextUp)

function scrollConversation() {
  requestAnimationFrame(() => {
    chatStream.scrollTop = chatStream.scrollHeight
  })
}

function assistantLabel() {
  const label = document.createElement('div')
  label.className = 'assistant-label'
  label.innerHTML = '<span class="cozy-orb cozy-orb--tiny" aria-hidden="true"></span><span>Cozy AI</span>'
  return label
}

function appendUserMessage(text) {
  const article = document.createElement('article')
  article.className = 'message message--user'
  const paragraph = document.createElement('p')
  paragraph.textContent = text
  article.append(paragraph)
  chatStream.append(article)
}

function appendAssistantMessage(text) {
  const article = document.createElement('article')
  article.className = 'message message--assistant'
  article.append(assistantLabel())
  const paragraph = document.createElement('p')
  paragraph.textContent = text
  article.append(paragraph)
  chatStream.append(article)
}

function showTyping() {
  const article = document.createElement('article')
  article.className = 'message message--assistant'
  article.dataset.typing = 'true'
  article.append(assistantLabel())
  const dots = document.createElement('span')
  dots.className = 'typing-dots'
  dots.innerHTML = '<i></i><i></i><i></i>'
  article.append(dots)
  chatStream.append(article)
  scrollConversation()
  return article
}

function pickResponse(text) {
  const value = text.toLowerCase()
  if (value.includes('lactation') || value.includes('plan')) return responses.lactation
  if (value.includes('sleep') || value.includes('waking') || value.includes('night')) return responses.sleep
  if (value.includes('pump') || value.includes('log')) return responses.pumping
  return responses.default
}

function sendMessage(text) {
  const clean = text.trim()
  if (!clean) return
  appendUserMessage(clean)
  messageInput.value = ''
  sendButton.disabled = true
  messageInput.style.height = 'auto'
  const typing = showTyping()

  window.setTimeout(() => {
    typing.remove()
    appendAssistantMessage(pickResponse(clean))
    scrollConversation()
  }, 620)
}

composerForm.addEventListener('submit', (event) => {
  event.preventDefault()
  sendMessage(messageInput.value)
})

messageInput.addEventListener('input', () => {
  sendButton.disabled = messageInput.value.trim().length === 0
  messageInput.style.height = 'auto'
  messageInput.style.height = `${Math.min(messageInput.scrollHeight, 96)}px`
})

messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
    event.preventDefault()
    sendMessage(messageInput.value)
  }
})

document.querySelectorAll('[data-prompt]').forEach((button) => {
  button.addEventListener('click', () => sendMessage(button.dataset.prompt || ''))
})

startPlanButton.addEventListener('click', () => {
  const card = document.querySelector('#skillCard')
  card.innerHTML = `
    <span class="skill-card__eyebrow">✓ Draft ready to review</span>
    <h2>Clare's starter plan</h2>
    <div class="plan-summary">
      <span><strong>6× daily</strong>Frequency</span>
      <span><strong>20 min</strong>Duration</span>
      <span><strong>Mixed</strong>Feeding</span>
    </div>
    <p>This is sample data. Edit the goal and timing before saving a real plan.</p>
    <button class="button button--secondary" type="button" data-review-plan>Review plan</button>
  `
  card.querySelector('[data-review-plan]').addEventListener('click', () => {
    showToast('Plan review opened · sample data only')
  })
  nextUp.querySelector('.next-up__content').innerHTML = '<strong>Next pump · 3:00 PM</strong><span>Starter plan draft is ready for your review.</span>'
  scrollConversation()
})

function openHistory() {
  historyDrawer.classList.add('is-open')
  historyScrim.classList.add('is-open')
  historyDrawer.setAttribute('aria-hidden', 'false')
}

function closeHistory() {
  historyDrawer.classList.remove('is-open')
  historyScrim.classList.remove('is-open')
  historyDrawer.setAttribute('aria-hidden', 'true')
}

historyButton.addEventListener('click', openHistory)
closeHistoryButton.addEventListener('click', closeHistory)
historyScrim.addEventListener('click', closeHistory)

newChatButton.addEventListener('click', () => {
  chatStream.querySelectorAll('.message--user, .message--assistant:not(:first-of-type)').forEach((node) => node.remove())
  showToast('New local demo chat started')
})

let toastTimer
function showToast(message) {
  toast.textContent = message
  toast.classList.add('is-visible')
  window.clearTimeout(toastTimer)
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2200)
}

document.querySelectorAll('.tab-item[data-tab]').forEach((button) => {
  button.addEventListener('click', () => showToast(`${button.dataset.tab} remains available in the full CozyAI source`))
})

document.querySelector('.composer__add').addEventListener('click', () => {
  showToast('Image upload is disabled in this local library preview')
})

document.querySelector('.next-up__jump').addEventListener('click', () => {
  showToast('Schedule preview · no events saved')
})

const hour = new Date().getHours()
document.querySelector('#dayPart').textContent = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening'

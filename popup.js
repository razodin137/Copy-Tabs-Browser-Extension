const status = document.querySelector("#status")
const output = document.querySelector("#output")

const formatTab = tab => `${tab.title || tab.url}\n${tab.url}`

async function copyAllTabs() {
  const tabs = await chrome.tabs.query({ currentWindow: true })
  const text = tabs.map(formatTab).join("\n\n")

  output.value = text

  try {
    await navigator.clipboard.writeText(text)
    status.textContent = `Copied ${tabs.length} tabs`
  } catch {
    output.focus()
    output.select()
    status.textContent = "Clipboard blocked — press Ctrl+C"
  }
}

copyAllTabs()

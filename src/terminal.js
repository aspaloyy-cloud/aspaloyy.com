export function initTerminal(currentLang) {
  const terminalOutput = document.getElementById('terminal-output');
  const terminalInput = document.getElementById('terminal-input');
  const terminalForm = document.getElementById('terminal-form');

  if (!terminalOutput || !terminalInput || !terminalForm) return;

  const responses = {
    ru: {
      whoami: "Асман Рахманов — Архитектор распределенных систем и бэкенд-инженер из Бишкека.",
      uptime: "Более 5 лет проектирования отказоустойчивых систем и высоконагруженных сервисов.",
      stack: "Go, Rust, Distributed Systems, gRPC, Raft, PostgreSQL, Redis, Docker, Linux.",
      contact: "Telegram: @aspaloyy | Email: contact@aspaloyy.com | GitHub: github.com/aspaloyy",
      help: "Доступные команды: whoami, uptime, stack, contact, clear",
      unknown: "Неизвестная команда. Введите 'help' для списка команд."
    },
    en: {
      whoami: "Asman Rakhmanov — Systems Architect and Backend Engineer from Bishkek.",
      uptime: "5+ years of designing fault-tolerant systems and high-load services.",
      stack: "Go, Rust, Distributed Systems, gRPC, Raft, PostgreSQL, Redis, Docker, Linux.",
      contact: "Telegram: @aspaloyy | Email: contact@aspaloyy.com | GitHub: github.com/aspaloyy",
      help: "Available commands: whoami, uptime, stack, contact, clear",
      unknown: "Unknown command. Type 'help' for available commands."
    }
  };

  function appendLine(cmd, output) {
    const div = document.createElement('div');
    div.className = "space-y-1";
    div.innerHTML = `
      <div class="text-zinc-400 flex items-center gap-2">
        <span class="text-indigo-400">➜</span>
        <span class="text-zinc-200">${escapeHtml(cmd)}</span>
      </div>
      <div class="text-zinc-300 pl-4 border-l border-indigo-500/30">${escapeHtml(output)}</div>
    `;
    terminalOutput.appendChild(div);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  terminalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cmd = terminalInput.value.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      terminalOutput.innerHTML = `
        <div class="text-zinc-300">
          ${responses[currentLang].help}
        </div>
      `;
      terminalInput.value = '';
      return;
    }

    const langDict = responses[currentLang] || responses.en;
    const output = langDict[cmd] || langDict.unknown;
    appendLine(cmd, output);
    terminalInput.value = '';
  });

  window.runTerminalCommand = function(cmd) {
    terminalInput.value = cmd;
    terminalForm.dispatchEvent(new Event('submit'));
  }
}

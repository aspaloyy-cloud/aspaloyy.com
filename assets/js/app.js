document.addEventListener('DOMContentLoaded', () => {
  // Live Metrics Simulation
  const cpuElem = document.getElementById('metric-cpu');
  const memElem = document.getElementById('metric-mem');
  const latencyElem = document.getElementById('metric-latency');

  if (cpuElem && latencyElem) {
    setInterval(() => {
      // Random fluctuations for real-time feel
      const cpu = (12.0 + Math.random() * 5.4).toFixed(1);
      const latency = (0.75 + Math.random() * 0.2).toFixed(2);
      cpuElem.textContent = `${cpu}%`;
      latencyElem.textContent = `${latency} ms`;
    }, 3000);
  }

  // Interactive Terminal Logic
  const terminalOutput = document.getElementById('terminal-output');
  const terminalInput = document.getElementById('terminal-input');
  const terminalClear = document.getElementById('terminal-clear');

  const commandsHelp = [
    '<span class="text-accent">Available Commands:</span>',
    '  <span class="text-success">status</span>      - Display current cluster node health',
    '  <span class="text-success">metrics</span>     - Show real-time telemetry stream',
    '  <span class="text-success">deploy</span>      - Simulate new edge isolate rollout',
    '  <span class="text-success">benchmark</span>   - Run simulated load test (RPS / P99)',
    '  <span class="text-success">clear</span>       - Clear terminal output',
    '  <span class="text-success">whoami</span>      - Print authenticated session info'
  ];

  if (terminalInput && terminalOutput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = terminalInput.value.trim();
        if (!cmd) return;

        // Print user command
        appendTerminalLine(`<span class="prompt-symbol">❯</span> ${escapeHtml(cmd)}`);
        executeCommand(cmd.toLowerCase());
        terminalInput.value = '';
      }
    });
  }

  if (terminalClear) {
    terminalClear.addEventListener('click', () => {
      terminalOutput.innerHTML = `
        <div class="terminal-line text-muted">ASPALOYY Edge Runtime CLI v4.2.0 (x86_64-linux-gnu)</div>
        <div class="terminal-line text-muted">Type <span class="text-accent">help</span> to view available system commands.</div>
        <div class="terminal-line">&nbsp;</div>
      `;
    });
  }

  function appendTerminalLine(html) {
    const div = document.createElement('div');
    div.className = 'terminal-line';
    div.innerHTML = html;
    terminalOutput.appendChild(div);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function executeCommand(cmd) {
    switch (cmd) {
      case 'help':
        commandsHelp.forEach(line => appendTerminalLine(line));
        break;
      case 'status':
        appendTerminalLine('[INFO] Node ID: node-us-east-01 (ACTIVE)');
        appendTerminalLine('[INFO] V8 Engine: v11.8.172.13 | Memory Mesh: HEALTHY');
        appendTerminalLine('[INFO] Raft Consensus: Leader (Epoch 42, Term 3)');
        break;
      case 'metrics':
        appendTerminalLine('[TELEMETRY] CPU Usage: 14.2% | RSS: 142.8 MB');
        appendTerminalLine('[TELEMETRY] Active Isolates: 1,429 | Ingress: 42.8 GB/s');
        appendTerminalLine('[TELEMETRY] P99 Latency: 0.82ms | Error Rate: 0.0001%');
        break;
      case 'deploy':
        appendTerminalLine('[DEPLOY] Initializing zero-copy packaging...');
        setTimeout(() => appendTerminalLine('[DEPLOY] Compiling WebAssembly sandbox...'), 300);
        setTimeout(() => appendTerminalLine('[DEPLOY] Promoting isolate across 14 edge regions... [SUCCESS]'), 800);
        break;
      case 'benchmark':
        appendTerminalLine('[BENCH] Simulating 100,000 requests/sec across 3 regions...');
        setTimeout(() => {
          appendTerminalLine('[BENCH] Results: 100k RPS completed in 1,000ms.');
          appendTerminalLine('[BENCH] P50: 0.31ms | P95: 0.64ms | P99: 0.89ms. Zero dropped packets.');
        }, 600);
        break;
      case 'whoami':
        appendTerminalLine('aspaloyy@system-architect [Access Level: Enterprise Admin]');
        break;
      case 'clear':
        if (terminalClear) terminalClear.click();
        break;
      default:
        appendTerminalLine(`<span style="color: #ef4444;">Command not found: ${escapeHtml(cmd)}. Type 'help' for available commands.</span>`);
    }
    appendTerminalLine('&nbsp;');
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Copy Snippet Buttons
  document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
      const text = button.getAttribute('data-clipboard');
      navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.color = 'var(--success-green)';
        setTimeout(() => {
          button.textContent = originalText;
          button.style.color = '';
        }, 2000);
      });
    });
  });
});

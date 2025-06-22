const botResponses = [
  "Interesting!",
  "Tell me more...",
  "Why do you think that?",
  "Really? 😯",
  "I totally agree.",
  "Can you explain that?",
];

export function fakeReply(userText) {
  return new Promise((resolve) => {
    const delay = 1000 + Math.random() * 1000;

    setTimeout(() => {
      resolve({
        id: crypto.randomUUID(),
        sender: "🤖 Bot",
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        timestamp: new Date().toISOString(),
      });
    }, delay);
  });
}

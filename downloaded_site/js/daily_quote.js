document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "The best marketing doesn't feel like marketing.",
    "Storytelling is the most powerful way to put ideas into the world.",
    "Content is the reason search began in the first place.",
    "Great marketing makes the company look smart. Great content makes the customer feel smart.",
    "Your brand is what other people say about you when you're not in the room.",
    "Creativity is intelligence having fun.",
    "Don't build links. Build relationships.",
    "People don't buy what you do. They buy why you do it.",
    "The aim of marketing is to know and understand the customer so well the product or service fits them and sells itself.",
    "In the world of internet customer service, it's important to remember your competitor is only one mouse click away.",
    "If your stories are all about your products and services, that's not storytelling. It's a brochure.",
    "Good content isn't about good storytelling. It's about telling a true story well.",
    "Make it simple. Make it memorable. Make it inviting to look at.",
    "Marketing is telling the world you're a rock star. Content marketing is showing the world you are one.",
    "Either write something worth reading or do something worth writing about.",
    "Content builds relationships. Relationships are built on trust. Trust drives revenue.",
    "The secret of getting ahead is getting started.",
    "Every brand has a story. The ones worth following make you feel something.",
    "You don't need a huge following. You need a real one.",
    "Attention is the beginning of devotion.",
    "To do two things at once is to do neither.",
    "A small audience that trusts you is worth more than a large audience that doesn't.",
    "The camera adds ten pounds, but it also adds ten thousand opportunities.",
    "She's not just creating content. She's building a world.",
    "Strategy without creativity is a spreadsheet. Creativity without strategy is art.",
    "Every scroll is a chance. Every caption is a handshake.",
    "Data tells you what happened. Storytelling makes people care.",
    "The first draft of anything is just the beginning of the conversation.",
    "Make something people love and can't stop talking about.",
    "Show up consistently and the algorithm isn't your enemy — it's your biggest fan.",
    "Behind every viral post is a person who understood their audience better than anyone else.",
    "The best time to start was yesterday. The second best time is now.",
    "Boldness has genius, power and magic in it.",
    "Done is better than perfect.",
];

  function getDailyQuote(quoteArray) {
    if (!quoteArray || quoteArray.length === 0) return "No quotes available.";

    const today = new Date();
    const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
      hash = dateString.charCodeAt(i) + ((hash << 5) - hash);
    }

    const randomIndex = Math.abs(hash) % quoteArray.length;
    
    return quoteArray[randomIndex];
  }

  const quoteElement = document.getElementById("daily-quote-text");
  if (quoteElement) {
    quoteElement.textContent = `“${getDailyQuote(quotes)}”`;
  }
});
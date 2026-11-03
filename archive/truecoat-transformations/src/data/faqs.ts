/**
 * Frequently asked questions. The answers are general and make no promises
 * about prices, times or guarantees. The owner must check them before launch.
 */
export type Faq = { question: string; answer: string }

export const faqs: Faq[] = [
  {
    question: 'How do I get an estimate?',
    answer:
      'Send us a message on WhatsApp or call us. Tell us about the rooms or walls, and send a few photos if you can. We then discuss the work with you and prepare an estimate for the agreed scope.',
  },
  {
    question: 'Can you help me choose colours?',
    answer:
      'Yes. We can discuss colours and finishes with you before the work starts. Colours look different in different light, so we suggest that you see a sample on your own wall first.',
  },
  {
    question: 'Do you paint one room, or only a full home?',
    answer:
      'Both. Tell us what you need: one feature wall, one room, a full apartment or the outside of the house.',
  },
  {
    question: 'Do you paint apartments?',
    answer:
      'Yes. Apartment painting is one of our main services. Tell us about any building rules, for example the times when work is permitted.',
  },
  {
    question: 'What do I need to do before the painters arrive?',
    answer:
      'We tell you before the start date. Usually it helps to remove small items and to clear space near the walls. We cover the floors and the furniture that stays in the room.',
  },
  {
    question: 'How can I contact you?',
    answer:
      'Use the WhatsApp or call buttons on this page, or send your details with the form in the contact section.',
  },
]

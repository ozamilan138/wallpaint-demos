/**
 * Questions and answers. The answers are general. The owner must confirm them
 * and add details such as areas, timings and visit arrangements.
 */
export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'Can I paint only one room?',
    answer:
      'Yes. You can ask about one room, one wall or a larger project. Tell us which space you want to paint, and we can discuss what it needs.',
  },
  {
    question: 'Can I get guidance with colour selection?',
    answer:
      'Yes. You can use the colour planner on this page to share the room, mood and palette that you like. We can then talk about colours and finishes with you. Always test real paint samples on your wall before you decide.',
  },
  {
    question: 'Do you handle complete apartment painting?',
    answer:
      'Apartment painting is one of the services we discuss. Tell us the number of rooms and what you want to change, and we can talk about the scope of the work.',
  },
  {
    question: 'Can I discuss options for my budget?',
    answer:
      'Yes. In the planner you can choose a broad budget preference, or you can say that you would like guidance. We use it to understand your expectations. It is not a price.',
  },
  {
    question: 'Do you provide painting estimates?',
    answer:
      'Yes. Share your requirements, and we can discuss the work and prepare an estimate. The estimate depends on the space, the condition of the walls and the finish that you choose.',
  },
  {
    question: 'How can I contact the painting team?',
    answer:
      'Use any WhatsApp or Call button on this page, or send your details with the enquiry form. Your planner choices go into the WhatsApp message, so you do not need to type them again.',
  },
]

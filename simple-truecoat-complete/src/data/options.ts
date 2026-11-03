/**
 * Flexible painting options.
 * These are ways to describe a project. They are not fixed packages and they have no prices.
 */
export interface PaintingOption {
  id: string
  title: string
  description: string
  needs: string[]
  /** Colour of the paint-chip strip at the top of the card. It is decoration only. */
  chip: string
}

export const paintingOptions: PaintingOption[] = [
  {
    id: 'essential',
    title: 'Essential Refresh',
    description: 'Freshen up your existing walls without a big project.',
    needs: ['One or two tired rooms', 'A refresh before guests, a sale or a tenant', 'Same colours, or a small change'],
    chip: '#527D62',
  },
  {
    id: 'complete',
    title: 'Complete Home Refresh',
    description: 'Repaint several rooms or most of the home as one planned project.',
    needs: ['Most rooms of an apartment or house', 'Moving in or after a renovation', 'One colour plan across the home'],
    chip: '#C89C65',
  },
  {
    id: 'personal',
    title: 'Personalised Painting Solution',
    description: 'Specific colours, a feature wall, a texture or your own ideas.',
    needs: ['A feature wall or a bold colour', 'Textured or decorative finishes', 'A room plan with your own details'],
    chip: '#26332D',
  },
]

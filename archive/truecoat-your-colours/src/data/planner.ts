/**
 * Options for the project requirement planner.
 *
 * The budget options are broad words on purpose. Do not add prices here.
 * The planner helps the team understand what the customer expects. It does
 * not calculate an estimate.
 */
export interface Option {
  id: string
  label: string
  hint?: string
}

export const propertyTypes: Option[] = [
  { id: 'apartment', label: 'Apartment' },
  { id: 'house', label: 'Independent House' },
  { id: 'other', label: 'Other' },
]

export const projectScopes: Option[] = [
  { id: 'single', label: 'Single Room' },
  { id: 'multiple', label: 'Multiple Rooms' },
  { id: 'complete', label: 'Complete Home' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'unsure', label: 'Not Sure Yet' },
]

export const paintingStyles: Option[] = [
  { id: 'minimal', label: 'Simple and Minimal' },
  { id: 'natural', label: 'Warm and Natural' },
  { id: 'modern', label: 'Modern and Contemporary' },
  { id: 'undecided', label: 'Not Decided' },
]

export const budgetPreferences: Option[] = [
  { id: 'conscious', label: 'Budget-conscious', hint: 'Keep costs careful' },
  { id: 'mid', label: 'Mid-range', hint: 'A balance of cost and finish' },
  { id: 'flexible', label: 'Flexible depending on requirements', hint: 'Depends on what the work needs' },
  { id: 'guidance', label: 'Would like guidance', hint: 'Talk it through with us' },
]

export function findOption(list: Option[], id: string | null) {
  return list.find((o) => o.id === id) ?? null
}

export const LOCATION_MAX = 80
export const NOTES_MAX = 500

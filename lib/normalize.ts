import { getMetafieldValue } from '@/lib/cosmic'

// Normalize repeater/JSON fields into a string array of display text
export function normalizeBadges(field: unknown): string[] {
  if (!field) return []
  if (Array.isArray(field)) {
    return field
      .map((item) => {
        if (typeof item === 'string') return item
        if (typeof item === 'object' && item !== null) {
          const obj = item as Record<string, unknown>
          return getMetafieldValue(obj.text ?? obj.badge ?? obj.title ?? obj.value)
        }
        return ''
      })
      .filter((s) => s.length > 0)
  }
  if (typeof field === 'string') {
    return field
      .split(/\r?\n/)
      .map((s) => s.replace(/^[✓•\-\s]+/, '').trim())
      .filter((s) => s.length > 0)
  }
  return []
}
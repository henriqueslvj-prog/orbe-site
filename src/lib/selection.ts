const KEY = "orbe_selection_v1";

function safeParse(value: string | null): string[] {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed.filter((x) => typeof x === "string");
    return [];
  } catch {
    return [];
  }
}

export function getSelection(): string[] {
  if (typeof window === "undefined") return [];
  return safeParse(localStorage.getItem(KEY));
}

export function getSelectionCount(): number {
  return getSelection().length;
}

export function isSelected(id: string): boolean {
  return getSelection().includes(id);
}

export function addToSelection(id: string) {
  const current = getSelection();
  if (current.includes(id)) return;
  const next = [...current, id];
  localStorage.setItem(KEY, JSON.stringify(next));
}

export function removeFromSelection(id: string) {
  const current = getSelection();
  const next = current.filter((x) => x !== id);
  localStorage.setItem(KEY, JSON.stringify(next));
}

export function clearSelection() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}

export type MetaItem = { label: string; value: string };

// "Role: Unity (C#) Engineer — Design & Implementation" → "Unity (C#) Engineer"
export const shortRole = (role?: string) =>
  role?.replace(/^(Role|役割|担当領域)\s*[:：]\s*/, "").split(/\s*—\s*/)[0].trim() || undefined;

export const buildMeta = (rows: [label: string, value: string | undefined][]): MetaItem[] =>
  rows.filter((r): r is [string, string] => Boolean(r[1])).map(([label, value]) => ({ label, value }));

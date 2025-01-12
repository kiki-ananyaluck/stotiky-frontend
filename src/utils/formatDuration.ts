// Convert duration_ms (milliseconds) to a readable minute:second format
export const formatDuration = (durationMs: number) => {
  const minutes = Math.floor(durationMs / 60000);
  const seconds = Math.floor((durationMs % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
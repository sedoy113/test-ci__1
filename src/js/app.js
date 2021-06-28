// TODO: write your code here
export default function streakOfLife(player) {
  const status = { healthy: 51, wounded: 15, critical: 0 };
  return Object.keys(status).find((name) => status[name] <= player.health);
}

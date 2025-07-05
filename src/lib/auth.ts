export function verifyPassword(input: string): boolean {
  return input === process.env.ADMIN_PASSWORD;
}

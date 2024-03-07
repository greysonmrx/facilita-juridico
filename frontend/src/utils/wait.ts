export async function wait(delay: number = 3000): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, delay));
}

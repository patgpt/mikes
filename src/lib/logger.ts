export const Logger = {
  error: (message: string, error: Error) => {
    console.error(message, error)
  },
  info: (message: string, data: Record<string, unknown>) => {
    console.info(message, data)
  },
}

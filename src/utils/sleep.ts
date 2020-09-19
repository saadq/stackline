export function sleep(milliseconds: number = 1) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  })
}

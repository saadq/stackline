export function sleep(milliseconds: number = 2500) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  })
}

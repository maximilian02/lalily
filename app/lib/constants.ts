export const GALLERY_IMAGES_FORMAT = "webp"

export function shuffleArray(arr: Array<any>) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return [...arr]
}

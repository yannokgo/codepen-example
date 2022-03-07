
function arrondir(num) {
  if (num%1 != 0) {
    if (num-Math.floor(num) >= 0.5) {
      num = Math.floor(num)+1
    } else {
      num = Math.floor(num);
    }
  }
  return num
}
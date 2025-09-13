// function isMobile() {
//   return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
// }
function isMobile() {
  return window.innerWidth <= 768;
}

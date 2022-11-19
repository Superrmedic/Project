// html에 공통부분(header, footer) 적용시키기 위한 js 파일. 스크립트 필수 포함 적용

function includeHTML() {
  let z, elmnt, file, xhttp;

  z = document.getElementsByTagName("*");

  for (let i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("data-include");

    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("data-include");
          includeHTML();
        } //if
      }; //onreadystatechange

      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    } //if - file
  } //for
} //includeHTML

/* ✨ 실행 */
window.addEventListener("DOMContentLoaded", () => {
  includeHTML();
});

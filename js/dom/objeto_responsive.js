const d = document;
const w = window;

export default function responsiveMedia(id, mq, movileContent, desktopContent) {
  let breakpoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = movileContent;
    }
  };

  breakpoint.addListener(responsive);
  responsive(breakpoint);
}

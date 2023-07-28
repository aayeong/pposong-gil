const starIcons = document.querySelectorAll('.bookmark__star-icon i');

function handleStarIcon(event) {
  const FULL_STAR = "fa-solid";
  const EMPTY_STAR = "fa-regular";

  const iconElement = event.currentTarget;

  if (iconElement.classList.contains(FULL_STAR)) {
    iconElement.classList.remove(FULL_STAR);
    iconElement.classList.add(EMPTY_STAR);
  } else {
    iconElement.classList.remove(EMPTY_STAR);
    iconElement.classList.add(FULL_STAR);
  }
}

starIcons.forEach(icon => {
  icon.addEventListener('click', handleStarIcon);
});

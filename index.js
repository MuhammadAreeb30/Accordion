const item = document.getElementsByClassName("item");
const openIcon = document.getElementsByClassName("openIcon");
const closeIcon = document.getElementsByClassName("closeIcon");

for (let i = 0; i < item.length; i++) {

    const result = item[i].addEventListener('click', () => {
        item[i].classList.toggle('active');
        openIcon[i].classList.toggle('icon-hidden');
        closeIcon[i].classList.toggle('icon-show');
    });
}
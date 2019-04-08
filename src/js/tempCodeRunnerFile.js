 more.addEventListener('click'), () => {
    const videosWrapper = document.querySelector('.videos__wrapper');
    more.remove();
    for (let i = 0; i < data[0].length; i++) {
        let card = document.createElement('a');
        card.classList.add('videos__item');
        card.setAttribute('data-url', data[3][i]);
        card.innerHTML = `
        <img src="${data[0][i]}" alt="thumb">
        <div class="videos__item-descr">
            ${data[1][i]}
        </div>
        <div class="videos__item-views">
            ${data[2][i]}
        </div>
        `;
        videosWrapper.appendChild(card);
    }
};
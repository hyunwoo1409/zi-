// 포인트샵 이미지지 
const itemImages = document.querySelectorAll('.item-image');

itemImages.forEach((itemImage) => {
    const tooltip = itemImage.querySelector('.tooltip');

    itemImage.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block'; 
    });

    itemImage.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none'; 
    });
});

const shopGrid = document.querySelector('.shop-grid');
const pageIndicator = document.querySelector('.page-indicator');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

// 페이지 데이터
const pageData = {
    1: [
        { img: '../img/Resident.svg', name: '수련생', tooltip: '최고의 게임을 즐기며 5시간 보내기', price: 100 },
        { img: '../img/Survivor.svg', name: '생존자', tooltip: '5개의 시즌에 참여', price: 173 },
        { img: '../img/Enthusiast.png', name: '애호가', tooltip: '하루 내에 경험치 5000 획득' , price:0},
        { img: '../img/Optimizer.png', name: '탐구자', tooltip: '깃발을 쓰지 않고 50개의 게임을 클리어', price: 200 },
        { img: '../img/Apprentice.png', name: '수습생', tooltip: '초급 레벨의 게임을 50회 완료', price:0 },
        { img: '../img/Adept.png', name: '숙련자', tooltip: '중급 레벨의 게임을 50회 클리어', price:0 },
        { img: '../img/Master.png', name: '대가', tooltip: '상급 레벨의 게임을 50회 클리어', price:0 },
        { img: '../img/Genius.png', name: '천재', tooltip: '추측 없이 어려움 레벨의 게임을 50회 클리어' , price:0},
        { img: '../img/Veteran.png', name: '베테랑', tooltip: '10,000개의 동전 획득', price:0 },
        { img: '../img/Fanatic.png', name: '광신자', tooltip: '가장 어려운 빙고 클리어', price:0 },
        { img: '../img/Guru.svg', name: '권위자', tooltip: '상급 레벨의 게임 100회 중 10회 클리어', price:0 },
        { img: '../img/Sage.svg', name: '현자', tooltip: '초급 레벨의 게임 10회 연속 클리어', price:0 }
    ],
    2: [
        { img: '../img/엔진.svg', name: '엔진', tooltip: '일일 포인트: +1%', price: 52 },
        { img: '../img/선체.svg', name: '선체', tooltip: '일일 포인트: +5%', price: 242 },
        { img: '../img/어뢰.svg', name: '어뢰', tooltip: '활동 점수 (+20% 까지)', price: 144 },
        { img: '../img/레이더.svg', name: '레이더', tooltip: '활동 점수 (+30% 까지)' , price: 208},
        { img: '../img/음파탐지기.svg', name: '음파탐지기', tooltip: '힌트 5개개', price: 317 },
        { img: '../img/토파즈.svg', name: '토파즈', tooltip: '', price: 400 },
        { img: '../img/가넷.svg', name: '가넷넷', tooltip: '', price: 325 }
    ]
};

let currentPage = 1;
const totalPages = Object.keys(pageData).length;

function renderPage(page) {
    shopGrid.innerHTML = ''; 
    pageData[page].forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');
        itemCard.innerHTML = `
            <div class="item-image">
                <img src="${item.img}" alt="${item.name}">
                <div class="tooltip">${item.tooltip}</div>
            </div>
            <p style = "margin-bottom: 20px">${item.name}</p>
            <span>
            <button class="equip-btn">장착</button>
            <button class="unequip-btn">해제</button>
            </span>
        `;
        shopGrid.appendChild(itemCard);
    });

    pageIndicator.textContent = `${page} / ${totalPages}`;
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
    }
});
renderPage(currentPage);

shopGrid.addEventListener('click', (event) => {
    if (event.target.classList.contains('equip-btn')) {
        alert("아이템이 장착되었습니다.");
    }

    if (event.target.classList.contains('unequip-btn')) {
        alert("아이템이 해제되었습니다.");
    }
});

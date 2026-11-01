// ============================================
// TELEGRAM WEB APP INIT
// ============================================

const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#8B1A1A');
    tg.setBackgroundColor('#FFF8F0');
}

// ============================================
// ДАННЫЕ ТОВАРОВ
// ============================================

const products = [
    {
        id: 1,
        name: "Шар «Морозная ночь»",
        category: "balls",
        price: 850,
        oldPrice: null,
        emoji: "🔴",
        badge: "hit",
        badgeText: "Хит",
        material: "Стекло, роспись акрилом",
        size: "8 см",
        bgClass: "bg-red-light",
        description: "Стеклянный шар с ручной росписью. Зимний пейзаж с заснеженными ёлочками и домиком под звёздным небом. Каждый шар расписан вручную, поэтому рисунок уникален."
    },
    {
        id: 2,
        name: "Шар «Золотые узоры»",
        category: "balls",
        price: 750,
        oldPrice: 950,
        emoji: "🟡",
        badge: "sale",
        badgeText: "-20%",
        material: "Стекло, позолота",
        size: "8 см",
        bgClass: "bg-gold-light",
        description: "Элегантный стеклянный шар с золотыми витиеватыми узорами. Покрыт тонким слоем настоящей позолоты. Станет изысканным украшением вашей ёлки."
    },
    {
        id: 3,
        name: "Звезда «Вифлеемская»",
        category: "tops",
        price: 1200,
        oldPrice: null,
        emoji: "⭐",
        badge: "new",
        badgeText: "Новинка",
        material: "Дерево, акриловые краски",
        size: "20 см",
        bgClass: "bg-gold-light",
        description: "Резная деревянная звезда для верхушки ёлки. Вырезана из липы и расписана вручную. Покрыта экологичным лаком для долговечности."
    },
    {
        id: 4,
        name: "Снеговик «Веселый»",
        category: "figures",
        price: 650,
        oldPrice: null,
        emoji: "⛄",
        badge: null,
        badgeText: "",
        material: "Фетр, вата, бисер",
        size: "12 см",
        bgClass: "bg-blue-light",
        description: "Мягкая игрушка-снеговик из фетра. Шарфик связан из шерсти, пуговички из настоящего бисера. Безопасен для детей."
    },
    {
        id: 5,
        name: "Шар «Рубиновый бархат»",
        category: "balls",
        price: 980,
        oldPrice: null,
        emoji: "🔮",
        badge: "hit",
        badgeText: "Хит",
        material: "Стекло, бархат, стразы",
        size: "10 см",
        bgClass: "bg-red-light",
        description: "Роскошный стеклянный шар, обтянутый бархатом глубокого рубинового цвета. Украшен стразами Swarovski, образующими снежинку."
    },
    {
        id: 6,
        name: "Набор «Лесная сказка»",
        category: "sets",
        price: 2800,
        oldPrice: 3500,
        emoji: "🎁",
        badge: "sale",
        badgeText: "-20%",
        material: "Дерево, краски, лак",
        size: "Набор 6 шт.",
        bgClass: "bg-green-light",
        description: "Набор из 6 деревянных игрушек: олень, белка, сова, лисичка, зайчик и ёжик. Каждая фигурка вырезана и расписана вручную."
    },
    {
        id: 7,
        name: "Ангел «Хранитель»",
        category: "figures",
        price: 1100,
        oldPrice: null,
        emoji: "👼",
        badge: "new",
        badgeText: "Новинка",
        material: "Фарфор, роспись",
        size: "14 см",
        bgClass: "bg-pink-light",
        description: "Фарфоровый ангел ручной работы. Нежная роспись с использованием натуральных пигментов. Крылья покрыты перламутровой глазурью."
    },
    {
        id: 8,
        name: "Шар «Изумрудный лес»",
        category: "balls",
        price: 890,
        oldPrice: null,
        emoji: "🟢",
        badge: null,
        badgeText: "",
        material: "Стекло, роспись",
        size: "8 см",
        bgClass: "bg-green-light",
        description: "Стеклянный шар насыщенного изумрудного цвета с росписью в виде заснеженного хвойного леса. Ручная работа мастера Елены."
    },
    {
        id: 9,
        name: "Набор «Пряничные человечки»",
        category: "sets",
        price: 1600,
        oldPrice: null,
        emoji: "🍪",
        badge: "hit",
        badgeText: "Хит",
        material: "Глина, глазурь",
        size: "Набор 4 шт.",
        bgClass: "bg-gold-light",
        description: "Четыре керамических пряничных человечка с разными выражениями лиц. Покрыты пищевой глазурью. Выглядят как настоящие пряники!"
    },
    {
        id: 10,
        name: "Верхушка «Корона»",
        category: "tops",
        price: 1500,
        oldPrice: 1800,
        emoji: "👑",
        badge: "sale",
        badgeText: "-17%",
        material: "Металл, стразы, бархат",
        size: "18 см",
        bgClass: "bg-purple-light",
        description: "Изысканная корона для верхушки ёлки. Каркас из позолоченного металла, украшен бархатными вставками и стразами."
    },
    {
        id: 11,
        name: "Олень «Северный»",
        category: "figures",
        price: 950,
        oldPrice: null,
        emoji: "🦌",
        badge: "new",
        badgeText: "Новинка",
        material: "Дерево, роспись, мох",
        size: "15 см",
        bgClass: "bg-green-light",
        description: "Деревянный олень из берёзы. Рога украшены натуральным мхом и мини-ягодками. Подвешивается на атласную ленту."
    },
    {
        id: 12,
        name: "Набор «Ёлочный бал»",
        category: "sets",
        price: 3200,
        oldPrice: null,
        emoji: "🎄",
        badge: "hit",
        badgeText: "Хит",
        material: "Стекло, роспись, стразы",
        size: "Набор 8 шт.",
        bgClass: "bg-red-light",
        description: "Роскошный набор из 8 стеклянных шаров разного размера в красно-золотой гамме. Каждый шар уникален. Идеален для подарка."
    }
];

// ============================================
// КОРЗИНА
// ============================================

let cart = [];

function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    showToast(`🎄 "${product.name}" добавлен!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartUI() {
    const cartFloat = document.getElementById('cartFloat');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    const count = getCartCount();
    const total = getCartTotal();

    if (count > 0) {
        cartFloat.style.display = 'flex';
        cartCount.textContent = count;
        cartTotal.textContent = total.toLocaleString('ru-RU');
    } else {
        cartFloat.style.display = 'none';
    }

    // Обновляем кнопки в карточках
    document.querySelectorAll('.btn-cart-small').forEach(btn => {
        const id = parseInt(btn.dataset.id);
        if (cart.find(item => item.id === id)) {
            btn.classList.add('added');
            btn.textContent = '✓';
        } else {
            btn.classList.remove('added');
            btn.textContent = '🛒';
        }
    });

    // Telegram MainButton
    if (tg && count > 0) {
        tg.MainButton.setText(`Оформить заказ — ${total.toLocaleString('ru-RU')} ₽`);
        tg.MainButton.show();
        tg.MainButton.color = '#1A6B2A';
    } else if (tg) {
        tg.MainButton.hide();
    }
}

// ============================================
// ОТРИСОВКА ТОВАРОВ
// ============================================

function renderProducts(category = 'all') {
    const grid = document.getElementById('productsGrid');
    const countEl = document.getElementById('productsCount');

    const filtered = category === 'all'
        ? products
        : products.filter(p => p.category === category);

    countEl.textContent = `${filtered.length} ${declOfNum(filtered.length, ['товар', 'товара', 'товаров'])}`;

    grid.innerHTML = filtered.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image ${product.bgClass}">
                ${product.badge ? `<span class="product-badge badge-${product.badge}">${product.badgeText}</span>` : ''}
                <button class="product-fav" data-id="${product.id}" onclick="event.stopPropagation(); toggleFav(this)">🤍</button>
                <span style="position:relative; z-index:1;">${product.emoji}</span>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-material">${product.material}</div>
                <div class="product-bottom">
                    <div>
                        <span class="product-price">${product.price} ₽</span>
                        ${product.oldPrice ? `<span class="product-price-old">${product.oldPrice} ₽</span>` : ''}
                    </div>
                    <button class="btn-cart-small ${cart.find(i => i.id === product.id) ? 'added' : ''}"
                            data-id="${product.id}"
                            onclick="event.stopPropagation(); handleCartBtn(${product.id})">
                        ${cart.find(i => i.id === product.id) ? '✓' : '🛒'}
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Клик по карточке — модалка
    grid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            openModal(id);
        });
    });
}

function handleCartBtn(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const inCart = cart.find(item => item.id === productId);
    if (inCart) {
        removeFromCart(productId);
        showToast(`❌ "${product.name}" убран из корзины`);
    } else {
        addToCart(product);
    }

    // Тактильная обратная связь
    if (tg?.HapticFeedback) {
        tg.HapticFeedback.impactOccurred('light');
    }
}

function toggleFav(btn) {
    btn.classList.toggle('liked');
    btn.textContent = btn.classList.contains('liked') ? '❤️' : '🤍';

    if (tg?.HapticFeedback) {
        tg.HapticFeedback.impactOccurred('light');
    }
}

// ============================================
// МОДАЛЬНОЕ ОКНО
// ============================================

function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const overlay = document.getElementById('modalOverlay');
    const modalImage = document.getElementById('modalImage');
    const modalBadge = document.getElementById('modalBadge');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalMaterial = document.getElementById('modalMaterial');
    const modalSize = document.getElementById('modalSize');
    const modalPrice = document.getElementById('modalPrice');
    const modalCartBtn = document.getElementById('modalCartBtn');

    modalImage.className = `modal-image ${product.bgClass}`;
    modalImage.innerHTML = `<span style="position:relative;z-index:1">${product.emoji}</span>`;

    if (product.badge) {
        modalBadge.style.display = 'inline-block';
        modalBadge.className = `modal-badge badge-${product.badge}`;
        modalBadge.textContent = product.badgeText;
    } else {
        modalBadge.style.display = 'none';
    }

    modalTitle.textContent = product.name;
    modalDescription.textContent = product.description;
    modalMaterial.textContent = product.material;
    modalSize.textContent = product.size;
    modalPrice.innerHTML = `${product.price} ₽${product.oldPrice ? ` <span class="product-price-old">${product.oldPrice} ₽</span>` : ''}`;

    modalCartBtn.onclick = () => {
        addToCart(product);
        closeModal();
        if (tg?.HapticFeedback) {
            tg.HapticFeedback.notificationOccurred('success');
        }
    };

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (tg?.HapticFeedback) {
        tg.HapticFeedback.impactOccurred('medium');
    }
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Закрытие по клику вне модалки
document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalOverlay')) {
        closeModal();
    }
});

document.getElementById('modalClose').addEventListener('click', closeModal);

// ============================================
// КАТЕГОРИИ
// ============================================

document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.category);

        if (tg?.HapticFeedback) {
            tg.HapticFeedback.selectionChanged();
        }
    });
});

// ============================================
// ОФОРМЛЕНИЕ ЗАКАЗА
// ============================================

document.getElementById('cartCheckout').addEventListener('click', checkout);

function checkout() {
    if (cart.length === 0) return;

    const orderText = cart.map(item =>
        `• ${item.name} × ${item.quantity} = ${(item.price * item.quantity).toLocaleString('ru-RU')} ₽`
    ).join('\n');

    const total = getCartTotal().toLocaleString('ru-RU');
    const message = `🎄 Новый заказ!\n\n${orderText}\n\n💰 Итого: ${total} ₽`;

    if (tg) {
        tg.sendData(JSON.stringify({
            action: 'order',
            items: cart,
            total: getCartTotal()
        }));
    } else {
        alert(message);
    }
}

// Telegram MainButton
if (tg) {
    tg.MainButton.onClick(checkout);
}

// ============================================
// СНЕЖИНКИ
// ============================================

function createSnowflakes() {
    const container = document.getElementById('snowflakes');
    const flakes = ['❄', '❅', '❆', '✦', '•'];
    const count = 30;

    for (let i = 0; i < count; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = flakes[Math.floor(Math.random() * flakes.length)];
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.fontSize = `${8 + Math.random() * 14}px`;
        snowflake.style.opacity = 0.3 + Math.random() * 0.5;
        snowflake.style.animationDuration = `${5 + Math.random() * 10}s`;
        snowflake.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(snowflake);
    }
}

// ============================================
// TOAST УВЕДОМЛЕНИЕ
// ============================================

function showToast(message) {
    // Удаляем предыдущий тост
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 2000);
}

// ============================================
// УТИЛИТЫ
// ============================================

function declOfNum(n, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
        n % 100 > 4 && n % 100 < 20
            ? 2
            : cases[n % 10 < 5 ? n % 10 : 5]
    ];
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    createSnowflakes();
    renderProducts('all');
});
const productsData = [
  {
    id: 1,
    name: "Luxury Silk Evening Dress",
    category: "women",
    price: "$120.00",
    oldPrice: "$150.00",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    sale: true
  },
  {
    id: 2,
    name: "Tailored Italian Blazer",
    category: "men",
    price: "$180.00",
    oldPrice: "",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=600&q=80",
    sale: false
  },
  {
    id: 3,
    name: "Minimalist Leather Watch",
    category: "accessories",
    price: "$85.00",
    oldPrice: "$110.00",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=80",
    sale: true
  },
  {
    id: 4,
    name: "Casual Streetwear Hoodie",
    category: "men",
    price: "$65.00",
    oldPrice: "",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
    sale: false
  },
  {
    id: 5,
    name: "Oversized Denim Jacket",
    category: "women",
    price: "$95.00",
    oldPrice: "$120.00",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80",
    sale: true
  },
  {
    id: 6,
    name: "Classic Sunglasses",
    category: "accessories",
    price: "$45.00",
    oldPrice: "",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    sale: false
  },
  {
    id: 7,
    name: "Floral Summer Sundress",
    category: "women",
    price: "$75.00",
    oldPrice: "$90.00",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
    sale: true
  },
  {
    id: 8,
    name: "Urban Leather Sneakers",
    category: "men",
    price: "$110.00",
    oldPrice: "",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
    sale: false
  }
];

let cartCount = 0;
let wishlistCount = 0;

const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const themeToggle = document.getElementById('theme-toggle');
const productGrid = document.getElementById('product-grid');
const backToTopBtn = document.getElementById('back-to-top');
const cartCountEl = document.getElementById('cart-count');
const wishlistCountEl = document.getElementById('wishlist-count');
const toastEl = document.getElementById('toast');
const toastMsgEl = document.getElementById('toast-msg');

const modal = document.getElementById('quick-view-modal');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }

  revealOnScroll();
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

function renderProducts(items) {
  productGrid.innerHTML = '';
  items.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card reveal active';
    card.innerHTML = `
      <div class="product-image-wrap">
        ${product.sale ? `<span class="sale-badge">SALE</span>` : ''}
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="quick-actions">
          <button class="quick-action-btn" onclick="openQuickView(${product.id})" aria-label="Quick View">
            <svg class="icon" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </button>
          <button class="quick-action-btn" onclick="updateWishlist()" aria-label="Add to Wishlist">
            <svg class="icon" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          <button class="quick-action-btn" onclick="updateCart()" aria-label="Add to Cart">
            <svg class="icon" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path></svg>
          </button>
        </div>
      </div>
      <div class="product-details">
        <div class="product-category">${product.category}</div>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-price">
          ${product.price}
          ${product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : ''}
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    if (filter === 'all') {
      renderProducts(productsData);
    } else {
      const filtered = productsData.filter(p => p.category === filter);
      renderProducts(filtered);
    }
  });
});

function showToast(msg) {
  toastMsgEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => {
    toastEl.classList.remove('show');
  }, 3000);
}

function updateCart() {
  cartCount++;
  cartCountEl.textContent = cartCount;
  cartCountEl.classList.add('bounce');
  setTimeout(() => cartCountEl.classList.remove('bounce'), 400);
  showToast('Item added to your shopping bag!');
}

function updateWishlist() {
  wishlistCount++;
  wishlistCountEl.textContent = wishlistCount;
  wishlistCountEl.classList.add('bounce');
  setTimeout(() => wishlistCountEl.classList.remove('bounce'), 400);
  showToast('Saved to your wishlist!');
}

function openQuickView(id) {
  const product = productsData.find(p => p.id === id);
  if (!product) return;

  modalImg.src = product.image;
  modalTitle.textContent = product.name;
  modalPrice.textContent = product.price;
  modal.classList.add('active');
}

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});

const reviewsTrack = document.getElementById('reviews-track');
const prevReview = document.getElementById('prev-review');
const nextReview = document.getElementById('next-review');
let reviewIndex = 0;

nextReview.addEventListener('click', () => {
  reviewIndex = (reviewIndex + 1) % 2;
  reviewsTrack.style.transform = `translateX(-${reviewIndex * 100}%)`;
});

prevReview.addEventListener('click', () => {
  reviewIndex = (reviewIndex - 1 + 2) % 2;
  reviewsTrack.style.transform = `translateX(-${reviewIndex * 100}%)`;
});

function startCountdown() {
  const daysEl = document.getElementById('timer-days');
  const hoursEl = document.getElementById('timer-hours');
  const minsEl = document.getElementById('timer-mins');
  const secsEl = document.getElementById('timer-secs');

  let time = 86400 * 2;

  setInterval(() => {
    if (time <= 0) return;
    time--;

    const d = Math.floor(time / (3600 * 24));
    const h = Math.floor((time % (3600 * 24)) / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = Math.floor(time % 60);

    daysEl.textContent = String(d).padStart(2, '0');
    hoursEl.textContent = String(h).padStart(2, '0');
    minsEl.textContent = String(m).padStart(2, '0');
    secsEl.textContent = String(s).padStart(2, '0');
  }, 1000);
}

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach(reveal => {
    const revealTop = reveal.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      reveal.classList.add('active');
    }
  });
}

document.getElementById('newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('Thank you for subscribing!');
  e.target.reset();
});

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function (e) {
    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;

    const ripples = document.createElement('span');
    ripples.className = 'ripple';
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(() => ripples.remove(), 600);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(productsData);
  startCountdown();
  revealOnScroll();
});
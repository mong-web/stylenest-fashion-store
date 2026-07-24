:root {
  --bg-main: #FAFAFA;
  --surface: #FFFFFF;
  --primary: #111111;
  --accent: #E63946;
  --secondary: #2563EB;
  --gold: #C9A227;
  --text: #222222;
  --muted: #6B7280;
  --border: #E5E7EB;
  --glass: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.3);
  --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.12);

  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --max-width: 1280px;
}

body.dark-mode {
  --bg-main: #0D0D0D;
  --surface: #181818;
  --primary: #FFFFFF;
  --text: #F3F4F6;
  --muted: #9CA3AF;
  --border: #27272A;
  --glass: rgba(24, 24, 24, 0.7);
  --glass-border: rgba(255, 255, 255, 0.1);
  --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  background-color: var(--bg-main);
  color: var(--text);
  font-family: var(--font-body);
  line-height: 1.6;
  overflow-x: hidden;
  transition: background-color 0.3s ease, color 0.3s ease;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-padding {
  padding: 5rem 0;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
}

.section-subtitle {
  text-align: center;
  color: var(--muted);
  font-size: 1rem;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.icon {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  vertical-align: middle;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: var(--radius-sm);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background-color: var(--primary);
  color: var(--bg-main);
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-outline {
  border: 1.5px solid var(--primary);
  color: var(--primary);
}

.btn-outline:hover {
  background-color: var(--primary);
  color: var(--bg-main);
  transform: translateY(-2px);
}

.btn-accent {
  background-color: var(--accent);
  color: #FFFFFF;
}

.btn-accent:hover {
  background-color: #d62839;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 0.6s linear;
  background-color: rgba(255, 255, 255, 0.4);
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

.glass-panel {
  background: var(--glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.25rem 0;
  transition: var(--transition);
}

.navbar.scrolled {
  background: var(--glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  padding: 0.85rem 0;
  box-shadow: var(--shadow-sm);
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-logo {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.brand-logo span {
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding: 0.25rem 0;
  transition: var(--transition);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent);
  transition: var(--transition);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-icons {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.icon-btn {
  position: relative;
  color: var(--text);
  padding: 0.25rem;
  transition: var(--transition);
}

.icon-btn:hover {
  color: var(--accent);
  transform: translateY(-2px);
}

.badge {
  position: absolute;
  top: -4px;
  right: -6px;
  background-color: var(--accent);
  color: #FFFFFF;
  font-size: 0.65rem;
  font-weight: 700;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.badge.bounce {
  animation: bounce 0.4s ease;
}

@keyframes bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.4); }
}

.mobile-menu-btn {
  display: none;
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 5rem;
  overflow: hidden;
  background: radial-gradient(circle at 80% 20%, rgba(230, 57, 70, 0.05) 0%, transparent 50%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-content {
  z-index: 2;
}

.hero-tag {
  display: inline-block;
  padding: 0.35rem 1rem;
  background-color: rgba(230, 57, 70, 0.1);
  color: var(--accent);
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: var(--radius-full);
  margin-bottom: 1.25rem;
}

.hero-title {
  font-family: var(--font-heading);
  font-size: 3.8rem;
  line-height: 1.1;
  margin-bottom: 1.25rem;
  letter-spacing: -1px;
}

.hero-title span {
  font-style: italic;
  color: var(--accent);
}

.hero-desc {
  font-size: 1.1rem;
  color: var(--muted);
  margin-bottom: 2rem;
  max-width: 480px;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.hero-image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
}

.hero-image-card {
  width: 100%;
  max-width: 450px;
  height: 560px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow-lg);
}

.hero-image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s cubic-bezier(0.2, 1, 0.2, 1);
}

.hero-image-card:hover img {
  transform: scale(1.05);
}

.floating-badge {
  position: absolute;
  bottom: 2rem;
  left: -2rem;
  padding: 1rem 1.5rem;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: var(--shadow-md);
  animation: float 4s ease-in-out infinite;
  z-index: 3;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.floating-badge .badge-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--accent);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  z-index: 0;
  opacity: 0.4;
}

.blob-1 {
  width: 300px;
  height: 300px;
  background: var(--accent);
  top: 10%;
  right: 5%;
}

.blob-2 {
  width: 250px;
  height: 250px;
  background: var(--gold);
  bottom: 10%;
  left: 5%;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.category-card {
  position: relative;
  height: 380px;
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
}

.category-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.category-card:hover img {
  transform: scale(1.08);
}

.category-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  color: #FFFFFF;
  transition: var(--transition);
}

.category-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.category-subtitle {
  font-size: 0.85rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.filter-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1.25rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--muted);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.filter-btn.active,
.filter-btn:hover {
  background-color: var(--primary);
  color: var(--bg-main);
  border-color: var(--primary);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.product-card {
  background-color: var(--surface);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border);
  transition: var(--transition);
  position: relative;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.product-image-wrap {
  position: relative;
  height: 300px;
  overflow: hidden;
  background-color: var(--border);
}

.product-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image-wrap img {
  transform: scale(1.05);
}

.sale-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: var(--accent);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: var(--radius-sm);
  text-transform: uppercase;
}

.quick-actions {
  position: absolute;
  bottom: -50px;
  left: 0;
  width: 100%;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  background: var(--glass);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: var(--transition);
}

.product-card:hover .quick-actions {
  bottom: 0;
}

.quick-action-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--surface);
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.quick-action-btn:hover {
  background: var(--primary);
  color: var(--bg-main);
}

.product-details {
  padding: 1.25rem;
}

.product-category {
  font-size: 0.75rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
}

.product-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.1rem;
}

.old-price {
  text-decoration: line-through;
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 400;
}

.promo-banner {
  background: linear-gradient(135deg, #111111 0%, #222222 100%);
  color: #FFFFFF;
  border-radius: var(--radius-lg);
  padding: 3.5rem 2rem;
  margin: 4rem 0;
  position: relative;
  overflow: hidden;
}

body.dark-mode .promo-banner {
  background: linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%);
}

.promo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.promo-content h3 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.promo-content p {
  color: #9CA3AF;
  margin-bottom: 1.5rem;
}

.countdown-timer {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.timer-block {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-md);
  padding: 0.75rem 1rem;
  min-width: 70px;
  text-align: center;
}

.timer-block .number {
  font-size: 1.5rem;
  font-weight: 700;
  display: block;
  color: var(--gold);
}

.timer-block .label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #D1D5DB;
}

.perks-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 1.5rem;
}

.perk-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #E5E7EB;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.feature-card {
  padding: 2rem 1.5rem;
  border-radius: var(--radius-md);
  text-align: center;
  border: 1px solid var(--border);
  transition: var(--transition);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}

.feature-icon-box {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(230, 57, 70, 0.1);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
}

.feature-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.feature-desc {
  font-size: 0.85rem;
  color: var(--muted);
}

.reviews-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.reviews-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.review-card {
  min-width: 100%;
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  background-color: var(--surface);
  border: 1px solid var(--border);
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.review-stars {
  color: var(--gold);
  margin-bottom: 1rem;
}

.review-text {
  font-size: 1.15rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.reviewer-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.reviewer-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.reviewer-name {
  font-weight: 600;
  text-align: left;
}

.reviewer-role {
  font-size: 0.75rem;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.slider-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.slider-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  transition: var(--transition);
}

.slider-btn:hover {
  background-color: var(--primary);
  color: var(--bg-main);
}

.insta-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
}

.insta-item {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
}

.insta-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.insta-item:hover img {
  transform: scale(1.1);
}

.insta-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.insta-item:hover .insta-overlay {
  opacity: 1;
}

.timeline {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  position: relative;
  margin-top: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 35px;
  left: 10%;
  right: 10%;
  height: 2px;
  background: var(--border);
  z-index: 0;
}

.timeline-step {
  position: relative;
  z-index: 1;
  text-align: center;
}

.step-number {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--surface);
  border: 2px solid var(--accent);
  color: var(--accent);
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  box-shadow: var(--shadow-sm);
}

.timeline-step h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.timeline-step p {
  font-size: 0.85rem;
  color: var(--muted);
  max-width: 250px;
  margin: 0 auto;
}

.newsletter-section {
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: 4rem 2rem;
  border: 1px solid var(--border);
  text-align: center;
}

.newsletter-form {
  display: flex;
  max-width: 500px;
  margin: 1.5rem auto 0;
  gap: 0.5rem;
}

.newsletter-input {
  flex: 1;
  padding: 0.85rem 1.25rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background-color: var(--bg-main);
  color: var(--text);
  outline: none;
  transition: var(--transition);
}

.newsletter-input:focus {
  border-color: var(--accent);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.social-cta-btns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem;
  border-radius: var(--radius-sm);
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  transition: var(--transition);
}

.btn-fb { background-color: #1877F2; }
.btn-msg { background-color: #0084FF; }
.btn-wa { background-color: #25D366; }
.btn-ig { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }

.social-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.map-placeholder {
  width: 100%;
  height: 320px;
  border-radius: var(--radius-md);
  background-color: var(--surface);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  border: 1px solid var(--border);
}

.footer {
  background-color: var(--primary);
  color: var(--bg-main);
  padding: 4rem 0 2rem;
  margin-top: 5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand p {
  color: #9CA3AF;
  margin-top: 1rem;
  max-width: 300px;
  font-size: 0.9rem;
}

.footer-heading {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  margin-bottom: 1.25rem;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.6rem;
}

.footer-links a {
  color: #9CA3AF;
  font-size: 0.85rem;
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--accent);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #9CA3AF;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: var(--transition);
}

.modal.active {
  opacity: 1;
  pointer-events: all;
}

.modal-content {
  background: var(--surface);
  border-radius: var(--radius-lg);
  width: 90%;
  max-width: 800px;
  padding: 2rem;
  position: relative;
  transform: translateY(20px);
  transition: var(--transition);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  border: 1px solid var(--border);
}

.modal.active .modal-content {
  transform: translateY(0);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: var(--muted);
  cursor: pointer;
  transition: var(--transition);
}

.modal-close:hover {
  color: var(--text);
}

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--primary);
  color: var(--bg-main);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  opacity: 0;
  pointer-events: none;
  transition: var(--transition);
  z-index: 900;
}

.back-to-top.visible {
  opacity: 1;
  pointer-events: all;
}

.toast {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  background-color: var(--primary);
  color: var(--bg-main);
  padding: 0.85rem 1.5rem;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-lg);
  transform: translateY(100px);
  opacity: 0;
  transition: var(--transition);
  z-index: 3000;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.toast.show {
  transform: translateY(0);
  opacity: 1;
}

@media (max-width: 1024px) {
  .hero-title { font-size: 3rem; }
  .categories-grid, .products-grid, .features-grid { grid-template-columns: repeat(2, 1fr); }
  .insta-grid { grid-template-columns: repeat(3, 1fr); }
  .footer-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .hero-grid, .promo-grid, .contact-grid { grid-template-columns: 1fr; text-align: center; }
  .hero-desc { margin: 0 auto 2rem; }
  .hero-cta { justify-content: center; }
  .floating-badge { left: 50%; transform: translateX(-50%); bottom: 1rem; }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 75%;
    height: 100vh;
    background-color: var(--surface);
    flex-direction: column;
    padding: 6rem 2rem;
    box-shadow: var(--shadow-lg);
    transition: var(--transition);
  }

  .nav-links.active { right: 0; }
  .mobile-menu-btn { display: block; z-index: 1001; }

  .timeline { grid-template-columns: 1fr; gap: 2.5rem; }
  .timeline::before { display: none; }

  .modal-content { grid-template-columns: 1fr; max-height: 85vh; overflow-y: auto; }
}

@media (max-width: 480px) {
  .categories-grid, .products-grid, .features-grid { grid-template-columns: 1fr; }
  .insta-grid { grid-template-columns: repeat(2, 1fr); }
  .social-cta-btns { grid-template-columns: 1fr; }
  .perks-grid { grid-template-columns: 1fr; }
  .hero-title { font-size: 2.4rem; }
}

// Enhanced platform list with more social media platforms
const availablePlatforms = {
    // Video & Content Platforms
    'tiktok': { name: 'TikTok', icon: 'fab fa-tiktok', color: '#000000' },
    'youtube': { name: 'YouTube', icon: 'fab fa-youtube', color: '#ff0000' },
    'twitch': { name: 'Twitch', icon: 'fab fa-twitch', color: '#9146ff' },
    'vimeo': { name: 'Vimeo', icon: 'fab fa-vimeo', color: '#1ab7ea' },
    'dailymotion': { name: 'Dailymotion', icon: 'fab fa-dailymotion', color: '#0066dc' },
    
    // Social Networks
    'threads': { name: 'Threads', icon: 'fas fa-at', color: '#000000' },
    'snapchat': { name: 'Snapchat', icon: 'fab fa-snapchat', color: '#fffc00' },
    'pinterest': { name: 'Pinterest', icon: 'fab fa-pinterest', color: '#bd081c' },
    'reddit': { name: 'Reddit', icon: 'fab fa-reddit', color: '#ff4500' },
    'tumblr': { name: 'Tumblr', icon: 'fab fa-tumblr', color: '#35465c' },
    'medium': { name: 'Medium', icon: 'fab fa-medium', color: '#000000' },
    'quora': { name: 'Quora', icon: 'fab fa-quora', color: '#aa2200' },
    'vk': { name: 'VKontakte', icon: 'fab fa-vk', color: '#4c75a3' },
    'wechat': { name: 'WeChat', icon: 'fab fa-weixin', color: '#09b83e' },
    
    // Professional Networks
    'linkedin': { name: 'LinkedIn', icon: 'fab fa-linkedin', color: '#0077b5' },
    'behance': { name: 'Behance', icon: 'fab fa-behance', color: '#1769ff' },
    'dribbble': { name: 'Dribbble', icon: 'fab fa-dribbble', color: '#ea4c89' },
    'github': { name: 'GitHub', icon: 'fab fa-github', color: '#333333' },
    'gitlab': { name: 'GitLab', icon: 'fab fa-gitlab', color: '#fc6d26' },
    'stack-overflow': { name: 'Stack Overflow', icon: 'fab fa-stack-overflow', color: '#f58025' },
    
    // Gaming & Entertainment
    'discord': { name: 'Discord', icon: 'fab fa-discord', color: '#5865f2' },
    'steam': { name: 'Steam', icon: 'fab fa-steam', color: '#000000' },
    'xbox': { name: 'Xbox', icon: 'fab fa-xbox', color: '#107c10' },
    'playstation': { name: 'PlayStation', icon: 'fab fa-playstation', color: '#003087' },
    'nintendo': { name: 'Nintendo Switch', icon: 'fas fa-gamepad', color: '#e60012' },
    
    // Music & Audio
    'spotify': { name: 'Spotify', icon: 'fab fa-spotify', color: '#1db954' },
    'apple-music': { name: 'Apple Music', icon: 'fab fa-apple', color: '#fa233b' },
    'soundcloud': { name: 'SoundCloud', icon: 'fab fa-soundcloud', color: '#ff3300' },
    'bandcamp': { name: 'Bandcamp', icon: 'fab fa-bandcamp', color: '#629aa0' },
    'clubhouse': { name: 'Clubhouse', icon: 'fas fa-microphone', color: '#f1c40f' },
    
    // Business & Commerce
    'etsy': { name: 'Etsy', icon: 'fab fa-etsy', color: '#f16521' },
    'amazon': { name: 'Amazon', icon: 'fab fa-amazon', color: '#ff9900' },
    'shopify': { name: 'Shopify', icon: 'fab fa-shopify', color: '#95bf47' },
    'patreon': { name: 'Patreon', icon: 'fab fa-patreon', color: '#f96854' },
    'ko-fi': { name: 'Ko-fi', icon: 'fas fa-coffee', color: '#ff5e5b' },
    
    // Website & Portfolio
    'website': { name: 'Website', icon: 'fas fa-globe', color: '#007AFF' },
    'portfolio': { name: 'Portfolio', icon: 'fas fa-briefcase', color: '#6c5ce7' },
    'blog': { name: 'Blog', icon: 'fas fa-blog', color: '#00b894' },
    'resume': { name: 'Resume/CV', icon: 'fas fa-file-user', color: '#0984e3' },
    'store': { name: 'Online Store', icon: 'fas fa-shopping-cart', color: '#00cec9' },
    'linktree': { name: 'Other Linktree', icon: 'fas fa-tree', color: '#39e09b' },
    
    // Custom & Others
    'custom': { name: 'Custom Link', icon: 'fas fa-link', color: '#74b9ff' },
    'calendly': { name: 'Calendly', icon: 'fas fa-calendar', color: '#006bff' },
    'notion': { name: 'Notion', icon: 'fas fa-sticky-note', color: '#000000' },
    'signal': { name: 'Signal', icon: 'fas fa-comments', color: '#3a76f0' }
};

// Color presets
const colorPresets = {
    'default': {
        name: '#ffffff',
        bio: '#888888',
        links: '#ffffff'
    },
    'vibrant': {
        name: '#ff6b6b',
        bio: '#4ecdc4', 
        links: '#45b7d1'
    },
    'pastel': {
        name: '#ffa8b6',
        bio: '#c7ceea',
        links: '#b4f8c8'
    },
    'neon': {
        name: '#00ff41',
        bio: '#00d4ff',
        links: '#ff00ff'
    },
    'monochrome': {
        name: '#ffffff',
        bio: '#cccccc',
        links: '#999999'
    }
};

// Multi-language translations (simplified)
const translations = {
    en: {
        admin_access: 'Admin Access',
        password: 'Password',
        enter_password: 'Enter admin password',
        login: 'Login',
        admin_hint: 'Admin access required for editing',
        add_link: 'Add Link',
        manage: 'Manage',
        edit_mode: 'Edit Mode',
        save: 'Save',
        share: 'Share',
        theme: 'Theme',
        design: 'Design',
        layouts: 'Layouts',
        gallery: 'Gallery',
        store: 'Store',
        crm: 'CRM',
        ai: 'AI',
        logout: 'Logout',
        admin: 'Admin'
    }
    // Add more languages as needed
};

class LinkTree {
    constructor() {
        this.isEditMode = false;
        this.isManageMode = false;
        this.isAdminMode = false;
        this.adminPassword = 'MyLinkTree2024!'; // CHANGE THIS PASSWORD!
        this.currentLanguage = 'en';
        this.currentLayout = 'default';
        
        this.analytics = {
            totalClicks: 0,
            uniqueVisitors: 0,
            todayClicks: 0,
            linkClicks: {},
            conversionRate: 0,
            avgSession: 0,
            lastClickDate: new Date().toDateString()
        };
        
        this.fonts = {
            name: 'apple',
            bio: 'apple',
            links: 'apple'
        };
        
        this.colors = {
            name: '#ffffff',
            bio: '#888888',
            links: '#ffffff'
        };
        
        this.gallery = [];
        this.products = [];
        this.leads = [];
        this.deferredPrompt = null;
        this.sessionStart = Date.now();
        
        this.init();
    }

    init() {
        this.loadProfile();
        this.bindEvents();
        this.loadAnalytics();
        this.loadFonts();
        this.loadColors();
        this.loadGallery();
        this.loadProducts();
        this.loadLeads();
        this.loadCustomCSS();
        this.loadBackgroundVideo();
        this.checkAdminSession();
        this.makeProfileEditable();
        this.initPWA();
        this.trackUniqueVisitor();
        this.startSessionTracking();
        
        // Initialize Swiper if available
        if (typeof Swiper !== 'undefined') {
            this.initGallery();
        }
    }

    bindEvents() {
        // Link click events
        document.querySelectorAll('.link-content').forEach(link => {
            link.addEventListener('click', (e) => {
                if (!this.isEditMode && !this.isManageMode && !e.target.closest('.delete-link')) {
                    this.handleLinkClick(e);
                }
            });
        });

        // Save inputs on change (admin only)
        document.querySelectorAll('.link-input').forEach(input => {
            input.addEventListener('change', () => {
                if (this.isAdminMode) {
                    this.saveProfile();
                }
            });
        });

        // Enter key to login
        const adminPassword = document.getElementById('adminPassword');
        if (adminPassword) {
            adminPassword.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.authenticateAdmin();
                }
            });
        }

        // Login tabs
        document.querySelectorAll('.login-tabs .tab-btn').forEach(tab => {
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.login-panel').forEach(p => p.classList.remove('active'));
                
                e.target.classList.add('active');
                const targetPanel = document.getElementById(e.target.dataset.tab + 'Panel');
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }

    makeProfileEditable() {
        const profileName = document.getElementById('profileName');
        const profileBio = document.getElementById('profileBio');

        if (!this.isAdminMode) {
            profileName.removeAttribute('contenteditable');
            profileBio.removeAttribute('contenteditable');
        }

        profileName.addEventListener('blur', () => {
            if (this.isAdminMode) {
                this.saveProfile();
            }
        });

        profileBio.addEventListener('blur', () => {
            if (this.isAdminMode) {
                this.saveProfile();
            }
        });
    }

    handleLinkClick(e) {
        const linkItem = e.currentTarget.closest('.link-item');
        const platform = linkItem.dataset.platform;
        const input = linkItem.querySelector('.link-input');
        
        if (!input) return;
        
        const url = input.value.trim();
        if (!url) return;

        this.trackClick(platform);

        let finalUrl = url;
        
        if (platform === 'whatsapp') {
            finalUrl = `https://wa.me/${url.replace(/\D/g, '')}`;
        } else if (platform === 'email') {
            finalUrl = `mailto:${url}`;
        } else if (!url.startsWith('http')) {
            finalUrl = `https://${url}`;
        }

        window.open(finalUrl, '_blank');
        
        linkItem.style.transform = 'scale(0.98)';
        setTimeout(() => {
            linkItem.style.transform = '';
        }, 150);
    }

    trackClick(platform) {
        this.analytics.totalClicks++;
        
        const today = new Date().toDateString();
        if (this.analytics.lastClickDate !== today) {
            this.analytics.todayClicks = 0;
            this.analytics.lastClickDate = today;
        }
        
        this.analytics.todayClicks++;
        this.analytics.linkClicks[platform] = (this.analytics.linkClicks[platform] || 0) + 1;
        
        // Update click count display
        const linkItem = document.querySelector(`[data-platform="${platform}"]`);
        const clickCountEl = linkItem?.querySelector('.click-count');
        if (clickCountEl) {
            clickCountEl.textContent = this.analytics.linkClicks[platform];
        }
        
        this.saveAnalytics();
        if (this.isAdminMode) {
            this.updateAnalyticsDisplay();
        }
    }

    trackUniqueVisitor() {
        const visitorId = localStorage.getItem('visitor_id') || this.generateUniqueId();
        localStorage.setItem('visitor_id', visitorId);
        
        const lastVisit = localStorage.getItem('last_visit');
        const today = new Date().toDateString();
        
        if (lastVisit !== today) {
            this.analytics.uniqueVisitors++;
            localStorage.setItem('last_visit', today);
            this.saveAnalytics();
        }
    }

    startSessionTracking() {
        setInterval(() => {
            const sessionDuration = Math.floor((Date.now() - this.sessionStart) / 1000);
            this.analytics.avgSession = sessionDuration;
            
            const avgSessionEl = document.getElementById('avgSession');
            if (this.isAdminMode && avgSessionEl) {
                avgSessionEl.textContent = `${sessionDuration}s`;
            }
        }, 5000);
    }

    generateUniqueId() {
        return 'visitor_' + Math.random().toString(36).substr(2, 9);
    }

    // Admin Authentication Functions
    showAdminLogin() {
        const modal = document.getElementById('adminLoginModal');
        if (modal) {
            modal.style.display = 'flex';
            setTimeout(() => {
                const passwordInput = document.getElementById('adminPassword');
                if (passwordInput) {
                    passwordInput.focus();
                }
            }, 100);
        }
    }

    closeAdminLogin() {
        const modal = document.getElementById('adminLoginModal');
        if (modal) {
            modal.style.display = 'none';
        }
        const passwordInput = document.getElementById('adminPassword');
        if (passwordInput) {
            passwordInput.value = '';
        }
    }

    authenticateAdmin() {
        const passwordInput = document.getElementById('adminPassword');
        if (!passwordInput) return;
        
        const enteredPassword = passwordInput.value;
        
        if (enteredPassword === this.adminPassword) {
            this.isAdminMode = true;
            document.body.classList.add('admin-mode');
            this.closeAdminLogin();
            this.enableAdminFeatures();
            
            sessionStorage.setItem('admin_authenticated', 'true');
            
            this.showNotification('Welcome back, Admin! 👑', 'success');
            
            setTimeout(() => {
                const analyticsPanel = document.getElementById('analyticsPanel');
                if (analyticsPanel) {
                    analyticsPanel.style.display = 'block';
                }
            }, 500);
        } else {
            this.showNotification('Incorrect password! ❌', 'error');
            passwordInput.value = '';
            
            const modal = document.querySelector('.admin-login-content');
            if (modal) {
                modal.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    modal.style.animation = '';
                }, 500);
            }
        }
    }

    enableAdminFeatures() {
        const profileName = document.getElementById('profileName');
        const profileBio = document.getElementById('profileBio');
        
        if (profileName) profileName.setAttribute('contenteditable', 'true');
        if (profileBio) profileBio.setAttribute('contenteditable', 'true');
        
        this.loadFonts();
        this.loadColors();
        this.updateAnalyticsDisplay();
        
        const adminStatus = document.getElementById('adminStatus');
        if (adminStatus) {
            adminStatus.style.display = 'block';
        }
    }

    logoutAdmin() {
        if (confirm('Are you sure you want to logout?')) {
            this.isAdminMode = false;
            this.isEditMode = false;
            this.isManageMode = false;
            
            document.body.classList.remove('admin-mode', 'edit-mode', 'manage-mode');
            
            const profileName = document.getElementById('profileName');
            const profileBio = document.getElementById('profileBio');
            
            if (profileName) profileName.removeAttribute('contenteditable');
            if (profileBio) profileBio.removeAttribute('contenteditable');
            
            sessionStorage.removeItem('admin_authenticated');
            
            this.showNotification('Logged out successfully! 👋', 'info');
        }
    }

    checkAdminSession() {
        if (sessionStorage.getItem('admin_authenticated') === 'true') {
            this.isAdminMode = true;
            document.body.classList.add('admin-mode');
            this.enableAdminFeatures();
        }
    }

    // Layout Management
    changeLayout(layout) {
        document.body.classList.remove('layout-default', 'layout-grid', 'layout-cards', 'layout-swipeable');
        document.body.classList.add(`layout-${layout}`);
        this.currentLayout = layout;
        
        document.querySelectorAll('.template-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[data-layout="${layout}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
        
        localStorage.setItem('linktree_layout', layout);
        this.showNotification(`🎨 Layout changed to ${layout}`, 'success');
    }

    // Gallery Management
    initGallery() {
        if (typeof Swiper !== 'undefined') {
            this.gallerySwiper = new Swiper('.gallerySwiper', {
                slidesPerView: 1,
                spaceBetween: 16,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    }
                }
            });
        }
    }

    addGalleryImage() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.multiple = true;
        
        input.onchange = (e) => {
            Array.from(e.target.files).forEach(file => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const imageData = {
                        id: Date.now() + Math.random(),
                        src: e.target.result,
                        name: file.name
                    };
                    
                    this.gallery.push(imageData);
                    this.saveGallery();
                    this.refreshGallery();
                };
                reader.readAsDataURL(file);
            });
        };
        
        input.click();
    }

    refreshGallery() {
        const wrapper = document.getElementById('galleryWrapper');
        if (wrapper) {
            wrapper.innerHTML = this.gallery.map(image => `
                <div class="swiper-slide">
                    <img src="${image.src}" alt="${image.name}">
                    <div class="image-overlay admin-only">
                        <button class="btn btn-danger" onclick="linkTree.removeGalleryImage('${image.id}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    removeGalleryImage(imageId) {
        this.gallery = this.gallery.filter(img => img.id !== imageId);
        this.saveGallery();
        this.refreshGallery();
    }

    saveGallery() {
        localStorage.setItem('linktree_gallery', JSON.stringify(this.gallery));
    }

    loadGallery() {
        const saved = localStorage.getItem('linktree_gallery');
        if (saved) {
            this.gallery = JSON.parse(saved);
            setTimeout(() => {
                this.refreshGallery();
            }, 1000);
        }
    }

    // Product Management
    addProduct() {
        const modal = document.createElement('div');
        modal.className = 'product-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
        `;
        
        modal.innerHTML = `
            <div class="modal-content" style="background: #1c1c1e; padding: 2rem; border-radius: 16px; max-width: 400px; width: 90%;">
                <h3 style="color: white; margin-bottom: 1rem;">Add New Product</h3>
                <form onsubmit="linkTree.saveProduct(event)">
                    <input type="text" name="name" placeholder="Product Name" required style="width: 100%; padding: 12px; margin-bottom: 1rem; background: #2c2c2e; border: 1px solid #333; border-radius: 8px; color: white;">
                    <input type="number" name="price" placeholder="Price" step="0.01" required style="width: 100%; padding: 12px; margin-bottom: 1rem; background: #2c2c2e; border: 1px solid #333; border-radius: 8px; color: white;">
                    <textarea name="description" placeholder="Product Description" style="width: 100%; padding: 12px; margin-bottom: 1rem; background: #2c2c2e; border: 1px solid #333; border-radius: 8px; color: white; min-height: 80px;"></textarea>
                    <input type="file" name="image" accept="image/*" style="width: 100%; padding: 12px; margin-bottom: 1rem; background: #2c2c2e; border: 1px solid #333; border-radius: 8px; color: white;">
                    <input type="url" name="link" placeholder="Purchase Link" required style="width: 100%; padding: 12px; margin-bottom: 1rem; background: #2c2c2e; border: 1px solid #333; border-radius: 8px; color: white;">
                    <div style="display: flex; gap: 1rem;">
                        <button type="submit" class="btn btn-success" style="flex: 1; padding: 12px; background: #28a745; border: none; border-radius: 8px; color: white; cursor: pointer;">Save Product</button>
                        <button type="button" class="btn btn-secondary" onclick="this.closest('.product-modal').remove()" style="flex: 1; padding: 12px; background: #6c757d; border: none; border-radius: 8px; color: white; cursor: pointer;">Cancel</button>
                    </div>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    saveProduct(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        
        const product = {
            id: Date.now(),
            name: formData.get('name'),
            price: parseFloat(formData.get('price')),
            description: formData.get('description'),
            link: formData.get('link'),
            image: null
        };
        
        const imageFile = formData.get('image');
        if (imageFile && imageFile.size > 0) {
            const reader = new FileReader();
            reader.onload = (e) => {
                product.image = e.target.result;
                this.products.push(product);
                this.renderProducts();
                this.saveProducts();
            };
            reader.readAsDataURL(imageFile);
        } else {
            this.products.push(product);
            this.renderProducts();
            this.saveProducts();
        }
        
        form.closest('.product-modal').remove();
        this.showNotification('🛍️ Product added successfully!', 'success');
    }

    renderProducts() {
        const grid = document.getElementById('productsGrid');
        if (grid) {
            grid.innerHTML = this.products.map(product => `
                <div class="product-card">
                    <div class="product-image">
                        ${product.image ? `<img src="${product.image}" alt="${product.name}">` : '<i class="fas fa-box"></i>'}
                    </div>
                    <div class="product-info">
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">$${product.price}</div>
                        <button class="btn btn-buy" onclick="window.open('${product.link}', '_blank')">
                            <i class="fas fa-shopping-cart"></i> Buy Now
                        </button>
                        <button class="btn btn-danger admin-only" onclick="linkTree.removeProduct(${product.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    removeProduct(productId) {
        if (confirm('Remove this product?')) {
            this.products = this.products.filter(p => p.id !== productId);
            this.renderProducts();
            this.saveProducts();
            this.showNotification('🗑️ Product removed', 'success');
        }
    }

    saveProducts() {
        localStorage.setItem('linktree_products', JSON.stringify(this.products));
    }

    loadProducts() {
        const saved = localStorage.getItem('linktree_products');
        if (saved) {
            this.products = JSON.parse(saved);
            this.renderProducts();
        }
    }

    // CRM Functions
    captureEmail(event) {
        event.preventDefault();
        const email = event.target.querySelector('input[type="email"]').value;
        
        const lead = {
            id: Date.now(),
            email: email,
            source: 'Email Capture Form',
            date: new Date().toISOString(),
            status: 'new'
        };
        
        this.leads.push(lead);
        this.saveLeads();
        this.renderLeads();
        this.updateCRMStats();
        
        event.target.reset();
        this.showNotification('📧 Thank you for subscribing!', 'success');
        
        this.analytics.conversionRate = (this.leads.length / this.analytics.uniqueVisitors * 100).toFixed(1);
    }

    renderLeads() {
        const tbody = document.getElementById('leadsTableBody');
        if (tbody) {
            tbody.innerHTML = this.leads.map(lead => `
                <tr>
                    <td>${lead.name || 'N/A'}</td>
                    <td>${lead.email}</td>
                    <td>${lead.source}</td>
                    <td>${new Date(lead.date).toLocaleDateString()}</td>
                    <td>
                        <button class="btn btn-sm btn-danger" onclick="linkTree.deleteLead(${lead.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `).join('');
        }
    }

    deleteLead(leadId) {
        if (confirm('Delete this lead?')) {
            this.leads = this.leads.filter(lead => lead.id !== leadId);
            this.saveLeads();
            this.renderLeads();
            this.updateCRMStats();
        }
    }

    updateCRMStats() {
        const totalLeadsEl = document.getElementById('totalLeads');
        const newLeadsEl = document.getElementById('newLeads');
        const conversionRateEl = document.getElementById('conversionRate');
        
        if (totalLeadsEl) totalLeadsEl.textContent = this.leads.length;
        
        const today = new Date().toDateString();
        const newLeadsToday = this.leads.filter(lead => 
            new Date(lead.date).toDateString() === today
        ).length;
        
        if (newLeadsEl) newLeadsEl.textContent = newLeadsToday;
        if (conversionRateEl) conversionRateEl.textContent = `${this.analytics.conversionRate}%`;
    }

    saveLeads() {
        localStorage.setItem('linktree_leads', JSON.stringify(this.leads));
    }

    loadLeads() {
        const saved = localStorage.getItem('linktree_leads');
        if (saved) {
            this.leads = JSON.parse(saved);
            this.renderLeads();
            this.updateCRMStats();
        }
    }

    // Custom CSS
    applyCustomCSS() {
        const customCSSInput = document.getElementById('customCSSInput');
        const styleElement = document.getElementById('customCSS');
        
        if (customCSSInput && styleElement) {
            try {
                const customCSS = customCSSInput.value;
                styleElement.textContent = customCSS;
                localStorage.setItem('linktree_custom_css', customCSS);
                this.showNotification('🎨 Custom CSS applied successfully!', 'success');
            } catch (error) {
                this.showNotification('❌ Invalid CSS syntax', 'error');
            }
        }
    }

    loadCustomCSS() {
        const saved = localStorage.getItem('linktree_custom_css');
        if (saved) {
            const customCSSInput = document.getElementById('customCSSInput');
            const styleElement = document.getElementById('customCSS');
            
            if (customCSSInput) customCSSInput.value = saved;
            if (styleElement) styleElement.textContent = saved;
        }
    }

    // Background Video
    setBackgroundVideo() {
        const videoURL = document.getElementById('videoURL');
        if (videoURL && videoURL.value) {
            this.setBackgroundVideoSrc(videoURL.value);
        }
    }

    setBackgroundVideoSrc(src) {
        const videoElement = document.querySelector('.background-video video');
        const backgroundVideo = document.getElementById('backgroundVideo');
        
        if (videoElement && backgroundVideo) {
            videoElement.src = src;
            backgroundVideo.style.display = 'block';
            
            localStorage.setItem('linktree_background_video', src);
            this.showNotification('🎬 Background video set!', 'success');
        }
    }

    removeBackgroundVideo() {
        const backgroundVideo = document.getElementById('backgroundVideo');
        if (backgroundVideo) {
            backgroundVideo.style.display = 'none';
        }
        localStorage.removeItem('linktree_background_video');
        this.showNotification('🗑️ Background video removed', 'info');
    }

    loadBackgroundVideo() {
        const saved = localStorage.getItem('linktree_background_video');
        if (saved) {
            this.setBackgroundVideoSrc(saved);
        }
    }

    // PWA Functions
    initPWA() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        }
        
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            this.showPWAPrompt();
        });
        
        window.addEventListener('appinstalled', () => {
            this.hidePWAPrompt();
            this.showNotification('📱 App installed successfully!', 'success');
        });
    }

    showPWAPrompt() {
        const pwaPrompt = document.getElementById('pwaPrompt');
        if (pwaPrompt && this.deferredPrompt) {
            pwaPrompt.style.display = 'block';
        }
    }

    async installPWA() {
        if (this.deferredPrompt) {
            this.deferredPrompt.prompt();
            const { outcome } = await this.deferredPrompt.userChoice;
            
            if (outcome === 'accepted') {
                this.showNotification('📱 Installing app...', 'info');
            }
            
            this.deferredPrompt = null;
            this.hidePWAPrompt();
        }
    }

    hidePWAPrompt() {
        const pwaPrompt = document.getElementById('pwaPrompt');
        if (pwaPrompt) {
            pwaPrompt.style.display = 'none';
        }
    }

    dismissPWA() {
        this.hidePWAPrompt();
    }

    // Calendly Integration
    openCalendly() {
        this.trackClick('calendly');
        
        if (typeof Calendly !== 'undefined') {
            const calendlyUrl = document.querySelector('[data-url]')?.getAttribute('data-url') || 'https://calendly.com/your-calendly-link';
            Calendly.initPopupWidget({ url: calendlyUrl });
        } else {
            this.showNotification('📅 Calendly integration not available', 'warning');
        }
    }

    // Language Functions
    changeLanguage(language) {
        this.currentLanguage = language;
        localStorage.setItem('linktree_language', language);
        this.showNotification(`🌍 Language changed to ${language.toUpperCase()}`, 'info');
    }

    // Toggle Functions
    toggleEditMode() {
        if (!this.isAdminMode) return;
        
        this.isEditMode = !this.isEditMode;
        document.body.classList.toggle('edit-mode', this.isEditMode);
        
        const btn = document.querySelector('.btn-primary');
        if (btn) {
            btn.innerHTML = this.isEditMode 
                ? '<i class="fas fa-eye"></i> View Mode'
                : '<i class="fas fa-edit"></i> Edit Mode';
        }
        
        this.showNotification(
            this.isEditMode ? 'Edit mode enabled ✏️' : 'Edit mode disabled 👁️',
            'info'
        );
    }

    toggleManageMode() {
        if (!this.isAdminMode) return;
        
        this.isManageMode = !this.isManageMode;
        document.body.classList.toggle('manage-mode', this.isManageMode);
        
        const manageBtn = document.querySelector('.btn-manage');
        if (manageBtn) {
            manageBtn.innerHTML = this.isManageMode 
                ? '<i class="fas fa-check"></i> Done'
                : '<i class="fas fa-cog"></i> Manage';
        }
            
        this.showNotification(
            this.isManageMode ? 'Manage mode enabled - click X to remove links 🗑️' : 'Manage mode disabled ✅',
            'info'
        );
    }

    toggleFontPanel() {
        if (!this.isAdminMode) return;
        
        const fontPanel = document.getElementById('fontPanel');
        if (fontPanel) {
            const isVisible = fontPanel.style.display === 'block';
            fontPanel.style.display = isVisible ? 'none' : 'block';
            
            this.showNotification(
                isVisible ? 'Font panel hidden 🎨' : 'Font panel shown - customize fonts & colors! 🎨',
                'info'
            );
        }
    }

    toggleLayoutSelector() {
        if (!this.isAdminMode) return;
        
        const selector = document.getElementById('layoutSelector');
        if (selector) {
            const isVisible = selector.style.display === 'block';
            selector.style.display = isVisible ? 'none' : 'block';
            
            this.showNotification(
                isVisible ? 'Layout selector hidden' : 'Choose your layout template!',
                'info'
            );
        }
    }

    toggleGallery() {
        if (!this.isAdminMode) return;
        
        const gallery = document.getElementById('gallerySection');
        if (gallery) {
            const isVisible = gallery.style.display === 'block';
            gallery.style.display = isVisible ? 'none' : 'block';
            
            this.showNotification(
                isVisible ? 'Gallery hidden' : 'Gallery opened - add your images!',
                'info'
            );
        }
    }

    toggleStore() {
        if (!this.isAdminMode) return;
        
        const store = document.getElementById('storeSection');
        if (store) {
            const isVisible = store.style.display === 'block';
            store.style.display = isVisible ? 'none' : 'block';
            
            this.showNotification(
                isVisible ? 'Store hidden' : 'Mini store opened - add your products!',
                'info'
            );
        }
    }

    toggleCRM() {
        if (!this.isAdminMode) return;
        
        const crm = document.getElementById('crmSection');
        if (crm) {
            const isVisible = crm.style.display === 'block';
            crm.style.display = isVisible ? 'none' : 'block';
            
            this.showNotification(
                isVisible ? 'CRM hidden' : 'CRM dashboard opened!',
                'info'
            );
        }
    }

    toggleAI() {
        if (!this.isAdminMode) return;
        
        const ai = document.getElementById('aiPanel');
        if (ai) {
            const isVisible = ai.style.display === 'block';
            ai.style.display = isVisible ? 'none' : 'block';
            
            this.showNotification(
                isVisible ? 'AI panel hidden' : 'AI optimization panel opened!',
                'info'
            );
        }
    }

    toggleTheme() {
        if (!this.isAdminMode) return;
        
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        localStorage.setItem('linktree_theme', isLight ? 'light' : 'dark');
        this.showNotification(`Switched to ${isLight ? 'light' : 'dark'} theme 🎨`, 'info');
    }

    // Platform Management
    showPlatformSelector() {
        if (!this.isAdminMode) return;
        
        const modal = document.createElement('div');
        modal.className = 'platform-modal';
        modal.innerHTML = `
            <div class="platform-modal-content enhanced-modal">
                <div class="platform-modal-header">
                    <h3>🚀 Add New Social Media Platform</h3>
                    <button class="close-modal" onclick="this.closest('.platform-modal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="platform-categories">
                    ${this.generateCategorizedPlatforms()}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    generateCategorizedPlatforms() {
        const categories = {
            '📱 Popular Social': ['facebook', 'instagram', 'tiktok', 'snapchat', 'twitter', 'threads', 'reddit'],
            '🎥 Video & Streaming': ['youtube', 'twitch', 'vimeo', 'dailymotion'],
            '💼 Professional': ['linkedin', 'behance', 'dribbble', 'github', 'gitlab', 'stack-overflow'],
            '🎮 Gaming & Tech': ['discord', 'steam', 'xbox', 'playstation', 'nintendo'],
            '🎵 Music & Audio': ['spotify', 'apple-music', 'soundcloud', 'bandcamp', 'clubhouse'],
            '🛒 Business & Shopping': ['etsy', 'amazon', 'shopify', 'patreon', 'ko-fi'],
            '🔗 Web & Portfolio': ['website', 'portfolio', 'blog', 'resume', 'store', 'linktree'],
            '🔧 Custom': ['custom', 'calendly', 'notion', 'signal']
        };

        let html = '';
        
        Object.entries(categories).forEach(([categoryName, platforms]) => {
            html += `
                <div class="platform-category">
                    <h4 class="category-title">${categoryName}</h4>
                    <div class="platform-grid">
                        ${platforms.map(platformKey => {
                            const platform = availablePlatforms[platformKey];
                            if (!platform) return '';
                            return `
                                <div class="platform-option" data-platform="${platformKey}" onclick="window.linkTree.addPlatform('${platformKey}')">
                                    <i class="${platform.icon}" style="color: ${platform.color}"></i>
                                    <span>${platform.name}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        });

        return html;
    }

    addPlatform(platformKey) {
        if (!this.isAdminMode) return;
        
        const platform = availablePlatforms[platformKey];
        const linksSection = document.querySelector('.links-section');
        
        const linkItem = document.createElement('div');
        linkItem.className = 'link-item animate__animated animate__fadeInUp';
        linkItem.setAttribute('data-platform', platformKey);
        linkItem.innerHTML = `
            <div class="link-content">
                <i class="${platform.icon}"></i>
                <span>${platform.name}</span>
                <div class="link-stats admin-only">
                    <span class="click-count">0</span>
                    <i class="fas fa-chart-line"></i>
                </div>
                <button class="delete-link admin-only" onclick="window.linkTree.removeLink(this)" style="display: none;">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <input type="url" placeholder="Enter ${platform.name} URL" class="link-input admin-only" style="display: none;">
        `;
        
        linksSection.appendChild(linkItem);
        this.bindLinkEvents(linkItem);
        
        const linkSpan = linkItem.querySelector('.link-content span');
        if (linkSpan) {
            linkSpan.style.color = this.colors.links;
        }
        
        document.querySelector('.platform-modal')?.remove();
        
        setTimeout(() => {
            const input = linkItem.querySelector('.link-input');
            if (input) {
                input.focus();
            }
        }, 100);
        
        this.showNotification(`${platform.name} added! Add your URL. ➕`, 'success');
    }

    removeLink(button) {
        if (!this.isAdminMode) return;
        
        const linkItem = button.closest('.link-item');
        const platformName = linkItem.querySelector('.link-content span').textContent;
        
        if (confirm(`Remove ${platformName} link?`)) {
            linkItem.remove();
            this.showNotification(`${platformName} removed 🗑️`, 'success');
            this.saveProfile();
        }
    }

    bindLinkEvents(linkItem) {
        const linkContent = linkItem.querySelector('.link-content');
        const linkInput = linkItem.querySelector('.link-input');
        
        if (linkContent) {
            linkContent.addEventListener('click', (e) => {
                if (!this.isEditMode && !this.isManageMode && !e.target.closest('.delete-link')) {
                    this.handleLinkClick(e);
                }
            });
        }
        
        if (linkInput) {
            linkInput.addEventListener('change', () => {
                if (this.isAdminMode) {
                    this.saveProfile();
                }
            });
        }
    }

    // Font and Color Management
    changeFontFamily(element, fontFamily) {
        if (!this.isAdminMode) return;
        
        this.fonts[element] = fontFamily;
        
        const fontClass = `font-${fontFamily}`;
        
        switch(element) {
            case 'name':
                const profileName = document.getElementById('profileName');
                if (profileName) {
                    profileName.className = `profile-name ${fontClass}`;
                }
                break;
            case 'bio':
                const profileBio = document.getElementById('profileBio');
                if (profileBio) {
                    profileBio.className = `profile-bio ${fontClass}`;
                }
                break;
            case 'links':
                document.querySelectorAll('.link-content span:not(.x-logo)').forEach(span => {
                    span.className = fontClass;
                });
                break;
        }
        
        this.saveFonts();
        this.showNotification(`${element.charAt(0).toUpperCase() + element.slice(1)} font updated! 🎯`, 'success');
    }

    changeFontColor(element, color) {
        if (!this.isAdminMode) return;
        
        this.colors[element] = color;
        
        switch(element) {
            case 'name':
                const profileName = document.getElementById('profileName');
                if (profileName) {
                    profileName.style.color = color;
                }
                break;
            case 'bio':
                const profileBio = document.getElementById('profileBio');
                if (profileBio) {
                    profileBio.style.color = color;
                }
                break;
            case 'links':
                document.querySelectorAll('.link-content span:not(.x-logo)').forEach(span => {
                    span.style.color = color;
                });
                break;
        }
        
        this.saveColors();
        this.showNotification(`${element.charAt(0).toUpperCase() + element.slice(1)} color updated! 🌈`, 'success');
    }

    applyColorPreset(presetName) {
        if (!this.isAdminMode) return;
        
        const preset = colorPresets[presetName];
        if (!preset) return;
        
        this.colors = { ...preset };
        
        this.changeFontColor('name', preset.name);
        this.changeFontColor('bio', preset.bio);
        this.changeFontColor('links', preset.links);
        
        const nameColor = document.getElementById('nameColor');
        const bioColor = document.getElementById('bioColor');
        const linksColor = document.getElementById('linksColor');
        
        if (nameColor) nameColor.value = preset.name;
        if (bioColor) bioColor.value = preset.bio;
        if (linksColor) linksColor.value = preset.links;
        
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[data-preset="${presetName}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
        
        this.showNotification(`${presetName.charAt(0).toUpperCase() + presetName.slice(1)} preset applied! 🎨`, 'success');
    }

    loadFonts() {
        const saved = localStorage.getItem('linktree_fonts');
        if (saved) {
            this.fonts = { ...this.fonts, ...JSON.parse(saved) };
        }
        
        if (this.isAdminMode) {
            const nameFont = document.getElementById('nameFont');
            const bioFont = document.getElementById('bioFont');
            const linksFont = document.getElementById('linksFont');
            
            if (nameFont) nameFont.value = this.fonts.name;
            if (bioFont) bioFont.value = this.fonts.bio;
            if (linksFont) linksFont.value = this.fonts.links;
            
            this.changeFontFamily('name', this.fonts.name);
            this.changeFontFamily('bio', this.fonts.bio);
            this.changeFontFamily('links', this.fonts.links);
        }
    }

    loadColors() {
        const saved = localStorage.getItem('linktree_colors');
        if (saved) {
            this.colors = { ...this.colors, ...JSON.parse(saved) };
        }
        
        this.changeFontColor('name', this.colors.name);
        this.changeFontColor('bio', this.colors.bio);
        this.changeFontColor('links', this.colors.links);
        
        if (this.isAdminMode) {
            const nameColor = document.getElementById('nameColor');
            const bioColor = document.getElementById('bioColor');
            const linksColor = document.getElementById('linksColor');
            
            if (nameColor) nameColor.value = this.colors.name;
            if (bioColor) bioColor.value = this.colors.bio;
            if (linksColor) linksColor.value = this.colors.links;
        }
    }

    saveFonts() {
        if (this.isAdminMode) {
            localStorage.setItem('linktree_fonts', JSON.stringify(this.fonts));
        }
    }

    saveColors() {
        if (this.isAdminMode) {
            localStorage.setItem('linktree_colors', JSON.stringify(this.colors));
        }
    }

    // Data Management
    saveProfile() {
        if (!this.isAdminMode) return;
        
        const profileName = document.getElementById('profileName');
        const profileBio = document.getElementById('profileBio');
        
        const profile = {
            name: profileName ? profileName.textContent : 'Your Name',
            bio: profileBio ? profileBio.textContent : 'Add your bio here...',
            links: {},
            fonts: this.fonts,
            colors: this.colors
        };

        document.querySelectorAll('.link-item').forEach(item => {
            const platform = item.dataset.platform || 'custom';
            const input = item.querySelector('.link-input');
            const customName = item.querySelector('.link-content span:not(.x-logo)');
            
            if (input && input.value.trim()) {
                profile.links[platform] = {
                    url: input.value.trim(),
                    name: customName ? customName.textContent : platform
                };
            }
        });

        localStorage.setItem('linktree_profile', JSON.stringify(profile));
        this.showNotification('Profile saved! 💾', 'success');
    }

    loadProfile() {
        const saved = localStorage.getItem('linktree_profile');
        if (!saved) return;

        const profile = JSON.parse(saved);
        
        const profileName = document.getElementById('profileName');
        const profileBio = document.getElementById('profileBio');
        
        if (profileName) profileName.textContent = profile.name || 'Your Name';
        if (profileBio) profileBio.textContent = profile.bio || 'Add your bio here...';

        Object.entries(profile.links || {}).forEach(([platform, data]) => {
            const linkItem = document.querySelector(`[data-platform="${platform}"]`);
            if (linkItem) {
                const input = linkItem.querySelector('.link-input');
                const nameSpan = linkItem.querySelector('.link-content span:not(.x-logo)');
                
                if (input) {
                    input.value = data.url;
                }
                if (data.name && nameSpan) {
                    nameSpan.textContent = data.name;
                }
            }
        });

        if (profile.fonts) {
            this.fonts = { ...this.fonts, ...profile.fonts };
        }

        if (profile.colors) {
            this.colors = { ...this.colors, ...profile.colors };
        }
    }

    saveAnalytics() {
        localStorage.setItem('linktree_analytics', JSON.stringify(this.analytics));
    }

    loadAnalytics() {
        const saved = localStorage.getItem('linktree_analytics');
        if (saved) {
            this.analytics = { ...this.analytics, ...JSON.parse(saved) };
        }
        if (this.isAdminMode) {
            this.updateAnalyticsDisplay();
        }
    }

    updateAnalyticsDisplay() {
        if (!this.isAdminMode) return;
        
        const totalClicks = document.getElementById('totalClicks');
        const uniqueVisitors = document.getElementById('uniqueVisitors');
        const conversionRate2 = document.getElementById('conversionRate2');
        
        if (totalClicks) totalClicks.textContent = this.analytics.totalClicks;
        if (uniqueVisitors) uniqueVisitors.textContent = this.analytics.uniqueVisitors;
        if (conversionRate2) conversionRate2.textContent = `${this.analytics.conversionRate}%`;
        
        const mostPopular = Object.entries(this.analytics.linkClicks)
            .sort(([,a], [,b]) => b - a)[0];
        
        const popularLink = document.getElementById('popularLink');
        if (popularLink) {
            popularLink.textContent = mostPopular ? mostPopular[0] : '-';
        }
    }

    shareProfile() {
        if (navigator.share) {
            const profileName = document.getElementById('profileName');
            const profileBio = document.getElementById('profileBio');
            
            navigator.share({
                title: profileName ? profileName.textContent : 'My Links',
                text: profileBio ? profileBio.textContent : 'Check out my links!',
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
                this.showNotification('Link copied to clipboard! 📋', 'success');
            });
        }
    }

    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            color: white;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease;
            background: ${type === 'success' ? '#10b981' : 
                       type === 'warning' ? '#f59e0b' : 
                       type === 'error' ? '#ef4444' : '#6366f1'};
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        `;

        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Global functions for HTML onclick events
function showAdminLogin() {
    window.linkTree.showAdminLogin();
}

function closeAdminLogin() {
    window.linkTree.closeAdminLogin();
}

function authenticateAdmin() {
    window.linkTree.authenticateAdmin();
}

function logoutAdmin() {
    window.linkTree.logoutAdmin();
}

function toggleEditMode() {
    window.linkTree.toggleEditMode();
}

function saveProfile() {
    window.linkTree.saveProfile();
}

function shareProfile() {
    window.linkTree.shareProfile();
}

function toggleTheme() {
    window.linkTree.toggleTheme();
}

function toggleManageMode() {
    window.linkTree.toggleManageMode();
}

function showPlatformSelector() {
    window.linkTree.showPlatformSelector();
}

function toggleFontPanel() {
    window.linkTree.toggleFontPanel();
}

function toggleLayoutSelector() {
    window.linkTree.toggleLayoutSelector();
}

function toggleGallery() {
    window.linkTree.toggleGallery();
}

function toggleStore() {
    window.linkTree.toggleStore();
}

function toggleCRM() {
    window.linkTree.toggleCRM();
}

function toggleAI() {
    window.linkTree.toggleAI();
}

function changeFontFamily(element, fontFamily) {
    window.linkTree.changeFontFamily(element, fontFamily);
}

function changeFontColor(element, color) {
    window.linkTree.changeFontColor(element, color);
}

function applyColorPreset(presetName) {
    window.linkTree.applyColorPreset(presetName);
}

function removeLink(button) {
    window.linkTree.removeLink(button);
}

function changeLayout(layout) {
    window.linkTree.changeLayout(layout);
}

function addGalleryImage() {
    window.linkTree.addGalleryImage();
}

function removeGalleryImage(imageId) {
    window.linkTree.removeGalleryImage(imageId);
}

function addProduct() {
    window.linkTree.addProduct();
}

function removeProduct(productId) {
    window.linkTree.removeProduct(productId);
}

function captureEmail(event) {
    window.linkTree.captureEmail(event);
}

function deleteLead(leadId) {
    window.linkTree.deleteLead(leadId);
}

function openCalendly() {
    window.linkTree.openCalendly();
}

function applyCustomCSS() {
    window.linkTree.applyCustomCSS();
}

function setBackgroundVideo() {
    window.linkTree.setBackgroundVideo();
}

function removeBackgroundVideo() {
    window.linkTree.removeBackgroundVideo();
}

function uploadBackgroundVideo(input) {
    window.linkTree.uploadBackgroundVideo(input);
}

function installPWA() {
    window.linkTree.installPWA();
}

function dismissPWA() {
    window.linkTree.dismissPWA();
}

function changeLanguage(language) {
    window.linkTree.changeLanguage(language);
}

function changeProfilePicture() {
    if (!window.linkTree.isAdminMode) return;
    
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const profileImg = document.getElementById('profileImg');
                if (profileImg) {
                    profileImg.src = e.target.result;
                }
                localStorage.setItem('linktree_profile_pic', e.target.result);
                window.linkTree.showNotification('Profile picture updated! 📸', 'success');
            };
            reader.readAsDataURL(file);
        }
    };
    
    input.click();
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    window.linkTree = new LinkTree();
    
    // Load saved theme
    const savedTheme = localStorage.getItem('linktree_theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    
    // Load saved layout
    const savedLayout = localStorage.getItem('linktree_layout');
    if (savedLayout) {
        document.body.classList.add(`layout-${savedLayout}`);
    }
    
    // Load saved profile picture
    const savedPic = localStorage.getItem('linktree_profile_pic');
    if (savedPic) {
        const profileImg = document.getElementById('profileImg');
        if (profileImg) {
            profileImg.src = savedPic;
        }
    }
});

// Add notification and shake animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }

    .platform-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        backdrop-filter: blur(5px);
    }

    .platform-modal-content {
        background: #1c1c1e;
        border-radius: 20px;
        padding: 2rem;
        max-width: 800px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        border: 1px solid #333333;
    }

    .platform-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .platform-modal-header h3 {
        font-size: 20px;
        font-weight: 600;
        color: #ffffff;
    }

    .close-modal {
        background: none;
        border: none;
        color: #888888;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 8px;
        transition: background 0.2s ease;
    }

    .close-modal:hover {
        background: #2c2c2e;
    }

    .platform-categories {
        max-height: 70vh;
        overflow-y: auto;
        padding-right: 10px;
    }

    .platform-category {
        margin-bottom: 2rem;
    }

    .category-title {
        font-size: 16px;
        font-weight: 600;
        color: #00D4FF;
        margin-bottom: 12px;
        padding: 8px 12px;
        background: rgba(0, 212, 255, 0.1);
        border-radius: 8px;
        border-left: 4px solid #00D4FF;
    }

    .platform-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: 8px;
        margin-bottom: 1rem;
    }

    .platform-option {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12px 8px;
        border: 1.5px solid #333333;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        text-align: center;
        font-size: 0.75rem;
    }

    .platform-option:hover {
        background: #2c2c2e;
        border-color: #007AFF;
        transform: translateY(-2px);
    }

    .platform-option i {
        font-size: 1.2rem;
        margin-bottom: 4px;
    }

    .platform-option span {
        font-size: 0.8rem;
        font-weight: 500;
        color: #ffffff;
    }
`;
document.head.appendChild(style);

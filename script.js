// Minimal, refined interactions for GKI Events and Travels

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form handling — opens email client with form data sent to info@gkigroups.com
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = (document.getElementById('name') && document.getElementById('name').value) || '';
            const email = (document.getElementById('email') && document.getElementById('email').value) || '';
            const phone = (document.getElementById('phone') && document.getElementById('phone').value) || '';
            const message = (document.getElementById('message') && document.getElementById('message').value) || '';

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            const subject = 'Contact from GKI Website - ' + encodeURIComponent(name);
            const body = 'Name: ' + encodeURIComponent(name) + '%0D%0A' +
                'Email: ' + encodeURIComponent(email) + '%0D%0A' +
                'Phone: ' + encodeURIComponent(phone) + '%0D%0A%0D%0A' +
                'Message:%0D%0A' + encodeURIComponent(message);
            const mailtoUrl = 'mailto:info@gkigroups.com?subject=' + subject + '&body=' + body;

            window.location.href = mailtoUrl;
            contactForm.reset();
            alert('Your email client will open. Please click Send to deliver your message.');
        });
    }

    // Scroll-based reveal — fade + slight upward movement
    const observerOptions = {
        threshold: 0.08,
        rootMargin: '0px 0px -60px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('scroll-reveal');
        observer.observe(section);
    });
    
    // Featured Events cards fade-in on scroll (staggered)
    const eventCards = document.querySelectorAll('.event-card');
    if (eventCards.length > 0) {
        const eventCardObserver = new IntersectionObserver(function(entries) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const delay = index * 120;
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);
                    eventCardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });
        
        eventCards.forEach(card => eventCardObserver.observe(card));
    }

    // Founder section uses same scroll-reveal as other sections
    
    // Client logos — parent section uses scroll-reveal; logos animate in with section

    // ——— Event Gallery (Cinematic Fullscreen) ———
    const eventGalleries = [
        {
            title: 'Ather College Event',
            media: [
                { type: 'image', src: 'images/events/ather-1.jpeg', alt: 'Ather College Event' },
                { type: 'image', src: 'images/events/ather-2.jpeg', alt: 'Ather Event Photo 2' },
                { type: 'image', src: 'images/events/ather-3.jpeg', alt: 'Ather Event Photo 3' },
                { type: 'video', src: 'images/events/ather-video.mp4', poster: 'images/events/ather-1.jpeg' }
            ]
        },
        {
            title: 'Arun Ice Cream – Guinness World Record Event',
            media: [
                { type: 'image', src: 'images/events/arun-1.jpeg', alt: 'Arun GWR Event' },
                { type: 'image', src: 'images/events/arun-2.jpeg', alt: 'Arun Event Photo 2' },
                { type: 'image', src: 'images/events/arun-3.jpeg', alt: 'Arun Event Photo 3' },
                { type: 'video', src: 'images/events/arun-video.mp4', poster: 'images/events/arun-1.jpeg' }
            ]
        },
        {
            title: 'SBI Green Marathon – Radio Mirchi',
            media: [
                { type: 'image', src: 'images/events/sbi-1.jpeg', alt: 'SBI Green Marathon' },
                { type: 'image', src: 'images/events/sbi-2.jpeg', alt: 'Marathon Photo 2' },
                { type: 'image', src: 'images/events/sbi-3.jpeg', alt: 'Marathon Photo 3' }
            ]
        },
        {
            title: 'Hatsun School Activity',
            media: [
                { type: 'image', src: 'images/events/hatsun-1.jpeg', alt: 'Hatsun School Activity' },
                { type: 'image', src: 'images/events/hatsun-2.jpeg', alt: 'Hatsun School Activity Photo 2' },
                { type: 'image', src: 'images/events/hatsun-3.jpeg', alt: 'Hatsun School Activity Photo 3' },
                { type: 'video', src: 'images/events/hatsun-video.mp4', poster: 'images/events/hatsun-1.jpeg' }
            ]
        },
        {
            title: 'Arun Ice Creams School Event',
            media: [
                { type: 'image', src: 'images/events/arun-school-1.jpeg', alt: 'Arun Ice Creams School Event' },
                { type: 'image', src: 'images/events/arun-school-2.jpeg', alt: 'Arun School Event Photo 2' },
                { type: 'image', src: 'images/events/arun-school-3.jpeg', alt: 'Arun School Event Photo 3' }
            ]
        },
        {
            title: 'Hero College Promotion',
            media: [
                { type: 'image', src: 'images/events/hero-college-1.jpeg', alt: 'Hero College Promotion' },
                { type: 'image', src: 'images/events/hero-college-2.jpeg', alt: 'Hero College Promotion Photo 2' }
            ]
        },
        {
            title: 'Aha College Event',
            media: [
                { type: 'image', src: 'images/events/aha-college-1.jpeg', alt: 'Aha College Event' },
                { type: 'image', src: 'images/events/aha-college-2.jpeg', alt: 'Aha College Event Photo 2' },
                { type: 'image', src: 'images/events/aha-college-3.jpeg', alt: 'Aha College Event Photo 3' },
                { type: 'image', src: 'images/events/aha-college-4.jpeg', alt: 'Aha College Event Photo 4' }
            ]
        }
    ];

    const galleryModal = document.getElementById('eventGalleryModal');
    const galleryModalBackdrop = document.getElementById('galleryModalBackdrop');
    const galleryModalClose = document.getElementById('galleryModalClose');
    const galleryModalTitle = document.getElementById('galleryModalTitle');
    const galleryFeatured = document.getElementById('galleryFeatured');
    const galleryThumbnails = document.getElementById('galleryThumbnails');
    const galleryNavPrev = document.getElementById('galleryNavPrev');
    const galleryNavNext = document.getElementById('galleryNavNext');

    let currentGallery = null;
    let currentFeaturedIndex = 0;
    let currentVideoEl = null;

    function renderFeatured(item) {
        galleryFeatured.innerHTML = '';
        if (item.type === 'image') {
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt || '';
            img.loading = 'eager';
            galleryFeatured.appendChild(img);
            currentVideoEl = null;
        } else {
            const wrap = document.createElement('div');
            wrap.className = 'gallery-featured-video-wrap';
            const video = document.createElement('video');
            video.controls = true;
            video.preload = 'metadata';
            video.poster = item.poster || '';
            video.src = item.src || '';
            video.playsInline = true;
            const overlay = document.createElement('div');
            overlay.className = 'gallery-video-play-overlay';
            overlay.setAttribute('aria-label', 'Play video');
            overlay.addEventListener('click', function() {
                video.play().catch(function() {});
                overlay.style.display = 'none';
                try {
                    video.requestFullscreen().catch(function() {});
                } catch (err) {}
            });
            video.addEventListener('play', function() { overlay.style.display = 'none'; });
            video.addEventListener('pause', function() { overlay.style.display = ''; });
            video.addEventListener('click', function() {
                if (video.paused) {
                    video.play().catch(function() {});
                } else {
                    try {
                        if (!document.fullscreenElement) {
                            video.requestFullscreen().catch(function() {});
                        } else {
                            document.exitFullscreen();
                        }
                    } catch (err) {}
                }
            });
            wrap.appendChild(video);
            wrap.appendChild(overlay);
            galleryFeatured.appendChild(wrap);
            currentVideoEl = video;
        }
    }

    function updateThumbActive() {
        galleryThumbnails.querySelectorAll('.gallery-thumb-item').forEach(function(el, i) {
            el.classList.toggle('active', i === currentFeaturedIndex);
        });
    }

    function goToIndex(index) {
        if (!currentGallery || index < 0 || index >= currentGallery.media.length) return;
        currentFeaturedIndex = index;
        const item = currentGallery.media[index];
        renderFeatured(item);
        updateThumbActive();
        if (galleryNavPrev) galleryNavPrev.style.visibility = index === 0 ? 'hidden' : '';
        if (galleryNavNext) galleryNavNext.style.visibility = index === currentGallery.media.length - 1 ? 'hidden' : '';
    }

    function openGallery(eventId) {
        const gallery = eventGalleries[eventId];
        if (!gallery || !gallery.media.length) return;
        currentGallery = gallery;
        var videoIndex = gallery.media.findIndex(function(m) { return m.type === 'video'; });
        currentFeaturedIndex = videoIndex >= 0 ? videoIndex : 0;
        galleryModalTitle.textContent = gallery.title;
        galleryThumbnails.innerHTML = '';
        gallery.media.forEach(function(item, i) {
            const thumb = document.createElement('div');
            thumb.className = 'gallery-thumb-item' + (item.type === 'video' ? ' gallery-thumb-video' : '');
            thumb.setAttribute('role', 'button');
            thumb.setAttribute('tabindex', '0');
            thumb.setAttribute('aria-label', (item.type === 'video' ? 'Play video' : 'View image') + ' ' + (i + 1));
            const img = document.createElement('img');
            img.loading = 'lazy';
            img.src = item.type === 'image' ? item.src : (item.poster || item.src);
            img.alt = item.alt || '';
            thumb.appendChild(img);
            thumb.addEventListener('click', function() { goToIndex(i); });
            thumb.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToIndex(i); }
            });
            galleryThumbnails.appendChild(thumb);
        });
        goToIndex(currentFeaturedIndex);
        if (galleryNavPrev) galleryNavPrev.style.visibility = gallery.media.length <= 1 ? 'hidden' : '';
        if (galleryNavNext) galleryNavNext.style.visibility = gallery.media.length <= 1 ? 'hidden' : '';
        galleryModal.classList.add('active');
        galleryModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeGallery() {
        if (currentVideoEl) {
            currentVideoEl.pause();
            currentVideoEl.removeAttribute('src');
            currentVideoEl = null;
        }
        galleryFeatured.innerHTML = '';
        galleryThumbnails.innerHTML = '';
        currentGallery = null;
        galleryModal.classList.remove('active');
        galleryModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (galleryNavPrev) {
        galleryNavPrev.addEventListener('click', function(e) { e.stopPropagation(); goToIndex(currentFeaturedIndex - 1); });
    }
    if (galleryNavNext) {
        galleryNavNext.addEventListener('click', function(e) { e.stopPropagation(); goToIndex(currentFeaturedIndex + 1); });
    }
    if (galleryModalBackdrop) galleryModalBackdrop.addEventListener('click', closeGallery);
    if (galleryModalClose) galleryModalClose.addEventListener('click', closeGallery);

    document.addEventListener('keydown', function(e) {
        if (!galleryModal.classList.contains('active')) return;
        if (e.key === 'Escape') {
            closeGallery();
            return;
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goToIndex(currentFeaturedIndex - 1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            goToIndex(currentFeaturedIndex + 1);
        }
    });

    const eventCardsForGallery = document.querySelectorAll('.event-card');
    eventCardsForGallery.forEach(function(card) {
        const id = card.getAttribute('data-event-id');
        if (id === null) return;
        card.addEventListener('click', function() { openGallery(parseInt(id, 10)); });
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openGallery(parseInt(id, 10));
            }
        });
    });
});





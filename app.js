/* ==========================================================================
   Varanasi Travel Blog - Interactive Application Script
   Author: Antigravity AI Pair Programmer
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Navigation Header Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 2. Mobile Menu Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Toggle menu icon between bars and times (close)
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.querySelector('i').className = 'fas fa-bars';
        });
    });

    // --- 3. Scroll Active Link Indicator ---
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- 4. Interactive Timeline Accordion ---
    const timelineCards = document.querySelectorAll('.timeline-card.clickable');
    
    timelineCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Avoid triggering accordion when clicking nested links or inputs if any
            if (e.target.closest('a') || e.target.closest('input')) return;
            
            card.classList.toggle('active');
        });
    });

    // --- 5. Timeline Day Filtering ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const dayFilter = btn.getAttribute('data-day');

            // Filter timeline items
            timelineItems.forEach(item => {
                const itemDay = item.getAttribute('data-day');
                
                // Hide / show animation
                if (dayFilter === 'all' || itemDay === dayFilter) {
                    item.style.display = 'block';
                    // Retrigger simple fade-in
                    item.style.animation = 'none';
                    item.offsetHeight; /* trigger reflow */
                    item.style.animation = 'fadeInUp 0.5s forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // --- 6. Interactive Packing Checklist (Persistent in LocalStorage) ---
    const checkboxes = document.querySelectorAll('.todo-checkbox');
    const progressFill = document.getElementById('checklist-progress');
    const checkedCountEl = document.getElementById('checked-count');
    const totalCountEl = document.getElementById('total-count');
    const percentageEl = document.getElementById('progress-percentage');
    const resetBtn = document.getElementById('reset-checklist');

    const STORAGE_KEY = 'varanasi_yatra_checklist';

    // Load state from localStorage
    function loadChecklistState() {
        const storedData = localStorage.getItem(STORAGE_KEY);
        if (storedData) {
            const checklistState = JSON.parse(storedData);
            checkboxes.forEach(checkbox => {
                const id = checkbox.getAttribute('data-id');
                if (checklistState.hasOwnProperty(id)) {
                    checkbox.checked = checklistState[id];
                }
            });
        }
        updateProgress();
    }

    // Save state to localStorage
    function saveChecklistState() {
        const checklistState = {};
        checkboxes.forEach(checkbox => {
            const id = checkbox.getAttribute('data-id');
            checklistState[id] = checkbox.checked;
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(checklistState));
    }

    // Update progress bar calculations
    function updateProgress() {
        const totalItems = checkboxes.length;
        let checkedCount = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                checkedCount++;
            }
        });

        // Calculate percentage
        const percentage = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

        // Update elements
        totalCountEl.textContent = totalItems;
        checkedCountEl.textContent = checkedCount;
        percentageEl.textContent = `${percentage}%`;
        progressFill.style.width = `${percentage}%`;

        // Add subtle active color shift to progress bar when complete
        if (percentage === 100) {
            progressFill.style.background = 'linear-gradient(to right, #10b981, #34d399)'; // Green gradient on completion
        } else {
            progressFill.style.background = 'linear-gradient(to right, var(--primary) 0%, var(--accent) 100%)';
        }
    }

    // Add event listeners to checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            saveChecklistState();
            updateProgress();
        });
    });

    // Reset Checklist button action
    resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset your packing checklist progress?')) {
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            localStorage.removeItem(STORAGE_KEY);
            updateProgress();
        }
    });

    // Initialize Checklist on load
    loadChecklistState();
});

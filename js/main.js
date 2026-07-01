/* ============================================================
   Portfolio Main JS — Interactions & Animations
   ============================================================ */

// Project Data
const projectsData = [
    {
        title: 'E-COMMERCE 솔루션 플랫폼 개선 기획',
        period: '2025.01 — 2025.10',
        company: '㈜유젠',
        role: 'UX/UI 기획',
        description: 'G1 Cloud UXUI 사용성 개선. 상품상세 AI 리뷰 기획, UXUI 대시보드 설계, 관리자 화면 UXUI 개선.',
        deliverables: '화면설계서, AI 리뷰 기획서, 대시보드 설계서, 관리자 화면 개선안',
        tools: ['Figma', 'Jira', 'Notion'],
        achievements: '상품상세 AI 리뷰 도입으로 사용자 구매 결정 지원, 관리자 화면 사용성 개선을 통한 운영 효율성 향상'
    },
    {
        title: 'BYLYNN.SHOP 쇼핑몰 플랫폼 구축',
        period: '2022.10 — 2023.06',
        company: '㈜유젠',
        role: '기획 PL',
        description: '바이린샵 여성 종합쇼핑몰 리뉴얼. G1 CLOUD 도입에 따른 FO UX 설계, 탐색부터 결제까지 전 구간 UX 플로우 설계.',
        deliverables: '화면설계서(Wireframe), IA(정보구조도), UX 플로우, 전시 매뉴얼, QA 테스트 시나리오',
        tools: ['Figma', 'Excel', 'PowerPoint'],
        achievements: '프론트엔드 구매 여정 최적화와 백오피스 구조를 통합한 UX 기획, 오픈 초기 장애 제로화'
    },
    {
        title: 'HYBE 채용 플랫폼 구축',
        period: '2021',
        company: '㈜유젠',
        role: 'UX/UI 기획',
        description: 'HYBE 채용사이트 구축. 채용 플로우 UX 설계 및 화면 기획.',
        deliverables: '화면설계서, 채용 프로세스 플로우',
        tools: ['Figma'],
        achievements: '채용 플로우 UX 설계, 지원자 경험 최적화'
    },
    {
        title: '피자헛 플랫폼 리뉴얼 제안 및 구축',
        period: '2020',
        company: '펜타브리드',
        role: 'UXUI 기획 PA',
        description: '제안 단계부터 UX 여정 기반 마케팅 전략을 제시하여 수주 기여. 메인화면부터 주문 프로세스 전반의 화면 설계 및 UT(사용자 테스트) 주도를 통해 주문 전환 플로우의 인터랙션 품질 제고.',
        deliverables: '제안서, 화면설계서, 사용자 여정 지도, UT 결과 보고서',
        tools: ['Figma', 'Photoshop'],
        achievements: 'UX 여정 기반 마케팅 전략 제시로 수주 기여, UT 주도를 통한 주문 전환 플로우 인터랙션 품질 제고'
    },
    {
        title: '고령자를 위한 무인주문시스템 사용성 개선 연구',
        period: '2019 — 2020',
        company: '홍익대학교 (석사 논문)',
        role: '석사 논문 연구',
        description: '고령자를 위한 무인주문시스템 설계 연구. 대시보드 및 사용자 관점에서의 인사이트를 발췌하는 기획 연구. User Survey, Journey Map, Prototype Design 및 사용성 테스트 수행.',
        deliverables: '선행연구 정리, 사용자 조사 결과, Journey Map, Prototype 디자인, 사용성 테스트 결과, 석사 학위 논문',
        tools: ['Figma', '설문조사 도구'],
        achievements: '고령자 사용성 이슈 도출 및 프로토타입 검증, 석사 학위 취득'
    },
    {
        title: 'SK텔링크 SK7모바일 웹/모바일/APP 운영',
        period: '2018.12 — 2019.12',
        company: '펜타브리드',
        role: '웹/모바일/APP 운영 기획 / 디자인',
        description: 'SK텔링크 SK7모바일 운영 대행. UI/UX 개편을 통한 멤버십 개선 작업으로 고객에게 맞춤 정보를 제공하고, 맞춤형 콘텐츠 디자인 구현.',
        deliverables: '웹/모바일 디자인, 이벤트 페이지, 멤버십 UI 개선안',
        tools: ['Figma', 'Photoshop'],
        achievements: '멤버십 UI/UX 개편, 맞춤형 콘텐츠 디자인 체계 구축'
    },
    {
        title: '현대백화점 웹사이트/모바일 운영 디자인',
        period: '2018.09 — 2019.12',
        company: '펜타브리드',
        role: '웹/모바일 운영 디자인',
        description: '현대백화점 대구점 플랫폼 구축, 현대시티아울렛 쇼핑안내 및 카톡플친 콘텐츠 디자인(PI). 브랜드 컨셉 확립.',
        deliverables: '콘텐츠 디자인, 쇼핑안내 페이지, 제휴카드 이벤트 페이지',
        tools: ['Photoshop', 'Illustrator'],
        achievements: '대구점 브랜드 아이덴티티 확립, 모바일 최적화 콘텐츠 제작'
    },
    {
        title: '현대어린이책미술관(MOKA) 플랫폼 운영',
        period: '2018.09 — 2019.12',
        company: '펜타브리드',
        role: '디자인 PL',
        description: '현대어린이책미술관 Platform 운영. 아이들 눈높이에 맞춘 교육 페이지 및 이벤트 디자인. 디자인 가이드 확립을 통한 웹사이트 시각 구조 체계화.',
        deliverables: '콘텐츠 페이지 디자인, 교육 프로그램 안내, 디자인 가이드',
        tools: ['Photoshop', 'Illustrator'],
        achievements: '아이 친화적 UI 구현, 디자인 가이드 확립을 통한 브랜드 시각 체계화'
    },
    {
        title: '롯데마트 운영기획',
        period: '2018',
        company: '펜타브리드',
        role: '콘텐츠 운영 기획',
        description: '롯데마트 컨텐츠 운영 기획. 시즌별 콘텐츠 디자인 및 운영 효율성 극대화.',
        deliverables: '시즌별 콘텐츠 디자인, 운영 기획서',
        tools: ['Photoshop'],
        achievements: '시즌별 콘텐츠 운영 체계화, 운영 효율성 극대화'
    }
];

// ============================================================
// DOM Ready
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initNavigation();
    initMobileMenu();
    initRevealAnimations();
    initHeroAnimation();
    initProjectFilters();
    initProjectModal();
    initContactForm();
});

// ============================================================
// Scroll Progress Bar
// ============================================================
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + '%';
    }, { passive: true });
}

// ============================================================
// Navigation — Active Section Tracking
// ============================================================
function initNavigation() {
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav__link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.dataset.section === id);
                });
            }
        });
    }, {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0
    });

    sections.forEach(section => observer.observe(section));

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================================
// Mobile Menu
// ============================================================
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-menu__link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 100);
            }
        });
    });
}

// ============================================================
// Reveal Animations (Intersection Observer)
// ============================================================
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger delay for cards
                const parent = entry.target.closest('.projects__grid, .about__skills');
                if (parent) {
                    const siblings = parent.querySelectorAll('.reveal');
                    const idx = Array.from(siblings).indexOf(entry.target);
                    entry.target.style.transitionDelay = (idx * 0.1) + 's';
                }
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ============================================================
// Hero Kinetic Typography
// ============================================================
function initHeroAnimation() {
    const titleLines = document.querySelectorAll('.hero__title-line');

    titleLines.forEach((line, lineIndex) => {
        const text = line.textContent;
        line.innerHTML = '';

        let charIndex = 0;
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const span = document.createElement('span');

            if (char === ' ') {
                span.innerHTML = '&nbsp;';
            } else {
                span.textContent = char;
            }

            // Check if this character is part of the accent name
            const accentStart = text.indexOf('백소진');
            if (accentStart !== -1 && i >= accentStart && i < accentStart + 3) {
                span.style.background = 'linear-gradient(135deg, var(--primary), var(--secondary))';
                span.style.webkitBackgroundClip = 'text';
                span.style.webkitTextFillColor = 'transparent';
                span.style.backgroundClip = 'text';
            }

            span.style.animationDelay = (0.5 + lineIndex * 0.3 + charIndex * 0.04) + 's';
            line.appendChild(span);
            charIndex++;
        }
    });
}

// ============================================================
// Project Filters
// ============================================================
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.pj-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            cards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const categories = card.dataset.categories.split(',');
                    card.classList.toggle('hidden', !categories.includes(filter));
                }
            });
        });
    });
}

// ============================================================
// Project Modal
// ============================================================
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const backdrop = document.getElementById('modalBackdrop');
    const closeBtn = document.getElementById('modalClose');
    const cards = document.querySelectorAll('.pj-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const index = parseInt(card.dataset.project);
            const project = projectsData[index];
            if (!project) return;

            document.getElementById('modalPeriod').textContent = project.period;
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalCompany').textContent = project.company;
            document.getElementById('modalDescription').textContent = project.description;
            document.getElementById('modalRole').textContent = project.role;
            document.getElementById('modalDeliverables').textContent = project.deliverables;
            document.getElementById('modalAchievements').textContent = project.achievements;

            const toolsContainer = document.getElementById('modalTools');
            toolsContainer.innerHTML = project.tools.map(t => `<span>${t}</span>`).join('');

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ============================================================
// Contact Form
// ============================================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = form.querySelector('.cta-btn');
        const originalText = btn.innerHTML;

        btn.innerHTML = '<span>메시지가 전송되었습니다! ✨</span>';
        btn.style.background = 'linear-gradient(135deg, var(--secondary), #00B894)';

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            form.reset();
        }, 3000);
    });
}

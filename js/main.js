/* ============================================================
   Portfolio Main JS — Interactions & Animations
   ============================================================ */

// Project Data
const projectsData = [
    {
        title: 'BYLYNN.SHOP 쇼핑몰 플랫폼 구축',
        period: '2022.01 — 2022.06',
        company: '프리랜서',
        role: '서비스 기획 / 화면설계 / 운영',
        description: '패션 온라인 쇼핑몰 BYLYNN.SHOP의 웹/모바일 플랫폼 기획 및 구축. 대시보드 AI 기능 포함, 상품 영역, 특별할인행사, 주문/배송현황 영역 등 전체 커머스 플랫폼 기획.',
        deliverables: '화면설계서(Wireframe), IA(정보구조도), 기능 정의서, 대시보드 기획서',
        tools: ['Figma', 'Excel', 'PowerPoint'],
        achievements: '관리자 대시보드 AI 통합 설계, 상품관리/주문관리/프로모션 영역 전체 기획, PC/모바일 반응형 화면설계'
    },
    {
        title: 'G1 Cloud 쇼핑 플랫폼 기획',
        period: '2021.03 — 2021.09',
        company: '에이전시',
        role: '서비스 기획 / 화면설계',
        description: 'G1 Cloud 패션 커머스 플랫폼의 카테고리/메뉴 구조 설계 및 PC 화면설계. 카테고리 대/중/소 분류 체계 정의, 메뉴 Depth 구조 설계.',
        deliverables: '화면설계서, 카테고리 분류 체계, 메뉴 구조 정의서',
        tools: ['Figma', 'Excel'],
        achievements: '복잡한 카테고리 구조 체계화, 사용자 탐색 경험 최적화'
    },
    {
        title: '현대백화점 웹사이트/모바일 운영 대행',
        period: '2018.09 — 2019.12',
        company: 'PENTABREED',
        role: '웹/모바일 운영 기획 / 콘텐츠 디자인',
        description: '현대백화점 대구점 플랫폼 구축 및 현대시티아울렛 쇼핑안내, 카톡플친 콘텐츠 디자인(PI). 기존 가이드 안에서 디자인을 이루었으며, 쇼핑컨텐츠 페이지는 별도의 차별화를 두어 대구점의 컨셉을 확립.',
        deliverables: '콘텐츠 디자인, 쇼핑안내 페이지, 제휴카드 이벤트 페이지',
        tools: ['Photoshop', 'Illustrator', 'HTML/CSS'],
        achievements: '대구점 브랜드 아이덴티티 확립, 모바일 최적화 콘텐츠 제작'
    },
    {
        title: 'SK텔링크 SK7모바일 웹/모바일/APP 운영',
        period: '2018.12 — 2019.12',
        company: 'PENTABREED',
        role: '웹/모바일/APP 운영 기획 / 디자인',
        description: 'SK텔링크 SK7모바일 WEB SITE / MOBILE / SK텔링크 APP 운영 대행. UI/UX 개편을 통한 멤버십 개선 작업으로 고객에게 맞춤 정보를 제공하고, 시시각각 변하는 요금제 및 테마에 맞는 맞춤형 콘텐츠 디자인 구현.',
        deliverables: '웹/모바일 디자인, 이벤트 페이지, 멤버십 UI 개선안',
        tools: ['Photoshop', 'Illustrator', 'Figma'],
        achievements: '멤버십 UI/UX 개편, 맞춤형 콘텐츠 디자인 체계 구축'
    },
    {
        title: '현대어린이책미술관(MOKA) 플랫폼 운영',
        period: '2018.09 — 2019.12',
        company: 'PENTABREED / DESIGN PL',
        role: '플랫폼 운영 대행 / 콘텐츠 디자인',
        description: '현대어린이책미술관 Platform 운영 대행. 아이들 눈높이에 맞춘 정보전달의 구성으로 교육 페이지 및 이벤트 디자인 전체 작업. 스타일 가이드에 맞춰 각 주제별 특징을 두고 플랫폼 내에서 통일한 브랜드 아이덴티티 경험하도록 디자인을 제작.',
        deliverables: '콘텐츠 페이지 디자인, 교육 프로그램 안내, APP 다운로드 페이지',
        tools: ['Photoshop', 'Illustrator'],
        achievements: '아이 친화적 UI 구현, 브랜드 통일성 유지'
    },
    {
        title: '피자헛 E쿠폰 & 선물하기 / 주문 서비스 기획',
        period: '2020.01 — 2020.06',
        company: '프리랜서',
        role: '서비스 기획 / 화면설계',
        description: '피자헛 E쿠폰&선물하기 모바일 서비스와 주문완료 화면 기획. 메뉴 교환권, 디지털 금액권 선물하기 기능 설계 및 주문완료 후 배달 진행상태 표시 UI 설계.',
        deliverables: '화면설계서(Wireframe), 주문 플로우 정의',
        tools: ['Figma', 'Zeplin'],
        achievements: '선물하기 UX 플로우 설계, 배달 상태 트래킹 UI 구현'
    },
    {
        title: 'HYBE 채용 플랫폼 분석',
        period: '2021.06 — 2021.08',
        company: '개인 프로젝트',
        role: 'UX 리서치 / 분석',
        description: "HYBE 채용 플랫폼 사용성 분석 및 개선안 도출. 'WHAT MAKES YOUR WORK MEANINGFUL?' 컨셉의 채용 사이트 UX 리서치.",
        deliverables: '사용성 분석 보고서, 개선안',
        tools: ['Figma', 'Google Analytics'],
        achievements: '채용 플로우 개선점 도출, 사용자 여정 맵 작성'
    },
    {
        title: '메가존 이벤트/출석체크 기획',
        period: '2020.06 — 2020.12',
        company: 'MEGAZONE',
        role: '서비스 기획 / 화면설계',
        description: '부모님댁 장보기 효도 이벤트, 마케팅 수신 동의 및 절차 안내, 출석체크 이벤트 등 다양한 서비스 기획. 플로우차트 작성 및 화면설계.',
        deliverables: '화면설계서, 플로우차트, 기획서, 테스트케이스',
        tools: ['Figma', 'Excel', 'PowerPoint'],
        achievements: '이벤트 참여율 증대 기획, 마케팅 수신 동의 UX 개선'
    },
    {
        title: '고령자 대상 배달 앱 UX 리서치',
        period: '2019.07 — 2019.11',
        company: '학술 연구',
        role: 'UX 리서치 / 프로토타입 테스트',
        description: '평균 60세 이상의 연령층을 대상으로 한 배달 앱 사용성 연구. 심리적 노화의 세부 특질(감각적, 인지, 지각 저하)을 고려한 디지털 디바이스 중심의 UX 리서치. User survey, Journey Map 작성, Prototype Design 및 사용성 테스트.',
        deliverables: '선행연구 정리, 사용자 조사 결과, Journey Map, Prototype 디자인, 사용성 테스트 결과',
        tools: ['Figma', '설문조사 도구'],
        achievements: '고령자 사용성 이슈 도출, 프로토타입 검증'
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
    const cards = document.querySelectorAll('.project-card');

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
    const cards = document.querySelectorAll('.project-card');

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

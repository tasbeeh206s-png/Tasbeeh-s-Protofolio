/* ============================================================
   Behavior: rendering data.js into the DOM + interactivity
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline();
  renderSkills();
  renderSoftSkills();
  renderAchievements();
  renderCertificates();
  renderExperience();
  renderAffiliations();

  initNav();
  initReveal();
  initHeroField();
  initCounters();
  initFilters();
  initSearch();
  initCopyButtons();
  initProgressRail();
  initBackToTop();
  initCursor();
});

/* ---------- decorative cursor dot (desktop only) ---------- */

function initCursor() {
  const cursor = document.querySelector(".orbit-cursor");
  if (!cursor || window.matchMedia("(hover: none)").matches) return;
  window.addEventListener("mousemove", e => {
    cursor.style.opacity = "1";
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
  document.addEventListener("mouseleave", () => { cursor.style.opacity = "0"; });
}

/* ---------- render helpers ---------- */

function renderTimeline() {
  const list = document.getElementById("timelineList");
  list.innerHTML = TIMELINE.map((item, i) => `
    <li class="timeline-item reveal" style="--i:${i}">
      <div class="timeline-marker" data-tag="${item.tag}"></div>
      <div class="timeline-card">
        <span class="mono timeline-year">${item.year}</span>
        <h3>${item.title}</h3>
        <p class="timeline-org">${item.org}</p>
        <p>${item.text}</p>
      </div>
    </li>
  `).join("");
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map((s, i) => `
    <div class="skill-card reveal" style="--i:${i}">
      <h3>${s.label}</h3>
      <p>${s.detail}</p>
    </div>
  `).join("");
}

function renderSoftSkills() {
  const row = document.getElementById("softSkills");
  row.innerHTML = SOFT_SKILLS.map(s => `<span class="chip">${s}</span>`).join("");
}

const CAT_LABELS = {
  quantum: "Tech & Quantum",
  leadership: "Leadership & Outreach",
  engineering: "Engineering & Innovation",
  academic: "Academic Distinction",
  research: "Research & Leadership"
};

function renderAchievements() {
  const grid = document.getElementById("achievementGrid");
  grid.innerHTML = ACHIEVEMENTS.map((a, i) => `
    <article class="achievement-card reveal" data-cat="${a.cat}" data-search="${(a.title + ' ' + a.org + ' ' + a.text).toLowerCase()}" style="--i:${i % 6}">
      <span class="cat-tag mono">${CAT_LABELS[a.cat]}</span>
      <h3>${a.title}</h3>
      <p class="achievement-org">${a.org} <span class="mono">· ${a.year}</span></p>
      <p>${a.text}</p>
    </article>
  `).join("");
  document.getElementById("countAll").textContent = `(${ACHIEVEMENTS.length})`;
}

function renderCertificates() {
  const grid = document.getElementById("certGrid");
  grid.innerHTML = CERTIFICATES.map((c, i) => `
    <div class="cert-tile reveal" style="--i:${i % 8}">
      <span class="mono cert-year">${c.year}</span>
      <h3>${c.title}</h3>
      <p>${c.org}</p>
    </div>
  `).join("");
}

function renderExperience() {
  const wrap = document.getElementById("experienceList");
  wrap.innerHTML = EXPERIENCE.map((e, i) => `
    <div class="experience-card reveal" style="--i:${i}">
      <span class="mono timeline-year">${e.period}</span>
      <h3>${e.role}</h3>
      <p class="timeline-org">${e.org}</p>
      <p>${e.text}</p>
    </div>
  `).join("");
}

function renderAffiliations() {
  const list = document.getElementById("affiliationsList");
  list.innerHTML = AFFILIATIONS.map((a, i) => `
    <li class="reveal" style="--i:${i % 6}">
      <span class="mono aff-period">${a.period}</span>
      <span class="aff-name">${a.name}</span>
      <span class="aff-org">${a.org}</span>
    </li>
  `).join("");
}

/* ---------- nav ---------- */

function initNav() {
  const links = document.querySelectorAll(".dot-nav a, .mobile-nav a");
  const sections = [...links].map(l => document.querySelector(l.getAttribute("href"))).filter(Boolean);

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
      closeMobileNav();
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll(".dot-nav a").forEach(a => {
          a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(s => observer.observe(s));

  const toggle = document.getElementById("menuToggle");
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("mobile-nav-open");
    toggle.setAttribute("aria-expanded", open);
  });
}

function closeMobileNav() {
  document.body.classList.remove("mobile-nav-open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
}

/* ---------- scroll reveal ---------- */

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    items.forEach(i => i.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(i => observer.observe(i));
}

/* ---------- hero starfield ---------- */

function initHeroField() {
  const field = document.getElementById("heroField");
  const count = window.innerWidth < 700 ? 40 : 80;
  let html = "";
  for (let i = 0; i < count; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = (Math.random() * 1.6 + 0.6).toFixed(2);
    const delay = (Math.random() * 6).toFixed(2);
    const dur = (Math.random() * 4 + 3).toFixed(2);
    html += `<span class="star" style="left:${x}%;top:${y}%;width:${size}px;height:${size}px;animation-delay:${delay}s;animation-duration:${dur}s;"></span>`;
  }
  field.innerHTML = html;
}

/* ---------- animated counters ---------- */

function initCounters() {
  const nums = document.querySelectorAll(".stat-num");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  nums.forEach(n => observer.observe(n));
}

function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 900;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(progress * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------- achievement filters + search ---------- */

function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyAchievementFilters();
    });
  });
}

function initSearch() {
  const input = document.getElementById("achievementSearch");
  input.addEventListener("input", applyAchievementFilters);
}

function applyAchievementFilters() {
  const activeFilter = document.querySelector(".filter-btn.active").dataset.filter;
  const query = document.getElementById("achievementSearch").value.trim().toLowerCase();
  const cards = document.querySelectorAll(".achievement-card");
  let visibleCount = 0;

  cards.forEach(card => {
    const matchesFilter = activeFilter === "all" || card.dataset.cat === activeFilter;
    const matchesSearch = !query || card.dataset.search.includes(query);
    const show = matchesFilter && matchesSearch;
    card.style.display = show ? "" : "none";
    if (show) visibleCount++;
  });

  document.getElementById("noResults").hidden = visibleCount !== 0;
}

/* ---------- copy contact details ---------- */

function initCopyButtons() {
  const toast = document.getElementById("toast");
  document.querySelectorAll(".copy-line").forEach(btn => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.copy;
      const showToast = () => {
        toast.textContent = `Copied ${value}`;
        toast.classList.add("show");
        clearTimeout(toast._timer);
        toast._timer = setTimeout(() => toast.classList.remove("show"), 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(showToast).catch(showToast);
      } else {
        showToast();
      }
    });
  });
}

/* ---------- progress rail ---------- */

function initProgressRail() {
  const fill = document.getElementById("progressFill");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.width = `${(scrolled / height) * 100}%`;
  }, { passive: true });
}

/* ---------- back to top ---------- */

function initBackToTop() {
  document.getElementById("toTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

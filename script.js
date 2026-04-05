const body = document.body;
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
const sections = Array.from(document.querySelectorAll("main section[id]"));
const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
const parallaxRoot = document.querySelector("[data-parallax-root]");
const tiltCards = Array.from(document.querySelectorAll("[data-tilt]"));

const closeMenu = () => {
  if (!header || !navToggle) return;
  header.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
};

const openMenu = () => {
  if (!header || !navToggle) return;
  header.classList.add("is-open");
  navToggle.setAttribute("aria-expanded", "true");
};

const toggleMenu = () => {
  if (!header) return;
  if (header.classList.contains("is-open")) {
    closeMenu();
  } else {
    openMenu();
  }
};

const scrollToHash = hash => {
  const target = document.querySelector(hash);
  if (!target) return;

  const offset = header ? header.getBoundingClientRect().height + 16 : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: reduceMotion.matches ? "auto" : "smooth"
  });
};

const updateHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const setActiveNav = id => {
  navLinks.forEach(link => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", isActive);
  });
};

if (navToggle) {
  navToggle.addEventListener("click", toggleMenu);
}

if (header && nav) {
  document.addEventListener("click", event => {
    if (!header.classList.contains("is-open")) return;
    if (header.contains(event.target)) return;
    closeMenu();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    const hash = link.getAttribute("href");
    if (!hash || !hash.startsWith("#")) return;

    event.preventDefault();
    closeMenu();
    scrollToHash(hash);
  });
});

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

if (sections.length) {
  const sectionObserver = new IntersectionObserver(
    entries => {
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      if (!visibleEntries.length) return;

      const mostVisible = visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      setActiveNav(mostVisible.target.id);
    },
    {
      threshold: [0.2, 0.35, 0.55],
      rootMargin: "-30% 0px -40% 0px"
    }
  );

  sections.forEach(section => sectionObserver.observe(section));
}

body.classList.add("is-ready");

if (revealItems.length) {
  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${(index % 6) * 70}ms`;
  });

  if (reduceMotion.matches) {
    revealItems.forEach(item => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    requestAnimationFrame(() => {
      revealItems.forEach(item => revealObserver.observe(item));
    });
  }
}

if (parallaxRoot && !reduceMotion.matches) {
  const layers = Array.from(parallaxRoot.querySelectorAll("[data-parallax]"));
  let rect = parallaxRoot.getBoundingClientRect();

  const refreshRect = () => {
    rect = parallaxRoot.getBoundingClientRect();
  };

  const resetLayers = () => {
    layers.forEach(layer => {
      layer.style.transform = "translate3d(0, 0, 0)";
    });
  };

  window.addEventListener("resize", refreshRect);
  window.addEventListener("scroll", refreshRect, { passive: true });

  parallaxRoot.addEventListener("mousemove", event => {
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    layers.forEach(layer => {
      const strength = Number(layer.dataset.parallax || 0.1);
      const translateX = x * 60 * strength;
      const translateY = y * 45 * strength;
      layer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    });
  });

  parallaxRoot.addEventListener("mouseleave", resetLayers);
}

if (!reduceMotion.matches && tiltCards.length) {
  tiltCards.forEach(card => {
    const reset = () => {
      card.style.transform = "";
    };

    card.addEventListener("mousemove", event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateX = y * -8;
      const rotateY = x * 10;

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", reset);
    card.addEventListener("blur", reset, true);
  });
}

if (window.location.hash) {
  requestAnimationFrame(() => {
    scrollToHash(window.location.hash);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<header id="mainNavbar"
  class="fixed top-0 left-0 w-full z-50 bg-[#1E3A8A] text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300">

  <div class="max-w-7xl mx-auto flex items-center justify-between px-4 xl:px-6 py-4">

    <h1 class="text-xl font-semibold text-white flex items-center shrink-0">
  <a href="index.html">Daksha Martial</a>
</h1>

    <div id="centerLinksWrapper" class="hidden lg:flex flex-1 justify-center px-4">
      <ul class="flex items-center gap-4 xl:gap-10 font-medium text-xs xl:text-sm whitespace-nowrap" id="navLinks">

        <li class="relative">
          <button id="homeDropdownBtn" class="flex items-center gap-1 transition hover:text-blue-300">
            Home <i class="bi bi-chevron-down text-xs"></i>
          </button>
          <ul id="homeDropdownMenu"
            class="absolute left-0 mt-3 w-44 bg-white text-[#1E3A8A] rounded-xl shadow-xl hidden z-50">
            <li><a href="index.html" class="block px-4 py-2 rounded-t-xl hover:bg-blue-50">Home1</a></li>
            <li><a href="home2.html" class="block px-4 py-2 rounded-b-xl hover:bg-blue-50">Home2</a></li>
          </ul>
        </li>

        <li><a href="about.html" class="hover:text-blue-300 transition">About</a></li>
        <li><a href="instructor.html" class="hover:text-blue-300 transition">Instructors</a></li>
        <li><a href="program.html" class="hover:text-blue-300 transition">Programs</a></li>
        <li><a href="achieve.html" class="hover:text-blue-300 transition">Achievements</a></li>
        <li><a href="contact.html" class="hover:text-blue-300 transition">Contact</a></li>

        <li class="relative">
          <button id="dashboardDropdownBtn" class="flex items-center gap-1 hover:text-blue-300">
            Dashboard <i class="bi bi-chevron-down text-xs"></i>
          </button>
          <ul id="dashboardDropdownMenu"
            class="absolute left-0 mt-3 w-40 bg-white text-[#1E3A8A] rounded-xl shadow-xl hidden z-50">
            <li><a href="user.html" class="block px-4 py-2 hover:bg-blue-50 rounded-t-xl">User</a></li>
            <li><a href="admin.html" class="block px-4 py-2 hover:bg-blue-50 rounded-b-xl">Admin</a></li>
          </ul>
        </li>

      </ul>
    </div>

    <div id="rightButtons" class="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
      <button id="theme-toggle" class="w-8 h-8 xl:w-9 xl:h-9 flex items-center justify-center rounded-md border border-white/20 hover:border-white/60 hover:bg-white/10 hover:text-blue-200 transition-all duration-300 text-white" title="Toggle Theme">
        <i class="bi bi-moon-fill text-base xl:text-lg"></i>
      </button>

      <button id="rtlToggle" class="w-8 h-8 xl:w-9 xl:h-9 flex items-center justify-center text-[9px] xl:text-[10px] font-semibold rounded-md border border-white/20 hover:border-white/60 hover:bg-white/10 hover:text-blue-200 transition-all duration-300 text-white" title="Toggle RTL">
        RTL
      </button>

      <a href="login.html" class="h-8 xl:h-9 px-3 xl:px-4 flex items-center justify-center bg-blue-500 hover:bg-white hover:text-blue-700 rounded-md text-[10px] xl:text-xs font-semibold uppercase tracking-widest transition-all duration-300 text-white shadow-md">
        Login
      </a>

       <a href="sign.html" class="h-8 xl:h-9 px-3 xl:px-4 flex items-center justify-center bg-blue-500 hover:bg-white hover:text-blue-700 rounded-md text-[10px] xl:text-xs font-semibold uppercase tracking-widest transition-all duration-300 text-white shadow-md">
        Sign Up
      </a>
    </div>

    <button id="hamburgerBtn" class="lg:hidden text-3xl text-white">
      <i class="bi bi-list" id="hamburgerIcon"></i>
    </button>

  </div> 
</header>

<!-- Mobile Overlay -->
<div id="mobileMenuOverlay"
  class="fixed inset-0 bg-blue-200  bg-opacity-60 hidden lg:hidden z-40"></div>

<!-- Mobile Menu -->
<div id="mobileMenu"
  class="fixed top-0 right-0 h-full w-72 bg-[#1E3A8A] text-white z-50
         transform translate-x-full transition-transform duration-300 lg:hidden shadow-2xl">

  <!-- Header -->
  <div class="flex items-center justify-between p-5 border-b border-white">
    <h2 class="text-xl font-semibold">Menu</h2>
    <button id="closeMenuBtn" class="text-3xl">
      <i class="bi bi-x-lg"></i>
    </button>
  </div>

  <!-- Menu Items -->
  <div class="p-6 overflow-y-auto h-full">
    <ul class="space-y-4">

      <!-- Home -->
      <li>
        <button id="mobileDropdownBtn"
          class="w-full flex items-center justify-between py-2">
          <span>Home</span>
          <i id="mobileHomeChevron"
            class="bi bi-chevron-down transition-transform duration-300"></i>
        </button>
        <ul id="mobileDropdownMenu" class="hidden mt-2 ml-4 space-y-2 rounded-xl shadow-lg p-2">
          <li><a href="index.html" class="block py-1">Home 1</a></li>
          <li><a href="home2.html" class="block py-1">Home 2</a></li>
        </ul>
      </li>

      <li><a href="about.html" class="block py-2">About</a></li>
      <li><a href="instructor.html" class="block py-2">Instructors</a></li>
      <li><a href="program.html" class="block py-2">Programs</a></li>
       <li><a href="achieve.html" class="block py-2">Achievements</a></li>
      <li><a href="contact.html" class="block py-2">Contact</a></li>

      <!-- Dashboard -->
      <li>
        <button id="mobileDashboardBtn"
          class="w-full flex items-center justify-between py-2">
          <span>Dashboard</span>
          <i id="mobileDashboardChevron"
            class="bi bi-chevron-down transition-transform duration-300"></i>
        </button>
        <ul id="mobileDashboardMenu" class="hidden mt-2 ml-4 space-y-2 rounded-xl shadow-lg p-2">
          <li><a href="user.html" class="block py-1">User</a></li>
          <li><a href="admin.html" class="block py-1">Admin</a></li>
        </ul>
      </li>

      <!-- Mobile Extras -->
      <li class="pt-6 border-t border-white/20 flex flex-col gap-4">
        <div class="flex justify-around items-center">
          <button id="mobile-theme-toggle" class="w-10 h-10 flex items-center justify-center rounded-md border border-white/20 hover:border-white/60 hover:bg-white/10 transition-all duration-300 text-white">
            <i class="bi bi-moon-fill text-lg"></i>
          </button>

          <button id="mobile-rtl-toggle" class="w-10 h-10 flex items-center justify-center text-[10px] font-semibold rounded-md border border-white/20 hover:border-white/60 hover:bg-white/10 transition-all duration-300 text-white">
            RTL
          </button>
        </div>

        <a href="login.html" class="w-full py-3 bg-blue-500 hover:bg-white hover:text-blue-700 rounded-lg text-sm font-semibold uppercase tracking-widest transition-all duration-300 text-white text-center shadow-lg">
          Login
        </a>

        <a href="sign.html" class="w-full py-3 bg-transparent border border-white/40 hover:border-white hover:bg-white/10 rounded-lg text-sm font-semibold uppercase tracking-widest transition-all duration-300 text-white text-center">
          Sign Up
        </a>
      </li>

    </ul>
  </div>
</div>
`;

  // Mobile Menu Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const body = document.body;

  // Toggle mobile menu
  function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    body.classList.toggle('mobile-menu-open');


    // Close mobile dropdown when closing menu
    if (!mobileMenu.classList.contains('active')) {
      mobileDropdownMenu.classList.remove('show');
    }
  }

  // Open mobile menu
  hamburgerBtn.addEventListener('click', toggleMobileMenu);

  // Close mobile menu
  closeMenuBtn.addEventListener('click', toggleMobileMenu);
  mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

  // Close menu when clicking a link (optional)
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu();
    });
  });

  // Mobile dropdown functionality
  const mobileDropdownBtn = document.getElementById('mobileDropdownBtn');
  const mobileDropdownMenu = document.getElementById('mobileDropdownMenu');

  if (mobileDropdownBtn) {
    mobileDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDropdownMenu.classList.toggle('show');
    });
  }

  // Close mobile dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileDropdownBtn && mobileDropdownMenu &&
      !mobileDropdownBtn.contains(e.target) &&
      !mobileDropdownMenu.contains(e.target)) {
      mobileDropdownMenu.classList.remove('show');
    }
  });
  const mobileDashboardBtn = document.getElementById("mobileDashboardBtn");
  const mobileDashboardMenu = document.getElementById("mobileDashboardMenu");
  const mobileDashboardChevron = document.getElementById("mobileDashboardChevron");

  mobileDashboardBtn?.addEventListener("click", (e) => {
    e.stopPropagation();

    mobileDashboardMenu.classList.toggle("hidden");
  });

  // Desktop dropdown functionality
  const homeDropdownBtn = document.getElementById('homeDropdownBtn');
  const homeDropdownMenu = document.getElementById('homeDropdownMenu');

  if (homeDropdownBtn) {
    homeDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      homeDropdownMenu.classList.toggle('hidden');
    });

    // Close desktop dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!homeDropdownBtn.contains(e.target) && !homeDropdownMenu.contains(e.target)) {
        homeDropdownMenu.classList.add('hidden');
      }
    });
  }

  // Close mobile menu on window resize above 900px
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) {
      mobileMenu.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      body.classList.remove('mobile-menu-open');
      if (mobileDropdownMenu) {
        mobileDropdownMenu.classList.remove('show');
      }
    }
  });

  // Close dropdowns on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileDropdownMenu) {
        mobileDropdownMenu.classList.remove('show');
      }

      if (homeDropdownMenu) {
        homeDropdownMenu.classList.add('hidden');
      }

      if (window.innerWidth <= 820) {
        toggleMobileMenu();
      }
    }
  });

  // Prevent body scroll when mobile menu is open
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        if (body.classList.contains('mobile-menu-open')) {
          document.documentElement.style.overflow = 'hidden';
        } else {
          document.documentElement.style.overflow = '';
        }
      }
    });
  });

  observer.observe(body, { attributes: true });
  // Dark/light mode toggle
  const toggleBtn = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    toggleBtn.innerHTML = savedTheme === "dark"
      ? `<i class="bi bi-brightness-high-fill"></i>`
      : `<i class="bi bi-moon-fill"></i>`;
  }

  toggleBtn.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");

    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      toggleBtn.innerHTML = `<i class="bi bi-moon-fill"></i>`;
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggleBtn.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
  });

  // RTL toggle
  const rtlToggle = document.getElementById("rtlToggle");

  rtlToggle.onclick = () => {
    const html = document.documentElement;

    if (html.getAttribute("dir") === "rtl") {
      html.setAttribute("dir", "ltr");
    } else {
      html.setAttribute("dir", "rtl");
    }
  };

  // Highlight active nav link
  const currentPath = window.location.pathname.split("/").pop();

  const allNavLinks = document.querySelectorAll(
    '#navLinks > li > a, #mobileMenu > ul > li > a'
  );

  allNavLinks.forEach(link => {
    const linkPath = link.getAttribute("href");

    if (linkPath === currentPath) {
      link.classList.add("nav-active");
    }
  });

  // Make Home dropdown button bold and remove underline
  if (currentPath === "index.html" || currentPath === "home2.html") {
    document.getElementById("homeDropdownBtn")?.classList.add("home-active");
    document.getElementById("mobileDropdownBtn")?.classList.add("home-active");
  }
  //profile dropdown (desktop)
  const authBtn = document.getElementById("authBtn");
  const authMenu = document.getElementById("authMenu");

  if (authBtn && authMenu) {
    authBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      authMenu.classList.toggle("hidden");
    });

    // Close on outside click
    document.addEventListener("click", () => {
      authMenu.classList.add("hidden");
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        authMenu.classList.add("hidden");
      }
    });
  }
  // dashboard
  const dashboardBtn = document.getElementById("dashboardDropdownBtn");
  const dashboardMenu = document.getElementById("dashboardDropdownMenu");

  if (dashboardBtn) {
    dashboardBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dashboardMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", (e) => {
      if (!dashboardBtn.contains(e.target) &&
        !dashboardMenu.contains(e.target)) {
        dashboardMenu.classList.add("hidden");
      }
    });
  }

  // ===== ACTIVE NAV (DESKTOP + MOBILE) =====
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  // Desktop links
  document.querySelectorAll("#navLinks a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("nav-active");
    }
  });

  // Mobile links (✅ FIXED selector)
  document.querySelectorAll("#mobileMenu a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("nav-active");

      // If Home submenu is active → open dropdown + bold Home
      if (link.closest("#mobileDropdownMenu")) {
        document.getElementById("mobileDropdownMenu")?.classList.add("show");
        document.getElementById("mobileDropdownBtn")?.classList.add("home-active");
      }
    }
  });

  // Desktop Home dropdown button
  if (currentPage === "index.html" || currentPage === "home2.html") {
    document.getElementById("homeDropdownBtn")?.classList.add("home-active");
  }
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");

  mobileThemeToggle?.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");

    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      mobileThemeToggle.innerHTML = `<i class="bi bi-moon-fill"></i>`;
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      mobileThemeToggle.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
  });

  const mobileRtlToggle = document.getElementById("mobile-rtl-toggle");

  mobileRtlToggle?.addEventListener("click", () => {
    const html = document.documentElement;

    if (html.getAttribute("dir") === "rtl") {
      html.setAttribute("dir", "ltr");
    } else {
      html.setAttribute("dir", "rtl");
    }
  });

});

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    footer.innerHTML = `
<footer class="bg-[#1E3A8A] text-white">
  <div class="max-w-7xl mx-auto px-6 py-14">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

      <div class="lg:col-span-2">
        <h1 class="text-xl font-semibold text-white flex items-center gap-3">
  <a href="index.html">Daksha Martial</a>
</h1>

        <p class="text-blue-100 text-sm leading-relaxed mt-4 max-w-sm">
          Empowering individuals through discipline, technical excellence, and the 
          warrior spirit. Transform your mind and body at our premier facility.
        </p>

        <div class="flex gap-4 mt-6 text-xl">
          <a href="#" class="hover:text-blue-400 transition text-white"><i class="bi bi-facebook"></i></a>
          <a href="#" class="hover:text-blue-400 transition text-white"><i class="bi bi-instagram"></i></a>
          <a href="#" class="hover:text-blue-400 transition text-white"><i class="bi bi-youtube"></i></a>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-5 text-white uppercase tracking-wider">
          Quick Links
        </h3>
        <ul class="space-y-3 text-blue-100 text-sm font-medium">
          <li><a href="program.html" class="hover:text-blue-300 transition">Programs</a></li>
          <li><a href="about.html" class="hover:text-blue-300 transition">About</a></li>
          <li><a href="achieve.html" class="hover:text-blue-300 transition">Achievements</a></li>
          <li><a href="contact.html" class="hover:text-blue-300 transition">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-5 text-white uppercase tracking-wider">
          Programs
        </h3>
        <ul class="space-y-3 text-blue-100 text-sm font-medium">
          <li><a href="#" class="hover:text-blue-300 transition">Silambam</a></li>
          <li><a href="#" class="hover:text-blue-300 transition">Karate-Do</a></li>
          <li><a href="#" class="hover:text-blue-300 transition">Taekwondo</a></li>
          <li><a href="#" class="hover:text-blue-300 transition">Kickboxing</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-5 text-white uppercase tracking-wider">
          Reach Us
        </h3>
        <ul class="space-y-4 text-blue-100 text-sm">
          <li class="flex items-start gap-3">
            <i class="bi bi-geo-alt-fill text-blue-400"></i>
            <span>123 Combat Way, <br>Chennai, TN</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bi bi-telephone-fill text-blue-400"></i>
            <span>+91 98765 43210</span>
          </li>
        </ul>
      </div>

    </div>
  </div>

  <div class="border-t border-blue-800 py-6 text-center text-blue-300 text-xs px-4 bg-[#172554]">
    © ${new Date().getFullYear()} Daksha Martial. Train Hard. Stay Humble.
  </div>
</footer>
`;
});
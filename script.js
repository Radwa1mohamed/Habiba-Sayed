  const navbar = document.getElementById("navbar");
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-links a");
    const fireGlow = document.getElementById("fire-glow");

    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });

    // فتح وإغلاق القائمة عند الضغط على الزر
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // إغلاق القائمة فوراً عند الضغط على أي رابط (مهم للموبايل)
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });

    document.addEventListener("mousemove", (e) => {
      gsap.to(fireGlow, {
        x: e.clientX - 225,
        y: e.clientY - 225,
        duration: 0.7,
        ease: "power2.out"
      });

      const hero = document.getElementById("hero");
      if (e.clientX > window.innerWidth * 0.3) {
        hero.classList.add("active");
      } else {
        hero.classList.remove("active");
      }
    });

    const texts = ["I turn attention into sales.", "I build emotional storytelling.", "I help brands grow with content."];
    let i = 0, j = 0, current = "";
    function type() {
      if (j < texts[i].length) {
        current += texts[i][j];
        document.getElementById("typing").innerHTML = current + "|";
        j++;
        setTimeout(type, 50);
      } else {
        setTimeout(() => {
          current = ""; j = 0;
          i = (i + 1) % texts.length;
          type();
        }, 1500);
      }
    }
    type();

    const aboutImg = document.querySelector(".about-image img");
    document.addEventListener("mousemove", (e) => {
      let x = (e.clientX - window.innerWidth / 2) / 50;
      let y = (e.clientY - window.innerHeight / 2) / 50;
      if(aboutImg) aboutImg.style.transform = `translate(${x}px, ${y}px)`;
    });

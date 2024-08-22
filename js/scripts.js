




document.addEventListener('DOMContentLoaded', () => {
  // Hover effects
  document.querySelectorAll('.nav-right a, .nav-left a').forEach(anchor => {
    anchor.addEventListener('mouseenter', () => {
      gsap.to(anchor, { duration: 0.01, scale: 1.01, color: '#9D81BA' });
    });
    anchor.addEventListener('mouseleave', () => {
      gsap.to(anchor, { duration: 0.01, scale: 1, color: '#000000' });
    });
  });

  // Movement effects
  document.querySelectorAll('.nav-right li a, .nav-left li a').forEach(anchor => {
    let cursor = { x: 0, y: 0 };
    anchor.addEventListener('mousemove', (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
      gsap.to(anchor, {
        duration: 2,
        x: cursor.x - (anchor.getBoundingClientRect().left + window.scrollX) - anchor.offsetWidth / 2,
        y: cursor.y - (anchor.getBoundingClientRect().top + window.scrollY) - anchor.offsetHeight / 2,
        ease: "power3.out",
        overwrite: 'auto'
      });
    });
    anchor.addEventListener('mouseleave', () => {
      gsap.to(anchor, {
        duration: 0.4,
        x: 0,
        y: 0,
        ease: "power3.out",
        overwrite: 'auto'
      });
    });
  });

  // GSAP Timeline for hero-name
  const heroName = document.querySelector('.hero-name h1');
  if (heroName) {
    const nameText = heroName.textContent.trim();
    heroName.innerHTML = nameText + " " + nameText;
    const nameWidth = heroName.scrollWidth / 3;
    const tl = gsap.timeline({ repeat: -1, ease: 'linear' });
    tl.to(heroName, {
      x: -nameWidth,
      duration: 20,
      ease: 'linear',
      onComplete: () => gsap.set(heroName, { x: 0 })
    });
  }

 
  

  

  

  // Custom scrollbar
  const contentWrapper = document.querySelector('.content-wrapper');
  const scrollbar = document.querySelector('.custom-scrollbar');
  const thumb = document.querySelector('.scroll-thumb');

  const updateScrollbar = () => {
    if (!contentWrapper || !thumb) return;
    const contentHeight = contentWrapper.scrollHeight;
    const viewportHeight = contentWrapper.clientHeight;
    const thumbHeight = (viewportHeight / contentHeight) * viewportHeight;
    thumb.style.height = `${thumbHeight}px`;
    const scrollRatio = contentWrapper.scrollTop / (contentHeight - viewportHeight);
    const thumbTop = scrollRatio * (viewportHeight - thumbHeight);
    thumb.style.top = `${thumbTop}px`;
  };

  contentWrapper?.addEventListener('scroll', updateScrollbar);
  window.addEventListener('resize', updateScrollbar);

  let isDragging = false;
  let startY;
  let startTop;

  thumb?.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    startTop = parseInt(window.getComputedStyle(thumb).top, 10);
    document.body.style.userSelect = 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaY = e.clientY - startY;
    const newTop = startTop + deltaY;
    const viewportHeight = contentWrapper.clientHeight;
    const contentHeight = contentWrapper.scrollHeight;
    const maxTop = viewportHeight - thumb.offsetHeight;
    if (newTop < 0 || newTop > maxTop) return;
    thumb.style.top = `${newTop}px`;
    const scrollRatio = newTop / maxTop;
    contentWrapper.scrollTop = scrollRatio * (contentHeight - viewportHeight);
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = '';
  });

  updateScrollbar();
});


// dev h1 hover anima
document.querySelectorAll('.dev h1').forEach(anchor => {
  let isHovered = false; // Track the hover state of each anchor

  // Add event listener for mouseenter (hover) event
  anchor.addEventListener('mouseenter', function() {
      gsap.to(anchor, { duration: 0.01, scale: 1.01, color: '#9D81BA' });
      isHovered = true;
    
  });

  // Add event listener for mouseleave event
  anchor.addEventListener('mouseleave', function() {
    // On mouse leave, change back to white and scale down
    gsap.to(anchor, { duration: 0.2, scale: 1, color: '#000000' });
  });
});







document.addEventListener('DOMContentLoaded', () => {
  // Hover effects
  document.querySelectorAll('.nav-right a, .nav-left a').forEach(anchor => {
    anchor.addEventListener('mouseenter', () => {
      gsap.to(anchor, { duration: 0.01, scale: 1.01, color: '#9D81BA' });
    });
    anchor.addEventListener('mouseleave', () => {
      gsap.to(anchor, { duration: 0.01, scale: 1, color: '#000000' });
    });
  });

  // Movement effects
  document.querySelectorAll('.nav-right li a, .nav-left li a').forEach(anchor => {
    let cursor = { x: 0, y: 0 };
    anchor.addEventListener('mousemove', (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
      gsap.to(anchor, {
        duration: 2,
        x: cursor.x - (anchor.getBoundingClientRect().left + window.scrollX) - anchor.offsetWidth / 2,
        y: cursor.y - (anchor.getBoundingClientRect().top + window.scrollY) - anchor.offsetHeight / 2,
        ease: "power3.out",
        overwrite: 'auto'
      });
    });
    anchor.addEventListener('mouseleave', () => {
      gsap.to(anchor, {
        duration: 0.4,
        x: 0,
        y: 0,
        ease: "power3.out",
        overwrite: 'auto'
      });
    });
  });

  // GSAP Timeline for hero-name
  const heroName = document.querySelector('.hero-name h1');
  if (heroName) {
    const nameText = heroName.textContent.trim();
    heroName.innerHTML = nameText + " " + nameText;
    const nameWidth = heroName.scrollWidth / 3;
    const tl = gsap.timeline({ repeat: -1, ease: 'linear' });
    tl.to(heroName, {
      x: -nameWidth,
      duration: 20,
      ease: 'linear',
      onComplete: () => gsap.set(heroName, { x: 0 })
    });
  }

  // Custom scrollbar
  const scroll = new LocomotiveScroll({
    el: document.querySelector('.page-con'),
    smooth: true,
    getDirection: true
  });

  const scrollBar = document.querySelector('.custom-scrollbar');
  const scrollThumb = document.querySelector('.scroll-thumb');

  function updateScrollbar() {
    const scrollHeight = document.querySelector('.page-con').scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    const scrollThumbHeight = (clientHeight / scrollHeight) * clientHeight;
    const scrollThumbPosition = (scrollTop / scrollHeight) * clientHeight;

    scrollThumb.style.height = `${scrollThumbHeight}px`;
    scrollThumb.style.transform = `translateY(${scrollThumbPosition}px)`;
  }

  function onScrollThumbDrag(e) {
    const scrollHeight = document.querySelector('.page-con').scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const thumbHeight = scrollThumb.getBoundingClientRect().height;
    
    let startY = e.clientY;
    let startScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    function onMouseMove(event) {
      const deltaY = event.clientY - startY;
      const newScrollTop = startScrollTop + (deltaY / clientHeight) * scrollHeight;
      document.documentElement.scrollTop = newScrollTop;
      document.body.scrollTop = newScrollTop;
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  scrollThumb.addEventListener('mousedown', onScrollThumbDrag);
  window.addEventListener('scroll', updateScrollbar);
  updateScrollbar();

  // dev h1 hover anima
  document.querySelectorAll('.dev h1').forEach(anchor => {
    anchor.addEventListener('mouseenter', () => {
      gsap.to(anchor, { duration: 0.01, scale: 1.01, color: '#9D81BA' });
    });
    anchor.addEventListener('mouseleave', () => {
      gsap.to(anchor, { duration: 0.2, scale: 1, color: '#000000' });
    });
  });
});



// About sec

// footter


// footer text movement



document.querySelectorAll('.con-b-left a, .con-b-right h2').forEach(anchor => {
  anchor.addEventListener('mouseenter', () => {
    gsap.to(anchor, { duration: 0.01, scale: 1.01, color: '#9D81BA' });
  });
  anchor.addEventListener('mouseleave', () => {
    gsap.to(anchor, { duration: 0.01, scale: 1, color: '#000000' });
  });
});

// Movement effects
document.querySelectorAll('.con-b-left a, .con-b-right a').forEach(anchor => {
  let cursor = { x: 0, y: 0 };
  anchor.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
    gsap.to(anchor, {
      duration: 2,
      x: cursor.x - (anchor.getBoundingClientRect().left + window.scrollX) - anchor.offsetWidth / 2,
      y: cursor.y - (anchor.getBoundingClientRect().top + window.scrollY) - anchor.offsetHeight / 2,
      ease: "power3.out",
      overwrite: 'auto'
    });
  });
  anchor.addEventListener('mouseleave', () => {
    gsap.to(anchor, {
      duration: 0.4,
      x: 0,
      y: 0,
      ease: "power3.out",
      overwrite: 'auto'
    });
  });
});
(function () {
  'use strict';

  /* ==========================================================================
     EDITABLE CONFIGURATION
     ========================================================================== */
  const SITE_URL = 'https://khan0431409.github.io/hookmedia-portfolio/';
  const EMAIL_ADDRESS = 'movimakermekomatmaro@gmail.com';
  const FIVERR_URL = 'https://www.fiverr.com/s/em85mwj';
  const INSTAGRAM_URL = 'https://www.instagram.com/hookmedia.ai/';

  // Default featured video (falls back to "save_water.mp4" if missing)
  const FEATURED_FILE = 'save water.mp4';

  // Candidate relative folders searched in order (supports both flat root and assets/videos/)
  const VIDEO_SEARCH_PREFIXES = ['', 'assets/videos/'];

  // Editable Hero Badges (4 items)
  const HERO_BADGES = [
    '5+ Years on Fiverr',
    '100% AI Workflows',
    '9:16 & 16:9 Social Optimized',
    '48-72h Fast Delivery'
  ];

  // Editable Turnaround & Revision Strings
  const DELIVERY_TIME = '48 to 72 hours';
  const REVISIONS = '2 revisions included';

  // List confirmed client video file names here (e.g. ['25-before-25.mp4'])
  const CLIENT_WORK_FILES = []; // I have NOT confirmed any video as client work yet.

  // All portfolio video projects (order controls display sequence)
  const PROJECTS = [
    {
      id: 'burger-ad',
      order: 1,
      file: 'burger ad.mp4',
      title: 'Burger Cheese-Pull Ad',
      description: 'A 15-second vertical ad built around a slow-motion cheese pull, ending on a pack shot.',
      category: 'concept',
      aspect: '9:16',
      duration: '15s',
      disclaimer: 'Concept ad for fictional brand "Smokestack Burger Co."',
      featured: false
    },
    {
      id: 'hypercar-night-reveal',
      order: 2,
      file: 'new bugati ad videio for gig.mp4',
      title: 'Hypercar Night Reveal',
      description: 'A cinematic 2K night reveal of a blue-and-black hypercar, with close-ups and rolling shots.',
      category: 'concept',
      aspect: '16:9',
      duration: '',
      disclaimer: 'Concept ad, not affiliated with Bugatti.',
      featured: false
    },
    {
      id: 'save-water',
      order: 3,
      file: 'save water.mp4',
      title: 'Water-Saving Shower Ad',
      description: 'A 21-second vertical product story with on-screen captions, from wasted shower water to a simple device that reuses it.',
      category: 'concept',
      aspect: '9:16',
      duration: '21s',
      disclaimer: '',
      featured: true
    },
    {
      id: 'handcrafted-jewellery',
      order: 4,
      file: 'jewelery.mp4',
      title: 'Handcrafted Jewellery Ad',
      description: 'A vertical product ad for golden beaded earrings and a bracelet beside an hourglass of gold sand, ending on a portrait.',
      category: 'concept',
      aspect: '9:16',
      duration: '',
      disclaimer: '',
      featured: false
    },
    {
      id: 'estate-suv-ad',
      order: 5,
      file: 'car ad.mp4',
      title: 'Estate SUV Ad',
      description: 'A 15-second cinematic ad across an estate road, formal gardens and a stone staircase, ending on a hero shot.',
      category: 'concept',
      aspect: '16:9',
      duration: '15s',
      disclaimer: 'Concept ad, not affiliated with Hyundai.',
      featured: false
    },
    {
      id: 'mountain-lake-drink',
      order: 6,
      file: 'can.mp4',
      title: 'Mountain Lake Drink Ad',
      description: 'A 15-second vertical beverage ad: a can beside a misty lake, a woman drinking on a jetty, ending underwater.',
      category: 'concept',
      aspect: '9:16',
      duration: '15s',
      disclaimer: '',
      featured: false
    },
    {
      id: 'sunset-cola-ad',
      order: 7,
      file: 'coc ad.mp4',
      title: 'Sunset Cola Ad',
      description: 'A warm sunset story on a football field with friends and an ice-cold bottle.',
      category: 'concept',
      aspect: '16:9',
      duration: '',
      disclaimer: 'Concept ad, not affiliated with The Coca-Cola Company.',
      featured: false
    },
    {
      id: 'wireless-earbuds-ad',
      order: 8,
      file: 'blutooth ads.mp4',
      title: 'Wireless Earbuds Ad',
      description: 'A 15-second product ad with lifestyle shots, close-ups and a feature call-out for battery, touch control and water resistance.',
      category: 'concept',
      aspect: '16:9',
      duration: '15s',
      disclaimer: '',
      featured: false
    },
    {
      id: 'blender-smoothie-ad',
      order: 9,
      file: 'electronic.mp4',
      title: 'Blender Smoothie Ad',
      description: 'A 10-second kitchen-product ad: a morning routine, fresh fruit, a close-up blend and a first sip.',
      category: 'concept',
      aspect: '16:9',
      duration: '10s',
      disclaimer: 'Concept ad, not affiliated with NutriBullet.',
      featured: false
    },
    {
      id: 'ai-car-ads-showreel',
      order: 10,
      file: 'ads.mp4',
      title: 'AI Car Ads Showreel',
      description: 'A fast showreel of AI car ads for dealerships, brands and rentals: night city, coastal road, motorcycle, wheel and exhaust close-ups.',
      category: 'concept',
      aspect: '16:9',
      duration: '',
      disclaimer: 'Concept ad. Vehicles shown are AI-generated and not affiliated with any manufacturer.',
      featured: false
    }
  ];

  // Featured Project Case-Study Copy
  const FEATURED_COPY = {
    '25-before-25.mp4': {
      clientHeading: 'Featured Client Project: 25before25',
      conceptHeading: 'Featured Project',
      chips: ['23 seconds', '16:9', '2560 x 1440 (2K)', 'YouTube & web campaigns'],
      summary: 'A 23-second AI-generated campaign ad for a global youth travel initiative, taking the viewer through five worlds in one journey.',
      paragraph: 'This was a commercial I delivered on Fiverr for a global youth campaign initiative, created entirely with AI. The brief was to show what a young person could experience before turning 25. I built the ad as one continuous journey through five scenes: a study room, an alpine trail, a steam train, the Egyptian pyramids and an ocean cliff. Each scene changes every two to four seconds to keep the pace moving, with an orchestral score, a voiceover and on-screen subtitles carrying the message, and a compass-rose outro with a branded call to action. I delivered a master file in 2K, ready for YouTube and web campaigns.',
      bullets: [
        'A 23-second master file in 16:9 at 2K (2560 x 1440)',
        'Five AI-generated environments: study room, alpine trail, steam train, Egyptian pyramids, ocean cliff',
        'Scene changes paced every 2 to 4 seconds',
        'Orchestral score and voiceover, mixed together',
        'Subtitles on screen so the message works without sound',
        'A compass-rose outro with a branded call to action'
      ],
      disclaimer: ''
    },
    'save water.mp4': {
      clientHeading: 'Featured Project: Water-Saving Shower Ad',
      conceptHeading: 'Featured Project',
      chips: ['21 seconds', '9:16', '1080 x 1920', 'Reels, TikTok & Shorts'],
      summary: 'A 21-second vertical AI product story that takes a viewer from wasted shower water to a simple device that gives it a second life.',
      paragraph: "I built this ad as a short story in three beats. It opens with a question every viewer knows, 'Waiting for hot water?', then shows the water that normally goes down the drain, with a live litre counter climbing as it is caught. A foot press on the device, with the line 'No plumbing. No install.', is the product moment, and the ad ends with the water being reused on houseplants under the line 'Same water. Second life.' Clean captions carry the message on screen, so the ad works with the sound off.",
      bullets: [
        'A 21-second vertical master file at 1080 x 1920',
        'A problem, demonstration and payoff structure in one short story',
        'On-screen captions and a live litre counter',
        'Close-up product shots of the foot-press device',
        'A lifestyle ending that shows the water being reused',
        'Clean, calm colours and soft lighting for a premium home-tech feel'
      ],
      disclaimer: ''
    }
  };

  /* ==========================================================================
     STATE & HELPERS
     ========================================================================== */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const videoResolveCache = new Map();
  const posterResolveCache = new Map();
  let activeFilter = 'all';
  let currentlyPlayingCardVideo = null;
  let lastFocusedElement = null;

  function isClientWork(fileName) {
    return Array.isArray(CLIENT_WORK_FILES) && CLIENT_WORK_FILES.includes(fileName);
  }

  function getCategory(fileName) {
    return isClientWork(fileName) ? 'client' : 'concept';
  }

  function getBadgeLabel(fileName) {
    return isClientWork(fileName) ? 'Client project' : 'Concept ad';
  }

  function formatDuration(seconds) {
    if (!Number.isFinite(seconds) || seconds <= 0) return '';
    return Math.round(seconds) + 's';
  }

  function computeAspectLabel(width, height) {
    if (!width || !height) return '';
    const ratio = width / height;
    if (Math.abs(ratio - 16 / 9) < 0.08) return '16:9';
    if (Math.abs(ratio - 9 / 16) < 0.08) return '9:16';
    if (Math.abs(ratio - 1) < 0.05) return '1:1';
    if (Math.abs(ratio - 4 / 5) < 0.05) return '4:5';
    return width > height ? '16:9' : '9:16';
  }

  function copyTextToClipboard(text) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      return navigator.clipboard.writeText(text).then(
        function () {
          return true;
        },
        function () {
          return Boolean(fallbackCopyText(text));
        }
      );
    }
    return Promise.resolve(Boolean(fallbackCopyText(text)));
  }

  function fallbackCopyText(text) {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(textarea);
      return Boolean(ok);
    } catch (err) {
      return false;
    }
  }

  function showCopiedFeedback(buttonEl, succeeded) {
    if (!buttonEl) return;
    const originalText = buttonEl.dataset.originalLabel || buttonEl.textContent;
    buttonEl.dataset.originalLabel = originalText;

    if (buttonEl.dataset.feedbackTimer) {
      window.clearTimeout(Number(buttonEl.dataset.feedbackTimer));
    }

    if (succeeded) {
      buttonEl.textContent = 'Copied!';
      buttonEl.dataset.feedbackTimer = String(
        window.setTimeout(function () {
          buttonEl.textContent = originalText;
        }, 2000)
      );
    } else {
      buttonEl.textContent = 'Copy failed. Select the text and press Ctrl+C';
      buttonEl.dataset.feedbackTimer = String(
        window.setTimeout(function () {
          buttonEl.textContent = originalText;
        }, 3000)
      );
    }
  }

  /* ==========================================================================
     FIX 1 & FIX 9: FETCH-BASED FILE CHECK & CACHED RESOLUTION
     ========================================================================== */
  function fileExists(url) {
    if (window.location && window.location.protocol === 'file:') {
      return Promise.resolve(null);
    }
    if (typeof window.fetch !== 'function') {
      return Promise.resolve(null);
    }

    return window
      .fetch(url, { method: 'HEAD', cache: 'no-cache' })
      .then(function (response) {
        if (response.ok) return true;
        if (response.status === 404 || response.status === 410) return false;

        return window
          .fetch(url, {
            method: 'GET',
            headers: { Range: 'bytes=0-0' },
            cache: 'no-cache'
          })
          .then(function (getResponse) {
            if (getResponse.ok || getResponse.status === 206) return true;
            if (getResponse.status === 404 || getResponse.status === 410) return false;
            return null;
          })
          .catch(function () {
            return null;
          });
      })
      .catch(function () {
        return null;
      });
  }

  function getCandidateVideoUrls(fileName) {
    const variants = [fileName];
    const underscoreVariant = fileName.replace(/\s+/g, '_');
    const spaceVariant = fileName.replace(/_+/g, ' ');
    if (variants.indexOf(underscoreVariant) === -1) variants.push(underscoreVariant);
    if (variants.indexOf(spaceVariant) === -1) variants.push(spaceVariant);

    const urls = [];
    VIDEO_SEARCH_PREFIXES.forEach(function (prefix) {
      variants.forEach(function (variant) {
        const encoded = prefix + encodeURI(variant);
        if (urls.indexOf(encoded) === -1) {
          urls.push(encoded);
        }
      });
    });
    return urls;
  }

  function resolveVideo(fileName) {
    const normalized = String(fileName || '').trim();
    if (!normalized) return Promise.resolve(null);

    if (videoResolveCache.has(normalized)) {
      return videoResolveCache.get(normalized);
    }

    const candidateUrls = getCandidateVideoUrls(normalized);

    const promise = (function () {
      let sawUnknown = false;

      function tryCandidate(index) {
        if (index >= candidateUrls.length) {
          if (sawUnknown) {
            return Promise.resolve(candidateUrls[0]);
          }
          return Promise.resolve(null);
        }

        const candidateUrl = candidateUrls[index];
        return fileExists(candidateUrl).then(function (exists) {
          if (exists === true) {
            return candidateUrl;
          }
          if (exists === null) {
            sawUnknown = true;
          }
          return tryCandidate(index + 1);
        });
      }

      return tryCandidate(0);
    })();

    videoResolveCache.set(normalized, promise);
    return promise;
  }

  function resolvePosterForVideo(videoUrl) {
    const posterUrl = String(videoUrl || '').replace(/\.mp4$/i, '.jpg');
    if (!posterUrl || posterUrl === videoUrl) {
      return Promise.resolve(null);
    }

    if (posterResolveCache.has(posterUrl)) {
      return posterResolveCache.get(posterUrl);
    }

    const promise = fileExists(posterUrl).then(function (exists) {
      return exists === true ? posterUrl : null;
    });

    posterResolveCache.set(posterUrl, promise);
    return promise;
  }

  /* ==========================================================================
     INITIALIZE STATIC / EDITABLE TEXT
     ========================================================================== */
  function initStaticContent() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    const badgesList = document.getElementById('hero-badges');
    if (badgesList && Array.isArray(HERO_BADGES)) {
      HERO_BADGES.forEach(function (label) {
        const li = document.createElement('li');
        li.className = 'hero-badge-item';
        li.textContent = label;
        badgesList.appendChild(li);
      });
    }

    const turnaroundEl = document.getElementById('turnaround-copy');
    if (turnaroundEl) {
      turnaroundEl.textContent = 'Delivery in ' + DELIVERY_TIME + ' and ' + REVISIONS + ' on Fiverr.';
    }
  }

  /* ==========================================================================
     MOBILE NAVIGATION
     ========================================================================== */
  function initMobileNav() {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    if (!toggle || !nav) return;

    function closeMenu() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
    }

    toggle.addEventListener('click', function () {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closeMenu();
      } else {
        nav.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Close navigation menu');
      }
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  /* ==========================================================================
     HERO VIDEO WITH FALLBACK (USES CACHED resolveVideo)
     ========================================================================== */
  function initHeroVideo() {
    const heroVideo = document.getElementById('hero-video');
    const heroCaption = document.getElementById('hero-caption');
    if (!heroVideo || !heroCaption) return;

    const candidates = [
      { file: 'new bugati ad videio for gig.mp4', caption: 'Concept ad, not affiliated with Bugatti' },
      { file: 'car ad.mp4', caption: 'Concept ad, not affiliated with Hyundai' }
    ];

    function tryHeroCandidate(index) {
      if (index >= candidates.length) {
        heroVideo.remove();
        heroCaption.hidden = true;
        return;
      }

      const candidate = candidates[index];
      resolveVideo(candidate.file).then(function (resolvedUrl) {
        if (!resolvedUrl) {
          tryHeroCandidate(index + 1);
          return;
        }

        function handleHeroError() {
          heroVideo.removeEventListener('error', handleHeroError);
          tryHeroCandidate(index + 1);
        }

        heroVideo.addEventListener('error', handleHeroError);
        heroVideo.src = resolvedUrl + '#t=0.5';
        heroCaption.textContent = candidate.caption;
        heroCaption.hidden = false;

        if (!prefersReducedMotion) {
          const playPromise = heroVideo.play();
          if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(function () {});
          }
        }
      });
    }

    tryHeroCandidate(0);
  }

  /* ==========================================================================
     FEATURED PROJECT WITH FALLBACK (FIX 6 & FIX 7)
     ========================================================================== */
  function hideFeaturedSection() {
    const section = document.getElementById('featured-work');
    const navItem = document.getElementById('nav-featured-item');
    const footerItem = document.getElementById('footer-featured-item');
    if (section) section.hidden = true;
    if (navItem) navItem.hidden = true;
    if (footerItem) footerItem.hidden = true;
  }

  function initFeaturedSection() {
    const section = document.getElementById('featured-work');
    if (!section) return;

    const fallbackFile = 'save water.mp4';
    const filesToTry = FEATURED_FILE === fallbackFile ? [FEATURED_FILE] : [FEATURED_FILE, fallbackFile];

    function tryFeatured(index) {
      if (index >= filesToTry.length) {
        hideFeaturedSection();
        return;
      }

      const file = filesToTry[index];
      resolveVideo(file).then(function (resolvedUrl) {
        if (!resolvedUrl) {
          tryFeatured(index + 1);
          return;
        }

        const copy = FEATURED_COPY[file] || FEATURED_COPY[fallbackFile];
        const client = isClientWork(file);
        const badgeEl = document.getElementById('featured-badge');
        const headingEl = document.getElementById('featured-heading');
        const videoEl = document.getElementById('featured-video');
        const chipsEl = document.getElementById('featured-chips');
        const summaryEl = document.getElementById('featured-summary');
        const paragraphEl = document.getElementById('featured-paragraph');
        const bulletsEl = document.getElementById('featured-bullets');
        const disclaimerEl = document.getElementById('featured-disclaimer');

        if (badgeEl) {
          badgeEl.textContent = client ? 'Client project' : 'Concept ad';
          if (client) badgeEl.classList.add('badge-client');
        }

        if (headingEl) {
          headingEl.textContent = client ? copy.clientHeading : copy.conceptHeading;
        }

        if (videoEl) {
          videoEl.addEventListener('loadedmetadata', function () {
            if (videoEl.videoWidth && videoEl.videoHeight) {
              videoEl.style.aspectRatio = videoEl.videoWidth + ' / ' + videoEl.videoHeight;
            }
          });

          // Fix 6: start from beginning (0s) on first play despite #t=0.5 thumbnail fragment
          videoEl.addEventListener(
            'play',
            function () {
              if (videoEl.currentTime > 0 && videoEl.currentTime < 1) {
                videoEl.currentTime = 0;
              }
            },
            { once: true }
          );

          videoEl.src = resolvedUrl + '#t=0.5';
        }

        if (chipsEl) {
          chipsEl.innerHTML = '';
          copy.chips.forEach(function (chipText) {
            const li = document.createElement('li');
            li.className = 'spec-chip';
            li.textContent = chipText;
            chipsEl.appendChild(li);
          });
        }

        if (summaryEl) summaryEl.textContent = copy.summary;
        if (paragraphEl) paragraphEl.textContent = copy.paragraph;

        if (bulletsEl) {
          bulletsEl.innerHTML = '';
          copy.bullets.forEach(function (bulletText) {
            const li = document.createElement('li');
            li.textContent = bulletText;
            bulletsEl.appendChild(li);
          });
        }

        if (disclaimerEl && copy.disclaimer) {
          disclaimerEl.textContent = copy.disclaimer;
          disclaimerEl.hidden = false;
        }

        // Fix 7: reveal featured section and nav links only after content is populated
        section.hidden = false;
        const navItem = document.getElementById('nav-featured-item');
        const footerItem = document.getElementById('footer-featured-item');
        if (navItem) navItem.hidden = false;
        if (footerItem) footerItem.hidden = false;
      });
    }

    tryFeatured(0);
  }

  /* ==========================================================================
     WORK GRID, FILTERS & SINGLE-VIDEO PREVIEW (FIX 1 & FIX 9)
     ========================================================================== */
  function pauseActiveCardPreview(exceptVideo) {
    if (currentlyPlayingCardVideo && currentlyPlayingCardVideo !== exceptVideo) {
      currentlyPlayingCardVideo.pause();
      currentlyPlayingCardVideo = null;
    }
  }

  function updateFilterCountsAndVisibility() {
    const grid = document.getElementById('work-grid');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.project-card'));
    const total = cards.length;
    const clientCount = cards.filter(function (c) { return c.dataset.category === 'client'; }).length;
    const conceptCount = cards.filter(function (c) { return c.dataset.category === 'concept'; }).length;

    const btnAll = document.getElementById('filter-all');
    const btnClient = document.getElementById('filter-client');
    const btnConcept = document.getElementById('filter-concept');

    if (btnAll) {
      btnAll.textContent = 'All Works (' + total + ')';
      btnAll.hidden = total === 0;
    }

    if (btnClient) {
      btnClient.textContent = 'Client Work (' + clientCount + ')';
      btnClient.hidden = clientCount === 0;
    }

    if (btnConcept) {
      btnConcept.textContent = 'Concept Ads (' + conceptCount + ')';
      btnConcept.hidden = conceptCount === 0;
    }

    if (activeFilter === 'client' && clientCount === 0) activeFilter = 'all';
    if (activeFilter === 'concept' && conceptCount === 0) activeFilter = 'all';

    applyFilter(activeFilter);
  }

  function applyFilter(filterValue) {
    activeFilter = filterValue;
    const grid = document.getElementById('work-grid');
    if (!grid) return;

    document.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.filter === filterValue);
    });

    grid.querySelectorAll('.project-card').forEach(function (card) {
      const matches = filterValue === 'all' || card.dataset.category === filterValue;
      card.hidden = !matches;
      if (!matches) {
        const vid = card.querySelector('video');
        if (vid && !vid.paused) vid.pause();
      }
    });
  }

  function createProjectCard(project, resolvedUrl, lazyObserver) {
    const category = getCategory(project.file);
    const badgeLabel = getBadgeLabel(project.file);

    const card = document.createElement('article');
    card.className = 'project-card';
    card.dataset.category = category;
    card.dataset.id = project.id;

    const stageBtn = document.createElement('button');
    stageBtn.type = 'button';
    stageBtn.className = 'card-media-stage';
    stageBtn.setAttribute('aria-label', 'Play ' + project.title);

    const frame = document.createElement('div');
    frame.className = 'card-video-frame';
    if (project.aspect) {
      frame.style.aspectRatio = project.aspect.replace(':', ' / ');
    }

    const video = document.createElement('video');
    video.className = 'card-video';
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.dataset.resolvedUrl = resolvedUrl;

    const playOverlay = document.createElement('span');
    playOverlay.className = 'play-overlay';
    playOverlay.setAttribute('aria-hidden', 'true');
    playOverlay.innerHTML =
      '<span class="play-icon-circle">' +
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>' +
      '</span>';

    frame.appendChild(video);
    stageBtn.appendChild(frame);
    stageBtn.appendChild(playOverlay);

    const body = document.createElement('div');
    body.className = 'card-body';

    const metaRow = document.createElement('div');
    metaRow.className = 'card-meta-row';

    const badge = document.createElement('span');
    badge.className = 'badge' + (category === 'client' ? ' badge-client' : '');
    badge.textContent = badgeLabel;

    const specs = document.createElement('span');
    specs.className = 'card-specs';
    specs.textContent = [project.aspect, project.duration].filter(Boolean).join(' • ');

    metaRow.appendChild(badge);
    metaRow.appendChild(specs);

    const titleBtn = document.createElement('button');
    titleBtn.type = 'button';
    titleBtn.className = 'card-title-btn';
    titleBtn.textContent = project.title;

    const desc = document.createElement('p');
    desc.className = 'card-desc';
    desc.textContent = project.description;

    const retryBtn = document.createElement('button');
    retryBtn.type = 'button';
    retryBtn.className = 'card-retry-btn';
    retryBtn.textContent = 'Video unavailable. Tap to retry.';
    retryBtn.hidden = true;

    body.appendChild(metaRow);
    body.appendChild(titleBtn);
    body.appendChild(desc);
    body.appendChild(retryBtn);

    if (project.disclaimer) {
      const disclaimer = document.createElement('p');
      disclaimer.className = 'disclaimer-text';
      disclaimer.textContent = project.disclaimer;
      body.appendChild(disclaimer);
    }

    card.appendChild(stageBtn);
    card.appendChild(body);

    video.addEventListener('loadedmetadata', function () {
      retryBtn.hidden = true;
      if (video.videoWidth && video.videoHeight) {
        frame.style.aspectRatio = video.videoWidth + ' / ' + video.videoHeight;
        project.realWidth = video.videoWidth;
        project.realHeight = video.videoHeight;
        project.aspect = computeAspectLabel(video.videoWidth, video.videoHeight) || project.aspect;
      }
      if (!project.duration && Number.isFinite(video.duration)) {
        project.duration = formatDuration(video.duration);
      }
      specs.textContent = [project.aspect, project.duration].filter(Boolean).join(' • ');
    });

    // Fix 1: Never remove a card on a later video error; show inline retry prompt instead
    video.addEventListener('error', function () {
      retryBtn.hidden = false;
    });

    function retryVideoLoad() {
      retryBtn.hidden = true;
      video.src = resolvedUrl + '#t=0.5';
      video.load();
    }

    retryBtn.addEventListener('click', retryVideoLoad);

    function loadCardMedia() {
      resolvePosterForVideo(resolvedUrl).then(function (posterUrl) {
        if (posterUrl) {
          video.poster = posterUrl;
          video.preload = 'none';
        } else {
          video.preload = 'metadata';
          video.src = resolvedUrl + '#t=0.5';
        }
      });
    }

    video.loadCardMedia = loadCardMedia;

    card.addEventListener('mouseenter', function () {
      if (prefersReducedMotion) return;
      if (!video.src) {
        video.src = resolvedUrl;
      }
      pauseActiveCardPreview(video);
      currentlyPlayingCardVideo = video;
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(function () {});
    });

    card.addEventListener('mouseleave', function () {
      if (!video.paused) {
        video.pause();
      }
      if (currentlyPlayingCardVideo === video) {
        currentlyPlayingCardVideo = null;
      }
    });

    function handleOpenLightbox() {
      pauseActiveCardPreview(null);
      openLightbox(project, resolvedUrl, stageBtn);
    }

    stageBtn.addEventListener('click', handleOpenLightbox);
    titleBtn.addEventListener('click', handleOpenLightbox);

    if (lazyObserver) {
      lazyObserver.observe(video);
    } else {
      loadCardMedia();
    }

    return card;
  }

  function renderEmptyWorkNotice(grid) {
    const notice = document.createElement('p');
    notice.className = 'work-notice';
    notice.innerHTML =
      'My video gallery is loading or unavailable right now. See my latest ads on ' +
      '<a href="' + INSTAGRAM_URL + '" target="_blank" rel="noopener noreferrer">Instagram (@hookmedia.ai)</a>' +
      ' or on ' +
      '<a href="' + FIVERR_URL + '" target="_blank" rel="noopener noreferrer">Fiverr</a>.';
    grid.appendChild(notice);
  }

  function initWorkGrid() {
    const grid = document.getElementById('work-grid');
    if (!grid) return;

    const sortedProjects = PROJECTS.slice().sort(function (a, b) {
      return a.order - b.order;
    });

    Promise.all(
      sortedProjects.map(function (project) {
        return resolveVideo(project.file).then(function (resolvedUrl) {
          return { project: project, resolvedUrl: resolvedUrl };
        });
      })
    ).then(function (results) {
      const availableItems = results.filter(function (item) {
        return item.resolvedUrl !== null;
      });

      if (availableItems.length === 0) {
        updateFilterCountsAndVisibility();
        renderEmptyWorkNotice(grid);
        return;
      }

      let lazyObserver = null;
      if ('IntersectionObserver' in window) {
        lazyObserver = new IntersectionObserver(
          function (entries, observer) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                const vid = entry.target;
                if (typeof vid.loadCardMedia === 'function') {
                  vid.loadCardMedia();
                }
                observer.unobserve(vid);
              }
            });
          },
          { rootMargin: '250px 0px' }
        );
      }

      availableItems.forEach(function (item) {
        const card = createProjectCard(item.project, item.resolvedUrl, lazyObserver);
        grid.appendChild(card);
      });

      updateFilterCountsAndVisibility();
    });

    document.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyFilter(btn.dataset.filter);
      });
    });
  }

  /* ==========================================================================
     ACCESSIBLE LIGHTBOX PLAYER
     ========================================================================== */
  function openLightbox(project, resolvedUrl, triggerEl) {
    const lightbox = document.getElementById('video-lightbox');
    const videoEl = document.getElementById('lightbox-video');
    const badgeEl = document.getElementById('lightbox-badge');
    const metaEl = document.getElementById('lightbox-meta');
    const titleEl = document.getElementById('lightbox-title');
    const descEl = document.getElementById('lightbox-description');
    const disclaimerEl = document.getElementById('lightbox-disclaimer');
    const closeBtn = document.getElementById('lightbox-close');

    if (!lightbox || !videoEl) return;

    lastFocusedElement = triggerEl || document.activeElement;

    const category = getCategory(project.file);
    badgeEl.textContent = getBadgeLabel(project.file);
    badgeEl.className = 'badge' + (category === 'client' ? ' badge-client' : '');
    metaEl.textContent = [project.aspect, project.duration].filter(Boolean).join(' • ');
    titleEl.textContent = project.title;
    descEl.textContent = project.description;

    if (project.disclaimer) {
      disclaimerEl.textContent = project.disclaimer;
      disclaimerEl.hidden = false;
    } else {
      disclaimerEl.textContent = '';
      disclaimerEl.hidden = true;
    }

    if (project.realWidth && project.realHeight) {
      videoEl.style.aspectRatio = project.realWidth + ' / ' + project.realHeight;
    } else if (project.aspect) {
      videoEl.style.aspectRatio = project.aspect.replace(':', ' / ');
    } else {
      videoEl.style.removeProperty('aspect-ratio');
    }

    videoEl.src = resolvedUrl;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';

    if (closeBtn) closeBtn.focus();

    const playPromise = videoEl.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(function () {});
    }
  }

  function closeLightbox() {
    const lightbox = document.getElementById('video-lightbox');
    const videoEl = document.getElementById('lightbox-video');
    if (!lightbox || lightbox.hidden) return;

    if (videoEl) {
      videoEl.pause();
      videoEl.removeAttribute('src');
      videoEl.load();
    }

    lightbox.hidden = true;
    document.body.style.overflow = '';

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  function initLightbox() {
    const lightbox = document.getElementById('video-lightbox');
    const backdrop = document.getElementById('lightbox-backdrop');
    const closeBtn = document.getElementById('lightbox-close');
    if (!lightbox) return;

    if (backdrop) backdrop.addEventListener('click', closeLightbox);
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', function (e) {
      if (lightbox.hidden) return;

      if (e.key === 'Escape') {
        closeLightbox();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = Array.from(
          lightbox.querySelectorAll('button, [href], video[controls], [tabindex]:not([tabindex="-1"])')
        ).filter(function (el) {
          return !el.disabled && el.offsetParent !== null;
        });

        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* ==========================================================================
     CONTACT FORM & FALLBACK SEND PANEL (FIX 5)
     ========================================================================== */
  function buildMessageLines(nameVal, emailVal, typeVal, briefText) {
    return [
      'Hi Muhammad,',
      '',
      'Name/Brand: ' + nameVal,
      'Email: ' + emailVal,
      'Project type: ' + typeVal,
      'Brief and goal:',
      briefText,
      '',
      'Sent from the HookMedia.ai portfolio site (' + SITE_URL + ')'
    ];
  }

  function buildSafeEmailPayload(subject, nameVal, emailVal, typeVal, briefVal) {
    const maxEncodedLength = 1750;
    const notice = ' [shortened: use Copy the full message for the full text]';

    const fullLines = buildMessageLines(nameVal, emailVal, typeVal, briefVal);
    const fullRawBody = fullLines.join('\n');

    if (encodeURIComponent(subject + fullRawBody).length <= maxEncodedLength) {
      return {
        fullRawBody: fullRawBody,
        safeRawBody: fullRawBody
      };
    }

    let low = 0;
    let high = briefVal.length;
    let bestBrief = '';

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const candidateBrief = briefVal.slice(0, mid) + notice;
      const candidateBody = buildMessageLines(nameVal, emailVal, typeVal, candidateBrief).join('\n');
      if (encodeURIComponent(subject + candidateBody).length <= maxEncodedLength) {
        bestBrief = candidateBrief;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    const safeRawBody = buildMessageLines(nameVal, emailVal, typeVal, bestBrief || notice).join('\n');
    return {
      fullRawBody: fullRawBody,
      safeRawBody: safeRawBody
    };
  }

  function initContactForm() {
    const form = document.getElementById('enquiry-form');
    const channelCopyBtn = document.getElementById('channel-copy-email');
    if (channelCopyBtn) {
      channelCopyBtn.addEventListener('click', function () {
        copyTextToClipboard(EMAIL_ADDRESS).then(function (ok) {
          showCopiedFeedback(channelCopyBtn, ok);
        });
      });
    }

    if (!form) return;

    const nameInput = document.getElementById('field-name');
    const emailInput = document.getElementById('field-email');
    const typeSelect = document.getElementById('field-type');
    const briefInput = document.getElementById('field-brief');

    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorType = document.getElementById('error-type');
    const errorBrief = document.getElementById('error-brief');

    const sendPanel = document.getElementById('send-options-panel');
    const sendPanelHeading = document.getElementById('send-panel-heading');
    const btnGmail = document.getElementById('btn-send-gmail');
    const btnOutlook = document.getElementById('btn-send-outlook');
    const btnCopyMsg = document.getElementById('btn-copy-message');
    const btnCopyAddr = document.getElementById('btn-copy-address');
    const sendPreview = document.getElementById('send-preview');

    let latestFormattedMessage = '';

    function isValidEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameVal = nameInput.value.trim();
      const emailVal = emailInput.value.trim();
      const typeVal = typeSelect.value.trim();
      const briefVal = briefInput.value.trim();

      errorName.textContent = '';
      errorEmail.textContent = '';
      errorType.textContent = '';
      errorBrief.textContent = '';

      let hasError = false;

      if (!nameVal) {
        errorName.textContent = 'Please enter your name or brand.';
        hasError = true;
      }

      if (!emailVal || !isValidEmail(emailVal)) {
        errorEmail.textContent = 'Please enter a valid email address.';
        hasError = true;
      }

      if (!typeVal) {
        errorType.textContent = 'Please select a project type.';
        hasError = true;
      }

      if (briefVal.length < 10) {
        errorBrief.textContent = 'Please enter at least 10 characters describing your brief and goal.';
        hasError = true;
      }

      if (hasError) {
        if (errorName.textContent) nameInput.focus();
        else if (errorEmail.textContent) emailInput.focus();
        else if (errorType.textContent) typeSelect.focus();
        else if (errorBrief.textContent) briefInput.focus();
        return;
      }

      const subject = 'New AI Video Ad enquiry: ' + typeVal + ' from ' + nameVal;
      const payload = buildSafeEmailPayload(subject, nameVal, emailVal, typeVal, briefVal);

      latestFormattedMessage = 'Subject: ' + subject + '\n\n' + payload.fullRawBody;

      const encodedSubject = encodeURIComponent(subject);
      const encodedSafeBody = encodeURIComponent(payload.safeRawBody);

      const mailtoHref =
        'mailto:' +
        EMAIL_ADDRESS +
        '?subject=' +
        encodedSubject +
        '&body=' +
        encodedSafeBody;

      const gmailHref =
        'https://mail.google.com/mail/?view=cm&fs=1&to=' +
        encodeURIComponent(EMAIL_ADDRESS) +
        '&su=' +
        encodedSubject +
        '&body=' +
        encodedSafeBody;

      const outlookHref =
        'https://outlook.live.com/mail/0/deeplink/compose?to=' +
        encodeURIComponent(EMAIL_ADDRESS) +
        '&subject=' +
        encodedSubject +
        '&body=' +
        encodedSafeBody;

      if (btnGmail) btnGmail.href = gmailHref;
      if (btnOutlook) btnOutlook.href = outlookHref;
      if (sendPreview) sendPreview.value = latestFormattedMessage;

      const tempMailLink = document.createElement('a');
      tempMailLink.href = mailtoHref;
      tempMailLink.style.display = 'none';
      document.body.appendChild(tempMailLink);
      tempMailLink.click();
      document.body.removeChild(tempMailLink);

      if (sendPanel) {
        sendPanel.hidden = false;
        if (sendPanelHeading) {
          sendPanelHeading.focus();
        }
      }
    });

    if (btnCopyMsg) {
      btnCopyMsg.addEventListener('click', function () {
        copyTextToClipboard(latestFormattedMessage).then(function (ok) {
          showCopiedFeedback(btnCopyMsg, ok);
        });
      });
    }

    if (btnCopyAddr) {
      btnCopyAddr.addEventListener('click', function () {
        copyTextToClipboard(EMAIL_ADDRESS).then(function (ok) {
          showCopiedFeedback(btnCopyAddr, ok);
        });
      });
    }
  }

  /* ==========================================================================
     SCROLL REVEAL WITH 3-SECOND FAILSAFE (FIX 2)
     ========================================================================== */
  function revealAllSections() {
    document.querySelectorAll('.reveal').forEach(function (sec) {
      sec.classList.add('is-visible');
    });
  }

  function initScrollReveal() {
    const sections = document.querySelectorAll('.reveal');
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealAllSections();
      return;
    }

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    sections.forEach(function (sec) {
      observer.observe(sec);
    });

    // Failsafe: ensure all reveal sections become visible 3s after DOMContentLoaded
    window.setTimeout(revealAllSections, 3000);
  }

  document.addEventListener('DOMContentLoaded', function () {
    initStaticContent();
    initMobileNav();
    initHeroVideo();
    initFeaturedSection();
    initWorkGrid();
    initLightbox();
    initContactForm();
    initScrollReveal();
  });
})();

# Navigation.js Documentation

## Overview

`navigation.js` is a modular JavaScript class that handles all navigation functionality for the portfolio website. It encapsulates navigation logic in a clean, reusable, and maintainable way.

## Why This Approach?

### 1. **Separation of Concerns**
Instead of mixing navigation logic with other code, I created a dedicated `Navigation` class. This follows the Single Responsibility Principle - the class has one job: managing navigation.

**Why this matters:**
- Easy to find and fix navigation bugs
- Can test navigation independently
- Other developers can understand the code quickly

### 2. **Class-Based Architecture**

I used ES6 classes instead of functions because:

```javascript
class Navigation {
  constructor() {
    // Initialize all navigation elements
    this.nav = document.getElementById('navigation');
    this.navMenu = document.getElementById('navMenu');
    // ...
  }
}
```

**Benefits:**
- **State management**: All navigation-related data is stored in `this.*` properties
- **Method organization**: Related functions are grouped together
- **Reusability**: Can create multiple instances if needed (though we only need one)
- **Clear structure**: Easy to see what the class does at a glance

### 3. **Initialization Pattern**

```javascript
constructor() {
  // Get all DOM elements
  this.nav = document.getElementById('navigation');
  this.navMenu = document.getElementById('navMenu');
  this.navToggle = document.getElementById('navToggle');
  this.navLinks = document.querySelectorAll('.nav__link');
  
  this.init(); // Start everything
}
```

**Why this pattern:**
- **Single entry point**: All setup happens in `init()`
- **Cached references**: DOM elements are stored once, not queried repeatedly
- **Performance**: `querySelectorAll` runs once, not on every scroll/click

## How I Thought Through Each Feature

### Feature 1: Mobile Menu Toggle

**Problem:** On mobile devices, navigation links need to be hidden/shown.

**Solution:**
```javascript
toggleMenu() {
  this.navMenu?.classList.toggle('active');
  this.navToggle?.classList.toggle('active');
}
```

**Why this approach:**
- **CSS handles display**: JavaScript only toggles classes, CSS controls visibility
- **Optional chaining (`?.`)**: Prevents errors if elements don't exist
- **Simple toggle**: One method handles both open and close

**How I decided:**
1. Checked if mobile menu exists in HTML
2. Used CSS class `.active` to show/hide (standard pattern)
3. Added toggle to hamburger button for visual feedback

### Feature 2: Smooth Scrolling

**Problem:** Default anchor links jump instantly, which is jarring.

**Solution:**
```javascript
setupSmoothScroll() {
  this.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href.startsWith('#')) {
        e.preventDefault(); // Stop default jump
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const navHeight = this.nav?.offsetHeight || 0;
          const targetPosition = targetElement.offsetTop - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}
```

**Why this approach:**
- **`e.preventDefault()`**: Stops browser's default anchor behavior
- **Calculate position**: Get target element's position
- **Account for fixed nav**: Subtract navigation height so content isn't hidden
- **`behavior: 'smooth'`**: Native smooth scrolling (better than JavaScript animations)

**How I decided:**
1. Native `scrollTo` with `behavior: 'smooth'` is more performant than custom animations
2. Fixed navigation blocks content, so I subtract its height
3. Check if element exists before scrolling (defensive programming)

### Feature 3: Active Link Highlighting

**Problem:** Users should know which section they're viewing.

**Solution:**
```javascript
setupActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        this.setActiveLink(id);
      }
    });
  }, observerOptions);
  
  sections.forEach(section => observer.observe(section));
}
```

**Why IntersectionObserver:**
- **Performance**: Much better than listening to scroll events
- **Native API**: Built into browsers, no library needed
- **Efficient**: Only fires when sections enter/leave viewport

**Why these options:**
- **`rootMargin: '-20% 0px -70% 0px'`**: 
  - Section becomes active when it's 20% from top
  - Deactivates when 70% scrolled past
  - Creates a "sweet spot" for highlighting
- **`threshold: 0`**: Triggers as soon as any part enters viewport

**How I decided:**
1. Scroll event listeners fire too often (performance issue)
2. IntersectionObserver is modern, efficient solution
3. Tested different `rootMargin` values to find what feels natural

### Feature 4: Scroll Behavior (Shadow Effect)

**Problem:** Navigation should have visual feedback when scrolling.

**Solution:**
```javascript
setupScrollBehavior() {
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (this.nav) {
      if (currentScroll > 100) {
        this.nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      } else {
        this.nav.style.boxShadow = 'none';
      }
    }
    
    lastScroll = currentScroll;
  });
}
```

**Why this approach:**
- **Simple threshold**: Add shadow after 100px scroll
- **Visual feedback**: Makes navigation feel more "elevated"
- **Lightweight**: Only changes one CSS property

**Note:** This could be optimized with `requestAnimationFrame` for better performance, but for a portfolio site, this is sufficient.

## Code Patterns Used

### 1. **Optional Chaining (`?.`)**
```javascript
this.navMenu?.classList.toggle('active');
```
Prevents errors if element doesn't exist. Modern JavaScript feature.

### 2. **Event Delegation vs Direct Listeners**
I used direct listeners on each link:
```javascript
this.navLinks.forEach(link => {
  link.addEventListener('click', ...)
});
```

**Why not event delegation?**
- Small number of links (4-5)
- Each link needs different behavior (different hrefs)
- Direct listeners are clearer for this use case

### 3. **Defensive Programming**
```javascript
if (targetElement) {
  // Only scroll if element exists
}
```
Always check if elements exist before using them.

## Initialization Strategy

```javascript
// Initialize on DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
  });
} else {
  new Navigation();
}
```

**Why this pattern:**
- **Handles both cases**: Script might load before or after DOM
- **No race conditions**: Always waits for DOM if needed
- **Single instance**: Creates one Navigation object

## What Could Be Improved?

1. **Throttle scroll events**: Use `requestAnimationFrame` for scroll handler
2. **Add keyboard navigation**: Support arrow keys for accessibility
3. **Add focus management**: Better focus handling for screen readers
4. **Error handling**: Add try-catch for edge cases
5. **Configurable options**: Make thresholds configurable

## Why This Structure Works

1. **Modular**: Easy to add/remove features
2. **Testable**: Each method can be tested independently
3. **Maintainable**: Clear separation of concerns
4. **Performant**: Caches DOM elements, uses efficient APIs
5. **Readable**: Method names explain what they do

## Learning Points

- **Classes organize code better** than scattered functions
- **IntersectionObserver** is better than scroll listeners for visibility
- **Native browser APIs** (smooth scroll) are often better than custom code
- **Optional chaining** prevents many bugs
- **Caching DOM elements** improves performance

---

**Written for:** Portfolio project  
**Purpose:** Explain navigation architecture and decisions  
**Date:** 2024


# Accessibility (A11y) Best Practices

## ARIA Attributes

### For interactive elements:

```jsx
// Skip link for keyboard navigation
<a href="#main" className="sr-only">
  Skip to main content
</a>

// Form error messages
<input
  aria-describedby="email-error"
  type="email"
  {...props}
/>
<span id="email-error" role="alert">
  {error}
</span>

// Loading states
<button disabled aria-busy="true">
  Loading...
</button>

// Alerts
<div role="alert" className="alert alert-error">
  Error message
</div>

// Dialog/Modal
<div role="dialog" aria-labelledby="dialog-title" aria-hidden={!isOpen}>
  <h2 id="dialog-title">Confirm Action</h2>
</div>
```

## Keyboard Navigation

```jsx
// Ensure focusable elements are reachable
<button onClick={handleSubmit} onKeyPress={handleKeyPress}>
  Submit
</button>

// Tab order with tabindex
<nav>
  <a href="/" tabIndex={0}>Home</a>
  <a href="/about" tabIndex={0}>About</a>
</nav>

// Skip links
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to content
</a>
```

## Color Contrast

Minimum WCAG AA contrast ratios:
- Normal text: 4.5:1
- Large text (18pt+): 3:1

Use tools:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio Tool](https://contrast-ratio.com/)

## Semantic HTML

```jsx
// Good
<header>Header content</header>
<nav>Navigation</nav>
<main>Main content</main>
<article>Article content</article>
<aside>Sidebar</aside>
<footer>Footer</footer>

// Avoid
<div className="header">...</div>
<div className="nav">...</div>
```

## Testing for Accessibility

```bash
# Install accessibility testing tools
npm install -D @axe-core/react jest-axe

# Run accessibility tests
npm test -- --testNamePattern="accessibility"
```

Test file example:

```javascript
import { axe, toHaveNoViolations } from 'jest-axe'
import { render } from '@testing-library/react'

describe('Component Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<MyComponent />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Images without alt text | Add `alt="descriptive text"` |
| Missing form labels | Use `<label htmlFor="id">` |
| Poor color contrast | Increase contrast ratio |
| Keyboard traps | Ensure Tab key can exit elements |
| Missing page structure | Use semantic HTML (header, nav, main, footer) |
| Auto-playing media | Require user interaction |

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)
- [Axe DevTools Chrome Extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnkpklempeeolgndqj)

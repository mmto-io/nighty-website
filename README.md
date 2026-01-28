# Nighty Landing Page

A cozy, dark-themed landing page for the Nighty bedtime story app. Built with vanilla HTML, CSS, and JavaScript for maximum compatibility and easy deployment.

## 🌙 Features

- **Mobile-first responsive design** - Works beautifully on all devices
- **Dark, cozy theme** - Warm colors that evoke bedtime comfort
- **Smooth animations** - Subtle fade-ins and hover effects
- **SEO optimized** - Proper meta tags and semantic HTML
- **Accessibility friendly** - WCAG compliant with keyboard navigation
- **Zero dependencies** - No frameworks, no build process required

## 🎨 Design

- **Colors**: Dark background with sunset orange (#FF8A5C) and bedtime blue (#4A90B8) accents
- **Typography**: System fonts for fast loading and native feel
- **Aesthetic**: Inspired by Calm and Headspace apps - premium, not childish
- **Animations**: Respects `prefers-reduced-motion` setting

## 📁 Files

```
/Users/j/mmto/projects/nighty/website/
├── index.html          # Main landing page
├── style.css           # All styling (mobile-first)
├── script.js           # Interactive features & animations
├── og-image.svg        # Social media preview image
└── README.md           # This file
```

## 🚀 Deployment

### Quick Deploy
1. Upload all files to your web server
2. Point your domain to the directory
3. Update the formspree.io form action URL
4. Done!

### Custom Domain Setup
- Update `og:url` in `index.html` to your actual domain
- Replace `xplaceholder` in the formspree action with your real form ID

### Form Integration
Currently uses formspree.io placeholder. To activate:
1. Go to formspree.io and create a new form
2. Replace `https://formspree.io/f/xplaceholder` in `index.html` with your form URL
3. Test the form submission

## ⚙️ Customization

### Colors
Main color variables are defined in the CSS. Key colors:
- Sunset orange: `#FF8A5C` 
- Bedtime blue: `#4A90B8`
- Dark background: `#1a1a2e` to `#0f3460` gradient

### Content
- Hero tagline: Edit the `<h1>` in the hero section
- Steps: Modify the 3 steps in "How it works" section
- Value props: Update the 4 benefit cards
- Email copy: Customize the early access section text

### App Store Badge
Currently shows "Coming Soon". To update:
1. Replace the SVG in the hero section with actual App Store badge
2. Add proper link when app is available

## 🔧 Technical Notes

- **Favicon**: Uses emoji-based SVG favicon (🌙) for simplicity
- **Images**: All graphics are CSS/SVG based - no external images
- **Performance**: Minimal JavaScript, critical CSS inlined
- **Browser Support**: Works in all modern browsers (IE11+)

## 📱 Testing

Test the site on:
- [ ] Mobile (iOS Safari, Android Chrome)
- [ ] Tablet (iPad, Android)  
- [ ] Desktop (Chrome, Firefox, Safari, Edge)
- [ ] Form submission
- [ ] Dark mode preference
- [ ] Reduced motion preference

## 🎯 Next Steps

1. **Replace form placeholder** - Update formspree.io URL
2. **Add analytics** - Insert Google Analytics or similar
3. **A/B test headlines** - Try different hero taglines
4. **Add testimonials** - Include parent quotes when available
5. **Blog integration** - Add /blog section for content marketing
6. **Add app screenshots** - Include product images when app is ready

---

Built with ❤️ for bedtime stories and peaceful sleep.
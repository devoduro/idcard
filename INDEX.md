# 📑 Patient ID Card Generator - File Index

## 📂 Complete File Structure

```
/Applications/XAMPP/xamppfiles/htdocs/idcard/
├── 🌐 index.html          Main web application interface
├── ⚙️  app.js             Canvas rendering engine
├── 🖼️  front.png          Front card template (1125×675px)
├── 🔙 back.png           Back card template (1125×675px)
├── 📖 README.md          Technical documentation
├── 🚀 SETUP.md           Quick start guide
├── 💻 DEVELOPER.md       Developer reference
└── 📑 INDEX.md           This file
```

---

## 📄 Documentation Guide

### For End Users
→ **SETUP.md** - Quick start guide
- How to install and run
- Basic usage instructions
- Keyboard shortcuts
- Troubleshooting tips

### For Developers
→ **DEVELOPER.md** - Technical reference
- Architecture overview
- Configuration options
- Customization guide
- Debug checklist

### For Complete Info
→ **README.md** - Full documentation
- Feature list
- Template specifications
- Printing guide
- Browser compatibility
- Enhancement ideas

---

## 🎯 Quick Reference

### Access URL
```
http://localhost/idcard/
```

### Files by Purpose

| Purpose | File |
|---------|------|
| **View/Use App** | `index.html` |
| **Core Logic** | `app.js` |
| **Front Design** | `front.png` |
| **Back Design** | `back.png` |
| **Setup Instructions** | `SETUP.md` |
| **Development Info** | `DEVELOPER.md` |
| **Full Docs** | `README.md` |

---

## 💡 Common Tasks

### I want to...

**...start using the app**
→ Open `http://localhost/idcard/` in browser

**...understand how it works**
→ Read `DEVELOPER.md` - Architecture section

**...customize text positions**
→ Edit `app.js` - updateFrontCard() function

**...change template images**
→ Replace `front.png` and `back.png` (1125×675px PNG)

**...add new form fields**
→ Edit `index.html` for HTML, then `app.js` for canvas

**...troubleshoot issues**
→ Check `SETUP.md` - Troubleshooting section

**...modify fonts and colors**
→ Edit `app.js` - updateFrontCard() and updateBackCard()

**...debug problems**
→ See `DEVELOPER.md` - Debug Checklist

---

## 📊 Technical Specs

- **Template Resolution:** 1125 × 675 pixels
- **Template Format:** PNG with RGBA support
- **Frontend:** HTML5 + Tailwind CSS
- **Processing:** Canvas API (JavaScript)
- **Data Storage:** Browser local only
- **Print Output:** High-quality canvas rendering
- **Browser Support:** Chrome, Firefox, Safari, Edge

---

## 🔧 Key JavaScript Functions

```javascript
loadTemplateImages()        // Load front.png and back.png
updateCardPreview()         // Redraw both cards
updateFrontCard()           // Draw front with data
updateBackCard()            // Draw back with data
printCard()                 // Trigger print dialog
initializeCardFlip()        // Setup 3D animation
```

---

## 🎨 Form Field IDs

```html
id="patientID"     → Patient ID input
id="patientName"   → Patient Name input
id="gender"        → Gender dropdown
id="contact"       → Contact Number input
id="photo"         → Photo file input
```

---

## 🖨️ Print Features

- **Pages:** 1 (front + back combined)
- **Size:** Template size (1125×675px)
- **Quality:** Device pixel ratio optimized
- **Colors:** Full RGB support
- **Format:** Canvas to printer

---

## 🔐 Security Features

✅ No server communication
✅ No data tracking
✅ No cloud storage
✅ Browser-local only
✅ Direct printer connection

---

## 📈 File Sizes

| File | Size |
|------|------|
| index.html | 8.5 KB |
| app.js | 9.3 KB |
| front.png | 80 KB |
| back.png | 116 KB |
| README.md | 5.6 KB |
| SETUP.md | 4.7 KB |
| DEVELOPER.md | ~6 KB |
| **Total** | **~230 KB** |

---

## 🚀 Getting Started Checklist

- [ ] Start Apache in XAMPP
- [ ] Open http://localhost/idcard/
- [ ] Fill in patient information
- [ ] Upload a test photo
- [ ] Preview front and back (click card)
- [ ] Click "Print Card"
- [ ] Review print preview
- [ ] Send to printer

---

## 📞 Support Resources

| Issue Type | Resource |
|------------|----------|
| Setup problems | SETUP.md |
| How to use | index.html (in-app help) |
| Customization | DEVELOPER.md |
| Features | README.md |
| Troubleshooting | SETUP.md - Troubleshooting |

---

## 🔗 External URLs

- **Tailwind CSS:** https://cdn.tailwindcss.com
- **Canvas API Docs:** MDN Web Docs
- **Image Formats:** PNG recommended for templates

---

## ✨ What's Included

✅ Fully functional application
✅ Live preview with real-time updates
✅ 3D flip animation
✅ Photo upload support
✅ Print-ready output
✅ Responsive design
✅ Keyboard shortcuts
✅ Complete documentation
✅ Template-based design

---

## 🎯 Version Info

- **Version:** 1.0
- **Created:** November 17, 2025
- **Status:** Production Ready
- **License:** Free to use and modify

---

## 📝 Notes

- All files are in `/Applications/XAMPP/xamppfiles/htdocs/idcard/`
- Templates must be 1125×675px PNG images
- No external dependencies required (CDN for Tailwind CSS)
- Works offline after page loads

---

**Start here:** Open `http://localhost/idcard/` 🚀

For questions, check the appropriate documentation file above.

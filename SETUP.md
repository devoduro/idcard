# 🎫 Patient ID Card Generator - Quick Setup Guide

## ✅ What's Installed

Your Patient ID Card Generator is now ready to use! Here's what's included:

```
/Applications/XAMPP/xamppfiles/htdocs/idcard/
├── index.html      ← Main application (open this in browser)
├── app.js          ← Canvas rendering engine
├── front.png       ← Front card template (1125×675px)
├── back.png        ← Back card template (1125×675px)
├── README.md       ← Full documentation
└── SETUP.md        ← This file
```

## 🚀 Quick Start

### Step 1: Start XAMPP
- Open XAMPP Control Panel
- Click "Start" next to Apache

### Step 2: Open in Browser
```
http://localhost/idcard/
```

### Step 3: Fill Patient Info
- Patient ID (e.g., P-2024-0001)
- Patient Name
- Sex/Gender
- Contact Number
- Optional: Upload patient photo

### Step 4: Preview & Print
- Preview shows in real-time
- Click card to flip between front/back
- Click "🖨️ Print Card" to print

## 📋 Form Fields

| Field | Details |
|-------|---------|
| **Patient ID** | Unique identifier (up to 20 chars) |
| **Patient Name** | Full name (up to 50 chars) |
| **Sex/Gender** | Male / Female / Other |
| **Contact** | Phone number (up to 20 chars) |
| **Photo** | Optional - Square image recommended |

## 🎨 Front Card Layout

Your `front.png` template shows:
- Patient Name (28px, bold)
- Patient ID (18px, bold)
- Gender (16px)
- Contact (16px)
- Photo (top-right corner)

## 🔙 Back Card Layout

Your `back.png` template shows:
- Patient ID
- Contact Number
- Issue Date (auto-generated)
- Watermark text

## 💡 Key Features

✨ **Real-time Preview** - See changes as you type
🔄 **3D Flip** - Click card to rotate
📸 **Photo Support** - Upload patient photos
🖨️ **Print Ready** - Both sides on one page
⌨️ **Keyboard Shortcuts** - Ctrl+P to print, Space to flip

## 🔧 Customization

### Change Text Position
Edit `app.js`, find these lines:
```javascript
ctx.fillText(text, displayWidth * 0.05, displayHeight * 0.35);
//                                ↑                          ↑
//                          X position              Y position
```

### Change Font Size
```javascript
ctx.font = 'bold 28px Arial';
//                ↑
//            size in px
```

### Change Photo Position/Size
```javascript
const photoX = displayWidth * 0.7;      // 70% from left
const photoY = displayHeight * 0.15;    // 15% from top
const photoSize = displayHeight * 0.55; // 55% of height
```

## 📱 Browser Support

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🖨️ Printing Tips

1. **Use Color Printer** - For best visual results
2. **High-Quality Paper** - 250gsm card stock recommended
3. **No Margins** - Set printer margins to 0mm
4. **Both Sides** - Print shows front and back together
5. **Preview First** - Check print preview before printing

## 🐛 Troubleshooting

### "Canvas appears blank"
- Check if `front.png` and `back.png` are in the `/idcard/` folder
- Verify files exist: `ls -la /Applications/XAMPP/xamppfiles/htdocs/idcard/`

### "Text not visible"
- Check if template images have white/light areas for text
- Verify text colors contrast with background

### "Photo not showing"
- Use JPG or PNG format
- Ensure image is under 5MB
- Square images work best (1:1 ratio)

### "Print looks wrong"
- Check printer settings for margins and scale
- Try "Print as Image" if available
- Ensure both front and back canvases are visible

## 📁 File Locations

```
Front Template:  /Applications/XAMPP/xamppfiles/htdocs/idcard/front.png
Back Template:   /Applications/XAMPP/xamppfiles/htdocs/idcard/back.png
Main App:        http://localhost/idcard/
```

## 🔐 Security Notes

- All processing happens in your browser
- No data is sent to servers
- Photos are stored locally only
- Safe to print directly

## 📝 Next Steps

1. Test with sample data
2. Adjust text positioning if needed
3. Print a test card
4. Create patient database (optional)

## ❓ FAQ

**Q: Can I customize template images?**
A: Yes! Replace `front.png` and `back.png` with your own (1125×675px, PNG format)

**Q: Can I add more fields?**
A: Yes! Edit `app.js` to add new input fields and adjust canvas text

**Q: Can I export as PDF?**
A: Use "Print to PDF" from print dialog (Cmd+P or Ctrl+P)

**Q: Is there a database integration?**
A: Not included, but easy to add with backend

**Q: Can I bulk print cards?**
A: Currently one card at a time, but can be enhanced for batch processing

## 📞 Support

For issues:
1. Check browser console: F12 → Console tab
2. Verify all files exist in `/idcard/` folder
3. Clear browser cache: Ctrl+Shift+Delete
4. Restart Apache and browser

---

**Ready to start?** Open http://localhost/idcard/ in your browser! 🎉

# Cinematic Plant Art Website - Seabud Nursery

A beautiful, single-page cinematic plant-themed website featuring an elegant image slideshow and information panel. Built with pure HTML, CSS, and JavaScript, and deployed on Firebase Hosting.

## 🌿 Features

- **80/20 Split Layout**: Full-screen image slideshow (80%) with elegant information panel (20%)
- **Auto-Rotating Slideshow**: Smooth fade transitions between images every 6 seconds
- **Cinematic Design**: Dark, nature-inspired theme with glassmorphism effects
- **Calligraphy Typography**: Elegant Dancing Script and Playfair Display fonts
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Zero Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks required

## 📁 Project Structure

```
plant-website/
├── public/
│   ├── index.html          # Main HTML file
│   ├── style.css          # Stylesheet with cinematic theme
│   ├── script.js          # Slideshow functionality
│   └── images/            # Image assets
│       ├── image1.jpg
│       ├── image2.jpg
│       ├── image3.jpg
│       ├── image4.jpg
│       ├── image5.jpg
│       └── image6.jpg
├── firebase.json          # Firebase hosting configuration
├── .firebaserc            # Firebase project configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase CLI installed globally

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CR2509/Cinematic-Plant-Art-Website.git
cd Cinematic-Plant-Art-Website
```

2. Install Firebase CLI (if not already installed):
```bash
npm install -g firebase-tools
```

3. Login to Firebase:
```bash
firebase login
```

4. Initialize Firebase Hosting (if needed):
```bash
firebase init hosting
```
- Select "Use an existing project" or create a new one
- Set public directory as `public`
- Configure as single-page app: No (we handle routing in firebase.json)

## 🖼️ Adding Images

Replace the placeholder images in `public/images/` with your own:
- `image1.jpg` through `image6.jpg`
- Recommended dimensions: 1920x1080 or higher
- Format: JPG, PNG, or WebP

## 🎨 Customization

### Updating Information

Edit `public/index.html` to update:
- Nursery name
- Address
- Email
- Phone number

### Styling

Modify `public/style.css` to customize:
- Color scheme (CSS variables in `:root`)
- Font sizes
- Spacing and layout
- Animation timings

### Slideshow Settings

Edit `public/script.js` to adjust:
- Slide interval (currently 6000ms = 6 seconds)
- Transition effects

## 📦 Deployment

### Deploy to Firebase Hosting

```bash
firebase deploy --only hosting
```

After deployment, your site will be available at:
`https://your-project-id.web.app`

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, flexbox, and animations
- **JavaScript (ES6)**: Vanilla JS for slideshow functionality
- **Firebase Hosting**: Static site hosting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Fonts provided by [Google Fonts](https://fonts.google.com)
- Hosting by [Firebase](https://firebase.google.com)

---

Made with ❤️ for plant art enthusiasts

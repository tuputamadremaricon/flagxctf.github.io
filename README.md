<div align="center">
  <img src="https://i.postimg.cc/qB3jZYg2/image-2.png" alt="FlagX Logo" width="150"/>
  <h1>FlagX - The Ultimate CTF Social Hub & Platform</h1>
  <p>
    <strong>Where Hackers Connect, Compete, and Conquer.</strong>
  </p>
  <p>
    <a href="https://tuputamadremaricon.github.io/flagxctf.github.io/"><strong>Live FrontEnd Demo</strong></a>
    ·
    <a href="#features">Features</a>
    ·
    <a href="#tech-stack">Tech Stack</a>
    ·
    <a href="#getting-started">Getting Started</a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
    <img src="https://img.shields.io/github/stars/uputamadremaricon/flagxctf.github.io?style=social" alt="GitHub Stars">
  </p>
</div>

---

## 🚀 About FlagX

**FlagX** isn't just another platform; it's a dynamic, immersive social network and Capture The Flag (CTF) arena built for the cybersecurity community. Dive into a world where `hacker aesthetics` meet cutting-edge functionality, providing a unique space to learn, challenge yourself, and collaborate with like-minded individuals.

Our platform boasts a **stunning, responsive design** inspired by modern hacker interfaces, ensuring an engaging experience across all devices. With its signature **Dynamic Island** navigation, FlagX offers intuitive access to a rich set of features, making it a breeze to navigate through challenges, connect with peers, and track your progress.

<div align="center">
  <img src="https://i.postimg.cc/6QqhVbD2/IMG-2834.jpg" alt="FlagX Interface Screenshot" width="700"/>
  <p><i>FlagX in Action - A glimpse into our unique user experience.</i></p>
</div>

---

## ✨ Features

FlagX is packed with features designed to enhance your CTF journey and social interaction:

*   🎨 **Sleek Hacker-Themed UI:**
    *   **Responsive Design:** Looks and feels great on desktop, tablet, and mobile.
    *   **Dynamic Island Navigation:** A revolutionary and intuitive way to access core platform features like Challenges, Ranking, Labs, Profile, Notifications, and Teams. Expands smoothly to reveal content or provide quick actions.
    *   **Hacker Aesthetics:** Custom color schemes (`--hacker-bg`, `--hacker-text`, etc.), monospace fonts, and glowing effects create an immersive environment.
    *   **Animated Borders & Elements:** Subtle animations like `hackerBorderAnimation` add to the dynamic feel.
    *   **Customizable Scrollbars:** Even the smallest details are styled for consistency.

*   📝 **Social Feed & Broadcasting:**
    *   **"Broadcast" (What's Happening):** Share your thoughts, findings, or CTF progress.
    *   **Rich Media Attachments:** Post text, images, videos, and documents.
    *   **Interactive Posts:** Like, comment, and view detailed post interactions.
    *   **User Avatars & Profiles:** Basic user profiles with customizable elements (username, bio, avatar via Profile Settings).

*   💬 **Dynamic Island - Content Hub:**
    *   **Main Grid View:** Quick access to `Challenges`, `Ranking`, `Labs`, `Profile`, `Notifications`, and `Teams`.
    *   **Challenges List:** View active CTF challenges.
    *   **Global Rankings:** See how you stack up against other users.
    *   **Labs Access:** (Conceptual) Quick links to virtual lab environments.
    *   **User Profile Menu:**
        *   `./settings.sh`: Edit your profile settings (avatar, username, email, bio, password).
        *   `cat my_challenges.log`: View a log of your attempted/solved challenges.
        *   `ls -l /achievements`: Display your earned achievements.
        *   `sudo logout`: (Conceptual) Logout functionality.
    *   **System Alerts (Notifications):** Stay updated with platform notifications, challenge completions, security alerts, and messages.
    *   **Teams Leaderboard & Creation:** View team rankings and a (conceptual) way to create new teams.
    *   **Interactive Comments System:**
        *   Engage in discussions directly within the Dynamic Island.
        *   Supports text and media attachments in comments.
        *   Fullscreen mode for immersive commenting on mobile.

*   🏆 **CTF & Community Elements:**
    *   **Active Challenges Listing:** (UI representation for available challenges).
    *   **Global Ranking Display:** User rankings (can be expanded for team rankings).
    *   **Profile Sections:** Dedicated views for "My Challenges Log" and "My Achievements".

*   📱 **Mobile-First & Fullscreen Modes:**
    *   Dynamic Island content sections (Comments, Teams, Profile Settings, etc.) support a **fullscreen mode** on mobile devices for an uninterrupted experience.
    *   Carefully crafted media queries ensure optimal layout and usability across screen sizes.

*   🔧 **User Customization & Settings:**
    *   **Edit Profile:** Change username, email, bio, and avatar.
    *   **Password Management:** Securely update your password (UI representation).
    *   **Avatar Uploads:** Personalize your profile with a custom avatar.

*   💡 **Innovative UI Components:**
    *   **Stylish Cards:** For posts, challenges, and menu items with hover effects.
    *   **Custom Radio Buttons & Interactive Elements:** Uniquely styled form elements.
    *   **Attachment Previews:** For images, videos, and documents before posting.
    *   **Dynamic Input Fields:** Such as the "Broadcast" textarea and comment inputs that adapt to content.

*   ⚙️ **JavaScript Powered Interactivity:**
    *   Smooth transitions and animations for the Dynamic Island and its content.
    *   Client-side handling for post creation, likes, comments, and file uploads (mocked or full functionality).
    *   State management for UI elements (e.g., enabling/disabling post buttons).
    *   Dynamic content loading for comments, challenge logs, and achievements within the island.

---

## 🛠️ Tech Stack

FlagX is built primarily with front-end technologies, showcasing what's possible with modern web standards:

*   **HTML5:** Semantic and well-structured markup.
*   **CSS3:**
    *   Advanced styling with CSS Custom Properties (Variables) for theming.
    *   Complex layouts using CSS Grid.
    *   Keyframe animations for dynamic effects.
    *   Responsive design with Media Queries.
*   **JavaScript (Vanilla):**
    *   DOM manipulation for dynamic content and UI updates.
    *   Event handling for all user interactions.
    *   Client-side logic for features like the Dynamic Island, posting, comments, etc.
*   **(Optional but Implied for a Real-World App):**
    *   A backend framework (e.g., Node.js/Express, Python/Django/Flask, Ruby on Rails) would be needed for user authentication, data persistence, and real-time features.
    *   A database (e.g., PostgreSQL, MongoDB, MySQL).

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   A modern web browser (Chrome, Firefox, Edge, Safari recommended).
*   No complex build steps are required to view the front-end demo.

### Installation

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/tuputamadremaricon/flagxctf.github.io
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd flagxctf.github.io
    ```
3.  **Open `index.html`:**
    Simply open the `index.html` file in your web browser to view the application.

No compilation or build process is necessary for this front-end focused version.

---

## 🖼️ Visual Showcase (More Screenshots!)

<div align="center">
<table>
  <tr>
    <td><img src="https://i.postimg.cc/nrbYJFMB/IMG-2827.jpg" alt="Dynamic Island Collapsed" width="300"/></td>
    <td><img src="https://i.postimg.cc/Zn8PYGyg/IMG-2829.jpg" alt="Dynamic Island Expanded Grid" width="300"/></td>
  </tr>
  <tr>
    <td align="center"><i>Collapsed Dynamic Island</i></td>
    <td align="center"><i>Expanded Main Grid</i></td>
  </tr>
  <tr>
    <td><img src="https://i.postimg.cc/zDKFkgPj/IMG-2830.jpg" alt="Comments in Island" width="300"/></td>
    <td><img src="https://i.postimg.cc/dtFmNVbK/IMG-2831.jpg" alt="Profile Settings" width="300"/></td>
  </tr>
  <tr>
    <td align="center"><i>Interactive Comments</i></td>
    <td align="center"><i>Profile Settings</i></td>
  </tr>
    <tr>
    <td><img src="https://i.postimg.cc/X7gKR0WB/IMG-2832.jpg" alt="Main Feed with Post" width="300"/></td>
    <td><img src="https://i.postimg.cc/FHsbmnFW/IMG-2833.jpg" alt="Mobile Responsive View" width="300"/></td>
  </tr>
  <tr>
    <td align="center"><i>Engaging Social Feed</i></td>
    <td align="center"><i>Seamless Mobile Experience</i></td>
  </tr>
</table>
</div>

---

## 🛣️ Future Roadmap

While FlagX is already feature-rich, here are some exciting enhancements planned:

*   [ ] Full-fledged backend integration for user accounts, data persistence, and real-time updates.
*   [ ] Live CTF challenge environments and scoring.
*   [ ] Enhanced team collaboration tools (private chats, shared workspaces).
*   [ ] More sophisticated user profiles and achievement badges.
*   [ ] Real-time notifications.
*   [ ] Theming options (e.g., light mode, different hacker color palettes).
*   [ ] Integration with actual CTF platforms or APIs.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 🙏 Acknowledgements

*   Inspiration from modern UI/UX trends.
*   The vibrant cybersecurity and CTF community.
*   Anyone whose code was an inspiration or who provided feedback.

---

<div align="center">
  <strong>Happy Hacking with FlagX!</strong>
</div>

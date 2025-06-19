# Saarthi Development Setup (Standalone Node.js)

## 🚀 Quick Start

Since you're using a standalone Node.js installation, use these batch files to run npm commands:

### Available Commands:

1. **Install Dependencies:**
   ```bash
   .\npm-run.bat install --legacy-peer-deps
   ```

2. **Start Development Server:**
   ```bash
   .\start-app.bat
   ```
   Or manually:
   ```bash
   .\npm-run.bat start
   ```

3. **Build for Production:**
   ```bash
   .\build-app.bat
   ```
   Or manually:
   ```bash
   .\npm-run.bat run build
   ```

4. **Run Tests:**
   ```bash
   .\npm-run.bat test
   ```

## 🔧 Node.js Configuration

- **Node.js Location:** `C:\Users\Admin\Desktop\Node.js\`
- **Version:** v22.16.0
- **npm Version:** 10.9.2

## 📝 Notes

- Use `--legacy-peer-deps` flag when installing to resolve React version conflicts
- The warnings about deprecated packages are normal and don't affect functionality
- All three implemented features (Authentication, Theme Toggle, Language Translator) are ready to use

## 🌟 New Features Implemented

1. **🔐 User Authentication** - Firebase integration with login/logout
2. **🌙 Theme Toggle** - Dark/light mode with persistence  
3. **🌍 Language Translator** - Multi-language support with i18n

## 🔗 Useful Links

- **Firebase Setup:** See `FIREBASE_SETUP.md`
- **Features Documentation:** See `FEATURES_IMPLEMENTATION.md`
- **Code Review:** See `CODE_REVIEW.md`

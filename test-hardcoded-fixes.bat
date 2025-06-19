@echo off
echo ========================================
echo   SAARTHI HARDCODED TEXT FIXES TEST
echo ========================================
echo.
echo This script tests fixes for remaining hardcoded text
echo that was not translating properly.
echo.

echo FIXES APPLIED:
echo =============
echo [✓] Features list in "Why Saarthi?" section now uses translation
echo [✓] Subject names (Science, Mathematics, English, Hindi) now translate
echo [✓] "Subjects Taught" heading now translates
echo [✓] All feature descriptions now translate properly
echo.

echo STEP 1: Start the development server
echo ====================================
echo Running: npm start
echo.

echo.
echo STEP 2: SPECIFIC HARDCODED TEXT TESTING
echo ======================================
echo.
echo A. TEST FEATURE BOXES (Why Saarthi? section):
echo    1. Switch to Hindi language
echo    2. Check these features translate:
echo       - "Comprehensive Curriculum" → "व्यापक पाठ्यक्रम"
echo       - "Trusted by educators" → "शिक्षकों द्वारा भरोसेमंद"
echo       - "Immersive Learning Experience" → proper Hindi translation
echo       - "Communication and social learning" → proper Hindi translation
echo    3. Switch to Marathi and verify same features translate
echo.
echo B. TEST SUBJECT CARDS:
echo    1. Look for "Subjects Taught" heading
echo    2. Switch languages and verify it translates:
echo       - English: "Subjects Taught"
echo       - Hindi: "पढ़ाए गए विषय"
echo       - Marathi: "शिकवलेले विषय"
echo    3. Check subject names translate:
echo       - Science, Mathematics, English, Hindi
echo.
echo C. VERIFY NO MIXED CONTENT:
echo    1. In Hindi mode, NO English text should appear
echo    2. In Marathi mode, NO English text should appear
echo    3. Feature descriptions should be fully translated
echo.
echo EXPECTED RESULTS:
echo ================
echo ✓ Feature boxes completely translate (no mixed English/Hindi)
echo ✓ "Subjects Taught" heading translates
echo ✓ All subject names translate (including "Hindi" subject)
echo ✓ No hardcoded English text visible in other languages
echo ✓ Feature descriptions fully translated
echo.
echo BEFORE/AFTER:
echo ============
echo BEFORE: Mixed content like "शिक्षकों द्वारा भरोसेमंद" with "Immersive Learning Experience"
echo AFTER: All content in selected language - "इमर्सिव लर्निंग एक्सपीरियन्स"
echo.
echo Press any key to start testing the hardcoded text fixes...
pause > nul

"C:\Users\Admin\Desktop\Node.js\npm.cmd" start

# Firebase Setup Instructions for Saarthi Local Development

## Prerequisites
1. Install Node.js (version 14 or higher) from https://nodejs.org/
2. Install npm (comes with Node.js)
3. Have a Google account for Firebase

## Step 1: Create Firebase Project

1. Go to https://console.firebase.google.com/
2. Click "Add project" or "Create a project"
3. Enter project name: `saarthi-local-dev` (or your preferred name)
4. Optional: Enable Google Analytics (recommended for production)
5. Click "Create project"

## Step 2: Add Web App to Firebase Project

1. In Firebase Console, click the web icon (`</>`) to add a web app
2. Register app with nickname: "Saarthi Local Development"
3. Don't check "Set up Firebase Hosting" for now
4. Click "Register app"
5. **IMPORTANT**: Copy the firebaseConfig object - you'll need these values

## Step 3: Enable Required Services

### Authentication
1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Click on "Email/Password"
5. Enable "Email/Password" provider
6. Save

### Analytics (Optional)
- Should already be enabled if you chose it during project creation

## Step 4: Configure Environment Variables

1. Your `.env` file should already be configured with your Firebase settings
2. Verify that your `.env` file contains all required variables:

```
REACT_APP_FIREBASE_API_KEY=your_actual_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Step 5: Install Dependencies and Run

```bash
# Navigate to project directory
cd "c:\Users\Admin\Desktop\Saarthi"

# Install dependencies
npm install

# Start development server
npm start
```

## Step 6: Test Firebase Connection

1. Open your browser to http://localhost:3000
2. Try creating a new account
3. Try signing in with the account you created
4. Check browser console for any Firebase-related errors

## Troubleshooting

### Common Issues:

1. **"Missing required Firebase environment variables"**
   - Check that your .env file exists and has all required variables
   - Restart your development server after adding .env file

2. **"Firebase configuration error"**
   - Verify all values in .env match your Firebase project settings
   - Check for extra spaces or quotes in environment variable values

3. **Authentication errors**
   - Ensure Email/Password authentication is enabled in Firebase Console
   - Check that your domain is authorized (localhost should work by default)

### Firebase Console Locations:
- **Project Settings**: Click gear icon > Project settings
- **Authentication**: Left sidebar > Authentication
- **Analytics**: Left sidebar > Analytics

## Security Notes

- Never commit your .env file to version control
- The .env file is already added to .gitignore
- For production, use environment variables in your hosting platform
- Consider using Firebase Security Rules for additional protection

## Additional Features You Can Add Later

1. **Firebase Firestore**: For storing user data and course progress
2. **Firebase Storage**: For uploading and storing course materials
3. **Firebase Functions**: For server-side logic
4. **Firebase Hosting**: For deploying your app

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify your Firebase project settings
3. Ensure all environment variables are correctly set
4. Check Firebase documentation: https://firebase.google.com/docs

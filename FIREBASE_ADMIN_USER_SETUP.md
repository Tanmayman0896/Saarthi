# HOW TO CREATE ADMIN USER IN FIREBASE

## Method 1: Using Firebase Console (Recommended)

### **Step-by-Step Instructions:**

1. **Open Firebase Console**
   - Go to [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Sign in with your Google account

2. **Select Your Project**
   - Click on your "saarthi-6d454" project from the project list

3. **Navigate to Authentication**
   - In the left sidebar, click on "Authentication"
   - Click on the "Users" tab

4. **Add New User**
   - Click the "Add user" button
   - Fill in the details:
     - **Email:** `admin@saarthi.com`
     - **Password:** `SaarthiAdmin@2025`
     - **User UID:** (leave blank, Firebase will generate)

5. **Create User**
   - Click "Add user" to create the admin account
   - The user will appear in your users list

6. **Verify User Creation**
   - You should see the new user with email `admin@saarthi.com` in the users list
   - The user will have a unique UID assigned by Firebase

## Method 2: Using Your Application's Signup

### **Alternative Method:**

1. **Temporarily Enable Public Signup** (if disabled)
   - Make sure your login page allows new user registration

2. **Register Admin User**
   - Go to your application's login page
   - Use the signup/register option
   - Enter:
     - **Email:** `admin@saarthi.com`
     - **Password:** `SaarthiAdmin@2025`
     - **Display Name:** `Admin User` (optional)

3. **Complete Registration**
   - The user will be automatically created in Firebase Authentication
   - You can then disable public signup if needed

## Method 3: Using Firebase Admin SDK (Advanced)

If you want to create the user programmatically, you can use the Firebase Admin SDK:

```javascript
// This would be in a Node.js environment with Firebase Admin SDK
const admin = require('firebase-admin');

async function createAdminUser() {
  try {
    const user = await admin.auth().createUser({
      email: 'admin@saarthi.com',
      password: 'SaarthiAdmin@2025',
      displayName: 'Admin User',
    });
    console.log('Successfully created admin user:', user.uid);
  } catch (error) {
    console.log('Error creating user:', error);
  }
}
```

## Verification Steps

### **After creating the admin user, verify it works:**

1. **Test Login**
   - Go to your application: `http://localhost:3000`
   - Login with:
     - Email: `admin@saarthi.com`
     - Password: `SaarthiAdmin@2025`

2. **Check Admin Access**
   - After login, look for "Admin Panel" in the profile dropdown
   - Click it or navigate to `http://localhost:3000/admin`
   - You should see the admin dashboard

3. **Verify in Firebase Console**
   - Go back to Firebase Console > Authentication > Users
   - You should see the admin user listed
   - Note the UID for reference

## Security Notes

### **Important Security Considerations:**

1. **Strong Password**
   - The current password `SaarthiAdmin@2025` is reasonably strong
   - Consider changing it to something more secure for production

2. **Email Verification**
   - You may want to verify the admin email address
   - This can be done in Firebase Console under the user details

3. **Custom Claims (Future Enhancement)**
   - For production, consider using Firebase custom claims
   - This allows for more sophisticated role-based access control

## Troubleshooting

### **Common Issues:**

1. **"Email already exists" error**
   - Check if the email is already registered
   - Use a different email or delete the existing user

2. **"Weak password" error**
   - Firebase requires passwords to be at least 6 characters
   - Current password meets this requirement

3. **Admin panel not accessible**
   - Verify the email exactly matches: `admin@saarthi.com`
   - Check that the user is successfully logged in
   - Verify the environment variable `REACT_APP_ADMIN_EMAIL` matches

## Firebase Authentication Settings

### **Recommended Settings:**

1. **Sign-in Methods**
   - Enable "Email/Password" provider
   - Disable other providers unless needed

2. **Settings**
   - Consider enabling email verification for security
   - Set up password policy if needed

3. **Templates**
   - Customize email templates if using email verification

## Next Steps

After creating the admin user:

1. **Test the admin panel thoroughly**
2. **Document the admin credentials securely**
3. **Consider implementing additional admin features**
4. **Set up proper backup and recovery procedures**

The admin user will now be able to access the admin panel and manage the Saarthi application!

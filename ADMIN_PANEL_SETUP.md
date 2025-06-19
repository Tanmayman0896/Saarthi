# SAARTHI ADMIN PANEL SETUP

## Admin Credentials

The admin panel is now protected with specific email and password credentials stored in environment variables.

### **Admin Login Details:**
- **Email:** `admin@saarthi.com`
- **Password:** `SaarthiAdmin@2025`

### **How to Access Admin Panel:**

1. **Login to the application** using the admin credentials above
2. **Navigate to:** `http://localhost:3000/admin` or click "Admin Panel" in the profile dropdown
3. **Only users with the exact admin email** can access this page

## Features

### **1. Protected Route**
- The `/admin` route is protected by `adminOnly={true}` in `ProtectedRoute`
- Non-admin users are automatically redirected to `/home`
- Admin check is done by comparing `currentUser.email` with `process.env.REACT_APP_ADMIN_EMAIL`

### **2. Admin Panel Dashboard**
- **Statistics Cards:** Total Users, Active Courses, Total Lectures
- **Navigation Tabs:** Dashboard, Users, Courses
- **Theme Support:** Works with both light and dark modes
- **Translation Support:** All text translates based on language selection

### **3. Header Integration**
- Admin users see an "Admin Panel" link in their profile dropdown
- Non-admin users don't see this option
- Supports voice navigation and translation

## Files Modified

### **1. Environment Variables**
- **`.env`** - Added admin credentials
- **`.env.example`** - Added template for admin credentials

### **2. Components**
- **`src/components/ProtectedRoute.js`** - Added admin-only route protection
- **`src/MyPages/AdminPanel.js`** - Created admin dashboard
- **`src/MyComponents/Header.js`** - Added admin panel link for admin users
- **`src/App.js`** - Added `/admin` route

### **3. Translations**
- **`src/i18n.js`** - Added "admin" translation key for all languages

## Security

### **Current Security Measures:**
- Admin email is stored in environment variables
- Admin password is stored in environment variables (for reference)
- Route protection prevents unauthorized access
- Only authenticated users with matching email can access admin panel

### **Recommended Security Enhancements (Future):**
- Use Firebase custom claims for role-based access
- Store admin roles in Firestore database
- Implement proper admin user management
- Add audit logging for admin actions
- Use encrypted environment variables in production

## Environment Variables

Add these to your `.env` file:

```env
# Admin Credentials
REACT_APP_ADMIN_EMAIL=admin@saarthi.com
REACT_APP_ADMIN_PASSWORD=SaarthiAdmin@2025
```

## Usage

1. **Create Admin User in Firebase:**
   - Go to Firebase Console > Authentication
   - Create a new user with email: `admin@saarthi.com`
   - Set password: `SaarthiAdmin@2025`

2. **Login as Admin:**
   - Use the login page with admin credentials
   - You'll see "Admin Panel" in the profile dropdown

3. **Access Admin Features:**
   - Dashboard with statistics
   - User management (placeholder)
   - Course management (placeholder)

## Future Enhancements

- **User Management:** View, edit, and manage user accounts
- **Course Management:** Add, edit, and manage courses
- **Analytics:** Detailed usage statistics and reports
- **Settings:** Site configuration and settings
- **Content Management:** Manage static content and translations
- **Notifications:** Send announcements to users

## Testing

To test the admin panel:

1. Start the application: `npm start`
2. Login with admin credentials
3. Check that admin panel link appears in profile dropdown
4. Navigate to `/admin` and verify access
5. Test with non-admin user to ensure protection works

## Note

The current implementation uses a simple email check for admin access. For production use, consider implementing proper role-based access control with Firebase custom claims or a database-driven role system.

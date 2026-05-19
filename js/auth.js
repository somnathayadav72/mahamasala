/**
 * Satyasee Auth Module
 * Simple session-based authentication for the showcase.
 * Credentials: admin@satyasee.com / 12345
 */

const Auth = (() => {
    const SESSION_KEY = 'satyasee_auth';
    const VALID_EMAIL = 'admin@satyasee.com';
    const VALID_PASSWORD = '12345';
    const LOGIN_PAGE = 'login.html';

    // Pages that don't require authentication
    const PUBLIC_PAGES = ['login.html'];

    /**
     * Check if user is currently authenticated
     */
    function isAuthenticated() {
        const session = sessionStorage.getItem(SESSION_KEY);
        if (!session) return false;
        try {
            const data = JSON.parse(session);
            // Session expires after 2 hours
            if (Date.now() - data.timestamp > 2 * 60 * 60 * 1000) {
                logout();
                return false;
            }
            return data.authenticated === true;
        } catch {
            return false;
        }
    }

    /**
     * Attempt login with credentials
     * Returns { success: boolean, message: string }
     */
    function login(email, password) {
        if (!email || !password) {
            return { success: false, message: 'Please fill in all fields.' };
        }

        if (email.trim().toLowerCase() !== VALID_EMAIL) {
            return { success: false, message: 'Invalid email address.' };
        }

        if (password !== VALID_PASSWORD) {
            return { success: false, message: 'Incorrect password.' };
        }

        // Store session
        sessionStorage.setItem(SESSION_KEY, JSON.stringify({
            authenticated: true,
            email: email.trim().toLowerCase(),
            timestamp: Date.now()
        }));

        return { success: true, message: 'Login successful!' };
    }

    /**
     * Log out and clear session
     */
    function logout() {
        sessionStorage.removeItem(SESSION_KEY);
    }

    /**
     * Get current user info
     */
    function getUser() {
        const session = sessionStorage.getItem(SESSION_KEY);
        if (!session) return null;
        try {
            const data = JSON.parse(session);
            return { email: data.email };
        } catch {
            return null;
        }
    }

    /**
     * Get current page filename
     */
    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        return page;
    }

    /**
     * Route guard — call on every protected page
     * Redirects to login if not authenticated
     */
    function guard() {
        const currentPage = getCurrentPage();

        // Don't guard public pages
        if (PUBLIC_PAGES.includes(currentPage)) return;

        // If not authenticated, redirect to login
        if (!isAuthenticated()) {
            // Store intended destination so we can redirect after login
            sessionStorage.setItem('satyasee_redirect', currentPage);
            window.location.href = LOGIN_PAGE;
        }
    }

    /**
     * Get the redirect target after login (or default to index)
     */
    function getRedirectTarget() {
        const target = sessionStorage.getItem('satyasee_redirect');
        sessionStorage.removeItem('satyasee_redirect');
        return target || 'index.html';
    }

    /**
     * If user is already logged in and visits login page, redirect to home
     */
    function redirectIfAuthenticated() {
        if (isAuthenticated()) {
            window.location.href = 'index.html';
        }
    }

    return {
        isAuthenticated,
        login,
        logout,
        getUser,
        guard,
        getRedirectTarget,
        redirectIfAuthenticated
    };
})();

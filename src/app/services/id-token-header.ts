import { getAuth } from 'firebase/auth';

/**
 * `Authorization: Bearer <ID token>` for raw fetch() calls to the TODD
 * backend, which skip core/interceptors/id-token.interceptor.ts. The
 * backend's own-workspace guard verifies it. Waits (capped) for Firebase to
 * restore the session like the interceptor does; signed out, it returns {}.
 */
export async function idTokenHeader (): Promise<Record<string, string>> {
  if ( typeof window === 'undefined' ) return {};
  try {
    const auth = getAuth();
    await Promise.race( [auth.authStateReady(), new Promise( ( resolve ) => setTimeout( resolve, 3000 ) )] );
    const token = auth.currentUser ? await auth.currentUser.getIdToken() : '';
    return token ? { Authorization: `Bearer ${token}` } : {};
  } catch {
    return {};
  }
}

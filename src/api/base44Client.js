import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68af4e9666b376d04dd9de12", 
  requiresAuth: true // Ensure authentication is required for all operations
});

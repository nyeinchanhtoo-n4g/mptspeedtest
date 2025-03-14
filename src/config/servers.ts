export const SERVER_CONFIG = {
  name: 'Local Network Test',
  location: 'Myanmar',
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  endpoints: {
    download: '/api/speedtest/download',
    upload: '/api/speedtest/upload',
    ping: '/api/speedtest/ping',
  },
};

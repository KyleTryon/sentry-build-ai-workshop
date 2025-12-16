import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: 'https://e6b56239db5013f044800a2d40e72179@o4509194194386944.ingest.us.sentry.io/4510546004934656',
  enableLogs: true,
  debug: true,
  tracesSampleRate: 1.0,
});
import * as Sentry from '@sentry/react';
import { useEffect } from 'react';
import {
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes,
} from 'react-router-dom';

Sentry.init({
  dsn: 'https://eac83900c0b60a0ef48ccc3589b25cbc@o4509194194386944.ingest.us.sentry.io/4510545942740992',
  sendDefaultPii: true,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
    Sentry.reactRouterV7BrowserTracingIntegration({
      useEffect: useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes,
    }),
  ],
  enableLogs: true,
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost:3001'],
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
});
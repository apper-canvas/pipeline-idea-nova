import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { getRouteConfig } from './route.utils';
import Root from '@/layouts/Root';

// Lazy load all page components
const Dashboard = lazy(() => import('@/components/pages/Dashboard'));
const Contacts = lazy(() => import('@/components/pages/Contacts'));
const Companies = lazy(() => import('@/components/pages/Companies'));
const Pipeline = lazy(() => import('@/components/pages/Pipeline'));
const Deals = lazy(() => import('@/components/pages/Deals'));
const Quotes = lazy(() => import('@/components/pages/Quotes'));
const SalesOrders = lazy(() => import('@/components/pages/SalesOrders'));
const Activities = lazy(() => import('@/components/pages/Activities'));
const Login = lazy(() => import('@/components/pages/Login'));
const Signup = lazy(() => import('@/components/pages/Signup'));
const Callback = lazy(() => import('@/components/pages/Callback'));
const ErrorPage = lazy(() => import('@/components/pages/ErrorPage'));
const PromptPassword = lazy(() => import('@/components/pages/PromptPassword'));
const ResetPassword = lazy(() => import('@/components/pages/ResetPassword'));
const NotFound = lazy(() => import('@/components/pages/NotFound'));

// Helper to create route with access config
const createRoute = ({
  path,
  index,
  element,
  access,
  children,
  ...meta
}) => {
  // Get config for this route
  let configPath;
  if (index) {
    configPath = "/";
  } else {
    configPath = path.startsWith('/') ? path : `/${path}`;
  }

  const config = getRouteConfig(configPath);
  const finalAccess = access || config?.allow;

  const route = {
    ...(index ? { index: true } : { path }),
    element: element ? <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="text-center space-y-4">
      <svg className="animate-spin h-12 w-12 text-blue-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    </div>
  </div>}>{element}</Suspense> : element,
    handle: {
      access: finalAccess,
      ...meta,
    },
  };

  if (children && children.length > 0) {
    route.children = children;
  }

  return route;
};

// Create router configuration
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      // Public routes (authentication pages)
      createRoute({
        path: 'login',
        element: <Login />,
        title: 'Login'
      }),
      createRoute({
        path: 'signup',
        element: <Signup />,
        title: 'Sign Up'
      }),
      createRoute({
        path: 'callback',
        element: <Callback />,
        title: 'Callback'
      }),
      createRoute({
        path: 'error',
        element: <ErrorPage />,
        title: 'Error'
      }),
      createRoute({
        path: 'prompt-password/:appId/:emailAddress/:provider',
        element: <PromptPassword />,
        title: 'Set Password'
      }),
      createRoute({
        path: 'reset-password/:appId/:fields',
        element: <ResetPassword />,
        title: 'Reset Password'
      }),

      // Protected routes (main application)
      createRoute({
        index: true,
        element: <Dashboard />,
        title: 'Dashboard'
      }),
      createRoute({
        path: 'contacts',
        element: <Contacts />,
        title: 'Contacts'
      }),
      createRoute({
        path: 'companies',
        element: <Companies />,
        title: 'Companies'
      }),
      createRoute({
        path: 'pipeline',
        element: <Pipeline />,
        title: 'Pipeline'
      }),
      createRoute({
        path: 'deals',
        element: <Deals />,
        title: 'Deals'
      }),
      createRoute({
        path: 'quotes',
        element: <Quotes />,
        title: 'Quotes'
      }),
      createRoute({
        path: 'sales-orders',
        element: <SalesOrders />,
        title: 'Sales Orders'
      }),
      createRoute({
        path: 'activities',
        element: <Activities />,
        title: 'Activities'
      }),

      // Catch-all for 404
      createRoute({
        path: '*',
        element: <NotFound />,
        title: 'Not Found'
      })
    ]
  }
]);
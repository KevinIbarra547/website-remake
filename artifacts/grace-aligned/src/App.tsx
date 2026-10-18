import { type ReactNode, useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ClerkProvider, SignIn, SignUp, useAuth, useClerk } from '@clerk/react';
import { publishableKeyFromHost } from '@clerk/react/internal';
import { shadcn } from '@clerk/themes';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import AdminInbox from '@/pages/admin';
import { SiteShell } from '@/components/site-shell';
import About from '@/pages/about';
import Contact from '@/pages/contact';
import Home from '@/pages/home';
import Offerings from '@/pages/offerings';
import Shop from '@/pages/shop';
import { Redirect } from 'wouter';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
const clerkPubKey = publishableKeyFromHost(
  window.location.hostname,
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
);
const clerkProxyUrl = import.meta.env.VITE_CLERK_PROXY_URL;

function stripBase(path: string) {
  return basePath && path.startsWith(basePath)
    ? path.slice(basePath.length) || '/'
    : path;
}

const clerkAppearance = {
  theme: shadcn,
  cssLayerName: 'clerk',
  options: {
    logoPlacement: 'inside' as const,
    logoLinkUrl: basePath || '/',
    logoImageUrl: `${window.location.origin}${basePath}/logo.svg`,
  },
  variables: {
    colorPrimary: '#d9b970',
    colorForeground: '#f3efe5',
    colorMutedForeground: '#b7b1a5',
    colorDanger: '#f87171',
    colorBackground: '#18191d',
    colorInput: '#111216',
    colorInputForeground: '#f3efe5',
    colorNeutral: '#5f553f',
    fontFamily: 'Georgia, serif',
    borderRadius: '0.35rem',
  },
  elements: {
    rootBox: 'w-full flex justify-center',
    cardBox: 'bg-[#18191d] rounded-xl w-[440px] max-w-full overflow-hidden',
    card: '!shadow-none !border-0 !bg-transparent',
    footer: '!shadow-none !border-0 !bg-transparent',
    headerTitle: 'text-[#f3efe5]',
    headerSubtitle: 'text-[#b7b1a5]',
    socialButtonsBlockButtonText: 'text-[#f3efe5]',
    formFieldLabel: 'text-[#d9b970]',
    footerActionLink: 'text-[#d9b970]',
    footerActionText: 'text-[#b7b1a5]',
    dividerText: 'text-[#b7b1a5]',
    formButtonPrimary: 'bg-[#d9b970] text-[#171719]',
    formFieldInput: 'bg-[#111216] text-[#f3efe5]',
  },
};

function SignInPage() {
  return (
    <div className="auth-page">
      <SignIn routing="path" path={`${basePath}/sign-in`} signUpUrl={`${basePath}/sign-up`} />
    </div>
  );
}

function SignUpPage() {
  return (
    <div className="auth-page">
      <SignUp routing="path" path={`${basePath}/sign-up`} signInUrl={`${basePath}/sign-in`} />
    </div>
  );
}

function AdminRoute() {
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) return <p className="admin-state">Checking sign-in…</p>;
  if (!isSignedIn) return <Redirect to="/sign-in" />;
  return <AdminInbox />;
}

function ClerkCacheInvalidator() {
  const { addListener } = useClerk();
  const previousUser = useRef<string | null | undefined>(undefined);
  useEffect(() => addListener(({ user }) => {
    const userId = user?.id ?? null;
    if (previousUser.current !== undefined && previousUser.current !== userId) {
      queryClient.clear();
    }
    previousUser.current = userId;
  }), [addListener]);
  return null;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <SiteShell>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/shop.html" component={Shop} />
          <Route path="/offerings.html" component={Offerings} />
          <Route path="/about.html" component={About} />
          <Route path="/contact.html" component={Contact} />
          <Route path="/admin.html" component={AdminRoute} />
          <Route path="/sign-in/*?" component={SignInPage} />
          <Route path="/sign-up/*?" component={SignUpPage} />
          <Route component={NotFound} />
        </Switch>
      </SiteShell>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <WouterRouter base={basePath}>
      <ClerkProviderWithRoutes />
    </WouterRouter>
  );
}

function ClerkProviderWithRoutes() {
  const [, setLocation] = useLocation();
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      proxyUrl={clerkProxyUrl}
      appearance={clerkAppearance}
      signInUrl={`${basePath}/sign-in`}
      signUpUrl={`${basePath}/sign-up`}
      routerPush={(to) => setLocation(stripBase(to))}
      routerReplace={(to) => setLocation(stripBase(to), { replace: true })}
    >
      <QueryClientProvider client={queryClient}>
        <ClerkCacheInvalidator />
        <TooltipProvider>
          <Router />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

export default App;

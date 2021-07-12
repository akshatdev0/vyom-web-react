import Alternative from 'views/pro/pages/dashboards/Alternative.js';
import Buttons from 'views/pro/pages/components/Buttons.js';
import Calendar from 'views/pro/pages/Calendar.js';
import Cards from 'views/pro/pages/components/Cards.js';
import Charts from 'views/pro/pages/Charts.js';
import Components from 'views/pro/pages/forms/Components.js';
import Dashboard from 'views/pro/pages/dashboards/Dashboard.js';
import Elements from 'views/pro/pages/forms/Elements.js';
import Google from 'views/pro/pages/maps/Google.js';
import Grid from 'views/pro/pages/components/Grid.js';
import Icons from 'views/pro/pages/components/Icons.js';
import Lock from 'views/pro/pages/examples/Lock.js';
import Login from 'views/pro/pages/examples/Login.js';
import Notifications from 'views/pro/pages/components/Notifications.js';
import Pricing from 'views/pro/pages/examples/Pricing.js';
import Profile from 'views/pro/pages/examples/Profile.js';
import ReactBSTables from 'views/pro/pages/tables/ReactBSTables.js';
import Register from 'views/pro/pages/examples/Register.js';
import Sortable from 'views/pro/pages/tables/Sortable.js';
import Tables from 'views/pro/pages/tables/Tables.js';
import Timeline from 'views/pro/pages/examples/Timeline.js';
import Typography from 'views/pro/pages/components/Typography.js';
import Validation from 'views/pro/pages/forms/Validation.js';
import Vector from 'views/pro/pages/maps/Vector.js';
import Widgets from 'views/pro/pages/Widgets.js';
import { Layouts } from 'layouts';

const routes = {
  dashboard: {
    parts: 'dashboard',
    component: Dashboard,
    layouts: [Layouts.PRO],
  },
  alternativeDashboard: {
    parts: 'alternative-dashboard',
    component: Alternative,
    layouts: [Layouts.PRO],
  },
  pricing: {
    parts: 'pricing',
    component: Pricing,
    layouts: [Layouts.PRO],
  },
  login: {
    parts: 'login',
    component: Login,
    layouts: [Layouts.PRO],
  },
  register: {
    parts: 'register',
    component: Register,
    layouts: [Layouts.PRO],
  },
  lock: {
    parts: 'lock',
    component: Lock,
    layouts: [Layouts.PRO],
  },
  timeline: {
    parts: 'timeline',
    component: Timeline,
    layouts: [Layouts.PRO],
  },
  profile: {
    parts: 'profile',
    component: Profile,
    layouts: [Layouts.PRO],
  },
  buttons: {
    parts: 'buttons',
    component: Buttons,
    layouts: [Layouts.PRO],
  },
  cards: {
    parts: 'cards',
    component: Cards,
    layouts: [Layouts.PRO],
  },
  grid: {
    parts: 'grid',
    component: Grid,
    layouts: [Layouts.PRO],
  },
  notifications: {
    parts: 'notifications',
    component: Notifications,
    layouts: [Layouts.PRO],
  },
  icons: {
    parts: 'icons',
    component: Icons,
    layouts: [Layouts.PRO],
  },
  typography: {
    parts: 'typography',
    component: Typography,
    layouts: [Layouts.PRO],
  },
  elements: {
    parts: 'elements',
    component: Elements,
    layouts: [Layouts.PRO],
  },
  components: {
    parts: 'components',
    component: Components,
    layouts: [Layouts.PRO],
  },
  validation: {
    parts: 'validation',
    component: Validation,
    layouts: [Layouts.PRO],
  },
  basicTables: {
    parts: 'basic-tables',
    component: Tables,
    layouts: [Layouts.PRO],
  },
  sortable: {
    parts: 'sortable',
    component: Sortable,
    layouts: [Layouts.PRO],
  },
  reactBsTable: {
    parts: 'react-bs-table',
    component: ReactBSTables,
    layouts: [Layouts.PRO],
  },
  google: {
    parts: 'google',
    component: Google,
    layouts: [Layouts.PRO],
  },
  vector: {
    parts: 'vector',
    component: Vector,
    layouts: [Layouts.PRO],
  },
  widgets: {
    parts: 'widgets',
    component: Widgets,
    layouts: [Layouts.PRO],
  },
  charts: {
    parts: 'charts',
    component: Charts,
    layouts: [Layouts.PRO],
  },
  calendar: {
    parts: 'calendar',
    component: Calendar,
    layouts: [Layouts.PRO],
  },
};

export default routes;

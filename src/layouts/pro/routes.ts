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
import { Layout } from 'layouts/layout';

const routes = {
  dashboard: {
    parts: 'dashboard',
    component: Dashboard,
    layouts: [Layout.Pro],
  },
  alternativeDashboard: {
    parts: 'alternative-dashboard',
    component: Alternative,
    layouts: [Layout.Pro],
  },
  pricing: {
    parts: 'pricing',
    component: Pricing,
    layouts: [Layout.Pro],
  },
  login: {
    parts: 'login',
    component: Login,
    layouts: [Layout.Pro],
  },
  register: {
    parts: 'register',
    component: Register,
    layouts: [Layout.Pro],
  },
  lock: {
    parts: 'lock',
    component: Lock,
    layouts: [Layout.Pro],
  },
  timeline: {
    parts: 'timeline',
    component: Timeline,
    layouts: [Layout.Pro],
  },
  profile: {
    parts: 'profile',
    component: Profile,
    layouts: [Layout.Pro],
  },
  buttons: {
    parts: 'buttons',
    component: Buttons,
    layouts: [Layout.Pro],
  },
  cards: {
    parts: 'cards',
    component: Cards,
    layouts: [Layout.Pro],
  },
  grid: {
    parts: 'grid',
    component: Grid,
    layouts: [Layout.Pro],
  },
  notifications: {
    parts: 'notifications',
    component: Notifications,
    layouts: [Layout.Pro],
  },
  icons: {
    parts: 'icons',
    component: Icons,
    layouts: [Layout.Pro],
  },
  typography: {
    parts: 'typography',
    component: Typography,
    layouts: [Layout.Pro],
  },
  elements: {
    parts: 'elements',
    component: Elements,
    layouts: [Layout.Pro],
  },
  components: {
    parts: 'components',
    component: Components,
    layouts: [Layout.Pro],
  },
  validation: {
    parts: 'validation',
    component: Validation,
    layouts: [Layout.Pro],
  },
  basicTables: {
    parts: 'basic-tables',
    component: Tables,
    layouts: [Layout.Pro],
  },
  sortable: {
    parts: 'sortable',
    component: Sortable,
    layouts: [Layout.Pro],
  },
  reactBsTable: {
    parts: 'react-bs-table',
    component: ReactBSTables,
    layouts: [Layout.Pro],
  },
  google: {
    parts: 'google',
    component: Google,
    layouts: [Layout.Pro],
  },
  vector: {
    parts: 'vector',
    component: Vector,
    layouts: [Layout.Pro],
  },
  widgets: {
    parts: 'widgets',
    component: Widgets,
    layouts: [Layout.Pro],
  },
  charts: {
    parts: 'charts',
    component: Charts,
    layouts: [Layout.Pro],
  },
  calendar: {
    parts: 'calendar',
    component: Calendar,
    layouts: [Layout.Pro],
  },
};

export default routes;

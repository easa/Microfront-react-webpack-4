const CHANNELS = {
  // request channels
  reqLogin: 'pubsub/request/login',
  reqTheme: 'pubsub/request/theme',
  reqLang: 'pubsub/request/lang',
  reqState: 'pubsub/request/state',
  // report channels
  addStock: 'pubsub/stock/add',
  loggedIn: 'pubsub/auth/login',
  loggedOut: 'pubsub/auth/logout',
  // distribute channels
  themeChange: 'pubsub/dist/theme',
  langChange: 'pubsub/dist/lang',
  mainAuth: 'pubsub/dist/auth',
  mainState: 'pubsub/dist/state',
}

export default CHANNELS;
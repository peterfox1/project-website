export default {
  development: {
    driver: 'sqlite3',
    database: 'provan_api_dev'
  },

  test: {
    driver: 'sqlite3',
    database: 'provan_api_test'
  },

  production: {
    driver: 'sqlite3',
    database: 'provan_api_prod'
  }
};

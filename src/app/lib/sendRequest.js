import axios from 'axios';

/**
 * Generic HTTP request function
 * @param {Object} options - options to send with request
 * @param {String} options.domain - API domain to send request to
 * @param {String} options.method - HTTP Request type
 * @param {String} options.endpoint - API endpoint to send request
 * @param {String} options.accessToken - Auth0 user access token to authenticate user on API
 * @param {Object} options.body - body to send with request
 * @param {Array} options.queryVariables - query variables which are appended on the URL Request ex: [{key: 'userId', value: 12}, {key: 'businessId', value: 244}]
 * @param {String} options.responseType - type of response to expect from API
 * @returns {Promise}
 */
const sendRequest = (options) => {
  return new Promise((resolve, reject) => {
    const {
      domain,
      method,
      endpoint,
      accessToken,
      body = {},
      queryVariables = [],
      responseType = 'json'
    } = options;

    let selectedDomain = domain ? domain : '';

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      responseType,
    };

    const queryString = queryVariables.length ? '?' + queryVariables.map(query => `${query.key}=${query.value}`).join("&") : '';

    axios({
      method,
      url: `${selectedDomain}/${endpoint}${queryString}`,
      data: body,
      ...config
    }).then(response => {
      resolve(response);
    }).catch(error => {
      console.error(`Failed to send request to ${endpoint}:`, error);
      reject(error);
    });
  });
};

export default sendRequest;
import axios from 'axios';
/**
 * Base class for all services.
 * This class is used to encapsulate common API interaction in a single class,
 * and is used to prevent axios from being leaked throughout the application.
 * */
export default class RestService {
  #endpointUrl;

  /**
   * Creates an instance of the RestService.
   * @param {string} endpoint - The resource URI for the class that extends
   * this class.
   */
  constructor(endpoint) {
    this.#endpointUrl = `${process.env.VUE_APP_BASE_API_URL}/${endpoint}`;
  }

  /**
   * Get all resources from the API.
   */
  async getAll() {
    return await this._getAllIncluding();
  }

  /**
   * Gets all resources from the API, but includes the additional suffix in the
   * request. For instance, this might include additional data that should be
   * embeded, or could include paging or filtering options.
   *
   * @param {string} suffix - Additional value to be added to the root URI for
   * a list of resrouces.
   */
  async _getAllIncluding(suffix = '') {
    const response = await axios.get(`${this.#endpointUrl}/${suffix}`);
    return response.data;
  }
}

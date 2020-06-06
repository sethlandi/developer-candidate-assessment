import RestService from './RestService';

/**
 * Service implementation for getting and modifying Student resources.
 */
export default class StudentService extends RestService {
  constructor() {
    super('students');
  }
}

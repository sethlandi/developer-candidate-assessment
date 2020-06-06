import RestService from './RestService';

/**
 * Service implementation for getting and modifying Exercise resources.
 */
export default class ExerciseService extends RestService {
  constructor() {
    super('exercises');
  }
}

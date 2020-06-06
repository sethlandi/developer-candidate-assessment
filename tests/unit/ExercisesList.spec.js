import Vue from 'vue';
import { shallowMount, Wrapper } from '@vue/test-utils';
import ExerciseService from '@/services/ExerciseService';
import ExercisesList from '@/components/ExercisesList.vue';
jest.mock('@/services/ExerciseService');

describe('ExercisesList.vue', () => {
  /** @type {Wrapper<Vue>} */
  let wrapper;

  beforeEach(() => {
    ExerciseService.mockClear();
    wrapper = shallowMount(ExercisesList);
  });

  it('is a vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('loads exercises when the page is created', () => {
    expect(ExerciseService).toHaveBeenCalledTimes(1);
    expect(ExerciseService.mock.instances[0].getAll).toHaveBeenCalledTimes(1);
  });

  it('sets exercises on the vue instance from the service', async () => {
    const exercises = ['test', 'test2', 'test3'];

    ExerciseService.mockImplementation(() => {
      return {
        async getAll() {
          return exercises;
        },
      };
    });

    wrapper = shallowMount(ExercisesList);
    await Vue.nextTick();

    expect(wrapper.vm.exercises).toBe(exercises);
  });
});

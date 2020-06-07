<template>
  <div>
    <div
      class="exercise"
      :class="{ stripe: i % 2 === 0 }"
      v-for="(exercise, i) in exercises"
      :key="exercise.id"
    >
      {{ exercise.name }} 
    </div>
  </div>
</template>

<script>
import ExerciseService from '@/services/ExerciseService';

export default {
  data() {
    return {
      exercises: [],
      studentScores: [],
    };
  },
  async created() {
    const exerciseService = new ExerciseService();
    this.exercises = await exerciseService.getAll();
  },
  computed: {
    averageOfAllSections() {
      let sum = this.studentScores.reduce((currentSum, studentScore) => {
        return currentSum + studentScore.score;
      }, 0); // initialize currentSum to 0
      return (sum / this.studentScore.length).toFixed(2);
    },
    averageOfAllSection1(){
      return this.averageOfSection(this.studentScores, 1);
    },
    averageOfAllSection2(){
      return this.averageOfSection(this.studentScores, 2);
    },
    averageOfAllSection3(){
      return this.averageOfSection(this.studentScores, 3);
    },
    averageOfAllSection4(){
      return this.averageOfSection(this.studentScores, 4);
    },
    averageOfAllSection5(){
      return this.averageOfSection(this.studentScores, 5);
    },
    averageOfAllSection6(){
      return this.averageOfSection(this.studentScores, 6);
    },
    averageOfAllSection7(){
      return this.averageOfSection(this.studentScores, 7);
    },  
    averageOfAllSection8(){
      return this.averageOfSection(this.studentScores, 8);
    }
  },
  methods: {
    averageOfSection(studentScores, sectionId) {
      let count = this.studentScores.reduce((currentCount, studentScore) => {
        return currentCount + (studentScore.exerciseId === sectionId ? studentScore.score : 0);
      }, 0);// intialize currentCount to 0
      return (count / this.studentScore.length).toFixed(2);
    },
  },
};
</script>

<style scoped>
.exercise {
  display: flex;
  border-bottom: 1px solid #add8e6;
  width: 100%;
  padding: 15px;
  font-weight: 600;
  cursor: pointer;
}

.exercise:hover {
  background-color: rgba(1, 141, 255, 0.1);
}

.stripe {
  background-color: #f5f5f5;
}
</style>

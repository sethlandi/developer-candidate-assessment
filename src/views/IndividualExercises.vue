<template>
  <div>
    <h1>Exercises</h1>
    <card class="exercises">
      <individual-exercises-list />
    </card>
  </div>
</template>

<script>
import Card from '@/components/ui/Card';
import ExercisesList from '@/components/ExercisesList';

export default {
  components: { Card, ExercisesList },
  props: {
    searchValue: String
  },
  computed:{
        filteredItems() {
                return this.data.filter(item => {
                    return item.name.toLowerCase().includes(this.searchValue.toLowerCase())
                })
        }        
  },
  methods: {
        changeStatus(id,event) {
            const arrIndex = this.data.findIndex((item) => item.id == id);
            this.data[arrIndex].completed = !this.data[arrIndex].completed;
            
            // the checkbox might not have been target of the click event
            if( event.target.type != 'checkbox' ) {
                const checkbox = event.target.querySelector('input[type="checkbox"]');
                checkbox.checked = !checkbox.checked;
            }
        }
    }
}
    
</script>

};
</script>

<style scoped>
.exercises {
  width: 100%;
}
</style>

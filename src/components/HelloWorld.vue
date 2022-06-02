<template>
  <div class="wrapper">
    <div class="wrap-1">
      <input type="radio" id="tab-1" name="tabs" />
      <label for="tab-1"
        ><div>Persnol Info</div>
        <div class="cross"></div
      ></label>
      <div class="content">
        Hi there! I'am {{ users[0]}}. I was born on {{users[1]}} and am from {{users[2]}}.Currently am working as a {{users[3]}}
      </div>
    </div>

    <div class="wrap-2">
      <input type="radio" id="tab-2" name="tabs" />
      <label for="tab-2"
        ><div>Vechile I Love</div>
        <div class="cross"></div
      ></label>
      <div class="content">
        {{vehicles[0]}} color {{vehicles[1]}}
      </div>
    </div>

    <div class="wrap-3">
      <input type="radio" id="tab-3" name="tabs" />
      <label for="tab-3"
        ><div>Food I Love</div>
        <div class="cross"></div
      ></label>
      <div class="questions">
        <div class="question-wrap">
          <input type="radio" id="question-1" name="question" />
          <label for="question-1"
            ><div>Dish</div>
            <div class="cross"></div
          ></label>
          <div class="content">
            I would like to eat {{foods[0]}}
          </div>
        </div>
        <div class="question-wrap">
          <input type="radio" id="question-2" name="question" />
          <label for="question-2"
            ><div>Foodie Tip</div>
            <div class="cross"></div
          ></label>
          <div class="content">
            {{foods[1]}}
          </div>
        </div>
      </div>
    </div>
    <div>
      <button
        style="
          padding: 5px;
          margin-top:10px;
          color: white;
          background: #434af5;
          border-radius: 9%;
          border: white;
        "
        @click="getUsers"
      >
        Generate
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getUsers() {
      window.location.reload();
    },
  },
};
</script>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const users = computed(() => {
  return store.state.users;
});
const foods = computed(() => {
  return store.state.foods;
});
const vehicles = computed(() => {
  return store.state.vehicles;
});

onMounted(() => {
  store.dispatch("fetchUsers");
});
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Space Mono", monospace;
  color: #3e474f;
}

body {
  overflow: hidden;
}

.wrapper {
  max-width: 600px;
  width: 100%;
  margin: 10vh auto;
}

input {
  display: none;
}

label {
  display: flex;
  width: 100%;
  height: 50px;
  cursor: pointer;
  border: 3px solid #0d82e9;
  user-select: none;
}

label div:first-child {
  width: 100%;
  line-height: 45px;
  margin-left: 10px;
  font-size: 1.2em;
}

.cross {
  margin-right: 15px;
  margin-top: 3px;
}

.cross:before,
.cross:after {
  content: "";
  border-top: 2px solid #3e474f;
  width: 15px;
  display: block;
  margin-top: 18px;
  transition: 0.3s;
}

.cross:after {
  transform: rotate(90deg);
  margin-top: -2px;
}

.content {
  box-sizing: border-box;
  font-size: 1.1em;
  margin: 10px 10px;
  font-family: sans-serif;
  max-height: 0;
  overflow: hidden;
  transition: max-height, 0.5s;
}

input:checked ~ .content {
  max-height: 400px;
  transition: max-height, 1s;
}

input:checked ~ label .cross:before {
  transform: rotate(180deg);
}

input:checked ~ label .cross:after {
  transform: rotate(0deg);
}

.questions {
  margin-top: 20px;
  max-height: 0;
  overflow: hidden;
  transition: max-height, 0.5s;
}

.questions label {
  border: none;
  box-shadow: none;
  margin: 0;
}

input:checked ~ .questions {
  max-height: 400px;
  border-bottom: 2px solid #3e474f;
  transition: 1s;
}
</style>
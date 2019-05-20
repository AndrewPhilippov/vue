<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Animations</h1>
          <hr>
          <select v-model="alertAnimation" class="form-control">
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
          </select>
          <br><br>
          <button class="btn btn-primary" @click="show = !show">Show Alert</button>
          <br><br>
          <transition
                  appear
                  :name="alertAnimation">
            <div class="alert alert-info" v-show="show">This is some info</div>
          </transition>
          <transition
                  appear
                  name="slide"
                  type="animation">
            <div class="alert alert-info" v-if="show">This is some info</div>
          </transition>
          <transition
                  appear
                  enter-active-class="animated bounce"
                  leave-active-class="animated shake"
                  >
            <div class="alert alert-info" v-if="show">This is some info</div>
          </transition>
          <transition
                  appear
                  mode="out-in"
                  :name="alertAnimation">
            <div class="alert alert-info" v-if="show" key="info">This is some info</div>
            <div class="alert alert-warning" v-else key="warning">This is some warning info</div>
          </transition>
          <hr>
          <button class="btn btn-primary" @click="load = !load">Load / Remove element</button>
          <br><br>
          <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled"

            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @leave-cancelled="leaveCancelled"

            :css="false"
          >
            <div style="width: 300px; height: 100px; background-color: lightgreen;" v-if="load"></div>
          </transition>
          <hr>
          <button class="btn btn-primary"
            @click="
            selectedComponent == 'app-success-alert'
            ? selectedComponent = 'app-danger-alert'
            : selectedComponent = 'app-success-alert'"
          >Toggle Components</button>
          <br><br>
          <transition name="fade" mode="out-in">
            <component :is="selectedComponent"></component>
          </transition>
          <hr>
          <button class="btn btn-primary" @click="addItem">Add Item</button>
          <br><br>
          <ul class="list-group">
          <transition-group name="slide">
              <li
                      class="list-group-item"
                      v-for="(num, index) in numbers"
                      @click="removeItem(index)"
                      style="cursor: pointer;"
                      :key="num">
                {{ num }}
              </li>
          </transition-group>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dangerAlert from './components/DangerAlert.vue'
  import successAlert from './components/SuccessAlert.vue'

export default {
  name: 'app',
  data(){
    return {
      show: false,
      load: true,
      alertAnimation: 'fade',
      elWidth: 100,
      selectedComponent: 'app-success-alert',
      numbers: [1,2,3,4,5]
    }
  },
  methods: {
    beforeEnter(el){
      console.log('beforeEnter');
      this.elWidth = 100;
      el.style.width = this.elWidth + 'px';
    },
    enter(el, done){
      console.log('enter');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elWidth + round * 10) + 'px';
        round++;
        if(round > 20){
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el){
      console.log('afterEnter');
    },
    enterCancelled(el){
      console.log('enterCancelled');
    },
    beforeLeave(el){
      console.log('beforeLeave');
      this.elWidth = 300;
      el.style.width = this.elWidth + 'px';
    },
    leave(el, done){
      console.log('leave');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elWidth - round * 10) + 'px';
        round++;
        if(round > 20){
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el){
      console.log('afterLeave');
    },
    leaveCancelled(){
      console.log('leaveCancelled');
    },
    addItem(){
      const pos = Math.floor(Math.random() * this.numbers.length);
      if(this.numbers.indexOf(pos) === -1){
        this.numbers.splice(pos, 0, this.numbers.length);
      }
    },
    removeItem(index){
      this.numbers.splice(index,1);
    }
  },
  components: {
    appDangerAlert: dangerAlert,
    appSuccessAlert: successAlert
  }
}
</script>






<style>
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 1s;
  }
  .fade-leave{
    /*opacity: 1;*/
  }
  .fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
  }
  .slide-enter{
    opacity: 0;
  }
  .slide-enter-active{
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }
  .slide-leave{}
  .slide-leave-active{
    animation: slide-out 1s ease-out forwards;
    transition: opacity .5s;
    opacity: 0;
    position: absolute;
  }
  .slide-move{
    transition: transform 1s;
  }

  @keyframes slide-in {
    from{
      transform: translateY(20px);
    }
    to{
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from{
      transform: translateY(0);
    }
    to{
      transform: translateY(20px);
    }
  }
</style>

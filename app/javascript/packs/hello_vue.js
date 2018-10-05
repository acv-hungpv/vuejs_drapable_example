/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

// import Vue from 'vue'
// import App from '../app.vue'

// document.addEventListener('DOMContentLoaded', () => {
//   const el = document.body.appendChild(document.createElement('hello'))
//   const app = new Vue({
//     el,
//     render: h => h(App)
//   })

//   console.log(app)
// })

import Vue from 'vue/dist/vue.esm'
import draggable from 'vuedraggable'

export default {
  components: { draggable },
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {

  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
  var vm = new Vue({
  el: "#main",
  components: { draggable },
  data: {
    list:[{name:"John"},
        {name:"Joao"},
        {name:"Jean"} ]
    },
  methods:{
      add: function(){
        this.list.push({name:'Juan'});
      },
      replace: function(){
        this.list=[{name:'Edgard'}]
      }
    }
  });

  var vm = new Vue({
  el: "#main2",
  components: { draggable },
  data: {
    list: [{
      name: "John"
    }, {
      name: "Joao"
    }, {
      name: "Jean"
    }],
    list2: [{
      name: "Juan"
    }, {
      name: "Edgard"
    }, {
      name: "Johnson"
      }]
    },
  methods: {
    add: function() {
      this.list.push({
        name: 'Juan'
      });
    },
    replace: function() {
      this.list = [{
        name: 'Edgard'
          }]
        }
      }
    });
  var vm = new Vue({
  el: "#main3",
  components: { draggable },
  data: {
    list: [{
      name: "John"
    }, {
      name: "Joao"
    }, {
      name: "Jean"
    }],
    list2: [{
      name: "Juan"
    }, {
      name: "Edgard"
    }, {
      name: "Johnson"
    }]
  },
  methods: {
    add: function() {
      this.list.push({
        name: 'Juan'
      });
    },
    replace: function() {
      this.list = [{
        name: 'Edgard'
       }]
      }
    }
  });
  var vm = new Vue({
    el: '#app2',
    components: { draggable },
    name: 'mfgActivity',
    data: {
      machines: [
        {
          name: "H1",
          id: 1,
          jobs: [
            {
              jobNumber: "14037-12"
            },
            {
              jobNumber: "14038-13"
            },
            {
              jobNumber: "14048-15"
            }
          ]
        }
      ]
    },
    methods: {
      removeJob: function(machineId, jobNumber, jobs, index) {
        // Remove job from GUI
        jobs.splice(index, 1);
        }
      }
    })


////////////////////////////////////ERROR OR SOMETHING WRONG///////
  var localTd = {
    template: '#tr',
    props: ['item'],
    name: 'local-td'
  };

  var localTable = {
    components:{
      localTd:localTd
    },
    template: '#tab',
    props: ['value'],
    name: 'local-table',
    computed: {
      list: {
          get() {
              return this.value
          },
          set(value) {
              this.$emit('input', value)
          }
      }
    }
  };

  new Vue({
    components:{
      localTable:localTable,
      components: { draggable }

    },
    el: '#app',
    components: { draggable },

    data: {people: [
          {name: "Abby"},
          {name: "Brooke"},
          {name: "Courtenay"},
          {name: "David"}
        ],
      }

  })
/////////////////////////////////////////

  var vm = new Vue({
  el: "#main4",
  components: { draggable },
  data: {
    list: [{
      name: "John"
    }, {
      name: "Joao"
    }, {
      name: "Jean"
    }],
    list2: [{
      name: "Juan"
    }, {
      name: "Edgard"
    }, {
      name: "Johnson"
    }]
  },
  methods: {
    add: function() {
      this.list.push({
        name: 'Juan'
      });
    },
    remove: function(index){
       this.list.splice(index, 1);
    },
    replace: function() {
      this.list = [{
        name: 'Edgard'
        }]
     }
    }
  });

  new Vue({
    el: '#app11',
    data: {
      count: 0,
      x: 0,
      y: 0
    },
    methods: {
      increase: function(){
        this.count ++;
      },
      updatecoordinates: function(event){
        this.x = event.clientX;
        this.y = event.clientY;
      },
      alertme: function(){
        alert('Alert!')
      }
    }

  })
  new Vue({
    el: '#app12',
    data: {
      name: 'max'
    }
  })

  new Vue ({
    el: '#app13',
    data: {
      count: 0,
      secondcount: 0
    },
    methods: {
      result: function(){
        console.log('method');
        return this.count > 5 ? 'greater than 5' : 'smaller than 5';

      }
    },
    computed: {
      output: function(){
        console.log('computed')
        return this.count > 5 ? 'greater than 5' : 'smaller than 5';
      }
    },
    watch: {
      count: function(value){
        var vm = this
        setTimeout(function(){
          vm.count = 0
        }, 2000);
      }
    }

  })
  new Vue ({
    el: '#app14',
    data: {
      attachRed: false,
      color: 'green'
    },
    computed: {
      divClasses:function(){
        return {
          red: this.attachRed,
          blue: !this.attachRed
        }
      }
    }
  })
  Vue.component('my-cmp', {
    data: function(){
      return {
        status: 'critical'
      }
    },
    template: '<p>server status: {{status}}</p>'
  })

  var cmp = {
    data: function(){
      return {
        status: 'critical'
      }
    },
    template: '<p>server status: {{status}}</p>'
  }
  new Vue ({
    el: '#app15',
    components: {
      'my-cmp': cmp
    }
  })
  new Vue ({
    el: '#app15_2'
  })
})



// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the using turbolinks, install 'vue-turbolinks':
//
// yarn add 'vue-turbolinks'
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })

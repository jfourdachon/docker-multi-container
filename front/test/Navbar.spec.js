import Vue from "vue";
import Navbar from '../components/Navbar.vue'

describe("Navbar", () => {
    let cmp, vm;
  
    beforeEach(() => {
      cmp = Vue.extend(Navbar); // Create a copy of the original component
      vm = new cmp({
        data: {
          // Replace data value with this fake data
          messages: ["Cat"]
        }
      }).$mount(); // Instances and mounts the component
    });
  
    it('equals messages to ["Cat"]', () => {
      expect(vm.messages).toEqual(["Cat"]);
    });
  });
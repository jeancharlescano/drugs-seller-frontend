import { createWebHistory, createRouter } from "vue-router";
import Welcome from "@/views/Welcome.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Home from "@/views/Home.vue"; // "@" part de src
import MemberList from '@/views/MemberList.vue';
import DrugList from '@/views/DrugList.vue';
import PersonnalDrugList from "@/views/PersonnalDrugList.vue"


const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome 
  },

  {
    path: "/login",
    name: "Login",
    component: Login
  },
  
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  
  {
    path: "/home",
    name: "Home",
    component: Home,
  },

  {
    path: "/memberList",
    name: "MemberList",
    component: MemberList,
  },

  {
    path: "/drugslist",
    name: "DrugsList",
    component: DrugList,
  },

  {
    path: "/personnalDrugList",
    name: "PesonnalDrugList",
    component: PersonnalDrugList,
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
});

export default router;
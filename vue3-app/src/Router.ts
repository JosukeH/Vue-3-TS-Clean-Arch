import Home from "./views/Home.vue"
import Posts from './views/Posts.vue'
import Users from "./views/Users.vue"
import PostDetail from "./components/PostDetail.vue"
import UserDetail from "./components/UserDetail.vue"
import { createRouter, createWebHistory} from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '', name: "Home", component: Home},
    { path: '/users', name: "Users", component: Users},
    { path: '/posts', name: "Posts", component: Posts},
    { path: '/posts/:id', name: "PostDetail", component: PostDetail},
    { path: '/users/:id', name: "UserDetail", component: UserDetail}

  ]
})

export default router
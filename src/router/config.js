import homeRouter from '@/components/home'
import loginRouter from '@/components/login'
import demoRouter from '@/components/demo'

export const appRouter = [demoRouter]

export default {
  // mode: 'history',
  routes: [
    loginRouter,
    homeRouter,
    ...appRouter
  ]
}
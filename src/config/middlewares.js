import morgan from 'morgan'
import compression from 'compression'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import passport from 'passport'

const isDev=process.env.NODE_ENV==='development'
const isProd=process.env.NODE_ENV==='production'

export default app=>{
  if(isProd){
    app.use(compression())
    app.use(helmet())
  }
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended:true})) //for postman --to use x-www-form
  app.use(passport.initialize())

  if(isDev){
    app.use(morgan('dev'))
  }
}

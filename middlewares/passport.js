
import passport from "passport"
import passportJwt from "passport-jwt"
import Auth from '../models/Auth.js'



passport.use(
    new passportJwt.Strategy({

        jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET
    },				
    async (jwt_payload,done) => {
        console.log(jwt_payload)
        try {				

            let user = await Auth.findOne({_id:jwt_payload.id})
            console.log(user)
            if (user) {		

<<<<<<< HEAD

=======
>>>>>>> eff0fe3ddb3cd1b6e72893bd58de44d0277afd5f
                return done(null, user)
            } else {
                return done(null, false)
            }
        } catch (error) {
            console.log(error)
            return done(error,false)
        }
    }
))

export default passport
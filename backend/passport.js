const GoogleStrategy= require('passport-google-oauth20').Strategy
const passport= require('passport');
const User= require('./models/User')

passport.use(
    new GoogleStrategy(
        {
            clientID:process.env.CLIENT_ID,
            clientSecret:process.env.CLIENT_SECRET,
           callbackURL:process.env.GOOGLE_CALLBACK_URL || 'https://data-analysis-v3pv.onrender.com/auth/google/callback',
            scope:["profile","email"],
        },
        async function(accessToken,refreshToken,profile,done){
            try{
                const existingUser = await User.findOne({googleId:profile.id});
                if(existingUser){
                    return done (null,existingUser);
                }
                const newUser= await User.create({
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    name: profile.displayName,
                    avatar: profile.photos[0].value
                })
                  return done(null, newUser);
            }catch(err){
                console.error('Passport strategy error:', err);
                return done(err, null);
            }
        }
    )
)

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
})

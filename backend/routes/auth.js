const router= require('express').Router();
const passport= require('passport');


//Start Google OAuth
router.get('/google', 
    passport.authenticate('google', { 
        scope: ['profile', 'email'] 
    })
    
);

//Google redirects after callback
router.get('/google/callback',
    passport.authenticate('google',{   //passport authenticate runs the google strategy (NOTE)
        successRedirect:process.env.CLIENT_URL || 'https://data-analysis-cjd5.vercel.app',
        failureRedirect:'/auth/login/failed'
    }),
    (req, res) => {
        console.log('OAuth callback completed');
        console.log('User in callback:', req.user);
        console.log('Session in callback:', req.session);
        console.log('Session ID in callback:', req.sessionID);
        
    }
)

//Successful Login
router.get("/login/success",(req,res)=>{
    console.log('Login success route hit, user:', req.user);
    console.log('Session:', req.session);
    console.log('Session ID:', req.sessionID);
    if(req.user){
        res.status(200).json({
            error:false,
            message:"Successfully Logged In",
            user:req.user,
        })
    }else{
        res.status(403).json({error:true,message:"Not Authorized"});
    }
})


router.get('/login/failed',(req,res)=>{
    console.log('Login failed route hit');
    res.status(401).json({error:true,message:"Log In Failure"})
})





router.post('/logout',(req,res)=>{
    req.logout((err)=>{
        if(err){
            return res.status(500).json({error:true,message:"Logout Failed"})
        }
        req.session.destroy((err)=>{
            if(err){
                return res.status(500).json({error:true,message:"Logout Failed"})
            }
            res.clearCookie('connect.sid');
            return res.status(200).json({error:false,message:"Logout Successful",logoutcode:1})
        })
    })
})

module.exports= router;

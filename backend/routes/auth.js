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
        successRedirect:process.env.CLIENT_URL || 'http://localhost:5175',
        failureRedirect:'/auth/login/failed'
    })
,(req,res)=>{
    console.log('Callback route reached') //just for debugging
})

//Successful Login
router.get("/login/success",(req,res)=>{
    console.log('Login success route hit, user:', req.user);
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
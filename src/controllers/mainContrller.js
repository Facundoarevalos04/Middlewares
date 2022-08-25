module.exports={

    index : (req,res)=>{
        return res.render('index')
    },
    music : (req,res)=>{
        return res.render('music')
    },
    admin : (req,res)=>{
        return res.render('admin')
    },
    login : (req,res)=>{
        return res.render('login')
    }
}



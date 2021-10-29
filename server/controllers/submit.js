const problem_model = require('../models/problem')

var submit = async(req,res,next)=>{
    console.log(req.body.stmt);
    try{
        let problem = new problem_model({statement:req.body.stmt,
                                        name: req.body.problem_name
                                        });
        const add = await problem.save();
        return res.status(201).json({
            success: true,
            data : add  
        })
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    addProblem : submit
}
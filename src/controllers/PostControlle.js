const Postage = require('../models/Postage');

module.exports ={

    async Store(req,res){
        
        const{
            title,
            description,
            author,
        }= req.body;

        const date = new Date();
       
       const newPostage = await Postage.create({title,description,author,date});

        return res.json(newPostage);
        
    },

    async List(req,res){

        const postage = await Postage.findAll();
        return res.json(postage);


    },

    async Edit(req,res){

        const date = new Date();
        const title = req.body.title;
        const description = req.body.description;
        const author = req.body.author;

        var values ={title,description,author,date};
        
        const _id = req.params.id;
        console.log(values, _id);

       const postage = await Postage.update( values,{
            where:{
                id:_id
            }
        })
        if(postage == 1){
           return res.json({
                erro:false,
                messege:"Postagen editada com sucesso!"
            })

        }else{
          return res.status(400).json({
              erro:true,
              messege:"Erro ao editar"
          })
        }

       

    },
    async delet(req,res){
        const _id = req.params.id;
        const postage = Postage.destroy({where:{
            id:_id
        }})
        
        return res.json({
            erro:false,
            messege:"postagem deletada com sucesso!"
        
        })

    }


}
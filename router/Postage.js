const express =require('express');
const router = express.Router();
const PostControlle = require('../src/controllers/PostControlle');


//rotas 
router.route('/cria').post(PostControlle.Store);
router.route('/list').get(PostControlle.List);
router.route('/edit/:id').put(PostControlle.Edit);
router.route('/delete/:id').delete(PostControlle.delet);



module.exports = router;



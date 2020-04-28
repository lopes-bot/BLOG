const {Model, DataTypes} =require('sequelize');

class Postage extends Model{
    static init(sequelize){
        super.init(
            {
                title: DataTypes.STRING,
                description: DataTypes.STRING,
                author: DataTypes.STRING,
                date:DataTypes.DATE,
            },
            {
                sequelize,
            }
        )
    }
}

module.exports = Postage;
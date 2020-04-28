'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    

      return queryInterface.createTable('postages', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        title:{
          type: Sequelize.STRING,
        allowNull: false,

        },
        description:{
          type: Sequelize.STRING,
        allowNull: false,
        },
        author:{
          type: Sequelize.STRING,
        allowNull: false,
        },
        date:{
          type:Sequelize.DATE,
          allowNull:false

        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },

      });
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('postages');
   
  }
};

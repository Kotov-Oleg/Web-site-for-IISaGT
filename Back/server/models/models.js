// создание бд с помощью sequelize
const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Event = sequelize.define('event', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  firstName: {type: DataTypes.STRING, allowNull: false},
  lastName:  {type: DataTypes.STRING, allowNull: false},
  patronymic:  {type: DataTypes.STRING, allowNull: false},
  email:  {type: DataTypes.STRING, allowNull: false},
  nameEvent: {type: DataTypes.STRING, allowNull: false},
  places:  {type: DataTypes.INTEGER, allowNull: false},
  auditorium:  {type: DataTypes.STRING, allowNull: false},
  photo:  {type: DataTypes.STRING, allowNull: false},
  description:  {type: DataTypes.STRING, allowNull: false},
  tag1: {type: DataTypes.BOOLEAN, allowNull:false},
  tag2: {type: DataTypes.BOOLEAN, allowNull:false},
  tag3: {type: DataTypes.BOOLEAN, allowNull:false},
  tag4: {type: DataTypes.BOOLEAN, allowNull:false},
  tag5: {type: DataTypes.BOOLEAN, allowNull:false},
  tag6: {type: DataTypes.BOOLEAN, allowNull:false},
  tag7: {type: DataTypes.BOOLEAN, allowNull:false},
  tag8: {type: DataTypes.BOOLEAN, allowNull:false},
})


// экспорт всех созданных таблиц
module.exports = {
  Event,
}
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED, // 字段类型
      allowNull: false, // 是否允许为空
      primaryKey: true,  // 是不是主键
      autoIncrement: true //  是不是自增
    },
    user_name: {
      type: DataTypes.STRING(50),  // 最大长度为50个字符
      allowNull: false,
      defaultValue: ''
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'user'  // 表名
  }); 
};

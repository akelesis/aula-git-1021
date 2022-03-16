module.exports = (sequelize, DataType) => {
    const Endereco = sequelize.define('Endereco', {
        id_endereco: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cidade: DataType.STRING,
        uf: DataType.STRING,
        bairro: DataType.STRING,
        logradouro: DataType.STRING,
        numero: DataType.STRING,
        complemento: DataType.STRING,
        cep: DataType.STRING,
        fk_usuario: DataType.INTEGER
    }, {
        timestamps: false
    })

    Endereco.associate = (modelsList) => {
        Endereco.belongsTo(modelsList.Usuario, {
            foreignKey: 'fk_usuario'
        }) 
    }

    return Endereco
}
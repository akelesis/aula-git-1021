module.exports = (sequelize, DataType) => {
    const Livro = sequelize.define('Livro', {
        id_livro: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: DataType.STRING,
        ano: DataType.INTEGER,
        editora: DataType.STRING,
        autor: DataType.STRING,
        quantidade_paginas: DataType.INTEGER
    }, {
        timestamps: false
    })

    return Livro
}
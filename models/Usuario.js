import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const usuarioSchema = mongoose.Schema({

    nombre: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    token: {
        type: String, 
    },

    confirmado: {
        type: Boolean,
        default: false,
    }
},{
    timestamps: true //Crea dos columnas una de creado y otra de actualizado
});

usuarioSchema.pre('save', async function(next){
     if(!this.isModified("password")){
         next();
     }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

usuarioSchema.methods.comprobarPassword = async function(passForm){
    return await bcrypt.compare(passForm, this.password)
}

const Usuario = mongoose.model('Usuario', usuarioSchema)

export default Usuario;
import express from 'express';
import { validaUsuario} from "./src/validacao/valida.js";

const app = express();
app.use(express.json());

app.post('./usuario', async (req,res) =>{
    const {nome,email} = req.body;

    const usuarioValido = validaUsuario(nome,email);
    if (usuarioValido.status) {
        await cadrastro.usuario(nome,email);
        res.status(202).end();
        
    } else {
        res.status(404).send({mensagem: usuarioValido.mensagem})
    }
})

app.listen(9000, async () => {
    const data = new Date();
    console.log("Servidor node iniciado em: " + data);

    //const conexao = await pool.getConnection();
    //console.log(conexao.threadId);
    //conexao.release();
})

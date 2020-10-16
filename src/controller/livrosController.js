
const livros = require("../model/livros.json");
const fs = require("fs");

const getAllLivro = (req, res) => {
  console.log(req.url);
  res.status(200).send(livros);
};

const getByIdLivro = (req, res) => {
  const id = req.params.id;

  res.status(201).send(livros.find((livro) => livro.id == id));
};

const postLivro = (req, res) =>{
  console.log(req.body);
  const {id, titulo, autor, ano, estoque} = req.body;
  livros.push({id, titulo, autor, ano, estoque});
  
  fs.writeFile("./src/model/livros.json",JSON.stringify(livros),'utf8',function(err){
      if(err){
        return res.status(424).send({message: err});

      }
      console.log("Arquivo atualizado com sucesso!")
  }) 

  res.status(200).send(livros)
};

  const deleteLivro = (req, res) => {
  const id = req.params.id;
  const livroFiltrado = livros.find((livro) => livro.id == id);
  const index = livros.indexOf(livroFiltrado);
  livros.splice(index, 1);

  fs.writeFile("./src/model/livros.json",JSON.stringify(livros),'utf8',function(err){
    if(err){
      return res.status(424).send({message: err});
    }
    console.log("Arquivo atualizado com sucesso!")
  })
  res.status(200).send(livros)
  
}
const putLivro = (req, res) => {
  try{
    const id = req.params.id;
  
    const livroModificado = livros.find((livro) => livro.id == id);
    console.log(livroModificado)
  
    const livroAtualizado = req.body;
    console.log(livroAtualizado)

    const index = livros.indexOf(livroModificado);
    console.log(index)
  
    livros.splice(index, 1, livroAtualizado)
    console.log(livros)

    fs.writeFile("./src/model/livros.json", JSON.stringify(livros), 'utf8', function(err){
      if(err){
        return res.status(424).send({message: err});
      }
        console.log(livroAtualizado)
    })

    res.status(200).send(livros)
}catch(err){
  return res.status(424).send({message: err});
}

}

const patchLivro = (req, res) => {
  const id = req.params.id;
  const atualizacao = req.body;

  try {
    const livroModificado =  livros.find((livro) => livro.id == id);
    console.log(Object.keys(livroModificado))    

    Object.keys(atualizacao).forEach((chave) => {
      livroModificado[chave] = atualizacao[chave]
    });

    fs. writeFile("./src/model/livros.json", JSON.stringify(livros), "utf8", function(err){
      if (err) {
        return res.status(424).send({ message: err });        
      }
      console.log("Arquivo atualizado com sucesso");
    });

    return res.status(200).send(livros);
  } catch (err) {
    return res.status(424).send({ message: err });
  }

}

module.exports = {
  getAllLivro,
  getByIdLivro,
  postLivro,
  deleteLivro,
  putLivro, 
  patchLivro
};
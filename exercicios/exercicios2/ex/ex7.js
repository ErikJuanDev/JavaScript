

const usuarios = [{
  nome: 'Ana',
  estado:  "Online" 
},
  {
    nome: "Pedro",
    estado: "Online"
  
  },
  {
    nome: "Lucas",
    estado: "Offline"
  }
]

  const users = usuarios.filter((e) => { 
    return e.estado === "Online"
  }) 

console.log(users)
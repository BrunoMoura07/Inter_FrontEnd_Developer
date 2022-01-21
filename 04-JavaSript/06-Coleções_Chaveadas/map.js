 function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }

    }
    return admins;
 }

 const usuarios = new Map();

 usuarios.set('Zeca', 'Admin');
 usuarios.set('Jujuba', 'Admin');
 usuarios.set('Dragonoide', 'User')
 usuarios.set('Cascavelina', 'Admin');

 console.log(getAdmins(usuarios));
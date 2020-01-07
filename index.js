function recupUser() {


    fetch('https://loisirs-web-backend.cleverapps.io/users')


        .then(function (response) {

            return response.json();
        })
        .then(function (tabUsers) {
            // traitement de l'objet


            
            var names = tabUsers.map(function(user) {
                return user;
            }) 
            .map(function(user){
                return '<tr><td>' + user.id  +'</td><td>'+user.name +'</td><td>'+user.password+'</td></tr>';
            })
            
            .join('');

            console.log(names)
            document.querySelector('tbody').innerHTML = names;


        });
     


}

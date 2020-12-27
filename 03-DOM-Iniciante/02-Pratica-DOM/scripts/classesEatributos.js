// CLASSLIST
    // Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

    const menu = document.querySelector('.menu');

    menu.className; // string
    menu.classList; // lista de classes

    menu.classList.add('ativo');
    menu.classList.add('ativo', 'mobile'); // duas classes

    menu.classList.remove('ativo');
    menu.classList.toggle('ativo'); // adiciona/remove a classe

    
    if(menu.classList.contains('ativo')) {
        menu.classList.add("Possui-ativo")
    }else {
        menu.classList.add("Nao-Possui-ativo")
    }
    
    // menu.classList.replace('ativo', 'inativo');
    
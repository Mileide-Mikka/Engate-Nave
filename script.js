//classes construtora da nave
class Spaceship {
    constructor(name, crewQuantity){
        this.name = name;
        this.crewQuantity = crewQuantity;// quantidade de tripulantes
        this.isEngaged = false;// nave não esta engatada
        this.doorsOpen = false;// portas não estão abertas
    }

    engaged(){//altera as propriedades para verdadeiro quando elas estiverem engatadas
        this.isEngaged = true;// nave esta engatada
        this.doorsOpen = true;// portas estão abertas
    }
}

function showMessageMenu(){// exibe o menu e valida a opção que o usuario escolheu
    let chosenOption
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3"){
        chosenOption = prompt("Olá sou a AVII sua assistente de bordo\n" + 
                                "O que deseja fazer?\n" +
                                "1- Engatar a Nave\n" +
                                "2- Imprimir a Nave\n" +
                                "3- Sair do programa")
    }
    return chosenOption
};

function createSpaceShip(){// criação da nave
    let shipName = prompt("Informe o nome da Nave: ");
    let crewQuantity = prompt("Informe a quantidade de tripulantes: ");
    let spaceship = new Spaceship(shipName, crewQuantity)
    return spaceship
};

function printShipList(spaceShips){// imprime em tela a lista de nomes das naves e a quantidade de tripulantes
    let shipList = "";
    spaceShips.forEach((spaceShip, index) => {
        shipList += (index + 1) + "- " + spaceShip.name + " ( " + spaceShip.crewQuantity + " tripulantes)\n"
    });

    alert(shipList);
};

let engagedSpaceShip = [];// lista de espaçonaves que estão engatadas na estação

let chosenOption

while (chosenOption != "3"){
    chosenOption = showMessageMenu()
    switch (chosenOption){
        case "1":
            let spaceshipToAdd = createSpaceShip()
            spaceshipToAdd.engaged()
            engagedSpaceShip.push(spaceshipToAdd)
        break
        case "2":
            printShipList(engagedSpaceShip)
        break
    }
};
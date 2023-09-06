"use strict";

// DEF ----defines a function with exactly one single numeric argument which can be executed with FN afterwards

// FN is used in the following two constructions:
//
// as part of a DEF FN definition like DEF FN <function name>(<variable>)=<expression_using_placehholder_variable>
// calling the previously defined function like FN <function name>(<numeric expression>), described as follows ...

// R$ ---- строковая переменная?

function tab(space) {
  let str = "";
  while (space-- > 0)
    str += " ";
  return str;
}

function print(str) {
  document.getElementById("output").appendChild(document.createTextNode(str));
}

function input() {
  let input_element;
  let input_str;

  return new Promise(function (resolve) {
    input_element = document.createElement("INPUT");

    print("? ");
    input_element.setAttribute("type", "text");
    input_element.setAttribute("length", "50");
    document.getElementById("output").appendChild(input_element);
    input_element.focus();
    input_str = undefined;
    input_element.addEventListener("keydown", function (event) {
      if (event.keyCode === 13) {
        input_str = input_element.value;
        document.getElementById("output").removeChild(input_element);
        print(input_str);
        print("\n");
        resolve(input_str);
      }
    });
  });
}

// todo Z - кол-во рандомных значений?
function FNR(Z) {
  return Math.floor(Z * Math.random());
}

const data_content = [
  "A POT OF GOLD",
  "A BEAUTIFUL MAIDEN",
  "A MAN EATING TIGER",
  "NOTHING",
  "$22.59",
  "A ROLLS ROYCE",
  "THE KEYS TO THE WORLD"
]

const data_sound = [
  "OPEN SESAME!",
  "C-R-E-E-E-E-E-A-A-K!",
  "WA LAH!",
  "TA-DAH!",
  "ABRACADABRA!",
  "CLICK !!!!!!!!?!???????!!!!!!!!",
  "SURPRISE!"
]

// todo нужно ли значение 20, если при заполнении через push добавляются новые
// let K_array_of_right_keys = new Array(20);
let K_array_of_right_keys = new Array(0);

let D_current_door = 1;

//адекватное кол-во попыток
// let T_tries = 10 + FNR(21);

// читкод
let T_tries = 10000000000;

let N_locked_doors = 3 + FNR(3);
let K3_keys = 8 + FNR(5);


async function main() {
  async function start() {
    print("\n");
    print(`THERE ARE ${N_locked_doors} LOCKED DOORS AND THERE ARE ${K3_keys} KEYS (0-${K3_keys - 1})\n`);
    print(`YOU WILL HAVE ${T_tries - 1} TRIES TO OPEN THEM ALL\n`);
    print(`(SOME KEYS MAY OPEN MORE THAN ONE DOOR)\n\n`);

    //todo заполнение массива
    for (let x = 2; x <= N_locked_doors; x++) {
      // K_array_of_right_keys.fill(FNR(K3_keys));
      K_array_of_right_keys.push(FNR(K3_keys));
      console.log(K_array_of_right_keys);
    }

    Tries();
    await CurrentTry();

  }

  function Tries() {
    T_tries = T_tries - 1;
  }

  async function CurrentTry() {
    print(`TRIES LEFT = ${T_tries}       DOOR #${D_current_door}  KEY`)
    let K2_chosen_door = await input();

    // правильный ключ от текущей двери

    // через do while пока ключ не будет правильный?
    if (K2_chosen_door === K_array_of_right_keys[D_current_door]) {
      Tries();

      print(`${data_sound[FNR(7)]} \n`);
      D_current_door = D_current_door + 1;
      await CurrentTry();
    }
    // все двери открыты
    else if (D_current_door < N_locked_doors + 1) {
      Tries();
      await Victory();
    }
    else if (T_tries === 0) {
      loose();
    }
    else await CurrentTry();

  }

  function loose() {
    print(`YOU LOSE,  THE REST OF THE KEYS ARE:\n`);

    for (let X = D_current_door; X <= N_locked_doors; X++) {
      print(`DOOR ${X} \n KEY ${K_array_of_right_keys[X]}  \n`);
    }
  }

  async function Victory() {
    print("\n");
    print(`YOU DID IT, BEHIND DOOR #${N_locked_doors} IS...........................\n`);
    print(`${data_content[FNR(7)]} !!\n`);

    await Question();
  }

  async function Question() {
    print(`DO YOU WANT TO PLAY AGAIN(YES SIR! OR NO SIR!\n`)
    let Q = await input();
    if (Q === "YES SIR!") {
      await start();
    }
    if (Q === "NO SIR!") {
      return 0;
    } else {
      print(`HEY, I DIDN'T JUST FALL OFF A TURNIP TRUCK, YA KNOW!!!!!\n`);
      await Question();
    }
  }

  print(tab(27) + "DOORS\n");
  print(tab(20) + "CREATIVE COMPUTING\n");
  print(tab(18) + "MORRISTOWN, NEW JERSEY\n");
  print("\n");
  print("\n");
  print("\n");

  await start();

  // FOR X=0 TO 6:READ R$(X):NEXT X
  for (let x = 0; x <= 6; x++) {
    // R[X]
  }
  // FOR X=0 TO 6: READ S$(X):NEXT X
  for (let x = 0; x <= 6; x++) {
    // S[X]
  }

}

main();

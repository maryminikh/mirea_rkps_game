"use strict";

// DEF ----defines a function with exactly one single numeric argument which can be executed with FN afterwards

// FN is used in the following two constructions:
//
// as part of a DEF FN definition like DEF FN <function name>(<variable>)=<expression_using_placehholder_variable>
// calling the previously defined function like FN <function name>(<numeric expression>), described as follows ...

// todo
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

//

async function main() {
  print(tab(27) + "DOORS\n");
  print(tab(20) + "CREATIVE COMPUTING\n");
  print(tab(18) + "MORRISTOWN, NEW JERSEY\n");
  print("\n");
  print("\n");
  print("\n");

  // DIM K(20) ---- объявление переменной или массива 20 элеме
  let K = [0, 0];

  // DEF FNR(Z)=INT(Z*RND(1)) ---- gives a different random number
  function FNR(Z) {
    return Z * Math.random();
  }

  // todo
  //

  // FOR X=0 TO 6:READ R$(X):NEXT X
  for (let x = 0; x <= 6; x++) {
    // R[X]
  }

  // FOR X=0 TO 6: READ S$(X):NEXT X
  for (let x = 0; x <= 6; x++) {
    // S[X]

  }


  START:
    do {
      // 35 D=1:T=10+FNR(21):N=3+FNR(3):K3=8+FNR(5)
      let D = 1;
      let T = 10 + FNR(21);
      let N = 3 + FNR(3);
      let K3 = 8 + FNR(5);


      // 40 PRINT"THERE ARE";N;"LOCKED DOORS AND THERE ARE";K3;"KEYS(0-"K3-1")"
      // 41 PRINT"YOU WILL HAVE ";T-1;"TRIES TO OPEN THEM ALL"
      // 42 PRINT"(SOME KEYS MAY OPEN MORE THAN ONE DOOR)"
      print(`THERE ARE ${N} LOCKED DOORS AND THERE ARE ${K3} KEYS(0-${K3 - 1})\n`);
      print(`YOU WILL HAVE ${T - 1} TRIES TO OPEN THEM ALL\n`);
      print(`(SOME KEYS MAY OPEN MORE THAN ONE DOOR)\n`);

      // 65 FOR X=2 TO N:K(X)=FNR(K3):NEXT X
      for (let x = 2; x <= N; x++) {
        K[x] = FNR(K3);
      }

      // 70 T=T-1:IF T=0 THEN 150
      T = T - 1;
      if (T === 0) break START;

      // 80 PRINT"TRIES LEFT =";T;"           DOOR #";D;"KEY";
      // 90 INPUT K2
      // 100 IF K2<>K(D) THEN 70
      // 110 PRINT S$(FNR(7)):D=D+1
      print(`TRIES LEFT = ${T}       DOOR # ${D}  KEY\n`)
      let K2 = await input();
      if (K2 !== K[D]) {
// 70 T=T-1:IF T=0 THEN 150
      }

      // 120 IF D<N+1 THEN 70

      // 125 PRINT
      // 130 PRINT"YOU DID IT, BEHIND DOOR #";N;"IS..........................."
      // 140 PRINT R$(FNR(7)) "!!":GOTO 170


      // 150 PRINT"YOU LOSE,  THE REST OF THE KEYS ARE:"
      // 160 FOR X=D TO N:PRINT"DOOR";X;"KEY"K(X):NEXT X

      print(`YOU LOSE,  THE REST OF THE KEYS ARE:\n`);
      for (let X = D; N; X++) {
        print(`DOOR ${X} \n KEY ${K[X]}\n`);
      }

      // 170 PRINT"DO YOU WANT TO PLAY AGAIN(YES SIR! OR NO SIR!)"
      // 171 INPUT Q$
      // 180 IF Q$="YES SIR!" THEN 35
      // 181 IF Q$="NO SIR!" THEN 999
      // 190 PRINT"HEY, I DIDN'T JUST FALL OFF A TURNIP TRUCK, YA KNOW!!!!!"
      // 200 GOTO 170
      print(`DO YOU WANT TO PLAY AGAIN(YES SIR! OR NO SIR!\n`)
      let Q = await input();
      if (Q === "YES SIR!") continue START;

      if (Q === "NO SIR!") {
        break START;
      } else print(`HEY, I DIDN'T JUST FALL OFF A TURNIP TRUCK, YA KNOW!!!!!\n`);


    } while (0);


  // 500 DATA"A POT OF GOLD","A BEAUTIFUL MAIDEN","A MAN EATING TIGER"
  // 505 DATA"NOTHING","$22.59","A ROLLS ROYCE","THE KEYS TO THE WORLD"
  // 600 DATA"OPEN SESAME!","C-R-E-E-E-E-E-A-A-K!","WA LAH!","TA-DAH!"
  // 605 DATA"ABRACADABRA!", "CLICK !!!!!!!!?!???????!!!!!!!!", "SURPRISE!"
  // 999 END


}

main();

// 여기에 class를 작성하세요
class Wizard {
    constructor(health, mana, armor) {   /*생성자 함수가 있어야 한다. 
                                           객체에서 instance가 실행이 될때 반드시 실행이 되는 함수이다.
                                           객체를 초기화 해주는 역할을 한다. */
        this.health = health; /*health는 Wizard class를 통해 만들어진 instance의
                                health이다라는 것을 this 키워드를 통해 분명하게 선언해주는 것이다. */
        this.mana = mana;
        this.armor = armor;
        //console.log("construction compleate");

    }
    attack() {
        console.log("파이어볼");
    }
}



const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();


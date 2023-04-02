// Задание 3

// Реализовать следующее мини-приложение
// https://gist.github.com/zhekix

class Logo {
    constructor(url) {
      this.top = 0;
      this.left = 0;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
    }
  
    init() {
      // метод должен создать тег img
      const img = document.createElement("img");
      // вложить в него src картинки (this.imgUrl)
      img.src = this.imgUrl;
      // и записать в this.html
      this.html = img;
      // + странице должен залится фон черным
      document.body.style.background = "black";
      // + дергаем render
      this.render();
    }
    
    render() {
      // метод должен отрисовать изображение (this.html) на странице
      document.body.append(this.html);
      // применить фиксированное позиционирование
      // использовать this.top и this.left для указания позиции
      this.html.style.position = "fixed";
      this.html.style.top = `${this.top}px`;
      this.html.style.left = `${this.left}px`;
      // использовать this.width для указания ширины
      this.html.width = this.width;
    }
  
    moveUp() {
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся ВЫШЕ
      // на 20px
      this.top += -20;
      // + дергаем render
      this.render();
    }
    moveDown() {
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся НИЖЕ
      // на 20px
      this.top += 20;
      // + дергаем render
      this.render();
    }
    moveLeft() {
      // метод должен изменять left нашего объекта так
      // чтобы элемент передвинулся ЛЕВЕЕ
      // на 20px
      this.left += -20;
      // + дергаем render
      this.render();
    }
    moveRight() {
      // метод должен изменять left нашего объекта так
      // чтобы элемент передвинулся ПРАВЕЕ
      // на 20px
      this.left += 20;
      // + дергаем render
      this.render();
    }
  }
  
  const imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png';
  var mfLogotip = new Logo(imgUrl);
  console.log(mfLogotip);
  
  // запускаем наше микро-приложение
  mfLogotip.init();


  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  // something else, чтобы всё работало


//  Задание 4

//  Добавить к приложению желтый круг (пример ЗДЕСЬ)
//  Реализовать с помощью класса Circle, который принимает аргументы size (ширина и высота фигуры), color (цвет фигуры). При вызове метода render() из экземпляра класса Circle должен отрисоваться круг с заданными стилями.
//  Сделать по примеру из последнего видео в уроке.

class Circle extends Logo {
    constructor(top, left, size, width) {
        super(top, left, width);
        this.size = size;
        this.width = size.width
        this.radius = "50%";
        this.html = null;
    }

    render() {
        let circle = document.createElement("div");
        this.html = circle;
        let {width, height} = this.size;
        this.html.style.backgroundColor = this.color;
        cirthis.htmlcle.style.width = `${this.size.width}px`;
        this.html.style.height = `${this.size.height}px`;
        this.html.style.borderRadius = this.radius;
        
        document.body.append(this.html);
        super.render(this.top, this.left)
    }
}
let circle = new Circle({width: 150, height: 150}, "red");
circle.render();
console.log(circle);
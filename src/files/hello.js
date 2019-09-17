class Hello {
  constructor(text) {
    this.text = text;
  }
  sayHello() {
    return console.log(`Hello from ${this.text}`);
  }
}

export default Hello;

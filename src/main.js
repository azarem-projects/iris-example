class About {
  render() {
    return /* html */ `
      <div>
        About
      </div>
    `
  }
}

class Greeting {
  render() {
    return /* html */ `
      <div>
        Hello!
      </div>
    `
  }
}

class App {
  render() {
    return /* html */ `
      <div>
        <Iris.Router />
      </div>
    `
  }
}

Iris.install(new Router({
  baseUrl: '/iris-example/src',
  routes: [
    {
      path: '/greeting',
      component: Greeting
    }
  ]
}))

Iris.mount(App, '#root');

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
  baseUrl: '/src',
  routes: [
    {
      path: '/',
      component: Iris.Empty
    },
    {
      path: '/greeting',
      component: Greeting
    }
  ]
}))

Iris.mount(App, '#root');

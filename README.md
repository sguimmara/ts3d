# X3

X3 is a toy project to use [Three.js](https://threejs.org/) from [Typescript](https://www.typescriptlang.org/).

## Getting started

Install the packages

```shell
yarn install
```

Start the server

```shell
yarn run build
yarn run start
```

Open your browser on <http://localhost:8080/basics.html>.

## Architecture

```mermaid
classDiagram

    class `x3::X3` {
        +update()
    }

    class `x3::Renderer` {
        +update()
    }

    class `THREE::WebGLRenderer` {
        +render()
    }

    `x3::X3` o-- `x3::Renderer`
    `x3::Renderer` o-- `THREE::Scene`
    `x3::Renderer` o-- `THREE::Camera`
    `x3::Renderer` o-- `THREE::WebGLRenderer`
```

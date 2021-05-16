# Shopping cart react


## Table of Contents

<!-- vscode-markdown-toc -->
0. [Requirements](#Requirements)
1. [Intro](#Intro)
2. [Shopping-api](#ShoppingApi)
3. [Installation](#Installation)
    1. [Node](#Node)
    2. [Makefile](#Makefile)
    3. [Docker](#Docker)
4. [Usage](#Usage)
5. [Tests](#Tests)
6. [License](#License)
9. [Next steps](#NextSteps)


## 0. <a name='Requirements'></a>Requirements

Before of all take a look at .env.sample file which contains the necessary keys for the application works properly.

Create a file name .env and set the keys from .env.sample (if you not be using the docker enviroment)

## 1. <a name='Intro'></a>Intro

The shopping-frontend is a graphql frontend built in create-react-app used as a basic ecomerce functions, such as:
1.  List produts.
2.  Cart manipulation
    1.  Add and remove
    2.  Increase/decrease items from cart
3. Checkout.

Initially it was desined to consider a default user authenticated from backend but not saving any jwt.

### 1.2. Applications images

#### 1.2.1 List view
![picture](/public/images/list_products.png)

#### 1.2.2 Cart view
![picture](/public/images/cart_view.png)
#### 1.2.3 Checkout
![picture](/public/images/checkout.png)


## 2. 📦 <a name='ShoppingApi'></a>Shopping Api

This api it was designed based on the [shopping-api](https://github.com/cdjohnnatha/shopping-api)

# Install and build api and frontend together:
## 2.1 📦 <a name='folderCreation'></a>Folder creation
```
  $ mkdir shopping
  $ cd shopping
  $ touch docker-compose.yaml
```

## 2.2 Open the docker-compose.yaml and use as base the setup bellow:

```
  version: '3.8'

services:
  mongodb:
    image: mongo
    restart: unless-stopped
    # environment:
      # - MONGO_INITDB_ROOT_USERNAME=admin
      # - MONGO_INITDB_ROOT_PASSWORD=admin
    ports:
      - 27017:27017
    volumes:
      - mongo_shared:/data/db
  shopping-cart-react:
    build:
        context: ./shopping-cart-react
    command: npm start
    container_name: shopping-cart-react
    restart: unless-stopped
    ports:
      - 4200:3000
    enviroment:
      - REACT_APP_API_URL='http://localhost:3000/api'
      - REACT_APP_API_SERVER='http://localhost:3000'
    volumes:
      - ./shopping-cart-react:/usr/src/app
      - /shopping-cart-react/node_modules
  shopping-api:
    build:
        context: ./shopping-api
    command: npm run dev
    container_name: shopping-api
    environment:
      - MONGO_HOST=mongodb
      - MONGO_PORT=27017
    restart: unless-stopped
    ports:
      - 3000:3000
    links:
      - mongodb
    depends_on:
      - mongodb
    volumes:
      - ./shopping-api:/usr/src/app
      # - /shopping-api/node_modules
volumes:
  mongo_shared:
```
## 2.3 Clone both projects at the directory

```
    $   git clone https://github.com/cdjohnnatha/shopping-api

    $ git clone https://github.com/cdjohnnatha/shopping-cart-react
```

## 2.4 Run the project
```
    $   docker-compose up
```

---
---
# Run Standalone project
## 3. 📦 <a name='Installation'></a>Installation

You have 3 options to setup the project use one of them.
1. Docker
2. Makefile
3. Node

### 3.0 Dependencies

**It is highly recommend to use docker otherwhise you have to consider install [mongodb](https://docs.mongodb.com/manual/installation/) as well**

* [node](https://nodejs.org/en/)
* [docker](https://docs.docker.com/engine/install/ubuntu/)
* [docker-compose](https://docs.docker.com/compose/install/)

### 3.1 Node
Inside of project directory run the commands bellow:
```
  npm install
  npm start
```

### 3.2 Makefile
Inside of project directory run the commands bellow:
```
    make production_docker
    // or 
    make install    
    make production
```
### 3.3 Docker

#### Dependencies

***You need to have a docker and docker-compose installed in your machine.***

```
    docker build -t shopping-cart-react .
    docker run -p 4200:3000 -t shopping-cart-react
```

## 4. 📖 <a name='Usage'></a>Usage

At very first beginning it is necessary to create a .env file to the application work properly.

You can take a look at .env.sample where you will find the keys necessary to run the project.


## 5. 📄 <a name='Tests'></a>Tests

You can run the applications tests with

```
  npm test
```

## 6. 📄 <a name='License'></a>License
Simple Object Handler is [MIT licensed](./LICENSE).

## 7. 📄 <a name='NextSteps'></a>NextSteps
1. Create authentication pages such as sign in/sign up
2. Change the entire project to be in a microservice frontend
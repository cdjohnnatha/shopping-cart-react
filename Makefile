production_docker:
	docker build -t shopping-cart-react .
    docker run -p 4200:3000 -t shopping-cart-react
install_dependencies:
	npm install
production:
	npm start
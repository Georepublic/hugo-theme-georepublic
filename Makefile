ASSETS_DIR_JS := assets/js/vendor
ASSETS_DIR_CSS := assets/css/vendor
ASSETS_DIR_SASS := assets/sass/vendor
STATIC_DIR := static
build-js:
	mkdir -p $(ASSETS_DIR_JS)
	cp node_modules/@popperjs/core/dist/umd/popper.min.js $(ASSETS_DIR_JS)
	cp node_modules/bootstrap/dist/js/bootstrap.min.js $(ASSETS_DIR_JS)
	cp node_modules/cookieconsent/build/cookieconsent.min.js $(ASSETS_DIR_JS)

	mkdir -p $(STATIC_DIR)/elements/fa-sprites/
	cp node_modules/bootstrap-icons/bootstrap-icons.svg $(STATIC_DIR)/elements/
	cp node_modules/feather-icons/dist/feather-sprite.svg $(STATIC_DIR)/elements/
	cp node_modules/@fortawesome/fontawesome-free/sprites/* $(STATIC_DIR)/elements/fa-sprites/
build-css:
	mkdir -p $(ASSETS_DIR_SASS)/bootstrap/
	cp -r node_modules/bootstrap/scss/* $(ASSETS_DIR_SASS)/bootstrap/
	cp node_modules/cookieconsent/build/cookieconsent.min.css $(ASSETS_DIR_CSS)
build-theme:
	docker build -t hugo-georepublic-theme .
	docker run --rm -v $(PWD)/assets:/src/assets -v $(PWD)/static:/src/static hugo-georepublic-theme

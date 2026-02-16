.PHONY: *

format:
	uv run ruff check --fix
	uv run ruff format

quality:
	uv run mypy src
	uv run ruff check src
	uv run ruff format --check src

init_sdk:
	if [ ! -d "xblock-sdk" ] ; then git clone https://github.com/openedx/xblock-sdk.git; fi
	uv pip install -e xblock-sdk
	# This may need to be updated if upstream changes how they organize their
	# requirements. We can't use 'pip' here because it doesn't exist in a uv
	# environment. It is, however, handled by the uv pip subcommand.
	uv pip install -r xblock-sdk/requirements/dev.txt
	uv pip install -r xblock-sdk/requirements/local.txt
	cd xblock-sdk && uv run ./manage.py migrate

dev:
	cd xblock-sdk && uv run ./manage.py runserver

test.python:
	DJANGO_SETTINGS_MODULE=workbench.settings uv run pytest src

test: quality test.python

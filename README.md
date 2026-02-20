# Cover Block

The Cover XBlock is a custom block meant to be used as an aesthetically pleasing block intended for use as a section introduction. **It is a quick and dirty block intended to be replaced by a planned upcoming template block.**

## Installation

You can add this block to your requirements in your [Tutor](https://docs.tutor.edly.io/) installation's `config.yml` file:

```yaml
OPENEDX_EXTRA_PIP_REQUIREMENTS:
  # ...
  - git+https://gitlab.com/opencraft/dev/cover-block.git@main#egg=cover-block
```

Then rebuild your openedx image with:

```bash
tutor images build openedx
```

Or, in a development environment:

```bash
tutor images build openedx-dev
```

Then restart your tutor installation. For example, in a development environment:

```bash
# using tutor dev restart may not reload the container image.
tutor dev stop && tutor dev start
```

### Enabling in your course

Once installed, visit your course in studio and go to 'Settings->Advanced Settings'. In the Advanced module list, add `"cover"`. See the [Open edX documentation](https://docs.openedx.org/en/latest/educators/how-tos/course_development/exercise_tools/enable_exercises_tools.html#enable-additional-exercises-and-tools) for more information.

## Development Workflow

To begin development on this block, install [mise](https://mise.jdx.dev/getting-started.html), clone this repository, enter the directory, and run:

```bash
mise trust
```

This will trust the project for mise, and prepare the environment for you, installing prereqs. You may additionally need to install [uv](docs.astral.sh/uv/), though Mise might install it for you.

Next, set up the XBlock sdk:

```bash
make init_sdk
```

...and then to start a development server, run:

```bash
make dev
```

You can run formatting with:

```bash
make format
```

And run the tests with:

```bash
make test
```

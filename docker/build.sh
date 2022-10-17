#!/bin/sh

echo "Building docker releases"

# SET DEFAULT PARAMETERS IF EMPTY
OPENBBTERMINAL_DOCKER_REGISTRY="${OPENBBTERMINAL_DOCKER_REGISTRY:-ghcr.io}"
OPENBBTERMINAL_DOCKER_GITHUB_REPOSITORY="${OPENBBTERMINAL_DOCKER_GITHUB_REPOSITORY:-openbb-finance}"
OPENBBTERMINAL_DOCKER_RELEASE_VERSION="${OPENBBTERMINAL_DOCKER_RELEASE_VERSION:-0.0.1}"
# SET IMAGES NAMES
OPENBBTERMINAL_DOCKER_PYTHON_IMAGE=${OPENBBTERMINAL_DOCKER_REGISTRY}/${OPENBBTERMINAL_DOCKER_GITHUB_REPOSITORY}/openbbterminal-python:${OPENBBTERMINAL_DOCKER_RELEASE_VERSION}
OPENBBTERMINAL_DOCKER_POETRY_DEPS_IMAGE=${OPENBBTERMINAL_DOCKER_REGISTRY}/${OPENBBTERMINAL_DOCKER_GITHUB_REPOSITORY}/openbbterminal-poetry-deps:${OPENBBTERMINAL_DOCKER_RELEASE_VERSION}
OPENBBTERMINAL_DOCKER_POETRY_IMAGE=${OPENBBTERMINAL_DOCKER_REGISTRY}/${OPENBBTERMINAL_DOCKER_GITHUB_REPOSITORY}/openbbterminal-poetry:${OPENBBTERMINAL_DOCKER_RELEASE_VERSION}

# DISPLAY PARAMETERS
echo "OPENBBTERMINAL_DOCKER_REGISTRY = $OPENBBTERMINAL_DOCKER_REGISTRY"
echo "OPENBBTERMINAL_DOCKER_GITHUB_REPOSITORY = $OPENBBTERMINAL_DOCKER_GITHUB_REPOSITORY"
echo "OPENBBTERMINAL_DOCKER_RELEASE_VERSION = $OPENBBTERMINAL_DOCKER_RELEASE_VERSION"
# DISPLAY IMAGES NAMES
echo "OPENBBTERMINAL_DOCKER_PYTHON_IMAGE = $OPENBBTERMINAL_DOCKER_PYTHON_IMAGE"
echo "OPENBBTERMINAL_DOCKER_POETRY_DEPS_IMAGE = $OPENBBTERMINAL_DOCKER_POETRY_DEPS_IMAGE"
echo "OPENBBTERMINAL_DOCKER_POETRY_IMAGE = $OPENBBTERMINAL_DOCKER_POETRY_IMAGE"

docker build -f docker/openbbterminal-python.dockerfile -t "${OPENBBTERMINAL_DOCKER_PYTHON_IMAGE}" .
docker build -f docker/openbbterminal-poetry-deps.dockerfile -t "${OPENBBTERMINAL_DOCKER_POETRY_DEPS_IMAGE}" .
docker build -f docker/openbbterminal-poetry.dockerfile -t "${OPENBBTERMINAL_DOCKER_POETRY_IMAGE}" .

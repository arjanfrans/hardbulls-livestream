#!/bin/sh -e

docker run -it -v "${PWD}:/app" -w "/app" -p "3000:3000" --entrypoint "/bin/bash" node

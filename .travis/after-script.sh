#!/bin/bash
if [[ "$TRAVIS_PULL_REQUEST" == "false" && "$TRAVIS_NODE_VERSION" == "8" ]]
then
    yarn codecov
fi

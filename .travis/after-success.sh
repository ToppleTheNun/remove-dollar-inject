#!/bin/bash
if [[ "$TRAVIS_PULL_REQUEST" == "false" && "$TRAVIS_NODE_VERSION" == "12" ]]
then
    npm run semantic-release
fi

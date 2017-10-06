# after-script.sh
#!/bin/bash
if [[ "$TRAVIS_PULL_REQUEST" == "false" && "$TRAVIS_NODE_VERSION" == "8" ]]
then
    npm run semantic-release
fi
# after-script.sh
#!/bin/bash
if [[ "$TRAVIS_PULL_REQUEST" == "false" && "$TRAVIS_NODE_VERSION" == "8" ]]
then
    ./cc-test-reporter after-build --exit-code $TRAVIS_TEST_RESULT
fi
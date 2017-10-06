# after-script.sh
#!/bin/bash
echo "TRAVIS_NODE_VERSION=$TRAVIS_NODE_VERSION"
if [ "$TRAVIS_PULL_REQUEST" == "false" ]
then
    echo "We're not in a pull request!"
    # ./cc-test-reporter after-build --exit-code $TRAVIS_TEST_RESULT
fi
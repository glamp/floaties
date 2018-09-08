#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

echo "*** colorize ***"
echo "foo
bar
baz" | node "${DIR}/colorize.js"

echo ""

echo "*** prepend ***"
echo "foo
bar
baz" | node "${DIR}/prepend.js"

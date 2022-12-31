#!/bin/bash
# Send a request to a URL and display the status code of the response
curl -sI "$1" -o /dev/null -w '%{http_code}' -s

#!/bin/bash
# Takes in a URL, sends a request to a URL and displayes the size of the body of the respose
curl -sI "$@" | grep 'Content-Length' | cut -d ' ' -f2

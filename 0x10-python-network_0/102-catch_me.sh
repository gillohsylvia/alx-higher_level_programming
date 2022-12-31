#!/bin/bash
# Sends a JSON POST request to a URL and displays a body of response
curl -sX POST "$1" -H 'Content-Type: application/json' -d "$(cat "$2")"

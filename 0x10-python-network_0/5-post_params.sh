#!/bin/bash
# Send a POST request to the passed URL and displays the body of responses
curl -sL "$1" -d "email=test@gmail.com" -d "subject=I will always be here for PLD"

#!/bin/bash
# Send a DELETE request to the URL based on the first argument and displayes the body of the response
curl -sL "$1" -X DELETE

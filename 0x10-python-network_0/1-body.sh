#!/bin/bash

# Check if a URL was provided as an argument
if [ -z "$1" ]; then
	  echo "Error: No URL provided"
	    exit 1
fi

# Send the GET request and save the response to a variable
response=$(curl -sL "$1")

# Check if the request was successful
if [ $? -eq 0 ]; then
	  # Display the response body
	    echo "$response"
    else
	      # Display an error message
	        echo "Error: Failed to send request"
		  exit 1
fi


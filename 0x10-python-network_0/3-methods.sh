#!/bin/bash
# Displays all HTTP methods the server will accept from a URL
curl -si "$1" | grep -w 'Allow' | cut -d ' ' -f2-

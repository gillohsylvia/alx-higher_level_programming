#!/bin/bash
# Send a header variable X-School-User-Id with value 98 to the URL
curl -sL "$1" -H "X-School-User-Id:98"

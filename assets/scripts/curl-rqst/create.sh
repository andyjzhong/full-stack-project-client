#TOKEN='BAhJIiVhM2VhZDUzNWM4YzEzOTkxMzY1NWYyYjFiNTk5NTM4MQY6BkVG--404255de9d79fe1d99d8f2103d7311d57006a6c7' MAKE='make-test' MODEL='model-test' YEAR=2000 COLOR='color-test'sh scripts/curl-rqst/create.sh

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/cars"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "car": {
      "make": "'"${MAKE}"'",
      "model": "'"${MODEL}"'",
      "year": "'"${YEAR}"'",
      "color": "'"${COLOR}"'"
    }
  }'
